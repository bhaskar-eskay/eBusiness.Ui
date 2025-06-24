import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { FinanceService } from '../finance.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { Router } from '@angular/router';
import { MyCustomDialogComponent } from 'src/app/shared/components/my-custom-dialog/my-custom-dialog.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
export interface PeriodicElement {
  shName: string;
  ProductName: string;  
  ProductPack: string; 
  ProductType: string; 
  companyName: string; 
  tax: string; 
  hsncode: string; 
  
}

@Component({
  selector: 'app-bank-payment',
  templateUrl: './bank-payment.component.html',
  styleUrls: ['./bank-payment.component.scss']
})
export class BankPaymentComponent implements OnInit {
  displayedColumns: string[] = ['shName', 'ProductName', 'ProductPack',  'Actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  sNo: any;
  protected _onDestroy = new Subject<void>();
  
  constructor(private financeService : FinanceService, private router:Router,public dialog: MatDialog,) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getVoucherData();
  }


  getVoucherData(){
    this.financeService.getAllVoucherData(8).subscribe(data =>{
      if(data){
        data.forEach(x =>{
          x.finTranHeadDate = x.finTranHeadDate.split('T')[0];
        });
        this.sNo = data.length;
        this.dataSource = new MatTableDataSource(data);
        setTimeout(() => {
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
        }, 100); 
     }
    });
  }
  

  deleteItem(data){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
    const dialogRef = this.dialog.open(MyCustomDialogComponent, dialogConfig);
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(result => {
        if (result === true) {
          this.delete(data);
        }
      });
  }

  delete(element?: any) {
    this.financeService.doDeletCashList(element.finTranHeadId).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Bank Payment List Had already deleted") : '');
  }
  
  refresh(): void {
  }

  getByEdit(element?: any){
    this.financeService.sendListData(element);
    setTimeout(() => {
      this.router.navigate(['pharma/finance/bPaymentEntry']);
    }, 200);
}

  cashRegi(){
    this.financeService.sendListData(null);
    setTimeout(() => {
      this.router.navigate(['pharma/finance/bPaymentEntry']);
    }, 200);
  }


}
