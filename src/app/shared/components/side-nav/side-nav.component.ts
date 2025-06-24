import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate, stagger, query, keyframes } from '@angular/animations';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('listAnimation', [
      transition('*=>*', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('100ms', [
          animate('0.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(-25px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 0.5 })
          ]))
        ]), { optional: true })
      ]),
    ])
  ]
})
export class SideNavComponent implements OnInit, OnChanges, OnDestroy {

  @Input('authDetails') authDetails: AuthDetails;
  @Input('maxLevel') maxLevel: number = 1;
  @Input('hideMenu') hideMenu: boolean;
  @Input('basePath') basePath: string;
  @Output('expand') expand: EventEmitter<boolean> = new EventEmitter();
  showMenu: boolean;
  selectedPItem: Menu;
  routeItem: Menu;
  menuItems: Menu[] = [];
  subscription: Subscription = new Subscription();
  isSelfNav: boolean;

  constructor(private router: Router, private locationStrategy: LocationStrategy) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!this.isSelfNav) {
          this.doSelectMenuOnNavEnd(null, 0, this.basePath + event.url);
        }
        this.isSelfNav = false;
      }
    });

    console.log(this.menuItems);
  }

  private doSelectMenuOnNavEnd(pItem: any, count: number, url: string) {
    if (count < this.maxLevel && this.menuItems) {
      let items = (pItem && pItem.menus) ? pItem.menus : this.menuItems;
      let currentItem = items.find(menu => url.startsWith(menu.menuPath));
      if (!currentItem && this.selectedPItem) {
        this.doDeSelectMenu(this.selectedPItem);
        this.expand.emit(false);
        this.selectedPItem = currentItem;
      } else if (currentItem) {
        if (count == 0) {
          this.selectedPItem = currentItem;
        }
        currentItem['selected'] = true;
        this.routeItem = currentItem;
        this.doSelectMenuOnNavEnd(currentItem, count + 1, url);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.hideMenu = this.hideMenu;
    if (changes) {
      if (changes.authDetails && this.authDetails && this.authDetails.isAuthenticated
        && !this.authDetails.isFirstLogin
        && this.authDetails.menu && this.authDetails.menu.length > 0) {
        this.resetVariables();
        this.menuItems = JSON.parse(JSON.stringify(this.authDetails.menu));
        localStorage.setItem("menuItems", JSON.stringify(this.menuItems))
        var inwardTransaction: any = {
          "menuId": 993,
          "menuName": "Transaction",
          "mainMenuId": 3,
          "menuPath": "/ebusiness/pharma/inward/InwardTransaction",
          "menuIcon": "",
          "displayInd": 1,
          "excelOutput": 0,
          "pdfOutput": 0,
          "screenOutput": 0,
          "printOutput": 0,
          "whatsappOutput": 0
        }
        var inwardRegister: any = {
          "menuId": 994,
          "menuName": "Register",
          "mainMenuId": 3,
          "menuPath": "/ebusiness/pharma/inward/InwardRegisters",
          "menuIcon": "",
          "displayInd": 1,
          "excelOutput": 0,
          "pdfOutput": 0,
          "screenOutput": 0,
          "printOutput": 0,
          "whatsappOutput": 0,
        }
        var outwardTransaction: any = {
          "menuId": 995,
          "menuName": "Transaction",
          "mainMenuId": 4,
          "menuPath": "/ebusiness/pharma/outward/OutwardTransaction",
          "menuIcon": "",
          "displayInd": 1,
          "excelOutput": 0,
          "pdfOutput": 0,
          "screenOutput": 0,
          "printOutput": 0,
          "whatsappOutput": 0
        }
        var outwardRegister: any = {
          "menuId": 996,
          "menuName": "Register",
          "mainMenuId": 6,
          "menuPath": "/ebusiness/pharma/outward/OutwardRegisters",
          "menuIcon": "",
          "displayInd": 1,
          "excelOutput": 0,
          "pdfOutput": 0,
          "screenOutput": 0,
          "printOutput": 0,
          "whatsappOutput": 0,
        }

        var financeTransaction: any = {
          "menuId": 997,
          "menuName": "Transaction",
          "mainMenuId": 6,
          "menuPath": "/ebusiness/pharma/finance/FinanceTransaction",
          "menuIcon": "",
          "displayInd": 1,
          "excelOutput": 0,
          "pdfOutput": 0,
          "screenOutput": 0,
          "printOutput": 0,
          "whatsappOutput": 0
        }
        var financeRegister: any = {
          "menuId": 998,
          "menuName": "Register",
          "mainMenuId": 3,
          "menuPath": "/ebusiness/pharma/finance/FinanceRegister",
          "menuIcon": "",
          "displayInd": 1,
          "excelOutput": 0,
          "pdfOutput": 0,
          "screenOutput": 0,
          "printOutput": 0,
          "whatsappOutput": 0,
        }
        // var finReportsTransaction: any = {
        //   "menuId": 999,
        //   "menuName": "Transaction",
        //   "mainMenuId": 6,
        //   "menuPath": "/ebusiness/pharma/financeReports/FinanceReportsTransaction",
        //   "menuIcon": "",
        //   "displayInd": 1,
        //   "excelOutput": 0,
        //   "pdfOutput": 0,
        //   "screenOutput": 0,
        //   "printOutput": 0,
        //   "whatsappOutput": 0
        // }
        // var finReportsRegister: any = {
        //   "menuId": 1000,
        //   "menuName": "Register",
        //   "mainMenuId": 3,
        //   "menuPath": "/ebusiness/pharma/financeReports/FinanceReportsRegister",
        //   "menuIcon": "",
        //   "displayInd": 1,
        //   "excelOutput": 0,
        //   "pdfOutput": 0,
        //   "screenOutput": 0,
        //   "printOutput": 0,
        //   "whatsappOutput": 0,
        // }        

        this.menuItems.forEach(y => {
          var newmenus;
          if(y.menuName == "Inward"){
            var inwardmenu = y;
            inwardmenu.menus.unshift(inwardTransaction, inwardRegister);
            newmenus = inwardmenu.menus.slice(0,2);
            y.menus = newmenus;
          }
          if(y.menuName == "Outward"){
            var inwardmenu = y;
            inwardmenu.menus.unshift(outwardTransaction, outwardRegister);
            newmenus = inwardmenu.menus.slice(0,2);
            y.menus = newmenus;
          }
          if(y.menuName == "Finance"){
            var inwardmenu = y;
            inwardmenu.menus.unshift(financeTransaction, financeRegister);
            newmenus = inwardmenu.menus.slice(0,2);
            y.menus = newmenus;
          }
          if(y.menuName == "Finance Reports"){
            var inwardmenu = y;
            newmenus = inwardmenu.menus.slice(0,0);
            y.menus = newmenus;
          }
        });        

        console.log(this.menuItems);
        // console.log('menu items------------', this.menuItems);
        this.showMenu = true;
      }
      if (changes.authDetails && this.maxLevel) {
        this.maxLevel = this.maxLevel;
      }
    }
  }

  private resetVariables() {
    this.showMenu = false;
    this.hideMenu = true;
    this.selectedPItem = null;
    this.routeItem = null;
    this.menuItems = [];
  }

  doSelectMenu(pItem: any, item: any, currentLevel: number) {
    // debugger;
    if (this.hideMenu) {
      this.expand.emit(true);
      return;
    }
    if (item['selected'] && item['selected'] == true) {
      this.doDeSelectMenu(item);
    } else {
      if (!item.menus || currentLevel === this.maxLevel - 1) {
        this.selectedPItem = pItem ? pItem : item;
        this.routeItem = item;
        let routePath = item.menuPath.replace(this.basePath, "");
        this.isSelfNav = true;
        console.log('menu routePath------------', routePath);
        this.router.navigate([routePath]);
      } else {
        item['selected'] = true;
      }

    }

    if (item.menuName == "Home") {
      this.selectedPItem = pItem ? pItem : item;
      this.routeItem = item;
      let routePath = item.menuPath.replace(this.basePath, "");
      this.isSelfNav = true;
      console.log('menu routePath------------', routePath);
      this.router.navigate([routePath]);
    }

    // if(item.menuName == "Inventory Reports"){
    //   this.router.navigate(['/pharma/inventoryReports'])
    // }

    if(item.menuName == "Finance Reports"){
      this.router.navigate(['/pharma/financeReports/FinanceReportsTransaction'])
    }
  }

  private doDeSelectMenu(item: Menu) {
    if (item) {
      item['selected'] = false;
      if (item.menus) {
        item.menus.forEach(element => {
          this.doDeSelectMenu(element);
        });
      }
    }
  }

  // isRouteItemSelected(item: Menu) {
  //   return !this.hideMenu && this.routeItem && this.routeItem.id === item.id;
  // }

  // isParentItemSelected(item: Menu) {
  //   return this.hideMenu && this.selectedPItem && this.selectedPItem.id === item.id;
  // }

  // onHover(hideMenu:boolean) {
  //   this.hideMenu=hideMenu;
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
