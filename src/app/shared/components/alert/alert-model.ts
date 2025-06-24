import { TemplateRef } from '@angular/core';

export class AlertMessage {
    id:string;
    type:string;
    messages:string[]=[];
    isTimedOut?:boolean;
}

export class AlertContent {
    type?:string;
    templateFunction: () => TemplateRef<any>;
}