import {
  Component,
  OnInit,
  
} from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators, FormBuilder
} from '@angular/forms';
import {
  MasterService
} from '../../master.service';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { Areas } from 'src/app/shared/models/master-models';




@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss', '../../master.component.scss']
})
export class AreaComponent implements OnInit {
  editObj:Areas={} as Areas;
  formGroup: FormGroup;
  formAlertId: 'areaAlertId';
  dataList:Areas[];
  isDataLoading:boolean;
  disableActions:boolean;
  addOrEditFlag:boolean;


  tableDefinition:TableDefinition={
    columns:[
      {id:"areaName",  name:"Area Name", value:(user)=>user['areaName']?user['areaName']:''},
      {id:"firmUserName",  name:"Sales Man", value:(user)=>user['firmUserName']?user['firmUserName']:''},
      // {id:"areaCustCount",  name:"Area CustCount", value:(user)=>user['areaCustCount']?user['areaCustCount']:''},
      // {id:"areaOpening",  name:"Area Opening", value:(user)=>user['areaOpening']?user['areaOpening']:''},  
      {id:"action", name:"Action", disableSort:true, actions:[
        {method:(user)=>this.addOrEdit(user),name:'Edit',icon:'assets/new_edit2.png',style:ActionStyle.EDIT},
        {method:(user)=>this.delete(user),name:'Delete',icon:'assets/new_delete2.png',style:ActionStyle.DELETE,
        dialogProperties:{title:'Delete Area Name'}}
    ]},
  ]};
  firmuserdata: any[];




  constructor(private masterService: MasterService, private formBuilder:FormBuilder) {} 

  ngOnInit() {
    this.formGroup=this.buildFormGroup();
    this.formGroup.valueChanges.subscribe(data=>AppMessageUtils.clearMessage(this.formAlertId));
    this.refresh();
   
  }

  private buildFormGroup() {
    return this.formBuilder.group({
      areaName:[this.editObj.areaName],
      // areaCustCount:[this.editObj.areaCustCount,Validators.required],
      // areaOpening:[this.editObj.areaOpening],
      firmUserId:[this.editObj.firmUserId],
      areaId:[this.editObj.areaId]
    });

  }


  refresh() {
    this.clearAddOrEdit();
    this.clearOrResetForm();
    this.getAllAreas();
    this.getFirmUsers();
  }

  clearAddOrEdit() {
     this.addOrEditFlag=false;
     this.editObj={} as Areas;
     AppMessageUtils.clearMessage(this.formAlertId);
  }

  clearOrResetForm() {
     AppMessageUtils.clearMessage(this.formAlertId);
     let formGroupObj=this.formGroup as FormGroup;
     formGroupObj.reset({...this.editObj});
  }

  private getAllAreas() {
    this.isDataLoading=true;
    this.dataList=[];
    this.disableActions=false;
    this.masterService.getareas().subscribe(data=>{
      this.dataList=data as Areas[];
      this.isDataLoading=false;
    });
  }

  addOrEdit(areas?:Areas) {
    this.editObj=areas?areas:{} as Areas;
    this.formGroup.reset({...this.editObj});
    this.addOrEditFlag=true;
  }

  delete(areas:Areas) {
    this.disableActions=true;
    this.masterService.doDeleteareas(areas).subscribe(data=>
     ResponseUtils.isStatus200(data) ? this.refresh() :
     ResponseUtils.isStatus404(data) ? 
     AppMessageUtils.warningMessage("Area already deleted",this.formAlertId) : '');
   }




  save() {
    AppMessageUtils.clearMessage(this.formAlertId);
    if(!this.formGroup.valid) {
      return;
    } 
    let updatedObj:Areas={...this.formGroup.getRawValue()};
     
    if(JSON.stringify(this.editObj) === JSON.stringify(updatedObj)) {
      AppMessageUtils.warningMessage("Modify the form in order to submit",this.formAlertId);
      return;
    } else if(!this.isValid(updatedObj)) {
      console.log(this.isValid);
      return;
    }
    if(!updatedObj.areaId){
       updatedObj.areaId = 0;
    }
    this.disableActions=true;
    this.masterService.postareas(updatedObj).subscribe(data=>
      ResponseUtils.isStatus200(data) ? this.refresh() :
      ResponseUtils.isStatus409(data) ? 
      AppMessageUtils.warningMessage("Area already exists",this.formAlertId) : ''
    );

  }

  private isValid(updatedObj?:Areas) {
    let isValid:boolean=true;
    let objs = this.dataList ? [...this.dataList] : [];
      if(updatedObj.areaName) {
        objs=objs.filter(areas=>areas.areaId !==updatedObj.areaId);
      }
      if((objs && objs.filter(areas=>areas.areaName === updatedObj.areaName).length>0)) {
        AppMessageUtils.warningMessage("Area already exists",this.formAlertId);
        isValid=false;
      }
      return isValid;
  
    
}

  isUpdate() {
    return (this.editObj && this.editObj.areaId)? true : false;
  }

  getFirmUsers(){
    this.masterService.FirmUsers().subscribe(data=>{
      this.firmuserdata=data as any[];
    });
  }







}
