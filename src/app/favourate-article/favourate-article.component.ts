import { AtricleInterface } from './../interfaces/atricle-interface';
import { ArticlesService } from './../service/articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourate-article',
  templateUrl: './favourate-article.component.html',
  styleUrls: ['./favourate-article.component.css']
})
export class FavourateArticleComponent implements OnInit {
  // array of favourate articles
  favArticle: AtricleInterface[] = [];
  // set like
  like!: boolean ;
  constructor(private serviceArticle: ArticlesService) { }

  ngOnInit(): void {
    // getting the favourate array from service
    this.favArticle = this.serviceArticle.getFavourate();
    // check if one article has disliked
    this.favArticle = this.serviceArticle.checkFav();
  }

}
