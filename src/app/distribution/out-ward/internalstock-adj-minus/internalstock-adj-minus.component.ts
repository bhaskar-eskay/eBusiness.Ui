import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PurchasePrefix } from 'src/app/shared/app-constants';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { OutwardService } from '../outward.service';
import { Router } from '@angular/router';
import { InwardService } from '../../in-ward/in-ward.service';


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
  selector: 'app-internalstock-adj-minus',
  templateUrl: './internalstock-adj-minus.component.html',
  styleUrls: ['./internalstock-adj-minus.component.scss', '../out-ward.component.scss']
})
export class InternalstockAdjMinusComponent implements OnInit {
  
  internalStockAdjMinusHeadFormGroup: FormGroup;
  internalStockAdjMinusDetailFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private outwardService: OutwardService,private inwardService:InwardService, private router:Router) { }
  displayedColumns: string[] = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'companyName', 'tax', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.internalStockAdjMinusHeadFormGroup = this.buildInternalStockAdjMinusFormGroup();
    this.internalStockAdjMinusDetailFormGroup=this.buildInternalStockAdjMinusDetailFormGroup();
  }

  buildInternalStockAdjMinusFormGroup() {
    return this.formBuilder.group({
      invDate: [''],
      remarks: [''],
    })
  }

  buildInternalStockAdjMinusDetailFormGroup(): any {
    return this.formBuilder.group({
      prodName:[''],
      prodShName:[''],
      prodPackName:[''],
      batch:[''],
      issQty:[''],
      issQtyDisc:[''],
    })
    
  }


  customProductAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Product Name',
    isRequired: true,
    dataSourceFn: (name) => this.outwardService.getCustomProductByName(name, PurchasePrefix), 
    minCount: 2,
    keyString: 'prodName'
  }

    //Custom Products Autocomplete Options Table View
    customProductOptsTable: OptionsTableDefinition = {
      panelWidth: 300,
      columns: [
        { name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName'] : '', fxFlex: 50,fxFlex1:50 ,isKeyColumn: true },
        { name: 'Product Pack', value: (obj) => obj['prodPackName'] ? obj['prodPackName'] : '', fxFlex: 50 ,fxFlex1:50},
        { name: 'HSN Code', value: (obj) => obj['hsnCode'] ? obj['hsnCode'] : '', fxFlex: 50,fxFlex1:50 },
        { name: 'Tax%', value: (obj) => obj['taxSlabId'] ? obj['taxSlabId'] : '', fxFlex: 50 ,fxFlex1:50},
        { name: 'Sh.Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] : '', fxFlex: 50,fxFlex1:50 },
        { name: 'CompanyName', value: (obj) => obj['compId'] ? obj['compId'] : '', fxFlex: 50,fxFlex1:50 }
      ]
    };



    clikRegisters(){
      this.inwardService.sendRegData(null);
      this.router.navigate(['pharma/outward/saleRegister']);
    }
    

}
