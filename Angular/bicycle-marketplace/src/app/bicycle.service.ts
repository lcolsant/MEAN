import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bicycle } from './bicycle';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  private base = '/api/bicycles'

  constructor(private http: HttpClient) { }

  getBicycles(): Observable<Bicycle[]>{
    return this.http.get<Bicycle[]>(this.base);
  }

  getBicycle(id: string): Observable<Bicycle> {
    return this.http.get<Bicycle>(`${this.base}/${id}`);
  }

  addBicycle(bicycle:Bicycle): Observable<Bicycle>{
    return this.http.post<Bicycle>(this.base, bicycle);
  }

  updateBicycle(id:string, bicycle:Bicycle): Observable<Bicycle>{
    return this.http.put<Bicycle>(`${this.base}/${id}`, bicycle);
  }

  deleteBicycle(bicycle:Bicycle): Observable<Bicycle> {
    return this.http.delete<Bicycle>(`${this.base}/${bicycle._id}`);
  }
}
