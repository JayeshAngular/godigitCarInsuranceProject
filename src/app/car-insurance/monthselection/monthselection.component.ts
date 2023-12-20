import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-monthselection',
  templateUrl: './monthselection.component.html',
  styleUrls: ['./monthselection.component.css']
})
export class MonthselectionComponent {
  year:string | null = null;
  display: string | undefined;
  monthArr:any[]=["January", "February","March","April","May","June","July","August","September","October","November","December"];
  constructor(private router:Router, private activaterouter:ActivatedRoute) {
    this.year = this.activaterouter.snapshot.paramMap.get('year')
  }
  ngOnInit(){
    this.display='block';
 }
 selectMonth(month:any) {
  this.router.navigate(['/car-insurance/city-selection',this.year,month])
 }
}
