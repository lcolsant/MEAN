import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-rest',
  templateUrl: './edit-rest.component.html',
  styleUrls: ['./edit-rest.component.css']
})
export class EditRestComponent implements OnInit {

  restaurant:Restaurant = new Restaurant();
  restaurantID:string;
  sub:Subscription;

  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,

  ) {

    this.route.paramMap.subscribe( params => {
      this.restaurantID = params.get('id');
      console.log('Showing updates for restaurant', this.restaurantID);

      this.sub = this.restaurantService.getRestaurant(this.restaurantID).subscribe(restaurant =>{
        this.restaurant = restaurant;
        console.log('from api...retrieved restaurant:', restaurant.name);
      })
    });
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  onUpdate(restaurant:Restaurant){
    this.sub = this.restaurantService.updateRestaurant(this.restaurantID, restaurant).subscribe(restaurant =>{
      console.log('from api...restaurant updated successfully', restaurant);
      this.router.navigateByUrl('/restaurants');
    });
  }

  onCancel(){
    this.router.navigateByUrl('/restaurants');
  }

}
