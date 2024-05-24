import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SportService } from '../serviceSport/sport.service';

@Component({
  selector: 'app-home-sport',
  templateUrl: './home-sport.component.html',
  styleUrls: ['./home-sport.component.scss']
})
export class HomeSportComponent implements OnInit {

  disableMeteoButton:boolean;
  disableSportButton:boolean;
  titleSport:string;
  matches:any[];
  countryFlags = new Map([
      ["United Kingdom", "gb"],
      ["Denmark", "dk"],
      ["Italy", "it"],
      ["Portugal", "pt"],
      ["Netherlands", "nl"],
      ["Spain", "es"],
      ["Norway", "no"],
    ]); 

  constructor(private router:Router,private sportService:SportService) { }

  ngOnInit(): void {
    this.disableMeteoButton=false;
    this.disableSportButton=true;
    this.titleSport="SportMarianoApp";

    this.sportService.getAllMatches().
    subscribe( x =>{
      this. matches=x.football;
    })
  }

  flag(item){
    return this.countryFlags.get(item.country);
  }

}
