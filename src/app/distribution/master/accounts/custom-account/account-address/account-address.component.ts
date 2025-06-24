import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  AutoCompleteDefinition,
  OptionsTableDefinition
} from 'src/app/shared/components/autocomplete/autocomplete.component';
import {
  MasterService
} from '../../../master.service';
import * as dropdowns from '../../../../../_files/dropdowns.json';
import {
  Areas
} from 'src/app/shared/models/master-models';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';

@Component({
  selector: 'app-account-address',
  templateUrl: './account-address.component.html',
  styleUrls: ['./account-address.component.scss', '../custom-account.component.scss']
})
export class AccountAddressComponent implements OnInit {
  @Output("change") tabChange = new EventEmitter < any > ();
  public dropdownData: {
    name: string,
    code: any
  } [] = dropdowns.productValue;
  yesnoData: {
    name: string;code: number;
  } [] = [];
  addressForm: FormGroup;
  isDataLoading: boolean;
  dataList: Areas[];
  pincodeList: any;
  accountMasterObj: any;

  areaAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Area',

    dataSourceFn: () => this.masterService.getareas(),
    keyString: 'areaName',
    minCount:2
  }

  constructor(private fb: FormBuilder, private masterService: MasterService, private service:OutWardHttpService
  ) {}

  ngOnInit() {
    this.yesnoData = this.dropdownData;

    this.addressForm = this.fb.group({
      accAddress1: new FormControl(''),
      accAddress2: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl(''),
      district: new FormControl(''),
      state: new FormControl(''),
      accPhone: new FormControl(''),
      accMobile: new FormControl(''),
      allowWhatsup: new FormControl(''),
      whatsAppMobile: new FormControl(''),
      allowsms: new FormControl(''),
      smsMobile: new FormControl(''),
      email: new FormControl(''),
      person: new FormControl(''),

      areaMaster: new FormGroup({ // ex
        id: new FormControl(1),
      }),


    })

    this.masterService.customAccData$.subscribe(
      data => {
        this.accountMasterObj = data;
      }
    )

    this.addressForm.get('city').valueChanges.subscribe(data => {
      this.addressForm.controls['district'].patchValue(data.district.name);
      this.addressForm.controls['state'].patchValue(data.district.state.name);
    })

    this.refresh();
    // this.servi\ce.getTabData$.subscribe(res =>{
    //   if(res != null && res){
    //     if(res[1] == 'City'){
    //       this.addressForm.controls['district'].patchValue(res[1].district.name);
    //       this.addressForm.controls['state'].patchValue(res[1].district.state.name);
    //     }
    //   }
    // });
  }

  refresh() {

    this.getAllPincodes();
  }

  cityAutoCompleteDef: AutoCompleteDefinition = {
    label: 'City',
    isRequired: true,
    dataSourceFn: (name) => this.masterService.loadCities(true, name),
    keyString: 'cityName',
    validators: [Validators.required],
    minCount:2
  };
  cityOptsTable: OptionsTableDefinition = {
    panelWidth: 700,
    columns: [{
        name: "City",
        value: (obj) => obj['name'] ? obj['name'] : '',
        fxFlex: 35,
        fxFlex1:30,
        isKeyColumn: true
      },
      {
        name: "District",
        value: (obj) => obj['district']['name'] ? obj['district']['name'] : '',
        fxFlex: 25,fxFlex1:25
      },
      {
        name: "State",
        value: (obj) => obj['district']['state']['name'] ? obj['district']['state']['name'] : '',
        fxFlex: 25,fxFlex1:25
      },
      {
        name: "Country",
        value: (obj) => obj['district']['state']['country']['name'] ? obj['district']['state']['country']['name'] : '',
        fxFlex: 15,fxFlex1:15
      },
    ]
  };

  private getAllPincodes() {
    this.isDataLoading = true;
    this.dataList = null;
    this.masterService.getpincodes(468).subscribe(data => {
      this.pincodeList = data;
      this.isDataLoading = false;
    });
  }



  addressFormValue() {
    this.tabChange.emit('Registration');
    let obj = Object.assign({}, this.addressForm.value);
    obj.smsMobile = +obj.smsMobile
    obj.district = +obj.district
    obj.state = +obj.state
    obj.accMobile = +obj.accMobile
    obj.whatsAppMobile = +obj.whatsAppMobile
    obj.allowsms = +obj.allowsms

    this.accountMasterObj.addressForm = obj
    this.masterService.setaccountFormValue(this.accountMasterObj);
  }



}
