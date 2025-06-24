import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { CustomProducts } from 'src/app/shared/models/master-models';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { MasterService } from '../../master.service';


@Component({
  selector: 'app-custom-products-list',
  templateUrl: './custom-products-list.component.html',
  styleUrls: ['./custom-products-list.component.scss']
})
export class CustomProductsListComponent implements OnInit {
  @ViewChild('deleteCustomProductTemplate',{static:false}) deleteCustomProductTemplate;
  isDataLoading: boolean;
  dataList: any;
  editObj: CustomProducts;
  
  constructor(private masterService: MasterService, private router: Router) { }

  tableDefinition:TableDefinition={
    columns:[
      {id:"prodShName",  name:"Sh.Name", value:(obj)=>obj['prodShName']?obj['prodShName']:''},
      {id:"prodName",  name:"Product Name", value:(obj)=>obj['prodName']?obj['prodName']:''},
      {id:"prodPack",  name:"Product Pack", value:(obj)=>obj['prodPackName']? obj['prodPackName']:''},
      {id:"prodType",  name:"Product Type", value:(obj)=>obj['prodTypeName'] ?obj['prodTypeName']:''},
      {id:"company",  name:"Company Name", value:(obj)=>obj['compName']?obj['compName']:''},
      {id:"taxSlabId",  name:"Tax", value:(obj)=>obj['tax']?obj['tax']:''},
      {id:"hsnId",  name:"HSNCode", value:(obj)=>obj['hsncode']?obj['hsncode']:''},
      {id:"action", name:"Action", disableSort:true, actions:[
        {method:(obj)=>this.addOrEdit(obj),name:'Edit',icon:'assets/new_edit2.png',style:ActionStyle.EDIT},
        {method:(obj)=>this.delete(obj),name:'Delete',icon:'assets/new_delete2.png',style:ActionStyle.DELETE,
        dialogProperties:{title:'Delete Custom Product',templateRef:()=>this.deleteTemplate()}}
    ]},
  ]};

  ngOnInit() {
    this.getAllCustomProducts();
  }

   getAllCustomProducts() {
    this.isDataLoading=true;
    this.dataList=null;
    const payload = {
      prodId: 0,
      prodName: "",
      prodShName: "",
      prodBoxPack: 0,
      prodCasePack: 0,
      pRate: 0,
      sRate: 0,
      mrp: 0,
      rRate: 0,
      stkRate: 0,
      hsncode: 0,
      prodPackName: "",
      taxCategoryName: "",
      prodMasterTypeName: "",
      tax: 0,
      compName: ""
    }
    this.masterService.getAllCustomProducts(payload).subscribe(data=>{
      this.dataList=data as CustomProducts[];
      this.isDataLoading=false;
    });
  }

  addOrEdit(customProduct?:CustomProducts) {
     this.editObj=customProduct?customProduct:{} as CustomProducts;
     this.masterService.setCustomProduct(customProduct);
     this.router.navigate(['pharma/masters/products/customProducts']);
    //  this.formGroup.reset({...this.editObj});
    //  this.addOrEditFlag=true;
  }

  addItem(){
    this.masterService.setCustomProduct(null);
     this.router.navigate(['pharma/masters/products/customProducts']);
  }

  delete(customProduct?:CustomProducts) {
    this.masterService.deleteCustomProduct(customProduct).subscribe(data=>
     ResponseUtils.isStatus200(data) ? this.refresh() :
     ResponseUtils.isStatus404(data) ? 
     AppMessageUtils.warningMessage("Custom Product already deleted") : '');
   }

  
   deleteTemplate() {
    return this.deleteCustomProductTemplate;
   }

   refresh() {
    this.getAllCustomProducts();
  }

}
