import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteTrigger, MatDialog, MatDialogConfig, MatHorizontalStepper, MatSelect } from '@angular/material';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { MasterService } from '../../Master/master.service';
import * as lodash from 'lodash';
import * as dropdowns from '../../../_files/dropdowns.json';
import { ReplaySubject, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';


@Component({
  selector: 'app-firm-registration',
  templateUrl: './firm-registration.component.html',
  styleUrls: ['./firm-registration.component.scss']
})

export class FirmRegistrationComponent implements OnInit {
  // check= 'red';
  ltoType = new FormControl('');
  ltos = new FormControl('');
  @ViewChild(MatHorizontalStepper, {static:false}) stepper: MatHorizontalStepper;
  @ViewChild('multiSelect', {static:false}) multiSelect: MatSelect;
  @ViewChild('stateTab', {static:false}) stateTab: MatSelect;
  @ViewChild('pincodeTab', {static:false}) pincodeTab: MatSelect;
  @ViewChild('bank1Tab', {static:false}) bank1Tab: MatSelect;
  @ViewChild('bank2Tab', {static:false}) bank2Tab: MatSelect;
  @ViewChild('bank3Tab', {static:false}) bank3Tab: MatSelect;
  @ViewChild('bank4Tab', {static:false}) bank4Tab: MatSelect;
  @ViewChild('bankifsc1Tab', {static:false}) bankifsc1Tab: MatSelect;
  @ViewChild('bankifsc2Tab', {static:false}) bankifsc2Tab: MatSelect;
  @ViewChild('bankifsc3Tab', {static:false}) bankifsc3Tab: MatSelect;
  @ViewChild('bankifsc4Tab', {static:false}) bankifsc4Tab: MatSelect;

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
  getLTOtypeData: any[]=[];
  getLTOSData: any[]=[];
  getLTOPrefix: any[]=[];
  today: string;
  firmGroup: any;
  firmdata: any;
  showfirm: boolean = false;
  distList: ReplaySubject<any> = new ReplaySubject<any>(1);;
  getDistricts(value) {
    if (value.length >= 3) {
      this.showdistrict = true;
      this.masterService.loadDistricts(this.formGroup.controls.stateId.value,value)
        .pipe(takeUntil(this._onDestroy))
        .subscribe(
          ListList => {
            if (ListList.length === 0) {
              this.showdistrict = false;
              this.DistrictList = [];
              this.formGroup.get('distId').setErrors(
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
          }, (error) => {
            this.DistrictList = [];
            // AppMessageUtils.warningMessage('No Data Found') 
          }
        );
        this.formGroup.get('distId').setErrors(
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
      this.formGroup.controls.distId.setValue(districtTab);
      this.clickdist();
    }else if(event.keyCode === 13){
      const districtTab = this.districtautoCompleteInput.activeOption.value;
      this.formGroup.controls.distId.setValue(districtTab);
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
      this.masterService.loadCities(this.formGroup.controls.distId.value,value)
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
      this.formGroup.controls.cityId.setValue(cityTab);
      this.formGroup.controls.cityPinId.setValue('');
      // this.getPincodes(cityTab);
    }
    else if(event.keyCode === 13){
      this.formGroup.controls.cityPinId.setValue('');
      setTimeout(() => {
        this.pinfocus.open();

      }, 100);
      
      // this.getPincodes(cityTab);
    }
  }

  clickcity(val){
    this.formGroup.controls.cityPinId.setValue('');
   this.pinfocus.open();
   this.getPincodes(val);
  }

  clickdist(){
    setTimeout(() => {
      this.citiesfocus.nativeElement.focus();
    }, 100);
    this.formGroup.controls.cityId.setValue('');
    this.formGroup.controls.cityPinId.setValue('');
    
  }





  

  

  //city auto complete




  //en auto complete



  
  


  

  
  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  formGroup: FormGroup;

  step1Completed = false;
  isLinear = true;
  dataFirmList: any;
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  phoneRegEx = '^[6-9]{1}[0-9]{9}$';
  passwordRegEx = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}';
  hide = true;
  hide1 = true;
  
  public dropdownData: {
    name: string,
    code: any
  } [] = dropdowns.creditValue;
  
  creditData: {
    name: string; code: number;
  } [] = [];
  

  public modeData: {
    name: string,
    code: any
  } [] = dropdowns.firmMode;

  FirmModeData: {
    name: string; code: number;
  } [] = [];

  //    stste

  stateMultiFilterCtrl = new FormControl('');

  //pin 
  cityPinIdMultiFilterCtrl = new FormControl('');
  public filteredcityPinMulti: ReplaySubject<any> = new ReplaySubject<any>(1);


 //         bank   
  bankMultiFilterCtrl1 = new FormControl('');
  bankMultiFilterCtrl2 = new FormControl('');
  bankMultiFilterCtrl3 = new FormControl('');
  bankMultiFilterCtrl4 = new FormControl('');
  public filteredStatesMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
  public filteredBanksMulti1: ReplaySubject<any> = new ReplaySubject<any>(1);
  public filteredBanksMulti2: ReplaySubject<any> = new ReplaySubject<any>(1);
  public filteredBanksMulti3: ReplaySubject<any> = new ReplaySubject<any>(1);
  public filteredBanksMulti4: ReplaySubject<any> = new ReplaySubject<any>(1);


  //        ifsc
  bankIFSC1MultiFilterCtrl = new FormControl('');
  bankIFSC2MultiFilterCtrl = new FormControl('');
  bankIFSC3MultiFilterCtrl = new FormControl('');
  bankIFSC4MultiFilterCtrl = new FormControl('');
  public filteredbankIFSC1Multi: ReplaySubject<any> = new ReplaySubject<any>(1);
  public filteredbankIFSC2Multi: ReplaySubject<any> = new ReplaySubject<any>(1);
  public filteredbankIFSC3Multi: ReplaySubject<any> = new ReplaySubject<any>(1);
  public filteredbankIFSC4Multi: ReplaySubject<any> = new ReplaySubject<any>(1);



  
  
 

// states
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

// District
districtAutoCompleteDef: AutoCompleteDefinition = {
  label: 'District',
  isRequired: true,
  dataSourceFn:(name)=>this.masterService.loadDistricts(this.formGroup.controls.stateId.value,name),
  keyString: 'districtName',
  validators: [Validators.required],
  minCount:2
};

distOptsTable: OptionsTableDefinition = {
  panelWidth: 500,
  columns: [     
    {
      name: 'District',
      value: (obj) => lodash.get(obj, 'districtName') ? lodash.get(obj, 'districtName') : '',
      fxFlex: 50,fxFlex1:50
    }
  ]
};

// citys
  cityAutoCompleteDef: AutoCompleteDefinition = {
    label: 'City',
    isRequired: true,
    dataSourceFn:(obj)=>this.masterService.loadCities(this.formGroup.controls.distId.value.districtId,obj),
    keyString: 'cityName',
    validators: [Validators.required],
    minCount:2
  };

  cityOptsTable: OptionsTableDefinition = {
    panelWidth: 750,
    columns: [{
        name: 'City',
        value: (obj) => lodash.get(obj, 'cityName') ? lodash.get(obj, 'cityName') : '',
        fxFlex: 35,fxFlex1:35,
        isKeyColumn: true
      }
      // ,
      // {
      //   name: 'District',
      //   value: (obj) => lodash.get(obj, 'district.name') ? lodash.get(obj, 'district.name') : '',
      //   fxFlex: 25
      // },
      // {
      //   name: 'State',
      //   value: (obj) => lodash.get(obj, 'district.state.name') ? lodash.get(obj, 'district.state.name') : '',
      //   fxFlex: 25
      // },
      // {
      //   name: 'Country',
      //   value: (obj) => lodash.get(obj, 'district.state.country.name') ? lodash.get(obj, 'district.state.country.name') : '',
      //   fxFlex: 10
      // },
    ]
  };


  firmTypes: any;
  getstates: any;
  getdistricts: any;
  banks: any;
  bank1IFSCdata: any;
  bank2IFSCdata: any;
  bank3IFSCdata: any;
  bank4IFSCdata: any;
  pincodesdata: any;
  stateId: any;
  constructor(private datePipe: DatePipe,private formBuilder:FormBuilder,private actvited:ActivatedRoute, private masterService: MasterService , public dialog: MatDialog, private router:Router,
    private service:OutWardHttpService
  ) { }

  ngOnInit() {
    this.today = new Date().toISOString().split('T')[0];
    this.formGroup=this.buildFormGroup();
    this.creditData = this.dropdownData;
    this.FirmModeData = this.modeData;
    this.getformgroups();
    this.masterService.getFirmTypes(1).subscribe(data => {
      this.firmTypes = data;
    });
    this.getstate();
    this.getbanks();
   
    
   // listen for search filed value changes state
   this.stateMultiFilterCtrl.valueChanges
   .pipe(takeUntil(this._onDestroy))
   .subscribe(() => {
     this.filterStateMulti();
   });

   // listen for search filed value changes pin
   this.cityPinIdMultiFilterCtrl.valueChanges
   .pipe(takeUntil(this._onDestroy))
   .subscribe(() => {
     this.filterPincodeMulti();
   });



   this.formGroup.get('cityId').valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() =>{
    if(this.formGroup.controls.cityId.value.cityId){
    this.clickcity(this.formGroup.controls.cityId.value.cityId);
    }
   });


   this.formGroup.get('distId').valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() =>{
    this.clickdist();
   });
   
   


    // listen for search field value changes  Bank
    this.bankMultiFilterCtrl1.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti1();
      });

      this.bankMultiFilterCtrl2.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti2();
      });

      this.bankMultiFilterCtrl3.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti3();
      });

      this.bankMultiFilterCtrl4.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanksMulti4();
      });




       // listen for search field value changes  Ifsc
    this.bankIFSC1MultiFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterbankIFSC1Multi();
    });

    this.bankIFSC2MultiFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterbankIFSC2Multi();
    });

    this.bankIFSC3MultiFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterbankIFSC3Multi();
    });

    this.bankIFSC4MultiFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterbankIFSC4Multi();
    });

  this.setgroup();
  // this.subscription.add(this.service.getTabData$.subscribe(res =>{
  //   console.log(res);
  //   if(res[1] == 'District'){
  //     this.formGroup.controls.distId.setValue(res[0].districtName);
  //   }else if(res[1] == 'City'){
  //     this.formGroup.controls.cityId.setValue(res[0].cityName);
  //     this.getPincodes(res[0].cityId)
  //   }
  //  }));

   }

  setgroup(){
    this.actvited.queryParams.subscribe(x=>{
      if(x.firmgroupid){
        this.formGroup.controls.firmGroupId.setValue(+x.firmgroupid);
        this.formGroup.controls.firmGroupId.disable();
      }
    })
  }




  private buildFormGroup() {
    return this.formBuilder.group({
      firmId:[0],
      firmMainId:[''],
      firmTypeId:[''],
      firmUID:[''],
      firmName:['',Validators.required],
      firmAlias:[''],
      firmGroupId:['',Validators.required],
      address1:[''],
      address2:[''],
      address3:[''],
      phone:['',Validators.pattern(this.phoneRegEx)],
      mobile1:['',Validators.pattern(this.phoneRegEx)],
      mobile2:['',Validators.pattern(this.phoneRegEx)],
      email:['', Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)],
      firmMode:[''],
      // firmLtos: this.formBuilder.array([]),
      bankId1:[0],
      bankId2:[0],
      bankId3:[0],
      bankId4:[0],
      bankIFSC1:[''],
      bankIFSC2:[''],
      bankIFSC3:[''],
      bankIFSC4:[''],
      bankAcNo1:[''],
      bankAcNo2:[''],
      bankAcNo3:[''],
      bankAcNo4:[''],
      cityId: [''],
      cityPinId: '',
      distId: [0],
      stateId:[''],
      finStartDate:[''],
      finEndDate:['']
      // firmUserName:[''],
      // firmUserPassword:[''],
      // persion:['']

     
    });   

  }

  firmUserPassword = new FormControl('');
  firmUserName = new FormControl(''); 
  getformgroups(){
    this.masterService.getFirmGroup().subscribe(data =>{
      if(data){
       this.firmGroup = data;
      }
    })
  }


  firmModechange(data){
   if(data.value == 2 || data.value == 3){
     this.showfirm = true;
     this.getFirm();
   }else{
    this.showfirm = false;
    this.formGroup.get('firmMainId').setErrors(null);
   }
  }


  getFirm(){
    this.masterService.getFirm().subscribe(data =>{
      if(data){
       this.firmdata = data;
      }
    });
    this.formGroup.controls.firmMainId.setValue('');
  }


  

 

  changebank(id,state){
    if(id){
      this.masterService.getbankIFSC(id.value).subscribe(data => {
        if(data){
         if(state == 1){
          this.bank1IFSCdata = data;
          this.filteredbankIFSC1Multi.next(this.bank1IFSCdata.slice());
         }else if(state == 2){
          this.bank2IFSCdata = data;
          this.filteredbankIFSC2Multi.next(this.bank2IFSCdata.slice());
         }else if(state == 3){
          this.bank3IFSCdata = data;
          this.filteredbankIFSC3Multi.next(this.bank3IFSCdata.slice());
         }else if(state == 4){
          this.bank4IFSCdata = data;
          this.filteredbankIFSC4Multi.next(this.bank4IFSCdata.slice());
         }
        }
      });
    }
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
    console.log(id);
    this.masterService.loadPinCodes(id).subscribe(data => {
      if(data){
        this.pincodesdata = data;
        this.filteredcityPinMulti.next(this.pincodesdata.slice());
      }
     
    });
  }


  getbanks(){
    this.masterService.getbankDetails().subscribe(data => {
      if(data){
        this.banks = data;
         // load the initial bank list
        this.filteredBanksMulti1.next(this.banks.slice());
        this.filteredBanksMulti2.next(this.banks.slice());
        this.filteredBanksMulti3.next(this.banks.slice());
        this.filteredBanksMulti4.next(this.banks.slice());
      }
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


  protected filterBanksMulti2() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl2.value;
    if (!search) {
      this.filteredBanksMulti2.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti2.next(
      this.banks.filter(bank => bank.bankName.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterBanksMulti3() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl3.value;
    if (!search) {
      this.filteredBanksMulti3.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti3.next(
      this.banks.filter(bank => bank.bankName.toLowerCase().indexOf(search) > -1)
    );
  }

  protected filterBanksMulti4() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl4.value;
    if (!search) {
      this.filteredBanksMulti4.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti4.next(
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

  protected filterbankIFSC2Multi() {
    if (!this.bank2IFSCdata) {
      return;
    }
    // get the search keyword
    let search = this.bankIFSC2MultiFilterCtrl.value;
    if (!search) {
      this.filteredbankIFSC2Multi.next(this.bank2IFSCdata.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the ifscCode
    this.filteredbankIFSC2Multi.next(
      this.bank2IFSCdata.filter(bank => bank.ifscCode.toLowerCase().indexOf(search) > -1)
    );
  }



  protected filterbankIFSC3Multi() {
    if (!this.bank3IFSCdata) {
      return;
    }
    // get the search keyword
    let search = this.bankIFSC3MultiFilterCtrl.value;
    if (!search) {
      this.filteredbankIFSC3Multi.next(this.bank3IFSCdata.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the ifscCode
    this.filteredbankIFSC3Multi.next(
      this.bank3IFSCdata.filter(bank => bank.ifscCode.toLowerCase().indexOf(search) > -1)
    );
  }


  protected filterbankIFSC4Multi() {
    if (!this.bank4IFSCdata) {
      return;
    }
    // get the search keyword
    let search = this.bankIFSC4MultiFilterCtrl.value;
    if (!search) {
      this.filteredbankIFSC4Multi.next(this.bank4IFSCdata.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the ifscCode
    this.filteredbankIFSC4Multi.next(
      this.bank4IFSCdata.filter(bank => bank.ifscCode.toLowerCase().indexOf(search) > -1)
    );
  }
  

  getFirmDetails(firmId) {
    if (firmId) {
      this.masterService.getFirmDetails(firmId).subscribe(data => {
        this.dataFirmList = data;
        this.bindLtoTypes(data);
      });
    }
  }

  bindLtoTypes(data: []) {
    const add = this.formGroup.get('firmLtos') as FormArray;
    data.forEach((element: any) => {
      add.push(this.formBuilder.group({
        ltoType: [{value: element.lto.type.name, disabled:true}],
        ltoName: [{value: element.lto.name, disabled:true}],
        ltoPrefix: [{ value: element.name, disabled:true}],  //
        ltoNo: [''],
        ltoValidDate: ['']
      }));


    });
  }


 

  save(){
 
    
    this.masterService.doAddFirmReg(this.formGroup.value).subscribe(data => {
      console.log(data);
    });
  }


  complete() {
    this.stepper.selected.completed = true;
    this.stepper.selected.editable = false;
    this.stepper.next();
  }

  savefirm(data,status) {
    data.finStartDate = this.datePipe.transform(data.finStartDate, 'yyyy-MM-dd');
    data.finEndDate =  this.datePipe.transform(data.finEndDate, 'yyyy-MM-dd');
    if(data.firmMainId == ''){
      data.firmMainId = 0
    }
    data.firmGroupId = this.formGroup.controls.firmGroupId.value;
    console.log(data);
    data.distId = data.distId.districtId;
    data.cityId = data.cityId.cityId;
    this.masterService.doAddFirmReg(data).subscribe(x => {
      if(x.resultType == 1){
        if(status == 'next'){
          this.router.navigate(['./pharma/admin/adminregistration'], { queryParams: { firmid: x.resultObject} });
        }else{
          AppMessageUtils.successMessage(x.resultDescription);
          this.resetform();
          this.setgroup();
        }
       
      }else{
        AppMessageUtils.warningMessage(x.resultDescription); 
      }
    });
    
  }



  



  // Tabs Code

  StateTab(event: KeyboardEvent) {
    if (event.keyCode === 9) {
      const statetab = this.stateTab.options;
      const result = statetab.find(x => x.active === true);
      this.formGroup.controls.stateId.setValue(result.value);
      this.stateId = this.formGroup.controls['stateId'].value;
      this.statechange();
    }
    else if (event.keyCode === 13) {
      this.statechange();
    
     }
  }


  PincodeTab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const pincode = this.pincodeTab.options;
      const result = pincode.find(x => x.active === true);
      this.formGroup.controls.cityPinId.setValue(result.value);
    }
  }


  Bank1Tab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const bank1Tab = this.bank1Tab.options;
      const result = bank1Tab.find(x => x.active === true);
      this.formGroup.controls.bankId1.setValue(result.value);
      this.changebank(result,1);
    }
  }


  Bank2Tab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const bank2Tab = this.bank2Tab.options;
      const result = bank2Tab.find(x => x.active === true);
      this.formGroup.controls.bankId2.setValue(result.value);
      this.changebank(result,2);
    }
  }


  Bank3Tab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const bank3Tab = this.bank3Tab.options;
      const result = bank3Tab.find(x => x.active === true);
      this.formGroup.controls.bankId3.setValue(result.value);
      this.changebank(result,3);
    }
  }


  Bank4Tab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const bank4Tab = this.bank4Tab.options;
      const result = bank4Tab.find(x => x.active === true);
      this.formGroup.controls.bankId4.setValue(result.value);
      this.changebank(result,4);
    }
  }


  Bankifsc1Tab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const bankifsc1Tab = this.bankifsc1Tab.options;
      const result = bankifsc1Tab.find(x => x.active === true);
      this.formGroup.controls.bankIFSC1.setValue(result.value);
    }
  }


  Bankifsc2Tab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const bankifsc2Tab = this.bankifsc2Tab.options;
      const result = bankifsc2Tab.find(x => x.active === true);
      this.formGroup.controls.bankIFSC2.setValue(result.value);
    }
  }

  Bankifsc3Tab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const bankifsc3Tab = this.bankifsc3Tab.options;
      const result = bankifsc3Tab.find(x => x.active === true);
      this.formGroup.controls.bankIFSC3.setValue(result.value);
    }
  }

  Bankifsc4Tab(event: KeyboardEvent){
    if (event.keyCode === 9) {
      const bankifsc4Tab = this.bankifsc4Tab.options;
      const result = bankifsc4Tab.find(x => x.active === true);
      this.formGroup.controls.bankIFSC4.setValue(result.value);
    }
  }


  statechange(){
    this.formGroup.controls.distId.setValue('');
    this.formGroup.controls.cityId.setValue('');
    this.formGroup.controls.cityPinId.setValue('');
    setTimeout(() => {
      // this.districtfocus.nativeElement.focus();
    }, 100);
  }


  resetform(){
    this.formGroup.reset();
  }




  FirmAliasExisting(){
    if(this.formGroup.controls.firmAlias.value){
    this.masterService.isFirmAliasExisting(this.formGroup.controls.firmAlias.value).subscribe(data => {
     if(data){
      this.formGroup.controls.firmAlias.setErrors({ incorrect: true }, { emitEvent: true })
     }else{
      this.formGroup.controls.firmAlias.setErrors(null)
     }
    });
  }



    // if(this.firmgroupForm.controls.firmGroupAlias.value){
    //   const check = this.dataSource.data.filter((x:any) => x.firmGroupAlias.toLowerCase() == this.firmgroupForm.controls.firmGroupAlias.value.toLowerCase() )
    //   console.log(check);
    //   if(check.length > 0){
    //     this.firmgroupForm.controls.firmGroupAlias.setErrors({ incorrect: true }, { emitEvent: true })
    //    }else{
    //     this.firmgroupForm.controls.firmGroupAlias.setErrors(null)
    //    }
    // }
   
  }

  subscription:Subscription=new Subscription();

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }





}
