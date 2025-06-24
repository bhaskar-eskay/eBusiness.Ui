import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';
import { Router } from '@angular/router';
import { DEFAULT_EMPTY_FIELD } from 'src/app/shared/app-constants';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import * as dropdowns from '../../../../_files/dropdowns.json';
import { MasterService } from '../../master.service';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-transaction-types',
  templateUrl: './transaction-types.component.html',
  styleUrls: ['./transaction-types.component.scss', '../../master.component.scss']
})
export class TransactionTypesComponent implements OnInit {
  public dropdownData: { name: string, code: any }[] = dropdowns.productValue;
  yesnoData: { name: string; code: number; }[] = [];
  editObj: any = {} as any;
  formGroup: FormGroup;
  showLookUpTable: boolean;
  formAlertId: string;
  tranTable: any;
  tranTableValue: any;
  buildMetaTableFormGroup: FormGroup;
  lookUpTable: any;
  buttonText = '';

  constructor(private masterService: MasterService, private formBuilder: FormBuilder, private router: Router, 
    private service:OutWardHttpService
  ) { }

  ngOnInit() {
    this.formGroup = this.buildFormGroup();
    this.buildMetaTableFormGroup = this.buildMetaTable();
    this.yesnoData = this.dropdownData;

    this.formGroup.get('menuName').valueChanges
      .subscribe(arg => { if (arg !== null) { this.setStdPrefix(arg); this.getTableMetaData(arg.tranTable); } });

    this.formGroup.get('dtlFlag').valueChanges
      .subscribe(arg => { this.WantTranTypeDynamically(arg) });

    this.buildMetaTableFormGroup.get('tableMeta').valueChanges.subscribe(
      () => this.checkBoxChange()
    );


    // this.subscription.add(this.service.getTabData$.subscribe(res =>{
    //   if(res != null && res){
    //     if(res[1] == 'Transaction Type'){
    //       this.setStdPrefix(res[0]); this.getTableMetaData(res[0].tranTable); 
    //     }
    //   }
    // }));

  }

  setStdPrefix(prefix) {
    if (prefix) {
      this.formGroup.controls['stdPrefix'].patchValue(prefix.stdPrefix);
    } else {
      this.formGroup.controls['stdPrefix'].patchValue('');
    }
  }

  WantTranTypeDynamically(dtlFlag) {
    if (dtlFlag === 1) {
      this.showLookUpTable = true;
      this.buttonText = 'Save';
    } else {
      this.showLookUpTable = false;
      this.buttonText = 'Update';
    }
  }

  checkBoxChange() {
    const arrayData = this.buildMetaTableFormGroup.controls.tableMeta.value as Array<any>;
    arrayData.filter(x => x.fieldCheckBox).reduce((acc, value) => acc + +value.prefixsize, 0) > 9 ? AppMessageUtils.warningMessage('Exceeding max prefix size (9)') : null;
    arrayData.filter(x => x.fieldCheckBox).length > 3 ? AppMessageUtils.warningMessage('Exceeding max field name (3)') : null;
  }

  subscription:Subscription=new Subscription();

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getTableMetaData(tableName: string) {
    this.masterService.getLookUpTable(tableName).subscribe(
      result => {
        this.tranTable = result;
        if (this.tranTable && this.tranTable.length > 0) {
          let control = <FormArray>this.buildMetaTableFormGroup.controls.tableMeta;
          this.tranTable.forEach((x) => {
            control.push(this.formBuilder.group({
              fieldCheckBox: false,
              tableFldName: x.fieldName,
              lookupFieldName: x.lookupFieldName && x.lookupFieldName.length > 0 ? x.lookupFieldName  : DEFAULT_EMPTY_FIELD,
              prefixsize: { value: '', disabled: true },
              tableFldType: x.tableFldType,
            }));
          });
        } else {
          let frmArray = this.buildMetaTableFormGroup.get('tableMeta') as FormArray;
          frmArray.clear();
        }

      }
    )
  }

