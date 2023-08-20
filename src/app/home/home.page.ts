import { Component } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { App as CapacitorApp } from '@capacitor/app';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular/providers/platform';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchDialog: boolean = false;
  rotateClass: boolean = false;
  city: any;
  res: any;
  loading: boolean = false;
  constructor(
    private weatherSrc: WeatherService,
    private platform: Platform,

  ) { 

    this.platform.backButton.subscribeWithPriority(-1, () => {
      App.exitApp();
      // if (this.searchDialog) {
      //   this.searchDialog = false;
      // } else {
      //   App.exitApp();
      // }
    });
  }
  ngOnInit() {
    this.loading = true;
    const getCity: any = localStorage.getItem('city');
    this.weatherSrc.getWeather(getCity).subscribe((res) => {
      this.res = res;
      console.log(res);
      this.loading = false;

    })
    this.city = getCity;
  
  }
  rotate() {
    this.rotateClass = true;
    this.loading = true;
    this.weatherSrc.getWeather(this.city).subscribe((res) => {
      this.res = res;
      console.log(res);
      this.loading = false;

    })
    setTimeout(() => {
      this.rotateClass = false;
    }, 1500)
  }
  getLocationWeather(location: any) {
    this.loading = true;
    this.weatherSrc.getWeather(location.value.city.toLowerCase()).subscribe((res) => {
      this.res = res;
      localStorage.setItem('city', location.value.city);
      this.searchDialog = false;
      this.loading = false;

    });
  }

}
