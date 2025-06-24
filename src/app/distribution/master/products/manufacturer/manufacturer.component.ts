import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { MasterService } from '../../master.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { Manufacturer } from 'src/app/shared/models/master-models';
import { Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { State } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { MatAutocompleteTrigger, MatSelect } from '@angular/material';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';


@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.scss','../../master.component.scss']
})
export class ManufacturerComponent implements OnInit {
  formAlertId='manufacturerAlertId';
  formGroup:FormGroup;
  editObj:Manufacturer={} as Manufacturer;
  addOrEditFlag:boolean;
  stateId = new FormControl('');
  distId = new FormControl('');
  cityId = new FormControl('');
  cityAutoCompleteDef:AutoCompleteDefinition={
    label:'City',
    isRequired:true,
    dataSourceFn: (name)=>this.masterService.loadCities(this.distId.value.districtId ? this.distId.value.districtId : this.editObj.districtId,name),
    keyString:'cityName',
    validators:[Validators.required],
    minCount:2
  }

  cityOptsTable:OptionsTableDefinition={
    panelWidth:300,
    columns:[
      {name:"City", value:(obj)=>obj['cityName']?obj['cityName']:'', fxFlex:35,fxFlex1:35,isKeyColumn:true},
  ]};


  districtAutoCompleteDef:AutoCompleteDefinition={
    label:'District',
    isRequired:true,
    dataSourceFn: (name)=>this.masterService.loadDistricts(this.stateId.value,name),
    keyString:'districtName',
    validators:[Validators.required],
    minCount:  2,
  }

  districtOptsTable:OptionsTableDefinition={
    panelWidth:300,
    columns:[
      {name:"District", value:(obj)=>obj['districtName']?obj['districtName']:'', fxFlex:35,fxFlex1:35,isKeyColumn:true},

  ]};

  stateAutoCompleteDef:AutoCompleteDefinition={
    label:'State',
    isRequired:true,
    dataSourceFn:(name)=>this.masterService.loadStates(true,name),
    keyString:'name',
    validators:[Validators.required],
    minCount:2
  }

  stateOptsTable:OptionsTableDefinition={
    panelWidth:500,
    columns:[
      {name:"State", value:(obj)=>obj['name']?obj['name']:'', fxFlex:75,fxFlex1:75,isKeyColumn:true},
      {name:"Country", value:(obj)=>obj['country']['name']?obj['country']['name']:'',fxFlex:25,fxFlex1:25},

  ]};
  dataList:Manufacturer[];
  isDataLoading:boolean;
  disableActions:boolean;
  tableDefinition:TableDefinition={
    columns:[
      {id:"mfgName",  name:"Name", value:(obj)=>obj['mfgName']?obj['mfgName']:''},
      {id:"cityName",  name:"City", value:(obj)=>obj['cityName']?obj['cityName']:''},
      {id:"action", name:"Action", disableSort:true, actions:[
        {method:(obj)=>this.addOrEdit(obj),name:'Edit',icon:'assets/new_edit2.png',style:ActionStyle.EDIT},
        {method:(obj)=>this.delete(obj),name:'Delete',icon:'assets/new_delete2.png',style:ActionStyle.DELETE,
        dialogProperties:{title:'Delete Manufacturer'}}
    ]},
  ]};
  getstates: any;
  stateMultiFilterCtrl = new FormControl('');
  distList: ReplaySubject<any> = new ReplaySubject<any>(1);
  citieslist: ReplaySubject<any> = new ReplaySubject<any>(1);


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
  protected _onDestroy = new Subject<void>();
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
       console.log(this.distId.value)
       this.masterService.loadCities(this.distId.value.districtId,value)
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
               this.citieslist.next(this.cityList.slice());
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
       this.formGroup.controls.cityId.setValue(cityTab);
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


  constructor(private masterService:MasterService, private formBuilder:FormBuilder, private service:OutWardHttpService) { }

