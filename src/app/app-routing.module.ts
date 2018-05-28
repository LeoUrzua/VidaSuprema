import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { HomeComponent } from '@app/general/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
    }
  },
  {
    path: 'examples',
    loadChildren: 'app/examples/examples.module#ExamplesModule'
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true} //  <- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
