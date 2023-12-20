import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { BikeSearchComponent } from './bike-search/bike-search.component';

const routes: Routes = [{ path: '', component: HomeComponent, children:[
  { path:'car-search',component:CarSearchComponent },
  { path:'bike-search', component:BikeSearchComponent },
  {path:'',redirectTo:'/home/car-search',pathMatch:'full'}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