  ngOnInit() {
  this.formGroup=this.buildFormGroup();
  this.formGroup.valueChanges.subscribe(data=>AppMessageUtils.clearMessage(this.formAlertId));
  this.refresh();
   this.getstate();
    //------------------ new code ---------------------//
     // listen for search filed value changes state
     this.stateMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterStateMulti();
     });

    //  this.distId.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() =>{
    //   this.getDistricts(this.distId.value);
    //  });
  
     this.distId.valueChanges.subscribe(res =>{
      if (typeof res === 'object') {}
     });

     this.cityId.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() =>{
      this.getCities(this.cityId.value);
     });

     this.cityId.valueChanges.subscribe(res =>{
      if (typeof res === 'object') {}
     });

    //  this.subscription.add(this.service.getTabData$.subscribe(res =>{
    //   if(res !== null && res) {
    //     if(res[1] == 'District'){
    //       this.distId.setValue(res[0].districtName);
    //     }else if(res[1] == 'City'){
    //       this.cityId.setValue(res[0].cityName);
    //     }
    //   }
    
    //  }));

    //------------------- end code -------------------//
  }

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
  }

  private buildFormGroup() {
    return this.formBuilder.group({
      mfgId:[''],
      mfgName:['',Validators.required],
      cityId:[''],
      // state:['']
    });

  }

  subscription:Subscription=new Subscription();

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  refresh() {
    this.clearAddOrEdit();
    this.clearOrResetForm();
    this.getAllManufacturers();
  }

  clearAddOrEdit() {
    this.addOrEditFlag=false;
    this.editObj={} as Manufacturer;
    AppMessageUtils.clearMessage(this.formAlertId);
  }

  clearOrResetForm() {
    // AppMessageUtils.clearMessage(this.formAlertId);
    // let formGroupObj=this.formGroup as FormGroup;
    // formGroupObj.reset({...this.editObj});
    // if(this.editObj.cityId) {
    //   formGroupObj.reset({...this.editObj,state:this.editObj.cityId});
    // } else {
    //   formGroupObj.reset({...this.editObj});
    // }
    this.formGroup.reset()
    this.stateId.setValue('')
  }


  getstate(){
    this.masterService.loadStates(true,91).subscribe(data => {
      if(data){
        this.getstates = data;
        this.filteredStatesMulti.next(this.getstates.slice());
      }
     
    });
  }

  private getAllManufacturers() {
    this.isDataLoading=true;
    this.dataList=[];
    this.disableActions=false;
    this.masterService.getAllManufacturers().subscribe(data=>{
      this.dataList=data as Manufacturer[];
      this.isDataLoading=false;
    });
  }

  addOrEdit(manufacturer?:Manufacturer) {
    this.editObj=manufacturer?manufacturer:{} as Manufacturer;
    if(this.editObj.cityId) {
      this.formGroup.reset({...this.editObj,state:this.editObj.cityId});
    } else {
      this.formGroup.reset({...this.editObj});
    }

    if(this.editObj.stateId){
      this.stateId.setValue(+this.editObj.stateId);
    }
    if(this.editObj.districtId){
      this.DistrictList= [{districtId:+this.editObj.districtId , districtName: this.editObj.districtName}];
      this.distId.setValue(this.editObj.districtName);
    }
    if(this.editObj.cityId){
      this.cityList= [{cityId:+this.editObj.cityId , cityName: this.editObj.cityName}];

      this.cityId.setValue(this.editObj.cityName)
    }


    this.addOrEditFlag=true;
  }

  delete(manufacturer:Manufacturer) {
   this.disableActions=true;
   this.masterService.doDeleteManfacturer(manufacturer).subscribe(data=>
    ResponseUtils.isStatus200(data) ? this.refresh() :
    ResponseUtils.isStatus404(data) ? 
    AppMessageUtils.warningMessage("Manufacturer already deleted",this.formAlertId) : '');
  }

  save() {
    AppMessageUtils.clearMessage(this.formAlertId);
    if(!this.formGroup.valid) {
      return;
    } 
    let updatedObj:Manufacturer={...this.formGroup.getRawValue(),cityId:this.cityId.value.cityId};
   
    if(JSON.stringify(this.editObj) === JSON.stringify(updatedObj)) {
      AppMessageUtils.warningMessage("Modify the form in order to submit",this.formAlertId);
      return;
    } else if(!this.isValid(updatedObj)) {
      return;
    }
    if(!updatedObj.mfgId){
      updatedObj.mfgId = 0;
    }
    console.log(updatedObj)
    this.disableActions=true;
    this.masterService.doAddOrUpdateManfacturer(updatedObj).subscribe(data=>
      ResponseUtils.isStatus200(data) ? this.refresh() :
      ResponseUtils.isStatus409(data) ? 
      AppMessageUtils.warningMessage("Manufacturer already exists",this.formAlertId) : ''
    );
  }

  private isValid(updatedObj:Manufacturer) {
    let isValid:boolean=true;
    let objs = this.dataList ? [...this.dataList] : [];
    if(updatedObj.mfgId) {
      objs=objs.filter(manufacturer=>manufacturer.mfgId !==updatedObj.mfgId);
    }
    if((objs && objs.filter(manufacturer=>manufacturer.mfgName === updatedObj.mfgName).length>0)) {
      AppMessageUtils.warningMessage("Manufacturer already exists",this.formAlertId);
      isValid=false;
    }
    return isValid;
}

  isUpdate() {
    return (this.editObj && this.editObj.mfgId)? true : false;
  }
  

}
