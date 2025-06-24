import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';
import {
  MasterService
} from '../../../master.service';
@Component({
  selector: 'app-account-reg',
  templateUrl: './account-reg.component.html',
  styleUrls: ['./account-reg.component.scss', '../custom-account.component.scss']
})
export class AccountRegComponent implements OnInit {
  regForm: FormGroup;
  dataList: any;
  @Output("change") tabChange = new EventEmitter < any > ();
  accountMasterObj: any;
  constructor(private fb: FormBuilder, private masterService: MasterService) {
    
  }

  ngOnInit() {
    this.regForm = this.fb.group({
      form: this.fb.array([])
    })

    this.masterService.customAccData$.subscribe(
      data => {
        this.accountMasterObj = data;
      }
    )
    this.refresh();
  }

  refresh() {
    this.getAllCompGroup();
  }

  private getAllCompGroup() {
    this.masterService.getLtoAccounts(1).subscribe((data: []) => {
      this.dataList = data;
      this.bindLtoTypes(this.dataList);
    });
  }

  bindLtoTypes(data: []) {
    const add = this.regForm.get('form') as FormArray;
    data.forEach((element: any) => {
      add.push(this.fb.group({
        ltoType: [{value: element.ltoType,
          disabled: true
        }],
        ltoName: [{value: element.ltoName, disabled: true}],
        ltoPrefix: [{value: element.ltoPrefix, disabled: true}],
        ltoNo: [element.ltoNo],
        ltoValidDate: [element.ltoValidDate],
        ltoPrefixOrder: [''],
      }));

    });
  }

  regFormValue() {
    this.tabChange.emit('Other');
    this.accountMasterObj.accountLtos = this.regForm.get('form').value as FormArray;
    this.masterService.setaccountFormValue(this.accountMasterObj);
  }

}
