import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { WeatherService } from '../../services/weather.service';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  lat: number | undefined;
  lon: number | undefined;
  weather: any;

  allowlocation = false;

  constructor(private weatherService: WeatherService) {}

  today: string = moment().format('MMMM Do YYYY, h:mm:ss a');

  ngOnInit(): void {
   this.getLocation();
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
      cursorColor: 'white',
    });

    writer
      .strings(
        400,
        'Web Developer',
        'Front-End Developer',
        'Programming addicted'
      )
      .start();
  }
  getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition((succes) => {
        this.lat = succes.coords.latitude;
        this.lon = succes.coords.longitude;
        this.weatherService
          .getWeatherDataByCoords(this.lat, this.lon)
          .subscribe((data) => (this.weather = data));
        this.allowlocation = true;
      });
    }
  }
}
