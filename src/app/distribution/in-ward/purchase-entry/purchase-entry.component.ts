import { Company, CompanyMaster } from './../../../shared/models/master-models';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent, MatPaginator, MatSelect, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { of, Observable, Subscription, ReplaySubject, Subject } from 'rxjs';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { DialogButtonTemplate, DialogClass, DialogData } from 'src/app/shared/components/dialog/dialog.component';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import * as dropdowns from '../../../_files/dropdowns.json';
import { MasterService } from '../../Master/master.service';
import { InwardService } from '../in-ward.service';
import { TableDefinition, ActionStyle } from 'src/app/shared/components/table/table-model';
import * as lodash from 'lodash';
import { InwardHead, Pretax, Tax } from 'src/app/shared/models/inward-models';
import { merge } from 'lodash';
import { DatePipe } from '../../../../../node_modules/@angular/common';
import { Store } from '@ngrx/store';
import { loadFirms } from 'src/app/shared/ngrx-store/actions/firm.actions';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { PurchasePrefix } from 'src/app/shared/app-constants';
import { OutwardService } from '../../out-ward/outward.service';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';
import { RouteService } from 'src/app/shared/services/route.service';
import { stringify } from 'querystring';
declare var $:  any;

export interface PeriodicElement {
  shName:  string;
  ProductName:  string;
  ProductPack:  string;
  ProductType:  string;
  companyName:  string;
  tax:  string;
  hsncode:  string;
}


@Component({
  selector:  'app-purchase-entry',
  templateUrl:  './purchase-entry.component.html',
  styleUrls:  ['./purchase-entry.component.scss', '../in-ward.component.scss']
})
export class PurchaseEntryComponent implements OnInit, OnDestroy {
  purchaseHeadFormGroup:  FormGroup;
  accName = new FormControl('');
  transportName = new FormControl('');
  detailburron = 'Save & Continue';
  detailsave = 'Save & Close';
  purchaseHeadBtnText = 'Save';
  editObj = {} as any;
  public inwardStatusDropDown:  { name:  string, code:  any }[] = dropdowns.inwardStatus;
  public modeDropDown:  { name:  string, code:  any }[] = dropdowns.mode;
  public discDropdown:  { name:  string, code:  any }[] = dropdowns.discountType;
  inwardStatusData:  { name:  string; code:  any; }[];
  transportTypes:  any;
  formAlertId:  string;
  purchaseDetailFormGroup:  FormGroup;
  @ViewChild('purchaseDetailTemplate', { static:  true }) purchaseDetailTemplate;
  @ViewChild('purhistory', { static:  true }) purhistory;
  @ViewChild('purchaseDetailButtonTemplate', { static:  true }) purchaseDetailButtonTemplate;
  purchaseDetailBtnText:  string;
  // Custom Accounts in Purchase Head
  customProductAutoCompleteDef:  AutoCompleteDefinition = {
    label:  'Product Name',
    isRequired:  true,
    dataSourceFn:  (name) => this.showAutoComplete(name),
    //  this.inwardService.getCustomProductByName(name,this.purchaseHeadFormGroup.controls.compId.value, PurchasePrefix),
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
  manifactureDetails:  AutoCompleteDefinition = {
    label:  'Manufacture Name',
    isRequired:  false,
    dataSourceFn:  () => of(this.manifactureData),
    isStaticType:  true,
    keyString:  'mfgName'
  };
  discountType:  AutoCompleteDefinition = {
    label:  'Discount Type',
    isRequired:  true,
    dataSourceFn:  () => of([...dropdowns.discountType]),
    isStaticType:  true,
    keyString:  'name'
  };
  
  discountType1:  AutoCompleteDefinition = {
    label:  'Discount Type 1',
    isRequired:  true,
    dataSourceFn:  () => of([...dropdowns.discountType]),
    isStaticType:  true,
    keyString:  'name'
  };

  @ViewChild('deletePurchaseHeadTemplate', { static:  false }) deletePurchaseHeadTemplate;
  dateError = false;
  customProductOptsTable:  OptionsTableDefinition = {
    panelWidth:  900,
    columns:  [
      { name:  'Product Name', value:  (obj) => obj['prodName'] ? obj['prodName'] :  '', fxFlex:  20,fxFlex1:20, isKeyColumn:  true },
      { name:  'Product Pack', value:  (obj) => obj['prodPackName'] ? obj['prodPackName'] :  '', fxFlex:  16 , fxFlex1:16},
      { name:  'HSN Code', value:  (obj) => obj['hsncode'] ? obj['hsncode'] :  '', fxFlex:  16, fxFlex1:16 },
      { name:  'Tax%', value:  (obj) => obj['tax'] ? obj['tax']:  '', fxFlex:  16, fxFlex1:16 },
      { name:  'Sh.Name', value:  (obj) => obj['prodShName'] ? obj['prodShName'] :  '', fxFlex:  16,fxFlex1:16 },
      { name:  'CompanyName', value:  (obj) => obj['compName']? obj['compName'] :  '', fxFlex:  14, fxFlex1:14 }    ]
  };
  supplierData;
  transportData;
  // mode AutocompleteDef
  modeAutoCompleteDef:  AutoCompleteDefinition = {
    label:  'Mode',
    isRequired:  true,
    dataSourceFn:  () => of([...dropdowns.mode]),
    isStaticType:  true,
    keyString:  'name'
  };

    // Custom Accounts in Purchase Head
  customAccountAutoCompleteDef:  AutoCompleteDefinition = {
    label:  'Supplier Name',
    isRequired:  true,
    dataSourceFn:  (name) => this.inwardService.getCustomAccountsByName(name),
    minCount:  2,
    keyString:  'accName'
  };


     // Custom Transport in Purchase Head
     customTransportAutoCompleteDef:  AutoCompleteDefinition = {
      label:  'Transport',
      // isRequired:  true,
      dataSourceFn:  (name) => this.inwardService.getCustomAccountsByName(name, true),
      minCount:  2,
      keyString:  'accName'
    };

    ///----------------------Company--------------//
    @ViewChild('CompanyTab', {static:false}) CompanyTab: MatSelect;
    @ViewChild('boxfocus', {static:false}) boxfocus: ElementRef;
    CompanyTabMultiFilterCtrl = new FormControl('');
    public filteredCompanyMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
    compGroupName = new FormControl('');
  Companydata: CompanyMaster[];
  updateDetailData: any;
  inwardDetailId: any;
  batchByProductId: any;
  firmPreferences: any;
  inwardTaxes: any;
  inwardDetails: any;
  preTaxesData: any;
  showAutoCompleteData:boolean = false;
  otherDedAccId = new FormControl('');
  otherAddAccId = new FormControl('');
  showTable: boolean = false;
  displayProd: boolean;
  purchaseHist: any;
  dailogData: any;
  actions: any;
  minDate: any;
  maxDate:any;
  invValue: any;
  roundedValue: number;
    companyTab(event: KeyboardEvent) {
        if (event.keyCode === 9) {
          const statetab = this.CompanyTab.options;
          const result = statetab.find(x => x.active === true);
          this.purchaseHeadFormGroup.controls.compId.setValue(result.value);
          const data = this.Companydata.find(x=> x.compId == result.value)
          if(data){
          this.compGroupName.setValue(data.compGroupName);
          }
          
        }
        else if (event.keyCode === 13) {
          const data = this.Companydata.find(x=> x.compId == this.purchaseHeadFormGroup.controls.compId.value)
          if(data){
          this.compGroupName.setValue(data.compGroupName)
          }
  
          // setTimeout(() => {
          //   this.boxfocus.nativeElement.focus();
          // }, 1000);
        }
  
       
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
  
      companychange(value){
       if(value.value){
        const data = this.Companydata.find(x=> x.compId == value.value)
          if(data){
          this.compGroupName.setValue(data.compGroupName)
          }
       }
      }

      private getAllCompMaster() {
        this.masterService.getAllCompanyMaster().subscribe(data=>{
          this.Companydata=data as CompanyMaster[];
          this.filteredCompanyMulti.next(this.Companydata.slice());
        });
      }
  
      ///---------------- end prod type------------///////



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
  customAccountsOptsTable:  OptionsTableDefinition = {
    panelWidth:  700,
    columns:  [
      { name:  'Supplier Name', value:  (obj) => obj['accName'] ? obj['accName'] :  '', fxFlex:  34,fxFlex1:34, isKeyColumn:  true },
      { name:  'City Name', value:  (obj) => obj['cityName'] ? obj['cityName'] :  '', fxFlex:  24, fxFlex1:24 },
      { name:  'Mobile', value:  (obj) => obj['accMobile'] ? obj['accMobile'] :  '', fxFlex:  14,fxFlex1:14 },
        { name:  'GSTIN', value:  (obj) => obj['accGstIn'] ? obj['accGstIn'] :  '', fxFlex:  18, fxFlex1:18 },
      { name:  'Sh.Name', value:  (obj) => obj['accShName'] ? obj['accShName'] :  '', fxFlex:  10, fxFlex1:10 }
    ]
  };


  customTransportOptsTable:  OptionsTableDefinition = {
    panelWidth:  700,
    columns:  [
      { name:  'Transport Name', value:  (obj) => obj['accName'] ? obj['accName'] :  '', fxFlex:  14,fxFlex1:14, isKeyColumn:  true },
      { name:  'City Name', value:  (obj) => obj['cityName'] ? obj['cityName'] :  '', fxFlex:  14, fxFlex1:14 },
      { name:  'Mobile', value:  (obj) => obj['accMobile'] ? obj['accMobile'] :  '', fxFlex:  14, fxFlex1:14 },
        { name:  'GSTIN', value:  (obj) => obj['accGstIn'] ? obj['accGstIn'] :  '', fxFlex:  14, fxFlex1:14 },
      { name:  'Sh.Name', value:  (obj) => obj['accShName'] ? obj['accShName'] :  '', fxFlex:  14, fxFlex1:14 }
    ]
  };



    // Company
  companyGroupAutoCompleteDef:  AutoCompleteDefinition = {
    label:  'Company',
    // isRequired:  true,
    isStaticType:  true,
    dataSourceFn:  () => this.masterService.getAllCompanyMaster(),
    keyString:  'name',
    minCount:2
    // validators:  [Validators.required]
  };
  companyGroupOptsTable:  OptionsTableDefinition = {
    panelWidth:  300,
    columns:  [
      { name:  'Company', value:  (obj) => obj['name'] ? obj['name'] :  '', fxFlex:  50,fxFlex1:50, isKeyColumn:  true },
      { name:  'Company Group', value:  (obj) => obj['companyGroups']['name'] ? obj['companyGroups']['name'] :  '', fxFlex:  50, fxFlex1:50 },
    ]
  };
  displayedColumns:  string[] = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'companyName', 'tax', 'actions'];
  dataSource;
  historydataSource;
  @ViewChild(MatPaginator, { static:  true }) paginator:  MatPaginator;
  @ViewChild(MatSort, { static:  true }) sort:  MatSort;
  taxCalculations:  TableDefinition = {
    columns:  [
      {id:  'tax',  name:  'GST%', value:  (obj) => obj['tax'] ? obj['tax'] :  ''},
      {id:  'preTaxValue',  name:  'Taxable', value:  (obj) => obj['preTaxValue'] ? obj['preTaxValue'] :  ''},
      {id:  'cgst',  name:  'CGST', value:  (obj) => obj['cgst'] ? obj['cgst'] :  ''},
      {id:  'sgst',  name:  'SGST', value:  (obj) => obj['sgst'] ? obj['sgst'] :  ''},
    ],
    disablePagination:  true,
    disableFilter:  true
  };
  taxDate = [{gst:  12.00, taxable:  1800.00, sgst:  108.1, cgst:  108.2}];
  invTaxDate = [{gst:  12.00, taxable:  1800.00, sgst:  108.1, cgst:  108.2}];
  tableDefinition:  TableDefinition = {
    columns:  [
      {id:  'prodShName',  name:  'Sh.Name', value:  (obj) => obj['prodShName']?obj['prodShName'] ? obj['prodShName'] :  '':''},
      {id:  'prodName',  name:  'Product Name', value:  (obj) => obj['prodName']?obj['prodName'] ? obj['prodName'] :  '':''},
      {id:  'batch',  name:  'Batch No', value:  (obj) => obj['batch'] ? obj['batch'] :  ''},
      {id:  'expdate',  name:  'Exp.Date', value:  (obj) => obj['expiryDate'] ? obj['expiryDate'] :  ''},
      {id:  'invQty',  name:  'InvQty',
        value: (obj) => {
          let invQty = obj['invQty'] ? obj['invQty'] : '';
          return invQty ? parseFloat(invQty).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }},
      {id:  'invQtyDisc',  name:  'Qty.Disc', 
        value: (obj) => {
          let invQtyDisc = obj['invQtyDisc'] ? obj['invQtyDisc'] : '';
          return invQtyDisc ? parseFloat(invQtyDisc).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }},
      {id:  'purRate',  name:  'Pur.Rate',
        value: (obj) => {
          let purRate = obj['purRate'] ? obj['purRate'] : '';
          return purRate ? parseFloat(purRate).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }},
      {id:  'mrp',  name:  'MRP',
        value: (obj) => {
          let mrp = obj['mrp'] ? obj['mrp'] : '';
          return mrp ? parseFloat(mrp).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }},
      {id:  'purDisc',  name:  'Disc', 
        value: (obj) => {
          let purDisc = obj['purDisc'] ? obj['purDisc'] : '';
          return purDisc ? parseFloat(purDisc).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }},
      {id:  'tax',  name:  'Tax(%)', 
        value: (obj) => {
          let tax = obj['tax'] ? obj['tax'] : '';
          return tax ? parseFloat(tax).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
          }},
      {id:  'grsValue',  name:  'Gross Value', 
        value: (obj) => {
          let grsValue = obj['grsValue'] ? obj['grsValue'] : '';
          return grsValue ? parseFloat(grsValue).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
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
        }
    ]},
  ]};

