import { Component, OnInit, Inject, TemplateRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export enum DialogClass {
  XLARGE='dialog-xl',
  LARGE='dialog-lg',
  MEDIUM='dialog-md',
  SMALL='dialog-sm'
}

export class DialogButton {
  label?:string;
  clickFn?:(any?)=>void;
  style?:string;
  closeDialog?:boolean;
}

export class DialogButtonTemplate {
  templateRef:TemplateRef<any>;
}


export class DialogData {
  title?: string;
  message?: string;
  data?:any;
  templateRef?:()=>TemplateRef<any>;
  hideHeader?:boolean;
  hideFooter?:boolean;
  buttons?:DialogButton[];
  buttonTemplates?:DialogButtonTemplate[];
  closeBtnLabel?:string;
  dialogClass?:DialogClass;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit,AfterViewInit {

  dialogData: DialogData;
  dialogBodyTemplate:TemplateRef<any>;

  constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
              ) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    if(this.data && this.data.templateRef) {
      setTimeout(()=>
      this.dialogBodyTemplate=this.data.templateRef());
    }
  }

  onConfirm(button:DialogButton): void {
    if(button.clickFn) {
      button.clickFn(this.data.data);
    }
    if(button.closeDialog) {
      this.dialogRef.close(true);
    }   
  }

  onDismiss(): void {
      this.dialogRef.close(false);
  }
}

