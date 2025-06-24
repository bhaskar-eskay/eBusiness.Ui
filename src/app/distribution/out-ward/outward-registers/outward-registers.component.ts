import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outward-registers',
  templateUrl: './outward-registers.component.html',
  styleUrls: ['./outward-registers.component.scss']
})
export class OutwardRegistersComponent implements OnInit {

authDetails:any;
  menuArray: Menu[];
  constructor( private route:Router) { }

  ngOnInit() {
    this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
      this.authDetails.filter(x=>{
        if(x.menuName == 'Outward'){
          this.menuArray = x.menus;
          this.menuArray = this.menuArray.filter(x=>x.menuName !== "Outward Register");
        }
      });
    // this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    // this.menuArray = this.authDetails[3].menus;
    // this.menuArray = this.menuArray.filter(x=>x.menuName !== "Outward Register");
      // console.log(this.menuArray);
  }

  trans(val) {
    var r  = val.split("ebusiness");
    r = r[1];
    console.log(r);
    if( r == "/pharma/outward/salesOrders" || r == "/pharma/outward/salesDeliveryChallans" || r == "/pharma/outward/salesInvoices"
      || r == "/pharma/outward/salesInvoices" || r == "/pharma/outward/salesReturns" || r == "pharma/outward/internalStockAdjustmentsMinus" 
      || "pharma/outward/otherSales" || "pharma/outward/generalCreditNotesIssueToCustomers" || "pharma/outward/generalDebitNotesIssueToCustomers"
      || "pharma/outward/rateDifferenceCreditNotesToCustomers" || "pharma/outward/rateDifferenceDebitNotesToCustomers" || "pharma/outward/quotations"
      || "pharma/outward/retailSales" || "pharma/outward/outwardRegisters"
    ){
      this.route.navigate(['/pharma/outward/saleRegister']);
    } // Pass the path as an array
}


  ngOnDestroy(){
  }

}
