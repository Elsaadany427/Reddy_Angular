import { AtricleInterface } from './../interfaces/atricle-interface';
import { ArticlesService } from './../service/articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourate-article',
  templateUrl: './favourate-article.component.html',
  styleUrls: ['./favourate-article.component.css']
})
export class FavourateArticleComponent implements OnInit {
  favArticle: AtricleInterface[] = [];
  like!: boolean ;
  constructor(private serviceArticle: ArticlesService) { }

  ngOnInit(): void {
    this.favArticle = this.serviceArticle.getFavourate();
    this.favArticle = this.serviceArticle.checkFav();
  }

}
