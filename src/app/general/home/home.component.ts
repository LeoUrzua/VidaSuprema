import { Component, OnInit } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'supreme-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  articles = [
    {
      imageURL: 'http://files.constantcontact.com/d8b1e32b401/f95c984f-84aa-4a3d-a373-31a871ab66d7.jpg',
      title: 'power'
    },
    {
      imageURL: 'https://cdn-images-1.medium.com/max/1040/1*bpxmMpSKLs86DZWiP-_mnw@2x.png',
      title: 'signal'
    },
    {
      imageURL: 'http://www.theunheardnerd.com/wp-content/uploads/2016/05/Tron-Shanghai-Banner-640x300.jpg',
      title: 'tron'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
