import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance-transaction',
  templateUrl: './finance-transaction.component.html',
  styleUrls: ['./finance-transaction.component.scss']
})
export class FinanceTransactionComponent implements OnInit {

authDetails:any;
  menuArray: Menu[];
  constructor( private route:Router) { }

  ngOnInit() {
    // this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    // this.menuArray = this.authDetails[5].menus;
    // console.log(this.menuArray);
    this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    this.authDetails.filter(x=>{
      if(x.menuName == 'Finance'){
        this.menuArray = x.menus;
      }
    });
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
