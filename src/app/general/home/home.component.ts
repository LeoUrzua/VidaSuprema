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
      id: 1,
      imageURL: 'https://images-eu.ssl-images-amazon.com/images/I/51ipduB1kfL._US500_.jpg',
      title: 'power'
    },
    {
      id: 2,
      imageURL: 'https://i.pinimg.com/originals/4c/92/b8/4c92b85d179c2a1e2f0bd54b2917a0c9.jpg',
      title: 'signal'
    },
    {
      id: 3,
      imageURL: 'https://beinspiredchannel.com/wp-content/uploads/2017/07/20374757_871740382992936_1312047787644909620_n.jpg',
      title: 'tron'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
