import { ArticlesService } from './../service/articles.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  loveOcc!: boolean | undefined ;
  @Input() index!: number;

  constructor(private serviceArticle: ArticlesService) { }

  ngOnInit(): void {
    this.loveOcc = this.serviceArticle.getLike(this.index);
  }
  changeLike(){
    this.loveOcc = !this.loveOcc;
    this.serviceArticle.idxSubject.next(this.index);
  }

}
