import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-detail-bar',
  templateUrl: './navigation-detail-bar.component.html',
  styleUrls: ['./navigation-detail-bar.component.scss']
})
export class NavigationDetailBarComponent implements OnInit {

  title: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.title='WeatherMapApp';
  }

  goBack(){
    this.router.navigate(['/home'])
  }
}
