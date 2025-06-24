import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance-reports-transaction',
  templateUrl: './finance-reports-transaction.component.html',
  styleUrls: ['./finance-reports-transaction.component.scss']
})
export class FinanceReportsTransactionComponent implements OnInit {

authDetails:AuthDetails;
  menuArray: Menu[];
  constructor( private route:Router) { }

  ngOnInit() {
    this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    this.menuArray = this.authDetails[6].menus;
    // console.log(this.menuArray);
  }

  finance(val) {
    var r  = val.split("ebusiness");
    r = r[1];
    console.log(r);
    this.route.navigate([r]);  // Pass the path as an array
}


  ngOnDestroy(){

  }


}
