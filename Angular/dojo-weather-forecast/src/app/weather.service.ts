import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//none of the import statements below resolve map error issue on line 19
import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:Http) { }

  getWeather(location: string){
    let apiKey = 'ab93560c3c304c6be78da42e40565e12';
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&&appid=${apiKey}`)
    .map( data => data.json() )
    .toPromise()  //do we need this line?
  }
}
