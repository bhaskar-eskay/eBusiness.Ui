import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatSelect } from '@angular/material';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { InwardService } from '../../in-ward/in-ward.service';
import { CompanyMaster } from 'src/app/shared/models/master-models';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { MasterService } from '../../Master/master.service';
import * as lodash from 'lodash';
import { DatePipe } from '@angular/common';
import { DialogButtonTemplate, DialogClass, DialogData } from 'src/app/shared/components/dialog/dialog.component';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import { SalePrefix } from 'src/app/shared/app-constants';
import { of, Subscription } from 'rxjs';
import * as dropdowns from '../../../_files/dropdowns.json';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { OutwardService } from '../outward.service';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { InwardHead, Pretax, Tax } from 'src/app/shared/models/inward-models';
import { RouteService } from 'src/app/shared/services/route.service';
import { tap } from 'rxjs/internal/operators/tap';
import { HttpService } from 'src/app/shared/services/http.service';

export interface PeriodicElement {
  shName: string;
  ProductName: string;
  ProductPack: string;
  ProductType: string;
  companyName: string;
  tax: string;
  hsncode: string;

}

let dataList = [
  // { shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
  // { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
  // { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
];

@Component({
  selector: 'app-sale-return',
  templateUrl: './sale-return.component.html',
  styleUrls: ['./sale-return.component.scss', '../out-ward.component.scss']
})
export class SaleReturnComponent implements OnInit {
  subscription: Subscription;
  salesReturnFormGroup: FormGroup;
  salesReturnDetails:  FormGroup;
  showTable:boolean=false;
   head:InwardHead;
   preTaxesData: any;
   outwardHeadid:any;
   outwardDetailid:any;
   showAutoCompleteData:boolean=false;
  detailbutton = 'Save & Continue';
  detailsave = 'Save & Close';
  purchaseHeadBtnText = 'Save';
  // modeData = [
  //   { code: '1', name: 'Credit' },
  //   { code: '2', name: 'Cash' },
  // ];
  firmPreferences: any;

  cityNameAutoCompleteDef = {};
  companyNameAutoCompleteDef = {};

