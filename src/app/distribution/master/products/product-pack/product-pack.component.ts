import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  Validators, FormBuilder
} from '@angular/forms';
import {
  MasterService
} from '../../master.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { ProdMasterType, ProductPack } from 'src/app/shared/models/master-models';
import { ProdMasterTypeEnum } from 'src/app/shared/http-services/masters/masters-http.service';

@Component({
  selector: 'app-product-pack',
  templateUrl: './product-pack.component.html',
  styleUrls: ['./product-pack.component.scss', '../../master.component.scss']
})
export class ProductPackComponent implements OnInit {
  formAlertId='prodPackAlertId';
  formGroup:FormGroup;
  editObj:ProductPack={} as ProductPack;
  addOrEditFlag:boolean;

  dataList:ProductPack[];
  isDataLoading:boolean;
  disableActions:boolean;
  tableDefinition:TableDefinition={
    columns:[
      {id:"prodPackName",  name:"Name", value:(obj)=>obj['prodPackName']?obj['prodPackName']:''},
      {id:"prodLoosePack",  name:"Loose Pack", value:(obj)=>obj['prodLoosePack']?obj['prodLoosePack']:''},
      {id:"action", name:"Action", disableSort:true, actions:[
        {method:(obj)=>this.addOrEdit(obj),name:'Edit',icon:'assets/new_edit2.png',style:ActionStyle.EDIT},
        {method:(obj)=>this.delete(obj),name:'Delete',icon:'assets/new_delete2.png',style:ActionStyle.DELETE,
        dialogProperties:{title:'Delete Product Pack'}}
    ]},
  ]};
  UOMdataList: ProdMasterType[];

  constructor(private masterService:MasterService, private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.formGroup=this.buildFormGroup();
  this.formGroup.valueChanges.subscribe(data=>AppMessageUtils.clearMessage(this.formAlertId));
  this.refresh();
  }

  private buildFormGroup() {
    return this.formBuilder.group({
      prodPackId:[this.editObj.prodPackId],
      prodPackName:[this.editObj.prodPackName,Validators.required],
      prodLoosePack:[this.editObj.prodLoosePack,Validators.required],
      prodUOMId:[this.editObj.prodUOMId],
    });

  }

  refresh() {
    this.clearAddOrEdit();
    this.clearOrResetForm();
    this.getAllProdPack();
    this.getAllProdMasterType();
  }


  private getAllProdMasterType() {
    this.masterService.getAllProdMasterType(ProdMasterTypeEnum.PROD_UOM).subscribe(data=>{
      this.UOMdataList=data as ProdMasterType[];
      this.isDataLoading=false;
    });
  }

  clearAddOrEdit() {
    this.addOrEditFlag=false;
    this.editObj={} as ProductPack;
    AppMessageUtils.clearMessage(this.formAlertId);
  }

  clearOrResetForm() {
    AppMessageUtils.clearMessage(this.formAlertId);
    let formGroupObj=this.formGroup as FormGroup;
    formGroupObj.reset({...this.editObj});
  }

  private getAllProdPack() {
    this.isDataLoading=true;
    this.dataList=null;
    this.disableActions=false;
    const payload = {
      prodPackId: 0,
      prodPackName:'*'
    }
    this.masterService.getAllProdPack(payload).subscribe(data=>{
      this.dataList=data as ProductPack[];
      this.isDataLoading=false;
    });
  }

  addOrEdit(prodPack?:ProductPack) {
    this.editObj=prodPack?prodPack:{} as ProductPack;
    this.formGroup.reset({...this.editObj});
    this.addOrEditFlag=true;
  }

  delete(prodPack?:ProductPack) {
   this.disableActions=true;
   this.masterService.doDeleteProdPack(prodPack).subscribe(data=>
    ResponseUtils.isStatus200(data) ? this.refresh() :
    ResponseUtils.isStatus404(data) ? 
    AppMessageUtils.warningMessage("Product Pack already deleted",this.formAlertId) : '');
  }

  save() {
    AppMessageUtils.clearMessage(this.formAlertId);
    if(!this.formGroup.valid) {
      return;
    } 
    let updatedObj:ProductPack={...this.formGroup.getRawValue()};
   
    if(JSON.stringify(this.editObj) === JSON.stringify(updatedObj)) {
      AppMessageUtils.warningMessage("Modify the form in order to submit",this.formAlertId);
      return;
    } else if(!this.isValid(updatedObj)) {
      return;
    }
    if(!updatedObj.prodPackId){
      updatedObj.prodPackId = 0
    }
    this.disableActions=true;
    this.masterService.doAddOrUpdateProdPack(updatedObj).subscribe(data=>
      ResponseUtils.isStatus200(data) ? this.refresh() :
      ResponseUtils.isStatus409(data) ? 
      AppMessageUtils.warningMessage("Product Pack already exists",this.formAlertId) : ''
      
    );
  }

  private isValid(updatedObj?:ProductPack) {
    let isValid:boolean=true;
    let objs = this.dataList ? [...this.dataList] : [];
    if(updatedObj.prodPackId) {
      objs=objs.filter(obj=>obj.prodPackId !==updatedObj.prodPackId);
    }
    if((objs && objs.filter(obj=>obj.prodPackName === updatedObj.prodPackName).length>0)) {
      AppMessageUtils.warningMessage("Product Pack already exists",this.formAlertId);
      isValid=false;
    }
    return isValid;
}

  isUpdate() {
    return (this.editObj && this.editObj.prodPackId)? true : false;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
