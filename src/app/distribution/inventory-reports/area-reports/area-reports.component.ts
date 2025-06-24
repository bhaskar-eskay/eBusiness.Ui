import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-reports',
  templateUrl: './area-reports.component.html',
  styleUrls: ['./area-reports.component.scss']
})
export class AreaReportsComponent implements OnInit {
  authDetails: any;
  menuArray: Menu[];

  constructor() { }

  ngOnInit() {
    // this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    // this.menuArray = this.authDetails[4].menus[3].menus;
    this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
    this.authDetails.filter(x=>{
      if(x.menuName == 'Inventory Reports'){
        var menus = x.menus;
        menus.filter(y =>{
          if(y.menuName == 'Area Reports'){
          this.menuArray = y.menus;
          }
        })
      }
    });
  }

}
