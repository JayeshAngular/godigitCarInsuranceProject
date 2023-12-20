import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarInsuranceComponent } from './car-insurance.component';
import { BrandselectionComponent } from './brandselection/brandselection.component';
import { CarselectionComponent } from './carselection/carselection.component';
import { CityselectionComponent } from './cityselection/cityselection.component';
import { MonthselectionComponent } from './monthselection/monthselection.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { PlanselectionComponent } from './planselection/planselection.component';
import { VarientselectionComponent } from './varientselection/varientselection.component';
import { YearselectionComponent } from './yearselection/yearselection.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { CompSubComponent } from './planselection/comp-sub/comp-sub.component';
import { ThirdpSubComponent } from './planselection/thirdp-sub/thirdp-sub.component';

const routes: Routes = [{ path: '', component: CarInsuranceComponent, children:[
  { path:'brand-selection', component:BrandselectionComponent },
  { path:'car-selection/:brandName', component:CarselectionComponent },
  { path:'city-selection/:year/:month', component:CityselectionComponent },
  { path:'month-selection/:year', component:MonthselectionComponent },
  { path:'personaldetails-selection', component:PersonaldetailsComponent },
  {
    path: 'plan-selection', component: PlanselectionComponent, children: [
      { path: 'com-sub', component: CompSubComponent },
      { path: 'thirdp-sub', component: ThirdpSubComponent },
      {path:'', redirectTo:'/car-insurance/plan-selection/com-sub', pathMatch:'full'}
  ]},
  { path:'varient-selection/:varientName/:brandName', component:VarientselectionComponent },
  { path:'year-selection', component:YearselectionComponent },
  { path:'data-display', component:DataDisplayComponent },
  { path:'', redirectTo:'/car-insurance/brand-selection', pathMatch:'full' }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarInsuranceRoutingModule { }
