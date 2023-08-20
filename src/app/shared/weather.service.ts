import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }
  // getWeather(location:string) {
  //   return this.http.get(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`, {
  //     headers: new HttpHeaders({
  //       'X-RapidAPI-Key': '00b449c98amshc213b3074ae2345p1fa4ccjsn76e821fa8686',
  //       'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  //     })
  //   });
  // }

  getWeather(location: string) {
    // return this.http.get(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`);
    const apiKey='b7de23954edd0b15d7bccdafb9534166';
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
  }
}
