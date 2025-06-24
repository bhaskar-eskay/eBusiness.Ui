import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent, DialogData,DialogClass } from './dialog.component';



@Injectable()
export class DialogService {

  constructor(private dialog:MatDialog) { }

  showDialogue(data:DialogData,dialogConfig?:MatDialogConfig) {
    let config={...dialogConfig} as MatDialogConfig;
    config.data=data;
    config.panelClass=data.dialogClass?data.dialogClass:DialogClass.SMALL;
    return this.dialog.open(DialogComponent, config);
  }

  closeAllDialogues() {
    this.dialog.closeAll();
  }
}
