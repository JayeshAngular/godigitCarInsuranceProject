import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  useCarData:any;
  useCarRegistrationData:any;
  useCarPolicyExpiryDate:any;
  progressBarWidth:string = 'width: 20%';
  progressBarColor:string = 'width:  black';
  constructor() { }

  addcarData(carDetailsObj:any) {
    this.useCarData = carDetailsObj
  }

  addCarRegistrationData( registrationDetailObj:any) {
    this.useCarRegistrationData = registrationDetailObj;
  }
  addCarPolicyDate( policyDate:any) {
    this.useCarPolicyExpiryDate = policyDate;
  }
   
  addProgresbarWidth(width:string) {
    this.progressBarWidth = width;
    
  }
  addProgressBarColor(color:string) {
    this.progressBarColor = color;
  }
  getcarData() {
    return this.useCarData;
  }
  getCarRegistrationData() {
    return this.useCarRegistrationData;
  }
  getCarPolicyExpiryDate() {
    return this.useCarPolicyExpiryDate;
  }
  getProgressBarWidth() {
    return this.progressBarWidth;
  }
  getProgressBarColor() {
    return this.progressBarColor;
  }
}
