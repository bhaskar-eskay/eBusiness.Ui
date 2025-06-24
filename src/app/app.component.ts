import { Component, OnInit, OnDestroy} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';
import { RouteConst } from './shared/app-constants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  authDetails:AuthDetails;
  basePath=environment.BASE_HREF;
  firmName:string;
  defaultFirmName:string;
  hideMenu=true;
  headerMenu=[
    {link:RouteConst.USER_PROFILE, label:'User Profile'},
    {link:RouteConst.CHANGE_PASSWORD, label:'Change Password'},
    {link:RouteConst.USER_PREF, label:'Preferences'},
  ];
  subscription:Subscription=new Subscription();

  constructor(private authservice: AuthService){
  }

  ngOnInit(): void {
    this.subscription.add(this.authservice.getFirmName().subscribe(firmName=>{
      this.defaultFirmName=firmName;
      if(!this.firmName) {
        this.firmName=this.defaultFirmName;
      }
    }));
    this.subscription.add(this.authservice.authDetails$.subscribe(authDetails => {
      this.hideMenu=true;
      this.authDetails=authDetails;
      this.firmName=this.authDetails && this.authDetails.firmName? this.authDetails.firmName: this.defaultFirmName;
      }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  expandMenu(expand:boolean=true) {
    this.hideMenu=!expand;
  }

 
  
}
