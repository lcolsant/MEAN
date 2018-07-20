import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurants:Array<Restaurant> = [];

  constructor(
    private readonly router: Router,
    private readonly restaurantService: RestaurantService,
  ) { }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }


  onReviews(restaurant){
    console.log('on review works', restaurant.name);
    this.router.navigateByUrl(`/restaurants/${restaurant._id}`);

  }

  onUpdate(restaurant){
    console.log('on update works', restaurant.name)
    this.router.navigateByUrl(`/restaurants/${restaurant._id}/edit`);

  }

  onDelete(deletedRestaurant){
    console.log('deleting...', deletedRestaurant.name)
    this.restaurantService.deleteRestaurant(deletedRestaurant).subscribe(restaurant => {
      console.log(`restaurant ${deletedRestaurant.name} deleted successfully.`);
      this.restaurants = this.restaurants.filter(restaurant => restaurant._id !== deletedRestaurant._id);
    });
  }

}
