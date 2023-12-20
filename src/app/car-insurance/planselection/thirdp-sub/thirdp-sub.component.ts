import { Component } from '@angular/core';
import { HttpserviceService } from 'src/app/core/services/httpservice.service';

@Component({
  selector: 'app-thirdp-sub',
  templateUrl: './thirdp-sub.component.html',
  styleUrls: ['./thirdp-sub.component.css']
})
export class ThirdpSubComponent {
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
        this.selectedPlan = this.insuranceData.plans[1].contract.coverages;
        console.log(this.selectedPlan)
        let addOnnList = this.selectedPlan.filter((el: any) => el.coverType === 'ADDONS');
        this.addOnCoverageList = addOnnList[0].subCovers.filter((ele: any) => ele.coverAvailability === 'MANDATORY');
        this.CompPlanFinalDiscPrice = this.insuranceData.plans[1].netPremium;
        this.CompPlanFinalPrice = this.insuranceData.plans[1].grossPremium;
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
