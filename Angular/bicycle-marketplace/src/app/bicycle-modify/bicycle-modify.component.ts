import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../bicycle';
import { NgForm } from '@angular/forms';
import { BicycleService } from '../bicycle.service';

import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie'
import { Router } from '@angular/router';


@Component({
  selector: 'app-bicycle-modify',
  templateUrl: './bicycle-modify.component.html',
  styleUrls: ['./bicycle-modify.component.css']
})
export class BicycleModifyComponent implements OnInit {

  bicycle:Bicycle = new Bicycle();
  bicycles:Array<Bicycle> = [];
  owner_id;

  constructor(
    private bicycleService:BicycleService,
    private authService:AuthService,
    private readonly router: Router,
    private cookieService: CookieService,

  ) { }

  ngOnInit() {
    this.bicycleService.getBicycles().subscribe(bicycles=>{
      this.bicycles = bicycles;
    });

    // this.authService.sessionID$.subscribe(sessionID =>{
    //   console.log('in modify...', sessionID);
    //   this.owner_id = sessionID;
    // })
    this.owner_id = this.cookieService.get('userID');
    console.log('in modify showing ownerID', this.owner_id);


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

  logout(){
    this.authService.logout().subscribe(()=>{
      console.log('user logged off successfully.');
      this.router.navigateByUrl('/');
    });
  }



}
