import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../bicycle';

@Component({
  selector: 'app-bicycle-list',
  templateUrl: './bicycle-list.component.html',
  styleUrls: ['./bicycle-list.component.css']
})
export class BicycleListComponent implements OnInit {

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

  onDelete(bicycle:Bicycle){
    console.log('deleting bicycle', bicycle.title);
  }

}
