import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.css']
})
export class QuoteCreateComponent implements OnInit {

  @Output() myEvent = new EventEmitter;

  Quote = {
    quote:"",
    author: "",
    rating: 0
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event:Event, formData:NgForm){
    //prevent page from refreshing after form submit

    event.preventDefault();
    console.log('form submitted');
    console.log(this.Quote);
    this.myEvent.emit(this.Quote);
    this.Quote = {
      quote:"",
      author: "",
      rating: 0
    }

    //refresh form
    formData.reset();

  }

}
