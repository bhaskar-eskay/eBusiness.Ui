import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-head',
  templateUrl: './products-head.component.html',
  styleUrls: ['./products-head.component.scss']
})
export class ProductsHeadComponent implements OnInit {

  

  navLinks= [
    {link:'customProductsList', label:'Products'},
    {link:'manufacturer', label:'Manufacturer'},
    {link:'productCategories', label:'Categories'},
    {link:'productGroups', label:'Groups'},
    {link:'productType',label:'Types'},
    {link:'productUOM',label:'UOM'},
    {link:'productCombinations', label:'Combinations'} ,
    {link:'productLocations', label:'Locations'} , 
    {link:'productPack', label:'Packs'} ,
    {link:'customCompanies', label:'Companies'} ,
    // {link:'customCompanyDivisions', label:'Company Divisions'} ,  
    {link: 'compGroup', label:'Company Group'}
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
