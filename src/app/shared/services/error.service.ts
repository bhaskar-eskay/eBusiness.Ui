import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorService {

  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
      return 'No Internet Connection';
    }
    return error.toString();
  }

  getServerMessage(error: HttpErrorResponse): string {
    if (!navigator.onLine) {
      return 'No Internet Connection';
    }
    if(error.status) {
    }
    if(error.error){
      if(error.error.resultDescription && typeof error.error.resultDescription === 'string') {
        return error.error.resultDescription;
      }
    }

    return "Error while invoking the service";
  }

}
