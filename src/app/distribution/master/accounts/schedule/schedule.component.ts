import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MasterService } from '../../master.service';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import * as dropdowns from '../../../../_files/dropdowns.json';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { Schedules } from 'src/app/shared/models/master-models';
import { AutoCompleteDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { Observable, ReplaySubject, Subject, of } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss', '../../master.component.scss']
})
export class ScheduleComponent implements OnInit {

  formGroup: FormGroup;
  formAlertId: 'scheduleAlertId';
  editObj: Schedules = {} as Schedules;
  addOrEditFlag: boolean;
  dataList: Schedules[];
  isDataLoading: boolean;
  disableActions: boolean;



  tableDefinition: TableDefinition = {
    columns: [
      { id: "schName", name: "Schedule Name", value: (user) => user['schName'] ? user['schName'] : '' },
      { id: "mainSch", name: "Main Schedule", value: (user) => user['mainSchName'] ? user['mainSchName'] : 'NA' },
      { id: "schGroup", name: "Schedule Group", value: (user) => user['schGroup'] ? user['schGroup'] : '' },
      { id: "schMode", name: "Schedule Mode", value: (user) => user['schMode'] ? user['schMode'] : '' },
      { id: "hasRegInfo", name: "Has Reg Info", value: (schedule) => schedule['hasRegInfo'] ? schedule['hasRegInfo'] ? 'Yes' : 'No' : 'No' },
      { id: "hasAddressInfo", name: "Has Address Info", value: (schedule) => schedule['hasAddressInfo'] ? schedule['hasAddressInfo'] ? 'Yes' : 'No' : 'No' },
      { id: "hasOtherInfo", name: "Has Other Info", value: (schedule) => schedule['hasOtherInfo'] ? schedule['hasOtherInfo'] ? 'Yes' : 'No' : 'No' },

      // {id:"compName",  name:"company Name", value:(user)=>user['compName']?user['compName']:''},
      {
        id: "action", name: "Action", disableSort: true, actions: [
          { method: (user) => this.addOrEdit(user), name: 'Edit', icon: 'assets/new_edit2.png', style: ActionStyle.EDIT },
          {
            isDisabled: (schedule) => this.isDeleteDisabled(schedule), method: (user) => this.delete(user), name: 'Delete', icon: 'assets/new_delete2.png', style: ActionStyle.DELETE,
            dialogProperties: { title: 'Delete Company Group' }
          }
        ]
      },
    ]
  };
  schGroup: boolean;
  schModeAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Schedule Mode',
    isRequired: true,
    dataSourceFn: () => of([...dropdowns.scheduleType]),
    isStaticType: true,
    keyString: 'name'
  }

  schGroupAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Schedule Group',
    isRequired: true,
    dataSourceFn: () => of([...dropdowns.scheduleOptions]),
    isStaticType: true,
    keyString: 'name'
  }

  mainSchAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Main Schedule',
    isRequired: true,
    dataSourceFn: () => this.masterService.MainSchedules(),
    isStaticType: true,
    keyString: 'schName',
    enableLazyLoad: true
  }

  mainSchDataSourceFn: () => Observable<[]>;
  scheduledType: { name: string; code: string; }[];
  schedulegroup: { name: string; code: string; }[];


    ///----------------------product type --------------//
    @ViewChild('mschfocus', {static:false}) mschfocus: ElementRef;
    @ViewChild('mschTab', {static:false}) mschTab: MatSelect;
    mschTabMultiFilterCtrl = new FormControl('');
    public filteredmschMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
  mschdata: any;
      MschTab(event: KeyboardEvent) {
        if (event.keyCode === 9) {
          const statetab = this.mschTab.options;
          const result = statetab.find(x => x.active === true);
          this.formGroup.controls.mainSchId.setValue(result.value);
        }
      }
  
      protected filterProdTypesMulti() {
        if (!this.mschdata) {
          return;
        }
        // get the search keyword
        let search = this.mschTabMultiFilterCtrl.value;
        if (!search) {
          this.filteredmschMulti.next(this.mschdata.slice());
          return;
        } else {
          search = search.toLowerCase();
        }
        // filter the banks
        this.filteredmschMulti.next(
          this.mschdata.filter(bank => bank.schName.toLowerCase().indexOf(search) > -1)
        );
      }

      protected _onDestroy = new Subject<void>();
  
      ///---------------- end prod type------------///////



  constructor(private masterService: MasterService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.formGroup = this.buildFormGroup();
    this.scheduledType = dropdowns.scheduleType ;
    this.schedulegroup = dropdowns.scheduleOptions;
    console.log(this.scheduledType);
    this.formGroup.valueChanges.subscribe(data => AppMessageUtils.clearMessage(this.formAlertId));
    this.refresh();
    this.formGroup.get('schMode').valueChanges.subscribe(data => {
      if (data && data['code'] === "S") {
        this.schGroup = true;
      } else {
        this.schGroup = false;
      }
      if (!this.editObj.schId) {
        (this.formGroup as FormGroup).controls.schGroup.reset();
      }else{
        if(this.editObj.mainSchId){
          this.schGroup = true;
        }
      }
    });

    this.mschTabMultiFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterProdTypesMulti();
    });
  }
 

  MainSchedules() {
    this.masterService.MainSchedules().subscribe(
      data => {
        this.mschdata = data;
        this.filteredmschMulti.next(this.mschdata.slice())
        
      })
  }

  private buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      schId: [this.editObj.schId],
      schName: [this.editObj.schName],
      schGroup: [this.editObj.schGroup],
      mainSchId: [this.editObj.mainSchId],
      schMode: [this.editObj.schMode],
      hasRegInfo: [this.editObj.hasRegInfo],
      hasAddressInfo: [this.editObj.hasAddressInfo],
      hasOtherInfo: [this.editObj.hasOtherInfo],
    });

  }
  refresh() {
    this.clearAddOrEdit();
    this.clearOrResetForm();
    this.getAllSchedules();
    this.MainSchedules();
  }
  clearAddOrEdit() {
    this.addOrEditFlag = false;
    this.editObj = {} as Schedules;
    AppMessageUtils.clearMessage(this.formAlertId);
  }

  clearOrResetForm() {
    AppMessageUtils.clearMessage(this.formAlertId);
    this.resetFormGroup(this.editObj.schId ? this.editObj : null);
  }

  private getAllSchedules() {
    this.isDataLoading = true;
    this.dataList = null;
    this.disableActions = false;
    this.masterService.getschedules('*').subscribe(data => {
      this.dataList = data as Schedules[];
      this.isDataLoading = false;
    });
  }

  addOrEdit(schedules?: Schedules) {
    this.addOrEditFlag = true;
    this.resetFormGroup(schedules);
    if (schedules && schedules.isDeletable) {
      this.formGroup.controls.schGroup.disable();
    } else {
      this.formGroup.controls.schGroup.enable();
    }
    if (this.editObj.schId) {
      this.formGroup.controls.schMode.disable();
    } else {
      this.formGroup.controls.schMode.enable();
    }

  }

  private resetFormGroup(schedules?: Schedules) {
    this.editObj = schedules ? schedules : {} as Schedules;
    if (this.editObj.schMode === 'S') {
      this.formGroup.reset({
        ...this.editObj
        // schMode: dropdowns.scheduleType.filter(type => this.editObj.schMode === type.code)[0],
        // schGroup: { ...this.editObj.mainSch }
      });
    } else if (this.editObj.schId) {
      this.formGroup.reset({
        ...this.editObj
        // ,
        // schMode: dropdowns.scheduleType.filter(type => this.editObj.schMode === type.code)[0],
        // schGroup: dropdowns.scheduleOptions.filter(option => this.editObj.schGroup === option.name)[0]
      });
    } else {
      this.formGroup.reset();
    }

  }

  delete(schedules: Schedules) {
    this.disableActions = true;
    this.masterService.doDeleteschedules(schedules).subscribe(data =>
      data && data === 'Success' ? this.refresh() :
        AppMessageUtils.warningMessage("Schedules already deleted", this.formAlertId));
  }

  save() {
    AppMessageUtils.clearMessage(this.formAlertId);
    if (!this.formGroup.valid) {
      return;
    }
    let updatedObj: Schedules = { ...this.formGroup.getRawValue() };
    console.log(updatedObj);
    if (updatedObj.schMode === 'S') {
      // let schGroup: Schedules = { ...this.formGroup.getRawValue() }.schGroup;
      updatedObj = {
        ...updatedObj,
        // mainSch: schGroup,
        schGroup: updatedObj.schGroup,
        schMode: updatedObj.schMode
      };
    } else {
      updatedObj = { ...updatedObj, schGroup: updatedObj.schGroup, schMode: updatedObj.schMode};
    }
    if(!updatedObj.schId){
      updatedObj.schId = 0;
    }

    if(!updatedObj.mainSchId){
      updatedObj.mainSchId = null;
    }
    // else{
    //   updatedObj.mainSchId = updatedObj.mainSchId.schId;
    // }

    if (JSON.stringify(this.editObj) === JSON.stringify(updatedObj)) {
      AppMessageUtils.warningMessage("Modify the form in order to submit", this.formAlertId);
      return;
    } else if (!this.isValid(updatedObj)) {
      return;
    }
    this.disableActions = true;
    this.masterService.postschedules(updatedObj).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus409(data) ?
          AppMessageUtils.warningMessage("Schedules already exists", this.formAlertId) : ''
    );
  }

  private isValid(updatedObj: Schedules) {
    let isValid: boolean = true;
    let objs = this.dataList ? [...this.dataList] : [];
    if (updatedObj.schId) {
      objs = objs.filter(schedules => schedules.schId !== updatedObj.schId);
    }

    if ((objs && objs.filter(schedules => schedules.schName === updatedObj.schName).length > 0)) {
      AppMessageUtils.warningMessage("Schedules already exists", this.formAlertId);
      isValid = false;
    }
    return isValid;
  }


  isUpdate() {
    return (this.editObj && this.editObj.schId) ? true : false;
  }

  isDeleteDisabled(schedule: Schedules): boolean {
    return schedule.isDeletable;
  }



  sehtypechange(data){
    console.log(data);
    if(data.value == 'M'){
      this.schGroup = false;
      this.formGroup.get('mainSchId').setValue('');
      this.formGroup.get('mainSchId').setErrors(null);
    }else{
      this.schGroup = true;
      this.formGroup.get('schGroup').setValue('');
      this.formGroup.get('schGroup').setErrors(null);
    }
  }


  // schgroup(data){
  // if(data.schMode === 'M'){
  //  return this.getScheduleData.find(x => x.schName === data.schGroup).id || null;
  // }
  // this.getScheduleData.push(data.mainSch);
  //  return this.getScheduleData.find(x => x.schName === data.mainSch.schName).id || null;
  // }



}
