import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private base = '/api/restaurants';

  constructor(private http: HttpClient) { }


  getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.base);
  }

  getRestaurant(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.base}/${id}`);
  }

  addRestaurant(restaurant:Restaurant): Observable<Restaurant>{
    return this.http.post<Restaurant>(this.base, restaurant);
  }

  updateRestaurant(id:string, restaurant:Restaurant): Observable<Restaurant>{
    return this.http.put<Restaurant>(`${this.base}/${id}`, restaurant);
  }

  deleteRestaurant(restaurant:Restaurant): Observable<Restaurant> {
    return this.http.delete<Restaurant>(`${this.base}/${restaurant._id}`);
  }


}
