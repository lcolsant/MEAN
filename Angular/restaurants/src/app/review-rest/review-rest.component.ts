import { Component, OnInit } from '@angular/core';
import { Review } from '../review'
import { ReviewService } from '../review.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-review-rest',
  templateUrl: './review-rest.component.html',
  styleUrls: ['./review-rest.component.css']
})
export class ReviewRestComponent implements OnInit {

  reviews:Array<Review> = [];
  restaurantID:string;

  constructor(
    private readonly reviewService: ReviewService,
    private readonly route: ActivatedRoute,
  ) {

    this.route.paramMap.subscribe( params => {
      this.restaurantID = params.get('id');
      console.log('Retrieved restaurant', this.restaurantID);
    });
   }

  ngOnInit() {
    this.reviewService.getReviews().subscribe(reviews =>{
      this.reviews = reviews;
      // console.log('from api reviews:', reviews);

      //filter reviews for particular called restaurant
      this.reviews = this.reviews.filter(review => review._restaurantID == this.restaurantID);
    });
  }

}
