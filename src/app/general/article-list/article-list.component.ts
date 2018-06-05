import { Component, OnInit } from '@angular/core';
import { Post } from '@app/interfaces/post';
import { PostService } from '@app/services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'supreme-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  // articles: Post[];
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
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.postService.getAllPosts()
      .subscribe(posts => this.articles = posts);
  }

}
