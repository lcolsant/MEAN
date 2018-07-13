import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../bicycle';
import { BicycleService } from '../bicycle.service';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-bicycle-list',
  templateUrl: './bicycle-list.component.html',
  styleUrls: ['./bicycle-list.component.css']
})
export class BicycleListComponent implements OnInit {

  authed: boolean;
  bicycles:Array<Bicycle> = [];

  constructor(
    private bicycleService:BicycleService,
    private authService:AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.bicycleService.getBicycles().subscribe(bicycles=>{
      this.bicycles = bicycles;
    });

    this.authService.authorized$.subscribe(authed => {
      this.authed = authed;
      console.log('is authed', this.authed);
    });

  }

  logout(){
    this.authService.logout().subscribe(()=>{
      console.log('user logged off successfully.');
      this.router.navigateByUrl('/');
    });
  }



  // onDelete(bicycle:Bicycle){
  //   console.log('deleting bicycle', bicycle.title);
  // }

}