  customerNameOptsTable = [];
  cityNameOptsTable = [];
  companyNameOptsTable = [];
  dataList:any;
  hardCodeData = {
    productData : {
      purDisc: 0,
      purDisc1: 0,
      drFlag: 0,
      crFlag: 0,
      purdiscType1: 0,
      purDiscType: 0
    },
    head: {
      TranTypeHeadId:3,
      tranTypeName: 'SRET',
      taxCategoryId: 3,
      isEligible: 1
    }
  };
  invValue: any;
  roundedValue: number;
  constructor(private fb: FormBuilder, private inwardService: InwardService, private masterService: MasterService, private datePipe: DatePipe,private dialogService:  DialogService,private router:Router,private outwardService:OutwardService,private routeService:RouteService,private todayDate:HttpService) { }
  displayedColumns: string[] = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'companyName', 'expDate', 'mrp', 'saleRate', 'rate', 'disc', 'grsValue', 'actions'];
  dataSource = new MatTableDataSource(dataList);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('CompanyTab', { static: false }) CompanyTab: MatSelect;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('productName', { static: true }) productName;
  @ViewChild('purchaseDetailTemplate', { static:  true }) purchaseDetailTemplate;
  @ViewChild('saleReturnDetailButtonTemplate', { static:  true }) saleReturnDetailButtonTemplate;
  @ViewChild('productHistory',{static:true}) productHistory;
  // @ViewChild('purhistory', { static:  true }) purhistory;
  @ViewChild('deletePurchaseHeadTemplate', { static:  false }) deletePurchaseHeadTemplate;
  @ViewChild('deletePurchase', { static:  false }) deletePurchase;
  CompanyTabMultiFilterCtrl = new FormControl('');
  compGroupName = new FormControl('');
  accName = new FormControl('');
  Companydata: CompanyMaster[];
  supplierData: any;
  manifactureData: any;
  historydataSource;
  rqry:any;
  rqtyDisc:any;
  pexpDate:any;
  today: any;
  taxslabId:any;
  tax:any;
  actions:any;
  minDate: any;
  maxDate: any;
  finalSavebutton: string = 'Save';
  accShName = new FormControl({ value: '', disabled: true })
  protected _onDestroy = new Subject<void>();
  public filteredCompanyMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
  inwardDetailId: any;
  displayPreTax:boolean;
   customProductAutoCompleteDef:  AutoCompleteDefinition = {
      label:  'Product Name',
      isRequired:  true,
      dataSourceFn:  (name) => this.showAutoComplete(name),
        // this.inwardService.getCustomProductByName(name,this.salesReturnFormGroup.controls.compId.value, SalePrefix)
      minCount:  2,
      keyString:  'prodName'
    };
    inwardTranStatus:  AutoCompleteDefinition = {
      label:  'Tran.Qty.Status',
      isRequired:  true,
      dataSourceFn:  () => of([...dropdowns.inwardTranStatus]),
      isStaticType:  true,
      keyString:  'name'
    };
    productStatus:  AutoCompleteDefinition = {
      label:  'Status',
      isRequired:  true,
      dataSourceFn:  () => of([...dropdowns.productStatus]),
      isStaticType:  true,
      keyString:  'name'
    };

     discountType:  AutoCompleteDefinition = {
      label:  'Discount Type',
      isRequired:  true,
      dataSourceFn:  () => of([...dropdowns.discountType]),
      isStaticType:  true,
      keyString:  'name'
    };
    manifactureDetails:  AutoCompleteDefinition = {
      label:  'Manufacture Name',
      isRequired:  false,
      dataSourceFn:  () => of(this.manifactureData),
      isStaticType:  true,
      keyString:  'mfgName'
    };
    discountType1:  AutoCompleteDefinition = {
      label:  'Discount Type 1',
      isRequired:  true,
      dataSourceFn:  () => of([...dropdowns.discountType]),
      isStaticType:  true,
      keyString:  'name'
    };

    customProductOptsTable:  OptionsTableDefinition = {
      panelWidth:  1900,
      columns:  [
        { name:  'Product Name', value:  (obj) => obj['prodName'] ? obj['prodName'] :  '', fxFlex:  34,fxFlex1:34, isKeyColumn:  true },
        { name:  'Product Pack', value:  (obj) => obj['prodPackName'] ? obj['prodPackName'] :  '', fxFlex:  12 , fxFlex1:12},
        { name:  'HSN Code', value:  (obj) => obj['hsncode'] ? obj['hsncode'] :  '', fxFlex:  12, fxFlex1:12 },
        { name:  'Tax%', value:  (obj) => obj['tax'] ? obj['tax']:  '', fxFlex:  10, fxFlex1:10 },
        { name:  'Sh.Name', value:  (obj) => obj['prodShName'] ? obj['prodShName'] :  '', fxFlex:  10,fxFlex1:10 },
        { name:  'CompanyName', value:  (obj) => obj['compName']? obj['compName'] :  '', fxFlex:  22, fxFlex1:22 }    ]
    };
    historytableDefinition:  TableDefinition = {
      columns:  [
        {id:  'prodShName',  name:  'Sh.Name', value:  (obj) => obj['prodShName']?obj['prodShName'] ? obj['prodShName'] :  '':''},
        {id:  'prodName',  name:  'Product Name', value:  (obj) => obj['prodName']?obj['prodName'] ? obj['prodName'] :  '':''},
        {id:  'batch',  name:  'Batch No', value:  (obj) => obj['batch'] ? obj['batch'] :  ''},
        {id:  'expdate',  name:  'Exp.Date', value:  (obj) => obj['expdate'] ? obj['expdate'] :  ''},
        {id:  'invQty',  name:  'InvQty', value:  (obj) => obj['invQty'] ? obj['invQty'] :  ''},
        {id:  'invQtyDisc',  name:  'Qty.Disc', value:  (obj) => obj['invQtyDisc'] ? obj['invQtyDisc'] :  ''},
        {id:  'purRate',  name:  'Inv.Rate', value:  (obj) => obj['purRate'] ? obj['purRate'] :  ''},
        {id:  'discValue',  name:  'Disc', value:  (obj) => obj['discValue'] ? obj['discValue'] :  ''},
        {id:  'mrp',  name:  'MRP', value:  (obj) => obj['mrp'] ? obj['mrp'] :  ''},
        // {id:  'purRate',  name:  'Tran.Qty.Status', value:  (obj) => obj['purRate'] ? obj['purRate'] :  ''},
        {id:  'hsncode',  name:  'HSN  code', value:  (obj) => obj['hsncode'] ? obj['hsncode'] :  ''},
        {id:  'action', name:  'Action', disableSort:  true, actions:  [
          {
            method:  (data) => this.selectProduct(data),
            name:  'View',
            icon:  'visibility',
            style:  ActionStyle.EDIT
          }
      ]},
    ],
    disablePagination:  true,
    disableFilter:  true
  };

      tableDefinition:  TableDefinition = {
        columns:  [
          {id:  'prodShName',  name:  'Sh.Name', value:  (obj) => obj['prodShName']?obj['prodShName'] ? obj['prodShName'] :  '':''},
          {id:  'prodName',  name:  'Product Name', value:  (obj) => obj['prodName']?obj['prodName'] ? obj['prodName'] :  '':''},
          {id:  'batch',  name:  'Batch No', value:  (obj) => obj['batch'] ? obj['batch'] :  ''},
          {id:  'expdate',  name:  'Exp.Date', value:  (obj) => obj['expiryDate'] ? obj['expiryDate'] :  ''},
          {id:  'invQty',  name:  'InvQty', value: (obj) => {
            let invqty = obj['invQty'] ? obj['invQty'] : '';
            return invqty ? parseFloat(invqty).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }},
          {id:  'invQtyDisc',  name:  'Qty.Disc', value:  (obj) => obj['invQtyDisc'] ? obj['invQtyDisc'] :  ''},
          {id:  'purRate',  name:  'Inv.Rate', value: (obj) => {
            let purrate = obj['purRate'] ? obj['purRate'] : '';
            return purrate ? parseFloat(purrate).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }},
          // {id:  'mrp',  name:  'MRP', value:  (obj) => obj['mrp'] ? obj['mrp'] :  ''},
          {
            id: 'mrp',
            name: 'MRP',
            value: (obj) => {
              let mrp = obj['mrp'] ? obj['mrp'] : '';
              return mrp ? parseFloat(mrp).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
            }
          },
          {id:  'discValue',  name:  'Disc', 
            value: (obj) => {
              let discvalue = obj['salDisc'] ? obj['salDisc'] : '';
              return discvalue ? parseFloat(discvalue).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
            }},
          {id:  'tax',  name:  'Tax(%)', value: (obj) => {
            let taxpercentage = obj['tax'] ? obj['tax'] : '';
            return taxpercentage ? parseFloat(taxpercentage).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }},
          {id:  'grsValue',  name:  'Gross Value',  value: (obj) => {
            let grsvalue = obj['grsValue'] ? obj['grsValue'] : '';
            return grsvalue ? parseFloat(grsvalue).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }},


          // {id:  'purRate',  name:  'Tran.Qty.Status', value:  (obj) => obj['purRate'] ? obj['purRate'] :  ''},
          {id:  'hsncode',  name:  'HSN  code', value:  (obj) => obj['hsncode'] ? obj['hsncode'] :  ''},
          {id:  'action', name:  'Action', disableSort:  true, actions:  [
            {
              method:  (data) => this.addOrEdit(data),
              name:  'Edit',
              icon:  'assets/new_edit2.png',
              style:  ActionStyle.EDIT
            },
            {
              isDisabled:  (data) => this.isDeleteDisabled(data) ||  data['issQty'] != 0,
              method:  (obj) => this.delete(obj),
              name:  'Delete',
              icon:  'assets/new_delete2.png',
              style:  ActionStyle.DELETE,
              dialogProperties:  {title:  'Delete Company Group', templateRef:  () => this.deleteTemplate() }
            },
            {
              name: 'Share',
              icon: 'share',
              style: ActionStyle.SHARE
            }
        ]},
      ]};
       //Batch Autocomplete Options Table View
  batchOptsTable: OptionsTableDefinition = {
    panelWidth: 700,
    columns: [
      { name: 'Batch', value: (obj) => obj['batch'] ? obj['batch'] : '', fxFlex: 9,fxFlex1:9, isKeyColumn: true },
      { name: 'Exp.Date', value: (obj) => obj['expdate'] ? this.datePipe.transform(obj['expdate'], 'MM-yy') : '', fxFlex: 9,fxFlex1:9 },
      { name: 'InvQty', value: (obj) => obj['closingQty'] ? obj['closingQty'] : '', fxFlex: 9,fxFlex1:9 },
      { name: 'Qty.Disc.', value: (obj) => obj['closingQtyDisc'] ? obj['closingQtyDisc'] : '', fxFlex: 9 , fxFlex1:9},
      { name: "Inv.Rate", value: (obj) => obj['purRate'] ? obj['purRate'] : '', fxFlex: 9,fxFlex1:9 },
      { name: "Disc(%)", value: (obj) => obj['discValue'] ? obj['discValue'] : '', fxFlex: 9,fxFlex1:9 },
      { name: "MRP", value: (obj) => obj['mrp'] ? obj['mrp'] : '', fxFlex: 9,fxFlex1:9 },
      { name: "Tax%", value: (obj) => obj['tax'] ? obj['tax'] : '', fxFlex: 9 ,fxFlex1:9},
      { name: "HSN  code", value: (obj) => obj['hsncode'] ? obj['hsncode'] : '', fxFlex: 9,fxFlex1:9 },
      
    ]
  };
  

      customAccountDedAdjAutoCompleteDef:  AutoCompleteDefinition = {
        label:  'Ded. Adj. Led.',
        dataSourceFn:  (name) => this.inwardService.getCustomAccountsByName(name),
        // dataSourceFn:  (name) => this.inwardService.getCustomAccountsByName(name,'PUR'),
        minCount:  2,
        keyString:  'accName'
      };
      customAccountAddAdjAutoCompleteDef:  AutoCompleteDefinition = {
        label:  'Cr. Adj. Led.',
        // dataSourceFn:  (name) => this.inwardService.getCustomAccountsByName(name,'PUR'),
        dataSourceFn:  (name) => this.inwardService.getCustomAccountsByName(name),
        minCount:  2,
        keyString:  'accName'
      };
      selectedProdid:any=0

      public discountDropDown: { name: string, code: any }[] = dropdowns.discount;      

  ngOnInit() {
    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
    if(this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== ''){
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.today;//this.firmPreferences.finEdate;
    }
    // this.today = new Date().toISOString().split('T')[0];
    this.today = this.todayDate.localDate();
    this.today = this.datePipe.transform(this.today,'yyyy-MM-dd');
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllCompMaster();
    document.getElementById('deletePopup').style.display = 'none';
    this.salesReturnDetails = this.buildDetailFormGroup();
    this.salesReturnFormGroup = this.fb.group({
      sretDate: [this.today, Validators.required],
      accName: [null, Validators.required],
      accShName: [{ value: '', disabled: true }],
      gstin: [{ value: '', disabled: true }],
      compId: [0],
      mode: [null, Validators.required],
    });
    this.getPurchaseList();

    this.CompanyTabMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterCompanyMulti();
      });

    this.salesReturnFormGroup.controls.accName.valueChanges.subscribe(res => {
      if (typeof res === 'object') {
        this.supplierData = res;
        this.bindSuplierDetails(res);
      }
    });
    this.subscription = this.salesReturnDetails.get('prodId').valueChanges.subscribe((value) => {
      if(value && this.salesReturnDetails.get('prodId').dirty){
        this.showAutoCompleteData = true;
      }
      if (value && typeof value === 'object') {
        this.selectedProdid =  value.prodId;
        // value.prodId 2087
        this.salesReturnDetails.get('batch').setValue('');
        this.bindProductDetails(value);
      }
      // if (value) {
      //   this.getHistoryDetails(this.salesReturnFormGroup.controls.accName.value.accId,value,this.today); // Call your method when value changes
      // }
    });
    
    this.salesReturnDetails.get('batch').valueChanges.subscribe(result => {
      console.log("prod batch Data", result);
      // if(result){
      //   // this.showAutoCompleteData = true;
      // }
      if (result && typeof result === 'object') {
        this.selectProduct(result)
      }
    });
    // this.salesReturnDetails.get('batch').valueChanges.subscribe(result => {
    //   console.log("prod batch Data", result);
    //   if(result && this.salesReturnDetails.get('batch').dirty){
    //     // this.showAutoCompleteData = true;
    //   }
    //   if (result && typeof result === 'object') {
    //     this.selectProduct(result)
    //   }
    // });

    this.subscription.add(this.outwardService.getheadData$.subscribe(x=>{
      if(x.salesHead !== null && x.salesHead !== undefined && x.action){
        console.log(x.salesHead);
        // this.editObj1 = x;
        // this.additemflag = true ;
        this.purchaseHeadBtnText = 'UpDate';
        this.finalSavebutton = 'UpDate';
        this.actions = x.action;
        this.headpatch(x.salesHead);
        this.invoiceHeadId = x.salesHead.inwardHeadId;
        // this.getTaxtesData(x.inwardHeadId);
        this.getSalesDetailTableList(this.invoiceHeadId);
         setTimeout(() => {
          if(this.actions == "delete"){
            this.confirmDelete(); 
          }
       }, 1000);
        
      }else{
        // this.additemflag = false;
        this.purchaseHeadBtnText = 'Save';
        this.finalSavebutton = 'Save';
      }
    }));

  }

  public modeData: {
    name: string,
    code: any
  } [] = dropdowns.mode;
  invoiceHeadId:any
  public statusDropdown: { name: string, code: any }[] = dropdowns.productStatus;
  onDropdownOpen() {
    // Automatically select the first option when the dropdown opens.
    // this.matSelect.open();
    if (!this.salesReturnFormGroup.get('mode').value && this.modeData.length > 0) {
      this.salesReturnFormGroup.get('mode').setValue(this.modeData[0].code);
    }
  }

  ngOnDestroy() {
    this.headFormGroupSubscription.unsubscribe();
    this.subscription.unsubscribe();
    // this.inwardService.sendheadData(null, null);
  }

  onSaveSalesReturn(): void {
    try{
    if (this.salesReturnFormGroup.valid) {
      console.log('Form Data:', this.salesReturnFormGroup.value);
      const payload = this.salesReturnFormGroup.getRawValue();
      payload.TranTypeHeadId = 3;
      payload.tranTypeName = "SRET";
      payload.taxcategoryId = payload.accName.taxcategoryId;
      // payload.transportId =this.transportName.value.accId;
      payload.cityId = payload.accName.cityPinId ? payload.accName.cityPinId : 0;
      payload.accId = payload.accName.accId;
      payload.accShName = payload.accName.accShName;
      payload.mode = payload.mode.code ? payload.mode.code == 'Cash' ? 1 : 2 : 2;
      // payload.inwardLrdate  = this.datePipe.transform(payload.inwardLrdate, 'yyyy-MM-dd');
      payload.inwardDate = this.datePipe.transform(payload.sretDate, 'yyyy-MM-dd');
      payload.sretDate = this.datePipe.transform(payload.sretDate, 'yyyy-MM-dd');
      payload.inwardHeadId = 0;
      payload.gstin = payload.accName.accGstIn;
      // payload.activeAt  = this.datePipe.transform(payload.activeAt, 'yyyy-MM-dd');
      // payload.invDate = this.datePipe.transform(payload.invDate, 'yyyy-MM-dd');
      console.log(payload);
      this.inwardService.postPurchaseHead(payload, false).subscribe(data => {
        console.log(data);
        if(data){
          AppMessageUtils.successMessage('Sale Return Entry Saved Successfully');
          this.showSaleDetailTemplate("Add");
          this.purchaseHeadBtnText = 'UpDate';
          this.invoiceHeadId = data;

        }
        // this.showTable = true;
        // if(payload.inwardHeadId == 0){
        //   this.purchaseHeadFormGroup.controls.inwardHeadId.setValue(data);
        //   this.showPurchaseDetailTemplate('Add');
        //   this.additemflag = true;
        // }
        this.getSalesDetailTableList(this.invoiceHeadId);
      }
      );
    }}
    catch(err){
      console.log("err"+ err.message);
    }
  }
  bindProductDetails(data) {
    this.salesReturnDetails.patchValue({
      prodShName: data.prodShName,
      prodPackName: data.prodPackName,
      hsncode: data.hsncode,
    });
    this.salesReturnDetails.controls.batch.setValue('')

    // this.getProductPreviousData(data);
  }
  //Batch Autocopmlete
  batchAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Batch',
    isRequired: true,
    dataSourceFn: (name) => this.inwardService.GetSupplierSaleHistoryBatch(this.salesReturnFormGroup.controls.accName.value.accId, this.selectedProdid ? this.selectedProdid : 0, this.salesReturnFormGroup.controls.sretDate.value, name),
    keyString: 'batch',
    validators: [Validators.required]
  }
  protected filterCompanyMulti() {
    if (!this.Companydata) {
      return;
    }
    // get the search keyword
    let search = this.CompanyTabMultiFilterCtrl.value;
    if (!search) {
      this.filteredCompanyMulti.next(this.Companydata.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredCompanyMulti.next(
      this.Companydata.filter(bank => bank.compName.toLowerCase().indexOf(search) > -1)
    );
  }

  resetForm(): void {
    this.accName.setValue('');
    this.salesReturnFormGroup.reset();
  }
  goBack(): void {
    console.log('Go back action triggered');
    this.router.navigate(['pharma/outward/salesReturns']);
    }
  bindSuplierDetails(data) {
    this.salesReturnFormGroup.patchValue({
      accShName: data.accShName,
      gstin: data.accGstIn,
      mode: (data.accTranMode == 1 ? "Credit":"Cash")
    });
    // this.purchaseHeadFormGroup.controls.accShName.setValue(data.accShName);
    // this.accShName.setValue(data.accShName);
    // this.accGSTIn
  }
  private getAllCompMaster() {
    this.masterService.getAllCompanyMaster().subscribe(data => {
      this.Companydata = data as CompanyMaster[];
      this.filteredCompanyMulti.next(this.Companydata.slice());
    });
  }
  companyTab(event: KeyboardEvent) {
    if (event.keyCode === 9) {
      const statetab = this.CompanyTab.options;
      const result = statetab.find(x => x.active === true);
      this.salesReturnFormGroup.controls.compId.setValue(result.value);
      const data = this.Companydata.find(x => x.compId == result.value)
      if (data) {
        this.compGroupName.setValue(data.compGroupName);
      }

    }
    else if (event.keyCode === 13) {
      const data = this.Companydata.find(x => x.compId == this.salesReturnFormGroup.controls.compId.value)
      if (data) {
        this.compGroupName.setValue(data.compGroupName)
      }

      // setTimeout(() => {
      //   this.boxfocus.nativeElement.focus();
      // }, 1000);
    }


  }

  customerNameAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Custmor Name',
    isRequired: true,
    dataSourceFn: (name) => this.inwardService.getCustomAccountsByName(name),
    minCount: 2,
    keyString: 'accName'
  };
  customAccountsOptsTable: OptionsTableDefinition = {
    panelWidth: 700,
    columns: [
      { name: 'Customer Name', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 30, fxFlex1: 30, isKeyColumn: true },
      { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 20, fxFlex1: 20 },
      { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 15, fxFlex1: 15 },
      { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 20, fxFlex1: 20 },
      { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 15, fxFlex1: 15 }
    ]
  };

  formAlertId: string;
  showSaleDetailTemplate(data): void {
    if( this.salesReturnFormGroup.controls.accName.status == "INVALID"){
      AppMessageUtils.warningMessage('Please Enter All Required Fields', this.formAlertId);
    }else{
    let dialogInputs: DialogData = {} as DialogData;
    if (data === 'Add') {
      this.inwardDetailId = 0;
      this.detailbutton = 'Save & Continue';
      this.detailsave = 'Save & Close';
      dialogInputs.title = 'Add Item';
      this.salesReturnDetails.reset();
      this.selectedProdid =0;
    } else {
      this.detailbutton = 'Update & Continue';
      this.detailsave = 'Update & Close';
      dialogInputs.title = 'Edit Item';
    }
    this.showAutoCompleteData = false;
    this.dialogService.closeAllDialogues();
    dialogInputs.dialogClass = DialogClass.MEDIUM;
    dialogInputs.closeBtnLabel = 'Close';
    dialogInputs.templateRef = () => this.purchaseDetailTemplate;
    dialogInputs.buttonTemplates = [({ templateRef: this.saleReturnDetailButtonTemplate } as DialogButtonTemplate)]
    this.dialogService.showDialogue(dialogInputs, { disableClose: true });
  }}

  private buildDetailFormGroup():  FormGroup {
    return this.fb.group({
  prodId:  [''],
  prodShName:  [{value:'', disabled:true}],
  prodPackName:  [{value:'', disabled:true}],
  hsncode:  [''],
  batch:  [''],
  expdate:   [{value:'', disabled:true}],
  invQty:  [''],
  invQtyDisc:  [''],
  purRate:  [''],
  // actRate:  [''],
  saleRate:  [''],
  retailRate:  [''],
  mrp:  [''],
  // stkRate:  [''],
  // psQty:  [{value:'', disabled:true}],
  // psQtyDisc:  [{value:'', disabled:true}],
  purDiscType:  [''],
  purDisc:  [''],
  purdiscType1:  [''],
  purDiscType1Calc:  [''],
  purDisc1:  [''],
  mfgId:  [''],
  taxSlabId:  [''],
  tax:  [{value: '',disabled: true}],
  discValue:  [''],
  discValue1:  [''],
  // inwardTranStatus:  [''],
  // inwardQtyStatus:  [''],
  productStatus:['']
});
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
historyData:any
show:boolean=false;

getHistoryDetails(accId, prodId, inwardDate){
  const payload = this.salesReturnFormGroup.getRawValue();
  this.inwardService.productCusromerSalesHistory(accId, prodId, inwardDate).subscribe(res=>{
    if(res){
      this.historydataSource = res.map(list => {
        list['expdate'] = this.formatDate(list.expdate);
        this.bindProductDetails(list);
        return list;
      });
      // this.showPURHistoryTemplate();
      // this.show=true;
      // this.historyData =res
      // console.log(this.historyData)

    }

  })
}
isdisable:boolean=false;
prodhistoryData(data:any){
  console.log(data)
  this.show=false;
  this.salesReturnDetails.patchValue({
    prodShName:data.prodShName,
    prodPackName:data.prodPackName,
    batch:data.batch,
    expdate:data.expdate,
    invQty:[0],
    invQtyDisc:[0],
    purRate:data.tranRate,
    purDisc:data.disc,
    saleRate:data.saleRate,
    mrp:data.mrp,
    hsncode: data.hsnId,
    // [{value:data.hsnId, disabled:true}]
    purDisc1:data.disc1,
    tax:data.tax,
    // psQty:[0],
    // psQtyDisc:[0],
    mfgId:data.mfgName,
    outwardQtyStatus:data.outwardQtyStatus ? data.outwardQtyStatus :"",
  })
    this.salesReturnDetails.controls.hsncode.disable();
    this.salesReturnDetails.controls.purDisc.disable();
    this.salesReturnDetails.controls.mfgId.disable();
  if(data.batch){
    this.salesReturnDetails.controls.batch.disable();
  }
  if(data.expdate){
    this.salesReturnDetails.controls.expdate.disable();
  }
    this.salesReturnDetails.controls.mrp.disable();
  
  if(data.tranRate){
    this.salesReturnDetails.controls.saleRate.disable();
  }

  this.isdisable = true
}

showList(){
  this.router.navigate(['pharma/outward/salesReturns']);
}
purhistoryData: any;
dailogData: any;
issuedQty:any;
issQtyDisc:any;

selectProduct(data){
  console.log(data);
  this.purhistoryData = data;
  this.outwardDetailid  = data.outwardDetailId;
  this.outwardHeadid = data.outwardHeadId;
  this.bindProductBatchDetails(data);
  // this.dailogData.close();
 }

 bindProductBatchDetails(data) {
   this.salesReturnDetails.patchValue({
     batch: data.batch,
     mrp: this.routeService.formatAmount(data.mrp),
     tax:this.routeService.formatAmount(data.tax),
     expdate: this.datePipe.transform(data.expdate,'MM-yy'),
     purDisc: data.disc,
     purRate:data.purRate,
     saleRate: data.saleRate
   });
 }

  expDate(val) {
    const data = val;
    const formatted = `${String(new Date(data).getMonth() + 1).padStart(2, '0')}-${String(new Date(data).getFullYear()).slice(-2)}`;
    this.expiringdate = formatted;
    return formatted;
  }
//  bindProductBatchDetails(data) {
//   this.salesReturnDetails.patchValue({
//     batch: data.batch,
//     mrp: data.mrp,
//     expdate: data.expdate,
//   });
// }
// showPURHistoryTemplate():  void {
//   let dialogInputs:  DialogData = {} as DialogData;
//   dialogInputs.title = 'SAL History';
//   // this.dialogService.closeAllDialogues();
//   dialogInputs.dialogClass = DialogClass.MEDIUM;
//   dialogInputs.closeBtnLabel = 'Close';
//   dialogInputs.templateRef = () => this.purhistory;
//   // dialogInputs.buttonTemplates = [({ templateRef:  this.purchaseDetailButtonTemplate } as DialogButtonTemplate)]
//   this.dailogData =  this.dialogService.showDialogue(dialogInputs, { disableClose:  true });
// }
 getSalesDetailTableList(salesHeadId: number) {
    this.inwardService.getInwardItemsForHead(salesHeadId).subscribe(result => {
      if (result && Object.keys(result).length > 0) {
        this.dataSource = result.inwardDetails
        // //head
        this.outwardHeadNo = result.inwardHead.inwardHeadNo

        // this.outwardHead = result.outwardHead;
        // this.outwardHeadBtnText = UpdateText;
        // this.bindOutWardHeadControls(this.outwardHead);
        // //detail
        // this.outWardDetail = result.outwardDetails;
        // this.outwardDtlBtnSaveCloseTxt = UpdateCloseText;
        // this.outwardDtlBtnSaveCloseTxt.includes
        // this.outwardDtlBtnSaveContinueTxt = UpdateContinueText;
        // // taxes
        // this.outwardFinalSaveBtnText = UpdateText;
        // this.outwardPretaxes = result.outwardPreTaxes;
        // // this.outwardPretaxes.outwardTaxes = [];
        // // this.outwardPretaxes.outwardTaxes.push(result.outwardTaxes);

        // // console.log(this.outwardPretaxes);

        // // let taxes = result.outwardPretaxs[0].outwardTaxs;
        // this.outwardTaxes = result.outwardTaxes;
        // let taxes = result.outwardTaxes;
        // if (taxes && taxes.length > 0)
        //   taxes.forEach(tax => {
        //     if (tax.taxStakeName && tax.taxStakeName === 'IGST') {
        //       this.hasIGST = true;
        //     }
        //   });
        // this.bindFinalSaveControls(this.outwardHead);
        this.getTaxtesData(result)
      } else {
        // this.outWardDetail = [];
      }


    });
  }
   showAutoComplete(name){
      if(this.showAutoCompleteData){
        return this.inwardService.productCusromerSalesHistory(this.salesReturnFormGroup.controls.accName.value.accId, name, this.today);
        // return this.inwardService.getCustomProductByName(name,this.salesReturnFormGroup.controls.compId.value, SalePrefix)
      }else{
        return of([])
      }
    }

actRetQty:any;
validdate:any
  onSaveOrUpdateSaleDetail(flag) {
    try {
      if (this.salesReturnDetails.controls.invQty.value != "" && this.salesReturnDetails.controls.invQty.value != undefined && this.salesReturnDetails.controls.invQty.value != null) {
        this.validdate = this.salesReturnDetails.controls.expdate.value,

          console.log(this.salesReturnDetails.value);
          if(this.detailbutton == 'Save & Continue'){
            this.actRetQty = this.salesReturnDetails.value.prodId.closingQty
            // (this.salesReturnDetails.value.prodId.issQty - this.salesReturnDetails.value.prodId.retQty);
          }else{
            this.actRetQty = (this.issuedQty - this.rqry);
          }

        if (Number(this.salesReturnDetails.controls.invQty.value) <= this.actRetQty) {
          const postPurchaseDetailObj = this.preparePayload(this.salesReturnDetails.value, flag);
          this.inwardService.postPurchaseDetail(postPurchaseDetailObj).subscribe((data) => {
            console.log(data);
            if (data == 1 && flag) {
              this.salesReturnDetails.reset();
              this.selectedProdid =0
              // this.getSalesDetailTableList(this.invoiceHeadId);
              AppMessageUtils.successNotification('Details saved successfully');
              setTimeout(() => {
                const productNameElement = document.getElementById('productName');
      
                if (productNameElement) {
                  const focusableElement = productNameElement.querySelector('input');
      
                  if (focusableElement) {
                    // (focusableElement as HTMLElement).focus();
                    var x:any = (focusableElement as HTMLElement);
                    // x.value = " "
                    x.focus();
                  }
                    
                }
              }, 900);
            } else if (data && !flag) {
              this.salesReturnDetails.reset();
              this.selectedProdid =0
              // this.getSalesDetailTableList(this.invoiceHeadId);
              AppMessageUtils.successNotification('Details saved successfully');
              this.dialogService.closeAllDialogues();
            }

            this.getSalesDetailTableList(this.invoiceHeadId);
          });

        }
        else {
          console.log("invalid qty")
        }
      }
      else {
        AppMessageUtils.warningMessage('Please enter Valid Qty Value');
      }
      // const postPurchaseDetailObj = this.preparePayload(this.salesReturnDetails.value , flag);
      // console.log(postPurchaseDetailObj);
    }
    catch (err) {
      console.log(err.message);
    }


  }
expiringdate:any
batchvalue:any='';
  preparePayload(data , flag) {
    // console.log(data);
    // console.log(this.purchaseHead);
    const d = data.expdate? data.expdate.split('-'):"";
    var date = `01-${d[0]}-20${d[1]}`;
    var dd = d[1]+ "-" +d[0];
    if( typeof this.salesReturnDetails.controls.batch.value === 'object'){
       this.batchvalue = this.salesReturnDetails.controls.batch.value.batch
    }
    else{
      this.batchvalue = this.salesReturnDetails.controls.batch.value
    }
    if(this.detailbutton == 'Save'){
       const parts = dd.split('-');
    var dts= `${parts[0]}-${parts[1].slice(2, 4)}`
     this.expiringdate = dts
    }else{
      this.expiringdate =this.salesReturnDetails.controls.expdate.value
    }
    // console.log(date);
  const payload = {
    inwardDetailId:this.inwardDetailId ? this.inwardDetailId : 0,
    outwardDetailId:this.outwardDetailid,
    outwardHeadId:this.outwardHeadid,
    inwardHeadId:this.invoiceHeadId,
    prodId: (typeof data.prodId.prodId === 'number' && !isNaN(data.prodId.prodId)) ? data.prodId.prodId : this.prodid,
    hsnId: (this.salesReturnDetails.controls.hsncode.value && this.salesReturnDetails.controls.hsncode.value.trim() !== "") 
    ? this.salesReturnDetails.controls.hsncode.value 
    : 0,
    
    batch: this.batchvalue,
    isOnlySave: flag ,
    // expiryDate: data.expdate ? new Date(date) : '',
    //  this.datePipe.transform(this.salesReturnDetails.controls.expdate.value, 'yyyy-MM');
    // expiryDate: this.salesReturnDetails.controls.expdate ? this.datePipe.transform(this.salesReturnDetails.controls.expdate.value, 'MM-yy') : '',
    // expiryDate: this.salesReturnDetails.controls.expdate ? 
    // this.datePipe.transform(this.convertToValidDate(this.salesReturnDetails.controls.expdate.value), 'MM-yy') : '',
    expiryDate:this.salesReturnDetails.controls.expdate.value,
    // this.datePipe.transform(this.salesReturnDetails.controls.expdate.value, 'MM-yy'),
    invQty:  data.invQty ? +data.invQty :0,
    invQtyDisc: data.invQtyDisc ? +data.invQtyDisc : 0,
    recdQty:data.invQty ? +data.invQty :0,
    recdQyDisc:data.invQtyDisc ? +data.invQtyDisc : 0,
    inwardRate:0,
    purRate: data.purRate ? +data.purRate : 0,
    actRate: data.actRate ? +data.actRate:0,
    tranRate: this.salesReturnDetails.controls.saleRate ? this.salesReturnDetails.controls.saleRate.value : this.updateDetailData.saleRate ? this.updateDetailData.saleRate : 0,
    retailRate: data.retailRate ? +data.retailRate : 0,
    stkRate: data.prodId ? data.prodId.stkRate : 0,
    mrp: data.prodId  ? data.prodId.mrp : this.updateDetailData.mrp ? this.updateDetailData.mrp : 0,
    psQty: data.psQty ? +data.psQty : 0,
    psQtyDisc: data.psQtyDisc ? +data.psQtyDisc : 0,
    purDiscType: this.firmPreferences.discTypeOption != 3 ? this.firmPreferences.discTypeOption : data.purDiscType ? data.purDiscType : 0,
    purDisc: data.purDisc ? +data.purDisc : 0,
    purdiscType1:  this.firmPreferences.discTypeOption != 3 ? this.firmPreferences.discTypeOption : data.purDiscType ? data.purdiscType1 : 0,//data.purdiscType1 ? data.purdiscType1 : 1,
    purDiscType1Calc:0,
    purDisc1: data.purDisc1 ? data.purDisc1 : 0,
    mfgId:0,
    // mfgId: this.salesReturnDetails.controls.mfgId ? this.salesReturnDetails.controls.mfgId.value : 0,
    othCharges:0,
    outwardQtyStatus: this.salesReturnDetails.controls.productStatus ? this.salesReturnDetails.controls.productStatus.value : 0,
    taxSlabId: data.prodId.taxSlabId ? data.prodId.taxSlabId : this.taxslabId ? this.taxslabId :0,
    tax: data.prodId ? data.prodId.tax : this.updateDetailData.tax ? this.updateDetailData.tax : 0,
    grsValue:0,
    discValue: data.discValue ? data.discValue : 0,
    discValue1: data.discValue1 ? data.discValue1 : 0,
    taxValue: data.prodId.tax ? data.prodId.tax : this.tax ? this.tax :0,
    preTaxValue:0,
    issQty:data.prodId.issQty ? data.prodId.issQty:0,
    issQtyDisc:0,
    retQty:0,
    retQtyDisc:0,
    isDeleted:0,
    TranTypeHeadId: 3,
    // drFlag: lodash.get(this.hardCodeData.productData, 'drFlag'),
    // crFlag: lodash.get(this.hardCodeData.productData, 'crFlag'),
    firmYearId:0,
  };
  return payload;
  }

  getPurchaseList() {
    // this.isDataLoading = true;
    this.dataList = null;
    const payload = Object.assign({});
    // console.log(this.salesReturnFormGroup.value);
    payload.inwardDate = this.salesReturnFormGroup.value.invDate ?this.salesReturnFormGroup.value.invDate : null;
    payload.fromDate =  this.salesReturnFormGroup.controls.sretDate.value,
    payload.toDate =  this.salesReturnFormGroup.controls.sretDate.value,
    payload.invNo  =  this.salesReturnFormGroup.value.invNo ? this.salesReturnFormGroup.value.invNo:"";
    payload.accName  =  this.salesReturnFormGroup.value.accName ? this.salesReturnFormGroup.value.accName:"";
    payload.accShName  =  this.salesReturnFormGroup.value.accShName ? this.salesReturnFormGroup.value.accShName :"";
      payload.cityId  =   this.salesReturnFormGroup.value.cityId ? this.salesReturnFormGroup.value.cityId : 0;
      payload.mode  =  this.salesReturnFormGroup.value.mode ? this.salesReturnFormGroup.value.mode : 0;
    payload.accGSTIn  =  this.salesReturnFormGroup.value.accGSTIn ? this.salesReturnFormGroup.value.accGSTIn:"";
      payload.invValue =  this.salesReturnFormGroup.value.invValue ? this.salesReturnFormGroup.value.invValue : 0;
      payload.tranTypeHeadId= 3,
      payload.tranTypeName="SRET"
    this.inwardService.GetInwardHead(payload).subscribe(data => {
      this.dataList = data;
      // this.isDataLoading = false;
    });
  }

  editDetails(data:any){

  }
  deleteDetails(data:any){

  }
  // convertToValidDate(expdate: string): Date {
  //   const [month, year] = expdate.split('-');
  //   // Assuming the year is two digits, we'll add the prefix '20' for 21st-century years.
  //   const fullYear = '20' + year;
  //   return new Date(`${fullYear}-${month}-01`); // Sets the date to the 1st of the month.
  // }

  convertToValidDate(expdate: string): Date | null {
    let date: Date;
  
    // If the date is in MM-DD format (5 characters), add the current year to make it YYYY-MM-DD
    if (expdate.length === 5 && expdate.includes('-')) {
      const currentYear = new Date().getFullYear();
      expdate = `${currentYear}-${expdate}`;
    }
  
    // Parse the date string into a Date object
    date = new Date(expdate);
  
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', expdate);
      return null;
    }
  
    return date;
  }
  
  
  
  
  outwardHeadNo:any;
  headpatch(data){
    console.log(data);
    this.showTable = true;
    this.outwardHeadNo = data.inwardHeadNo
    // this.salesReturnFormGroup.controls.inwardHeadId.setValue(data.inwardHeadId);
    this.salesReturnFormGroup.controls.compId.setValue(data.compId);
    // this.salesReturnFormGroup.controls.inwardHeadNo.setValue(data.inwardHeadNo);
    this.salesReturnFormGroup.controls.sretDate.setValue(data.inwardDate);
    this.salesReturnFormGroup.controls.sretDate.disable();
    this.salesReturnFormGroup.controls.gstin.setValue(data.ltoNo);
    // this.salesReturnFormGroup.controls.invNo.setValue(data.invNo);
    // this.salesReturnFormGroup.controls.invDate.setValue(data.invDate);
    this.salesReturnFormGroup.controls.accName.setValue(data.accName);
    // if(data.account.city){
    //   this.purchaseHeadFormGroup.controls.cityId.setValue(data.account.city.name);
    // }
    // this.purchaseHeadFormGroup.controls.accMobile.setValue(data.account.mobile);
    // this.purchaseHeadFormGroup.controls.accGstIn.setValue(data.accGstIn);
    
      this.salesReturnFormGroup.controls.mode.setValue(data.mode.value == 1 ? 'Cash':'Credit');
    // this.salesReturnFormGroup.controls.inwardLrNo.setValue(data.inwardLrNo);
    // this.salesReturnFormGroup.controls.inwardWaybillNo.setValue(data.inwardWaybillNo);
    // this.salesReturnFormGroup.controls.noOfCases.setValue(data.noOfCases);
    // this.salesReturnFormGroup.controls.invValue.setValue(data.invValue);
    // this.transportName.setValue(data.transportId);
    
    this.salesReturnFormGroup.controls.accShName.setValue(data.accShName);
    // this.purchaseHeadFormGroup.controls.id.setValue(data.id);
   

    
    
  }

   confirmDelete() {
    // return this.deletePurchase
    document.getElementById('deletePopup').style.display = 'flex';
  }
  
   closePopup() {
    // Close the confirmation popup
    document.getElementById('deletePopup').style.display = 'none';
  };
  
   deleteItem(){
   this.resetForm();
   this.deleteHead(this.invoiceHeadId)
    // Here, yout can add your delete functionality
    console.log("Item deleted!");
  
    // Close the popup after deletion
    this.closePopup();
  }

  deleteHead(purchaseHead?: any) {
    this.inwardService.deletePurchaseHead(purchaseHead).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() :
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage("Sale Return Head already deleted") : '');
  }
  updateDetailData: any;
  prodid:any;
  addOrEdit(data) {
    this.prodid=0;
    console.log('data product----', data);
    this.inwardDetailId = data.inwardDetailId;
    this.updateDetailData = data;
    // this.detailburron = 'UpDate';
    this.showSaleDetailTemplate('UpDate');
    const inwardTranStatus = dropdowns.inwardTranStatus.find(type => type.code === data.inwardQtyStatus);
    const discType =  dropdowns.discountType.find(type => type.code === data.purDiscType);
    this.salesReturnDetails.controls.prodId.patchValue(lodash.get(data, 'prodName'));
    this.salesReturnDetails.controls.batch.patchValue(lodash.get(data, 'batch'));
    this.salesReturnDetails.controls.expdate.patchValue(lodash.get(data, 'expiryDate'));
    this.salesReturnDetails.controls.invQty.patchValue(lodash.get(data, 'invQty'));
    this.salesReturnDetails.controls.invQtyDisc.patchValue(lodash.get(data, 'invQtyDisc'));
    this.salesReturnDetails.controls.purRate.patchValue(lodash.get(data, 'purRate'));
    this.salesReturnDetails.controls.mfgId.patchValue(lodash.get(data, 'mfgName'));
    this.salesReturnDetails.controls.hsncode.patchValue(lodash.get(data, 'hsncode'));
    this.salesReturnDetails.controls.tax.patchValue(lodash.get(data, 'tax'));
    this.salesReturnDetails.controls.purDisc.patchValue(lodash.get(data, 'purDisc'));
    this.salesReturnDetails.controls.purDisc1.patchValue(lodash.get(data, 'purDisc1'));
    this.salesReturnDetails.controls.purDiscType.patchValue(lodash.get(data, 'purDiscType'));
    this.salesReturnDetails.controls.purdiscType1.patchValue(lodash.get(data, 'purdiscType1'));
    this.salesReturnDetails.controls.saleRate.patchValue(lodash.get(data, 'saleRate'));
    this.salesReturnDetails.controls.mrp.patchValue(lodash.get(data, 'mrp'));
    this.salesReturnDetails.controls.prodShName.patchValue(lodash.get(data, 'prodShName'));
    this.salesReturnDetails.controls.prodPackName.patchValue(lodash.get(data, 'prodPackName'));
    this.salesReturnDetails.controls.productStatus.patchValue(lodash.get(data, 'outwardQtyStatus'));
    this.salesReturnDetails.controls.hsncode.disable();
    this.salesReturnDetails.controls.purDisc.disable();
    this.salesReturnDetails.controls.mfgId.disable();
    this.headFormGroup.controls.otherDed.disable();
    this.headFormGroup.controls.otherAdd.disable();
    this.issuedQty=data.issQty;
    this.rqry = data.recdQty;
    this.prodid = data.prodId;
    this.taxslabId = data.taxSlabId;
    this.tax = data.tax;

  // if(data.batch){
  //   this.salesReturnDetails.controls.batch.disable();
  // }
  if(data.expdate){
    this.salesReturnDetails.controls.expdate.disable();
  }
    this.salesReturnDetails.controls.mrp.disable();
  
  if(data.tranRate){
    this.salesReturnDetails.controls.saleRate.disable();
  }
  this.salesReturnDetails.controls.saleRate.disable();


    // setTimeout(() => {
    //   this.salesReturnDetails.patchValue({
    //     // prodId :  lodash.get(data, 'prodName'),
    //    // prodId: data.product,
    //     // batch  :  lodash.get(data, 'batch'),
    //     // expdate:  lodash.get(data, 'expiryDate'),
    //     // invQty:  lodash.get(data, 'invQty'),
    //     // invQtyDisc:  lodash.get(data, 'invQtyDisc'),
    //     // psQty:  lodash.get(data, 'psQty'),
    //     // psQtyDisc:  lodash.get(data, 'psQtyDisc'),
    //     // inwardTranStatus:  inwardTranStatus.name,
    //     purRate:  lodash.get(data, 'purRate'),
    //     mfgId:  lodash.get(data, 'mfgName'),
    //     hsncode:  lodash.get(data, 'hsncode'),
    //     tax:  lodash.get(data, 'tax'),
    //     purDisc:  lodash.get(data, 'purDisc'),
    //     purDiscType: discType.name,
    //     saleRate:  lodash.get(data, 'saleRate'),
    //     mrp: lodash.get(data, 'mrp' ),
    //     prodShName:lodash.get(data , 'prodShName'),
    //     prodPackName:lodash.get(data , 'prodPackName')

    //    });
 
    //    if(data.hsncode){
    //      this.salesReturnDetails.controls.hsncode.disable();
    //    }
    // }, 1000);
  
  }

  isDeleteDisabled(data) {
    console.log(data);
    return data.deletedFlag;
  }
  refresh():  void {
    this.getSalesDetailTableList(this.invoiceHeadId);
  }

   delete(item?:  any) {
      this.inwardService.deletePurchaseItem(item.inwardDetailId).subscribe(data =>
        ResponseUtils.isStatus200(data) ? this.refresh() : 
          ResponseUtils.isStatus404(data) ?
            AppMessageUtils.warningMessage('sale return details already deleted') :  '');
    }
    deleteTemplate() {
      return this.deletePurchaseHeadTemplate;
    }
  pretaxes:Pretax[] = [];
  inwardTaxes: any;
  inwardDetails: any;
  headFormGroup: FormGroup;
  otherDedAccId = new FormControl('');
  otherAddAccId = new FormControl('');
  transportName = new FormControl('');
  hasIGST:boolean;

    getTaxtesData(head : any) {
      if (head) {
        this.invValue = head.inwardHead.netValue;
        this.roundedValue = Math.ceil(this.invValue);
        //lodash.get(head, 'id')
        // this.inwardService.getTaxtesData(head).subscribe(data => {
        //   if (data) {
        //     this.head = data[0] as InwardHead;
        //     this.pretaxes = this.head.pretaxes;
        //     console.log(this.pretaxes);
        //     if(!this.headFormGroup) {
        //       this.buildHeadFormGroupForFinalSave();
        //       this.subscribeForFinalSaveChanges();
        //     }
        //     this.headFormGroup.reset({...this.head});
        //     this.buildPretaxesFormGroup();
            
        //   }
        // });
  
            this.head = head.inwardHead;
            this.pretaxes = head.inwardPreTaxes;
            this.preTaxesData = head.inwardPreTaxes;
            this.pretaxes.forEach(x =>{
              const taxvalue = head.inwardTaxes.filter(y => y.taxSlabId == x.taxSlabId)
              x.taxes = taxvalue;
            });
            this.inwardTaxes = head.inwardTaxes;
            this.inwardDetails = head.inwardDetails;
            console.log(this.pretaxes);
            if(!this.headFormGroup) {
              this.buildHeadFormGroupForFinalSave();
              this.subscribeForFinalSaveChanges();
            }
            this.headFormGroup.reset({...this.head});
            this.buildPretaxesFormGroup();
            setTimeout(() => {
              if(this.head.otherDedAccId){
                this.inwardService.getCustomAccountById(this.head.otherDedAccId).subscribe(data =>{
                 this.otherDedAccId.setValue(data[0].accName);
                })
               }
            }, 1000);
    
            setTimeout(() => {
              if(this.head.otherAddAccId){
                this.inwardService.getCustomAccountById(this.head.otherAddAccId).subscribe(data =>{
                 console.log(data);
                 this.otherAddAccId.setValue(data[0].accName);
                })
               }
            }, 1000);
  
            setTimeout(() => {
              if(this.head.transportId){
                this.inwardService.getCustomAccountById(this.head.transportId).subscribe(data =>{
                 console.log(data);
                 this.transportName.setValue(data[0].accName);
                })
               }
            }, 1000);
  
            
      }
    }

      invoiceTax: FormArray;
    
      buildPretaxesFormGroup() {
        this.invoiceTax =  this.fb.array([]);
        let preTaxes=this.pretaxes as Pretax[];
        let atleastOnePretaxFlag:boolean;
        preTaxes.forEach(pretax=>{
          atleastOnePretaxFlag=true;
          this.invoiceTax.push(this.buildPretaxFormGroup(pretax));
          console.log(this.invoiceTax);
        });
        this.displayPreTax=atleastOnePretaxFlag;
    
      }
    
      buildPretaxFormGroup(pretax:Pretax):FormGroup {
        return this.fb.group({
          id:pretax.id,
          tranAccId:pretax.tranAccId,
          taxCategoryId:pretax.taxCategoryId,
          taxSlabId:pretax.taxSlabId,
          tax:pretax.tax,
          preTaxValue:pretax.preTaxValue,
          iPreTaxValue:pretax.iPreTaxValue,
          ledpost:pretax.ledpost,
          taxes:this.buildTaxesFormArray(pretax.taxes)
        });
      }
    
      buildTaxesFormArray(taxes:Tax[]): FormArray {
        let taxesFormArray=this.fb.array([]);
        if(taxes.length > 0) {
          taxes.forEach(tax=>{
              if(tax.taxStakeName && tax.taxStakeName === 'IGST') {
                this.hasIGST=true;
              }
              taxesFormArray.push(this.fb.group({
                id:tax.id,
                taxAccId:tax.taxAccId,
                taxSlabId:tax.taxSlabId,
                taxStakeId:tax.taxStakeId,
                taxStakeName:tax.taxStakeName,
                stakeContribution:tax.stakeContribution,
                stakeValue:tax.stakeValue,
                iStakeValue:tax.iStakeValue,
                ledpost: tax.ledpost
      
              }));
            
          });
        }else {
          // taxesFormArray.push(this.formBuilder.group({
          //   id:0,
          //   taxAccId:0,
          //   taxSlabId:0,
          //   taxStakeId:0,
          //   taxStakeName:'',
          //   stakeContribution:'',
          //   stakeValue:0,
          //   iStakeValue:0,
          //   ledpost: 0
    
          // }));
        }
        return taxesFormArray;
      }
    
      getTaxes(): FormArray {
        return this.invoiceTax.get('taxes') as FormArray;
      }


      updateInvValueForFinalSave() {
        let inputTaxValues:number=0;
        let pretaxes=this.invoiceTax ? this.invoiceTax.getRawValue() as Pretax[] : [];
        pretaxes.forEach(pretax=>{
          inputTaxValues=Number(inputTaxValues)+Number(pretax.iPreTaxValue?pretax.iPreTaxValue:0);
          pretax.taxes.forEach(tax=>{
            inputTaxValues=Number(inputTaxValues)+Number(tax.iStakeValue?tax.iStakeValue:0);
          });
        }
        );
        let netValue:number=Number(this.head.netValue);
        let debValue:number=Number(this.headFormGroup.controls.otherDed.value?this.headFormGroup.controls.otherDed.value:0);
        let hamaliValue:number=Number(this.headFormGroup.controls.hamaliValue.value?this.headFormGroup.controls.hamaliValue.value:0);
        let crValue:number=Number(this.headFormGroup.controls.otherAdd.value?this.headFormGroup.controls.otherAdd.value:0);
        this.headFormGroup.controls.invValue.patchValue(Number(inputTaxValues)+Number(debValue)-Number(crValue)+(Number(hamaliValue)));
        this.headFormGroup.controls.netValue.patchValue(Number(netValue)+Number(debValue)-Number(crValue)+(Number(hamaliValue)));
    
      }
    
      resetFinalSave() {
        this.headFormGroup.reset({...this.head},{emitEvent:false});
        this.buildPretaxesFormGroup();
      }

      validateFloatKeyPress(el) {
        var v = parseFloat(el.value);
        // el.value = (isNaN(v)) ? '' : v.toFixed(2);
        el.value = (Math.round(v * 100) / 100).toFixed(2);
    }

    resetDialog() {
      this.salesReturnDetails.reset();
      this.selectedProdid =0;
    }

    djadjInput(val){
      if(val == 0){
        this.otherDedAccId.disable();
      }else{
        this.otherDedAccId.enable();
      }
    }
    cjadjInput(val){
      if(val == 0){
        this.otherAddAccId.disable();
      }else{
        this.otherAddAccId.enable();
      }
    }

     doFinalSave() {
        const headData = this.headFormGroup.getRawValue();
        const preTaxData = this.invoiceTax.getRawValue();
        this.head.hamaliValue = headData.hamaliValue;
        let inwardHead = {...this.head,...this.headFormGroup.getRawValue() as InwardHead};
        inwardHead.otherAddAccId = this.otherAddAccId.value.accId;
        inwardHead.otherDedAccId = this.otherDedAccId.value.accId;
        this.preTaxesData.forEach((x,i)=>{
          x.iPreTaxValue = +preTaxData[i].iPreTaxValue;
          // this.inwardTaxes.forEach((y,j)=>{
          //   if(x.taxSlabId == y.taxSlabId){
          //     y.iStakeValue = +preTaxData[i].taxes[j].iStakeValue;
          //   }
          // })
        });
    
        preTaxData.forEach(y =>{
          if(y.taxes.length > 0){
            this.inwardTaxes.forEach((z)=>{
              const taxStakeId = y.taxes.find(x => x.taxStakeId == z.taxStakeId);
              if(taxStakeId){
                z.iStakeValue = +taxStakeId.iStakeValue;
              }
            })
          }
    
        });
    
    
        let petaxes = this.preTaxesData;
        let inwardTaxes = this.inwardTaxes;
        const payload = {
          inwardHead: inwardHead,
          inwardPreTaxes:petaxes,
          inwardTaxes:inwardTaxes,
          inwardDetails:this.inwardDetails
        }
        console.log(inwardHead);
        console.log(petaxes);
        console.log(inwardTaxes);
        
    
        // console.log(this.headFormGroup.getRawValue());
        // console.log(this.invoiceTax.getRawValue())
        // let finalSaveHead={...this.head,...this.headFormGroup.getRawValue() as InwardHead,'pretaxes':[...this.invoiceTax.getRawValue() as Pretax[]]};
        // console.log(finalSaveHead);
        // finalSaveHead['otherAddAccountMaster'] = finalSaveHead['otheraddAccid'];
        // finalSaveHead['otherDebAccountMaster'] = finalSaveHead['otherdebAccid'];
        this.inwardService.InwardFinalSave(payload).subscribe(data =>{
          ResponseUtils.isStatus200(data)
          this.router.navigate(['pharma/outward/salesReturns'])
        }
        );
      }

      buildHeadFormGroupForFinalSave() {
        let finalSaveHeadKeys:string[]=['hamaliValue','invValue','netValue','otherAdd','otherAddAccId','otherDed','otherDedAccId','remarks'];
        this.headFormGroup=this.fb.group({});
        finalSaveHeadKeys.forEach(headKey=>{ 
          let validatorFn:Validators=headKey==='invValue'?Validators.required:null;
          this.headFormGroup.addControl(headKey, new FormControl(headKey==='netValue'?{value: '', disabled: true}:'',validatorFn));
        });
        this.headFormGroup.reset({...this.head});
    
      }
      headFormGroupSubscription:Subscription=new Subscription();

      subscribeForFinalSaveChanges() {
        this.headFormGroupSubscription.add(this.headFormGroup.controls.hamaliValue.valueChanges.subscribe(hamaliValue=>
          this.updateInvValueForFinalSave()));
        this.headFormGroupSubscription.add(this.headFormGroup.controls.otherAdd.valueChanges.subscribe(crValue=>
          this.updateInvValueForFinalSave()));
        this.headFormGroupSubscription.add(this.headFormGroup.controls.otherDed.valueChanges.subscribe(debValue=>
          this.updateInvValueForFinalSave()));
      }

      openSelect(select: MatSelect) {
        select.open();
      }

}
