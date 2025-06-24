import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-inward-registers',
  templateUrl: './inward-registers.component.html',
  styleUrls: ['./inward-registers.component.scss']
})
export class InwardRegistersComponent implements OnInit {

authDetails:any;
  menuArray: Menu[];
  constructor(private route:Router) { }

  ngOnInit() {
    // this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    // this.menuArray = this.authDetails[2].menus;
    // this.menuArray = this.menuArray.filter(x=>x.menuName !== "Inward Register");
    // console.log(this.menuArray);
    this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
      this.authDetails.filter(x=>{
        if(x.menuName == 'Inward'){
          this.menuArray = x.menus;
          this.menuArray = this.menuArray.filter(x=>x.menuName !== "Inward Register");
        }
      });
  }

  trans(val) {
    var r  = val.split("ebusiness");
    r = r[1];
    console.log(r);
    if ( r == "/pharma/inward/purchaseReturns"){
      return this.route.navigate(['/pharma/inward/purchaseRegister'],
        {queryParams:{from:'purchaseReturns'}}
      );
    }
    if( r == "/pharma/inward/purchases" || r == "/pharma/inward/purchaseOrders" || r == "/pharma/inward/internalStockAdjustmentsPlus" || r == "/pharma/inward/otherPurchases" || r == "pharma/inward/supplierIssuedCreditNotes" 
      || "pharma/inward/supplierIssuedDebitNotes" || "pharma/inward/supplierRateDifferenceCreditNotes" || "pharma/inward/supplierRateDifferenceDebitNotes"
    ){
      this.route.navigate(['/pharma/inward/purchaseRegister']);
    }
    else {
      this.route.navigate([r]); 
    } // Pass the path as an array
}


  ngOnDestroy(){

  }

  navigation(){
    this.route.navigate(['pharma/inward/purchaseRegister']);
  }

}
