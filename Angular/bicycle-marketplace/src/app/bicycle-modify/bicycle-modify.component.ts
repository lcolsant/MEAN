import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../bicycle';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bicycle-modify',
  templateUrl: './bicycle-modify.component.html',
  styleUrls: ['./bicycle-modify.component.css']
})
export class BicycleModifyComponent implements OnInit {

  bicycle:Bicycle = new Bicycle();
  bicycles:Array<Bicycle> = [
    {
      _id:"1",
      title:"Trek Domane",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      price:"799",
      location:"San Jose",
      img:"../../assets/bike1.jpeg",
    },
    {
      _id:"2",
      title:"GT Aggressor Pro ",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      price:"399",
      location:"Santa Cruz",
      img:"../../assets/bike2.jpeg",
    },
    {
      _id:"3",
      title:"Schwinn Cruiser",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      price:"100",
      location:"San Francisco",
      img:"../../assets/bike4.jpeg",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onAdd(event:Event, formData:NgForm){
    event.preventDefault;
    console.log('Adding bicycle: ', this.bicycle);
    this.bicycles.push(this.bicycle);
    this.bicycle = new Bicycle();
    formData.reset();
  }

  onDelete(bicycle:Bicycle){
    event.preventDefault;
    console.log('Deleting bicycle: ', bicycle.title);

  }

  onUpdate(event:Event, form:NgForm){
    event.preventDefault();
    console.log('Updating bicycle: ', this.bicycle);
    console.log(form.value);
    console.log(form.value.title);
    console.log(form.value._id);
  }

  onClick(event: Event) {
    event.stopPropagation();
    console.log('stopping prop', event);
  }



}
