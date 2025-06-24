import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { FinanceService } from '../finance.service';
import { takeUntil } from 'rxjs/operators';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { DatePipe } from '@angular/common';
import moment from 'moment';
import { values } from 'lodash';
import { element } from 'protractor';
import { BADFLAGS } from 'dns';
import { Router } from '@angular/router';
import { MyCustomDialogComponent } from 'src/app/shared/components/my-custom-dialog/my-custom-dialog.component';
import { Subject, Subscription } from 'rxjs';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';
import { HttpService } from 'src/app/shared/services/http.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
  rcNo: string;
  Amount: string;
  Discount: string;
  Actions: string;
}

@Component({
  selector: 'app-cash-receipt-voucher-entry',
  templateUrl: './cash-receipt-voucher-entry.component.html',
  styleUrls: ['./cash-receipt-voucher-entry.component.scss']
})
export class CashReceiptVoucherEntryComponent implements OnInit {

  cashReceiptVoucherEntryFormGroup: FormGroup;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'description', 'rcNo', 'Amount', 'Discount', 'Actions'];
  dataSource = new MatTableDataSource();
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
      { name: 'Head of Account', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 36, fxFlex1:36, isKeyColumn: true },
      { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 19, fxFlex1:19 },
      { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 14, fxFlex1:14 },
      { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 20, fxFlex1:20 },
      { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 10, fxFlex1:10 }
    ]
  };
  supplierData: any;
  deletePurchaseHeadTemplate: any;
  finTranHeadId: any = 0;
  sNo: any = 0;
  fintranId: any = 0;
  frimYearId: any;
  headNo: any ="";
  btnSave: string = 'Save';
  showClear: boolean;
  acId: any;
  instrumentTypes = [];
  instruType = new FormControl('');
  instruNo = new FormControl('');
  listshow: boolean;
  createdOn: any;
  modifiedOn: any;
  showTable : boolean = false;
  firmPreferences: any;
  minDate: any;
  maxDate: any;
  heaidngNu: any;
  protected _onDestroy = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private financeService: FinanceService, private datePipe: DatePipe, private router: Router, public dialog: MatDialog, 
    private service:OutWardHttpService, private todayDate:HttpService  ) { }



  ngOnInit() {
    this.cashReceiptVoucherEntryFormGroup = this.buildcashReceiptVoucherEntry();
    this.accName.valueChanges.subscribe(res => {
      if (typeof res === 'object') {
        this.supplierData = res;
        this.bindAccountDetails(res);
      }
    });
    // var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    var dt:any = this.todayDate.localDate();
    dt = this.datePipe.transform(dt, 'yyyy-MM-dd');
    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
    if(this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== ''){
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.firmPreferences.finEdate;
    }

    setTimeout(() => {
      this.cashReceiptVoucherEntryFormGroup.controls.finDate.setValue(dt);
      this.cashReceiptVoucherEntryFormGroup.controls.finContraId.disable();
      this.cashReceiptVoucherEntryFormGroup.controls.accShName.disable();
      this.cashReceiptVoucherEntryFormGroup.controls.cityName.disable();
    }, 200);

    this.showClear = true;

    this.instrumentTypes = [{ id: 1, type: 'CHECK' }, { id: 2, type: 'NEFT' }, { id: 3, type: 'ONLINE (UPI/NET BANKING/ANY OTHER ONLINE PAYMENT)' }]

    setTimeout(() => {
      this.financeService.getListData$.subscribe(rees => {
        if(rees != null){
          this.newGet(rees.finTranHeadId);
          this.finTranHeadId = rees.finTranHeadId;
          this.heaidngNu = rees.finTranHeadNo;
        }else{
          this.showTable = false;
        }
        
        // this.listshow = true;
      });
    }, 300);

    // this.subscription.add(this.service.getTabData$.subscribe(res=>{
    //   if(res != null && res){
    //     this.bindAccountDetails(res[0]);
    //     this.accName.setValue(res[0].accName);
    //   }
    // }));
  }
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

  subscription:Subscription=new Subscription();
  

  bindAccountDetails(data) {
    console.log(data);
    this.cashReceiptVoucherEntryFormGroup.patchValue({
      accShName: data.accShName,
      cityName: data.cityName,
      accMobile: data.accMobile,
      accGstIn: data.accGstIn
    });
  }


  addOrEdit(element) {
    this.financeService.editCashData(element.finTranId).subscribe(res => {
      this.commonMethod(res);
    });
  }


  deleteVocuherEntry(data){
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
    this.financeService.doDeleteCashVocuher(element.finTranId).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Voucher Had already deleted") : '');
          setTimeout(() => {
            this.newGet(this.finTranHeadId);
          }, 200);
          this.reset();
          
  }


  updateVocuehr() {
    const val = this.cashReceiptVoucherEntryFormGroup.controls
    const obj = {
      finTranId: this.fintranId,
      finTranSno: this.sNo,
      tranTypeHeadId: 5,
      finTranHeadDate: this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss'),
      finTranHeadId: this.finTranHeadId,
      finTranHeadNo: this.headNo,
      finTranAccId: this.acId,
      finTranContraId: this.firmPreferences.cashAccId,
      finTranDesc: val.finTranDesc.value,
      finTranAmount: val.Amount.value,
      finTranVno: val.finTranVno.value,
      firmYearId: this.frimYearId,
      cityName: val.cityName.value,
      accShName: val.accShName.value,
      accName: this.accName.value.accName,
      contraAccName: val.finContraId.value,
      accCityId: 0, createdBy: 0,
      createdOn: this.createdOn,
      modifiedBy: 0,
      modifiedOn: this.modifiedOn,
    }

    this.financeService.updateCashVData(obj, 'Cash Receipt Voucher').subscribe(data => {
      // this.finTranHeadId = data.resultObject;
      // if (this.listshow == true) {
      //   this.router.navigate(['pharma/finance/cashReceipts']);
      // }
      this.newGet(this.finTranHeadId);
      this.reset();
    });

  }


  

  refresh(): void {
  }

  reset() {
    this.btnSave = 'Save';
    this.showClear = true;
    this.accName.setValue('');
    this.cashReceiptVoucherEntryFormGroup.reset();
    this.cashReceiptVoucherEntryFormGroup.controls.finContraId.setValue("Cash On Hand");
    var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    setTimeout(() => {
      this.cashReceiptVoucherEntryFormGroup.controls.finDate.setValue(dt);
    }, 200);

  }

  commonMethod(res) {
    this.btnSave = 'Update';
    this.showClear = false;
    this.cashReceiptVoucherEntryFormGroup.controls.Amount.setValue(res.finTranAmount);
    this.cashReceiptVoucherEntryFormGroup.controls.finContraId.setValue("Cash On Hand");
    this.cashReceiptVoucherEntryFormGroup.controls.finDate.setValue(res.finTranHeadDate);
    this.cashReceiptVoucherEntryFormGroup.controls.finTranDesc.setValue(res.finTranDesc);
    this.cashReceiptVoucherEntryFormGroup.controls.finTranVno.setValue(res.finTranVno);
    this.accName.setValue(res.accName);
    this.acId = res.finTranAccId;
    this.fintranId = res.finTranId;
    this.sNo = res.finTranSno;
    this.finTranHeadId = res.finTranHeadId;
    this.frimYearId = res.firmYearId;
    this.headNo = res.finTranHeadNo;
    this.createdOn = res.createdOn;
    this.modifiedOn = res.modifiedOn;
  }


  saveCashRcptVchr() {
    if (this.btnSave == 'Update') {
      this.updateVocuehr();
    } else {
    const val = this.cashReceiptVoucherEntryFormGroup.controls
    const obj = Object.assign({});
    obj.finTranSno = this.sNo + 1;
    obj.finTranHeadDate = this.datePipe.transform(val.finDate.value,  'yyyy-MM-ddTh:mm:ss');
    obj.finTranHeadId = this.finTranHeadId;
    obj.finTranHeadNo = this.headNo;
    obj.finTranAccId = this.accName.value.accId;
    obj.finTranContraId = this.firmPreferences.cashAccId;
    obj.finTranDesc = val.finTranDesc.value;
    obj.finTranAmount = Number(val.Amount.value);
    obj.firmYearId = 0;
    obj.isDeleted = 0;
    obj.cityName = val.cityName.value;
    obj.accShName = val.accShName.value;
    obj.accName = this.accName.value.accName;
    obj.contraAccName = val.finContraId.value;
    obj.accCityId = this.accName.value.accCityId;
    obj.createdBy = 0;
    obj.createdOn = new Date().toISOString();
    obj.modifiedBy = 0,
      obj.modifiedOn = new Date().toISOString();
    obj.accId = this.accName.value.accId;
    obj.accName1 = "";
    obj.finTranVno = Number(val.finTranVno.value);
    obj.finTranId = 0;
    obj.tranTypeHeadId = 5;
    this.financeService.saveCashVoucherRecpt(obj, 'Cash Receipt Voucher').subscribe(data => {
      this.finTranHeadId = data.resultObject;
      this.newGet(data.resultObject);
      this.reset();
    });
  }

    
  }

  newGet(finTranHeadId){
    this.dataSource = new MatTableDataSource([]);
    this.financeService.editCashList(finTranHeadId).subscribe(res =>{
      this.headNo = res[0].finTranHeadNo;
      this.heaidngNu = res[0].finTranHeadNo;
      this.sNo = res.length;
      this.dataSource = new MatTableDataSource(res);
      this.showTable = true;
    });
  }

 validateFloatKeyPress(el) {
    var v = parseFloat(el.value);
    // el.value = (isNaN(v)) ? '' : v.toFixed(2);
    el.value = (Math.round(v * 100) / 100).toFixed(2);
}

ngOnDestroy(){
  // this.service.sendTabData('');
  this.subscription.unsubscribe();
}

}
