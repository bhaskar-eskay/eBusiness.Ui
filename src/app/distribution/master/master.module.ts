import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  MasterComponent
} from './master.component';

import {
  MasterRoutingModule
} from './master-routing.module';

import {
  SharedModule
} from 'src/app/shared/shared.module';

import {
  ScheduleComponent
} from './accounts/schedule/schedule.component';
import {
  SubScheduleComponent
} from './accounts/sub-schedule/sub-schedule.component';
import {
  StaffComponent
} from './accounts/staff/staff.component';
import {
  AreaComponent
} from './accounts/area/area.component';
import {
  BankComponent
} from './accounts/bank/bank.component';
import {
  CustomProductsListComponent
} from './products/custom-products-list/custom-products-list.component';
import {
  CustomProductsComponent
} from './products/custom-products/custom-products.component';
import {
  ManufacturerComponent
} from './products/manufacturer/manufacturer.component';
import {
  ProductCategoriesComponent
} from './products/product-categories/product-categories.component';
import {
  ProductGroupsComponent
} from './products/product-groups/product-groups.component';
import {
  ProductCombinationsComponent
} from './products/product-combinations/product-combinations.component';
import {
  ProductLocationsComponent
} from './products/product-locations/product-locations.component';
import {
  CustomCompaniesComponent
} from './products/custom-companies/custom-companies.component';
import {
  AccountsHeadComponent
} from './accounts/accounts-head/accounts-head.component';
import {
  TaxComponent
} from './taxation/tax/tax.component';
import {
  TaxSlabsComponent
} from './taxation/tax-slabs/tax-slabs.component';
import {
  TransactionTypesComponent
} from './taxation/transaction-types/transaction-types.component';
import {
  TaxStakesComponent
} from './taxation/tax-stakes/tax-stakes.component';
import {
  StandardPrefixComponent
} from './taxation/standard-prefix/standard-prefix.component';
import {
  TaxHeadComponent
} from './taxation/tax-head/tax-head.component';
import {
  ProductsHeadComponent
} from './products/products-head/products-head.component';
import {
  MasterService
} from './master.service';
import {
  ProductPackComponent
} from './products/product-pack/product-pack.component';
import {
  CompanyGroupComponent
} from './products/company-group/company-group.component';
import {
  CustomAccountComponent
} from './accounts/custom-account/custom-account.component';
import {
  CustomAccountListComponent
} from './accounts/custom-account-list/custom-account-list.component';

import {
  AccountRegComponent
} from './accounts/custom-account/account-reg/account-reg.component';
import {
  AccountAddressComponent
} from './accounts/custom-account/account-address/account-address.component';
import {
  AccountOthersComponent
} from './accounts/custom-account/account-others/account-others.component';
import { ProductTypeComponent } from './products/product-type/product-type.component';
import { ProductUomComponent } from './products/product-uom/product-uom.component';
import { MapCityAccountsComponent } from './accounts/map-city-accounts/map-city-accounts.component';





@NgModule({
  declarations: [MasterComponent, CustomAccountComponent, CustomAccountListComponent, ScheduleComponent,
     SubScheduleComponent, StaffComponent, AreaComponent, BankComponent, CustomProductsListComponent, 
     CustomProductsComponent, ManufacturerComponent, ProductCategoriesComponent, ProductGroupsComponent, 
     ProductCombinationsComponent, ProductLocationsComponent, CustomCompaniesComponent,
      AccountsHeadComponent, TaxComponent, TaxSlabsComponent, TransactionTypesComponent, 
      TaxStakesComponent, StandardPrefixComponent, TaxHeadComponent, ProductsHeadComponent, 
      ProductPackComponent, CompanyGroupComponent,  AccountRegComponent, AccountAddressComponent, AccountOthersComponent, ProductTypeComponent, ProductUomComponent, MapCityAccountsComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule {}
