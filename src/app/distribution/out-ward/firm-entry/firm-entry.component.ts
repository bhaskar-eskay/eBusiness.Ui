import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { MasterService } from '../../Master/master.service';
import { OutwardService } from '../outward.service';
import * as dropdowns from '../../../_files/dropdowns.json';
import { SalePrefix } from 'src/app/shared/app-constants';

export interface PeriodicElement {
  shName: string;
  ProductName: string;
  ProductPack: string;
  ProductType: string;
  companyName: string;
  tax: string;
  hsncode: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
  { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
  { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
];

@Component({
  selector: 'app-firm-entry',
  templateUrl: './firm-entry.component.html',
  styleUrls: ['./firm-entry.component.scss']
})
export class FirmEntryComponent implements OnInit {
  saleInvoiceHeadFormGroup: FormGroup;
  displayedColumns: string[] = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'companyName', 'expDate', 'mrp', 'saleRate', 'rate', 'disc', 'grsValue', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  outwardHeadBtnText: string = 'Save';
  formAlertId: string;
  public modeDropDown: { name: string, code: any }[] = dropdowns.mode;
  @ViewChild('saleEntryDetailTemplate', { static: true }) saleEntryDetailTemplate;
  @ViewChild('saleEntryDetailButtonTemplate', { static: true }) saleEntryDetailButtonTemplate;
  saleInvoiceDetailFormGroup: any;

  constructor(
    private formBuilder: FormBuilder,
    private _location: Location,
    private outwardService: OutwardService,
    private router: Router, private masterService: MasterService,
    private dialogService: DialogService
  ) {
    this.saleInvoiceHeadFormGroup = this.buildOutWardEntryHeadFormGroup();
    this.saleInvoiceDetailFormGroup = this.buildOutWardEntryDetailFormGroup();
  }

  buildOutWardEntryHeadFormGroup() {
    return this.formBuilder.group({
      invDate: [''],
      accId: [''],
      accGstIn: [{ value: '', disabled: true }],
      accShName: [{ value: '', disabled: true }],
      cityId: [{ value: '', disabled: true }],
      accMobile: [{ value: '', disabled: true }],
      compId: [''],
      deliveryTo: [''],
      mode: [''],

    });
  }

  private buildOutWardEntryDetailFormGroup(): FormGroup {
    return this.formBuilder.group({
      prodId: [''],
      prodShName: [''],
      prodPackName: [''],
      batch: [''],
      expdate: [''],
      invQty: [''],
      invQtyDisc: [''],
      purRate: [''],
      saleRate: [''],
      retailRate: [''],
      mrp: [''],
      purDiscType: [''],
      purDisc: ['']
    });
  }



  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  onResetForm() {
    this.saleInvoiceHeadFormGroup.reset();
  }

  


  //Custom Accounts in Outward Head
  customAccountAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Customer Name',
    isRequired: true,
    dataSourceFn: (name) => this.outwardService.getCustomAccountsByName(name),
    minCount: 2,
    keyString: 'accName'
  }

  customAccountsOptsTable: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: 'Customer Name', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 40,fxFlex1:35, isKeyColumn: true },
      { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 40, fxFlex1:35 },
      { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 40,fxFlex1:35 },
      //   { name: 'GSTIN', value: (obj) => obj['accGSTIn'] ? obj['accGSTIn'] : '', fxFlex: 50 },
      { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 40,fxFlex1:35 }
    ]
  };

  // Company  
  companyGroupAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Company',
    isRequired: true,
    isStaticType: true,
    dataSourceFn: () => this.masterService.getAllCompanyMaster(),
    keyString: 'name',
    validators: [Validators.required],
    minCount:2
  };


  companyGroupOptsTable: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: 'Company', value: (obj) => obj['name'] ? obj['name'] : '', fxFlex: 40, fxFlex1:35, isKeyColumn: true },
      { name: 'Company Group', value: (obj) => obj['companyGroups']['name'] ? obj['companyGroups']['name'] : '', fxFlex: 40,fxFlex1:35 },
    ]
  };

  //mode AutocompleteDef
  modeAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Mode',
    isRequired: true,
    dataSourceFn: () => of([...dropdowns.mode]),
    isStaticType: true,
    keyString: 'name'
  }


  onSaveOrUpdateOutwardHead(): void {
    if (this.outwardHeadBtnText === 'Save') {
      const postOutwardObj = this.saleInvoiceHeadFormGroup.getRawValue();
      postOutwardObj.accId = this.saleInvoiceHeadFormGroup.controls.accId.value.id;
      postOutwardObj.tranTypeName = SalePrefix;
      postOutwardObj.isDeleted = 0;
      postOutwardObj.isEligible = 1;
      postOutwardObj.invDate = this.formatDate(postOutwardObj.invDate);
      postOutwardObj.compId = this.saleInvoiceHeadFormGroup.controls.compId.value.id;
      postOutwardObj.invValue = 0;
      postOutwardObj.invNo = 0;
      postOutwardObj.id = 0;
      postOutwardObj.taxUploadStatus = 0;
    postOutwardObj.name = "Firm";

      postOutwardObj.mode = this.saleInvoiceHeadFormGroup.controls.mode.value.name;
      delete postOutwardObj.accGstIn;
      delete postOutwardObj.accShName;
      delete postOutwardObj.accMobile;
      delete postOutwardObj.cityId;
      this.outwardService.postOrUpdateOutwardHead(postOutwardObj).subscribe(data =>
        ResponseUtils.isStatus200(data) ? this.router.navigate(['/salesInvoices']) :
          ResponseUtils.isStatus409(data) ?
            AppMessageUtils.warningMessage('Outward Entry Head already exists', this.formAlertId) : ''
      );
    } else {

    }

  }

  formatDate(date: string) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }
}
