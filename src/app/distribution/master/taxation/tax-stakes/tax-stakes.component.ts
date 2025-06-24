import { Component, OnInit, ViewChild } from '@angular/core';

import { MasterService } from '../../master.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { DialogButtonTemplate, DialogClass, DialogData } from 'src/app/shared/components/dialog/dialog.component';
import { AutoCompleteDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { AppConst } from 'src/app/shared/app-constants';
import { DatePipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { TaxCategory, TaxSlab, TaxStake, TaxType } from 'src/app/shared/models/master-models';


@Component({
  selector: 'app-tax-stakes',
  templateUrl: './tax-stakes.component.html',
  styleUrls: ['./tax-stakes.component.scss', '../../master.component.scss']
})
export class TaxStakesComponent implements OnInit {
  @ViewChild('stakePercentTemplate',{static:true}) stakePercentTemplate;
  @ViewChild('stakePercentButtonTemplate',{static:true}) stakePercentButtonTemplate;
  @ViewChild('stakeTerminationTemplate',{static:true}) stakeTerminationTemplate;
  minDate;
  doesSelectedSlabHasStake:boolean;
  totalPercent:number;

  formAlertId='taxStakeAlertId';
  stakePercentFormAlertId='stakePercentAlertId';
  formGroup:FormGroup;
  formArray:FormArray;
  editObj:TaxStake={} as TaxStake;
  addOrEditFlag:boolean;

  dataList:TaxStake[];
  isDataLoading:boolean;
  disableActions:boolean;
  tableDefinition:TableDefinition={
    columns:[
      {id:"type",  name:"Type", value:(obj)=>obj['name'] ?obj['name']  :'GST'},
      {id:"slab",  name:"Slab", value:(obj)=>obj['tax']},
      {id:"category",  name:"Category", value:(obj)=>obj['taxCategoryName'] ?obj['taxCategoryName']:''},
      {id:"name",  name:"Name", value:(obj)=>obj['taxStakeName'] ?obj['taxStakeName']:'N/A'},
      {id:"percent",  name:"Percent", value:(obj)=>obj['taxStakePercent'] ?obj['taxStakePercent']:'N/A'},
      {id:"contribution",  name:"Contribution", value:(obj)=>obj['stakeContribution']?obj['stakeContribution']:'N/A'},
      {id:"activeDate",  name:"Active Date", value:(obj)=>obj['activeDate']?this.datepipe.transform(obj['activeDate'], AppConst.DATE_FORMAT):''},
      {id:"termDate",  name:"Termination Date", value:(obj)=>obj['inActiveDate']?this.datepipe.transform(obj['inActiveDate'], AppConst.DATE_FORMAT):''},
      {id:"action", name:"Action", disableSort:true, actions:[
        {method:(obj)=>this.addOrEdit(obj),name:'Terminate',icon:'block',style:ActionStyle.DELETE,isDisabled:(stake)=>this.isDisableTerminate(stake)}
    ]},
  ]};

  typeAutoCompleteDef:AutoCompleteDefinition={
    label:'Type',
    isRequired:true,
    dataSourceFn:()=>this.masterService.getTaxType(),
    isStaticType:true,
    keyString:'name',
    validators:[Validators.required],
    minCount:2
  }

  slabAutoCompleteDef:AutoCompleteDefinition={
    label:'Slab',
    isRequired:true,
    enableLazyLoad:true,
    isStaticType:true,
    keyString:'slab',
    validators:[Validators.required]
  }

  slabsDataSourceFnc:()=>Observable<any>;

  categoryAutoCompleteDef:AutoCompleteDefinition={
    label:'Category',
    isRequired:true,
    enableLazyLoad:true,
    dataSourceFn:()=>of(this.categoryList),
    isStaticType:true,
    keyString:'name',
    validators:[Validators.required]
  }
  categoryDefaultValue='None';
  categoryDataSourceFnc:()=>Observable<any>;
  categoryList:TaxCategory[];

  constructor(private masterService:MasterService, private formBuilder:FormBuilder, private datepipe:DatePipe,private dialogService:DialogService) { }

  ngOnInit() {
  this.formGroup=this.buildFormGroup();
  this.formArray=this.buildFormArray();
  this.formGroup.valueChanges.subscribe(data=>AppMessageUtils.clearMessage(this.formAlertId));
  this.formArray.valueChanges.subscribe(data=>AppMessageUtils.clearMessage(this.stakePercentFormAlertId));
  this.doSubscribeForTaxTypeChanges();
  this.doSubscribeForTaxSlabChanges();
  this.doSubscribeForCategoryChanges();
  this.masterService.getTaxCategory().subscribe(data=>{
    if(data) {
      this.categoryList=data;
      this.categoryDataSourceFnc=()=>of(data);
    }
  })
  this.refresh();
  }

  private doSubscribeForTaxTypeChanges() {
    if(this.formGroup.controls && this.formGroup.controls.type) {
      this.formGroup.controls.type.valueChanges.subscribe(data=>{
        if(data && typeof data == 'object') {
            let taxType=data as TaxType;
            this.slabsDataSourceFnc=()=>this.masterService.getTaxSlabs(taxType.id);
            if(this.addOrEditFlag) {
              this.subFormGroup.controls.slab.reset();
              this.subFormGroup.controls.category.reset();
            }
        }
      });
    }
  }

  private doSubscribeForTaxSlabChanges() {
    if(this.formGroup.controls && this.subFormGroup) {
      this.subFormGroup.controls.slab.valueChanges.subscribe(data=>{
        this.doesSelectedSlabHasStake=false;
        if(this.addOrEditFlag) {
          let catControl=this.subFormGroup.controls.category as FormControl;
          catControl.enable({emitEvent:false});
          catControl.reset();
        }
        if(data && typeof data === 'object') {
          this.doesSelectedSlabHasStake=(data as TaxSlab).hasStake?true:false;
        }
      });
    }
  }

  private doSubscribeForCategoryChanges() {
    if(this.formGroup.controls && this.subFormGroup) {
      this.subFormGroup.controls.category.valueChanges.subscribe(data=>{
        let slabControl=this.subFormGroup.controls.slab as FormControl;
        let catControl=this.subFormGroup.controls.category as FormControl;
        if((!data && !slabControl.value) ||
            (slabControl.value && typeof slabControl.value === 'object' && 
            !(slabControl.value as TaxSlab).hasStake && 
            (!data || (typeof data === 'object' && (data as TaxCategory).name !== this.categoryDefaultValue)))) {
              catControl.disable({emitEvent:false});
              catControl.setValue(this.categoryDefaultValue,{emitEvent:true,onlySelf:false});
        } else if(data && typeof data === 'object' && (data as TaxCategory).name === this.categoryDefaultValue) {
          this.doesSelectedSlabHasStake=false; 
        } else {
          this.doesSelectedSlabHasStake=true;
        }
      });
    }
  }

  private buildFormGroup(coreForm=false) {
    if(coreForm) {
      return this.formBuilder.group({
        id:[this.editObj.id],
        slab:[this.editObj.slab,Validators.required],
        category:[this.editObj.category,Validators.required],
        activeDate:[this.editObj.activeDate,Validators.required],
        terminationDate:['']
      });
    }
    return this.formBuilder.group({
      type:['',Validators.required],
      formGroup:this.buildFormGroup(true)
    });
  }

  private buildFormArray() {
    return this.formBuilder.array([
      this.formBuilder.group({
        id:[],
        name:['',Validators.required],
        percent:['',Validators.required],
        contribution:[{value: '', disabled: true}]
      })
    ]);
  }

  doAddStakePercent(stakePercents?:TaxStake[]) {
    let stakePercentFormArray=this.formArray as FormArray;
    if(stakePercents) {
      stakePercents.forEach(stakePercent=>
        stakePercentFormArray.push(this.formBuilder.group({
          name:[stakePercent.name,Validators.required],
          percent:[stakePercent.percent,Validators.required],
          contribution:[{value: stakePercent.contribution, disabled: true}]
        }))
      ); 
    } else {
    AppMessageUtils.clearMessage(this.stakePercentFormAlertId);
    stakePercentFormArray.push(this.formBuilder.group({
      name:['',Validators.required],
      percent:['',Validators.required],
      contribution:[{value: '', disabled: true}]
    }));
  }
  }

  doDeleteStakePercent(index?:number) {
    let stakePercentFormArray=this.formArray as FormArray;
    if(index) {
      stakePercentFormArray.removeAt(index);
    } else {
      for(let index=stakePercentFormArray.length-1; index>=0;index--) {
        stakePercentFormArray.removeAt(index);
      }
    } 
  }

  refresh() {
    this.clearAddOrEdit();
    this.getAllTaxStakes();
  }

  clearAddOrEdit() {
    this.addOrEditFlag=false;
    this.disableActions=false;
    this.clearOrResetForm();
  }

  clearOrResetForm() {
    AppMessageUtils.clearMessage(this.formAlertId);
    let formGroupObj=this.formGroup as FormGroup;
    formGroupObj.reset();
  }

  private getAllTaxStakes() {
    this.isDataLoading=true;
    this.dataList=null;
    this.disableActions=false;
    this.masterService.getTaxStakes().subscribe(data=>{
      this.dataList=data as TaxStake[];
      this.isDataLoading=false;
    });
  }

  addOrEdit(obj:TaxStake) {
    this.editObj=obj?obj:{} as TaxStake;
    if(obj) {
      this.subFormGroup.reset({...obj},{emitEvent:false});
        this.formGroup.disable();
        this.minDate=new Date(this.editObj.activeDate);
        this.minDate.setDate(this.minDate.getDate() + 1);
        //this.subFormGroup.get('terminationDate').setValidators([Validators.required]);
        this.subFormGroup.get('terminationDate').setValue(this.minDate,Validators.required);
        this.subFormGroup.get('terminationDate').updateValueAndValidity();
        this.subFormGroup.get('terminationDate').enable();
        let stakePercents:TaxStake[]=this.dataList.filter(data=>data.slab.slab===obj.slab.slab && data.category.name===obj.category.name &&obj.name);
        if(stakePercents) {
          this.doDeleteStakePercent();
          this.doAddStakePercent(stakePercents);
          this.formArray.disable();
        }
        this.showStakeTerminationDialog();

    } else {
      this.minDate=new Date();
      this.formArray.enable();
      this.formGroup.enable();
      this.doDeleteStakePercent();
      this.editObj.activeDate=new Date();
      let subFormObj={formGroup:this.editObj}
      this.subFormGroup.get('terminationDate').clearValidators();
      this.subFormGroup.get('terminationDate').updateValueAndValidity();
      this.formGroup.reset({...subFormObj});
      this.addOrEditFlag=true;
      this.disableActions=true;
    }
  }

  save() {
    AppMessageUtils.clearMessage(this.formAlertId);
    AppMessageUtils.clearMessage(this.stakePercentFormAlertId);
    if(this.formGroup.invalid) {
      return;
    }
    let taxStakes=[] as TaxStake[];
    let updatedObj=this.subFormGroup.getRawValue();
    let stakePercents:TaxStake[]=((this.formArray) as FormArray).getRawValue();
    if(updatedObj.category && typeof updatedObj.category ==='string') {
      updatedObj.category=this.categoryList.filter(cat=>cat.name===updatedObj.category)[0];
    }
    if(!updatedObj.id && !this.isValid(updatedObj)) {
      AppMessageUtils.warningMessage("Tax Stake already Exists",stakePercents.length>0?this.stakePercentFormAlertId:this.formAlertId);
      return;
    }
    if(!this.doesSelectedSlabHasStake) {
        taxStakes.push(updatedObj);
    } else {
      stakePercents.forEach(stakePercent=>taxStakes.push({...stakePercent,...updatedObj}));
      if(!updatedObj.id && !this.areStakeNamesValid(stakePercents)) {
        AppMessageUtils.warningMessage("Duplicate Names are not allowed",this.stakePercentFormAlertId);
        return;
      }
    }
    this.dialogService.closeAllDialogues();
    this.masterService.doAddOrUpdateTaxStakes(taxStakes).subscribe(data=>
      ResponseUtils.isStatus200(data) ? this.refresh() :
      ResponseUtils.isStatus409(data) ? 
      AppMessageUtils.warningMessage("Tax Stake already exists",this.formAlertId) : ''
    );
  }

  private isValid(updatedObj:TaxStake) {
    let objs = this.dataList ? [...this.dataList] : [];
    if((objs && objs.filter(obj=>obj.isActive && obj.slab.type.name === updatedObj.slab.type.name && obj.slab.slab === updatedObj.slab.slab && obj.category.name === updatedObj.category.name).length>0)) {
      return false;
    }
    
    return true;
}

private areStakeNamesValid(stakes:TaxStake[]) {
  let stakeNames:String[]=stakes.map(stake=>stake.name);
  for(let index=0;index<stakeNames.length;index++) {
      if(stakeNames.filter(stakeName=>stakeName ===stakeNames[0]).length>1) {
          return false;
      }
  }
  return true;
}

showStakeTerminationDialog() {
  this.dialogService.closeAllDialogues();
  let dialogInputs:DialogData={} as DialogData;
  dialogInputs.title='Terminate Tax Stake'
    dialogInputs.dialogClass=DialogClass.MEDIUM;
    dialogInputs.closeBtnLabel='Close';
    dialogInputs.templateRef=()=>this.stakeTerminationTemplate;
    dialogInputs.buttonTemplates=[({templateRef:this.stakePercentButtonTemplate} as DialogButtonTemplate)]
    this.dialogService.showDialogue(dialogInputs,{disableClose:true});
}
  showStakePercentDialog() {
    this.doDeleteStakePercent();
    this.doAddStakePercent();
    this.dialogService.closeAllDialogues();
    let dialogInputs:DialogData={} as DialogData;
    dialogInputs.title='Add Stake Percents'
      dialogInputs.dialogClass=DialogClass.MEDIUM;
      dialogInputs.closeBtnLabel='Close';
      dialogInputs.templateRef=()=>this.stakePercentTemplate;
      dialogInputs.buttonTemplates=[({templateRef:this.stakePercentButtonTemplate} as DialogButtonTemplate)]
      this.dialogService.showDialogue(dialogInputs,{disableClose:true});
  }

  checkPercent() {
    const arrayItems = this.formArray as FormArray;
    this.totalPercent = arrayItems.controls.map(item => +item.get('percent').value).reduce((acc, val) => acc + val);
    let selectedSlab=(this.subFormGroup.getRawValue() as TaxStake).slab.slab;
    arrayItems.controls.forEach(item => {
        item.get('contribution').patchValue(+item.get('percent').value * +selectedSlab/100);
      })
    if(this.totalPercent>100){
      AppMessageUtils.errorMessage('Total Percent should not be greater than 100',this.stakePercentFormAlertId);
    } else {
      AppMessageUtils.clearMessage(this.stakePercentFormAlertId);
    }
  }

   isDisableTerminate(stake:TaxStake) {
      return stake && !stake.isActive;
  }

  get subFormGroup() {
    return (this.formGroup.controls.formGroup) as FormGroup
  }
  
}