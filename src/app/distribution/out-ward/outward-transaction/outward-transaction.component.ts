import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-outward-transaction',
  templateUrl: './outward-transaction.component.html',
  styleUrls: ['./outward-transaction.component.scss']
})
export class OutwardTransactionComponent implements OnInit {
subscription:Subscription=new Subscription();
authDetails:any;
  menuArray: Menu[];
  constructor(private authservice:AuthService, private route:Router) { }

  ngOnInit() {
    // this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    // this.menuArray = this.authDetails[3].menus;
    // this.menuArray = this.menuArray.filter(x=>x.menuName !== "Outward Register");
    // console.log(this.menuArray);
    this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
      this.authDetails.filter(x=>{
        if(x.menuName == 'Outward'){
          this.menuArray = x.menus;
          this.menuArray = this.menuArray.filter(x=>x.menuName !== "Outward Register");
        }
      });
  }

  trans(val) {
    var r  = val.split("ebusiness");
    r = r[1];
    console.log(r);
    this.route.navigate([r]);  // Pass the path as an array
}


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
