import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';




@Component({
  selector: 'app-new-rest',
  templateUrl: './new-rest.component.html',
  styleUrls: ['./new-rest.component.css']
})
export class NewRestComponent implements OnInit {

  restaurant:Restaurant = new Restaurant();
  restaurants:Array<Restaurant> = [];

  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly router: Router,

  ) { }

  ngOnInit() {
  }


  onAdd(restaurant:Restaurant){
    this.restaurantService.addRestaurant(restaurant).subscribe(restaurant =>{
      console.log('from api...restaurant added successfully', restaurant);
      this.router.navigateByUrl('/restaurants');
    });
  }

  onCancel(){
    this.router.navigateByUrl('/restaurants');
  }

}