  historytableDefinition:  TableDefinition = {
    columns:  [
      {id:  'prodShName',  name:  'Sh.Name', value:  (obj) => obj['prodShName']?obj['prodShName'] ? obj['prodShName'] :  '':''},
      {id:  'prodName',  name:  'Product Name', value:  (obj) => obj['prodName']?obj['prodName'] ? obj['prodName'] :  '':''},
      {id:  'batch',  name:  'Batch No', value:  (obj) => obj['batch'] ? obj['batch'] :  ''},
      {id:  'expdate',  name:  'Exp.Date', value:  (obj) => obj['expiryDate'] ? obj['expiryDate'] :  ''},
      {id:  'invQty',  name:  'InvQty', value:  (obj) => obj['invQty'] ? obj['invQty'] :  ''},
      {id:  'invQtyDisc',  name:  'Qty.Disc', value:  (obj) => obj['invQtyDisc'] ? obj['invQtyDisc'] :  ''},
      {id:  'purRate',  name:  'Inv.Rate', value:  (obj) => obj['purRate'] ? obj['purRate'] :  ''},
      {id:  'discValue',  name:  'Disc', value:  (obj) => obj['discValue'] ? obj['discValue'] :  ''},
      {id:  'mrp',  name:  'MRP', value:  (obj) => obj['mrp'] ? obj['mrp'] :  ''},
      // {id:  'purRate',  name:  'Tran.Qty.Status', value:  (obj) => obj['purRate'] ? obj['purRate'] :  ''},
      {id:  'hsncode',  name:  'HSN  code', value:  (obj) => obj['hsncode'] ? obj['hsncode'] :  ''},
  ],
  disablePagination:  true,
  disableFilter:  true
};

