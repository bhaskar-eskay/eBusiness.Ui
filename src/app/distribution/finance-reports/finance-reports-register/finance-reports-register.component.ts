import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance-reports-register',
  templateUrl: './finance-reports-register.component.html',
  styleUrls: ['./finance-reports-register.component.scss']
})
export class FinanceReportsRegisterComponent implements OnInit {

authDetails:AuthDetails;
  menuArray: Menu[];
  constructor(private route:Router) { }

  ngOnInit() {

    this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    this.menuArray = this.authDetails[6].menus;
    // console.log(this.menuArray);
  }

  trans(val) {
    var r  = val.split("ebusiness");
    r = r[1];
    console.log(r);
    this.route.navigate([r]);  // Pass the path as an array
}


  ngOnDestroy(){

  }


}
