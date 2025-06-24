import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {  FormGroup,  FormControl,  Validators,  FormBuilder, FormArray} from '@angular/forms';
import * as lodash from 'lodash';
import {  MasterService} from '../../master.service';
import * as dropdowns from '../../../../_files/dropdowns.json';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { Areas, Banks } from 'src/app/shared/models/master-models';
import { from, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { MatAutocomplete, MatAutocompleteTrigger, MatDialog, MatDialogConfig, MatSelect } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { MyCustomDialogComponent } from 'src/app/shared/components/my-custom-dialog/my-custom-dialog.component';
import { Router } from '@angular/router';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';

@Component({
  selector: 'app-custom-account',
  templateUrl: './custom-account.component.html',
  styleUrls: ['./custom-account.component.scss'],
})
export class CustomAccountComponent implements OnInit {
  getstates: any;
  pincodesdata: any;
  getareas: any;
  public dropdownData: {
    name: string,
    code: any
  } [] = dropdowns.creditValue1;


  public dropdownData1: {
    name: string,
    code: any
  } [] = dropdowns.creditValue;

  yesnoData: {
    name: string;
    code: number;
  } [] = [];

  creditData: {
    name: string; code: number;
  } [] = [];

  btnSave = 'Save'
  basicForm: FormGroup;
  dataList: any;
  getScheduleData: any = [];
  accountMasterObj: any;
  hsnCode:any;
  showFirmtype:boolean=false;
  operationType = 'Add Account';
  tabList = {
    hasAddressInfo: false,
    hasRegInfo: false,
    hasOtherInfo: false,
    schName: ''
  };
  firmTypes: any;
  firmType = new FormControl();
  cityAutoCompleteDef1: AutoCompleteDefinition = {
    label: 'City',
    isRequired: true,
    dataSourceFn:(name)=>this.masterService.loadCities(this.distId.value.districtId,name),
    keyString: 'cityName',
    validators: [Validators.required],
    minCount:2
  };


  // schAutoComplete
  schAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Schedule Name',
    isRequired: true,
    // isStaticType: true,
    // dataSourceFn:(name)=>this.masterService.getscheduleMode('S'),
    dataSourceFn:(name)=>this.masterService.getschedules(name),
    keyString: 'schName',
    validators: [Validators.required]
  };


  hsnAutoCompleteDef: AutoCompleteDefinition = {
    label: 'HSN',
    // isRequired: true,
    // isStaticType: true,
    // dataSourceFn:(name)=>this.masterService.getscheduleMode('S'),
    dataSourceFn:(name)=>this.masterService.gethsnmasters(name),
    keyString: 'hsnDescription',
    validators: [Validators.required],
    minCount:2
  };


  hsnGroupOptsTable: OptionsTableDefinition = {
    panelWidth: 350,
    columns: [
      { name: 'HSN Code', value: (obj) => obj['hsncode'] ? obj['hsncode'] : '', fxFlex: 50,fxFlex1:50, isKeyColumn: true },
      { name: 'HSN Description', value: (obj) => obj['hsnDescription'] ? obj['hsnDescription'] : '', fxFlex: 100,fxFlex1:100, isKeyColumn: true },
      // { name: 'Sch Group', value: (obj) => obj['schGroup'] ? obj['schGroup'] : '', fxFlex: 25 },
      // { name: 'Sch Mode', value: (obj) => obj['schMode'] ? obj['schMode'] : '', fxFlex: 10 },
    ]
  };




  schGroupOptsTable: OptionsTableDefinition = {
    panelWidth: 450,
    columns: [
      { name: 'Sch Name', value: (obj) => obj['schName'] ? obj['schName'] : '', fxFlex: 49,fxFlex1:49, isKeyColumn: true },
      { name: 'Sch Group', value: (obj) => obj['schGroup'] ? obj['schGroup'] : '', fxFlex: 35 ,fxFlex1:35},
      { name: 'Sch Mode', value: (obj) => obj['schMode'] ? obj['schMode'] : '', fxFlex: 16 ,fxFlex1:16},
    ]
  };

  cityAutoCompleteDef:AutoCompleteDefinition={
    label:'City',
    isRequired:true,
    dataSourceFn: (name)=>this.masterService.loadCities(this.basicForm.controls.accDistrictId.value.districtId ? this.basicForm.controls.accDistrictId.value.districtId : this.accountMasterObj.accDistrictId,name),
    keyString:'cityName',
    validators:[Validators.required],
    minCount:1
  }

  cityOptsTable:OptionsTableDefinition={
    panelWidth:300,
    columns:[
      {name:"City", value:(obj)=>obj['cityName']?obj['cityName']:'', fxFlex:35,fxFlex1:35,isKeyColumn:true},
  ]};


  districtAutoCompleteDef:AutoCompleteDefinition={
    label:'Distict',
    isRequired:true,
    dataSourceFn: (name)=>this.masterService.loadDistricts(this.basicForm.controls.accStateId.value,name),
    keyString:'districtName',
    validators:[Validators.required],
    minCount:1
  }

  districtOptsTable:OptionsTableDefinition={
    panelWidth:300,
    columns:[
      {name:"District", value:(obj)=>obj['districtName']?obj['districtName']:'', fxFlex:35,fxFlex1:35,isKeyColumn:true},

  ]};



  isDataLoading: boolean;
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
  pincodeList;
  hsnList: any;
  cityOptsTable1: OptionsTableDefinition = {
    panelWidth: 700,
    columns: [{
        name: 'City',
        value: (obj) => lodash.get(obj, 'name') ? lodash.get(obj, 'name') : '',
        fxFlex: 35,fxFlex1:35,
        isKeyColumn: true
      },
      {
        name: 'District',
        value: (obj) => lodash.get(obj, 'district.name') ? lodash.get(obj, 'district.name') : '',
        fxFlex: 25,fxFlex1:25
      },
      {
        name: 'State',
        value: (obj) => lodash.get(obj, 'district.state.name') ? lodash.get(obj, 'district.state.name') : '',
        fxFlex: 25,fxFlex1:25
      },
      {
        name: 'Country',
        value: (obj) => lodash.get(obj, 'district.state.country.name') ? lodash.get(obj, 'district.state.country.name') : '',
        fxFlex: 15,fxFlex1:15
      },
    ]
  };
  dataBankList: any;
  dataFirmList: any;
  ifscList: any;
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  selectSchname: any;
  today:any;
  stateId: any;
  areas:any;
  banks: any;
  bank1IFSCdata: any;
   // hsn auto complete
   showsch :boolean = true;
   schList:any;
   @ViewChild('schautoCompleteInput', {static:false, read: MatAutocompleteTrigger }) schautoCompleteInput: MatAutocompleteTrigger;
  dummyschlist: any;
  public filteredmschMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
  public distList: ReplaySubject<any> = new ReplaySubject<any>(1);
  TaxSlabdata: any;
  showfirstpage: boolean;
  cityName: any;
  isEdit:boolean=false;
  transactionModeData: { name: string; code: any; }[];
  accSchId = new FormControl('');
  distId = new FormControl('');
  cityId = new FormControl('');
  citiesList: ReplaySubject<any> = new ReplaySubject<any>(1);
  hsncodeList: ReplaySubject<any> = new ReplaySubject<any>(1);
  transmode: { name: string; code: any; }[];

   getschvalues(value) {
    // get the search keyword
    let search = value;
    if (!search) {
      this.filteredmschMulti.next(this.schList.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredmschMulti.next(
      this.schList.filter(bank => bank.schName.toLowerCase().indexOf(search) > -1)
    );

    // if(this.schList.length ==0){
    //   this.schList == this.dummyschlist;
    // }
   
   }
   getareavalues(value) {
    // get the search keyword
    let search = value;
    if (!search) {
      this.filteredmschMulti.next(this.schList.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredmschMulti.next(
      this.schList.filter(bank => bank.schName.toLowerCase().indexOf(search) > -1)
    );
    // if(this.schList.length ==0){
    //   this.schList == this.dummyschlist;
    // }
   }
   SchTab(event: KeyboardEvent){
     
     if (event.keyCode === 9) {
       const cityTab:any = this.schList.find(x=> x.schId == this.schautoCompleteInput.activeOption.value);
       if(cityTab){
         this.basicForm.controls.accSchId.setValue(cityTab.schId);
        //  this.setTabs(cityTab);
       }
     } else if(event.keyCode === 13){
      const cityTab:any = this.schList.find(x=> x.schId == this.basicForm.controls.accSchId.value);
       if(cityTab){
        //  this.setTabs(cityTab);
       }
      //  const cityTab:any = this.schList.filter(x=> x.schId == this.formGroup.controls.schId.value);
      //  if(cityTab){
      //    this.formGroup.controls.schcode.setValue(cityTab.schcode);
      //  }
     }
   }

   public schMapper = key => {
    if(key){
      const selection = this.schList.find(dist => dist.schId === key);
      if (selection) {
        return selection.schName;
      }
    }
  };

   clicksch(value){
     const cityTab:any = this.schList.filter(x=> x.schId == value);
       if(cityTab){
         this.basicForm.controls.schcode.setValue(cityTab.schcode);
       }
   }
   // end autocompkete
  constructor(private fb: FormBuilder,private router: Router,private formBuilder:FormBuilder ,public dialog: MatDialog, private masterService: MasterService,private datePipe: DatePipe,
    private service:OutWardHttpService
  ) {
    this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }


  @ViewChild('stateTab', {static:false}) stateTab: MatSelect;
  @ViewChild('pincodeTab', {static:false}) pincodeTab: MatSelect;
  @ViewChild('areaTab',{static:false}) areaTab:MatSelect;
  public filteredStatesMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
   //    stste

   stateMultiFilterCtrl = new FormControl('');

   //pin 
   cityPinIdMultiFilterCtrl = new FormControl('');
   public filteredcityPinMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
  //area
  areaMultiFilterCtrl = new FormControl('');
  public filteredAreasMulti: ReplaySubject<any> = new ReplaySubject<any>(1); 

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

  @ViewChild("autoCompletesch", {static:false}) autocomplete: MatAutocomplete;
  showdistrict:boolean = false;
  getLTOtypeData: any[]=[];
  getLTOSData: any[]=[];
  getLTOPrefix: any[]=[];
  firmGroup: any;
  firmdata: any;
  showfirm: boolean = false;
  protected _onDestroy = new Subject<void>();
  getDistricts(value) {
    if (value.length >= 3) {
      this.showdistrict = true;
      this.masterService.loadDistricts(this.basicForm.controls.accStateId.value,value)
        .pipe(takeUntil(this._onDestroy))
        .subscribe(
          ListList => {
            if (ListList.length === 0) {
              this.showdistrict = false;
              this.DistrictList = [];
            
              this.basicForm.get('accDistrictId').setErrors(
                {
                  incorrect: true
                },
                {
                  emitEvent: true
                }
              );
            } else {
              this.DistrictList = ListList;
              this.distList.next(this.DistrictList.slice());
            }
            // return this.distList;
          }, (error) => {
            this.DistrictList = [];
            // AppMessageUtils.warningMessage('No Data Found') 
          }
        );
        this.basicForm.get('accDistrictId').setErrors(
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

  StateTab(event: KeyboardEvent) {
    if (event.keyCode === 9) {
      const statetab = this.stateTab.options;
      const result = statetab.find(x => x.active === true);
      this.basicForm.controls.accStateId.setValue(result.value);
      this.stateId = this.basicForm.controls['accStateId'].value;
      if (this.accountMasterObj.accStateId !== this.basicForm.controls.accStateId.value) {
        this.statechange();
      }
    }
    else if (event.keyCode === 13) {
      if(this.accountMasterObj.accStateId !== this.basicForm.controls.accStateId.value){
      this.statechange();
      }
     }
  }
  AreaTab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const areatab = this.areaTab.options;
      const result = areatab.find(x => x.active === true);
      this.basicForm.controls.accAreaId.setValue(result.value);
      this.areas = this.basicForm.controls['accAreaId'].value;
    }
  }
  PincodeTab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const pincode = this.pincodeTab.options;
      const result = pincode.find(x => x.active === true);
      this.basicForm.controls.cityPinId.setValue(result.value);
    }
  }
 

  districtTab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const districtTab = this.districtautoCompleteInput.activeOption.value;
      this.basicForm.controls.accDistrictId.setValue(districtTab);
      this.clickdist();
    }else if(event.keyCode === 13){
      const districtTab = this.districtautoCompleteInput.activeOption.value;
      this.basicForm.controls.accDistrictId.setValue(districtTab);
      this.clickdist();
    }
  }


  // end auto complete

  // sch auto complete
  showhsn :boolean = false;
  @ViewChild('hsnautoCompleteInput', {static:false, read: MatAutocompleteTrigger }) hsnautoCompleteInput: MatAutocompleteTrigger;
  
  gethsnvalues(value) {
    if (value.length >= 8) {
      this.showhsn = true;
      this.masterService.gethsnmasters(value)
        .pipe(takeUntil(this._onDestroy))
        .subscribe(
          ListList => {
            if (ListList.length === 0) {
              this.showhsn = false;
              this.hsnList = [];
              this.basicForm.get('accHsnCode').setErrors(
                {
                  incorrect: true
                },
                {
                  emitEvent: true
                }
              );
            } else {
              this.hsnList = ListList;
              this.hsncodeList.next(this.hsnList.slice());
            }
          }, (error) => {
            this.hsnList = [];
            // AppMessageUtils.warningMessage('No Data Found') 
          }
        );
        this.basicForm.get('accHsnCode').setErrors(
        {
          incorrect: true
        },
        {
          emitEvent: true
        }
      );
    } else {
      this.showhsn = false;
      this.hsnList = [];
    }
  }

  hsnTab(event: KeyboardEvent){
    
    if (event.keyCode === 9) {
      const cityTab = this.hsnautoCompleteInput.activeOption.value;
      this.basicForm.controls.accHsnCode.setValue(cityTab);
    }
  }
  // end autocompkete


  // cities auto complete
  cityList:any;
  @ViewChild('citiesfocus', {static:false}) citiesfocus: ElementRef;
  @ViewChild('pinfocus', {static:false}) pinfocus: MatSelect;
  @ViewChild('areafocus', {static:false}) areafocus: MatSelect;
  
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
      this.masterService.loadCities(this.basicForm.controls.accDistrictId.value.districtId,value)
        .pipe(takeUntil(this._onDestroy))
        .subscribe(
          ListList => {
            if (ListList.length === 0) {
              this.showcity = false;
              this.cityList = [];
              this.basicForm.get('accCityId').setErrors(
                {
                  incorrect: true
                },
                {
                  emitEvent: true
                }
              );
            } else {
              this.cityList = ListList;
              this.citiesList.next(this.cityList.slice());
            }
          }, (error) => {
            this.cityList = [];
            // AppMessageUtils.warningMessage('No Data Found') 
          }
        );
        this.basicForm.get('accCityId').setErrors(
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
      this.basicForm.controls.accCityId.setValue(cityTab);
      this.basicForm.controls.cityPinId.setValue('');
      this.getPincodes(cityTab);
    }
    else if(event.keyCode === 13){
      this.basicForm.controls.cityPinId.setValue('');
      setTimeout(() => {
        this.pinfocus.open();

      }, 100);
      
      // this.getPincodes(cityTab);
    }
  }

  clickcity(val){
    this.basicForm.controls.cityPinId.setValue('');
   this.pinfocus.open();
   this.getPincodes(val);
  //  this.cityName = val.cityName;
  }

  clickdist(){
    setTimeout(() => {
      this.citiesfocus.nativeElement.focus();
    }, 100);
    this.basicForm.controls.accCityId.setValue('');
    this.basicForm.controls.cityPinId.setValue('');
    
  }

  statechange(){
    this.basicForm.controls.accDistrictId.setValue('');
    this.basicForm.controls.accCityId.setValue('');
    this.basicForm.controls.cityPinId.setValue('');
    setTimeout(() => {
      // this.districtfocus.nativeElement.focus();
    }, 100);
  }

  getarea(){
    this.masterService.getareas().subscribe(data => {
      console.log("abc",data);
      if(data){
        this.getareas = data;
        this.filteredAreasMulti.next(this.getareas.slice());
      }
     
    });
}
  getstate(){
    this.masterService.loadStates(true,91).subscribe(data => {
      if(data){
        this.getstates = data;
        this.filteredStatesMulti.next(this.getstates.slice());
      }
     
    });
  }

  getPincodes(id){
    this.masterService.loadPinCodes(id).subscribe(data => {
      if(data){
        this.pincodesdata = data;
        this.filteredcityPinMulti.next(this.pincodesdata.slice());
        if(this.accountMasterObj){
        this.basicForm.controls.cityPinId.setValue(this.accountMasterObj.cityPinId);
        }
      }
     
    });
  }





  

  

  //city auto complete




  //en auto complete

  ngOnInit() {
    // console.log(this.masterService.gethsnmasters(''));
    // this.refresh(); 
    this.yesnoData = dropdowns.productValue.reverse();
    this.creditData = this.dropdownData;
    this.transmode = this.dropdownData1;
    // this.basicForm = this.fb.group({
    //   accName: [''],
    //   accShName : [''],
    //   accSchId: [0],
    //   firmId: [0],
    //   accOpBalType: [0],
    //   accOpBal: [0],
    //   accAddress1: [''],
    //   accAddress2: [''],
    //   accCityId: [0],
    //   cityPinId: [''],
    //   accDistrictId: [0],
    //   accStateId: [0],
    //   accPhone: [''],
    //   accMobile: [''],
    //   allowWhatsApp: [0],
    //   whatsAppMobile: [''],
    //   allowSms: [0],
    //   smsMobile: [''],
    //   accEmail: ['', Validators.pattern(this.emailRegEx)],
    //   accContactPerson: [''],
    //   // accountLtos: this.fb.array([]),
    //   accBankId1: [0],
    //   accBankIFSC1: [''],
    //   accBankAccNo1:  [''],
    //   accTranMode:  [0],
    //   hsnMaster:  [''],
    //   accSacCode:  [0],
    //   accTaxSlabId:  [0],
    //   shadow:  [''],
    //   accDueDays:  [0],
    //   accCreditLimit:  [0],
    //   accRemarks:  [''],
    //   accFirmTypeId:  [0],
    //   accId: 0,
    //   accCountryId: [0],
    //   accAreaId: [0],
    //   accCpersonMobile:[0],
    //   accCredit:[0],
    //   accDebit:[0],
    //   accInterest:[0],
    //   accTcsPercent:[0],
    //   accHsnCode:[0],
    //   accBankId2:[0],
    //   accBankAccNo2:[''],
    //   accBankIFSC2:[''],
    //   accGSTMode:[0],
    //   isActive:[0],
    //   taxcategoryId:[0],
    //   isRegistered:[0],
    //   isDeleted:[0]
    // });


    this.basicForm = this.fb.group({
        accId: [0],
        accShName: [''],
        accName: [''],
        accAddress1: [''],
        accAddress2: [''],
        // accArea:[''],
        accCityId: [''],
        accDistrictId: [''],
        cityPinId: [''],
        accStateId: [''],
        accCountryId: [0],
        accAreaId: [0],
        accSchId: [''],
        accPhone: [''],
        accMobile: ['',Validators.pattern(this.phoneRegEx)],
        accContactPerson: [''],
        accCpersonMobile: ['',Validators.pattern(this.phoneRegEx)],
        accFirmTypeId: [0],
        accTranMode: [0],
        accOpBal: [''],
        accOpBalType: [2],
        accCredit: [''],
        accDebit: [0],
        accCreditLimit: [''],
        accDueDays: [''],
        accInterest: [0],
        accTcsPercent: [0],
        accHsnCode: [''],
        accSacCode: [''],
        accTaxSlabId: [''],
        accBankId1: [0],
        accRemarks: [''],
        accBankAccNo1: [''],
        accBankIFSC1: [''],
        accBankId2: [0],
        accBankAccNo2: [''],
        accBankIFSC2: [''],
        allowSms: [0],
        smsMobile: ['',Validators.pattern(this.phoneRegEx)],
        allowWhatsApp: [0],
        whatsAppMobile: ['',Validators.pattern(this.phoneRegEx)],
        accEmail: ['',Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)],
        accGSTMode: [0],
        firmId: [0],
        isActive: [0],
        taxcategoryId: [0],
        isRegistered: [0],
        isDeleted: [0],
        shadow:[0],
        firmType:[0]
        // accountLtos: this.fb.array([]),
      
    });

    this.getTaSlab()
    
    // listen for search filed value changes state
   this.stateMultiFilterCtrl.valueChanges
   .pipe(takeUntil(this._onDestroy))
   .subscribe(() => {
     this.filterStateMulti();
   });
 // listen for search filed value changes area
 this.areaMultiFilterCtrl.valueChanges
 .pipe(takeUntil(this._onDestroy))
 .subscribe(() => {
   this.filterAreaMulti();
 });
   // listen for search filed value changes pin
   this.cityPinIdMultiFilterCtrl.valueChanges
   .pipe(takeUntil(this._onDestroy))
   .subscribe(() => {
     this.filterPincodeMulti();
   });
 
   this.TaxSlabTabMultiFilterCtrl.valueChanges
   .pipe(takeUntil(this._onDestroy))
   .subscribe(() => {
     this.filterTaxSlabsMulti();
   });

      // listen for search field value changes  Ifsc
      this.bankIFSC1MultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterbankIFSC1Multi();
      });

       // listen for search field value changes  Bank
    this.bankMultiFilterCtrl1.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterBanksMulti1();
    });
    this.basicForm.get('accSchId').valueChanges.subscribe(res =>{
      if (typeof res === 'object') {
        this.setTabs(res);
        if(res.schId == 8 || res.schId == 9){
          this.showFirmtype = true;
        }else{
          this.showFirmtype = false;
        }
      }
    });
    this.masterService.customAccData$.subscribe(
      (response) => {
        if (response) {
          if (response.type === 'edit') {
          this.btnSave = 'Update';
           this.isEdit = true
          this.accountMasterObj = response.data;
          this.hsnCode = this.accountMasterObj.accHsnCode;
          this.operationType = 'Edit Account';
          if(this.accountMasterObj.accBankId1){
            this.changebank(this.accountMasterObj.accBankId1);
          }
          if(this.accountMasterObj.accCityId){
            this.getPincodes(this.accountMasterObj.accCityId);
          }
          if(this.accountMasterObj.accDistrictId){
            this.DistrictList= [{districtId:+this.accountMasterObj.accDistrictId , districtName: this.accountMasterObj.districtName}];
            
          }
          if(this.accountMasterObj.accCityId){
            this.cityList= [{cityId:+this.accountMasterObj.accCityId , cityName: this.accountMasterObj.cityName}];
            // this.distId.setValue(this.editObj.districtId)
          }
          this.refresh();
          } else {
            this.refresh();
            this.operationType = 'Add Account';
            this.accountMasterObj = response.data;
          }
        }
      });

    // this.basicForm.get('accSchId').valueChanges.subscribe(event => {
    //   if (event) {
    //     // const shReord = this.getScheduleData.find(rec => rec.schName.toLowerCase() === event.toLowerCase());
    //     this.setTabs(event);
    //   }
    // });

    // this.basicForm.get('city').valueChanges.subscribe(data => {
    //   if (data && data['id']&& data['district'] ) {
    //   this.basicForm.controls['district'].patchValue(data.district.name);
    //   this.basicForm.controls['district'].disable();
    //   this.getAllPincodes(data['id']);
    //   }
    // });

    // this.basicForm.get('firmId').valueChanges.subscribe(firmId => {
    //   if (firmId) {
    //     this.getFirmDetails(firmId);
    //   }
    // });

    this.basicForm.get('accBankId1').valueChanges.subscribe(data => {
      // this.basicForm.controls['bankIFSCCode'].patchValue(data.code);
      // this.getBankIfscCodes(data);
    });

    this.masterService.getFirmTypes(1).subscribe(data => {
      this.firmTypes = data;
    });

    this.basicForm.get('accCityId').valueChanges.subscribe(res =>{
      if (typeof res === 'object') {  setTimeout(() => {
        if(this.basicForm.controls.accCityId.value.cityId){
          this.clickcity(this.basicForm.controls.accCityId.value.cityId);
        }
      }, 200);}
     });
   
    
  }
  getschedules(){
    this.masterService.getschedules('123').subscribe(x=>{
      if(x){
         this.schList = x;
        //  this.filteredmschMulti.next(this.schList.slice());
         this.dummyschlist =x;
         if(this.operationType == 'Edit Account'){
          this.filtershceuled();
          
         }
      }
    });
  }

  filtershceuled(){
    setTimeout(() => {
      if(this.schList){
        if(this.schList.length > 0){
        const data  = this.schList.find(x => x.schId == this.accountMasterObj.accSchId);
        console.log(data);
        
        if(data){
          this.basicForm.controls.accSchId.setValue(data.schName);
          // this.setTabs(data);
          this.fillFormData();
        }
      }
      }
    }, 100); 
  }
  
  formltoGroup: FormGroup;
  refresh() {
    // this.getSchMode();
    // this.getAllPincodes();
    // this.getAllBanks();
    this.getbanks();
    this.getstate();
    this.getarea();
    if(this.hsnCode >0){
      this.getHsnMasters();
    }
    // this.getschedules();
    this.formltoGroup = this.buildltoformgroup();
    this.fillFormData();
    // this.getAllCompGroup();

  }

  private buildltoformgroup(){
    return this.formBuilder.group({
      firmLtos:this.formBuilder.array([])
    });
  }

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

