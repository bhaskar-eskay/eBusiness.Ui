import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
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
  {shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
  {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
  {shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
  {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
  {shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
  {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
 ];
@Component({
  selector: 'app-internalstockadjustment-list',
  templateUrl: './internalstockadjustment-list.component.html',
  styleUrls: ['./internalstockadjustment-list.component.scss', '../in-ward.component.scss']
})
export class InternalstockadjustmentListComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['shName', 'ProductName',  'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
