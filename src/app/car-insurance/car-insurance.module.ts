import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarInsuranceRoutingModule } from './car-insurance-routing.module';
import { CarInsuranceComponent } from './car-insurance.component';
import { BrandselectionComponent } from './brandselection/brandselection.component';
import { CarselectionComponent } from './carselection/carselection.component';
import { VarientselectionComponent } from './varientselection/varientselection.component';
import { YearselectionComponent } from './yearselection/yearselection.component';
import { MonthselectionComponent } from './monthselection/monthselection.component';
import { CityselectionComponent } from './cityselection/cityselection.component';
import { PlanselectionComponent } from './planselection/planselection.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DataDisplayComponent } from './data-display/data-display.component';
import { CompSubComponent } from './planselection/comp-sub/comp-sub.component';
import { ThirdpSubComponent } from './planselection/thirdp-sub/thirdp-sub.component';




@NgModule({
  declarations: [
    CarInsuranceComponent,
    BrandselectionComponent,
    CarselectionComponent,
    VarientselectionComponent,
    YearselectionComponent,
    MonthselectionComponent,
    CityselectionComponent,
    PlanselectionComponent,
    PersonaldetailsComponent,
    DataDisplayComponent,
    CompSubComponent,
    ThirdpSubComponent
  ],
  imports: [
    CommonModule,
    CarInsuranceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ]
})
export class CarInsuranceModule { }
