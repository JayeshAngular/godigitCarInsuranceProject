import { Component } from '@angular/core';
import { CarService } from '../Svc/car.service';
import { HttpserviceService } from 'src/app/core/services/httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planselection',
  templateUrl: './planselection.component.html',
  styleUrls: ['./planselection.component.css']
})
export class PlanselectionComponent {
  carData: any;
  carRegData: any;
  carPolicyExpiryDate: any;
  PolicyClaimStatus: string = "";
  PolicyClaimBonus: string = "";
  comprehensivePlan: any;
  thirdpartyPlan: any;
  ClaimBonusArr:any[] = ["0", "20", "25", "35", "45", "50"]
  ClaimStatusArr: any[] = ["Yes", "No"];
  comprehensivePlanName: string = "";
  comprehensivePlanNetPremium!: number;
  thirdPartyPlanNetPremium!: number;
  thirdPartyPlanName: string = "";
  comprehensiveDiscountedPlan!: number;
  constructor(private carSVC: CarService, private http:HttpserviceService, private route:Router) {
    this.carPolicyExpiryDate = this.carSVC.getCarPolicyExpiryDate();
    this.carData = this.carSVC.getcarData();
    this.carRegData = this.carSVC.getCarRegistrationData();
  }
  ngOnInit() {
    this.getPlans();
   }
  getPlans() {
    const endPoint = "get-eligible-plan?"+"plans"
    this.http.getDataFromServer(endPoint).subscribe((resp: any) => {
      if (resp)
      {
        this.comprehensivePlan = resp.plans[0]
        this.thirdpartyPlan = resp.plans[1];
        this.comprehensivePlanName = this.comprehensivePlan.planName;
        this.thirdPartyPlanName = this.thirdpartyPlan.planName;
        this.comprehensivePlanNetPremium = this.comprehensivePlan.netPremium;
        this.thirdPartyPlanNetPremium = this.thirdpartyPlan.contract.coverages[0].netPremium;
      }
      this.comprehensiveDiscountedPlan = this.comprehensivePlan.netPremium - parseInt(this.comprehensivePlan.discounts.otherDiscounts[0].discountAmount)
    })
  }

  selectBonus(bonus: any) {
    this.PolicyClaimBonus = bonus;
    console.log(this.PolicyClaimBonus)
  }
  selectStatus(status: any) {
    this.PolicyClaimStatus = status;
    console.log(this.PolicyClaimStatus)
  }
}
