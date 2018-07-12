import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../bicycle';
import { NgForm } from '@angular/forms';
import { BicycleService } from '../bicycle.service';

@Component({
  selector: 'app-bicycle-modify',
  templateUrl: './bicycle-modify.component.html',
  styleUrls: ['./bicycle-modify.component.css']
})
export class BicycleModifyComponent implements OnInit {

  bicycle:Bicycle = new Bicycle();
  bicycles:Array<Bicycle> = [
    // {
    //   _id:"1",
    //   title:"Trek Domane",
    //   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    //   price:"799",
    //   location:"San Jose",
    //   img:"../../assets/bike1.jpeg",
    // },
    // {
    //   _id:"2",
    //   title:"GT Aggressor Pro ",
    //   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    //   price:"399",
    //   location:"Santa Cruz",
    //   img:"../../assets/bike2.jpeg",
    // },
    // {
    //   _id:"3",
    //   title:"Schwinn Cruiser",
    //   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    //   price:"100",
    //   location:"San Francisco",
    //   img:"../../assets/bike4.jpeg",
    // },
  ];

  constructor(
    private bicycleService:BicycleService,
  ) { }

  ngOnInit() {
    this.bicycleService.getBicycles().subscribe(bicycles=>{
      this.bicycles = bicycles;
    });
  }

  onAdd(event:Event, formData:NgForm){
    event.preventDefault;
    console.log('Adding bicycle: ', this.bicycle);
    // this.bicycles.push(this.bicycle);

    this.bicycleService.addBicycle(this.bicycle).subscribe(bicycle=>{
      console.log('bicycle from api:', bicycle);
      this.bicycles.push(bicycle);
      formData.reset();
    });
    // this.bicycle = new Bicycle();
  }

  onDelete(bicycle:Bicycle){
    event.preventDefault;
    console.log('Deleting bicycle: ', bicycle.title, bicycle._id);
    this.bicycleService.deleteBicycle(bicycle).subscribe(deletedBicycle=> {
      console.log('from api...removed bicycle', deletedBicycle);
      this.bicycles = this.bicycles.filter(bicycle => bicycle._id !== deletedBicycle._id);
    });

  }

  // onUpdate(event:Event, form:NgForm){
  //   event.preventDefault();
  //   console.log('Updating bicycle: ', form.value.title);
  //   console.log(form.value.title);
  //   console.log(form.value._id);
  // }

  onUpdate(bicycle:Bicycle){
    event.preventDefault();
    console.log('Updating bicycle: ', bicycle.title, bicycle._id);
    this.bicycleService.updateBicycle(bicycle._id,bicycle).subscribe(bicycle=>{
      console.log('from api...updated bicycle:', bicycle);

      this.bicycleService.getBicycles().subscribe(bicycles=>{
        console.log('from api...retrieving updated bicycles...', bicycles);
        this.bicycles = bicycles;
      });
    });
  }

  onClick(event: Event) {
    event.stopPropagation();
    console.log('stopping prop');
  }



}
