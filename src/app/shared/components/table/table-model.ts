import { TemplateRef } from '@angular/core';
import { DialogData } from '../dialog/dialog.component';

export interface TableDefinition {
    columns:TableColumn[];
    getColOrderFn?:() => string[];
    setColOrderFn?:(any) => void;
    disableColDrag?:boolean;
    pageSizeOptions?:number[];
    disableFilter?: boolean;
    disablePagination?: boolean; 
}

export interface TableColumn {
    id:string;
    name:string;
    value?:(any)=>string;
    disableSort?:boolean;
    template?:TableTemplate;
    actions?:TableAction[];
}

export interface TableAction {
    method?:(any)=>void;
    isDisabled?:(any)=>boolean;
    dialogProperties?:TableDialogProperties;
    name:string;
    icon?:string;
    style?:ActionStyle;
}

export interface TableTemplate {
    templateRef:()=>TemplateRef<any>;
    icon?:string;
    style?:string;
    position?:string;
    type:string;
}

export class TableDialogProperties extends DialogData {

}

export enum ActionStyle {
    EDIT='edit',
    DELETE='delete',
    // WHATSAPP='whatsapp-style',
    // EMAIL='email-style',
    SHARE ='share',
    PDF ='pdf',
    PRINT='print-style',
    IRN='IRN'

}