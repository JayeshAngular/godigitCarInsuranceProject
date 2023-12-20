import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yearselection',
  templateUrl: './yearselection.component.html',
  styleUrls: ['./yearselection.component.css']
})
export class YearselectionComponent {
  constructor(private router:Router) {}
  display: string | undefined;
  yearArr:any[] = ["2004","2005","2006","2007","2008","2009","2010","2011",
                    "2012","2013","2014","2015","2016","2017","2018","2019",
                  "2020","2021","2022","2023"];
  ngOnInit(){
    this.display='block';
 }
 selectYear(year:String) {
  this.router.navigate(['/car-insurance/month-selection', year])
 }
}
