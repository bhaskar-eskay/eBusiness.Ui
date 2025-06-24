import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger, MatSelect } from '@angular/material';
import { Router } from '@angular/router';
import { ReplaySubject, Subject, Subscription, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AutoCompleteDefinition, OptionsTableDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';
import { ProdMasterTypeEnum } from 'src/app/shared/http-services/masters/masters-http.service';
import { CompanyGroups, CompanyMaster, custProducts, ProdMasterType, ProductPack } from 'src/app/shared/models/master-models';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';

import * as dropdowns from '../../../../_files/dropdowns.json';
import { MasterService } from '../../master.service';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';

@Component({
  selector: 'app-custom-products',
  templateUrl: './custom-products.component.html',
  styleUrls: ['./custom-products.component.scss', '../../master.component.scss']
})
export class CustomProductsComponent implements OnInit {

  categoryType = ProdMasterTypeEnum.PROD_CAT;
  combinationType = ProdMasterTypeEnum.PROD_COMB;
  locationType = ProdMasterTypeEnum.PROD_LOCATION;
  prodType = ProdMasterTypeEnum.PROD_TYPE;
  groupType = ProdMasterTypeEnum.PROD_GROUP;
  taxSlabType = 1;
  public dropdownData: { name: string, code: any }[] = dropdowns.productValue;
  yesnoData: any[] = [];
  masterData: ProdMasterType[];
  packdata: ProductPack[];
  editObj: custProducts = {} as custProducts;
  formGroup: FormGroup;
  formAlertId: 'custProdAlertId';
  dataList: custProducts[];
  compGroupData: CompanyGroups;
  compNameData: CompanyMaster[];
  buttonName: string = 'Save';
  prodtypeata: any;
  protected _onDestroy = new Subject<void>();
  prodpackdata: any;
  Companydata: CompanyMaster[];
  prodgroupdata: any;
  prodCategorydata: any;
  prodCombdata: any;
  prodLocationdata: any;
  TaSlabdata: any;
  TaxSlabdata: any;
  hsnList: any;
  @ViewChild('citiesfocus', {static:false}) citiesfocus: ElementRef;
  @ViewChild("autoCompletesch", {static:false}) autocomplete: MatAutocomplete;

  hsnCodeAutoCompltDef: AutoCompleteDefinition = {
    label: 'HSN Code',
    isRequired: true,
    isStaticType: true,
    dataSourceFn:(name)=>  this.masterService.gethsnmasters(name),
    keyString: 'hsncode',
    validators: [Validators.required],
    minCount: 2
  };


  hsnCodeTableOpt: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: 'HSN Code', value: (obj) => obj['hsncode'] ? obj['hsncode'] : '', fxFlex: 50,fxFlex1:50, isKeyColumn: true }
    ]
  };

  hsncode = new FormControl('');
  compId: any;
  
  constructor(private masterService: MasterService, private formBuilder: FormBuilder, private router: Router, 
    private service:OutWardHttpService
  ) { }



  ngOnInit() {
    this.compGroupName.disable();
    this.masterService.updateCustomProduct$
      .subscribe(arg => { 
        if(arg && Object.keys(arg).length > 0) {
          this.editObj = arg;
          if(this.editObj.hsnId){
            this.hsnList = [{hsnId: this.editObj.hsnId ,hsncode: this.editObj.hsncode }] 
          }
          console.log(this.editObj);
          this.CompanyTabMultiFilterCtrl.setValue(arg.compName);
          this.compId = this.editObj.compId;
          this.buttonName = 'Update';
        }
      });
    this.formGroup = this.buildFormGroup();
    this.yesnoData = this.dropdownData;
    this.getprodtype();
    this.getAllProdPack();
    this.getAllCompMaster();
    this.getprodgroups();
    this.getprodCategory();
    this.getprodComb();
    this.getprodLocation();
    this.getTaSlab();

     // listen for search field value changes  Bank
     this.ProdTypeTabMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterProdTypesMulti();
     });

     this.TaxSlabTabMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterTaxSlabsMulti();
     });


     this.ProdLocationTabMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterProdLocationsMulti();
     });

     this.ProdCategoryTabMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterProdCategorysMulti();
     });


     

     this.ProdGroupTabMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterProdGroupsMulti();
     });


     this.ProdPackTabMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterProdPacksMulti();
     });

     this.ProdCombTabMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterProdCombsMulti();
     });


     this.CompanyTabMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterCompanyMulti();
     });

     this.CompanyTabMultiFilterCtrl.valueChanges.subscribe(res => {
      if (typeof res === 'object') {
        this.bindData(res);
      }
    });
    this.formGroup.get('hsncode').valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() =>{
      this.gethsnvalues(this.formGroup.controls.hsncode.value);
    })
    this.formGroup.get('hsncode').valueChanges.subscribe(res => {
      if (typeof res === 'object') {
        // this.compGroupName.setValue(res.compGroupName);
      }
    });

    // this.subscription.add(this.service.getTabData$.subscribe(res=>{
    //   if(res != null && res){
    //     if(res[1] == 'Company'){
    //       this.CompanyTabMultiFilterCtrl.setValue(res[0].compName);
    //     this.bindData(res[0]);
    //     }else if(res[1] == 'HSN Code'){
    //       this.formGroup.controls.hsncode.setValue(res[0].hsncode);
    //     }else if(res[1] == ''){}
    //   }
    // }));

  }

  public schMapper = key => {
    if(key){
      const selection = this.Companydata.find(dist => dist.compId === key);
      if (selection) {
        return selection.compName;
      }
    }
  };
    // hsn auto complete
    showhsn :boolean = false;
    @ViewChild('hsnautoCompleteInput', {static:false, read: MatAutocompleteTrigger }) hsnautoCompleteInput: MatAutocompleteTrigger;
    
    gethsnvalues(value) :any {
      if (value.length >= 8) {
        this.showhsn = true;
        this.masterService.gethsnmasters(value)
          .pipe(takeUntil(this._onDestroy))
          .subscribe(
            ListList => {
              if (ListList.length === 0) {
                this.showhsn = false;
                this.hsnList = [];
                this.formGroup.get('hsnId').setErrors(
                  {
                    incorrect: true
                  },
                  {
                    emitEvent: true
                  }
                );
              } else {
                this.hsnList = ListList;
                this.hsnCodeList.next(this.hsnList.slice());
              }
              return this.hsnList;
            }, (error) => {
              this.hsnList = [];
              // AppMessageUtils.warningMessage('No Data Found') 
            }
          );
          this.formGroup.get('hsnId').setErrors(
          {
            incorrect: true
          },
          {
            emitEvent: true
          }
        );
      } else {
        this.showhsn = false;
        this.hsnList = [];
      }
    }


    public hsnMapper = key => {
      if(key){
        const selection = this.hsnList.find(dist => dist.hsnId === key);
        if (selection) {
          return selection.hsncode;
        }
      }
    };

    subscription:Subscription=new Subscription();
  
    hsnTab(event: KeyboardEvent){
      
      if (event.keyCode === 9) {
        const cityTab:any = this.hsnList.filter(x=> x.hsnId == this.hsnautoCompleteInput.activeOption.value);
        if(cityTab){
          this.formGroup.controls.hsnId.setValue(cityTab.hsnId);
          this.formGroup.controls.hsncode.setValue(cityTab.hsncode);
        }
      } else if(event.keyCode === 13){
        const cityTab:any = this.hsnList.filter(x=> x.hsnId == this.formGroup.controls.hsnId.value);
        if(cityTab){
          this.formGroup.controls.hsncode.setValue(cityTab.hsncode);
        }
      }
    }

    clickhsn(value){
      const cityTab:any = this.hsnList.filter(x=> x.hsnId == value);
        if(cityTab){
          this.formGroup.controls.hsncode.setValue(cityTab.hsncode);
        }
    }
    // end autocompkete

  getprodtype(){
    this.masterService.getAllProdMasterType(this.prodType).subscribe(x=>{
      if(x){
        this.prodtypeata = x;
        this.filteredProdTypeMulti.next(this.prodtypeata.slice());
      }
    })
  }

  getprodLocation(){
    this.masterService.getAllProdMasterType(this.locationType).subscribe(x=>{
      if(x){
        this.prodLocationdata = x;
        this.filteredProdLocationMulti.next(this.prodLocationdata.slice());
      }
    })
  }

  getprodgroups(){
    this.masterService.getAllProdMasterType(this.groupType).subscribe(x=>{
      if(x){
        this.prodgroupdata = x;
        this.filteredProdGroupMulti.next(this.prodgroupdata.slice());
      }
    })
  }


  getprodCategory(){
    this.masterService.getAllProdMasterType(this.categoryType).subscribe(x=>{
      if(x){
        this.prodCategorydata = x;
        this.filteredProdCategoryMulti.next(this.prodCategorydata.slice());
      }
    })
  }


  getprodComb(){
    this.masterService.getAllProdMasterType(this.combinationType).subscribe(x=>{
      if(x){
        this.prodCombdata = x;
        this.filteredProdCombMulti.next(this.prodCombdata.slice());
      }
    })
  }

  getTaSlab(){
    this.masterService.getTaxSlabs().subscribe(x=>{
      if(x){
        this.TaxSlabdata = x;
        this.filteredTaxSlabMulti.next(this.TaxSlabdata.slice());
      }
    })
  }


  private getAllProdPack() {
    const payload = {
      prodPackId: 0,
      prodPackName:"*"
    }
    this.masterService.getAllProdPack(payload).subscribe(data=>{
      this.prodpackdata=data as ProductPack[];
      this.filteredProdPackMulti.next(this.prodpackdata.slice());
      
    });
  }


  private getAllCompMaster() {
    this.masterService.getAllCompanyMaster().subscribe(data=>{
      this.Companydata=data as CompanyMaster[];
      this.filteredCompanyMulti.next(this.Companydata.slice());
    });
  }



  private buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      prodId: [this.editObj.prodId],
      prodName: [this.editObj.prodName],
      // prodFullName: [this.editObj.prodFullName],
      prodShName: [this.editObj.prodShName],
      prodPackId: [this.editObj.prodPackId],
      prodCatId: [this.editObj.prodCatId],
      prodCombId: [this.editObj.prodCombId],
      prodTypeId: [this.editObj.prodTypeId],
      prodLocationId: [this.editObj.prodLocationId],
      compId: [this.editObj.compId],
      prodBoxPack: [this.editObj.prodBoxPack],
      prodCasePack: [this.editObj.prodCasePack],
      prodGroupId: [this.editObj.prodGroupId],
      taxSlabId: [this.editObj.taxSlabId],
      hsnId: [this.editObj.hsnId],
      hsncode: [this.editObj.hsncode],
      netRate: [this.editObj.netRate],
      allowNetRate: [this.editObj.allowNetRate],
      allowDiscount: [this.editObj.allowDiscount],
      allowExpiry: [this.editObj.allowExpiry],
      allowMfg: [this.editObj.allowMfg],
      allowInventory: [this.editObj.allowInventory],
      allowLoose: [this.editObj.allowLoose],
      prodBarcode: [this.editObj.prodBarcode]
    });

  }


  // Company
  companyGroupAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Company',
    isRequired: true,
    isStaticType: true,
    dataSourceFn:()=>this.masterService.getAllCompanyMaster(),
    keyString: 'name',
    validators: [Validators.required],
    minCount :2
  };


  companyGroupOptsTable: OptionsTableDefinition = {
    panelWidth: 300,
    columns: [
      { name: 'Company', value: (obj) => obj['name'] ? obj['name'] : '', fxFlex: 50,fxFlex1:50, isKeyColumn: true },
      { name: 'Company Group', value: (obj) => obj['companyGroups']['name'] ? obj['companyGroups']['name'] : '', fxFlex: 50,fxFlex1:50 },
    ]
  };

  //Product Category
  productCategoryDef: AutoCompleteDefinition = {
    label: 'Product Category',
    isRequired: true,
    dataSourceFn: (name) => this.masterService.getAllProdMasterType(this.categoryType),
    keyString: 'prodMasterTypeName',
    validators: [Validators.required],
    minCount:2
  }

  productCategoryOptsTable: OptionsTableDefinition = {
    panelWidth: 200,
    columns: [
      { name: 'Product Category', value: (obj) => obj['prodMasterTypeName'] ? obj['prodMasterTypeName'] : '', fxFlex: 100,fxFlex1:100, isKeyColumn: true },
    ]
  };

  //Product Combination
  productCombinationDef: AutoCompleteDefinition = {
    label: 'Product Combination',
    isRequired: true,
    dataSourceFn: (name) => this.masterService.getAllProdMasterType(this.combinationType),
    keyString: 'prodMasterTypeName',
    validators: [Validators.required],
    minCount:2
  }

  productCombinationOptsTable: OptionsTableDefinition = {
    panelWidth: 200,
    columns: [
      { name: 'Product Combination', value: (obj) => obj['prodMasterTypeName'] ? obj['prodMasterTypeName'] : '', fxFlex: 100,fxFlex1:100, isKeyColumn: true }
    ]
  }

  //Product Location
  productLocationDef: AutoCompleteDefinition = {
    label: 'Product Location',
    isRequired: true,
    dataSourceFn: () => this.masterService.getAllProdMasterType(this.locationType),
    keyString: 'prodMasterTypeName',
    validators: [Validators.required],
    minCount:2
  }

  productLocationOptsTable: OptionsTableDefinition = {
    panelWidth: 200,
    columns: [
      { name: 'Product Location', value: (obj) => obj['prodMasterTypeName'] ? obj['prodMasterTypeName'] : '', fxFlex: 100,fxFlex1:100, isKeyColumn: true }
    ]
  }

  // Product Pack
  productPackDef: AutoCompleteDefinition = {
    label: 'Product Pack',
    isRequired: true,
    dataSourceFn: () => this.masterService.getAllProdMasterType(this.locationType),
    keyString: 'prodMasterTypeName',
    validators: [Validators.required],
    minCount:2
  }

  productPackOptsTable: OptionsTableDefinition = {
    panelWidth: 200,
    columns: [
      { name: 'Product Pack', value: (obj) => obj['prodMasterTypeName'] ? obj['prodMasterTypeName'] : '', fxFlex: 100,fxFlex1:100, isKeyColumn: true }
    ]
  }


  //Company Auto Complete
  companyDefintion: AutoCompleteDefinition = {
    label: 'Company',
    isRequired: true,
    dataSourceFn: () => this.filteredCompanyMulti,
    keyString: 'compName',
    validators: [Validators.required],
    minCount:2
  }

  companyOptsTable: OptionsTableDefinition = {
    panelWidth: 450,
    columns: [
      { name: 'Company Name', value: (obj) => obj['compName'] ? obj['compName'] : '', fxFlex: 40,fxFlex1:40, isKeyColumn: true },
      { name: 'Group Name', value: (obj) => obj['compGroupName'] ? obj['compGroupName'] : '', fxFlex: 30,fxFlex1:30, isKeyColumn: true },
      { name: 'Sh.Name', value: (obj) => obj['compShName'] ? obj['compShName'] : '', fxFlex: 20,fxFlex1:20, isKeyColumn: true }
    ]
  }


  //Tax Slabs
  taxSlabAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Tax Slab',
    isRequired: true,
    dataSourceFn: () => this.masterService.getTaxSlabs(this.taxSlabType),
    keyString: 'slab',
    validators: [Validators.required],
    minCount:2
  }

  taxSlabOptsTable: OptionsTableDefinition = {
    panelWidth: 200,
    columns: [
      { name: 'Tax Slab', value: (obj) => obj['slab'] ? obj['slab'] : '', fxFlex: 100,fxFlex1:100, isKeyColumn: true },
    ]
  };

  //Product Group
  productGroupAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Product Group',
    isRequired: true,
    dataSourceFn: (name) => this.masterService.getAllProdMasterType(this.groupType),
    keyString: 'prodMasterTypeName',
    validators: [Validators.required],
    minCount:2
  }

  productGroupOptsTable: OptionsTableDefinition = {
    panelWidth: 200,
    columns: [
      { name: 'Product Group', value: (obj) => obj['prodMasterTypeName'] ? obj['prodMasterTypeName'] : '', fxFlex: 100,fxFlex1:100, isKeyColumn: true },
    ]
  };

  //Product Type
  productTypeAutoCompleteDef: AutoCompleteDefinition = {
    label: 'Product Type',
    isRequired: true,
    dataSourceFn: (name) => this.filterprodtype(name),
    keyString: 'prodMasterTypeName',
    validators: [Validators.required],
    minCount:2
  }

  filterprodtype(name){
    if(this.prodtypeata){
      return this.prodtypeata.filter(y=> y.prodMasterTypeName.toLowerCase().indexOf(name) > -1)
  }else{
    setTimeout(() => {
      console.log(this.prodtypeata);
      return this.prodtypeata
    }, 1000);
     
  }
    
  }

  productTypeOptsTable: OptionsTableDefinition = {
    panelWidth: 200,
    columns: [
      { name: 'Product Type', value: (obj) => obj['prodMasterTypeName'] ? obj['prodMasterTypeName'] : '', fxFlex: 100,fxFlex1:100, isKeyColumn: true },
    ]
  };


  save() {
    AppMessageUtils.clearMessage(this.formAlertId);
    if (!this.formGroup.valid) {
      console.log(this.formGroup);
      return;
    }
    let updatedObj: custProducts = Object.assign({});
    updatedObj.prodId = this.formGroup.controls.prodId.value ? this.formGroup.controls.prodId.value : 0 ,
      updatedObj.prodName = this.formGroup.controls.prodName.value,
      updatedObj.prodShName = this.formGroup.controls.prodShName.value,
      updatedObj.prodPackId = this.formGroup.controls.prodPackId.value,
      updatedObj.prodCatId = this.formGroup.controls.prodCatId.value,
      updatedObj.prodCombId = this.formGroup.controls.prodCombId.value,
      updatedObj.prodTypeId = this.formGroup.controls.prodTypeId.value,
      updatedObj.prodLocationId = this.formGroup.controls.prodLocationId.value,
      updatedObj.prodGroupId =this.formGroup.controls.prodGroupId.value,
      updatedObj.pRate = 0,
      updatedObj.sRate = 0,
      updatedObj.mrp = 0,
      updatedObj.rRate = 0,
      updatedObj.stkRate = 0,
      updatedObj.hsnId = this.formGroup.controls.hsnId.value? Number(this.formGroup.controls.hsnId.value): 0,
      updatedObj.hsncode = this.formGroup.controls.hsncode.value? Number(this.formGroup.controls.hsncode.value):0,
      updatedObj.taxSlabId = this.formGroup.controls.taxSlabId.value,
      updatedObj.discRecd = 0,
      updatedObj.prodShName = this.formGroup.controls.prodShName.value,
      updatedObj.prodBarcode = 'test',
      // updatedObj.prodFullName = this.formGroup.controls.prodFullName.value,
      updatedObj.allowDiscount = Number(this.formGroup.controls.allowDiscount.value),
      updatedObj.allowExpiry = Number(this.formGroup.controls.allowExpiry.value),
      updatedObj.allowMfg = Number(this.formGroup.controls.allowMfg.value),
      updatedObj.allowLoose = Number(this.formGroup.controls.allowLoose.value),
      updatedObj.allowInventory = Number(this.formGroup.controls.allowInventory.value),
      updatedObj.allowNetRate = Number(this.formGroup.controls.allowNetRate.value),
      updatedObj.netRate =  this.formGroup.controls.netRate.value,
      updatedObj.isActive = 1,
      updatedObj.prodBoxPack = Number(this.formGroup.controls.prodBoxPack.value),
      updatedObj.prodCasePack = Number(this.formGroup.controls.prodCasePack.value),
      updatedObj.compId = this.formGroup.controls.compId.value // this.compId; //this.formGroup.controls.compId.value
    this.masterService.postCustomProduct(updatedObj).subscribe(data =>
      ResponseUtils.isStatus200(data) ? this.onClickBackBtn() :
        ResponseUtils.isStatus409(data) ?
          AppMessageUtils.warningMessage('CustomProducts already exists', this.formAlertId) : ''
    );
  }

  private isValid(updatedObj: custProducts) {
    let isValid: boolean = true;
    let objs = this.dataList ? [...this.dataList] : [];
    if (updatedObj.prodId) {
      objs = objs.filter(custprod => custprod.prodId !== updatedObj.prodId);
    }
    if ((objs && objs.filter(custprod => custprod.prodName === updatedObj.prodName).length > 0)) {
      AppMessageUtils.warningMessage('CustomProducts already exists', this.formAlertId);
      isValid = false;
    }
    return isValid;
  }




  reset() {
    this.formGroup.reset();
  }

  // Allows Only AlphaNumeric 
  keyPressAlphaNumericWithCharacters(event) {
    let inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-Z0-9 ,\-]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
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

  onClickBackBtn(){
    this.formGroup.reset();
    this.buttonName = 'Save';
    this.router.navigate(['/pharma/masters/products/customProductsList'])
  }

  ///----------------------product type --------------//
  @ViewChild('prodPackfocus', {static:false}) prodPackfocus: ElementRef;
  @ViewChild('prodTypeTab', {static:false}) prodTypeTab: MatSelect;
  ProdTypeTabMultiFilterCtrl = new FormControl('');
  public filteredProdTypeMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
    ProdTypeTab(event: KeyboardEvent) {
      if (event.keyCode === 9) {
        const statetab = this.prodTypeTab.options;
        const result = statetab.find(x => x.active === true);
        this.formGroup.controls.prodTypeId.setValue(result.value);
      }
      else if (event.keyCode === 13) {
        
        // setTimeout(() => {
        //   this.prodPackfocus.nativeElement.focus();
        // }, 1000);
       }
    }

    protected filterProdTypesMulti() {
      if (!this.prodtypeata) {
        return;
      }
      // get the search keyword
      let search = this.ProdTypeTabMultiFilterCtrl.value;
      if (!search) {
        this.filteredProdTypeMulti.next(this.prodtypeata.slice());
        return;
      } else {
        search = search.toLowerCase();
      }
      // filter the banks
      this.filteredProdTypeMulti.next(
        this.prodtypeata.filter(bank => bank.prodMasterTypeName.toLowerCase().indexOf(search) > -1)
      );
    }

    ///---------------- end prod type------------///////
  
     ///----------------------product pack --------------//
   @ViewChild('companyfocus', {static:false}) companyfocus: ElementRef;
  @ViewChild('prodPackTab', {static:false}) prodPackTab: MatSelect;
  ProdPackTabMultiFilterCtrl = new FormControl('');
  public filteredProdPackMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
    ProdPackTab(event: KeyboardEvent) {
      if (event.keyCode === 9) {
        const statetab = this.prodPackTab.options;
        const result = statetab.find(x => x.active === true);
        this.formGroup.controls.prodPackId.setValue(result.value);
      }
      else if (event.keyCode === 13) {
        
        // setTimeout(() => {
        //   this.companyfocus.nativeElement.focus();
        // }, 1000);
       }
    }

    protected filterProdPacksMulti() {
      if (!this.prodpackdata) {
        return;
      }
      // get the search keyword
      let search = this.ProdPackTabMultiFilterCtrl.value;
      if (!search) {
        this.filteredProdPackMulti.next(this.prodpackdata.slice());
        return;
      } else {
        search = search.toLowerCase();
      }
      // filter the banks
      this.filteredProdPackMulti.next(
        this.prodpackdata.filter(bank => bank.prodPackName.toLowerCase().indexOf(search) > -1)
      );
    }

    ///---------------- end prod type------------///////
  

     ///----------------------Company--------------//
  @ViewChild('CompanyTab', {static:false}) CompanyTab: MatSelect;
  @ViewChild('boxfocus', {static:false}) boxfocus: ElementRef;
  CompanyTabMultiFilterCtrl = new FormControl('');
  public filteredCompanyMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
  public hsnCodeList: ReplaySubject<any> = new ReplaySubject<any>(1);
  compGroupName = new FormControl('');
  companyTab(event: KeyboardEvent) {
      if (event.keyCode === 9) {
        const statetab = this.CompanyTab.options;
        const result = statetab.find(x => x.active === true);
        this.formGroup.controls.compId.setValue(result.value);
        const data = this.Companydata.find(x=> x.compId == result.value)
        if(data){
        this.compGroupName.setValue(data.compGroupName);
        }
        
      }
      else if (event.keyCode === 13) {
        const data = this.Companydata.find(x=> x.compId == this.formGroup.controls.compId.value)
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

    ///---------------- end prod type------------///////


    ///------------------------product group --------------////

    @ViewChild('prodGroupTab', {static:false}) prodGroupTab: MatSelect;
    @ViewChild('prodCategoryfocus', {static:false}) prodCategoryfocus: ElementRef;
  ProdGroupTabMultiFilterCtrl = new FormControl('');
  public filteredProdGroupMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
    ProdGroupTab(event: KeyboardEvent) {
      if (event.keyCode === 9) {
        const statetab = this.prodGroupTab.options;
        const result = statetab.find(x => x.active === true);
        this.formGroup.controls.prodGroupId.setValue(result.value);
      }
      else if (event.keyCode === 13) {
        
        // setTimeout(() => {
        //   this.companyfocus.nativeElement.focus();
        // }, 1000);
       }
    }

    protected filterProdGroupsMulti() {
      if (!this.prodgroupdata) {
        return;
      }
      // get the search keyword
      let search = this.ProdGroupTabMultiFilterCtrl.value;
      if (!search) {
        this.filteredProdGroupMulti.next(this.prodgroupdata.slice());
        return;
      } else {
        search = search.toLowerCase();
      }
      // filter the banks
      this.filteredProdGroupMulti.next(
        this.prodgroupdata.filter(bank => bank.prodMasterTypeName.toLowerCase().indexOf(search) > -1)
      );
    }

    //// -------------------prod group -------------///////////

    
    ////---------------------- prod cat -----------------------/////////
    @ViewChild('prodCategoryTab', {static:false}) prodCategoryTab: MatSelect;
    @ViewChild('prodCombFocus', {static:false}) prodCombFocus: ElementRef;
    ProdCategoryTabMultiFilterCtrl = new FormControl('');
    public filteredProdCategoryMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
      ProdCategoryTab(event: KeyboardEvent) {
        if (event.keyCode === 9) {
          const statetab = this.prodCategoryTab.options;
          const result = statetab.find(x => x.active === true);
          this.formGroup.controls.prodCatId.setValue(result.value);
        }

        else if (event.keyCode === 13) {
        
          // setTimeout(() => {
          //   this.prodCombFocus.nativeElement.focus();
          // }, 1000);
         }
      }
  
      protected filterProdCategorysMulti() {
        if (!this.prodCategorydata) {
          return;
        }
        // get the search keyword
        let search = this.ProdCategoryTabMultiFilterCtrl.value;
        if (!search) {
          this.filteredProdCategoryMulti.next(this.prodCategorydata.slice());
          return;
        } else {
          search = search.toLowerCase();
        }
        // filter the banks
        this.filteredProdCategoryMulti.next(
          this.prodCategorydata.filter(bank => bank.prodMasterTypeName.toLowerCase().indexOf(search) > -1)
        );
      }
  



    ////-----------------------end prod cat-----------------------//////////////////



    //////--------------- prod Comb --------------------------///////////////////////

    @ViewChild('prodCombTab', {static:false}) prodCombTab: MatSelect;
    @ViewChild('prodLocationfocus', {static:false}) prodLocationfocus: ElementRef;
    ProdCombTabMultiFilterCtrl = new FormControl('');
    public filteredProdCombMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
      ProdCombTab(event: KeyboardEvent) {
        if (event.keyCode === 9) {
          const statetab = this.prodCombTab.options;
          const result = statetab.find(x => x.active === true);
          this.formGroup.controls.prodCombId.setValue(result.value);
        }
        else if (event.keyCode === 13) {
        
          // setTimeout(() => {
          //   this.prodLocationfocus.nativeElement.focus();
          // }, 1000);
         }
      }
  
      protected filterProdCombsMulti() {
        if (!this.prodCombdata) {
          return;
        }
        // get the search keyword
        let search = this.ProdCombTabMultiFilterCtrl.value;
        if (!search) {
          this.filteredProdCombMulti.next(this.prodCombdata.slice());
          return;
        } else {
          search = search.toLowerCase();
        }
        // filter the banks
        this.filteredProdCombMulti.next(
          this.prodCombdata.filter(bank => bank.prodMasterTypeName.toLowerCase().indexOf(search) > -1)
        );
      }



    //////////------------------ end prod comb -----------------------////////////////


    //////--------------- prod Comb --------------------------///////////////////////

    @ViewChild('prodLocationTab', {static:false}) prodLocationTab: MatSelect;
    @ViewChild('taxSlabfocus', {static:false}) taxSlabfocus: ElementRef;
    ProdLocationTabMultiFilterCtrl = new FormControl('');
    public filteredProdLocationMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
      ProdLocationTab(event: KeyboardEvent) {
        if (event.keyCode === 9) {
          const statetab = this.prodLocationTab.options;
          const result = statetab.find(x => x.active === true);
          this.formGroup.controls.prodLocationId.setValue(result.value);
        }
        else if (event.keyCode === 13) {
        
          // setTimeout(() => {
          //   this.prodLocationfocus.nativeElement.focus();
          // }, 1000);
         }
      }
  
      protected filterProdLocationsMulti() {
        if (!this.prodLocationdata) {
          return;
        }
        // get the search keyword
        let search = this.ProdLocationTabMultiFilterCtrl.value;
        if (!search) {
          this.filteredProdLocationMulti.next(this.prodLocationdata.slice());
          return;
        } else {
          search = search.toLowerCase();
        }
        // filter the banks
        this.filteredProdLocationMulti.next(
          this.prodLocationdata.filter(bank => bank.prodMasterTypeName.toLowerCase().indexOf(search) > -1)
        );
      }



    //////////------------------ end prod comb -----------------------////////////////


    ////////////-----------tax slab----------------------//

    @ViewChild('taxSlabTab', {static:false}) taxSlabTab: MatSelect;
    @ViewChild('hsnfocus', {static:false}) hsnfocus: ElementRef;
    TaxSlabTabMultiFilterCtrl = new FormControl('');
    public filteredTaxSlabMulti: ReplaySubject<any> = new ReplaySubject<any>(1);
      TaxSlabTab(event: KeyboardEvent) {
        if (event.keyCode === 9) {
          const statetab = this.taxSlabTab.options;
          const result = statetab.find(x => x.active === true);
          this.formGroup.controls.taxSlabId.setValue(result.value);
        }

        else if (event.keyCode === 13) {
        
          // setTimeout(() => {
          //   this.hsnfocus.nativeElement.focus();
          // }, 1000);
         }
      }
  
      protected filterTaxSlabsMulti() {
        if (!this.TaxSlabdata) {
          return;
        }
        // get the search keyword
        let search = this.TaxSlabTabMultiFilterCtrl.value;
        if (!search) {
          this.filteredTaxSlabMulti.next(this.TaxSlabdata.slice());
          return;
        } else {
          search = search.toLowerCase();
        }
        // filter the banks
        this.filteredTaxSlabMulti.next(
          this.TaxSlabdata.filter(bank => bank.tax.toString().toLowerCase().indexOf(search) > -1)
        );
      }


      
      opened = ()=> {
        let inputWidth = this.citiesfocus.nativeElement.getBoundingClientRect().width;
        let width = 70+inputWidth;
        setTimeout(()=>{
          let panel = this.autocomplete.panel.nativeElement;
          console.log("opened", panel, this.autocomplete);
          if (!panel )
            return  panel.style.minWidth = width + "px";
          })
      } 
 





    /////////////-------------end slab--------------////////

bindData(res){
  this.compGroupName.setValue(res.compGroupName);
  this.compId = res.compId;
}

ngOnDestroy(){
  // this.service.sendTabData('');
  this.subscription.unsubscribe();
}
  

}

