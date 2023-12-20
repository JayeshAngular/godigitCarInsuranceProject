import { Component } from '@angular/core';
import { CarService } from './Svc/car.service';

@Component({
  selector: 'app-car-insurance',
  templateUrl: './car-insurance.component.html',
  styleUrls: ['./car-insurance.component.css']
})
export class CarInsuranceComponent {
  width: string = 'width: 20%';
  color1: string = 'color: rgb(243, 187, 5)'
  color2: string = 'color: black'
  color3: string = 'color: black'
  color4: string = 'color: black'
  
  constructor(private carSVC: CarService) {

  }
  ngDoCheck() {
    this.width = this.carSVC.getProgressBarWidth();
    this.color2 = this.carSVC.getProgressBarColor();
  }

}
