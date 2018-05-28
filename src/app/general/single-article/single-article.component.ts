import { Component, OnInit } from '@angular/core';
import { Article } from '@app/interfaces/article';

@Component({
  selector: 'supreme-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
  article: Article;
  constructor() { }

  ngOnInit() {
    this.article = {
      id: 1,
      imageURL: 'http://files.constantcontact.com/d8b1e32b401/f95c984f-84aa-4a3d-a373-31a871ab66d7.jpg',
      title: 'power'
    };
  }

}
