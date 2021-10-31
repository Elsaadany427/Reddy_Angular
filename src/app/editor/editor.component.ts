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
  publishForm!: FormGroup;
  articles!: AtricleInterface[];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.publishForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      about: new FormControl('', [Validators.required, Validators.minLength(5)]),
      desc: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
    this.articles = this.articleService.getArticles();
    
  }

  onPublish(form: FormGroup) {
    this.articles = this.articleService.addArticle(form.value);
    console.log(this.articles);
  }
}
