import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../Svc/car.service';

@Component({
  selector: 'app-cityselection',
  templateUrl: './cityselection.component.html',
  styleUrls: ['./cityselection.component.css']
})
export class CityselectionComponent {
  year: string | null = null;
  month: string | null = null;
  display: string | undefined;
  carRegDetails:regData = new regData();
  cityArr:any[]=["Akola","Mumbai","Pune","Nashik","Buldhana","Nagpur","Washim","Amravati","Dhule"]

  constructor(private router:Router, private activateRouter:ActivatedRoute, private carService:CarService) {
    this.year = this.activateRouter.snapshot.paramMap.get('year');
    this.month = this.activateRouter.snapshot.paramMap.get('month');
  }
  ngOnInit(){
    this.display='block';
 }
 selectCity(city:any) {
  this.router.navigate(['/car-insurance/data-display']);
  this.carRegDetails.year = this.year;
  this.carRegDetails.month = this.month;
  this.carRegDetails.city = city;
  this.carService.addCarRegistrationData(this.carRegDetails);
 }
}

export class regData {
  year: string | null = null;
  month: string | null = null;
  city: string | null = null;
}
