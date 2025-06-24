import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-reports',
  templateUrl: './company-reports.component.html',
  styleUrls: ['./company-reports.component.scss']
})
export class CompanyReportsComponent implements OnInit {
  authDetails: any;
  menuArray: Menu[];

  constructor() { }

  ngOnInit() {
    this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    this.authDetails.filter(x=>{
      if(x.menuName == 'Inventory Reports'){
        var menus = x.menus;
        menus.filter(y =>{
          if(y.menuName == 'Company Reports'){
          this.menuArray = y.menus;
          }
        })
      }
    });
  }

}
