import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-reports',
  templateUrl: './stock-reports.component.html',
  styleUrls: ['./stock-reports.component.scss']
})
export class StockReportsComponent implements OnInit {
  authDetails: any;
  menuArray: Menu[];

  constructor(private router:Router,) { }

  ngOnInit() {
    this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    this.authDetails.filter(x=>{
      if(x.menuName == 'Inventory Reports'){
        var menus = x.menus;
        menus.filter(y =>{
          if(y.menuName == 'Stock Reports'){
          this.menuArray = y.menus;
          }
        })
      }
    });
  }


  report(data:any){
    var r  = data.split("ebusiness");
    r = r[1];
    console.log(r);
    this.router.navigate([r]);
  //   debugger;
  //  console.log(data);
  //  this.router.navigate(['.pharma/inventoryReports/stockReports/stockPosition']);
  }

}
