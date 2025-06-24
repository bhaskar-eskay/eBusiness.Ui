import { Injectable } from '@angular/core';
import { Router, NavigationEnd, NavigationCancel } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RouteConst } from '../app-constants';

@Injectable()
export class RouteService {

  private logoutEmitter:Subject<boolean>=new Subject<boolean>();
  public isLogout$:Observable<boolean>=this.logoutEmitter.asObservable();

  private routeChangeEvent:Subject<boolean>=new Subject<boolean>();
  public routeChange$:Observable<boolean>=this.routeChangeEvent.asObservable();
  private previousURL:String;
  firmPreferences:any;

  constructor(private router:Router) { 
    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
    this.router.events.subscribe(event=> {
      this.routeChangeEvent.next(true);
      if(event instanceof NavigationEnd) {
          this.previousURL=event.url;
          if(event.urlAfterRedirects === RouteConst.PATH+RouteConst.LOGIN) {
            this.logoutEmitter.next(true);
          }
      }
    if(event instanceof NavigationCancel && this.previousURL && this.previousURL === RouteConst.PATH+RouteConst.LOGIN) {
      this.logoutEmitter.next(true);
    }
    });
  }

  navigateToLogin() {
    this.router.navigate([RouteConst.PATH,RouteConst.LOGIN]);
  }

  navigateToChangePassword() {
    this.router.navigate([RouteConst.PATH,RouteConst.CHANGE_PASSWORD]);
  }

  navigateToUser() {
    this.router.navigate([RouteConst.PATH,RouteConst.USER]);
  }

  navigateToDashboard() {
    this.router.navigate([RouteConst.PATH,
      RouteConst.PHARMA,RouteConst.DASHBOARD]);
  }

  navigateToAdmin() {
    this.router.navigate([RouteConst.ADMIN, RouteConst.PHARMA]);
  }

  downloadExcel(data:any) {
    // Convert the base64 string to a Blob (Excel format)
    const byteCharacters = atob(data.base64Excel); // Decode base64
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
      const slice = byteCharacters.slice(offset, offset + 1024);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      byteArrays.push(new Uint8Array(byteNumbers));
    }

    const blob = new Blob(byteArrays, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Create a link to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${data.name}.xlsx`;  // The name of the downloaded file
    link.click(); // Programmatically trigger a click to start the download
  }

   formatAmount(value: any): any {
    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
    let numberValue = parseFloat(value);
    if (isNaN(numberValue)) {
      return '0.00';
    }
    // Ensure two decimal places
    return numberValue.toFixed(this.firmPreferences ? this.firmPreferences.rateDecimals : 0);
  }

   formatQnty(value: string): string {
    let numberValue = parseFloat(value);
    if (isNaN(numberValue)) {
      return '0.00';
    }
    // Ensure two decimal places
    return numberValue.toFixed(this.firmPreferences ? this.firmPreferences.qtyDecimals : 0);
  }

}
