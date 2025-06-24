import { AlertTypeConstants } from '../components/alert/alert-constants';
import { Subject } from 'rxjs';

export class AppMessage {
    id:string;
    type:string;
    isClear:boolean;
    hasTimeOut?:boolean;
    messages:string|string[];
}

export default class AppMessageUtils {

    private static messageEmitter:Subject<AppMessage>= new Subject<AppMessage>();
    static messageEmitter$=AppMessageUtils.messageEmitter.asObservable();
    private static notificationEmitter:Subject<AppMessage>= new Subject<AppMessage>();
    static notificationEmitter$=AppMessageUtils.notificationEmitter.asObservable();

    static throwError(messages:string|string[], alertId?:string) {
        let appMessage=AppMessageUtils.getAppMessage(messages,alertId);
        appMessage.type=AlertTypeConstants.ERROR;
        appMessage.hasTimeOut=true;
        AppMessageUtils.emitMessage(appMessage);
    }

    static throwInfo(messages:string|string[], alertId?:string) {
        let appMessage=AppMessageUtils.getAppMessage(messages,alertId);
        appMessage.type=AlertTypeConstants.INFO;
        appMessage.hasTimeOut=true;
        AppMessageUtils.emitMessage(appMessage);
    }

    

    private static getAppMessage(messages:string|string[], alertId?:string) {
        let appMessage=new AppMessage();
        appMessage.messages=messages;
        if(alertId) {
            appMessage.id=alertId;
        }
        return appMessage;
    }

    private static emitMessage(appMessage:AppMessage) {
        AppMessageUtils.messageEmitter.next(appMessage);
    }

    static errorMessage(messages:string|string[], alertId?:string) {
        let appMessage=AppMessageUtils.getAppMessage(messages,alertId);
        appMessage.type=AlertTypeConstants.ERROR;
        AppMessageUtils.emitMessage(appMessage);
    }

    static successMessage(messages:string|string[], alertId?:string) {
        let appMessage=AppMessageUtils.getAppMessage(messages,alertId);
        appMessage.type=AlertTypeConstants.SUCCESS;
        appMessage.hasTimeOut=true;
        AppMessageUtils.emitMessage(appMessage);
    }

    static infoMessage(messages:string|string[], alertId?:string) {
        let appMessage=AppMessageUtils.getAppMessage(messages,alertId);
        appMessage.type=AlertTypeConstants.INFO;
        AppMessageUtils.emitMessage(appMessage);
    }

    static warningMessage(messages:string|string[], alertId?:string) {
        let appMessage=AppMessageUtils.getAppMessage(messages,alertId);
        appMessage.type=AlertTypeConstants.WARNING;
        AppMessageUtils.emitMessage(appMessage);
    }

    static clearMessage(alertId?:string) {
        let appMessage=new AppMessage();
        appMessage.isClear=true;
        if(alertId) {
            appMessage.id=alertId;
        }
        AppMessageUtils.emitMessage(appMessage);
    }

    private static emitNotification(appMessage:AppMessage) {
        AppMessageUtils.notificationEmitter.next(appMessage);
    }

    static errorNotification(messages:string) {
        let appMessage=AppMessageUtils.getAppMessage(messages);
        appMessage.type=AlertTypeConstants.ERROR;
        AppMessageUtils.emitNotification(appMessage);
    }

    static successNotification(messages:string) {
        let appMessage=AppMessageUtils.getAppMessage(messages);
        appMessage.type=AlertTypeConstants.SUCCESS;
        AppMessageUtils.emitNotification(appMessage);
    }

    static infoNotification(messages:string) {
        let appMessage=AppMessageUtils.getAppMessage(messages);
        appMessage.type=AlertTypeConstants.INFO;
        AppMessageUtils.emitNotification(appMessage);
    }

    static warningNotification(messages:string) {
        let appMessage=AppMessageUtils.getAppMessage(messages);
        appMessage.type=AlertTypeConstants.WARNING;
        AppMessageUtils.emitNotification(appMessage);
    }

    static clearNotification() {
        let appMessage=new AppMessage();
        appMessage.isClear=true;
        AppMessageUtils.emitNotification(appMessage);
    }

}