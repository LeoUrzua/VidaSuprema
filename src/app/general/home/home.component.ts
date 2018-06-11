import { Component, OnInit } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'supreme-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  isHome: boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.isHome  = this.route.snapshot.url[0].path == "home";
    if(this.isHome)
      this.isHome = true;
  }

}
