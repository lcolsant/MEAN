import { Component } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  quotes = [
    {
      quote:'This is an interesting quote',
      author:'Great Author',
      rating: 2
    },
    {
      quote:'This is an even more interesting quote',
      author:'Big Time Author',
      rating: 3
    },
    {
      quote:'Not such an interesting quote',
      author:'Poor Author',
      rating: 0
    },
  ];

  dataFromChild(quote){
    this.quotes.push(quote);
    console.log('quote added succesfully.')
  }

  deleteQuote(quote){
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }
}
