import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@app/interfaces/article';

@Component({
  selector: 'supreme-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  // article: any;
  @Input('article') article: Article;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.getArticle();
    }
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
