import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtricleInterface } from 'src/app/interfaces/atricle-interface';
import { ArticlesService } from 'src/app/service/articles.service';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // edit formGroup
  editForm!: FormGroup;
  // single article
  article!: AtricleInterface;
  // the id of this article
  index!: number;  
   // post edited success
   Edited: boolean = false; 

  constructor(private articleService: ArticlesService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    // getting the article id
    this.index = this.route.snapshot.params['id'];
    // getting article from service by id
    this.article = this.articleService.getArticleById(this.index);
  
    // set form group
    this.editForm = new FormGroup({
      title: new FormControl(this.article.title, [Validators.required, Validators.minLength(3), Validators.maxLength(24)]),
      about: new FormControl(this.article.about, [Validators.required, Validators.minLength(5)]),
      desc: new FormControl(this.article.desc, [Validators.required, Validators.minLength(5)])
    });
  }

  onEdited(publishForm:FormGroup) {
    // Update the article
    this.index = this.route.snapshot.params['id'];
    this.article = this.articleService.UdateArticle(publishForm.value, this.index);
    this.Edited = true;
    setTimeout(() => {
      this.router.navigate(['/Home']);
    }, 1000);
    //this.Edited = false;
  }
}
