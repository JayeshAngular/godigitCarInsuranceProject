import { Component } from '@angular/core';
import { HttpserviceService } from 'src/app/core/services/httpservice.service';

@Component({
  selector: 'app-comp-sub',
  templateUrl: './comp-sub.component.html',
  styleUrls: ['./comp-sub.component.css']
})
export class CompSubComponent {
  
  vehicleIDV:number | undefined;
  vehicleIDVMax:number | undefined;
  vehicleIDVMin:number | undefined;
  vehicleIDVDef: number = 0;
  price: any;
  addOns: any[] = [];
  displayAddOns: any;
  insuranceData: any;
  addOnCoverageList:any= []
  selectedPlan: any;
  CompPlanFinalDiscPrice: number = 0;
  CompPlanFinalPrice: number = 0;

  constructor(private httpSVC: HttpserviceService) { }
  ngOnInit() {
    this.getIdvPlans();
  }
  getIdvPlans() {
    const endPoint = "get-eligible-plan?";
    this.httpSVC.getDataFromServer(endPoint).subscribe((resp: any) => {
      if (resp)
      {
        this.insuranceData = resp;
        this.vehicleIDV = resp.vehicle.vehicleIDV.idv;
        this.vehicleIDVMax = resp.vehicle.vehicleIDV.maximumIdv;
        this.vehicleIDVMin = resp.vehicle.vehicleIDV.minimumIdv;
        this.vehicleIDVDef = resp.vehicle.vehicleIDV.defaultIdv;
        this.price = this.vehicleIDVMax;
        this.selectedPlan = this.insuranceData.plans[0].contract.coverages;
        console.log(this.selectedPlan)
        let addOnnList = this.selectedPlan.filter((el: any) => el.coverType === 'ADDONS');
        this.addOnCoverageList = addOnnList[0].subCovers.filter((ele: any) => ele.coverAvailability === 'MANDATORY');
        this.CompPlanFinalDiscPrice = this.insuranceData.plans[0].netPremium;
        this.CompPlanFinalPrice = this.insuranceData.plans[0].grossPremium;
      }
    })
  }
  calculateComprehensive(selection: boolean, index: number,) {
    if (selection)
    {
      this.CompPlanFinalDiscPrice += parseInt(this.addOnCoverageList[index].netPremium);
      this.CompPlanFinalPrice += parseInt(this.addOnCoverageList[index].netPremium);
    }
    if (!selection)
    {
      this.CompPlanFinalDiscPrice -= parseInt(this.addOnCoverageList[index].netPremium);
      this.CompPlanFinalPrice -= parseInt(this.addOnCoverageList[index].netPremium);
    }
  }
   
}
