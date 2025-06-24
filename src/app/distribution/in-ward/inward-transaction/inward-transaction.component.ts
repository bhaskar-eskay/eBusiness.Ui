import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inward-transaction',
  templateUrl: './inward-transaction.component.html',
  styleUrls: ['./inward-transaction.component.scss']
})
export class InwardTransactionComponent implements OnInit {
authDetails:any;
  menuArray: Menu[];
  constructor( private route:Router) { }

  ngOnInit() {
      this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
      this.authDetails.filter(x=>{
        if(x.menuName == 'Inward'){
          this.menuArray = x.menus;
          this.menuArray = this.menuArray.filter(x=>x.menuName !== "Inward Register");
        }
      });
      // this.menuArray = this.authDetails[2].menus;
      // this.menuArray = this.menuArray.filter(x=>x.menuName !== "Inward Register");
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
