import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss']
})
export class InProgressComponent implements OnInit {

  constructor(private router:Router) { }
backbtn: boolean = false;
  ngOnInit() {
    if(this.router.url.includes('financeReports') || this.router.url.includes('outward')){
      this.backbtn = true
    }
    else{
      this.backbtn = false;
    }
  }

goback(){
  // this.router.navigate(['pharma/financeReports/FinanceReportsTransaction']);
  if(this.router.url.includes('outward')){
    this.router.navigate(['pharma/outward/OutwardTransaction']);
  } else {
    this.router.navigate(['pharma/financeReports/FinanceReportsTransaction']);
  }
}

}
