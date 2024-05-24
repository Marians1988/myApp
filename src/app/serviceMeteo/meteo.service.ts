import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meteo } from '../models/meteo.model';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private meteoUrl = 'http://api.weatherapi.com/v1/forecast.json';  // URL to web api
  constructor(private http: HttpClient) {
    
  }

  getAllMeteo(){
    const headers= new HttpHeaders()
        .set('Cache-Control', 'no-cache, no-store, must-revalidate, post-  check=0, pre-check=0')
        .set('Pragma', 'no-cache')
        .set( 'Expires', '0');
    const params = new HttpParams({fromString: 'key=40ffaaa9e3a74370865101615201912&q&q=Naples&days=5'});
    
    return this.http.get<any>(this.meteoUrl,{headers,params});
    
  }

  getSelectedMeteo(date){
    const headers= new HttpHeaders()
      .set('Cache-Control', 'no-cache, no-store, must-revalidate, post-  check=0, pre-check=0')
      .set('Pragma', 'no-cache')
      .set( 'Expires', '0');
    const params = new HttpParams({fromString: 'key=40ffaaa9e3a74370865101615201912&q&q=Naples&days=5'});
    
    return this.http.get<any>(this.meteoUrl,{headers,params}).pipe(
      map(locations => locations.forecast.forecastday.filter(location => location.date === date ))
    )
  }
}