  invoiceHeadId:  any;
  selectedProduct: any;
  purchaseHead;
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
      TranTypeHeadId:1,
      tranTypeName: 'PUR',
      taxCategoryId: 1,
      isEligible: 1
    }
  };
  manifactureData: any;
  manufactureId;
  pretaxes:Pretax[] = [];
  head:InwardHead;
  headFormGroup: FormGroup;
  headFormGroupSubscription:Subscription=new Subscription();
  invoiceTax: FormArray;
  displayPreTax:boolean;
  hasIGST:boolean;
  headObject: InwardHead;
  purdate: string;
  today: string;
  validationQty: any;
  qtyvalue1: number;
  qtyandfree: number;
  disableBtn: boolean = false;
  alloRrate: number;
  invNumber: any;
  customAccount: any;
  tranIndate: any;
  firmList: any;
  editObj1: any;
  additemflag: boolean = false;
  finalSavebutton: string = 'Save';
  protected _onDestroy = new Subject<void>();

  @HostListener('window:keydown.alt.h', ['$event'])
	bigFont(event: KeyboardEvent) {
    // debugger;
	  event.preventDefault();
	  this.getProductPreviousData();
	}

  constructor(private formBuilder: FormBuilder, private inwardService:  InwardService, private router:  Router,
              private masterService: MasterService, private store: Store<any>, private dialogService:  DialogService, public activaedRoute:  ActivatedRoute,
    private outwardService: OutwardService, private datePipe: DatePipe, private service:OutWardHttpService, private routeService:RouteService) { 

                this.invoiceTax =  this.formBuilder.array([]);
                this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
              }

  getManifacture(data) {
    console.log('filter data----', data);
    return Observable.create(observer => {
      observer.next();
    });
  }

  subscription:Subscription=new Subscription();

  public modeData: {
    name: string,
    code: any
  } [] = dropdowns.mode;
  public inwardTransData: { name: string; code: number; }[] = dropdowns.inwardTranStatus;
  ngOnDestroy() {
    this.headFormGroupSubscription.unsubscribe();
    this.subscription.unsubscribe();
    this.inwardService.sendheadData(null, null);
  }
  ngOnInit() {
    // this.getbatch$();

    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
    if(this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== ''){
      this.minDate = this.firmPreferences.finSdate;
      this.maxDate = this.today;//this.firmPreferences.finEdate;
    }
    document.getElementById('deletePopup').style.display = 'none';
    this.getAllCompMaster();
    this.purchaseHeadFormGroup = this.buildHeadFormGroup();
    this.masterService.getAllManufacturers().subscribe(data => {
      if (data) {
        this.manifactureData = data;
        console.log(data);
      }
    });

    setTimeout(() => {
      if(this.invoiceHeadId != null && this.invoiceHeadId != 0){
      this.masterService.getalltrandate(1).subscribe(data =>{
        let objsplit:any
        if(data){
          console.log(data);
          if(data){
            objsplit="";
            objsplit = data[0].inwardDate != null ? data[0].inwardDate.split('T') : "";
            this.tranIndate = objsplit[0];
      
          }
        
          console.log(this.tranIndate);
        }
      });
    }
    }, 900);

    this.CompanyTabMultiFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterCompanyMulti();
    });

    // this.otherAddAccId.disable();
    // this.otherDedAccId.disable();

    this.inwardService.purchaseHeaddata.subscribe(purchaseHead => {
      if (purchaseHead) {
        console.log(purchaseHead);
        this.headObject = purchaseHead 
        this.purchaseHead = purchaseHead;
        // this.getTaxtesData(this.purchaseHead);
      }
    });
    // this.activaedRoute.queryParams.subscribe(data => {
    //   if (data !== null && data !== undefined && data.length >0) {
    //     console.log(data);
    //     this.invoiceHeadId = data.id;
    //     this.getTaxtesData(data);
    //     this.invoiceHeadDetails(this.invoiceHeadId);
    //   }
    // });

    this.subscription.add(this.inwardService.getheadData$.subscribe(x=>{
      if(x.purchaseHead !== null && x.purchaseHead !== undefined && x.action){
        console.log(x);
        // this.editObj1 = x;
        this.additemflag = true ;
        this.purchaseHeadBtnText = 'Update';
        this.finalSavebutton = 'Update';
        this.headpatch(x.purchaseHead);
        this.invoiceHeadId = x.purchaseHead.inwardHeadId;
        this.actions = x.action;
        // this.getTaxtesData(x.inwardHeadId);
        this.invoiceHeadDetails(this.invoiceHeadId);
        setTimeout(() => {
          if(this.actions == "delete"){
            this.confirmDelete(); 
          }
       }, 1500);

      }else{
        this.additemflag = false;
        this.purchaseHeadBtnText = 'Save';
        this.finalSavebutton = 'Save';
      }
    }));
    this.purchaseDetailFormGroup = this.buildDetailFormGroup();
    // this.getAllTransportTypes();

    this.accName.valueChanges.subscribe(res => {
      if (typeof res === 'object') {
        this.supplierData = res;
        this.bindSuplierDetails(res);
      }
    });


    this.transportName.valueChanges.subscribe(res => {
      if (typeof res === 'object') {
        this.transportData = res;
        // this.bindSuplierDetails(res);
      }
    });

    this.purchaseDetailFormGroup.get('mfgId').valueChanges.subscribe(data => {
      console.log('daat------', data);
      this.manufactureId = data.id;
    });

    // this.purchaseDetailFormGroup.get('expdate').valueChanges.subscribe(date => {
    //   console.log(/^(0?[1-9]|1[012])[\/\-]\d{4}$/.test(date));
    //   this.dateError = /^(0?[1-9]|1[012])[\/\-]\d{4}$/.test(date);
    //   this.purchaseDetailFormGroup.get('expdate').setErrors(null);
    //   if (!this.dateError) {
    //     this.purchaseDetailFormGroup.get('expdate').setErrors({incorrect:  true});
    //   }
    // });

    this.purchaseDetailFormGroup.get('expdate').valueChanges.subscribe(value => {
      if (!value) return;
      const cleaned = value.replace(/[^0-9]/g, '');
      let formatted = cleaned;
  
      if (cleaned.length > 2) {
        formatted = cleaned.substring(0, 2) + '-' + cleaned.substring(2, 4);
      } else if (cleaned.length === 2 && !value.includes('-')) {
        formatted = cleaned + '-';
      }
  
      if (formatted !== value) {
        this.purchaseDetailFormGroup.get('expdate').setValue(formatted, { emitEvent: false });
      }
      console.log(/^(0?[1-9]|1[012])[\/\-](\d{2}|\d{4})$/.test(value));
      this.dateError = /^(0?[1-9]|1[012])[\/\-](\d{2}|\d{4})$/.test(value);
      this.purchaseDetailFormGroup.get('expdate').setErrors(null);
      if (!this.dateError) {
        this.purchaseDetailFormGroup.get('expdate').setErrors({incorrect:  true});
      }
    });

   this.purchaseDetailFormGroup.get('prodId').valueChanges.subscribe(data => {
      console.log("prodIdData",data);
      if(data && this.purchaseDetailFormGroup.get('prodId').dirty){
        this.showAutoCompleteData = true;
      }
      if (data && typeof data === 'object') {
        this.bindProductDetails(data);
      console.log("prodIdData1",data);
        // if (data && data.id) {
      // console.log("prodIdData2",data.id);
      // return this.inwardService.getBatchByProductId(data.id);
      // .subscribe(r => {
            //  this.batchByProductId = r;            
            // });
                }
                else {
                  return of([]);
                }
              });
            // }); 
        // this.selectedProduct = data;
        // return this.outwardService.getBatchByProductId(data.id);
        // this.purchaseDetailFormGroup.get('prodId').valueChanges.subscribe(data => {
        //   console.log(data);
        //   if (typeof data === 'object') {
        //     this.selectedProduct = data;
        //     this.bindProductDetails(data);
        //   }
        // });
    this.purchaseDetailFormGroup.get('invQty').valueChanges.subscribe(qty => {
      console.log('a------', qty, typeof qty);
      if (qty) {
        this.decimalDigitRestriction(qty, 'invQty');
        this.calculateRatio(qty, this.purchaseDetailFormGroup.get('invQtyDisc').value);
      }
    });

    this.purchaseDetailFormGroup.get('invQtyDisc').valueChanges.subscribe(qtyDisc => {
      console.log('d====', qtyDisc, typeof qtyDisc);
      if (qtyDisc) {
        this.decimalDigitRestriction(qtyDisc, 'invQtyDisc');
        this.calculateRatio(this.purchaseDetailFormGroup.get('invQty').value, qtyDisc);
      }
    });

    this.purchaseHeadFormGroup.get('inwardDate').valueChanges.subscribe(res => {
      console.log(res);
      // this.purdate = this.datePipe.transform(res['_d'], 'yyyy-MM-dd');
     
      if (typeof res === 'object') {
        this.bindSuplierDetails(res);
      }
    });

    

    this.purchaseDetailFormGroup.valueChanges.subscribe(() => {
      if (+this.purchaseDetailFormGroup.controls.purDisc.value >= 100) {
        this.purchaseDetailFormGroup.get('purDisc').setErrors({  'invalidInput': true   });
      }
    })

    this.purchaseDetailFormGroup.valueChanges.subscribe(() => {
      if (+this.purchaseDetailFormGroup.controls.purDisc1.value >= 100) {
        this.purchaseDetailFormGroup.get('purDisc1').setErrors({  'invalidInput': true   });
      }
    })

    this.purchaseDetailFormGroup.valueChanges.subscribe(() => {
      if (+this.purchaseDetailFormGroup.controls.purRate.value > +this.purchaseDetailFormGroup.controls.saleRate.value) {
        this.purchaseDetailFormGroup.get('saleRate').setErrors({ 'greatersalerate': true }, {     emitEvent: true   })
      } else {
        this.purchaseDetailFormGroup.get('saleRate').setErrors(null);
      }
    });

    // this.purchaseHeadFormGroup.valueChanges.subscribe(() => {
    //   if (+this.purchaseHeadFormGroup.controls.purRate.value > +this.purchaseHeadFormGroup.controls.dRate.value) {
    //     if (this.purchaseHeadFormGroup.get('dRate').value > 0) {
    //       this.purchaseHeadFormGroup.get('dRate').setErrors({     'greaterValue': true });
    //     } else {
    //       this.purchaseHeadFormGroup.get('dRate').setErrors(null);
    //     }
    //     //this.allowDrate === 1 && 
    //   }
    // });

    // this.purchaseHeadFormGroup.valueChanges.subscribe(() => {
    //   if (+this.purchaseHeadFormGroup.controls.sRate.value > +this.purchaseHeadFormGroup.controls.rRate.value) {
    //     if (this.purchaseHeadFormGroup.get('rRate').value > 0) {
    //       this.purchaseHeadFormGroup.get('rRate').setErrors({  'greaterValue': true   });
    //     } else {
    //       this.purchaseHeadFormGroup.get('rRate').setErrors(null);
    //     }
    //     //this.alloRrate === 1 && 
    //   }
    // });
    this.purchaseDetailFormGroup.valueChanges.subscribe(() => {
      if (this.alloRrate === 1) {
        if (+this.purchaseDetailFormGroup.controls.saleRate.value > +this.purchaseDetailFormGroup.controls.mrp.value) {
          this.purchaseDetailFormGroup.get('mrp').setErrors({ 'greaterValue': true  });
        } else { this.purchaseDetailFormGroup.get('mrp').setErrors(null);
        }
      } else {
        if (+this.purchaseDetailFormGroup.controls.saleRate.value > +this.purchaseDetailFormGroup.controls.mrp.value) {
          this.purchaseDetailFormGroup.get('mrp').setErrors({ 'greaterValue1': true  });
        } else {  this.purchaseDetailFormGroup.get('mrp').setErrors(null); }
      }

    });

    // this.PurchaseForm.valueChanges.subscribe(() => {
    //   if (new Date(this.PurchaseForm.get('invDate').value) > new Date(this.PurchaseForm.get('tranInDate').value)) {
    //     this.PurchaseForm.get('invDate').setErrors({
    //       'greaterValue': true
    //     });
    //   }
    // });


    // this.PurchaseDetalisForm.controls['othAdd'].valueChanges.subscribe(value => {
    //   this.SumOfCrAdjValue = +this.SumOfPreTaxData + +value;
    // });

    // this.PurchaseDetalisForm.controls['othDed'].valueChanges.subscribe(value => {
    //   const SubOfCrDedValue = +this.SumOfCrAdjValue - +value;
    //   this.PurchaseDetalisForm.controls['invValue'].setValue(SubOfCrDedValue);
    // });

    this.purchaseDetailFormGroup.valueChanges.subscribe((_changedObj: any) => {
      if (this.purchaseDetailFormGroup.invalid === false) {
        this.disableBtn = true;
      }
    });


    // this.subscription.add(this.service.getTabData$.subscribe(res =>{
    //   if(res != null && res){
    //     if(res[1] == 'Product Name'){
    //       this.bindProductDetails(res[0]);
    //     }else if(res[1] == 'Supplier Name'){
    //       this.accName.setValue(res[0].accName);
    //       this.bindSuplierDetails(res[0]);
    //     }else if(res[1] == 'Transport'){
    //       this.transportData = res[0];
    //     }else if(res[1] == 'Ded. Adj. Led.'){}else if(res[1] == 'Cr. Adj. Led.'){

    //     }else{

    //     }
    //   }
    // }));


  }

  getmrpvalid(){
    // if (+this.purchaseDetailFormGroup.controls.saleRate.value > +this.purchaseDetailFormGroup.controls.mrp.value) {
    //   this.purchaseDetailFormGroup.get('mrp').setErrors({ 'greaterValue1': true  });
    // } else {  this.purchaseDetailFormGroup.get('mrp').setErrors(null); }

    this.firmList = this.store.select(loadFirms);
     console.log(this.firmList, "inward")


  }

  checkForType(tax) {
    if (tax && tax.length > 0 && tax.length === 2) {
      return false;
    } else {
      return true;
    }
  }
  getTaxtesData(head : any) {
    if (head) {
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
          // Sort array based on the 'tax' field in ascending order
          this.pretaxes = head.inwardPreTaxes.sort((a, b) => a.tax - b.tax);
          this.preTaxesData = head.inwardPreTaxes.sort((a, b) => a.tax - b.tax);
          this.pretaxes.forEach(x =>{
            const taxvalue = head.inwardTaxes.filter(y => y.taxSlabId == x.taxSlabId)
            x.taxes = taxvalue;
          });
          this.inwardTaxes = head.inwardTaxes;
          this.inwardDetails = head.inwardDetails;
          console.log(this.pretaxes);
          if(!this.headFormGroup) {
            this.buildHeadFormGroupForFinalSave();
            // this.subscribeForFinalSaveChanges();
          }
          this.headFormGroup.reset({...this.head});
          this.headFormGroup.controls.invValue.patchValue(this.routeService.formatAmount(this.head.invValue));
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

  subscribeForFinalSaveChanges() {
    this.headFormGroupSubscription.add(this.headFormGroup.controls.hamaliValue.valueChanges.subscribe(hamaliValue=>
      this.updateInvValueForFinalSave()));
    this.headFormGroupSubscription.add(this.headFormGroup.controls.otherAdd.valueChanges.subscribe(crValue=>
      this.updateInvValueForFinalSave()));
    this.headFormGroupSubscription.add(this.headFormGroup.controls.otherDed.valueChanges.subscribe(debValue=>
      this.updateInvValueForFinalSave()));
  }

  buildHeadFormGroupForFinalSave() {
    let finalSaveHeadKeys:string[]=['hamaliValue','invValue','netValue','otherAdd','otherAddAccId','otherDed','otherDedAccId','remarks'];
    this.headFormGroup=this.formBuilder.group({});
    finalSaveHeadKeys.forEach(headKey=>{ 
      let validatorFn:Validators=headKey==='invValue'?Validators.required:null;
      this.headFormGroup.addControl(headKey, new FormControl(headKey==='netValue'?{value: '', disabled: true}:'',validatorFn));
    });
    this.headFormGroup.reset({...this.head});
  }


  buildPretaxesFormGroup() {
    this.invoiceTax =  this.formBuilder.array([]);
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
    return this.formBuilder.group({
      id:pretax.id,
      tranAccId:pretax.tranAccId,
      taxCategoryId:pretax.taxCategoryId,
      taxSlabId:pretax.taxSlabId,
      tax:pretax.tax,
      preTaxValue:pretax.preTaxValue,
      iPreTaxValue:this.routeService.formatAmount(pretax.iPreTaxValue.toString()),
      ledpost:pretax.ledpost,
      taxes:this.buildTaxesFormArray(pretax.taxes)
    });
  }

  buildTaxesFormArray(taxes:Tax[]): FormArray {
    let taxesFormArray=this.formBuilder.array([]);
    if(taxes.length > 0) {
      taxes.forEach(tax=>{
          if(tax.taxStakeName && tax.taxStakeName === 'IGST') {
            this.hasIGST=true;
          }
          taxesFormArray.push(this.formBuilder.group({
            id:tax.id,
            taxAccId:tax.taxAccId,
            taxSlabId:tax.taxSlabId,
            taxStakeId:tax.taxStakeId,
            taxStakeName:tax.taxStakeName,
            stakeContribution:tax.stakeContribution,
            stakeValue:tax.stakeValue,
            iStakeValue:this.routeService.formatAmount(tax.iStakeValue.toString()),
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

  showAutoComplete(name){
    if(this.showAutoCompleteData){
      return this.inwardService.getCustomProductByName(name,this.purchaseHeadFormGroup.controls.compId.value, PurchasePrefix)
    }else{
      return of([])
    }
  }

  decimalDigitRestriction(value, ctrl) {
    if (value.includes('.')) {
      const lentcount = this.firmPreferences ? this.firmPreferences.qtyDecimals : 2;
      if (value.split('.')[1].length > lentcount) {
        if (isNaN(parseFloat(value))) {
          return;
        }
        value = parseFloat(value).toFixed(lentcount);
        this.purchaseDetailFormGroup.get(ctrl).setValue(value);
      }
    }
}


groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
     const key = obj[property];
     if (!acc[key]) {
        acc[key] = [];
     }
     // Add object to list for given key's value
     acc[key].push(obj);
     return acc;
  }, {});
}
  invoiceHeadDetails(headId) {
    if (headId) {
      this.inwardService.getInwardItemsForHead(headId).subscribe(res => {
        if (res) {
          // this.invValue = res.inwardHead.netValue;
          this.roundedValue = Math.ceil(res.inwardHead.netValue);
          // this.invValue = this.roundedValue
          this.editObj = res.inwardDetails;
          console.log(this.editObj);
          this.dataSource = res.inwardDetails
          // .map(list => {
          //   list['expdate'] = this.formatDate(list.expiryDate);
          //   return list;
          // });
          // this.headObject = res.inwardDetails
          // this.purchaseHead = res.inwardDetails;

          this.getTaxtesData(res)
        }
      });
    }
  }

  bindProductDetails(data) {
    console.log(data);
    this.purchaseDetailFormGroup.patchValue({
      prodShName:  data.prodShName,
      // prodId: data.prodName,
      prodPackName:  data.prodPackName,
      mrp:  data.mrp,
      saleRate:  data.sRate,
      tax: data.tax,
      stkRate: data.stkRate,
      hsncode: data.hsncode,
      purRate: data.pRate
    });

    if(data.hsncode){
      this.purchaseDetailFormGroup.controls.hsncode.disable();
    }else{
      this.purchaseDetailFormGroup.controls.hsncode.enable();
    }
  }

  bindSuplierDetails(data) {
    this.purchaseHeadFormGroup.patchValue({
      accShName:  data.accShName,
      cityId:  data.cityName,
      accMobile:  data.accMobile,
      accGstIn: data.accGstIn,
      mode : data.accTranMode
    });
    // this.purchaseHeadFormGroup.controls.accShName.setValue(data.accShName);
    // this.accShName.setValue(data.accShName);
    // this.accGSTIn
  }

  calculateRatio(num1, num2) {
    if (num1 && num2) {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      for (let num = num2; num > 1; num--) {
          if ((num1 % num) === 0 && (num2 % num) === 0) {
              num1 = num1 / num;
              num2 = num2 / num;
          }
      }
      this.purchaseDetailFormGroup.patchValue({
        psQty:  num1,
        psQtyDisc:  num2
      });
    }
}

accShName = new FormControl({value:'',disabled:true})
  
  private buildHeadFormGroup():  FormGroup {
    return this.formBuilder.group({
      // id:  [0],
      // compId:  [''],
      // inwardHeadNo:  [''], // not necessary for post
      // inwardDate:  [this.today],
      // // tranTypeName:  [this.editObj.tranTypeName], // PURCHASE_PREFIX
      // invNo:  [''],
      // invDate:  [this.today],
      // accName:  [''],
      // accShName:  [{value:'',disabled:true}],
      // cityId:  [{value:'',disabled:true}],
      // accMobile:  [{value:'',disabled:true}],
      // accGstIn:  [''],
      // mode:  [''],
      // //  inwardStatus:  [this.editObj.inwardStatus],
      // inwardLrNo:  [''],
      // inwardLrdate:  [this.today],
      // transportId:  [''],
      // inwardWaybillNo:  [''],
      // inwardWaybillDate:  [this.today],
      // noOfCases:  [''],
      // invValue:  [''],


      inwardHeadId:  [0],
      compId:  [0],
      inwardHeadNo:  [''], // not necessary for post
      inwardDate:  [this.today,Validators.required],
      TranTypeHeadId : 1,
      // tranTypeName:  [this.editObj.tranTypeName], // PURCHASE_PREFIX
      invNo:  [''],
      invDate:  [this.today],
      accName:  [''],
      accShName:  [{value:'',disabled:true}],
      cityId:  [{value:'',disabled:true}],
      accMobile:  [{value:'',disabled:true}],
      accGstIn:  [{value:'',disabled:true}],
      mode:  [''],
      //  inwardStatus:  [this.editObj.inwardStatus],
      inwardLrNo:  [''],
      inwardLrdate:  [this.today],
      transportId:  0,
      inwardWaybillNo:  [''],
      inwardWaybillDate:  [this.today],
      noOfCases:  [0],
      taxCategoryId: 0,
      inwardStatus: 0,
      grsValue: 0,
      discValue: 0,
      disc1Value: 0,
      taxValue: 0,
      otherAdd: 0,
      otherAddDescription: "",
      otherAddAccId: 0,
      otherDed: 0,
      otherDedDescription: "",
      otherDedAccId: 0,
      taxUploadStatus: 0,
      netValue: 0,
      rndValue: 0,
      // invValue: 0,
      remarks: "",
      isDeleted: 0,
      isEligible: 0,
      postFlag: 0,
      trFirmId: 0,
      trStatus: 0,
      trUsedBy: 0,
      firmYearId: 0,
      paidAmount: 0,
      adjAmount: 0,
      isEditable: 0,
      isDeletable: 0,
      activeAt: [this.today],
    });

  //   return this.formBuilder.group({ 
  //     inwardHeadId: [0],
  // inwardDate: [this.today],
  // // 2023-05-16T13:15:40.001Z
  // TranTypeHeadId: [0],
  // inwardHeadNo: ["PUR"],
  //   // accName:  [''],
  //     // accShName:  [{value:'',disabled:true}],
  // compId: [0],
  // invNo: [""],
  // invDate: [this.today],
  // // 2023-05-16T13:15:40.001Z
  // accId: [0],
  // mode: [],
  // taxCategoryId: [0],
  // inwardStatus: [0],
  // inwardLrNo: [""],
  // inwardLrdate: [""],
  // transportId: [0],
  // inwardWaybillNo: [""],
  // inwardWaybillDate: [""],
  // noOfCases: [0],
  // grsValue: [0],
  // discValue: [0],
  // disc1Value: [0],
  // taxValue: [0],
  // otherAdd: [0],
  // otherAddDescription: [""],
  // otherAddAccId: [0],
  // otherDed: [0],
  // otherDedDescription: [""],
  // otherDedAccId: [0],
  // taxUploadStatus: [0],
  // netValue: [0],
  // rndValue: [0],
  // invValue: [0],
  // remarks: [""],
  // isDeleted: [0],
  // isEligible: [0],
  // postFlag: [0],
  // firmId: [0],
  // trFirmId: [0],
  // trStatus: [0],
  // trUsedBy: [0],
  // activeAt: [this.today],
  // firmYearId: [0]
  //   })

    // createdBy: 0,
    // createdOn: "",
    // modifiedBy: 0,
    // modifiedOn: "",

  }

  headpatch(data){
    console.log(data);
    this.purchaseHeadFormGroup.controls.inwardHeadId.setValue(data.inwardHeadId);
    this.purchaseHeadFormGroup.controls.compId.setValue(data.compId);
    this.purchaseHeadFormGroup.controls.inwardHeadNo.setValue(data.inwardHeadNo);
    this.purchaseHeadFormGroup.controls.inwardDate.setValue(data.inwardDate);
    this.purchaseHeadFormGroup.controls.inwardDate.disable()
    this.purchaseHeadFormGroup.controls.invNo.setValue(data.invNo);
    this.purchaseHeadFormGroup.controls.invDate.setValue(data.invDate);
    this.accName.setValue(data.accName);
    // if(data.account.city){
    //   this.purchaseHeadFormGroup.controls.cityId.setValue(data.account.city.name);
    // }
    // this.purchaseHeadFormGroup.controls.accMobile.setValue(data.account.mobile);
    // this.purchaseHeadFormGroup.controls.accGstIn.setValue(data.accGstIn);
    setTimeout(() => {
      this.purchaseHeadFormGroup.controls.mode.setValue(data.mode == 1 ? 'Cash' : 'Credit');
    }, 1000);
   
    this.purchaseHeadFormGroup.controls.inwardLrNo.setValue(data.inwardLrNo);
    this.purchaseHeadFormGroup.controls.inwardWaybillNo.setValue(data.inwardWaybillNo);
    this.purchaseHeadFormGroup.controls.noOfCases.setValue(data.noOfCases);
    // this.purchaseHeadFormGroup.controls.invValue.setValue(data.invValue ? data.invValue.toFixed(2) : 0);
    // this.transportName.setValue(data.transportId);
    
    this.accShName.setValue(data.accShName);
    // this.purchaseHeadFormGroup.controls.id.setValue(data.id);
  }

  private buildDetailFormGroup():  FormGroup {
        return this.formBuilder.group({
      prodId:  [''],
      prodShName:  [{value:'', disabled:true}],
      prodPackName:  [{value:'', disabled:true}],
      hsncode:  [''],
      batch:  [''],
      expdate:  [''],
      invQty:  [''],
      invQtyDisc:  [''],
      purRate:  [''],
      actRate:  [''],
      saleRate:  [''],
      retailRate:  [''],
      mrp:  [''],
      stkRate:  [''],
      psQty:  [{value:'', disabled:true}],
      psQtyDisc:  [{value:'', disabled:true}],
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
      inwardTranStatus:  [''],
      inwardQtyStatus:  [''],
    });
  }

  getAllTransportTypes() {
    this.inwardService.getAllTransportTypes().subscribe(
      data => {
        this.transportTypes = data;
      }
    );
  }

  payloadHead(data) {

    const payload = {
      accId:this.purchaseHeadFormGroup.controls.accId.value,
      company: {
        inwardHeadId: this.purchaseHeadFormGroup.controls.compId.value.inwardHeadId
      },
      inwardDate:  this.formatDate(lodash.get(data, 'inwardDate')),
      tranTypeName: lodash.get(this.hardCodeData.head, 'tranTypeName'),
      invNo: lodash.get(data, 'invNo'),
      invDate: lodash.get(data, 'invDate'),
       account: this.purchaseHeadFormGroup.get('accName').value,
      // },
      mode: lodash.get(data, 'mode'),
      taxCategoryId: lodash.get(data, 'taxCategoryId'),
      inwardLrNo: lodash.get(data, 'inwardLrNo'),
      inwardLrdate: lodash.get(data, 'inwardLrdate'),
      transport: {id:lodash.get(data, 'transportId')},
      inwardWaybillNo: lodash.get(data, 'inwardWaybillNo'),
      inwardWaybillDate: lodash.get(data, 'inwardWaybillDate'),
      noOfCases: lodash.get(data, 'noOfCases'),
      isEligible: lodash.get(this.hardCodeData.head, 'isEligible')
    };
    return payload;
  }

  onSaveOrUpdatePurchaseHead(): void {
    // if(this.tranIndate>=this.datePipe.transform(this.purchaseHeadFormGroup.controls.inwardDate.value, 'yyyy-MM-dd')){
      console.log(this.accName);
      const payload = this.purchaseHeadFormGroup.getRawValue();
      payload.taxcategoryId = this.accName.value.taxcategoryId;
      // payload.taxcategoryId =1;
      // payload.TranTypeHeadId  =1 ;
      payload.transportId =this.transportName.value.accId;
      payload.cityId = this.accName.value.cityPinId ? this.accName.value.cityPinId : 0;
      payload.accId = this.accName.value.accId;
      payload.mode = payload.mode.code ? payload.mode.code == 'Cash' ? 1 : 2 :2;
      payload.inwardLrdate  = this.datePipe.transform(payload.inwardLrdate, 'yyyy-MM-dd');
      payload.inwardDate  = this.datePipe.transform(payload.inwardDate, 'yyyy-MM-dd');
      payload.inwardWaybillDate  = this.datePipe.transform(payload.inwardWaybillDate, 'yyyy-MM-dd');
      payload.activeAt  = this.datePipe.transform(payload.activeAt, 'yyyy-MM-dd');
      payload.invDate = this.datePipe.transform(payload.invDate, 'yyyy-MM-dd');
      console.log(payload);
      this.inwardService.postPurchaseHead(payload,true).subscribe(data =>{
        // if(ResponseUtils.isStatus200(data)){
          // if(ResponseUtils.isStatus200(data)){
            console.log(data);
            this.showTable = true;
            this.purchaseHeadBtnText = 'Update';
            if(payload.inwardHeadId == 0){
              this.purchaseHeadFormGroup.controls.inwardHeadId.setValue(data);
              this.invoiceHeadId = data;
              this.showPurchaseDetailTemplate('Add');
              this.additemflag = true;
            }
            this.invoiceHeadDetails(this.invoiceHeadId);
      }  
      );
    // }
    // else{
    //   AppMessageUtils.errorMessage('PUR Date Not lessthan today date');
    // }
  }

  prepareObj(id, prop?) {
    if (!lodash.isEmpty(prop) && id) {
      const obj = {}; 
      obj[prop] = id;
      return obj;
    } else if (id) {
      return {id};
    }
    return '';
  }

  reset() {
    this.accName.setValue('');
    this.purchaseHeadBtnText = 'Save';
    this.purchaseHeadFormGroup.reset();
  }

  formatDate(date:  string) {
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


  showPurchaseDetailTemplate(data):  void {
    let dialogInputs:  DialogData = {} as DialogData;
    if(data === 'Add'){
      this.inwardDetailId = 0;
      this.detailburron = 'Save & Continue';
      this.detailsave = 'Save & Close';
      dialogInputs.title = 'Add Item';
      this.purchaseDetailFormGroup.reset();
    }else{
      this.detailburron = 'Update & Continue';
      this.detailsave = 'Update & Close';
      dialogInputs.title = 'Edit Item';
    }
    this.dialogService.closeAllDialogues();
    this.showAutoCompleteData = false;
    dialogInputs.dialogClass = DialogClass.MEDIUM;
    dialogInputs.closeBtnLabel = 'Close';
    dialogInputs.templateRef = () => this.purchaseDetailTemplate;
    dialogInputs.buttonTemplates = [({ templateRef:  this.purchaseDetailButtonTemplate } as DialogButtonTemplate)]
    this.dialogService.showDialogue(dialogInputs, { disableClose:  true });
  }

  preparePayload(data , flag) {
    // console.log(data);
    // console.log(this.purchaseHead);
    const d = data.expdate? data.expdate.split('-'):"";
    var date = `01-${d[0]}-20${d[1]}`;
    let inHdate = this.purchaseHead ? this.purchaseHead.inwardDate.split("T") : this.purchaseHeadFormGroup.controls.inwardDate.value.split("T")
    // console.log(date);
  const payload = {
    //  id:this.purchaseHeadFormGroup.controls.id.value,
    inwardDetailId:this.inwardDetailId ? this.inwardDetailId : 0,
    inwardHeadId: this.purchaseHeadFormGroup.controls.inwardHeadId.value,
    inwardHeadDate: inHdate[0],
    outwardDetailId:0,
    outwardHeadId:0,
    prodId: typeof(data.prodId.prodId) === "number" ?  +data.prodId.prodId : this.updateDetailData.prodId,
    hsncode: this.purchaseDetailFormGroup.controls.hsncode.value ? this.purchaseDetailFormGroup.controls.hsncode.value.toString() :'0',
    hsnId: data.prodId ? data.prodId.hsnId : 0,
    batch: data.batch ? data.batch : '' ,
    isOnlySave: flag ,
    // expiryDate: data.expdate ? new Date(date) : '',
    expiryDate: data.expdate ? data.expdate : '',
    invQty:  data.invQty ? +data.invQty :0,
    invQtyDisc: data.invQtyDisc ? +data.invQtyDisc : 0,
    recdQty:data.invQty ? +data.invQty :0,
    recdQyDisc:data.invQtyDisc ? +data.invQtyDisc : 0,
    inwardRate:0,
    purRate: data.purRate ? +data.purRate : 0,
    actRate: data.actRate ? +data.actRate:0,
    saleRate: data.saleRate ? +data.saleRate : 0,
    retailRate: data.retailRate ? +data.retailRate : 0,
    stkRate: data.prodId ? data.prodId.stkRate : 0,
    mrp: data.mrp ? +data.mrp : 0,
    psQty: this.psQty ? this.psQty : 0,
    psQtyDisc: this.psQtyDisc ? this.psQtyDisc : 0,
    purDiscType: this.firmPreferences.discTypeOption != 3 ? this.firmPreferences.discTypeOption : data.purDiscType ? data.purDiscType : 0,
    purDisc: data.purDisc ? +data.purDisc : 0,
    purdiscType1: this.firmPreferences.discTypeOption != 3 ? this.firmPreferences.discTypeOption : data.purdiscType1 ? data.purdiscType1 : 0,
    purDiscType1Calc: this.firmPreferences.allowDisc2 == 1 ? 1 : 0,
    purDisc1: data.purDisc1 ? data.purDisc1 : 0,
    mfgId: data.mfgId ? data.mfgId : 0,
    othCharges:0,
    inwardQtyStatus: data.inwardTranStatus ? data.inwardTranStatus : 0,
    taxSlabId: data.prodId.taxSlabId ? +data.prodId.taxSlabId : this.updateDetailData.taxSlabId,
    tax: data.prodId ? data.prodId.tax : 0,
    grsValue:0,
    discValue: data.discValue ? data.discValue : 0,
    discValue1: data.discValue1 ? data.discValue1 : 0,
    taxValue: data.prodId ? data.prodId.tax : 0,
    preTaxValue:0,
    issQty:0,
    issQtyDisc:0,
    retQty:0,
    retQtyDisc:0,
    isDeleted:0,
    drFlag: lodash.get(this.hardCodeData.productData, 'drFlag'),
    crFlag: lodash.get(this.hardCodeData.productData, 'crFlag'),
    firmYearId:0
  };
  return payload;
  }

  onSaveOrUpdatePurchaseDetail(flag):  void {
    const postPurchaseDetailObj = this.preparePayload(this.purchaseDetailFormGroup.value , flag);
    // const postPurchaseDetailObj = this.purchaseDetailFormGroup.getRawValue();
    console.log(postPurchaseDetailObj);
    this.inwardService.postPurchaseDetail(postPurchaseDetailObj).subscribe((data) => {
      console.log(data);
      if(data == 1 && flag){
        this.purchaseDetailFormGroup.reset();
      }else if(data && !flag){
        this.purchaseDetailFormGroup.reset();
        this.dialogService.closeAllDialogues();
      }
      if(postPurchaseDetailObj.inwardDetailId){
        AppMessageUtils.successMessage('Details Updated Successfully', this.formAlertId);
        const productNameElement = document.getElementById('pProductName');

          if (productNameElement) {
            const focusableElement = productNameElement.querySelector('input');

            if (focusableElement) {
              // (focusableElement as HTMLElement).focus();
              var x:any = (focusableElement as HTMLElement);
              // x.value = " "
              x.focus();
            }
              
          }
      }
      else{
        AppMessageUtils.successMessage('Details Saved Successfully', this.formAlertId);
        this.purchaseDetailFormGroup.reset();
        const productNameElement = document.getElementById('pProductName');

          if (productNameElement) {
            const focusableElement = productNameElement.querySelector('input');

            if (focusableElement) {
              // (focusableElement as HTMLElement).focus();
              var x:any = (focusableElement as HTMLElement);
              // x.value = " "
              x.focus();
            }
              
          }
      }

      this.invoiceHeadDetails(this.invoiceHeadId);

      


      // if(ResponseUtils.isStatus200(data)){
      //   this.purchaseDetailFormGroup.reset();
      //   // this.invoiceHeadDetails(this.headObject.id)
      //   this.getTaxtesData(data)
      //   //  this.router.navigate(['/purchases'])
      // } else {
      //   ResponseUtils.isStatus409(data) ?
      //   AppMessageUtils.warningMessage('Purchase Entry Detail already exists', this.formAlertId) :  ''
      // }
    });
  }

  resetDialog() {
    this.purchaseDetailFormGroup.reset();
  }

  addOrEdit(data) {
    console.log('data product----', data);
    this.inwardDetailId = data.inwardDetailId;
    this.updateDetailData = data;
    // this.detailburron = 'UpDate';
    this.showPurchaseDetailTemplate('Update');
    //const inwardTranStatus = dropdowns.inwardTranStatus.find(type => type.code === data.inwardQtyStatus);
    const discType =  dropdowns.discountType.find(type => type.code === data.purDiscType);
    this.purchaseDetailFormGroup.controls.prodId.patchValue(lodash.get(data, 'prodName'));
    setTimeout(() => {
      this.purchaseDetailFormGroup.patchValue({
        prodShName :  lodash.get(data, 'prodShName'),
        prodPackName:lodash.get(data, 'prodPackName'),
       // prodId: data.product,
        batch  :  lodash.get(data, 'batch'),
        expdate:  lodash.get(data, 'expiryDate'),
        invQty:  this.routeService.formatQnty(data.invQty),
        invQtyDisc: this.routeService.formatQnty(data.invQtyDisc),
        psQty:  lodash.get(data, 'psQty'),
        psQtyDisc:  lodash.get(data, 'psQtyDisc'),
        inwardTranStatus:  lodash.get(data,'inwardQtyStatus'),
        purRate: this.routeService.formatAmount(data.purRate),
        mfgId:  lodash.get(data, 'mfgId'),
        stkRate:  lodash.get(data, 'stkRate'),
        hsncode:  lodash.get(data, 'hsncode'),
        tax:  lodash.get(data, 'tax'),
        purDisc:  lodash.get(data, 'purDisc'),
        purDisc1:  lodash.get(data, 'purDisc1'),
        purDiscType: lodash.get(data, 'purDiscType'),
        purdiscType1: lodash.get(data, 'purdiscType1'),
        saleRate:  this.routeService.formatAmount(data.saleRate),
        mrp: this.routeService.formatAmount(data.mrp)
       });
 
       if(data.hsncode){
         this.purchaseDetailFormGroup.controls.hsncode.disable();
       }
    }, 1000);
    this.purchaseDetailFormGroup.markAllAsTouched();
  
  }

  isDeleteDisabled(data) {
    console.log(data);
    return data.deletedFlag;
  }
  deleteTemplate() {
    return this.deletePurchaseHeadTemplate;
  }

  refresh():  void {
    this.invoiceHeadDetails(this.invoiceHeadId);
  }


  delete(item?:  any) {
    this.inwardService.deletePurchaseItem(item.inwardDetailId).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.refresh() : 
        ResponseUtils.isStatus404(data) ?
          AppMessageUtils.warningMessage('Purchase Head already deleted') :  '');
  }

  updateInvValueForFinalSave() {
    let inputTaxValues:number=0;
    let pretaxes=this.invoiceTax.getRawValue() as Pretax[];
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
    let finalinv = Number(inputTaxValues)+Number(debValue)-Number(crValue)+(Number(hamaliValue));
    this.headFormGroup.controls.invValue.patchValue(this.routeService.formatAmount(finalinv));
    this.headFormGroup.controls.netValue.patchValue(Number(netValue)+Number(debValue)-Number(crValue)+(Number(hamaliValue)));

  }

  resetFinalSave() {
    this.headFormGroup.reset({...this.head},{emitEvent:false});
    this.buildPretaxesFormGroup();
  }

  onDateSelected(data){
    if(this.firmPreferences.allowBackDatePurchase == 0){
      this.purdate = this.datePipe.transform(this.purchaseHeadFormGroup.controls.inwardDate.value, 'yyyy-MM-dd');
      if(this.purdate && this.tranIndate){
        if(this.purdate >= this.tranIndate){
          console.log(this.purdate)
        }else{
          this.purchaseHeadFormGroup.controls.inwardDate.setErrors({});
          AppMessageUtils.errorMessage("PUR Date should not be earlier than today's date.",this.formAlertId);
          // this.purchaseHeadFormGroup.controls.inwardDate.setValue('');
        }
      }
    }
    else if(this.firmPreferences.allowBackDatePurchase == 1){
      console.log(this.purchaseHeadFormGroup.controls.inwardDate.value, 'yyyy-MM-dd')
    }
    console.log(data.target.value);
  }
  // onDateChange(event: MatDatepickerInputEvent<Date>) {
  //   const selectedDate = event.value;
  //   console.log("Selected date: ", selectedDate);
  //   this.purdate = this.datePipe.transform(this.purchaseHeadFormGroup.controls.inwardDate.value, 'yyyy-MM-dd');
  //   if(this.purdate && this.tranIndate){
  //     if(this.purdate >= this.tranIndate){
  //       console.log(this.purdate)
  //     }else{
  //       AppMessageUtils.errorMessage('PUR Date Not lessthan today date',this.formAlertId);
  //       this.purchaseHeadFormGroup.controls.inwardDate.setValue('');
  //     }
  //   }
  //   // Handle the selected date here
  // }

  expdate(event) {
    const str = event.substring(0, event.length - 3);
    var dateObj = new Date();
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    var year = ('0' + dateObj.getFullYear()).slice(-2);
    var fid = (event).slice(-2);
    const mon = event.slice(0, 2)
    if (event.length < 5) {
       this.purchaseDetailFormGroup.get('expdate').setErrors({'greaterValue1': true})
    } else {
      if (year > fid) { this.purchaseDetailFormGroup.get('expdate').setErrors({   'greaterValue': true })
      } else if (str > 12) {
        this.purchaseDetailFormGroup.get('expdate').setErrors({
          'greaterValue1': true
        })
      } else if (year === fid && mon < month) {
        this.purchaseDetailFormGroup.get('expdate').setErrors({  'greaterValue1': true })
      } else {
        this.purchaseDetailFormGroup.get('expdate').setErrors(null)
        var output = [event.slice(0, 3), 20, event.slice(3)].join('');
        const data = '01' + '-' + output;
    //    this.expdatefiled = this.convert1(data);
    // this.expdatefiled =  this.datePipe.transform(this.expdatefiled, 'yyyy-MM-dd');
      }
    }
  }


  qtyvalue(event) {
    this.purchaseDetailFormGroup.get('invQty').value;
    this.purchaseDetailFormGroup.get('invQtyDisc').value;
    const data =  this.validationQty ? +this.validationQty.issQty : 0;
    const data1 = this.validationQty ? +this.validationQty.issQtyFree : 0;
    this.qtyvalue1 = data
    if (event === "invQty") {
      if (data > +this.purchaseDetailFormGroup.get('invQty').value) {
        this.purchaseDetailFormGroup.get('invQty').setErrors({
          'incorrecterror': true
        }, {
          emitEvent: true
        });

      } else {
        this.purchaseDetailFormGroup.get('invQty').setErrors(null)
      }
    } else if (event === "invQtyDisc") {
      this.qtyandfree = data1
      if (data1 > +this.purchaseDetailFormGroup.get('invQtyDisc').value) {
        this.purchaseDetailFormGroup.get('invQtyDisc').setErrors({
          'incorrecterror1': true
        }, {
          emitEvent: true
        });

      } else {
        this.purchaseDetailFormGroup.get('invQtyDisc').setErrors(null);
      }
    }
  }

  schQty() {
    const schqty = this.purchaseDetailFormGroup.get('psQty').value
    if (schqty === undefined || schqty === null || schqty === 0 || schqty === '0' || schqty === '') {
      this.purchaseDetailFormGroup.get('invQtyDisc').disable();
      this.purchaseDetailFormGroup.get('invQtyDisc').reset();
    } else {
      this.purchaseDetailFormGroup.get('invQtyDisc').enable();
    }
  }

  // isInteger(event) {
  //   var ctl = document.getElementById('invo1');
  //   var startPos = ctl['selectionStart'];
  //   if (startPos == 0 && String.fromCharCode(event.which) == '0') {
  //     return false
  //   }
  // }

  onChangeInvNo(value) {
    if(value === null || value === undefined || value === "" ) {
      this.purchaseHeadFormGroup.controls.invNo.setValidators(Validators.required);
    }else {
      this.getInvoiceNoValidation();
    }
  }

  getInvoiceNoValidation() {
    let isupdate:boolean;
    this.invNumber = this.purchaseHeadFormGroup.controls.invNo.value;
    this.customAccount  = this.accName.value.accId
    if(this.purchaseHeadBtnText == "Save"){
      isupdate = false
    }
    else{
      isupdate = true
    }
    if(this.invNumber !== null && this.customAccount !== null || this.invNumber !== '' && this.customAccount !== '') {
      const payload ={
        Inoice: this.purchaseHeadFormGroup.controls.invNo.value.toString(),
        accId:this.accName.value.accId,
        tranTypeHeadId:1,
        isUpdate:isupdate
      }
      this.masterService.getallvalidinvoice(payload).subscribe(data =>{
        if(data){
          console.log(data);
          if(data.metaData != ""){
            this.purchaseHeadFormGroup.controls.invNo.setErrors({'invAlready': true}, {emitEvent: true})
            AppMessageUtils.errorMessage(data.metaData,this.formAlertId);
          }else{
            this.purchaseHeadFormGroup.get('invNo').setErrors(null);
          }
        } else {
          this.purchaseHeadFormGroup.get('invNo').setErrors(null);
        }
      });
      // this.purchaseService.getInvoiceValue(this.invNumber, this.customAccount, this.prefix, this.updatetranInauto || 0).subscribe(
      //   result => {
      //     this.invResult = result;
      //   },(error) => {
      //     this.commonErrorDisplay(error);
      //     this.PurchaseForm.controls.invNo.setErrors({'invAlready': true}, {emitEvent: true})
      //   })
    }
  }
psQty:any;
psQtyDisc:any;
  calculatepsqty(){
    let invqty = Number(this.purchaseDetailFormGroup.get('invQty').value);
    let invqtyDisc = Number(this.purchaseDetailFormGroup.get('invQtyDisc').value);
    // let psqtydisc:any
    if(invqtyDisc!=0){
      this.psQty  = Number(invqty/invqtyDisc);
      if (((this.psQty*invqtyDisc)/invqty)!=0){ 
        this.psQtyDisc = Number((this.psQty*invqtyDisc)/invqty) 
      //  this.purchaseDetailFormGroup.get('psQtyDisc').setValue(this.psQtyDisc);
      }else{
        this.psQty=Number(this.psQty+1);
        this.psQtyDisc = Number((this.psQty*invqtyDisc)/(invqty+1));
      }
    }
  }

  purdatefocusout(){

    if(this.firmPreferences != null && this.firmPreferences != undefined && this.firmPreferences != ""){

    if(this.firmPreferences.allowBackDatePurchase == 0){
      this.purdate = this.datePipe.transform(this.purchaseHeadFormGroup.controls.inwardDate.value, 'yyyy-MM-dd');
      if(this.purdate && this.tranIndate){
        if(this.purdate >= this.tranIndate){
          console.log(this.purdate)
        }else{
          this.purchaseHeadFormGroup.controls.inwardDate.setErrors({});
          AppMessageUtils.errorMessage("PUR Date should not be earlier than today's date.",this.formAlertId);
          // this.purchaseHeadFormGroup.controls.inwardDate.setValue('');
        }
      }
    }
    else if(this.firmPreferences.allowBackDatePurchase == 1){
      console.log(this.purchaseHeadFormGroup.controls.inwardDate.value, 'yyyy-MM-dd')
    }
  }
  }
  
  doFinalSave() {
    this.headFormGroup.controls.invValue.setValue(this.roundedValue);
    let headData = this.headFormGroup.getRawValue();
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
      AppMessageUtils.successMessage('Saved Successfully', this.formAlertId);
      this.router.navigate(['pharma/inward/purchases'])
    }
    );
  }

  validateFloatKeyPress(el) {
    var v = parseFloat(el.value);
    // el.value = (isNaN(v)) ? '' : v.toFixed(2);
    el.value = (Math.round(v * 100) / 100).toFixed(2);
}

  djadjInput(val){
    if(val == 0){
      // this.otherDedAccId.disable();
    }else{
      // this.otherDedAccId.enable();
    }
  }

  
  cjadjInput(val){
    if(val == 0){
      this.otherAddAccId.disable();
    }else{
      this.otherAddAccId.enable();
    }
  }

  getProductPreviousData(){
    var prodId = this.purchaseDetailFormGroup.controls.prodId.value.prodId;
    var accid = this.accName.value.accId?this.accName.value.accId:192;
    var inwardDate = this.purchaseHeadFormGroup.controls.inwardDate.value;
    this.inwardService.productPURHistory(accid, prodId, inwardDate).subscribe(res =>{
      if(res){
        this.displayProd = true;
        // this.purchaseHist = res;
        this.historydataSource = res.map(list => {
          list['expdate'] = this.formatDate(list.expiryDate);
          return list;
        });
        this.showPURHistoryTemplate();
      }
    })
  }

  showPURHistoryTemplate():  void {
    let dialogInputs:  DialogData = {} as DialogData;
    dialogInputs.title = 'PUR History';
    // this.dialogService.closeAllDialogues();
    dialogInputs.dialogClass = DialogClass.MEDIUM;
    dialogInputs.closeBtnLabel = 'Close';
    dialogInputs.templateRef = () => this.purhistory;
    // dialogInputs.buttonTemplates = [({ templateRef:  this.purchaseDetailButtonTemplate } as DialogButtonTemplate)]
    this.dailogData =  this.dialogService.showDialogue(dialogInputs, { disableClose:  true });
  }

  selectProduct(data){
   console.log(data);
   this.dailogData.close();
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
   this.deletehead(this.invoiceHeadId)
   this.reset();
    // Here, yout can add your delete functionality
    console.log("Item deleted!");
    AppMessageUtils.successMessage('Order Head Deleted Successfully!')
    // Close the popup after deletion
    this.closePopup();
  }

   deletehead(purchaseHead?: any) {
      this.inwardService.deletePurchaseHead(purchaseHead).subscribe(data =>
        ResponseUtils.isStatus200(data) ? this.refresh() :
          ResponseUtils.isStatus404(data) ?
            AppMessageUtils.warningMessage("Purchase Head already deleted") : '');
    }

    expdt(val:any){
      setTimeout(() => {
        let v = val.value.replace(/[^0-9]/g, '');
        if (v.length > 2) {
            v = v.substring(0, 2) + '-' + v.substring(2, 4);
        } else if (v.length === 2) {
            v = v + '-';
        } else {
            v = v;
        }
      }, 900);
    }

}
