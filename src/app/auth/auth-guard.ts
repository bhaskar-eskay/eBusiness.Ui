import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { RouteService } from '../shared/services/route.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(
      private authService: AuthService,
      private routeService:RouteService
  ) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.authService.authDetails$.pipe(map(details=>{
        if(details && details.isAuthenticated) {
          return true;
        } else {
          this.routeService.navigateToLogin();
        }
        return false; 
      }));
  }
}