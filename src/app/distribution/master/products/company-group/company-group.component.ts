import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MasterService } from '../../master.service';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { CompanyGroup } from 'src/app/shared/models/master-models';

@Component({
  selector: 'app-company-group',
  templateUrl: './company-group.component.html',
  styleUrls: ['./company-group.component.scss', '../../master.component.scss']
})
export class CompanyGroupComponent implements OnInit {
  formAlertId='companyGroupAlertId';
  formGroup:FormGroup;
  editObj:CompanyGroup={} as CompanyGroup;
  addOrEditFlag:boolean;

  dataList:CompanyGroup[];
  isDataLoading:boolean;
  disableActions:boolean;
  tableDefinition:TableDefinition={
    columns:[
      {id:"compGroupName",  name:"Name", value:(obj)=>obj['compGroupName']?obj['compGroupName']:''},
      {id:"action", name:"Action", disableSort:true, actions:[
        {method:(obj)=>this.addOrEdit(obj),name:'Edit',icon:'assets/new_edit2.png',style:ActionStyle.EDIT},
        {method:(obj)=>this.delete(obj),name:'Delete',icon:'assets/new_delete2.png',style:ActionStyle.DELETE,
        dialogProperties:{title:'Delete Company Group'}}
    ]},
  ]};

  constructor(private masterService:MasterService, private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.formGroup=this.buildFormGroup();
  this.formGroup.valueChanges.subscribe(data=>AppMessageUtils.clearMessage(this.formAlertId));
  this.refresh();
  }

  private buildFormGroup() {
    return this.formBuilder.group({
      compGroupId:[this.editObj.compGroupId ? this.editObj.compGroupId:0],
      compGroupName:[this.editObj.compGroupName ? this.editObj.compGroupName:'',Validators.required]
    });

  }

  refresh() {
    this.clearAddOrEdit();
    this.clearOrResetForm();
    this.getAllCompGroup();
  }

  clearAddOrEdit() {
    this.addOrEditFlag=false;
    this.editObj={} as CompanyGroup;
    AppMessageUtils.clearMessage(this.formAlertId);
  }

  clearOrResetForm() {
    AppMessageUtils.clearMessage(this.formAlertId);
    let formGroupObj=this.formGroup as FormGroup;
    formGroupObj.reset({...this.editObj});
  }

  private getAllCompGroup() {
    this.isDataLoading=true;
    this.dataList=[];
    this.disableActions=false;
    this.masterService.getAllCompGroup().subscribe(data=>{
      this.dataList=data as CompanyGroup[];
      this.isDataLoading=false;
    });
  }

  addOrEdit(compGroup?:CompanyGroup) {
    this.editObj=compGroup?compGroup:{} as CompanyGroup;
    this.formGroup.reset({...this.editObj});
    this.addOrEditFlag=true;
  }

  delete(compGroup?:CompanyGroup) {
   this.disableActions=true;
   this.masterService.doDeleteCompGroup(compGroup).subscribe(data=>
    ResponseUtils.isStatus200(data) ? this.refresh() :
    ResponseUtils.isStatus404(data) ? 
    AppMessageUtils.warningMessage("Company Group already deleted",this.formAlertId) : '');
  }

  save() {
    AppMessageUtils.clearMessage(this.formAlertId);
    if(!this.formGroup.valid) {
      return;
    } 
    let updatedObj:CompanyGroup={...this.formGroup.getRawValue()};
   
    if(JSON.stringify(this.editObj) === JSON.stringify(updatedObj)) {
      AppMessageUtils.warningMessage("Modify the form in order to submit",this.formAlertId);
      return;
    } else if(!this.isValid(updatedObj)) {
      return;
    }
    if(!updatedObj.compGroupId){
      updatedObj.compGroupId = 0;
    }

    this.disableActions=true;
    this.masterService.doAddOrUpdateCompGroup(updatedObj).subscribe(data=>
      ResponseUtils.isStatus200(data) ? this.refresh() :
      ResponseUtils.isStatus409(data) ? 
      AppMessageUtils.warningMessage("Company Group already exists",this.formAlertId) : ''
      
    );
  }

  private isValid(updatedObj?:CompanyGroup) {
    let isValid:boolean=true;
    let objs = this.dataList ? [...this.dataList] : [];
    if(updatedObj.compGroupId) {
      objs=objs.filter(obj=>obj.compGroupId !==updatedObj.compGroupId);
    }
    if((objs && objs.filter(obj=>obj.compGroupName === updatedObj.compGroupName).length>0)) {
      AppMessageUtils.warningMessage("Company Group already exists",this.formAlertId);
      isValid=false;
    }
    return isValid;
}

  isUpdate() {
    return (this.editObj && this.editObj.compGroupId)? true : false;
  }
}
