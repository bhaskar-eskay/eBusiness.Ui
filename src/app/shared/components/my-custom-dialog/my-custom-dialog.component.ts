import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-my-custom-dialog',
  templateUrl: './my-custom-dialog.component.html',
  styleUrls: ['./my-custom-dialog.component.scss']
})
export class MyCustomDialogComponent implements OnInit {
  modalTitle: string;
  dialog: any;
  buttontext: any;
  hintColor: string;
  btnyes: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<MyCustomDialogComponent>) {
    this.modalTitle = data.title;
    this.buttontext = data.buttontext;
    this.btnyes = data.btnyes;
    if (data.buttontext === 'Reset') {
      this.hintColor = '#C0C0C0';
    } else if (data.buttontext === 'Delete' || data.buttontext === 'No') {
      this.hintColor = '#f15e5e';
    } 
  }

  closeDialog() {
    this.dialogRef.close();
  }
  ngOnInit() {}
}
