import { AtricleInterface } from './../interfaces/atricle-interface';
import { ArticlesService } from './../service/articles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute , private router: Router , private serviceArticle: ArticlesService) { }

  ngOnInit(): void {
    // Getting id of it 
    this.id = this.route.snapshot.params['id'];
    // getting article form service by id
    this.article = this.serviceArticle.getArticleById(this.id);
  }
  editClicked(){
    // send to edit page 
    this.router.navigate(['/edit' , this.id]);
  }

}
