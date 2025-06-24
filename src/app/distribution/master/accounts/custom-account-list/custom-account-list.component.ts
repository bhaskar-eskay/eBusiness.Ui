import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableDefinition, ActionStyle } from 'src/app/shared/components/table/table-model';
import { AccountMaster } from 'src/app/shared/models/master-models';
import { MasterService } from '../../master.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
export interface PeriodicElement {
  accName: string;
  shName: string;
  cityName: string;
  gstin: string;
  mobile: string;
  areaName: string;
  scheduleName: string;
  subshName: string;
}

@Component({
  selector: 'app-custom-account-list',
  templateUrl: './custom-account-list.component.html',
  styleUrls: ['./custom-account-list.component.scss','../../master.component.scss']
})
export class CustomAccountListComponent implements OnInit {

  customerAccHeadFormGroup: FormGroup;
  dataList: AccountMaster[];
  tableDefinition: TableDefinition = {
    columns:[
      {id:'accShName',  name:'Account Short Name', value:(obj)=>obj['accShName']?obj['accShName']:''},
      {id:'accName',  name:'Account Name', value:(obj)=>obj['accName']?obj['accName']:''},
      {id:'accAddress1',  name:'Account Address 1', value:(obj)=>obj['accAddress1']?obj['accAddress1']:''},
      {id:'cityName',  name:'City', value:(obj)=>obj['cityName']?obj['cityName']:''},
      {id:'cityPincode',  name:'Pincode', value:(obj)=>obj['cityPincode']?obj['cityPincode']:''},
      {id:'stateName',  name:'State', value:(obj)=>obj['stateName']?obj['stateName']:''},
      {id:'accMobile',  name:'Mobile Number', value:(obj)=>obj['accMobile']?obj['accMobile']:''},
      {id:'accGstIn',  name:'GSTIN', value:(obj)=>obj['accGstIn']?obj['accGstIn']:''},

      // {id:'phone',  name:'Account Phone', value:(obj)=>obj['accPhone']?obj['accPhone']:''},
      // {id:'accMobile',  name:'Account Mobile', value:(obj)=>obj['accMobile']?obj['accMobile']:''},
      {id: 'action', name: 'Action', disableSort: true, actions:[
        {method: (user) => this.addOrEdit(user), name: 'Edit', icon:'assets/new_edit2.png', style:ActionStyle.EDIT},
        {isDisabled: (schedule)=>this.isDeleteDisabled(schedule), method:(user)=> this.delete(user), name:'Delete', icon:'assets/new_delete2.png', style:ActionStyle.DELETE,
        dialogProperties:{title:'Delete Company Group'}}
    ]},
  ]};

  constructor(
    private router: Router,
    private masterService: MasterService,
    public formBuilder: FormBuilder) {
      this.customerAccHeadFormGroup = this.buildFormGroup();
     }

  buildFormGroup() {
    return this.formBuilder.group({
      accountName: [''],
      shName: [''],
      areaName: [''],
      gstIn: [''],
      scheduleName: [''],
      subScheduleName: [''],
      mobileNum:['']
    });
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.getAllCompGroup();
  }

  private getAllCompGroup() {
    const payload = {
      accId: 0,
  accShName: '',
  accName: '',
  accAddress1: '',
  accAddress2: '',
  accCityId: 0,
  accDistrictId: 0,
  cityPinId: 0,
  accStateId: 0,
  accCountryId: 0,
  accAreaId: 0,
  accSchId: 0,
  accPhone: '',
  accMobile: '',
  accContactPerson: '',
  accCpersonMobile: '',
  accFirmTypeId: 0,
  accTranMode: 0,
  accOpBal: 0,
  accOpBalType: 0,
  accCredit: 0,
  accDebit: 0,
  accCreditLimit: 0,
  accDueDays: 0,
  accInterest: 0,
  accTcsPercent: 0,
  accHsnCode: 0,
  accSacCode: 0,
  accTaxSlabId: 0,
  accBankId1: 0,
  accRemarks: '',
  accBankAccNo1: '',
  accBankIFSC1: '',
  accBankId2: 0,
  accBankAccNo2: '',
  accBankIFSC2: '',
  allowSms: 0,
  smsMobile: '',
  allowWhatsApp: 0,
  whatsAppMobile: '',
  accEmail: '',
  accGSTMode: 0,
  firmId: 0,
  isActive: 0,
  taxcategoryId: 0,
  isRegistered: 0,
  isDeleted: 0,
  cityName: '',
  districtName: '',
  cityPincode: 0,
  stateName: '',
  tax: 0,
  firmName: '',
  taxCategoryName: '',
  firmType: '',
  firmTypeAlias: ''
    }
    this.masterService.getCustomAccounts(payload).subscribe(data=>{
      this.dataList = data as AccountMaster[];
    });
  }

  onAddAccount(obj) {
    console.log('add acc called', obj);
    this.masterService.operationType = obj.type;
    this.masterService.setaccountFormValue(obj.data);
    this.router.navigate(['/pharma/masters/accounts/customAccountsForm']);
  }

  onSaveCustomerAccount() {
    // prepare request object for api
    console.log(this.customerAccHeadFormGroup.value);
    var data = this.customerAccHeadFormGroup.value; 
        const payload = {
      accId: 0,
  accShName:data.shName,
  accName: data.accountName,
  accAddress1: '',
  accAddress2: '',
  accCityId: 0,
  accDistrictId: 0,
  cityPinId: 0,
  accStateId: 0,
  accCountryId: 0,
  accAreaId: 0,
  accSchId: 0,
  accPhone: '',
  accMobile: data.mobileNum,
  accContactPerson: '',
  accCpersonMobile: '',
  accFirmTypeId: 0,
  accTranMode: 0,
  accOpBal: 0,
  accOpBalType: 0,
  accCredit: 0,
  accDebit: 0,
  accCreditLimit: 0,
  accDueDays: 0,
  accInterest: 0,
  accTcsPercent: 0,
  accHsnCode: 0,
  accSacCode: 0,
  accTaxSlabId: 0,
  accBankId1: 0,
  accRemarks: '',
  accBankAccNo1: '',
  accBankIFSC1: '',
  accBankId2: 0,
  accBankAccNo2: '',
  accBankIFSC2: '',
  allowSms: 0,
  smsMobile: '',
  allowWhatsApp: 0,
  whatsAppMobile: '',
  accEmail: '',
  accGSTMode: 0,
  firmId: 0,
  isActive: 0,
  taxcategoryId: 0,
  isRegistered: 0,
  isDeleted: 0, 
  cityName: data.areaName,
  districtName: '',
  cityPincode: 0,
  stateName: '',
  tax: 0,
  firmName: '',
  taxCategoryName: '',
  firmType: '',
  firmTypeAlias: ''
    }
    this.masterService.getCustomAccounts(payload).subscribe(data=>{
      this.dataList = data as AccountMaster[];
    });

  }

  onResetForm() {
    this.customerAccHeadFormGroup.reset();
  }

  addOrEdit(account) {
    console.log(account);
    const object = {
      type: 'edit',
      data: account
    };
    this.onAddAccount(object);
  }

  isDeleteDisabled(obj) {
    return false;
  }

  delete(account) {
    this.masterService.deleteAccount(account.accId).subscribe(res => {
      res && res === 'Success' ? this.refresh() :
      AppMessageUtils.warningMessage("Account already deleted", account.id)
    });
  }
}
