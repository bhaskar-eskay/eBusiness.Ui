import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MasterService } from '../../master.service';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { CompanyMaster } from 'src/app/shared/models/master-models';
import { select, Store } from '@ngrx/store';
import { citiesFeatureKey } from '../../../../shared/ngrx-store/reducers/cities.reducer';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { MatAutocompleteTrigger, MatSelect } from '@angular/material';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';




@Component({
  selector: 'app-custom-companies',
  templateUrl: './custom-companies.component.html',
  styleUrls: ['./custom-companies.component.scss','../../master.component.scss']
})
export class CustomCompaniesComponent implements OnInit {
  @ViewChild('deleteCompanyTemplate',{static:false}) deleteCompanyTemplate;
  formAlertId='companyMasterAlertId';
  formGroup:FormGroup;
  editObj:CompanyMaster={} as CompanyMaster;
  addOrEditFlag:boolean;

  dataList:CompanyMaster[];
  isDataLoading:boolean;
  disableActions:boolean;
  tableDefinition:TableDefinition={
    columns:[
      {id:"compName",  name:"Name", value:(obj)=>obj['compName']?obj['compName']:''},
      {id:"compShName",  name:"Sh.Name", value:(obj)=>obj['compShName']?obj['compShName']:''},
      {id:"address1",  name:"Address1", value:(obj)=>obj['address1']?obj['address1']:''},
      {id:"address2",  name:"Address2", value:(obj)=>obj['address2']?obj['address2']:''},
      {id:"cityName",  name:"City", value:(obj)=>obj['cityName']?obj['cityName']:''},
      {id:"compGroupName",  name:"Company Group", value:(obj)=>obj['compGroupName'] ?obj['compGroupName']:''},
      {id:"action", name:"Action", disableSort:true, actions:[
        {method:(obj)=>this.addOrEdit(obj),name:'Edit',icon:'assets/new_edit2.png',style:ActionStyle.EDIT},
        {method:(obj)=>this.delete(obj),name:'Delete',icon:'assets/new_delete2.png',style:ActionStyle.DELETE,
        dialogProperties:{title:'Delete Company',templateRef:()=>this.deleteTemplate()}}
    ]},
  ]};

  cityAutoCompleteDef:AutoCompleteDefinition={
    label:'City',
    isRequired:true,
    dataSourceFn:(name)=>this.masterService.loadCities(this.distId.value.districtId ?this.distId.value.districtId : this.editObj.districtId,name),
    keyString:'cityName',
    validators:[Validators.required],
    minCount:2
  };

  cityOptsTable:OptionsTableDefinition={
    panelWidth:700,
    columns:[
      {name:"City", value:(obj)=>obj['cityName']?obj['cityName']:'', fxFlex:35,fxFlex1:35,isKeyColumn:true},

  ]};

  districtAutoCompleteDef:AutoCompleteDefinition={
    label:'District',
    isRequired:true,
    dataSourceFn: (name)=>this.masterService.loadDistricts(this.stateId.value,name),
    keyString:'districtName',
    validators:[Validators.required],
    minCount:2
  }

  districtOptsTable:OptionsTableDefinition={
    panelWidth:300,
    columns:[
      {name:"District", value:(obj)=>obj['districtName']?obj['districtName']:'', fxFlex:35,fxFlex1:35,isKeyColumn:true},

  ]};

  groupsAutoCompleteDef:AutoCompleteDefinition={
    label:'Company Group',
    isRequired:true,
    dataSourceFn:(name)=>this.masterService.getAllCompGroup(name),
    keyString:'compGroupName',
    validators:[Validators.required],
    minCount:2
  };
  protected _onDestroy = new Subject<void>();
  getgroups: any;
  constructor(private masterService:MasterService, private formBuilder:FormBuilder, private store: Store<City>,
    private service:OutWardHttpService
    ) { }

