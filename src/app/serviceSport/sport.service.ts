import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  private sportUrl = 'http://api.weatherapi.com/v1/sports.json';  // URL to web api
  constructor(private http: HttpClient) {
    
  }

  getAllMatches(){
    const headers= new HttpHeaders()
        .set('Cache-Control', 'no-cache, no-store, must-revalidate, post-  check=0, pre-check=0')
        .set('Pragma', 'no-cache')
        .set( 'Expires', '0');
    const params = new HttpParams({fromString: 'key=40ffaaa9e3a74370865101615201912&q&q=London'});
    
    return this.http.get<any>(this.sportUrl,{headers,params});
    
  }
}
