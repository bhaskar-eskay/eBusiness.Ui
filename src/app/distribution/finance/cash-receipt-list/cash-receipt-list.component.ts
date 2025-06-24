import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { FinanceService } from '../finance.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { MyCustomDialogComponent } from 'src/app/shared/components/my-custom-dialog/my-custom-dialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export interface PeriodicElement {
  shName: string;
  ProductName: string;  
  ProductPack: string; 
  ProductType: string; 
  companyName: string; 
  tax: string; 
  hsncode: string; 
  
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
//   {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
//  {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
//  {shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
//  {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
// {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
// {shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
// {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
// {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
// ];

@Component({
  selector: 'app-cash-receipt-list',
  templateUrl: './cash-receipt-list.component.html',
  styleUrls: ['./cash-receipt-list.component.scss']
})
export class CashReceiptListComponent implements OnInit {
  displayedColumns: string[] = ['shName', 'ProductName', 'ProductPack',  'Actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  sNo: any;
  protected _onDestroy = new Subject<void>();
  constructor(private financeService : FinanceService, private router:Router, public dialog: MatDialog, ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getVoucherData();
   
   
  }


  getVoucherData(){
    this.financeService.getAllVoucherData(5).subscribe(data =>{
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
  

  deleteId(data){
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
          AppMessageUtils.warningMessage("Cash Reciept Had already deleted") : '');
          this.getVoucherData();
  }
  
  refresh(): void {
  }

  getByEdit(element?: any){
      this.financeService.sendListData(element);
      setTimeout(() => {
        this.router.navigate(['pharma/finance/cashReceiptVoucherEntry']);
      }, 200);
  }

  clickCashList(){
    this.financeService.sendListData(null);
    setTimeout(() => {
      this.router.navigate(['pharma/finance/cashReceiptVoucherEntry']);
    }, 200);
  }



}
