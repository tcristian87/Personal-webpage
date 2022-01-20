import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '577c69d1405a1e62ddeac7f2f328337e';

  constructor(private http: HttpClient) {}

  getWeatherDataByCoords(lat: number, lon: number) {
    let params = new HttpParams()
      .set('lat', lat.toString())
      .set('lon', lon.toString())
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }
}
