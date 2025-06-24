import { Injectable, Inject, OnInit, OnDestroy } from '@angular/core';
import { AlertMessage } from './alert-model';
import { Subject, Observable, Subscription } from 'rxjs';
import { AlertTypeConstants } from './alert-constants';
import AppMessageUtils, { AppMessage } from '../../utils/app-message-utils';
import { NotificationsService, NotificationAnimationType, NotificationType } from 'angular2-notifications';

@Injectable()
export class AlertService implements OnDestroy {

  private appAlertId;
  private alertMessageEmitter:Subject<AlertMessage>=new Subject<AlertMessage>();
  private clearAlertEmitter:Subject<AlertMessage>=new Subject<AlertMessage>();
  alertMessage$:Observable<AlertMessage>=this.alertMessageEmitter.asObservable();
  clearAlert$:Observable<AlertMessage>=this.clearAlertEmitter.asObservable();

  private subscription:Subscription=new Subscription();

  constructor(@Inject('config') private config:SharedConfig, public notificationService:NotificationsService) {
    this.appAlertId=config.appAlertId;
    this.subscription.add(AppMessageUtils.messageEmitter$.subscribe(appMessage=>
      this.appMessageAlert(appMessage)
      ));

      this.subscription.add(AppMessageUtils.notificationEmitter$.subscribe(appMessage=>
        this.appMessageNotification(appMessage)
        ));
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

  private onAlert(type:string, messages:string|string[], id?:string) {
    let alertMessage=new AlertMessage();
    alertMessage.id = id ? id : this.appAlertId;
    alertMessage.type=type;
    if(messages) {
      if(typeof messages  == 'string') {
        alertMessage.messages=[messages];
      } else {
        alertMessage.messages=[...messages];
      }
    }
    this.alertMessageEmitter.next(alertMessage);
  }

  onTimeoutAlert(type:string, messages:string|string[], id?:string) {
    let alertMessage=new AlertMessage();
    alertMessage.id = id ? id : this.appAlertId;
    alertMessage.type=type;
    alertMessage.isTimedOut=true;
    if(messages) {
      if(typeof messages  == 'string') {
        alertMessage.messages=[messages];
      } else {
        alertMessage.messages=[...messages];
      }
    }
    this.alertMessageEmitter.next(alertMessage);
  }

  private onClear(id?:string) {
    let alertMessage=new AlertMessage();
    alertMessage.id = id ? id : this.appAlertId;
    this.clearAlertEmitter.next(alertMessage);
  }

  clearAlert(id?:string) {
    this.onClear(id);
  }

  infoAlert(messages:string|string[], id?:string) {
    this.onAlert(AlertTypeConstants.INFO,messages,id);
  }

  successAlert(messages:string|string[], id?:string) {
    this.onAlert(AlertTypeConstants.SUCCESS,messages, id);
  }

  warningAlert(messages:string|string[], id?:string) {
    this.onAlert(AlertTypeConstants.WARNING,messages, id);
  }

  errorAlert(messages:string|string[], id?:string) {
    this.onAlert(AlertTypeConstants.ERROR,messages, id);
  }

  appMessageAlert(appMessage:AppMessage) {
    if(appMessage) {
      if(appMessage.hasTimeOut) {
        this.onTimeoutAlert(appMessage.type,appMessage.messages,appMessage.id) 
      }else if(appMessage.isClear) {
        this.onClear(appMessage.id)
      } else {
        this.onAlert(appMessage.type,appMessage.messages,appMessage.id);
      }
    }
  }


  appMessageNotification(appMessage:AppMessage) {
    if(appMessage) {
      if(appMessage.isClear) {
        this.onNotificationClear();
      } else {
        this.onNotification(appMessage.type,appMessage.messages);
      }
    }
  }

  private onNotificationClear() {
    this.notificationService.remove();
  }

  private onNotification(type:string, messages:string|string[]) {
    let notificationMessage;
    let notificationType;
    let notificationTitle;
    if(typeof messages  == 'string') {
      notificationMessage=messages;
    } else {
      notificationMessage=messages[0];
    }
    // let notificationConfig={
    //   position:["top", "right"],
    //   timeOut:5000,
    //   showProgressBar:true,
    //   pauseOnHover:true,
    //   lastOnBottom:true,
    //   clickIconToClose:true,
    //   maxStack:5,
    //   animate:NotificationAnimationType.FromRight
    // };
    switch(type) {
        case AlertTypeConstants.ERROR: {
          notificationType=NotificationType.Error;
          notificationTitle='Error';
        }; break;
        case AlertTypeConstants.WARNING: {
          notificationType=NotificationType.Warn;
          notificationTitle='Warning';
        }; break;
        case AlertTypeConstants.SUCCESS: {
          notificationType=NotificationType.Success;
          notificationTitle='Success';
        }; break;
        case AlertTypeConstants.INFO: {
          notificationType=NotificationType.Info;
          notificationTitle='Info';
        }; break;
      }
    this.notificationService.create('', notificationMessage, notificationType);
  }




}
