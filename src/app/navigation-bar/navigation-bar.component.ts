import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Input() disableMeteoButton: boolean;
  @Input() disableSportButton: boolean;
  @Input()title: string;
 
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  onClickMeteo(){
    this.router.navigate(['/home'])
  }

  onClickSport(){
    this.router.navigate(['/homeSport'])
    
  }
}
