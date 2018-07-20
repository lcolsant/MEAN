import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../review';
import { Restaurant } from '../restaurant';
import { ReviewService } from '../review.service'
import { RestaurantService } from '../restaurant.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  review:Review = new Review();
  restaurant:Restaurant = new Restaurant();
  restaurantID: string;
  sub:Subscription;


  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly reviewService: ReviewService,
    private readonly restaurantService: RestaurantService,

  ) {
    this.route.paramMap.subscribe( params => {
      this.restaurantID = params.get('id');
      console.log('Retrieved restaurant', this.restaurantID);
    });

    this.sub = this.restaurantService.getRestaurant(this.restaurantID).subscribe(restaurant =>{
      this.restaurant = restaurant;
    });
  }

  ngOnInit() {

  }
  onAdd(review:Review) {
    review._restaurantID = this.restaurantID;
    this.reviewService.addReview(review).subscribe(review =>{
      this.router.navigateByUrl('/restaurants');
    });
  }

  onCancel(){
    this.router.navigateByUrl('/restaurants');
  }
}
