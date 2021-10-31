import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  state: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  activeYourFeed(){
    this.state = true;
  }
  activeGlobalFeed(){
    this.state = false;
  }

}
