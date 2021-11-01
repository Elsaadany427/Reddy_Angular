import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // check the state
  state: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  // if active
  activeYourFeed(){
    this.state = true;
  }
  // or not active
  activeGlobalFeed(){
    this.state = false;
  }

}
