import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'supreme-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article = {};
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getArticle();
  }

  private getArticle() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.article = {
      id: id,
      imageURL: 'https://images-eu.ssl-images-amazon.com/images/I/51ipduB1kfL._US500_.jpg',
      title: 'power'
    };
  }
}
