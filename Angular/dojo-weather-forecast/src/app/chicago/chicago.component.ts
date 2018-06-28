import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';


@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
weather:Weather;

  constructor(private weatherService: WeatherService) { }

//subscribes to weather service object upon initialization and receives the new weather object passed from the service
  ngOnInit() {
    this.weatherService.getWeather('chicago')
    .subscribe( weather => {
      this.weather = weather;
      console.log(weather);
    });
  }

}
