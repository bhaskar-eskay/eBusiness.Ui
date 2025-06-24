import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import { AlertService } from '../components/alert/alert.service';
import AppMessageUtils, { AppMessage } from '../utils/app-message-utils';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private _ngZone: NgZone,private errorService: ErrorService,private alertService: AlertService) { }

    handleError(error: any) {
        let message;
        if (error instanceof HttpErrorResponse) {
            message = this.errorService.getServerMessage(error);
            this._ngZone.run(() => {
              AppMessageUtils.throwError(message);
            });
        } else if(error instanceof AppMessage) {
          this._ngZone.run(() => {
            error.hasTimeOut=true;
            this.alertService.appMessageAlert(error);
        });
        }  else {
           console.error(error);
        }
    }
}
