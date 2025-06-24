import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConst } from '../shared/app-constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public collapedSideBar: any;
  @Input('menu') menus:[];

  constructor(private router:Router) {}

  ngOnInit() {
   
  }

  public receiveCollapsed($event: any) {
    this.collapedSideBar = $event;
  }

  navigateToChangePassword() {
    this.router.navigate([RouteConst.PATH,RouteConst.CHANGE_PASSWORD]);
  }

}
