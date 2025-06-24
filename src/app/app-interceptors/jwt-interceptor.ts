
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements  HttpInterceptor {
    constructor(private authService: AuthService, public router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(request);
        const  authDetails = JSON.parse(sessionStorage.getItem("authDetails"));
        if(authDetails){
            if(authDetails.token){
                let token = authDetails.token;
                if (token && (!this.router.url.includes('login') && !this.router.url.includes('admin') && !request.url.includes('api/States') && !request.url.includes('api/Districts') && !request.url.includes('api/Cities') && !request.url.includes('api/FirmType') && !request.url.includes('api/CityPincodes') && !request.url.includes('api/Banks') &&
                 !request.url.includes('api/BankIfsc') && !request.url.includes('api/HsnMaster') && !request.url.includes('api/LTOTypes') && !request.url.includes('api/LTOS') && !request.url.includes('api/LTOPrefix'))) {
                    request = request.clone({setHeaders: { Authorization: `${'Bearer '+token}`}});
                }
            }
        }
      
     if(authDetails){
        if(authDetails.token){
            var token1 = authDetails.token;
        }
          }
        
        if(token1 && (!this.router.url.includes('login') && !this.router.url.includes('admin') && !request.url.includes('api/States') && !request.url.includes('api/Districts') && !request.url.includes('api/Cities') && !request.url.includes('api/FirmType') &&
         !request.url.includes('api/CityPincodes') && !request.url.includes('api/LTOPrefix') && !request.url.includes('api/Banks') && !request.url.includes('api/BankIfsc')  && !request.url.includes('api/LTOS') && !request.url.includes('api/HsnMaster') && !request.url.includes('api/LTOTypes'))){
            let api=request.url;
            request=request.clone({
              url:environment.BASE_URL1+api
            })
            return next.handle(request);
        }else{
            let api=request.url;
        request=request.clone({
          url:environment.BASE_URL+api
        })
        return next.handle(request);
        }
      
        
    }
}