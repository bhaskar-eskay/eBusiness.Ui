import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';
import {
  Banks
} from 'src/app/shared/models/master-models';
import {
  MasterService
} from '../../../master.service';
import * as dropdowns from '../../../../../_files/dropdowns.json';

@Component({
  selector: 'app-account-others',
  templateUrl: './account-others.component.html',
  styleUrls: ['./account-others.component.scss', '../custom-account.component.scss']
})
export class AccountOthersComponent implements OnInit {

  public dropdownData: {
    name: string,
    code: any
  } [] = dropdowns.creditValue;
  public yesnoDataValue: {
    name: string,
    code: any
  } [] = dropdowns.productValue;
  creditData: {
    name: string;code: number;
  } [] = [];
  yesnoData: {
    name: string;code: number;
  } [] = [];

  otherForm: FormGroup;
  accountMasterObj: any;
  dataList: Banks[];
  isDataLoading: boolean;
  hsnList: any;


  constructor(private fb: FormBuilder, private masterService: MasterService) {}

  ngOnInit() {
    this.creditData = this.dropdownData;
    this.yesnoData = this.yesnoDataValue;

    this.otherForm = this.fb.group({
      accBankId1: new FormGroup({
        id: new FormControl(1),
      }),
      accBankIFSC1: new FormControl(''),
      accBankAccNo1: new FormControl(''),
      traMode: new FormControl(''),
      hsncode: new FormControl(''),
      accSacCode: new FormControl(''),
      taxRate: new FormControl(''),
      shadow: new FormControl(''),
      accDueDays: new FormControl(''),
      accCreditLimit: new FormControl(''),
      remarks: new FormControl(''),
      firmType: new FormGroup({
        id: new FormControl(1)
      }),

      hsnMaster: new FormGroup({ // ex
        hsnId: new FormControl(1),
      }),
      taxSlabs: new FormGroup({
        id: new FormControl(1), // ex
      }),

    })

    this.masterService.customAccData$.subscribe(
      data => {
        this.accountMasterObj = data;
      }
    )
    this.otherForm.get('accBankId1').valueChanges.subscribe(data => {
      this.otherForm.controls['accBankIFSC1'].patchValue(data.code);
    })

    this.refresh();
  }


  refresh() {
    this.getAllBanks();
    this.getHsnMasters();
  }

  private getAllBanks() {
    this.isDataLoading = true;
    this.dataList = null;
    this.masterService.getbanks().subscribe(data => {
      this.dataList = data as Banks[];
      this.isDataLoading = false;
    });
  }

  private getHsnMasters() {
    this.isDataLoading = true;
    this.dataList = null;
    this.masterService.gethsnmasters('').subscribe(data => {
      this.hsnList = data;
      this.isDataLoading = false;
    });
  }

  regFormValue() {
    let obj = Object.assign({}, this.otherForm.value);
    obj.accSacCode = +obj.accSacCode
    obj.accDueDays = +obj.accDueDays
    this.accountMasterObj.otherForm = obj
    this.masterService.setaccountFormValue(this.accountMasterObj);
  }

}
