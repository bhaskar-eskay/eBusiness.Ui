import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-reports',
  templateUrl: './product-reports.component.html',
  styleUrls: ['./product-reports.component.scss']
})
export class ProductReportsComponent implements OnInit {
  authDetails: any;
  menuArray: Menu[];

  constructor() { }

  ngOnInit() {
    this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    this.authDetails.filter(x=>{
      if(x.menuName == 'Inventory Reports'){
        var menus = x.menus;
        menus.filter(y =>{
          if(y.menuName == 'Product Reports'){
          this.menuArray = y.menus;
          }
        })
      }
    });
  }

}
