import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productDropdownMenu:string[] = ["Car Insurance", "Two Wheeler/Bike Insurance", "Commercial Vehicle Insurance", "Taxi/Cab insurance", "Auto Rickshaw Insurance", "Truck Insurance"];

  claimDropdownMenu:string[] = ["File a Claim", "File Health Claim", "File Motor Claim fot Garages", "Check Health Claim Status", "Digit Chashless Garages", "Digit Cashless Hospitals"];
 
  resourcesDropdownMenu:string[] = ["Check Pending Challans", "FREE Credit Score Check", "Download Digit Policy", "Download Digit App", "Digit Pay", "Marine Open Certificate Issuarance", "Check KYC Status"];
  display: string | undefined;

}
