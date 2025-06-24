import { Component, OnInit, Input, ViewChild, TemplateRef, OnChanges, OnDestroy } from '@angular/core';
import { AlertContent, AlertMessage } from './alert-model';
import { AlertTypeConstants, AlertIconConstants, AlertNameConstants } from './alert-constants';
import { Subscription, Subject } from 'rxjs';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnChanges, OnDestroy {

  alerts:AlertDataType[]=[];
  subscription:Subscription=new Subscription();
  private alertId:string;
  @Input() id:string;
  @Input() content:AlertContent;

  constructor(private alertService: AlertService) { 
  }

  ngOnInit() {
      this.subscription.add(this.alertService.alertMessage$.subscribe(data=>{
        if(data && data.id===this.alertId) {
          setTimeout(()=>this.doAddAlertMessage(data));
        }
      }));
      this.subscription.add(this.alertService.clearAlert$.subscribe(data=>{
        if(data && data.id===this.alertId) {
          setTimeout(()=>this.doClearAlerts());
        }
      }));

  }

  ngOnChanges() {
    if(this.id) {
      this.alertId=this.id;
    }
    if(this.content) {
      this.content=this.content;
    }

  }

  private doClearAlerts() {
    this.alerts=[];
  }

  private doAddAlertMessage(alertMessage:AlertMessage) {
    if(this.alerts) {
      let alert =this.alerts.filter(item=>item.type===alertMessage.type);
      if(alert.length>=1) {
        this.alerts=this.alerts.map(item=>{
          if(item.type===alertMessage.type && (alertMessage.messages.length>1 || !alert[0].messages.includes(alertMessage.messages[0]))) {
            return this.getAlertWithIconAndName(new AlertDataType(alertMessage.type,[...alert[0].messages,...alertMessage.messages]));
          }
          return item;
        })     
      } else {
        this.alerts=[...this.alerts,this.getAlertWithIconAndName(new AlertDataType(alertMessage.type,alertMessage.messages))];
        if(alertMessage.isTimedOut) {
          this.alerts[0].hasTimer=true;
          setTimeout(()=>this.doCloseAlert(this.alerts[0]),5000);
        }
      }
    } else {
      this.alerts=[this.getAlertWithIconAndName(new AlertDataType(alertMessage.type,alertMessage.messages))];
      if(alertMessage.isTimedOut) {
          this.alerts[0].hasTimer=true;
          setTimeout(()=>this.doCloseAlert(this.alerts[0]),5000);
      }
    }

  }

  private getAlertWithIconAndName(alertDataTypeObj:AlertDataType) {
    let alertDataType=alertDataTypeObj;
    alertDataType.icon=this.getAlertIcon(alertDataType.type);
    alertDataType.name=this.getAlertName(alertDataType.type);
    return alertDataType;
  }

  getAlertIcon(alertType:string) {
    switch(alertType) {
      case AlertTypeConstants.ERROR: return AlertIconConstants.ERROR;
      case AlertTypeConstants.WARNING: return AlertIconConstants.WARNING;
      case AlertTypeConstants.SUCCESS: return AlertIconConstants.SUCCESS;
      case AlertTypeConstants.INFO: return AlertIconConstants.INFO;
    }
  }

  getAlertName(alertType:string) {
    switch(alertType) {
      case AlertTypeConstants.ERROR: return AlertNameConstants.ERROR;
      case AlertTypeConstants.WARNING: return AlertNameConstants.WARNING;
      case AlertTypeConstants.SUCCESS: return AlertNameConstants.SUCCESS;
      case AlertTypeConstants.INFO: return AlertNameConstants.INFO;
    }
  }

  isAlertExists(alert) {
    return alert && 
    alert.type && 
    ((alert.messages && alert.messages.length>0) || alert.content)
    && !alert.isClosed;
  }

  doCloseAlert(alert:AlertDataType) {
    this.alerts=this.alerts.length>1?[...this.alerts.filter(item=>item.type!==alert.type)]:[];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

class AlertDataType{
  hasTimer?:boolean;
  icon?:string;
  name?:string;
  constructor (public type:string,public messages?:string[],public content?:TemplateRef<any>) {}
};
