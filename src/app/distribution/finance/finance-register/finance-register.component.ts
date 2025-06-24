import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-finance-register',
  templateUrl: './finance-register.component.html',
  styleUrls: ['./finance-register.component.scss']
})
export class FinanceRegisterComponent implements OnInit {

authDetails:any;
  menuArray: Menu[];
  constructor(private route:Router) { }

  ngOnInit() {
    this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    this.authDetails.filter(x=>{
      if(x.menuName == 'Finance'){
        this.menuArray = x.menus;
      }
    });
    // this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    // this.menuArray = this.authDetails[5].menus;
    // console.log(this.menuArray);
  }

  trans(val) {
    var r  = val.split("ebusiness");
    r = r[1];
    console.log(r);
    if( r == "/pharma/finance/cashReceipts"){
      this.route.navigate(['/pharma/finance/cashReceiptRegister'],
        {queryParams:{from:'cashReceiptRegister'}}
      );
    }
    if( r == "/pharma/finance/bankReceipts"){
      this.route.navigate(['/pharma/finance/bankreceiptRegister'],
      {queryParams:{from:'bankreceiptRegister'}}
    );
    }
    if( r == "/pharma/finance/cashPayments"){
      this.route.navigate(['/pharma/finance/cpRegister'],
      {queryParams:{from:'cpRegister'}}
    );
    }
    if( r == "/pharma/finance/bankPayments"){
      this.route.navigate(['/pharma/finance/bpRegister'],
      {queryParams:{from:'bpRegister'}}
    );
    }
    if( r == "/pharma/finance/journalVouchers"){
      this.route.navigate(['/pharma/finance/jvRegister'],
      {queryParams:{from:'jvRegister'}}
    );
    }
}


  ngOnDestroy(){

  }


}
