import { Component, Input, OnInit,  ViewContainerRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@app/interfaces/article';
import { AdsComponent } from '../ads/ads.component';

@Component({
  selector: 'supreme-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  // article: any;
  isHome: boolean;
  @Input('article') article: Article;
  constructor(
    private route: ActivatedRoute,
    public viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.isHome  = this.route.snapshot.url[0].path != "home";
    if(this.isHome)
      this.isHome = true;

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
