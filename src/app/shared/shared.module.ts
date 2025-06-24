import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTableModule} from '@angular/cdk/table';
import { LoaderComponent } from './components/loader/loader.component'
import { LoaderService } from './components/loader/loader.service';
import { MaterialModule } from './material/material.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppHeaderComponent } from './components/app-header/app-header.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HttpService } from './services/http.service';
import { RouteService } from './services/route.service';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './components/alert/alert.service';
import { GlobalErrorHandler } from './services/global-error-handler.service';
import { ErrorService } from './services/error.service';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { TableComponent } from './components/table/table.component';
import { DragDropDualListComponent } from './components/drag-drop-dual-list/drag-drop-dual-list.component';
import { MastersHttpService } from './http-services/masters/masters-http.service';
import { CoreHttpService } from './http-services/core/core-http.service';
import { DynamicTabsComponent } from './components/dynamic-tabs/dynamic-tabs.component';
import { DynamicTabsService } from './components/dynamic-tabs/dynamic-tabs.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogService } from './components/dialog/dialog.service';
import { DropdownDirective } from './directives/dropdown.directive';
import { AutoCompleteDirective } from './directives/auto-complete.directive';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { HighlightPipe } from './pipes/highlight/highlight.pipe';
import { StoreModule } from '@ngrx/store';
import  * as fromCities from '../shared/ngrx-store/reducers/cities.reducer'; 
import  * as fromStates from '../shared/ngrx-store/reducers/states.reducer'; 
import * as fromDistricts from '../shared/ngrx-store/reducers/districts.reducer';
import  * as fromFirmPreference from '../shared/ngrx-store/reducers/firm-preferences.reducer'; 
import  * as fromTaxCatgeory from '../shared/ngrx-store/reducers/tax-category.reducer'; 
import * as fromfirm from '../shared/ngrx-store/reducers/firm.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CitiesEffects } from './ngrx-store/effects/cities.effects';
import { StatesEffects } from './ngrx-store/effects/states.effects';
import { DistrictsEffects } from './ngrx-store/effects/districts.effects';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { DateMaskDirective } from './directives/date-mask.directive';
import { TaxCategoryEffects } from './ngrx-store/effects/tax-category.effects';
import { FirmPreferencesEffects } from './ngrx-store/effects/firm-preferences.effects';
import { AppMatSelectDirective } from './directives/app-mat-select.directive';
import { OmitSpecialCharactersDirective } from './directives/omit-special-characters.directive';
import { FirmEffects } from './ngrx-store/effects/firm.effects';
import { AppMatTabDirective } from './directives/app-mat-tab.directive';
import { FocuschangedDirective } from './directives/focuschanged.directive';
import { MyCustomDialogComponent } from './components/my-custom-dialog/my-custom-dialog.component';
import { CurrencyFormatDirective } from './directives/currency-format.directive';
import { QntCurrencyFormatDirective } from './directives/qnt-currency-format.directive';
import { RegistersTableComponent } from './components/table/registers-table/registers-table.component';
import { AutoSelectComponent } from './components/auto-select/auto-select.component';
import { GstFormatDirective } from './directives/gst-format.directive';
//import { MatMomentDateModule } from "@angular/material-moment-adapter";



@NgModule({
  declarations: [LoaderComponent,
     AppHeaderComponent,
     SideNavComponent,
     AlertComponent,
     TableComponent,
     DragDropDualListComponent,
     DynamicTabsComponent,
     DialogComponent,
     DropdownDirective,
     AutoCompleteDirective,
     AutocompleteComponent,
     AutoFocusDirective,
     HighlightPipe,
     PhoneMaskDirective,
     DateMaskDirective,
     AppMatSelectDirective,
     OmitSpecialCharactersDirective,
     AppMatTabDirective,
     FocuschangedDirective,
     MyCustomDialogComponent,
     CurrencyFormatDirective,
     QntCurrencyFormatDirective,
     RegistersTableComponent,
     AutoSelectComponent,
     GstFormatDirective,
     
     ],
  imports: [
    SimpleNotificationsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    DragDropModule,
    CdkTableModule,
    MaterialModule,
    PopoverModule,
    StoreModule.forFeature(fromCities.citiesFeatureKey,fromCities.reducer),
    StoreModule.forFeature(fromStates.statesFeatureKey,fromStates.reducer),
    StoreModule.forFeature(fromDistricts.districtsFeatureKey,fromCities.reducer),
    StoreModule.forFeature(fromFirmPreference.firmPreferencesFeatureKey,fromFirmPreference.reducer),
    StoreModule.forFeature(fromTaxCatgeory.taxCategoryFeatureKey,fromTaxCatgeory.reducer),
    StoreModule.forFeature(fromfirm.firmFeatureKey,fromfirm.reducer),

    EffectsModule.forFeature([
      CitiesEffects,
      StatesEffects,
      DistrictsEffects,
      TaxCategoryEffects,
      FirmPreferencesEffects,
      FirmEffects
    ])
  ],
  exports:[
    LoaderComponent,
    DragDropDualListComponent,
    TableComponent,
    SideNavComponent,
    AlertComponent,
    AppHeaderComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    DragDropModule,
    CdkTableModule,
    MaterialModule,
    PopoverModule,
    DynamicTabsComponent,
    DialogComponent,
    DropdownDirective,
    AutoCompleteDirective,
    AutocompleteComponent,
    AutoFocusDirective,
    DateMaskDirective,
    AppMatSelectDirective,
    OmitSpecialCharactersDirective,
    AppMatTabDirective,
    FocuschangedDirective,
    MyCustomDialogComponent,
    CurrencyFormatDirective,
    QntCurrencyFormatDirective,
    RegistersTableComponent,
    AutoSelectComponent,
    GstFormatDirective
  ],
  entryComponents: [DialogComponent,MyCustomDialogComponent],


})
export class SharedModule { 
  static forRoot(config: SharedConfig) {
    return {
      ngModule: SharedModule,
      providers: [
        DialogService,
        DynamicTabsService,
        LoaderService, 
        AlertService, 
        HttpService, CoreHttpService, MastersHttpService,
        RouteService,
        ErrorService,
        {provide: ErrorHandler, useClass: GlobalErrorHandler},
        {provide: 'config', useValue: config} ]
    }
  }
}