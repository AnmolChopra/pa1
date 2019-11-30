import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
})
export class Module2Component implements OnInit {
  imageUrl: Array<any> = [];
  constructor() {
    this.imageUrl = [
      "assets/slide1.PNG",
      "assets/slide2.PNG",
      "assets/slide3.PNG"
    ]
   }

  ngOnInit() {
  }

}
