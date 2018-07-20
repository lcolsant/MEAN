import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private base = '/api/reviews';

  constructor(private http: HttpClient) { }


  getReviews(): Observable<Review[]>{
    return this.http.get<Review[]>(this.base);
  }

  getReview(id: string): Observable<Review> {
    return this.http.get<Review>(`${this.base}/${id}`);
  }

  addReview(review:Review): Observable<Review>{
    return this.http.post<Review>(this.base, review);
  }

  updateRestaurant(id:string, review:Review): Observable<Review>{
    return this.http.put<Review>(`${this.base}/${id}`, review);
  }

  deleteRestaurant(review:Review): Observable<Review> {
    return this.http.delete<Review>(`${this.base}/${review._id}`);
  }
}
