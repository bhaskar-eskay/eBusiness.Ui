import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import AppMessageUtils from '../shared/utils/app-message-utils';
import ResponseUtils from '../shared/utils/response-utils';
import { ErrorService } from '../shared/services/error.service';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private errorService: ErrorService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            map(data=>{
              // console.log('int--------', data);
              if(data && data instanceof HttpResponse && data['body'] && data['body']['metadata']) {
                  if(ResponseUtils.isStatus500(data['body'])) {
                    let errorMessage = ResponseUtils.hasPayload(data['body'])?
                    ResponseUtils.getPayload(data['body']):
                    data['body']['metadata']['outcome']['message'];
                    AppMessageUtils.throwError(errorMessage);
                  }
              }
              return data;
            }),
            catchError((error:HttpErrorResponse) => {
              AppMessageUtils.throwError(this.errorService.getServerMessage(error));
              return throwError(error);
            }),
          );    
        }
      }