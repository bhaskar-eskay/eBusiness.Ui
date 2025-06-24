import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FinanceService } from '../finance.service';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { MyCustomDialogComponent } from 'src/app/shared/components/my-custom-dialog/my-custom-dialog.component';
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

// const ELEMENT_DATA: PeriodicElement[] = [
//   { shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
// ];

@Component({
  selector: 'app-bank-receipt',
  templateUrl: './bank-receipt.component.html',
  styleUrls: ['./bank-receipt.component.scss']
})
export class BankReceiptComponent implements OnInit {
  displayedColumns: string[] = ['shName', 'ProductName', 'ProductPack', 'Actions'];
  dataSource = new MatTableDataSource();
  displayedColumns1: string[] = ['position', 'name', 'weight', 'symbol', 'description', 'rcNo', 'Amount', 'Discount', 'Actions'];
  dataSource1 = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  finTranHeadId: any;
  sNo: number;
  accName = new FormControl('');
  
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @ViewChild('finTranDate', { static: false }) date: ElementRef;

  customAccountAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Head of Account',
    isRequired: true,
    dataSourceFn: (name) => this.financeService.getCustomAccountsByName(name),
    minCount: 2,
    keyString: 'accName'
  };


  customAccountsOptsTable: OptionsTableDefinition = {
    panelWidth: 700,
    columns: [
      { name: 'Head of Account', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 50,fxFlex1:50, isKeyColumn: true },
      { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 50,fxFlex1:50 },
      { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 35,fxFlex1:35 },
      { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 50,fxFlex1:50 },
      { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 20,fxFlex1:20 }
    ]
  };
  supplierData: any;
  deletePurchaseHeadTemplate: any;
  fintranId: any = 0;
  frimYearId: any;
  headNo: any;
  showClear: boolean;
  acId: any;
  cmpName: string;
  showCash: boolean;
  bankShow: boolean;
  instrumentTypes = [];
  instruType = new FormControl('');
  instruNo = new FormControl('');
  protected _onDestroy = new Subject<void>();

  constructor(private financeService: FinanceService, private datePipe: DatePipe, private formBuilder: FormBuilder, private router : Router, public dialog: MatDialog,) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getVoucherData();
  }



  getVoucherData() {
    this.financeService.getAllVoucherData(6).subscribe(data => {
      if (data) {
        data.forEach(x => {
          x.finTranHeadDate = x.finTranHeadDate.split('T')[0];
        });
        this.sNo = data.length;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource1 = new MatTableDataSource(data);
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
          this.deleteList(data);
        }
      });
  }


  deleteList(element?: any) {
    this.financeService.doDeletCashList(element.finTranHeadId).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Voucher Had already deleted") : '');
          this.getVoucherData();
  }

  getByEdit(element?: any){
    this.financeService.sendListData(element);
    setTimeout(() => {
      this.router.navigate(['pharma/finance/bankentry']);
    }, 200);
}

  refresh() { }


  //Voucher Entry Data//



  buildcashReceiptVoucherEntry() {
    return this.formBuilder.group({
      finDate: [''],
      finContraId: ['Cash On Hand'],
      customAccId: [''],
      accShName: [''],
      cityName: [''],
      finTranDesc: [''],
      finTranVno: [''],
      Amount: [''],
      finDisc: [''],
    });
  }



  detailDelete(Obj) {
    return Obj.deleteFlag;
  }

  deleteTemplate() {
    return this.deletePurchaseHeadTemplate;
  }


  clickBank(){
    this.financeService.sendListData(null);
    setTimeout(() => {
      this.router.navigate(['pharma/finance/bankentry']);
    }, 200);
  }



}
