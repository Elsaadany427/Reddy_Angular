import { ArticlesService } from './../service/articles.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtricleInterface } from '../interfaces/atricle-interface';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  // formGroup
  publishForm!: FormGroup;
  // array of articles
  articles!: AtricleInterface[];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    // setting form group
    this.publishForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      about: new FormControl('', [Validators.required, Validators.minLength(5)]),
      desc: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
    // getting articles form services
    this.articles = this.articleService.getArticles();
    
  }

  onPublish(form: FormGroup) {
    // add this article to main articles and save a copy of it
    this.articles = this.articleService.addArticle(form.value);
    // reset form 
    this.publishForm.reset();
  }
}
