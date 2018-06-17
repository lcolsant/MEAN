import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myArray: Array<String> = [];

  fillImageArray() {
    for (let y = 0; y < 10; y++) {
      const randNum = (Math.floor(Math.random() * 7) ) + 1;
      if (randNum === 1) {
        this.myArray.push('darkgreen');
      } else if (randNum === 2) {
        this.myArray.push('navy');
      } else if (randNum === 3) {
        this.myArray.push('darkslategray');
      } else if (randNum === 4) {
        this.myArray.push('gray');
      } else if (randNum === 5) {
        this.myArray.push('purple');
      } else if (randNum === 6) {
        this.myArray.push('darkcyan');
      } else if (randNum === 7) {
        this.myArray.push('darkred');
      }
    }
  }
  
  ngOnInit() {
    this.fillImageArray();
  }
}

