import { Component, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../../master.service';
import { AccountMaster } from 'src/app/shared/models/master-models';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { MatAutocomplete, MatAutocompleteTrigger, MatDialog, MatDialogConfig, MatSelect } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { DialogButtonTemplate, DialogClass, DialogData } from 'src/app/shared/components/dialog/dialog.component';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
@Component({
  selector: 'app-map-city-accounts',
  templateUrl: './map-city-accounts.component.html',
  styleUrls: ['./map-city-accounts.component.scss']
})
export class MapCityAccountsComponent implements OnInit {
  getNoCityAcc: any;
  @ViewChild('cityUpdateTemplate', { static:  true }) cityUpdateTemplate;
  @ViewChild('purchaseDetailButtonTemplate', { static:  true }) purchaseDetailButtonTemplate;
  dataList: AccountMaster[];
  cityPinIdMultiFilterCtrl = new FormControl('');
  district = new FormControl('');
  pincode = new FormControl('');
  city = new FormControl('');
  showForm:boolean = false;
  tableDefinition: TableDefinition = {
    columns: [
      { id: 'accShName', name: 'Account Short Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '' },
      { id: 'accName', name: 'Account Name', value: (obj) => obj['accName'] ? obj['accName'] : '' },
      { id: 'accAddress1', name: 'Account Address 1', value: (obj) => obj['accAddress1'] ? obj['accAddress1'] : '' },
      { id: 'stateName', name: 'State', value: (obj) => obj['stateName'] ? obj['stateName'] : '' },
      { id: 'districtName', name: 'District', value: (obj) => obj['districtName'] ? obj['districtName'] : '' },
      { id: 'cityName', name: 'City', value: (obj) => obj['cityName'] ? obj['cityName'] : '' },
      { id: 'cityPincode', name: 'Pincode', value: (obj) => obj['cityPincode'] ? obj['cityPincode'] : '' },
        {id: 'action', name: 'Action', disableSort: true, actions:[
          {method: (user) => this.addOrEdit(user), name: 'Edit', icon:'assets/new_edit2.png', style:ActionStyle.EDIT},          
      ]},
    ]
  };

  districtAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Distict',
    isRequired: true,
    isStaticType: true,
    dataSourceFn: (name) => this.masterService.loadDistricts(this.accData.stateId, name),
    keyString: 'districtName',
    validators: [Validators.required],
    minCount: 2
  }

  cityAutoCompleteDef: AutoCompleteDefinition = {
    label: 'City',
    isRequired: true,
    dataSourceFn: (name) => this.masterService.loadCities(this.district.value.districtId, name),
    keyString: 'cityName',
    validators: [Validators.required],
    minCount: 1
  }

    cityOptsTable: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: "City", value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 35, fxFlex1: 35, isKeyColumn: true },
    ]
  };

  districtOptsTable: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: "District", value: (obj) => obj['districtName'] ? obj['districtName'] : '', fxFlex: 35, fxFlex1: 35, isKeyColumn: true },

    ]
  };

  getstates: any;
  cfG: FormGroup;
  protected _onDestroy = new Subject<void>();
  cityList: any[];
  citiesList: any;
  pincodesdata: any;
  accountMasterObj: any;
  DistrictList: { districtId: number; districtName: any; }[];
  public filteredcityPinMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
  @ViewChild('pincodeTab', { static: false }) pincodeTab: MatSelect;
  @ViewChild('pinfocus', {static:false}) pinfocus: MatSelect;
  distList: any;
  accData: any;

  constructor(private masterService: MasterService, private dialogService:DialogService) {
    // this.cfG = this.CityFormGroup();
  }

  // CityFormGroup() {
  //   return this.formBuilder.group({
  //     district: [''],
  //     city: [''],
  //     pincode: ['']
  //   });
  // }

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

  ngOnInit() {
    this.NoCityAcc();
    this.city.valueChanges.subscribe(data => {
          console.log("city",data);      
          if (data && typeof data === 'object') {
            this.getPincodes(data.cityId);
          console.log("city",data);
                    }                    
                  });
  }

  NoCityAcc() {
    this.masterService.noCityAccounts().subscribe(data => {
      if (data) {
        this.getNoCityAcc = data;
        this.dataList = data;
      }

    });
  }

  getCities(value) {
    // var cf = this.cfG.value
    if (value.length >= 3) {
      this.masterService.loadCities('',value)
        .pipe(takeUntil(this._onDestroy))
        .subscribe(
          ListList => {
            if (ListList.length === 0) {
              this.cityList = [];
              this.cfG.controls.city.setErrors(
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
        this.cfG.controls.city.setErrors(
        {
          incorrect: true
        },
        {
          emitEvent: true
        }
      );
    } else {
      this.cityList = [];
    }
  }

  getPincodes(id) {
    this.masterService.loadPinCodes(id).subscribe(data => {
      if (data) {
        this.pincodesdata = data;
        this.filteredcityPinMulti.next(this.pincodesdata.slice());
        if (this.accountMasterObj) {
          this.cfG.controls.city.setValue(this.accountMasterObj.cityPinId);
        }
      }

    });
  }


  PincodeTab(event: KeyboardEvent) {
    if (event.keyCode === 9) {
      const pincode = this.pincodeTab.options;
      const result = pincode.find(x => x.active === true);
      this.pincode.setValue(result.value);
    }
  }

  addOrEdit(account) {
    this.accData = account;
    // if(this.accData.districtName){
    //   this.district.setValue(this.accData.districtName);
    // }
    console.log(account);
    const object = {
      type: 'edit',
      data: account
    };
    // 
    this.showcityTemplate();
  }

  resetCity(){
    this.city.setValue('');
    this.district.setValue('');
    this.pincode.setValue('');
  }

  showcityTemplate():void{
    this.resetCity();
    this.showForm = true;
    let dialogInputs:  DialogData = {} as DialogData;
    dialogInputs.title = 'Add City';
    dialogInputs.dialogClass = DialogClass.LARGE;
    dialogInputs.closeBtnLabel = 'Close';
    this.dialogService.closeAllDialogues();
    dialogInputs.templateRef = ()=> this.cityUpdateTemplate;
    dialogInputs.buttonTemplates = [({ templateRef:  this.purchaseDetailButtonTemplate } as DialogButtonTemplate)]
    this.dialogService.showDialogue(dialogInputs, { disableClose:  true });
  }

  addCity(){
    const body = {
      "accId": this.accData.accId,
      "accShName": this.accData.accShName,
      "accName": this.accData.accName,
      "stateId": this.accData.stateId,
      "stateName": this.accData.stateName,
      "districtId": this.district.value.districtId,
      "districtName": this.district.value.districtName,
      "cityId": this.city.value.cityId,
      "cityName": this.city.value.cityName
    }

    this.masterService.cityUpdate(body).subscribe((data)=>{
      if(data){
        this.NoCityAcc();
        this.dialogService.closeAllDialogues();
      }
    })
  }

}
