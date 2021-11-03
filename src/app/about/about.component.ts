import { AtricleInterface } from './../interfaces/atricle-interface';
import { ArticlesService } from './../service/articles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // single article 
  article!: AtricleInterface;
  // id of it
  id!: number;
  // check if deleted
  Deleted: boolean = false;
  // comments
  comments!: string[] | undefined;

  constructor(private route: ActivatedRoute , private router: Router , private serviceArticle: ArticlesService) { }

  ngOnInit(): void {
    // Getting id of it 
    this.id = this.route.snapshot?.params['id'];
    // getting article form service by id
    this.article = this.serviceArticle?.getArticleById(this.id);
    // load comments
    this.comments = this.serviceArticle?.getComments(this.id);
  }
  editClicked(){
    // send to edit page 
    this.router.navigate(['/edit' , this.id]);
  }
  deletePost(){
    // delete Post by id
    this.serviceArticle.deleteArticleById(this.id);
    this.Deleted = true;
    setTimeout(() => {
      this.router.navigate(['/Home']);
    }, 1000);
  }

  // take the content of comment
  teatAreaSubmited(f: NgForm){
    this.serviceArticle.addComment(this.id , f.controls['textArea'].value);
  }
  deleteComment(idxOfComment: number){
    this.serviceArticle.deleteCommentById(idxOfComment , this.id);
    setTimeout(() => {
      this.router.navigate(['/about' , this.id]);
    }, 500);
  }

}
