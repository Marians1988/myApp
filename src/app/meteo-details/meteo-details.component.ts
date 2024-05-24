import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeteoService } from '../serviceMeteo/meteo.service';

@Component({
  selector: 'app-meteo-details',
  templateUrl: './meteo-details.component.html',
  styleUrls: ['./meteo-details.component.scss']
})
export class MeteoDetailsComponent implements OnInit {

   forecast:any[];
   hour:any[];
  constructor(private route: ActivatedRoute,private meteoService: MeteoService) { }

  ngOnInit(): void {
    this.getMeteoDetail()
  }

  getMeteoDetail(): void {
    let date
    this.route.paramMap.subscribe(params => {
           date = params.get('date');
      });
    this.meteoService.getSelectedMeteo(date)
      .subscribe(forecasts =>{ this.forecast = forecasts
                              this.hour = forecasts[0].hour});
 }

}
