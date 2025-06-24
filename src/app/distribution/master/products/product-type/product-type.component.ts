import { Component, OnInit } from '@angular/core';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MasterService } from '../../master.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { ProdMasterTypeEnum } from 'src/app/shared/http-services/masters/masters-http.service';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { ProdMasterType } from 'src/app/shared/models/master-models';
@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss','../../master.component.scss']
})

export class ProductTypeComponent implements OnInit {
  type=ProdMasterTypeEnum.PROD_TYPE;
  formAlertId=this.type+'AlertId';
  formGroup:FormGroup;
  editObj:ProdMasterType={} as ProdMasterType;
  addOrEditFlag:boolean;

  dataList:ProdMasterType[];
  isDataLoading:boolean;
  disableActions:boolean;
  tableDefinition:TableDefinition={
    columns:[
      {id:"prodMasterTypeId",  name:"Name", value:(obj)=>obj['prodMasterTypeName']?obj['prodMasterTypeName']:''},
      {id:"action", name:"Action", disableSort:true, actions:[
        {method:(obj)=>this.addOrEdit(obj),name:'Edit',icon:'assets/new_edit2.png',style:ActionStyle.EDIT},
        {method:(obj)=>this.delete(obj),name:'Delete',icon:'assets/new_delete2.png',style:ActionStyle.DELETE,
        dialogProperties:{title:'Delete '+this.type.value}}
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
      prodMasterTypeId:[this.editObj.prodMasterTypeId],
      prodMasterTypeName:[this.editObj.prodMasterTypeName,Validators.required],
      prodMasterType:[this.type]
    });

  }

  refresh() {
    this.clearAddOrEdit();
    this.clearOrResetForm();
    this.getAllProdMasterType();
  }

  clearAddOrEdit() {
    this.addOrEditFlag=false;
    this.editObj={} as ProdMasterType;
    AppMessageUtils.clearMessage(this.formAlertId);
  }

  clearOrResetForm() {
    AppMessageUtils.clearMessage(this.formAlertId);
    let formGroupObj=this.formGroup as FormGroup;
    formGroupObj.reset({...this.editObj});
  }

  private getAllProdMasterType() {
    this.isDataLoading=true;
    this.dataList=null;
    this.disableActions=false;
    this.masterService.getAllProdMasterType(this.type).subscribe(data=>{
      this.dataList=data as ProdMasterType[];
      this.isDataLoading=false;
    });
  }

  addOrEdit(prodMasterType?:ProdMasterType) {
    this.editObj=prodMasterType?prodMasterType:{} as ProdMasterType;
    this.formGroup.reset({...this.editObj});
    this.addOrEditFlag=true;
  }

  delete(prodMasterType?:ProdMasterType) {
   this.disableActions=true;
   this.masterService.doDeleteProdMasterType(this.type,prodMasterType).subscribe(data=>
    ResponseUtils.isStatus200(data) ? this.refresh() :
    ResponseUtils.isStatus404(data) ? 
    AppMessageUtils.warningMessage(this.type.value+" already deleted",this.formAlertId) : '');
  }

  save() {
    AppMessageUtils.clearMessage(this.formAlertId);
    if(!this.formGroup.valid) {
      return;
    } 
    let updatedObj:ProdMasterType={...this.formGroup.getRawValue()};
   
    if(JSON.stringify(this.editObj) === JSON.stringify(updatedObj)) {
      AppMessageUtils.warningMessage("Modify the form in order to submit",this.formAlertId);
      return;
    } else if(!this.isValid(updatedObj)) {
      return;
    }
    if(!updatedObj.prodMasterType){
      updatedObj.prodMasterType = 'PROD_TYPE';
    }
    if(!updatedObj.prodMasterTypeId){
      updatedObj.prodMasterTypeId = 0;
    }
    this.disableActions=true;
    this.masterService.doAddOrUpdateProdMasterType(this.type,updatedObj).subscribe(data=>
      ResponseUtils.isStatus200(data) ? this.refresh() :
      ResponseUtils.isStatus409(data) ? 
      AppMessageUtils.warningMessage(this.type.value+" already exists",this.formAlertId) : ''
    );
  }

  private isValid(updatedObj?:ProdMasterType) {
    let isValid:boolean=true;
    let objs = this.dataList ? [...this.dataList] : [];
    if(updatedObj.prodMasterTypeId) {
      objs=objs.filter(obj=>obj.prodMasterTypeId !==updatedObj.prodMasterTypeId);
    }
    if((objs && objs.filter(obj=>obj.prodMasterTypeName === updatedObj.prodMasterTypeName).length>0)) {
      AppMessageUtils.warningMessage(this.type.value+" already exists",this.formAlertId);
      isValid=false;
    }
    return isValid;
}

  isUpdate() {
    return (this.editObj && this.editObj.prodMasterTypeId)? true : false;
  }
}
