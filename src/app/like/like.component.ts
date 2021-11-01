import { ArticlesService } from './../service/articles.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  // like occ var
  loveOcc!: boolean | undefined ;
  // make the id is output
  @Input() index!: number;

  constructor(private serviceArticle: ArticlesService) { }

  ngOnInit(): void {
    // check the state of like from service
    this.loveOcc = this.serviceArticle.getLike(this.index);
  }
  changeLike(){
    // change the like state
    this.loveOcc = !this.loveOcc;
    // next the id to services
    this.serviceArticle.idxSubject.next(this.index);
  }

}