//filter the Area
protected filterAreaMulti() {
  if (!this.getareas) {
    return;
  }
  // get the search keyword
  let search = this.areaMultiFilterCtrl.value;
  if (!search) {
    this.filteredAreasMulti.next(this.getareas.slice());
    return;
  } else {
    search = search.toLowerCase();
  }
  // filter the banks
  this.filteredAreasMulti.next(
    this.getareas.filter(bank => bank.areaName.toString().toLowerCase().indexOf(search) > -1)
  );
}

    //filter the Pin
    protected filterPincodeMulti() {
      if (!this.pincodesdata) {
        return;
      }
      // get the search keyword
      let search = this.cityPinIdMultiFilterCtrl.value;
      if (!search) {
        this.filteredcityPinMulti.next(this.pincodesdata.slice());
        return;
      } else {
        search = search.toLowerCase();
      }
      // filter the banks
      this.filteredcityPinMulti.next(
        this.pincodesdata.filter(bank => bank.cityPincode.toString().toLowerCase().indexOf(search) > -1)
      );
    }

  setTabs(obj) {
    if (obj) {
      this.tabList.hasAddressInfo = obj.hasAddressInfo;
      this.tabList.hasOtherInfo = obj.hasOtherInfo;
      this.tabList.hasRegInfo = obj.hasRegInfo;
      this.tabList.schName = obj.schName;
    }
    
    if(!obj.hasAddressInfo){
      this.basicForm.get('accAddress1').setErrors(null);
      this.basicForm.get('accStateId').setErrors(null);
      this.basicForm.get('accDistrictId').setErrors(null);
      this.basicForm.get('accCityId').setErrors(null);
      this.basicForm.get('cityPinId').setErrors(null);
      this.basicForm.get('accMobile').setErrors(null);
      this.basicForm.get('accAddress1').setValue('');
      this.basicForm.get('accStateId').setValue('');
      this.basicForm.get('accDistrictId').setValue('');
      this.basicForm.get('accCityId').setValue('');
      this.basicForm.get('cityPinId').setValue('');
      this.basicForm.get('accMobile').setValue('');
      this.basicForm.get('accAddress2').setValue('');
      this.basicForm.get('accPhone').setValue('');
      this.basicForm.get('allowWhatsApp').setValue(0);
      this.basicForm.get('whatsAppMobile').setValue('');
      this.basicForm.get('allowSms').setValue(0);
      this.basicForm.get('smsMobile').setValue('');
      this.basicForm.get('accEmail').setValue('');
      this.basicForm.get('accContactPerson').setValue('');
      this.basicForm.get('accCpersonMobile').setValue('');
    }
    if(!obj.hasOtherInfo){
      this.basicForm.get('accHsnCode').setErrors(null);
      this.basicForm.get('accTaxSlabId').setErrors(null);
      this.basicForm.get('accHsnCode').setValue('');
      this.basicForm.get('accTaxSlabId').setValue('');
      this.basicForm.get('accBankId1').setValue(0);
      this.basicForm.get('accBankAccNo1').setValue('');
      this.basicForm.get('accBankIFSC1').setValue('');
      this.basicForm.get('accTranMode').setValue(0);
      this.basicForm.get('accSacCode').setValue('');
      this.basicForm.get('shadow').setValue('');
      this.basicForm.get('accDueDays').setValue(0);
      this.basicForm.get('accCreditLimit').setValue('');
      this.basicForm.get('accRemarks').setValue('');
      // this.basicForm.get('smsMobile').setValue('');
      // this.basicForm.get('accEmail').setValue('');
      // this.basicForm.get('accContactPerson').setValue('');
      // this.basicForm.get('accCpersonMobile').setValue('');
    }

    if(!obj.hasRegInfo){
      const add = this.formltoGroup.get('firmLtos') as FormArray;
      add.controls = [];
    }
 
    if(obj.hasRegInfo){
      // this.addLtoTypes();
      this.getltos(this.accountMasterObj);
      this.today = new Date().toISOString().split('T')[0];
       this.getLTOtype();
    }
  }

  fillFormData() {
    this.basicForm.patchValue({
      accName: this.accountMasterObj.accName ? this.accountMasterObj.accName : '',
      accShName : this.accountMasterObj.accShName ? this.accountMasterObj.accShName : '',
      accSchId: this.accountMasterObj.accSchName ? this.accountMasterObj.accSchName : '',
      accOpBalType: this.accountMasterObj.accOpBalType,
      accOpBal: this.accountMasterObj.accOpBal ? this.accountMasterObj.accOpBal : '',
      firmId: this.accountMasterObj.firmId ? this.accountMasterObj.firmId : '',
      accAddress1: this.accountMasterObj.accAddress1,
      accAddress2: this.accountMasterObj.accAddress2,
      accDistrictId: this.accountMasterObj.districtName ?  this.accountMasterObj.districtName : '',
      cityPinId: this.accountMasterObj.cityPinId ? this.accountMasterObj.cityPinId : '', // not found
      accStateId: this.accountMasterObj.accStateId ? this.accountMasterObj.accStateId  : '',
      accCityId: this.accountMasterObj.cityName ?  this.accountMasterObj.cityName : '',
      accPhone: this.accountMasterObj.accPhone.trim(),
      accMobile: this.accountMasterObj.accMobile.trim(),
      accCpersonMobile: this.accountMasterObj.accCpersonMobile.trim(),
      allowWhatsApp: this.accountMasterObj.allowWhatsApp,
      whatsAppMobile: this.accountMasterObj.whatsAppMobile.trim(),
      allowSms: this.accountMasterObj.allowSms,
      smsMobile: this.accountMasterObj.smsMobile.trim(),
      accEmail: this.accountMasterObj.accEmail, // not found
      accContactPerson: this.accountMasterObj.accContactPerson,
      // accountLtos: this.accountMasterObj.accountLtos,
      accBankId1: this.accountMasterObj.accBankId1, // has {id: number} need to update
      accBankIFSC1: this.accountMasterObj.accBankIFSC1,
      accBankAccNo1:  this.accountMasterObj.accBankAccNo1,
      accTranMode:  this.accountMasterObj.accTranMode, // not found
      accHsnCode: this.accountMasterObj.accHsnCode ? this.accountMasterObj.accHsnCode : 0,
      accSacCode:  this.accountMasterObj.accSacCode,
      accTaxSlabId:  this.accountMasterObj.accTaxSlabId ? this.accountMasterObj.accTaxSlabId : '',
      shadow: this.accountMasterObj.shadow, // not found
      accDueDays:  this.accountMasterObj.accDueDays,
      accCreditLimit:  this.accountMasterObj.accCreditLimit ? this.accountMasterObj.accCreditLimit : '',
      accCredit : this.accountMasterObj.accCredit ? this.accountMasterObj.accCredit : '',
      accRemarks: this.accountMasterObj.accRemarks,
      firmType: this.accountMasterObj.firmType,
      accId: this.accountMasterObj.accId,
      accAreaId: this.accountMasterObj.accAreaId,
      accFirmTypeId: this.accountMasterObj.accFirmTypeId,
      isRegistered: this.accountMasterObj.accGstIn ? 1 : 0
    });
    // this.getBankIfscCodes(this.accountMasterObj.accBankId1);
    
  }

  getFirmDetails(firmId) {
    if (firmId) {
      this.masterService.getFirmDetails(1).subscribe(data => {
        console.log(data);
        this.dataFirmList = data;
        this.bindLtoTypes(data);
      });
    }
  }

  getltos(id){
    const accid = id ? id.accId : 0;
    const add = this.formltoGroup.get('firmLtos') as FormArray;
    add.controls = [];
    this.masterService.getAccountLtos(accid).subscribe(x => {
      if(x){
        const add = this.formltoGroup.get('firmLtos') as FormArray;
        x.forEach((y,i) =>{
          add.push(this.buildLtos(y,i))
        });
        this.addLtoTypes();
      }else{
        this.addLtoTypes();
      }
    }, (error) => {
      this.addLtoTypes();
    })
    
  }


  addLtoTypes(index?) {
    const add = this.formltoGroup.get('firmLtos') as FormArray;
    if(add.length > 0 && index >=0){
      add.controls[index].get('ltoType').disable();
      add.controls[index].get('ltos').disable();
      add.controls[index].get('ltoPrefixId').disable();
    }
    add.controls.find(x => {
      if (x['controls'].ltoPrefixOrder.value !== 7) {
        this.basicForm.controls.isRegistered.setValue(0);
      } else {
        this.basicForm.controls.isRegistered.setValue(1);
      };
    });
    if((index >=0 && this.isEdit) || (index >=0 && add.length > 0) || (index == undefined && add.length==0)){
      add.push(this.formBuilder.group({
        accLtoId:[0],
        ltoType: [''],
        ltos: [''],
        ltoPrefixId: [''],
        ltoNo: [''],
        ltoValidDate: [this.today],
        ltoPrefixOrder:[''],
        // firmLtoId:[0]
      }));
    }

  }

  buildLtos(data,i):FormGroup {
    // this.updateLTOtype(data,i);
    this.getLTOSData[i] = [{ltoName:data.ltoName,ltoId:data.ltoId}];
    this.getLTOPrefix[i] = [{ltoPrefixId:data.ltoPrefixId,ltoPrefix:data.ltoPrefix}];
    return this.formBuilder.group({
      accLtoId: [data.accLtoId],
      ltoType: [{value:data.ltoTypeId, disabled: true}],
      ltos: [{value:data.ltoId, disabled: true}],
      ltoPrefixId: [{value:data.ltoPrefixId ,disabled: true }],  //
      ltoNo: [{value: data.ltoNo, disabled: false}],
      ltoValidDate: [{value: data.ltoPrefix == 'GSTIN' ? this.today : (data.ltoValidDate? this.datePipe.transform(data.ltoValidDate, 'yyyy-MM-dd'): ''),
         disabled: data.ltoPrefix == 'GSTIN' ? true : false}],
      ltoPrefixOrder:[data.ltoPrefixOrder],
      // firmLtoId:[data.firmLtoId]
    });
  }

  checkvalidation(i:any){
    let lto = this.formltoGroup.get('firmLtos') as FormArray
    // let ltoid = lto.controls[lto.controls.length-1];
    const ltoNoControl = lto.controls[i].get('ltoNo');
    if (lto.controls[i].get('ltoType').value == 2) {
      ltoNoControl.setValidators([Validators.required, Validators.pattern(this.gstin)]);
    } else {
      ltoNoControl.clearValidators(); // Remove validators if condition is not met
    }
  
    // Update the status of the form control after changing the validators
    ltoNoControl.updateValueAndValidity();
  }


  //   if(ltoid.value.ltoType.value ==2){
  //     this.basicForm.controls.ltoNo:['', Validators.pattern(this.gstin)]
  //   }
  // }

  finalsave(data) {
    console.log(this.basicForm.controls);
    const postarray = [];
    const putarray = [];
    const add = this.formltoGroup.get('firmLtos') as FormArray;

    console.log(add);
    if (add.controls.length > 0) {
      add.controls.forEach(element => {        
        if (element['controls'].accLtoId.value == 0) {
          if (element.valid) {
            const payload = {
              accLtoId: element['controls'].accLtoId.value,
              accId: data,
              ltoPrefixId: element['controls'].ltoPrefixId.value,
              ltoPrefixOrder: element['controls'].ltoPrefixOrder.value,
              ltoNo: element['controls'].ltoNo.value,
              ltoValidDate: this.datePipe.transform(element['controls'].ltoValidDate.value, 'yyyy-MM-dd')
            }
            if(this.btnSave == 'Save'){
            postarray.push(payload);
            } else {              
            putarray.push(payload);
            }

          }
        } else {
          const payload = {
            accLtoId: element['controls'].accLtoId.value,
            accId: data,
            ltoPrefixId: element['controls'].ltoPrefixId.value,
            ltoPrefixOrder: element['controls'].ltoPrefixOrder.value,
            ltoNo: element['controls'].ltoNo.value,
            ltoValidDate: this.datePipe.transform(element['controls'].ltoValidDate.value, 'yyyy-MM-dd')
          }
          putarray.push(payload);
        }
      });
      if (postarray.length > 0 && this.btnSave == 'Save') {
        this.masterService.AccountLtos(postarray).subscribe(x => {
          if (x.resultType == 1) {
            this.onClickBackBtn();
            AppMessageUtils.successMessage(x.resultDescription);
            // this.changefirm(this.firmId.value);
          } else {
            AppMessageUtils.warningMessage(x.resultDescription);
          }
        })
      }
      if (putarray.length > 0 && this.btnSave == 'Update') {
          this.masterService.updateAccountLtos(putarray).subscribe(x => {
            if (x.resultType == 1) {
              this.onClickBackBtn();
              AppMessageUtils.successMessage(x.resultDescription);
              // this.changefirm(this.firmId.value);
            } else {
              AppMessageUtils.warningMessage(x.resultDescription);
            }
          })
      }
    }

  }


  bindLtoTypes(data: []) {
    const add = this.formltoGroup.get('firmLtos') as FormArray;
    data.forEach((element: any) => {
      add.push(this.fb.group({
        ltoType: [{value: element.lto.type.name,disabled:true}],
        ltoName: [{value: element.lto.name, disabled:true}],
        ltoPrefix: [{ value: element.name, disabled:true}],
        ltoNo: [''],
        ltoValidDate: ['']
      }));


    });
  }

  @ViewChild('bank1Tab', {static:false}) bank1Tab: MatSelect;

  Bank1Tab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const bank1Tab = this.bank1Tab.options;
      const result = bank1Tab.find(x => x.active === true);
      this.basicForm.controls.accBankId1.setValue(result.value);
      this.changebank(result.value);
    }
  }
  @ViewChild('bankifsc1Tab', {static:false}) bankifsc1Tab: MatSelect;
  Bankifsc1Tab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const bankifsc1Tab = this.bankifsc1Tab.options;
      const result = bankifsc1Tab.find(x => x.active === true);
      this.basicForm.controls.accBankIFSC1.setValue(result.value);
    }
  }

  private getAllPincodes(id) {
    this.isDataLoading = true;
    this.masterService.getpincodes(id).subscribe(data => {
      this.pincodeList = data;
      this.isDataLoading = false;
    });
  }

  formatDate(date: string) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }

  private getAllBanks() {
    this.isDataLoading = true;
    this.dataBankList = null;
    this.masterService.getbanks().subscribe(data => {
      this.dataBankList = data as Banks[];
      this.isDataLoading = false;
    });
  }

  // getBankIfscCodes(id) {
  //   this.masterService.getBankIfscCodes(id).subscribe(result => {
  //     if (result) {
  //       this.ifscList = result;
  //     }
  //   });
  // }

 

  


  private getHsnMasters() {
    this.isDataLoading = true;
    this.dataBankList = null;
    this.masterService.gethsnmasters(this.hsnCode).subscribe(data => {
      this.hsnList = data;
      this.isDataLoading = false;
    });
  }

  hasNextTab() {
    const isNext = Object.values(this.tabList).filter(tab => tab === true);
    return lodash.isEmpty(isNext) ? false : true;
  }
  phoneRegEx = '^[6-9]{1}[0-9]{9}$';
  gstin =  '^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}';
  save() {
    console.log(this.basicForm.value);
    const payload = this.basicForm.value;
    payload.accOpBal = payload.accOpBal ?  payload.accOpBal : 0;
    payload.accHsnCode  = payload.accHsnCode ? payload.accHsnCode :0;
    payload.accSacCode = payload.accSacCode ? payload.accSacCode : 0;
    payload.accDueDays = payload.accDueDays ? payload.accDueDays : 0;
    payload.accCredit = payload.accCredit ? payload.accCredit : 0;
    payload.accCreditLimit = payload.accCreditLimit ? payload.accCreditLimit : 0;
    payload.accCityId = payload.accCityId.cityId ? payload.accCityId.cityId: 0;
    payload.accDistrictId = payload.accDistrictId.districtId? payload.accDistrictId.districtId: 0;
    payload.cityPinId = payload.cityPinId ? payload.cityPinId : 0;
    payload.accStateId = payload.accStateId ? payload.accStateId : 0;
    payload.accTaxSlabId = payload.accTaxSlabId ? payload.accTaxSlabId : 0;
    payload.accSchId  = payload.accSchId.schId ? payload.accSchId.schId : 0;
    payload.firmType = payload.firmType ? payload.firmType : 0 ;
    payload.accFirmTypeId = payload.accFirmTypeId ? payload.accFirmTypeId : 0 ;
    // payload.accMobile = Number(payload.accMobile);
    // payload.accSchId = this.basicForm.value.accSchId;
    // payload.hsnMaster = this.prepareObj(lodash.get(this.basicForm.value, 'hsnMaster'), 'hsnId');
    // payload.accTaxSlabId = this.prepareObj(lodash.get(this.basicForm.value, 'accTaxSlabId'));
    // payload.pincode = this.prepareObj(lodash.get(this.basicForm.value, 'pincode'));
    // payload.accFirmTypeId = this.prepareObj(lodash.get(this.basicForm.value, 'accFirmTypeId'));
    // payload.accBankId1 = this.prepareObj(lodash.get(this.basicForm.value, 'accBankId1'));
    
    
    // payload.accountLtos = this.basicForm.get('accountLtos').value.map((lto, index) => {
    //   lto.ltoPrefix = this.dataFirmList[index];
    //   if (lto.ltoValidDate) {
    //     lto.ltoValidDate = this.formatDate(lto.ltoValidDate);
    //   }
    //   return lto;
    // }).filter(data => !lodash.isEmpty(data.ltoNo) && !lodash.isEmpty(data.ltoValidDate));

    const keys = Object.keys(payload);
    const reqBody = {};
    keys.forEach(key => {
      if (!lodash.isEmpty(payload[key]) || payload[key] !== '') {
        reqBody[key] = payload[key];
      }
    });

    console.log('payload----------', reqBody);
    this.masterService.postCustomAccouts(reqBody).subscribe(data => {
      console.log(data);
      if(data.resultType == 1){
        AppMessageUtils.successNotification("CustomAccouts has been " + (payload.accId? "Updated" : "Added") + " Successfully.");
        const add = this.formltoGroup.get('firmLtos') as FormArray;
        if(this.tabList.hasRegInfo && add.controls.length > 0){
          if(payload.accId){
            this.finalsave(payload.accId);
          }else{
            this.finalsave(data.resultObject);
          }
          
        }else{
          this.onClickBackBtn();
        }
      }else{
        AppMessageUtils.errorNotification("Unable to " + (payload.accId ? "Update" : "Add") + " the CustomAccouts.");
      }

      
      //   
    });
  }

  onClickBackBtn(){
    // this.formGroup.reset();
    this.router.navigate(['/pharma/masters/accounts/customAccountsList'])
  }
  reset(){
    this.basicForm.reset();
  }

  prepareObj(id, prop?) {
    if (!lodash.isEmpty(prop) && id) {
      const obj = {};
      obj[prop] = id;
      return obj;
    } else if (id) {
      return {id};
    }
    return '';
  }

  // getSchMode() {
  //   this.masterService.getscheduleMode('S').subscribe(
  //     data => {
  //       this.getScheduleData = data;
  //     });
  // }

  basicFormValue() {
    const obj = Object.assign({}, );
    obj.basicForm = this.basicForm.value;
    this.masterService.setaccountFormValue(obj);
  }

  moveToSelectedTab(tabName: string) {
    console.log("testform",this.basicForm);
    console.log(this.basicForm.get('accSchId').value.id);
    for (let i = 0; i < document.querySelectorAll('.mat-tab-label-content').length; i++) {
      if (( document.querySelectorAll('.mat-tab-label-content')[i] as HTMLElement).innerText === tabName) {
        ( document.querySelectorAll('.mat-tab-label')[i] as HTMLElement).click();
      }
    }
  }


  /////////////////   bank code ///////////////////


   //         bank   
   bankMultiFilterCtrl1 = new FormControl('');
   public filteredBanksMulti1: ReplaySubject<any> = new ReplaySubject<any>(1);
  
 
 
   //        ifsc
   bankIFSC1MultiFilterCtrl = new FormControl('');
   public filteredbankIFSC1Multi: ReplaySubject<any> = new ReplaySubject<any>(1);


   getbanks(){
    this.masterService.getbankDetails().subscribe(data => {
      if(data){
        this.banks = data;
         // load the initial bank list
        this.filteredBanksMulti1.next(this.banks.slice());
      }
    });
  }


  protected filterBanksMulti1() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl1.value;
    if (!search) {
      this.filteredBanksMulti1.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti1.next(
      this.banks.filter(bank => bank.bankName.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterbankIFSC1Multi() {
    if (!this.bank1IFSCdata) {
      return;
    }
    // get the search keyword
    let search = this.bankIFSC1MultiFilterCtrl.value;
    if (!search) {
      this.filteredbankIFSC1Multi.next(this.bank1IFSCdata.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the IFSC
    this.filteredbankIFSC1Multi.next(
      this.bank1IFSCdata.filter(bank => bank.ifscCode.toLowerCase().indexOf(search) > -1)
    );
  }
   

  changebank(id){
    if(id){
      this.masterService.getbankIFSC(id).subscribe(data => {
        if(data){
          this.bank1IFSCdata = data;
          this.filteredbankIFSC1Multi.next(this.bank1IFSCdata.slice());
        }
      });
    }
  }


  // LTO Tab code Start 




  resetLtoTypes(index){
    const add = this.formltoGroup.get('firmLtos') as FormArray;
    if(add.length > 0 && index){
      add.controls[index].reset();
      add.controls[index].get('accLtoId').setValue(0);
      add.controls[index].get('ltoValidDate').setValue(this.today);
    }
    console.log(add.controls[index]);
  }


  getLTOtype(){
    this.masterService.loadLTOtypes().subscribe(result => {
      if (result) {
        this.getLTOtypeData = result;
      }
    });
  }


  loadLTOS(id,i,form){
  const payload = {
    ltoTypeId:id,
    firmTypeId:this.basicForm.controls.accFirmTypeId.value
    }
    this.masterService.loadLTOS(payload).subscribe(result => {
      if (result) {
        this.getLTOSData[i] = result;
      }
    });

    // form.controls.ltos.setValue('');
    form.controls.ltoPrefixId.setValue('');
  }

  
  ltoprefix = new FormControl();
  loadLTOPrefix(id,i,form){
    form.controls.ltoPrefixId.setValue('');
    this.masterService.loadLTOPrefix(id).subscribe(result => {
      if (result) {
        this.getLTOPrefix[i] = result;
        const add = this.formltoGroup.get('firmLtos') as FormArray;
        if(add.length > 0){
          console.log(add.controls);
          add.controls.forEach((element:any,ind) => {
            this.getLTOPrefix[i].forEach((x:any,in1)=>{
              if(x){
                if(x.ltoPrefixId == element.get('ltoPrefixId').value){
                  this.getLTOPrefix[i].splice(in1,1);
                 }
              }
            });
          });
          if(this.getLTOPrefix[i].length == 0){
            AppMessageUtils.warningMessage('Already You Taken Lto Prefix.Try To Choose Different One Of The LTO Name Or LTO Type'); 
          }
        }
      }
    }, (error) => {
      this.getLTOPrefix[i] = [];
      AppMessageUtils.warningMessage('No Data Found'); 
    }
    );
  }

  changeLTOPrefix(id,i,form){
  this.getLTOPrefix[i].forEach(x=>{
    if(x.ltoPrefixId == id){
     form.controls.ltoPrefixOrder.setValue(x.ltoPrefixOrder);
    }
  })

  }

  deleteLtoTypes(i){
    const add = this.formltoGroup.get('firmLtos') as FormArray;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
    const dialogRef = this.dialog.open(MyCustomDialogComponent, dialogConfig);
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(result => {
        if (result === true) {
          this.getLTOSData.splice(i,1);
          this.getLTOPrefix.splice(i,1);
          this.basicForm.controls;
          add.removeAt(i);
          add.controls.find(x=>{
            if(x['controls'].ltoPrefixOrder.value !== 7){
              this.basicForm.controls.isRegistered.setValue(0);
            } else {
              this.basicForm.controls.isRegistered.setValue(1);
            };
          });
        }
      });

  }

 

  resetfirm(){
    const add = this.basicForm.get('firmLtos') as FormArray;
    add.controls = [];
    this.addLtoTypes();
  }


     ////////////-----------tax slab----------------------//

     @ViewChild('taxSlabTab', {static:false}) taxSlabTab: MatSelect;
     @ViewChild('hsnfocus', {static:false}) hsnfocus: ElementRef;
     TaxSlabTabMultiFilterCtrl = new FormControl('');
     public filteredTaxSlabMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
       TaxSlabTab(event: KeyboardEvent) {
         if (event.keyCode === 9) {
           const statetab = this.taxSlabTab.options;
           const result = statetab.find(x => x.active === true);
           this.basicForm.controls.accTaxSlabId.setValue(result.value);
         }
 
         else if (event.keyCode === 13) {
         
           // setTimeout(() => {
           //   this.hsnfocus.nativeElement.focus();
           // }, 1000);
          }
       }
   
       protected filterTaxSlabsMulti() {
         if (!this.TaxSlabdata) {
           return;
         }
         // get the search keyword
         let search = this.TaxSlabTabMultiFilterCtrl.value;
         if (!search) {
           this.filteredTaxSlabMulti.next(this.TaxSlabdata.slice());
           return;
         } else {
           search = search.toLowerCase();
         }
         // filter the banks
         this.filteredTaxSlabMulti.next(
           this.TaxSlabdata.filter(bank => bank.tax.toString().toLowerCase().indexOf(search) > -1)
         );
       }


       getTaSlab(){
        this.masterService.getTaxSlabs().subscribe(x=>{
          if(x){
            this.TaxSlabdata = x;
            this.filteredTaxSlabMulti.next(this.TaxSlabdata.slice());
          }
        })
      }
 
 
 
 
 
 
 
 
 
 
 
     /////////////-------------end slab--------------////////


 
     ngOnDestroy(){
      // this.service.sendTabData('');
    }



}