  private buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [this.editObj.id],
      menuName: [this.editObj.menuName],
      stdPrefix: [{ value: this.editObj.stdPrefix, disabled: true }],
      dtlFlag: [this.editObj.wantTranNum],
      userDefinedPrefix: [this.editObj.custdPrefix],
    });
  }

  buildMetaTable(): FormGroup {
    return this.formBuilder.group({
      tableMeta: new FormArray(this.tranTable && this.tranTable.length > 0 ? [this.metaTableControls()] : [])
    });
  }

  metaTableControls() {
    return new FormGroup({
      fieldCheckBox: new FormControl('', [Validators.required]),
      tableFldName: new FormControl('', [Validators.required]),
      lookupFieldName: new FormControl('', [Validators.required]),
      prefixsize: new FormControl('', [Validators.required]),
    })
  }


  // Tran Type Head
  TransactionTypeAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Transaction Type',
    isRequired: true,
    dataSourceFn: () => this.masterService.getTransactionTypeHead(),
    keyString: 'menuName',
    validators: [Validators.required],
    minCount:2
  };

  transactionTypeOptsTable: OptionsTableDefinition = {
    panelWidth: 500,
    columns: [
      { name: 'menuName', value: (obj) => obj['menuName'] ? obj['menuName'] : '', fxFlex: 100,fxFlex1:90, isKeyColumn: true }
    ]
  };

  refresh() {
    this.clearAddOrEdit();
  }

  clearAddOrEdit() {
    this.editObj = {} as any;
    AppMessageUtils.clearMessage(this.formAlertId);
  }


  onSave_UpdateTranType() {
    if (this.buttonText === 'Update') {
      AppMessageUtils.clearMessage(this.formAlertId);
      if (!this.formGroup.valid) {
        return;
      }
      const menuCntrlValue = Object.assign({}, this.formGroup.controls['menuName'].value);
      console.log('menuCntrolValue', menuCntrlValue);
      menuCntrlValue.dtlFlag = this.formGroup.controls['dtlFlag'].value;
      menuCntrlValue.userDefinedPrefix = this.formGroup.controls['userDefinedPrefix'].value;

      this.masterService.postTransactionTypeHead(menuCntrlValue).subscribe(data =>
        ResponseUtils.isStatus200(data) ? this.resetHandler() :
          ResponseUtils.isStatus409(data) ?
            AppMessageUtils.warningMessage('TransactionTypeHead already exists', this.formAlertId) : ''
      );
    } else if (this.buttonText === 'Save') {
      AppMessageUtils.clearMessage(this.formAlertId);
      if (!this.buildMetaTableFormGroup.valid) {
        return;
      }
      const tableMetaArray = this.tableMetaDataArray.value.filter(r => r.fieldCheckBox);
      tableMetaArray.forEach((element: any, index: number) => {
        element.tableName = this.formGroup.controls.menuName.value.tranTable;
        element.deletedBy = 0;
        element.tranTypeHead = Object.assign({}, { id: this.formGroup.controls.menuName.value.id });
        element.prefixOrder = index + 1;
        element.prefixsize = +element.prefixsize;
      });
      this.masterService.postTransactionTypeDetail(tableMetaArray).subscribe(data =>
        ResponseUtils.isStatus200(data) ? this.resetHandler('Save') :
          ResponseUtils.isStatus409(data) ?
            AppMessageUtils.warningMessage('TransactionTypeDetails already exists', this.formAlertId) : ''
      );
    }
  }

  resetHandler(name?: string) {
    if (name === 'Save') {
      let frmArray = this.buildMetaTableFormGroup.get('tableMeta') as FormArray;
      frmArray.clear();
      this.tableMetaDataArray.controls.forEach(stock => stock.patchValue({ name: '' }));
      for (let i = this.tableMetaDataArray.length - 1; i >= 0; i--) {
        this.tableMetaDataArray.removeAt(i)
        this.tableMetaDataArray.setValue([]);
      }
      this.showLookUpTable = true;
      this.formGroup.reset();
    }
    this.formGroup.reset();
  }

  clickCancelHandler() {
    this.formGroup.reset();
  }

  changeValue(event: MatCheckboxChange, index: number) {
    if (event.checked) {
      this.tableMetaDataArray.controls[index]['controls']['prefixsize'].enable();
    } else {
      this.tableMetaDataArray.controls[index]['controls']['prefixsize'].disable();
    }
  }

  isNumberKey(event) {
    let inp = String.fromCharCode(event.keyCode);
    if (/^[0-9]+\.?[0-9]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }



  get tableMetaDataArray() {
    return this.buildMetaTableFormGroup.get('tableMeta') as FormArray;
  }
}
