import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supreme-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
  article = {
    imageURL: 'http://files.constantcontact.com/d8b1e32b401/f95c984f-84aa-4a3d-a373-31a871ab66d7.jpg',
    title: 'power'
  };
  constructor() { }

  ngOnInit() {
  }

}
