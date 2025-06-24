import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { MasterService } from '../../master.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { AutoCompleteDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { DatePipe } from '@angular/common';
import { AppConst } from 'src/app/shared/app-constants';
import { DialogButtonTemplate, DialogClass, DialogData } from 'src/app/shared/components/dialog/dialog.component';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import { TaxSlab } from 'src/app/shared/models/master-models';

@Component({
  selector: 'app-tax-slabs',
  templateUrl: './tax-slabs.component.html',
  styleUrls: ['./tax-slabs.component.scss', '../../master.component.scss']
})
export class TaxSlabsComponent implements OnInit {
  @ViewChild('terminateSlabTemplate',{static:true}) terminateSlabTemplate;
  @ViewChild('terminateButtonTemplate',{static:true}) terminateButtonTemplate;
  formAlertId='taxSlabAlertId';
  templateAlertId='taxSlabTemplateAlertId';
  formGroup:FormGroup;
  editObj:TaxSlab={} as TaxSlab;
  addOrEditFlag:boolean;
  minDate:Date;
  
  taxTypeAutoCompleteDef:AutoCompleteDefinition={
    label:'Type',
    isRequired:true,
    isStaticType:true,
    dataSourceFn:()=>this.masterService.getTaxType(),
    keyString:'name',
    validators:[Validators.required],
    minCount:2
  }

  dataList:TaxSlab[];
  isDataLoading:boolean;
  disableActions:boolean;
  tableDefinition:TableDefinition={
    columns:[
      {id:"type",  name:"Type", value:(obj)=>obj['taxTypeName']?obj['taxTypeName']:''},
      {id:"slab",  name:"Slab", value:(obj)=>obj['tax']},
      {id:"activeDate",  name:"Active Date", value:(obj)=>obj['activeDate']?this.datepipe.transform(obj['activeDate'], AppConst.DATE_FORMAT):''},
      {id:"termDate",  name:"Termination Date", value:(obj)=>obj['inActiveDate']?this.datepipe.transform(obj['inActiveDate'], AppConst.DATE_FORMAT):''},
      {id:"action", name:"Action", disableSort:true, actions:[
        {method:(obj)=>this.addOrEdit(obj),name:'Terminate',icon:'block',style:ActionStyle.DELETE,isDisabled:(slab)=>this.isDisableTerminate(slab)}
    ]},
  ]};

  constructor(private masterService:MasterService, private formBuilder:FormBuilder, private dialogService:DialogService,
    public datepipe: DatePipe) { }

  ngOnInit() {
  this.formGroup=this.buildFormGroup();
  this.formGroup.valueChanges.subscribe(data=>AppMessageUtils.clearMessage(this.formAlertId));
  this.refresh();
  }

  private buildFormGroup() {
    return this.formBuilder.group({
      id:[this.editObj.id],
      slab:[this.editObj.slab,Validators.required],
      type:[this.editObj.type,Validators.required],
      activeDate:[this.editObj.activeDate,Validators.required],

      isActive:[this.editObj.isActive],
      terminationDate:[this.editObj.terminationDate],
      hasStake:[this.editObj.hasStake]
    });

  }

  refresh() {
    this.dialogService.closeAllDialogues();
    this.clearAddOrEdit();
    this.clearOrResetForm();
    this.getAllSlabs();
  }

  clearAddOrEdit() {
    this.addOrEditFlag=false;
    this.editObj={} as TaxSlab;
    AppMessageUtils.clearMessage(this.formAlertId);
    this.disableActions=false;
  }

  clearOrResetForm() {
    AppMessageUtils.clearMessage(this.formAlertId);
    let formGroupObj=this.formGroup as FormGroup;
    formGroupObj.reset({...this.editObj});
  }

  private getAllSlabs() {
    this.isDataLoading=true;
    this.dataList=null;
    this.disableActions=false;
    this.masterService.getTaxSlabs().subscribe(data=>{
      this.dataList=data as TaxSlab[];
      this.isDataLoading=false;
    });
  }

  addOrEdit(obj?:TaxSlab) {
    this.editObj=obj?obj:{} as TaxSlab;
    if(!obj) {
      this.disableActions=true;
      this.minDate=new Date();
      this.formGroup.reset({...this.editObj});
      this.formGroup.get('slab').enable();
      this.formGroup.get('activeDate').enable();
      this.formGroup.get('type').enable();
      this.formGroup.get('terminationDate').clearValidators();
      this.formGroup.get('terminationDate').updateValueAndValidity();
      this.addOrEditFlag=true;
    } else {
      this.minDate=new Date(this.editObj.activeDate);
      this.minDate.setDate(this.minDate.getDate() + 1);
      this.formGroup.reset({...this.editObj});
      this.formGroup.get('slab').disable();
      this.formGroup.get('activeDate').disable();
      this.formGroup.get('type').disable();
      this.formGroup.get('terminationDate').setValidators([Validators.required]);
      this.formGroup.get('terminationDate').updateValueAndValidity();
      this.showTerminationDialog(obj);
    }
  }

  save() {
    AppMessageUtils.clearMessage(this.formAlertId);
    AppMessageUtils.clearMessage(this.templateAlertId);
    if(!this.formGroup.valid) {
      return;
    } 
    let updatedObj:TaxSlab={...this.formGroup.getRawValue()};
    if(!updatedObj.id && !this.isValid(updatedObj)) {
      return;
    }
    this.masterService.doAddOrUpdateTaxSlab(updatedObj).subscribe(data=>
      ResponseUtils.isStatus200(data) ? this.refresh() :
      ResponseUtils.isStatus409(data) ? 
      AppMessageUtils.warningMessage('Tax Slab already '+(updatedObj.id?'terminated':'exists'),updatedObj.id ? this.templateAlertId :this.formAlertId) : ''
    );
  }

  private isValid(updatedObj:TaxSlab) {
    let isValid:boolean=true;
    let objs = this.dataList ? [...this.dataList] : [];
    if(objs && objs.filter(item=>item.type.id===updatedObj.type.id  && item.isActive && item.slab === updatedObj.slab).length>0) {
      AppMessageUtils.warningMessage("Tax Slab already exists",this.formAlertId);
      isValid=false;
    }
    return isValid;
}

  terminateSlabTemplateFn() {
    return this.terminateSlabTemplate;
}

terminateButtonTemplateFn() {
  return this.terminateButtonTemplate;
}

isDisableTerminate(slab:TaxSlab) {
  if(slab && !slab.isActive) {
    return true;
  }
  return false;
}

private showTerminationDialog(slab:TaxSlab) {
  let dialogInputs:DialogData={} as DialogData;
  dialogInputs.title='Confirm Slab Termination';
  dialogInputs.closeBtnLabel='Cancel';
  dialogInputs.templateRef=()=>this.terminateSlabTemplateFn();
  dialogInputs.dialogClass=DialogClass.MEDIUM;
  let confirmBtn={} as DialogButtonTemplate;
  confirmBtn.templateRef=this.terminateButtonTemplate;
  dialogInputs.buttonTemplates=[confirmBtn];
  this.dialogService.showDialogue(dialogInputs,{disableClose:true});
}

updateToDecimalValue() {
  let value=this.formGroup.controls.slab.value;
  if(value) {

  }
}


}
