import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { BikeSearchComponent } from './bike-search/bike-search.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarSearchComponent,
    BikeSearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
