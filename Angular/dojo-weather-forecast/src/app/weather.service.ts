import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }


  //retrieves json data from weather api, saves data to local variables through destructuring, and returns a new Weather object
  getWeather(location: string){
    let apiKey = 'ab93560c3c304c6be78da42e40565e12';
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&&appid=${apiKey}`).pipe(map(data=>{
      console.log(data);
      const { temp, pressure, temp_max: tempMax, temp_min: tempMin, humidity  } = (data as any).main;
      const { description } = (data as any).weather[0];
      return new Weather(humidity, temp, tempMax, tempMin, description);
    }));
  }
}

