import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/core/services/httpservice.service';

@Component({
  selector: 'app-carselection',
  templateUrl: './carselection.component.html',
  styleUrls: ['./carselection.component.css']
})
export class CarselectionComponent {
  brandName:string  | null = null;
  varientList:any[] =[];
  display: string | undefined;

  constructor(private router:Router, private activateRouter:ActivatedRoute, private httpSVC:HttpserviceService) {
    this.brandName = this.activateRouter.snapshot.paramMap.get('brandName');
    console.log(this.brandName);
  }
  

  ngOnInit(): void{
    this.display='block';
    this.getVarientList();
 }

 getVarientList() {
  const endPoint =  'brands?'+'brandName='+this.brandName;
  this.httpSVC.getDataFromServer(endPoint).subscribe((resp:any)=> {
    if(resp && resp.length > 0)
    {
      this.varientList = resp[0].models;
    }
  })
 }

 selectCar(varientName:any) {
  this.router.navigate(['/car-insurance/varient-selection', varientName, this.brandName]);
 }
}
