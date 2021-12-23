import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class WeatherService {
    constructor(private _http: HttpClient) {}
      
    getdata(): any {
      return this._http
              .get<any>("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=9ac16e9370b22e1f44ee8cef59438203")
  }
}