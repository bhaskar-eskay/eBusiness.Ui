
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteTrigger, MatDialog, MatDialogConfig, MatSort, MatTableDataSource } from '@angular/material';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { FinanceService } from '../finance.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MyCustomDialogComponent } from 'src/app/shared/components/my-custom-dialog/my-custom-dialog.component';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-bank-receipt-entry',
  templateUrl: './bank-receipt-entry.component.html',
  styleUrls: ['./bank-receipt-entry.component.scss']
})
export class BankReceiptEntryComponent implements OnInit {
  @ViewChild('districtautoCompleteInput', {static:false, read: MatAutocompleteTrigger }) districtautoCompleteInput: MatAutocompleteTrigger;
  bankReceiptVoucherEntryFormGroup: FormGroup;
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
    keyString: 'accName'
  };


  customAccountsOptsTable: OptionsTableDefinition = {
    panelWidth: 700,
    columns: [
      { name: 'Head of Account', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 36, fxFlex1 :36, isKeyColumn: true },
      { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '',  fxFlex: 19, fxFlex1 : 19},
      { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '',fxFlex: 14, fxFlex1 : 14  },
      { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 20 , fxFlex1 : 20 },
      { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 10, fxFlex1 : 10 }
    ]
  };

  
  contraActDefintion: AutoCompleteDefinition = {
    label: 'Contra Account',
    isRequired: true,
    dataSourceFn: (name) => this.financeService.getContraData(6),
    minCount: 2,
    keyString: 'accName'
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
    keyString: 'bankName'
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

  bankData: any[]=[];
  bankNames: any[];
  showBnks: boolean = false;
  firmPreferences: any;
  minDate: any;
  maxDate: any;
  protected _onDestroy = new Subject<void>();
  showBankact: boolean = true;
  contraAcct = new FormControl('');
  bankAcct = new FormControl('');
  constructor(private formBuilder : FormBuilder , private financeService : FinanceService ,  private datePipe: DatePipe , private router :Router, public dialog: MatDialog,
    private service:OutWardHttpService, private todayDate:HttpService
  ) { }

  ngOnInit() {
    this.bankReceiptVoucherEntryFormGroup = this.buildBankReceiptVoucherEntry();
    this.accName.valueChanges.subscribe(res => {
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
    this.getContraData();
    this.instrumentTypes = [{id:1, type :'CHEQUE'}, {id:2, type :'NEFT'} , {id:3, type :'ONLINE (UPI/NET BANKING/ANY OTHER ONLINE PAYMENT)'}]
    // var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    var dt: any = this.todayDate.localDate();
    dt = this.datePipe.transform(dt, 'yyyy-MM-dd');
    setTimeout(() => {
      this.bankReceiptVoucherEntryFormGroup.controls.finDate.setValue(dt);
      this.bankReceiptVoucherEntryFormGroup.controls.accShName.disable();
      this.bankReceiptVoucherEntryFormGroup.controls.cityName.disable();
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
    this.getBankData();
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

  buildBankReceiptVoucherEntry() {
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

  subscription:Subscription=new Subscription();




  bindAccountDetails(data) {
    console.log(data);
    this.bankReceiptVoucherEntryFormGroup.patchValue({
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

     const val = this.bankReceiptVoucherEntryFormGroup.controls
     var id ;
     if(this.showBankact == true){
      id = val.finTranBankId.value;
     }else{
      id = 0;
     }
    const obj = {
      finTranId : this.fintranId,
      finTranSno : this.sNo,
      tranTypeHeadId : 6,
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
      finTranBankId :  this.bankAcct.value.bankId,
      finTranInstType :  this.instruType.value
      }
  
      this.financeService.updateCashVData(obj, 'Bank Receipt').subscribe(data =>{
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
    this.contraAcct.setValue('');
    this.bankAcct.setValue('');
    this.bankReceiptVoucherEntryFormGroup.reset();
    var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    setTimeout(() => {
      this.bankReceiptVoucherEntryFormGroup.controls.finDate.setValue(dt);
    }, 200);

  }

  commonMethod(res){
    this.bankReceiptVoucherEntryFormGroup.controls.Amount.setValue(res.finTranAmount);
      this.bankReceiptVoucherEntryFormGroup.controls.finContraId.setValue(res.finTranContraId);
      this.bankReceiptVoucherEntryFormGroup.controls.finDate.setValue(res.finTranHeadDate);
      this.bankReceiptVoucherEntryFormGroup.controls.finTranDesc.setValue(res.finTranDesc);
      this.bankReceiptVoucherEntryFormGroup.controls.finTranVno.setValue(res.finTranVno);
      this.bankReceiptVoucherEntryFormGroup.controls.finTranBankId.setValue(res.finTranBankId);
      this.instruType.setValue(res.finTranInstType);
      this.accName.setValue(res.accName);
      this.contraAcct.setValue(res.contraAccName);
      this.bankAcct.setValue(res.bankName);
      this.acId = res.finTranAccId;
      this.fintranId = res.finTranId;
      this.sNo = res.finTranSno;
      this.finTranHeadId = res.finTranHeadId;
      this.frimYearId = res.firmYearId;
      this.headNo = res.finTranHeadNo;
      this.createdOn = res.createdOn;
      this.modifiedOn = res.modifiedOn;
  }


  enterText(val){
    if(val.length >= 3){
      this.filterObject = this.contraData.filter(x => x.accName.includes(val.toUpperCase()));
      console.log(this.filterObject);
      this.showaccts = true;
    }
    
  }

  getContraData(){
    this.financeService.getContraData(6).subscribe(data =>{
      this.contraData = data;
    });
  }

  saveRecptVchr() {
    if (this.btnSave == 'Update') {
      this.updateVocuehr();
    } else {
    const val = this.bankReceiptVoucherEntryFormGroup.controls
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
    obj.tranTypeHeadId = 6;
    if(this.showBankact == true){
      obj.finTranBankId = this.bankAcct.value.bankId;
    }else{
      obj.finTranBankId = 0;
    }
    
    obj.finTranInstType = this.instruType.value;
    this.financeService.saveCashVoucherRecpt(obj, 'Bank Receipt Voucher').subscribe(data => {
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
      this.sNo = res.length;
      this.dataSource = new MatTableDataSource(res);
      this.showTable = true;
    });
  }


  accTab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const districtTab = this.districtautoCompleteInput.activeOption.value;
      this.bankReceiptVoucherEntryFormGroup.controls.finContraId.setValue(districtTab);
      // this.clickdist();
    }else if(event.keyCode === 13){
      const districtTab = this.districtautoCompleteInput.activeOption.value;
      this.bankReceiptVoucherEntryFormGroup.controls.finContraId.setValue(districtTab);
      // this.clickdist();
    }
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
    this.bankReceiptVoucherEntryFormGroup.controls.finContraId.setValue(res.accId);
  }
  
  bindBank(res){
    this.bankReceiptVoucherEntryFormGroup.controls.finTranBankId.setValue(res.finTranBankId);
  }

  ngOnDestroy(){
    // this.service.sendTabData('');
    this.subscription.unsubscribe();
  }

}
