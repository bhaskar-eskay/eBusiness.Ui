import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import ResponseUtils from '../shared/utils/response-utils';
import { HttpService } from '../shared/services/http.service';
import { RouteService } from '../shared/services/route.service';
import { map, tap } from 'rxjs/operators';
import AppMessageUtils from '../shared/utils/app-message-utils';
import { environment } from 'src/environments/environment';
import AppCoreTransformer from '../shared/transformers/app-core-transformer';
import { CoreHttpService } from '../shared/http-services/core/core-http.service';
import { MasterService } from '../distribution/Master/master.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginAlert = "loginAlertId";
  private passwordUpdateSuccess: boolean;
  private authDetails: BehaviorSubject<AuthDetails> = new BehaviorSubject<AuthDetails>(null);
  authDetails$: Observable<AuthDetails> = this.authDetails.asObservable();
  private userMenus: any[] = [];
  constructor(private httpService: CoreHttpService, private routeService: RouteService, private masterService: MasterService) {
    this.doLogin(null);
    this.routeService.isLogout$.subscribe(isLogout => {
      if (isLogout) {
        this.clearAuthDetails();
      }
    });
  }

  login(name: string, id): Observable<any> {
    AppMessageUtils.clearMessage(this.loginAlert);
    return this.httpService.doPostAuthDetails(name).pipe(
      tap((data: any) => {
        if (ResponseUtils.isSuccessAndPayload(data)) {
          if (environment.useLocalStorage) {
            sessionStorage.setItem("authDetails", JSON.stringify(ResponseUtils.getPayload(data)));
            AppMessageUtils.successMessage(data['resultDescription']);
          }
          console.log(data);
          if (id == 2 || (data.resultObject.token != '' && data.resultObject.firmGroupId == 0)) {
            this.doLogin(ResponseUtils.getPayload(data));
          }
        } else {
          AppMessageUtils.errorMessage(data['payload'], this.loginAlert);
        }
        if (data['resultType'] == 2) {
          AppMessageUtils.warningMessage(data['resultDescription']);
        }
      })
    );
  }
  

  loadYears() {
    return this.httpService.doLoadAppData().pipe(map(data => {
      if (ResponseUtils.isSuccessAndPayload(data)) {
        return AppCoreTransformer.getAppData(ResponseUtils.getPayload(data));
      } else {
        return null;
      }
    }));
  }

  getFirmName() {
    return this.httpService.getFirmName().pipe(map(data => {
      if (ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      } else {
        return null;
      }
    }));
  }

  getToken() {
    if (this.authDetails.value && this.authDetails.value.token) {
      return this.authDetails.value.token;
    }
    return null;
  }

  isPasswordUpdateSuccess() {
    const successFlag = this.passwordUpdateSuccess;
    this.passwordUpdateSuccess = false;
    return successFlag;
  }

  changePassword(body, changePasswordAlertId) {
    this.httpService.doUpdatePassword(body).subscribe(data => {
      if (ResponseUtils.isStatus200(data)) {
        this.passwordUpdateSuccess = true;
        this.logout();
        AppMessageUtils.successNotification("Password has been updated successfully");
      } else if (ResponseUtils.hasPayload(data)) {
        AppMessageUtils.clearMessage(changePasswordAlertId);
        AppMessageUtils.errorMessage(ResponseUtils.getPayload(data), changePasswordAlertId);
      } else {
        AppMessageUtils.errorNotification("Error while invoking the service");
      }
    });
  }

  // forgotpassword(body){
  //   this.httpService.doforgotpassword(body).subscribe(data => {
  //     console.log(data);
  //   })
  // }

  logout() {
    if (!this.passwordUpdateSuccess) {
      AppMessageUtils.throwInfo("Logged-Out Successfully");
    }
    this.routeService.navigateToLogin();
    this.clearAuthDetails();
  }

  private clearAuthDetails() {
    this.userMenus = [];
    sessionStorage.removeItem("authDetails");
    this.authDetails.next(null);
  }

  private doLogin(payloadRes) {
    let payload = payloadRes;
    if (environment.useLocalStorage) {
      payload = JSON.parse(sessionStorage.getItem("authDetails"));
    }
    if (payload) {
      if (payload.firmUserId) {
        this.masterService.FirmMenus(payload.firmUserId).subscribe(x => {

          var stockmenu = [], companymenu = [], productmenu = [], areamenu = [], customermenu = [];

          function setMenu(menuName, menuArray) {
            x.forEach(r => {
              if (r.menuName == menuName) {
                x.filter(s => {
                  if (s.mainMenuId == r.menuId) {
                    menuArray.push(s);
                  }
                });
                r.menus = menuArray;
              }
            });
          }
          
          setMenu("Stock Reports", stockmenu);
          setMenu("Company Reports", companymenu);
          setMenu("Product Reports", productmenu);
          setMenu("Area Reports", areamenu);
          setMenu("Customer Reports", customermenu);
          

          // console.log(productmenu);
          if (x) {
            const array = x.filter(y => y.mainMenuId == 0);
            const child = x.filter(z => z.mainMenuId != 0);
            array.forEach(l => {
              l.menus = [];
              const finchid = child.filter(d => d.mainMenuId == l.menuId);
              if (finchid.length > 0) {
                l.menus = finchid;
              }
            });
            console.log(array);
            payload.menu = array;
            let authDetails = AppCoreTransformer.getAuthDetails(payload);
            if (authDetails) {
              authDetails.logoutFunction = () => this.logout();
              this.processUserMenus(authDetails.menu);
              this.authDetails.next(authDetails);
              this.routeService.navigateToDashboard();
            }

          }
        });
      }
    }

  }

  doUpdateUserName(name: string) {
    let authDetails: AuthDetails = this.authDetails.value;
    authDetails.name = name;
    this.authDetails.next(authDetails);
  }

  private processUserMenus(menus: any | any[]) {
    if (menus) {
      if (Array.isArray(menus)) {
        menus.forEach(menu => this.processUserMenus(menu))
      } else {
        let menuObj = { ...menus };
        delete menuObj['menus'];
        this.userMenus.push(menuObj);
        if (menus.menus) {
          menus.menus.forEach(menu => this.processUserMenus(menu))
        }
      }
    }
  }

  isRoutePathAccesable(comparisonString: String, isLabelComparision = false) {
    if (isLabelComparision) {
      return comparisonString && this.userMenus && this.userMenus.some(menu => menu.name === comparisonString);
    }
    return comparisonString && this.userMenus && this.userMenus.some(menu => menu.path === environment.BASE_HREF + comparisonString);
  }
}
