import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { InwardService } from '../../in-ward/in-ward.service';
import { Router } from '@angular/router';


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
  selector: 'app-general-credit-note-customer',
  templateUrl: './general-credit-note-customer.component.html',
  styleUrls: ['./general-credit-note-customer.component.scss', '../out-ward.component.scss']
})
export class GeneralCreditNoteCustomerComponent implements OnInit {
  generalCreditNoteHeadFormGroup: FormGroup;
  generalCreditNoteDetailFormGroup: FormGroup;
  

  constructor(private formBuilder: FormBuilder,private inwardService:InwardService, private router:Router) { }
  displayedColumns: string[] = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.generalCreditNoteHeadFormGroup = this.buildGeneralCreditNoteHeadFormGroup();
    this.generalCreditNoteDetailFormGroup = this.buildGeneralCreditNoteDetailFormGroup();
  }

  buildGeneralCreditNoteHeadFormGroup() {
    return this.formBuilder.group({
      invDate: [''],
      accName: [''],
      accShName: [''],
      cityName: [''],
      accMobile: [''],
      accGSTIN: [''],

    })
  }

  buildGeneralCreditNoteDetailFormGroup() {
    return this.formBuilder.group({
      description: [''],
      amount: [''],
      hsnCode: [''],
      tax: [''],
    });
  }
  customAccountAutoCompleteDef:  AutoCompleteDefinition = {
    label:  'Customer Name',
    isRequired:  true,
    dataSourceFn:  (name) => this.inwardService.getCustomAccountsByName(name),
    minCount:  2,
    keyString:  'accName'
  };
  customAccountsOptsTable:  OptionsTableDefinition = {
    panelWidth:  700,
    columns:  [
      { name:  'Supplier Name', value:  (obj) => obj['accName'] ? obj['accName'] :  '', fxFlex:  35,fxFlex1:35, isKeyColumn:  true },
      { name:  'City Name', value:  (obj) => obj['cityName'] ? obj['cityName'] :  '', fxFlex:  30,fxFlex1:30 },
      { name:  'Mobile', value:  (obj) => obj['accMobile'] ? obj['accMobile'] :  '', fxFlex:  25,fxFlex1:25 },
      //   { name:  'GSTIN', value:  (obj) => obj['accGSTIn'] ? obj['accGSTIn'] :  '', fxFlex:  50 },
      { name:  'Sh.Name', value:  (obj) => obj['accShName'] ? obj['accShName'] :  '', fxFlex:  10 ,fxFlex1:10}
    ]
  };
  
  clikRegisters(){
    this.inwardService.sendRegData(null);
    this.router.navigate(['pharma/outward/saleRegister']);
  }

}
