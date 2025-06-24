import { Component, OnInit, ViewChild } from '@angular/core';
import { FinanceService } from '../finance.service';
import { Router } from '@angular/router';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { takeUntil } from 'rxjs/operators';
import { MyCustomDialogComponent } from 'src/app/shared/components/my-custom-dialog/my-custom-dialog.component';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-journal-voucher',
  templateUrl: './journal-voucher.component.html',
  styleUrls: ['./journal-voucher.component.scss']
})
export class JournalVoucherComponent implements OnInit {
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
    this.financeService.getAllVoucherData(9).subscribe(data =>{
      if(data){
        data.forEach(x =>{
          x.finTranHeadDate = x.finTranHeadDate.split('T')[0];
        });
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
        this.router.navigate(['pharma/finance/jvRcptEntry']);
      }, 200);
  }

  rcptEntry(){
    this.financeService.sendListData(null);
    setTimeout(() => {
      this.router.navigate(['pharma/finance/jvRcptEntry']);
    }, 200);
  }

}
