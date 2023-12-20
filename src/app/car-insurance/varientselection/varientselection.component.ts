import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/core/services/httpservice.service';
import { CarService } from '../Svc/car.service';

@Component({
  selector: 'app-varientselection',
  templateUrl: './varientselection.component.html',
  styleUrls: ['./varientselection.component.css']
})
export class VarientselectionComponent {
  display: string | undefined;
  variantList:any[] = [];
  carModelname: string | null = null;
  carBrandlname: string | null = null;
  fuelType:string='';
  petrolVariantDisplay!:boolean;
  DieselVariantDisplay!:boolean;
  ElectricVariantDisplay!: boolean;
  FuelVariantsArr: string[] = [];
  cardetails:carData  = new carData();

  constructor(private router:Router, private httpSVC:HttpserviceService, private activatrouter:ActivatedRoute, private carSVC:CarService) {
    this.carModelname = this.activatrouter.snapshot.paramMap.get('varientName');
    console.log(this.carModelname);
    this.carBrandlname = this.activatrouter.snapshot.paramMap.get('brandName');
  }

  ngOnInit(){
    this.display='block';
    this.getCarVarients();
 }
  getCarVarients() {
    if(this.carModelname != null)
    {
      const endPoint = "get-variant?"+'modelName='+this.carModelname;
      this.httpSVC.getDataFromServer(endPoint).subscribe((resp:any)=> {
        if(resp && resp.length > 0)
        {
          this.variantList = resp[0].modelList;
          console.log(this.variantList)
          const variants: string[] = resp[0].modelList.map((el: any) => el.FuelType);
          this.FuelVariantsArr = [...new Set(variants)];
          console.log(this.FuelVariantsArr)
        }

      })
    }
  }


  fuelSelected(fuelName:any) {
        if(fuelName == "Petrol")
        {
          this.petrolVariantDisplay = true;
          this.DieselVariantDisplay = false;
          this.ElectricVariantDisplay = false;
          this.fuelType = fuelName;
        }
        if(fuelName == "Diesel")
        {
          this.petrolVariantDisplay = false;
          this.DieselVariantDisplay = true;
          this.ElectricVariantDisplay = false;
          this.fuelType = fuelName;
        }
        if(fuelName == "Electric")
        {
          this.petrolVariantDisplay = false;
          this.DieselVariantDisplay = false;
          this.ElectricVariantDisplay = true;
        }

  }


 selectVarient(varient:any) {
  this.router.navigate(['/car-insurance/year-selection']);
  this.cardetails.brandName = this.carBrandlname;
  this.cardetails.variantName = varient;
  this.cardetails.carName = this.carModelname;
  this.cardetails.fuelType = this.fuelType;
  this.carSVC.addcarData(this.cardetails);
 }
}

export class carData {
  brandName:string | null = null;
  carName:string | null = null;
  variantName:string | null = null;
  fuelType:string | null = null;
}
