import { Component, OnInit, VERSION, HostBinding, Input, OnChanges } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnChanges {

  version = VERSION;
  hasToggledTheme = false;
  @Input('authDetails') authDetails:AuthDetails;
  @Input('firmName') firmName:string;
  @Input('menu') menus:[];
  isAuthenticated:boolean;
  showUserOptions:boolean;
  constructor( private overlayContainer: OverlayContainer) { }

  currentTheme = 'default-theme';

  @HostBinding('class') componentCssClass;

  ngOnInit() {
    console.log(this.menus);
  }

  ngOnChanges() {
    this.isAuthenticated=false;
    this.showUserOptions=false;
    if(this.authDetails && this.authDetails.isAuthenticated) {
      this.isAuthenticated=true;
      this.showUserOptions=this.authDetails.isFirstLogin?!this.authDetails.isFirstLogin:true;
    }
    if(this.firmName) {
      this.firmName=this.firmName;
    }
  }

  onSetTheme(theme) {
    this.currentTheme = theme;
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
    const v = document.getElementsByClassName(theme)
    const d = document.getElementsByClassName(theme)[1];
  console.log(d)
  }

  logout(){
    if(this.authDetails && this.authDetails.logoutFunction) {
      this.authDetails.logoutFunction();
    }
  }

}
