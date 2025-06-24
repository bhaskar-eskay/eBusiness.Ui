import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';

import { RouterModule, Routes } from '@angular/router';
import { CustomAccountComponent } from './accounts/custom-account/custom-account.component';
import { AccountsHeadComponent } from './accounts/accounts-head/accounts-head.component';
import { ScheduleComponent } from './accounts/schedule/schedule.component';
import { SubScheduleComponent } from './accounts/sub-schedule/sub-schedule.component';
import { StaffComponent } from './accounts/staff/staff.component';
import { AreaComponent } from './accounts/area/area.component';
import { BankComponent } from './accounts/bank/bank.component';
import { CustomCompaniesComponent } from './products/custom-companies/custom-companies.component';
import { CustomProductsComponent } from './products/custom-products/custom-products.component';
import { CustomProductsListComponent } from './products/custom-products-list/custom-products-list.component';
import { ManufacturerComponent } from './products/manufacturer/manufacturer.component';
import { ProductCategoriesComponent } from './products/product-categories/product-categories.component';
import { ProductCombinationsComponent } from './products/product-combinations/product-combinations.component';
import { ProductGroupsComponent } from './products/product-groups/product-groups.component';
import { ProductLocationsComponent } from './products/product-locations/product-locations.component';
import { MasterService } from './master.service';
import { TaxComponent } from './taxation/tax/tax.component';
import { TaxSlabsComponent } from './taxation/tax-slabs/tax-slabs.component';
import { TransactionTypesComponent } from './taxation/transaction-types/transaction-types.component';
import { TaxStakesComponent } from './taxation/tax-stakes/tax-stakes.component';
import { StandardPrefixComponent } from './taxation/standard-prefix/standard-prefix.component';
import { TaxHeadComponent } from './taxation/tax-head/tax-head.component';
import { ProductsHeadComponent } from './products/products-head/products-head.component';
import { ProductPackComponent } from './products/product-pack/product-pack.component';
import { CompanyGroupComponent } from './products/company-group/company-group.component';
import { CustomAccountListComponent } from './accounts/custom-account-list/custom-account-list.component';
import { ProductTypeComponent } from './products/product-type/product-type.component';
import { ProductUomComponent } from './products/product-uom/product-uom.component';
import { MapCityAccountsComponent } from './accounts/map-city-accounts/map-city-accounts.component';




const routes: Routes = [
  {path: '', component: MasterComponent,
    children:[
      {path:'', redirectTo:'dashboard', pathMatch:'full'},
      {path:'accounts', component:AccountsHeadComponent,
        children:[
          {path:'', redirectTo:'customAccountsList', pathMatch:'full'},
          {path:'customAccountsForm', component:CustomAccountComponent},
          {path:'customAccountsList', component:CustomAccountListComponent},
          {path:'schedule', component:ScheduleComponent},
          {path:'subschedule', component:SubScheduleComponent},
          {path:'staff', component:StaffComponent},
          {path:'area', component:AreaComponent},
          {path:'bank', component:BankComponent},
          {path:'city', component:MapCityAccountsComponent},
        ]
      },
      {path:'products', component: ProductsHeadComponent,
      children:[
        {path:'', redirectTo:'customProductsList', pathMatch:'full'},
        {path:'customCompanies', component: CustomCompaniesComponent},
      
        {path:'customProducts', component: CustomProductsComponent},
        {path:'customProductsList', component: CustomProductsListComponent},
        {path:'manufacturer', component: ManufacturerComponent},
        {path:'productCategories', component: ProductCategoriesComponent},
        {path:'productCombinations', component: ProductCombinationsComponent},
        {path:'productGroups', component: ProductGroupsComponent},
        {path:'productLocations', component: ProductLocationsComponent},
        {path:'productPack', component: ProductPackComponent},
        {path:'productType', component: ProductTypeComponent},
        {path:'productUOM', component: ProductUomComponent},
        {path:'compGroup', component: CompanyGroupComponent}
      ]
      },      
      {path:'taxation', component: TaxHeadComponent,
      children:[
        {path:'', redirectTo:'tax', pathMatch:'full'},
        {path:'tax', component:TaxComponent},
        {path:'taxslabs', component:TaxSlabsComponent},
        {path:'taxTransactionTypes', component: TransactionTypesComponent},
        {path:'taxStakes', component:TaxStakesComponent},
        {path:'transactionTypeDetails', component:TransactionTypesComponent},
        {path:'standardPrefix', component:StandardPrefixComponent},
      ]
    },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[MasterService]
})
export class MasterRoutingModule { }
