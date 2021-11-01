import { AtricleInterface } from './../../interfaces/atricle-interface';
import { ArticlesService } from './../../service/articles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit {
  // array of articles
  articles: AtricleInterface[] = [];
  // check the love occ or not 
  loveOcc!: boolean;
  like!: boolean ;
  constructor(private serviceArticle: ArticlesService ) { }

  ngOnInit(): void {
    // load the articles from service to global
    this.articles = this.serviceArticle.getArticles();
  }
}
