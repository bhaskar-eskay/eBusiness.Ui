import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteTrigger, MatDialog, MatDialogConfig, MatSort, MatTableDataSource } from '@angular/material';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { FinanceService } from '../finance.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { MyCustomDialogComponent } from 'src/app/shared/components/my-custom-dialog/my-custom-dialog.component';
import { Subject, Subscription } from 'rxjs';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-bank-payment-voucher-entry',
  templateUrl: './bank-payment-voucher-entry.component.html',
  styleUrls: ['./bank-payment-voucher-entry.component.scss']
})
export class BankPaymentVoucherEntryComponent implements OnInit {
  @ViewChild('districtautoCompleteInput', {static:false, read: MatAutocompleteTrigger }) districtautoCompleteInput: MatAutocompleteTrigger;
  bankPaymentVoucherEntryFormGroup: FormGroup;
  accName = new FormControl('');
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'description', 'VoucherNo', 'Amount', 'Actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @ViewChild('finTranDate', { static: false }) date: ElementRef;

  customAccountAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Head of Account',
    isRequired: true,
    dataSourceFn: (name) => this.financeService.getCustomAccountsByName(name),
    minCount: 2,
    keyString: 'accName',
  };


  customAccountsOptsTable: OptionsTableDefinition = {
    panelWidth: 700,
    columns: [
      { name: 'Head of Account', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 36, fxFlex1 :36, isKeyColumn: true },
      { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 19, fxFlex1 : 19 },
      { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 14, fxFlex1 : 14 },
      { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 20 , fxFlex1 : 20},
      { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 10, fxFlex1 : 10 }
    ]
  };

  contraActDefintion: AutoCompleteDefinition = {
    label: 'Contra Account',
    isRequired: true,
    dataSourceFn: (name) => this.financeService.getContraData(6),
    minCount: 2,
    keyString: 'accName',
  };


  contraActsOptTable: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: 'Account Name', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 100, fxFlex1 :90, isKeyColumn: true },
    ]
  };


  bankActDefintion: AutoCompleteDefinition = {
    label: 'Bank Account',
    isRequired: true,
    dataSourceFn: (name) => this.financeService.getBankData(),
    minCount: 2,
    keyString: 'bankName',
  };


  bankOptTable: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: 'Bank Name', value: (obj) => obj['bankName'] ? obj['bankName'] : '', fxFlex: 100, fxFlex1 :90, isKeyColumn: true },
    ]
  };
  

  supplierData: any;
  deletePurchaseHeadTemplate: any;
  finTranHeadId: any = 0;
  sNo: any = 0;
  fintranId: any = 0;
  frimYearId: any;
  headNo: any = "";
  btnSave : string ='Save';
  showClear: boolean;
  acId: any;
  instrumentTypes = [];
  instruType = new FormControl('');
  instruNo = new FormControl('');
  name1: string;
  name2: string;
  contraData: any[]=[];
  filterObject: any[]=[];
  showaccts: boolean = false;
  createdOn: any;
  modifiedOn: any;
  finTranBankId : any;
  showTable : boolean = false;
  bankData: any[]=[];
  bankNames: any[];
  showBnks: boolean = false;
  public accountMapper = key => {
    if(key){
      const selection = this.filterObject.find(act => act.accId === key);
      if (selection) {
        return selection.accName;
      }
    }
  };

  public bankMapper = key => {
    if(key){
      const selection = this.bankNames.find(act => act.bankId === key);
      if (selection) {
        return selection.bankName;
      }
    }
  };
  firmPreferences: any;
  minDate: any;
  maxDate: any;
  protected _onDestroy = new Subject<void>();
  showBankact: boolean = true;
  contraAcct = new FormControl('');
  bankAcct = new FormControl('');

  constructor(private formBuilder : FormBuilder , public dialog: MatDialog, private financeService : FinanceService ,  private datePipe: DatePipe , private router :Router,
    private service:OutWardHttpService, private todayDate:HttpService
  ) { }

  ngOnInit() {
    this.bankPaymentVoucherEntryFormGroup = this.buildBankPaymnetVoucherEntry();
    this.accName.valueChanges.subscribe(res => {
      console.log(res);
      if (typeof res === 'object') {
        this.supplierData = res;
        this.bindAccountDetails(res);
      }
    });

    this.contraAcct.valueChanges.subscribe(res =>{
      if (typeof res === 'object') {
        this.bindContra(res);
      }
    });

    this.bankAcct.valueChanges.subscribe(res =>{
      if (typeof res === 'object') {
        this.bindBank(res);
      }
    });

    if(this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== ''){
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.firmPreferences.finEdate;
    }

    this.showClear = true;
    // this.getContraData();
    this.getBankData();
    this.instrumentTypes = [{id:1, type :'CHECK'}, {id:2, type :'NEFT'} , {id:3, type :'ONLINE (UPI/NET BANKING/ANY OTHER ONLINE PAYMENT)'}]
    // var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    var dt:any = this.todayDate.localDate();
    dt = this.datePipe.transform(dt, 'yyyy-MM-dd');
    setTimeout(() => {
      this.bankPaymentVoucherEntryFormGroup.controls.finDate.setValue(dt);
      this.bankPaymentVoucherEntryFormGroup.controls.accShName.disable();
      this.bankPaymentVoucherEntryFormGroup.controls.cityName.disable();
    }, 200);

    setTimeout(() => {
      this.financeService.getListData$.subscribe(rees => {
        if(rees != null){
          this.newGet(rees.finTranHeadId);
          this.finTranHeadId = rees.finTranHeadId;
          this.headNo = rees.finTranHeadNo;
        }else{
          this.showTable = false;
        }
        
        // this.listshow = true;
      });
    }, 300);

    // this.subscription.add(this.service.getTabData$.subscribe(res=>{
    //   if(res != null && res){
    //     if(res[1] == 'Head of Account'){
    //     this.bindAccountDetails(res[0]);
    //     this.accName.setValue(res[0].accName);
    //     }else if(res[1] == 'Contra Account'){
    //       this.bindContra(res[0]);
    //       this.contraAcct.setValue(res[0].accName);
    //     }else if(res[1] == 'Bank Account'){
    //       this.bankAcct.setValue(res[0].accName);
    //       this.bindBank(res[0]);
    //     }
    //   }
    // }));

  }

  buildBankPaymnetVoucherEntry() {
    return this.formBuilder.group({
      finDate: [''],
      finContraId: [''],
      customAccId: [''],
      accShName: [''],
      cityName: [''],
      finTranDesc: [''],
      finTranVno: [''],
      Amount: [''],
      finDisc: [''],
      finTranBankId : [''],
    });
  }




  bindAccountDetails(data) {
    this.bankPaymentVoucherEntryFormGroup.patchValue({
      accShName: data.accShName,
      cityName: data.cityName,
      accMobile: data.accMobile,
      accGstIn: data.accGstIn
    });
  }


  addOrEdit(element) {
    this.showClear = false;
    this.btnSave = 'Update';
    this.financeService.editCashData(element.finTranId).subscribe(res => {
      this.commonMethod(res);
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

  subscription:Subscription=new Subscription();

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


  updateVocuehr(){
     const val = this.bankPaymentVoucherEntryFormGroup.controls
     if(this.showBankact == true){
      this.finTranBankId =  val.finTranBankId.value;
     }else{
      this.finTranBankId = 0;
     }
    const obj = {
      finTranId : this.fintranId,
      finTranSno : this.sNo,
      tranTypeHeadId : 8,
      finTranHeadDate : this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss'),
      finTranHeadId : this.finTranHeadId,
      finTranHeadNo : this.headNo,
      finTranAccId :this.acId,
      finTranContraId : val.finContraId.value,
      finTranDesc :val.finTranDesc.value,
      finTranAmount : val.Amount.value ,
      finTranVno : val.finTranVno.value,
      firmYearId : this.frimYearId,
      cityName : val.cityName.value,
      accShName : val.accShName.value,
      accName : this.accName.value.accName,
      contraAccName: val.finContraId.value,
      accCityId : 0,createdBy: 0,
      createdOn: this.createdOn,
      modifiedBy: 0,
      modifiedOn: this.modifiedOn,
      finTranBankId : this.bankAcct.value.bankId ,
      FinTranInstType :  this.instruType.value
      }
  
      this.financeService.updateCashVData(obj, 'Bank Payment Voucher').subscribe(data =>{
        this.reset();
        this.newGet(this.finTranHeadId);
      });
  
    }


  detailDelete(Obj) {
    return Obj.deleteFlag;
  }

  deleteTemplate() {
    return this.deletePurchaseHeadTemplate;
  }

  refresh(): void {
  }

  reset() {
    this.btnSave = 'Save';
    this.showClear = true;
    this.accName.setValue('');
    this.bankPaymentVoucherEntryFormGroup.reset();
    this.contraAcct.setValue('');
    this.bankAcct.setValue('');
    this.bankPaymentVoucherEntryFormGroup.controls.finContraId.setValue('');
    var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    setTimeout(() => {
      this.bankPaymentVoucherEntryFormGroup.controls.finDate.setValue(dt);
    }, 200);

  }

  commonMethod(res){
    this.bankPaymentVoucherEntryFormGroup.controls.Amount.setValue(res.finTranAmount);
      this.bankPaymentVoucherEntryFormGroup.controls.finContraId.setValue(res.finTranContraId);
      this.bankPaymentVoucherEntryFormGroup.controls.finDate.setValue(res.finTranHeadDate);
      this.bankPaymentVoucherEntryFormGroup.controls.finTranDesc.setValue(res.finTranDesc);
      this.bankPaymentVoucherEntryFormGroup.controls.finTranVno.setValue(res.finTranVno);
      this.bankPaymentVoucherEntryFormGroup.controls.finTranBankId.setValue(res.finTranBankName);
      this.accName.setValue(res.accName);
      this.contraAcct.setValue(res.contraAccName);
      this.bankAcct.setValue(res.finTranBankName);
      this.acId = res.finTranAccId;
      this.fintranId = res.finTranId;
      this.sNo = res.finTranSno;
      this.finTranHeadId = res.finTranHeadId;
      this.frimYearId = res.firmYearId;
      this.headNo = res.finTranHeadNo;
      this.createdOn = res.createdOn;
      this.modifiedOn = res.modifiedOn;
      this.instruType.setValue(res.finTranInstType);
  }


  enterText(val){
    if(val.length >= 3){
      this.filterObject = this.contraData.filter(x => x.accName.includes(val.toUpperCase()));
      this.showaccts = true;
    }
    
  }

  getContraData(){
    this.financeService.getContraData(6).subscribe(data =>{
      this.contraData = data;
    });
  }

  

  saveBankPayment() {
    if (this.btnSave == 'Update') {
      this.updateVocuehr();
    } else {
    const val = this.bankPaymentVoucherEntryFormGroup.controls
    const obj = Object.assign({});
    obj.finTranSno = this.sNo + 1;
    obj.finTranHeadDate = this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss');
    obj.finTranHeadId = this.finTranHeadId;
    obj.finTranHeadNo = this.headNo;
    obj.finTranAccId = this.accName.value.accId;
    obj.finTranContraId = val.finContraId.value;
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
    obj.tranTypeHeadId = 8;
    if(this.showBankact == true){
      obj.finTranBankId = this.bankAcct.value.bankId;
    }else{
      obj.finTranBankId = 0;
    }
    obj.FinTranInstType = this.instruType.value;
    this.financeService.saveCashVoucherRecpt(obj, 'Bank Payment Voucher').subscribe(data => {
      this.finTranHeadId = data.resultObject;
      this.newGet(data.resultObject);
      this.reset();
    });
  }

    
  }

  newGet(finTranHeadId){
    this.financeService.editCashList(finTranHeadId).subscribe(res =>{
      this.headNo = res[0].finTranHeadNo;
      this.sNo = res.length;
      this.dataSource = new MatTableDataSource(res);
      this.showTable = true;
    });
  }

  getBankData(){
    this.financeService.getBankData().subscribe(result =>{
      this.bankData = result;
    });
  }

  
  enterBank(val){
    if(val.length >= 3){
      this.bankNames = this.bankData.filter(x => x.bankName.includes(val.toUpperCase()));
      this.showBnks = true;
    }
    
  }

  validateFloatKeyPress(el) {
    var v = parseFloat(el.value);
    // el.value = (isNaN(v)) ? '' : v.toFixed(2);
    el.value = (Math.round(v * 100) / 100).toFixed(2);
}

changefirmgroup(val){
  if(val ==  1){
    this.showBankact = true;
  }else{
    this.showBankact = false;
  }
  }

  bindContra(res){
    this.bankPaymentVoucherEntryFormGroup.controls.finContraId.setValue(res.accId);
  }
  
  bindBank(res){
    this.bankPaymentVoucherEntryFormGroup.controls.finTranBankId.setValue(res.bankId);
  }

  ngOnDestroy(){
    // this.service.sendTabData('');
    this.subscription.unsubscribe();
  }

}
