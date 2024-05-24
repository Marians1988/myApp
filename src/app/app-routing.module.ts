import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-meteo/home.component';
import { HomeSportComponent } from './home-sport/home-sport.component';
import { MeteoDetailsComponent } from './meteo-details/meteo-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'homeSport', component: HomeSportComponent },
  { path: 'detail/:date', component: MeteoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
