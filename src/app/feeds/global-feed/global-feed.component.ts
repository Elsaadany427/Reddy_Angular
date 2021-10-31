import { AtricleInterface } from './../../interfaces/atricle-interface';
import { ArticlesService } from './../../service/articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit {
  articles: AtricleInterface[] = [];
  loveOcc!: boolean;
  like!: boolean ;
  constructor(private serviceArticle: ArticlesService) { }

  ngOnInit(): void {
    this.articles = this.serviceArticle.getArticles();
  }
}
