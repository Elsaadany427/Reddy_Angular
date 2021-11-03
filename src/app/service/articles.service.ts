import { AtricleInterface } from './../interfaces/atricle-interface';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService implements OnInit {
  // array of articles
  private articles: AtricleInterface[] = [];
  // array for favourate article
  private favArticles: AtricleInterface[] = [];
  // 
  idxSubject = new Subject<number>();
  // articleAsSubject = new Subject<AtricleInterface>();

  constructor() {
    this.idxSubject?.subscribe(
      (value: number) => {
        this.articles[value].like = !this.articles[value].like;
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

  // get like of individual article
  getLike(idx: number): boolean | undefined {
    return this.articles[idx].like;
  }

  // add article to array
  addArticle(article: AtricleInterface): AtricleInterface[] {
    this.articles.push({ title: article.title, about: article.about, desc: article.desc, like: false , comment: [] });
    return this.articles.slice();
  }
  // add comment
  addComment(id:number ,comment: string){
    let arrayOfComments = this.articles[id].comment;
    arrayOfComments?.push(comment);
    this.articles[id] = {title: this.articles[id].title, about: this.articles[id].about, desc: this.articles[id].desc, like: this.articles[id].like , comment: arrayOfComments};
  }
  // get comments
  getComments(id:number){
    return this.articles[id].comment;
  }
  // delete comment by id
  deleteCommentById(commentId: number , postId: number){
    this.articles[postId].comment?.splice(commentId,1);
  }

  // get article by id
  getArticleById(id: number): AtricleInterface {
    return this.articles[id];
  }

  // update article
  UdateArticle(article: AtricleInterface, id: number) {
    this.articles[id] = { title: article.title, about: article.about, desc: article.desc, like: this.articles[id].like , comment:this.articles[id].comment };
    return this.articles[id];
  }

  // delete article
  deleteArticles(): AtricleInterface[] {
    this.articles = this.articles.filter(item => item !== item);
    return this.articles.slice();
  }
  // delete article by id
  deleteArticleById(id: number): void {
    this.articles.splice(id, 1);

  }
  // get Favourate array
  getFavourate() {
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

  // check if article deleted from fav
  checkFav() {
    this.favArticles.forEach(sigleAritcle => {
      if (sigleAritcle.like === false) {
        let idx = this.favArticles.indexOf(sigleAritcle);
        this.favArticles.splice(idx, 1);
      }
    });
    return this.favArticles.slice();
  }
}
