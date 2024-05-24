import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meteo } from '../models/meteo.model';
import { MeteoService } from '../serviceMeteo/meteo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  disableMeteoButton:boolean;
  disableSportButton:boolean;
  location : any;
  forecast:any[]; 
  title : string;
  titleMeteo:string
  constructor(private meteoService:MeteoService,private router:Router) { }

  ngOnInit(): void {

    this.titleMeteo="WeatherMarianoApp";
    this.disableMeteoButton=true;
    this.disableSportButton=false;
    this.meteoService.getAllMeteo().
    subscribe( x =>{
      this.location = x;
      this.forecast=x.forecast.forecastday;
    })
  
  }
  onClickItems(item){
    this.router.navigate(['/detail/'+item.date])
  }
   
}
