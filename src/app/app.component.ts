import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil, filter } from 'rxjs/operators';

import {
  ActionAuthLogin,
  ActionAuthLogout,
  selectorAuth,
  routerTransition
} from '@app/core';
import { environment as env } from '@env/environment';

import { NIGHT_MODE_THEME, selectorSettings, SettingsState } from './settings';
import { Subject } from 'rxjs';

@Component({
  selector: 'supreme-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();


  @HostBinding('class') componentCssClass;

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/logo.png');
  // Add new navbar links here
  navigation = [
    { link: 'home', label: 'Home'},
    { link: 'blog', label: 'Blog'},
    { link: 'about', label: 'About' },
    { link: 'features', label: 'Features' },
    { link: 'admin', label: 'Admin' },
    // { link: 'examples', label: 'Examples' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];
  isAuthenticated;

  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<any>,
    private router: Router,
    private titleService: Title,
    // private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.subscribeToSettings();
    this.subscribeToIsAuthenticated();
    this.subscribeToRouterEvents();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());
  }

  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }

  private subscribeToIsAuthenticated() {
    this.store
      .select(selectorAuth)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));
  }

  private subscribeToSettings() {
    this.store
      .select(selectorSettings)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(settings => this.setTheme(settings));
  }

  private setTheme(settings: SettingsState) {
    const { theme, autoNightMode } = settings;
    const hours = new Date().getHours();
    const effectiveTheme = (autoNightMode && (hours >= 20 || hours <= 6)
      ? NIGHT_MODE_THEME
      : theme
    ).toLowerCase();
    this.componentCssClass = effectiveTheme;
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) =>
      item.includes('-theme')
    );
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(effectiveTheme);
  }

  private subscribeToRouterEvents() {
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(
          event =>
            event instanceof ActivationEnd || event instanceof NavigationEnd
        )
      )
      .subscribe(event => {
        if (event instanceof ActivationEnd) {
          this.setPageTitle(event);
        }

        if (event instanceof NavigationEnd) {
          this.trackPageView(event);
        }
      });
  }

  private setPageTitle(event: ActivationEnd) {
    let lastChild = event.snapshot;
    while (lastChild.children.length) {
      lastChild = lastChild.children[0];
    }
    const { title } = lastChild.data;
    this.titleService.setTitle(
      title ? `${title} - ${env.appName}` : env.appName
    );
  }

  private trackPageView(event: NavigationEnd) {
    (<any>window).ga('set', 'page', event.urlAfterRedirects);
    (<any>window).ga('send', 'pageview');
  }
}
