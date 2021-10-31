import { AtricleInterface } from './../interfaces/atricle-interface';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService implements OnInit {
  // array of articles
  articles: AtricleInterface[] = [];
  favArticles: AtricleInterface[] = [];
  idxSubject = new Subject<number>();

  constructor() {
    this.idxSubject.subscribe(
      (value: number) => {
        this.articles[value].like = !this.articles[value].like;
        console.log(this.articles);
        this.getArticles();
      }
    );
  }
  ngOnInit(): void {

  }
  // return this articles
  getArticles() {
    return this.articles.slice();
  }
  getLike(idx: number): boolean | undefined {
    return this.articles[idx].like;
  }
  // add article to array
  addArticle(article: AtricleInterface): AtricleInterface[] {
    this.articles.push({ title: article.title, about: article.about, desc: article.desc, like: false });
    return this.articles.slice();
  }

  getArticleById(id: number): AtricleInterface {
    return this.articles[id];
  }
  deleteArticles(): AtricleInterface[] {
    this.articles = this.articles.filter(item => item !== item);
    return this.articles.slice();
  }
  deleteArticleById(id: number): AtricleInterface[] {
    this.articles.splice(id, 1);
    return this.articles.slice();
  }
  getFavourate(){
    this.articles.forEach(article => {
      if (article.like == true) {
        var matches = this.favArticles.filter(function (datum) {
          return datum.title === article.title &&
            datum.about === article.about &&
            datum.desc === article.desc;
        });
        if (!matches.length) {
          this.favArticles.push(article);
        }
      }
    });
    return this.favArticles.slice();
  }
  checkFav() {
    this.favArticles.forEach(sigleAritcle => {
      if (sigleAritcle.like === false) {
        let idx = this.favArticles.indexOf(sigleAritcle);
        this.favArticles.splice(idx, 1);
      }
    });
    console.log("jdjd");
    console.log(this.favArticles);
    return this.favArticles.slice();
  }
}
