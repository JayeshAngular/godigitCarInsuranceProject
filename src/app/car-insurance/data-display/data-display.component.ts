import { Component } from '@angular/core';
import { CarService } from '../Svc/car.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
  selectedDate!:Date;
  carData:any;
  carRegData:any;
  policyExpiryDate: any;
  progresbarwidth: string = 'width: 35%';
  progresbarColor: string = 'color:  rgb(243, 187, 5)';
    constructor(private carService:CarService, df:FormBuilder, private route:Router) {
      this.carData = this.carService.getcarData();
      console.log(this.carData);
      this.carRegData = this.carService.getCarRegistrationData();
      console.log(this.carRegData);
    }
  
    dateChange(){
      this.policyExpiryDate = this.selectedDate;
    }
  progressbar() {
    this.carService.addProgresbarWidth(this.progresbarwidth);
    this.carService.addProgressBarColor(this.progresbarColor);
    this.carService.addCarPolicyDate(this.policyExpiryDate);
    }
}