  ngOnInit() {
  this.formGroup=this.buildFormGroup();
  this.formGroup.valueChanges.subscribe(data=>AppMessageUtils.clearMessage(this.formAlertId));
  this.refresh();
  this.getcompgroups();
  // this.store.pipe(select(citiesFeatureKey),map(city => city.))
    // listen for search filed value changes state
    this.groupMultiFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filtergroupMulti();
    });


    this.getstate();
    //------------------ new code ---------------------//
     // listen for search filed value changes state
     this.stateMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterStateMulti();
     });
  
  
    //------------------- end code -------------------//
 
    // this.subscription.add(this.service.getTabData$.subscribe(res =>{
    //   if(res != null && res){
    //     if(res[1] == 'District'){
    //       this.distId.setValue(res[0].districtName);
    //     }else if(res[1] == 'City'){
    //       this.formGroup.controls.cityId.setValue(res[0].cityName);
    //     }
    //   }
    //  }));

 
  }

  getcompgroups(){
    this.masterService.getAllCompGroup().subscribe(x=>{
      if(x){
       this.getgroups = x;
       this.filteredgroupMulti.next(this.getgroups.slice());
      }
    });
  }

  subscription:Subscription=new Subscription();

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private buildFormGroup() {
    return this.formBuilder.group({
      compId:[this.editObj.compId],
      compName:[this.editObj.compName,Validators.required],
      compShName:[this.editObj.compShName, Validators.required],
      address1:[this.editObj.address1],
      address2:[this.editObj.address2],
      cityId:[this.editObj.cityName],
      compGroupId:[this.editObj.compGroupId],
      isActive:[1],
      // inActiveDate:['']
    });

  }

  refresh() {
    this.clearAddOrEdit();
    this.clearOrResetForm();
    this.getAllCompMaster();
  }

  getCity$(cityId): Observable<any>{
   const CityStore$ =  this.store.pipe(select(state => state[citiesFeatureKey]),
    map(state => {
      return {...state.entities[cityId]}
    }))
    return CityStore$
  }

  clearAddOrEdit() {
    this.addOrEditFlag=false;
    this.editObj={} as CompanyMaster;
    AppMessageUtils.clearMessage(this.formAlertId);
  }

  clearOrResetForm() {
    AppMessageUtils.clearMessage(this.formAlertId);
    let formGroupObj=this.formGroup as FormGroup;
    formGroupObj.reset({...this.editObj});
    this.distId.reset(this.editObj ? this.editObj.districtName : '');
    this.stateId.reset(this.editObj ? this.editObj.stateId : '');
    this.formGroup.controls.cityId.setValue(this.editObj ? this.editObj.cityName : '')
   
  }

  private getAllCompMaster() {
    this.isDataLoading=true;
    this.dataList=[];
    this.disableActions=false;
    this.masterService.getAllCompanyMaster().subscribe(data=>{
      this.dataList=data as CompanyMaster[];
      console.log(this.dataList,'list')
      // this.getCity$(this.dataList[0].cityId).subscribe(data => this.dataList[0].cityId = data)
      this.isDataLoading=false;
    });
  }

  addOrEdit(compMaster?:CompanyMaster) {
    this.editObj=compMaster?compMaster:{} as CompanyMaster;
    if(this.editObj.stateId){
      this.stateId.setValue(+this.editObj.stateId);
    }
    if(this.editObj.districtId){
      this.DistrictList= [{districtId:+this.editObj.districtId , districtName: this.editObj.districtName}];
      this.distId.setValue(this.editObj.districtName)
    }
    if(this.editObj.cityId){
      this.cityList= [{cityId:+this.editObj.cityId , cityName: this.editObj.cityName}];
      // this.distId.setValue(this.editObj.districtId)
    }
    this.formGroup.reset({...this.editObj});
    this.formGroup.controls.cityId.setValue(this.editObj.cityName)
    this.addOrEditFlag=true;
  }

  delete(compMaster?:CompanyMaster) {
   this.disableActions=true;
   this.masterService.doDeleteCompanyMaster(compMaster).subscribe(data=>
    ResponseUtils.isStatus200(data) ? this.refresh() :
    ResponseUtils.isStatus404(data) ? 
    AppMessageUtils.warningMessage("Company already deleted",this.formAlertId) : '');
  }

  save() {
    AppMessageUtils.clearMessage(this.formAlertId);
    if(!this.formGroup.valid) {
      return;
    } 
    let updatedObj:any={...this.formGroup.getRawValue()};
    console.log(updatedObj);
    updatedObj.cityId = updatedObj.cityId.cityId
    if(this.editObj.compName===updatedObj.compName && this.editObj.compShName===updatedObj.compShName && this.editObj.address1===updatedObj.address1 &&
      this.editObj.address2===updatedObj.address2 && this.editObj.cityId===updatedObj.cityId &&
      this.editObj.compGroupId===updatedObj.compGroupId) {
      AppMessageUtils.warningMessage("Modify the form in order to submit",this.formAlertId);
      return;
    } else if(!this.isValid(updatedObj)) {
      return;
    }
    console.log(updatedObj);
    if(!updatedObj.compId){
      updatedObj.compId = 0;
    }
    // if(!updatedObj.inActiveDate){
    //   updatedObj.inActiveDate = '';
    // }
    if(!updatedObj.isActive){
      updatedObj.isActive = 1;
    }
    this.disableActions=true;
    this.masterService.doAddOrUpdateCompanyMaster(updatedObj).subscribe(data=>
      ResponseUtils.isStatus200(data) ? this.refresh() :
      ResponseUtils.isStatus409(data) ? 
      AppMessageUtils.warningMessage("Company already exists",this.formAlertId) : ''
      
    );
  }

  private isValid(updatedObj?:CompanyMaster) {
    let isValid:boolean=true;
    let objs = this.dataList ? [...this.dataList] : [];
    if(updatedObj.compId) {
      objs=objs.filter(obj=>obj.compId !==updatedObj.compId);
    }
    if((objs && objs.filter(obj=>obj.compName === updatedObj.compName).length>0)) {
      AppMessageUtils.warningMessage("Company already exists",this.formAlertId);
      isValid=false;
    }
    return isValid;
}

  isUpdate() {
    return (this.editObj && this.editObj.compId)? true : false;
  }


  deleteTemplate() {
      return this.deleteCompanyTemplate;
  }

   // Tabs Code
   @ViewChild('groupTab', {static:false}) groupTab: MatSelect;
   groupMultiFilterCtrl = new FormControl('');
   public filteredgroupMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
   GroupTab(event: KeyboardEvent) {
    if (event.keyCode === 9) {
      const statetab = this.groupTab.options;
      const result = statetab.find(x => x.active === true);
      this.formGroup.controls.compGroupId.setValue(result.value);
    }
  }

  protected filtergroupMulti() {
    if (!this.getgroups) {
      return;
    }
    // get the search keyword
    let search = this.groupMultiFilterCtrl.value;
    if (!search) {
      this.filteredgroupMulti.next(this.getgroups.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredgroupMulti.next(
      this.getgroups.filter(bank => bank.compGroupName.toLowerCase().indexOf(search) > -1)
    );
  }

  ///------------add ----////////////

  stateId = new FormControl('');
  distId = new FormControl('');

  getstates: any;
  stateMultiFilterCtrl = new FormControl('');


   //state
   protected filterStateMulti() {
    if (!this.getstates) {
      return;
    }
    // get the search keyword
    let search = this.stateMultiFilterCtrl.value;
    if (!search) {
      this.filteredStatesMulti.next(this.getstates.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredStatesMulti.next(
      this.getstates.filter(bank => bank.stateName.toLowerCase().indexOf(search) > -1)
    );
  }
  public filteredStatesMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
  @ViewChild('stateTab', {static:false}) stateTab: MatSelect;

  // auto complete district
  DistrictList:any;
  @ViewChild('districtfocus', {static:false}) districtfocus: ElementRef;
  @ViewChild('districtautoCompleteInput', {static:false, read: MatAutocompleteTrigger }) districtautoCompleteInput: MatAutocompleteTrigger;
  public DistrictMapper = key => {
    if(key){
      const selection = this.DistrictList.find(dist => dist.districtId === key);
      if (selection) {
        return selection.districtName;
      }
    }
  };
  showdistrict:boolean = false;

  getDistricts(value) {
    if (value.length >= 3) {
      this.showdistrict = true;
      this.masterService.loadDistricts(this.stateId.value,value)
        .pipe(takeUntil(this._onDestroy))
        .subscribe(
          ListList => {
            if (ListList.length === 0) {
              this.showdistrict = false;
              this.DistrictList = [];
              this.distId.setErrors(
                {
                  incorrect: true
                },
                {
                  emitEvent: true
                }
              );
            } else {
              this.DistrictList = ListList;
            }
          }, (error) => {
            this.DistrictList = [];
            // AppMessageUtils.warningMessage('No Data Found') 
          }
        );
        this.distId.setErrors(
        {
          incorrect: true
        },
        {
          emitEvent: true
        }
      );
    } else {
      this.showdistrict = false;
      this.DistrictList = [];
    }
  }


  districtTab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const districtTab = this.districtautoCompleteInput.activeOption.value;
      this.distId.setValue(districtTab);
      this.clickdist();
    }else if(event.keyCode === 13){
      const districtTab = this.districtautoCompleteInput.activeOption.value;
      this.distId.setValue(districtTab);
      this.clickdist();
    }
  }


  // end auto complete

   // cities auto complete
   cityList:any;
   @ViewChild('citiesfocus', {static:false}) citiesfocus: ElementRef;
   @ViewChild('pinfocus', {static:false}) pinfocus: MatSelect;
   
   @ViewChild('citiesautoCompleteInput', {static:false, read: MatAutocompleteTrigger }) citiesautoCompleteInput: MatAutocompleteTrigger;
   public CitiesMapper = key => {
     if(key){
       const selection = this.cityList.find(city => city.cityId === key);
       if (selection) {
         return selection.cityName;
       }
     }
   };
   showcity:boolean = false;
 
   getCities(value) {
     if (value.length >= 3) {
       this.showcity = true;
       this.masterService.loadCities(this.distId.value,value)
         .pipe(takeUntil(this._onDestroy))
         .subscribe(
           ListList => {
             if (ListList.length === 0) {
               this.showcity = false;
               this.cityList = [];
               this.formGroup.get('cityId').setErrors(
                 {
                   incorrect: true
                 },
                 {
                   emitEvent: true
                 }
               );
             } else {
               this.cityList = ListList;
             }
           }, (error) => {
             this.cityList = [];
             // AppMessageUtils.warningMessage('No Data Found') 
           }
         );
         this.formGroup.get('cityId').setErrors(
         {
           incorrect: true
         },
         {
           emitEvent: true
         }
       );
     } else {
       this.showcity = false;
       this.cityList = [];
     }
   }
 
 
   cityTab(event: KeyboardEvent){
     
     if (event.keyCode === 9) {
       const cityTab = this.citiesautoCompleteInput.activeOption.value;
      //  this.formGroup.controls.cityId.setValue(cityTab);
      //  this.getPincodes(cityTab);
     }
     else if(event.keyCode === 13){
      //  this.formGroup.controls.cityPinId.setValue('');
       setTimeout(() => {
         this.pinfocus.open();
 
       }, 100);
       
       // this.getPincodes(cityTab);
     }
   }
 
  
 
   clickdist(){
     setTimeout(() => {
       this.citiesfocus.nativeElement.focus();
     }, 100);
     this.formGroup.controls.cityId.setValue('');
    //  this.formGroup.controls.cityPinId.setValue('');
     
   }
   ///       en 


   StateTab(event: KeyboardEvent) {
    if (event.keyCode === 9) {
      const statetab = this.stateTab.options;
      const result = statetab.find(x => x.active === true);
      this.stateId.setValue(result.value);
      // this.stateId = this.stateId.value;
      this.statechange();
    }
    else if (event.keyCode === 13) {
      this.statechange();
    
     }
  }

  statechange(){
    this.distId.setValue('');
    this.formGroup.controls.cityId.setValue('');
    setTimeout(() => {
      this.districtfocus.nativeElement.focus();
    }, 100);
  }

  getstate(){
    this.masterService.loadStates(true,91).subscribe(data => {
      if(data){
        this.getstates = data;
        this.filteredStatesMulti.next(this.getstates.slice());
      }
     
    });
  }

}
