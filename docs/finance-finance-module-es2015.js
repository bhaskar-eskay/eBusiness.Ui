(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finance-finance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/area-wise-collections/area-wise-collections.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/area-wise-collections/area-wise-collections.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n  <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"60\">\n      <h4 class=\"pharmacyHeading\">Area Wise Collections</h4>\n    </div>\n    <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"\n      routerLink=\"../cashReceipts\">Back</button>\n  </div>\n\n  <mat-accordion class=\"example-headers-align\">\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n      <form [formGroup]=\"areaWiseCollectionsFormGroup\">\n      <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\"\n        fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"30\" class=\"user-card\">\n          <mat-card class=\"CashReceiptCard\">\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Financial Years</mat-label>\n              <mat-select formControlName=\"financialyear\">\n                <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                  {{food.viewValue}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n              <mat-label>From Date</mat-label>\n              <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n              <mat-datepicker #fromDatePicker></mat-datepicker>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n              <mat-label>To Date</mat-label>\n              <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n              <mat-datepicker #toDatePicker></mat-datepicker>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Report type</mat-label>\n              <mat-select formControlName=\"reportType\">\n                <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                  {{food.viewValue}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <div class=\"mt-4\">\n              <button type=\"button\" class=\"finance-button \" mat-raised-button color=\"primary\"\n                (click)=\"nextStep()\">Generate</button> &nbsp;\n              <button type=\"button\" class=\"finance-button\" mat-raised-button\n                [routerLink]=\"['../../home']\">Cancel</button>\n            </div>\n          </mat-card>\n\n        </div>\n      </div>\n    </form>\n    </mat-expansion-panel>\n\n    <ng-template [ngIf]=\"isOpened\">\n      <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n        <mat-form-field appearance=\"outline\">\n          <input matInput placeholder=\"Country\">\n        </mat-form-field>\n\n        <mat-action-row>\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </ng-template>\n  </mat-accordion>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-payment-register/bank-payment-register.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-payment-register/bank-payment-register.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n  <div fxLayout=\"row\" class=\"my-1\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"60\">\n      <h4 class=\"pharmacyHeading\">Bank Payment Register</h4>\n    </div>\n    \n  </div>\n\n\n  <mat-accordion class=\"example-headers-align\">\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n      <form [formGroup]=\"bankPaymentRegisterFormGroup\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\"\n          fxLayoutWrap fxLayoutGap=\"10px\">\n\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"100\" class=\"user-card w-100\">\n            <mat-card class=\"CashReceiptCard\" fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"row\" >\n              <!-- From Date -->\n              <mat-form-field fxFlex=\"15\" fxFlex.sm=\"19\" fxFlex.xs=\"100\" appearance=\"outline\" class=\"e_mat_date\">\n                <mat-label>From Date</mat-label>\n                <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDatePicker></mat-datepicker>\n              </mat-form-field>\n          \n              <!-- To Date -->\n              <mat-form-field fxFlex=\"15\" fxFlex.sm=\"17\" fxFlex.xs=\"100\" appearance=\"outline\" class=\"e_mat_date\">\n                <mat-label>To Date</mat-label>\n                <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDatePicker></mat-datepicker>\n              </mat-form-field>\n          \n              <!-- Want Voucher Total -->\n              <div fxFlex=\"30\" fxFlex.xs=\"100\" fxFlex.sm=\"24\" class=\"radio-group d-flex text-center mt-2\">\n                <span style=\"margin-right: 8px;\">Want Voucher Total:</span>\n                <mat-radio-group formControlName=\"wantVoucherTotal\" fxLayout=\"row\" fxLayoutGap=\"16px\">\n                  <mat-radio-button value=\"yes\" class=\"ml-1 mr-2\">Yes</mat-radio-button>\n                  <mat-radio-button value=\"no\">No</mat-radio-button>\n                </mat-radio-group>\n              </div>\n          \n              <!-- Buttons -->\n              <div fxFlex=\"24\" fxFlex.xs=\"100\" class=\"text-center\" fxFlex.sm=\"20\">\n                <button type=\"button\" class=\"finance-button mt-1 mr-1\" mat-raised-button color=\"primary\" (click)=\"nextStep(bankPaymentRegisterFormGroup.value)\">Generate</button>\n                <button type=\"button\" class=\"finance-button mt-1\" mat-raised-button (click)=\"resetForm()\">Reset</button>\n                \n              </div>\n\n              <div fxFlex=\"8\" fxFlex.xs=\"100\" class=\"text-center\">\n                <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"\n                    (click)=\"goback()\">Back</button>\n              </div>\n\n            </mat-card>\n          </div>\n          \n        </div>\n      </form>\n\n    </mat-expansion-panel>\n\n    <ng-template [ngIf]=\"openPanel\">\n      <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle class=\"full-height\">\n        <!-- Action Buttons for Export -->\n        <div class=\"action-icons\">\n          <!-- Excel Export Button -->\n          <button mat-icon-button (click)=\"exportToExcel(bankPaymentRegisterFormGroup.value)\">\n            <img src=\"assets/new_xl.png\" alt=\"Excel\" class=\"icon-img\" />\n          </button>\n    \n          <!-- PDF Export Button -->\n          <button mat-icon-button (click)=\"exportToPdf()\">\n            <img src=\"assets/new_pdf.png\" alt=\"PDF\" class=\"icon-img\" />\n          </button>\n        </div>\n    \n        <!-- Table Container -->\n        <div class=\"table-container mt-4\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n            <!-- Columns Definitions -->\n            <ng-container matColumnDef=\"voucherNo\">\n              <th mat-header-cell *matHeaderCellDef> Voucher No. </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranHeadNo}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"voucherDate\">\n              <th mat-header-cell *matHeaderCellDef> Voucher Date </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranDate}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"AccountName\">\n              <th mat-header-cell *matHeaderCellDef> Account Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.accName}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"Description\">\n              <th mat-header-cell *matHeaderCellDef> Description </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranDesc}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"Amount\">\n              <th mat-header-cell *matHeaderCellDef> Amount </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranAmount}} </td>\n            </ng-container>\n    \n            <!-- <ng-container matColumnDef=\"Discount\">\n              <th mat-header-cell *matHeaderCellDef> Discount </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.Discount}} </td>\n            </ng-container> -->\n    \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n\n        </div>\n    \n        <mat-action-row>\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </ng-template>\n\n  </mat-accordion>\n</div>\n\n  \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-payment-voucher-entry/bank-payment-voucher-entry.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-payment-voucher-entry/bank-payment-voucher-entry.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n      fxLayoutGap=\"10px\">\n      <div fxFlex=\"40\" class=\"align-self-center\">\n        <h4 class=\"pharmacyHeading\">Bank Payment Entry</h4>\n      </div>\n      <div fxFlex=\"40\" class=\"align-self-center\" *ngIf=\"showTable\">\n        <h5 class=\"pharmacyHeading\">No :&nbsp;&nbsp;<span>{{headNo}}</span></h5>\n      </div>\n      <div fxFlex=\"30\">\n        <nav aria-label=\"breadcrumb\">\n          <ol class=\"breadcrumb mb-0\">\n            <li class=\"breadcrumb-item\" aria-current=\"page\">Bank Payment  Entry</li>\n          </ol>\n        </nav>\n  \n      </div>\n    </div>\n  </div>\n  \n  <mat-card class=\"m-2 rounded\">\n    <form [formGroup]=\"bankPaymentVoucherEntryFormGroup\">\n      <div fxFlex=\"100\" fxlayout=\"row\" fxlayout.xs=\"column\" fxLayoutGap=\"60px\" fxLayoutGap.md=\"20px\"  class=\"buttons\">\n  \n        <mat-form-field appearance=\"fill\" class=\"mat_date mt-1\" style=\"width: 140px;\">\n          <mat-label>Choose a date</mat-label>\n          <input matInput [matDatepicker]=\"picker\"  [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"finDate\" #finTranDate>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n  \n        \n       <div class=\"mt-1 d-inline\">\n        <app-autocomplete [definition]=\"contraActDefintion\" [control]=\"contraAcct\"\n        [optionsTableDefinition]=\"contraActsOptTable\"></app-autocomplete>\n       </div>\n  \n        <div class=\"mt-1 d-inline\">\n          <app-autocomplete [definition]=\"customAccountAutoCompleteDef\" [control]=\"accName\"\n        [optionsTableDefinition]=\"customAccountsOptsTable\"></app-autocomplete>\n        </div>\n  \n  \n        <mat-form-field class=\"example-full-width mt-3\">\n          <mat-label>SH.Name</mat-label>\n          <input matInput disabled value=\"\" formControlName=\"accShName\">\n  \n        </mat-form-field>\n  \n        <mat-form-field class=\"example-full-width mt-3\">\n          <mat-label>City Name</mat-label>\n          <input matInput disabled value=\"\" formControlName=\"cityName\">\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-full-width mt-1\">\n          <mat-label>Description</mat-label>\n          <textarea matInput placeholder=\"\" formControlName=\"finTranDesc\"></textarea>\n        </mat-form-field>\n  \n        <!-- <mat-form-field class=\"example-full-width\" >\n          <mat-label>Vocuher No.*</mat-label>\n          <textarea matInput placeholder=\"\" formControlName=\"finTranVno\"></textarea>\n  \n        </mat-form-field> -->\n  \n        <mat-form-field appearance=\"outline\" class=\"mt-1\" >\n          <mat-label>Instrument type</mat-label>\n          <mat-select [formControl]=\"instruType\"  (selectionChange)=\"changefirmgroup($event.value)\" >\n            <mat-option *ngFor=\"let dat of instrumentTypes\" [value]=\"dat.id\">\n             {{dat.type}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n  \n        \n        <div *ngIf=\"showBankact == true\" class=\"d-inline mt-1\">\n          <app-autocomplete [definition]=\"bankActDefintion\" [control]=\"bankAcct\"\n        [optionsTableDefinition]=\"bankOptTable\"></app-autocomplete>\n        </div>\n        \n  \n        <mat-form-field class=\"example-full-width mt-1\" >\n          <mat-label>Instrument No.*</mat-label>\n          <textarea matInput placeholder=\"\" maxlength=\"9\" formControlName=\"finTranVno\"></textarea>\n  \n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width mt-1\">\n          <mat-label>Amount*</mat-label>\n          <textarea matInput placeholder=\"\"   appOmitSpecialCharacters=\"integer\" formControlName=\"Amount\"  (focusout)=\"validateFloatKeyPress($event.target)\"></textarea>\n  \n        </mat-form-field>\n  \n        <div class=\"action_btn\">\n          <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"  (click)=\"saveBankPayment()\" >{{btnSave}}</button>&nbsp;\n        <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"  (click)=\"reset()\">Reset</button>&nbsp;\n        <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\" routerLink=\"../bankPayments\">Back</button>\n        </div>\n\n      </div>\n      \n   \n      \n    </form>\n  \n  </mat-card>\n  \n  <div *ngIf=\"showTable == true\">\n    <table mat-table  [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n  \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> S.No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranSno}} </td>\n      </ng-container>\n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Head Of Account </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.accName}} </td>\n      </ng-container>\n    \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.accShName}} </td>\n      </ng-container>\n    \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> City Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.cityName}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranDesc}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"VoucherNo\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Voucher No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranVno}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Amount\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranAmount}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Discount\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Discount </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Discount}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Actions\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n        <!-- <td mat-cell *matCellDef=\"let element\"> {{element.Actions}} </td> -->\n        <td mat-cell *matCellDef=\"let element\"> <i title=\"Edit\" class=\"fas fa-pencil-alt\"  (click)=\"addOrEdit(element)\" ></i> | <i title=\"Delete\"\n          class=\"far fa-trash-alt\" (click)=\"deleteItem(element)\"></i> </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-payment/bank-payment.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-payment/bank-payment.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-3\">\n\n  <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\" class=\"buttons md_flex\">\n    <div fxFlex=\"50\">\n      <h4 class=\"pharmacyHeading\"> Bank Payment (BP) List</h4>\n    </div>\n    <div fxFlex=\"50\" fxLayoutGap=\"10px\" class=\"pharma-finance\">\n     <div class=\"action_btn\">\n      <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\" routerLink=\"../bpRegister\" title=\"Bank Payment Receipt\">Bank Payment Register</button>&nbsp;\n      <!-- <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\" routerLink=\"../areaWiseCollections\" title=\"Areawise Collection\">Areawise Collection</button>&nbsp; -->\n      <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"  (click)=\"cashRegi()\" title=\"Add Bank Payment Voucher Entry\">Add Bank Payment </button>\n      <button type=\"button\" class=\"finance-button ml-1\" mat-raised-button color=\"primary\" [routerLink]=\"['../FinanceTransaction']\" >Back </button>\n     </div>\n    </div>\n  </div>\n\n  <div class=\"mt-2\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <div fxFlex=\"100\">\n\n        <div class=\"master-table table-responsive mat-elevation-z4\" id=\"table-scroll\">\n          <table mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"shName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranHeadDate}}</td>\n            </ng-container>\n           \n            <ng-container matColumnDef=\"ProductName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Vocuher No.</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranVno}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductPack\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Contra Name</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.contraAccName}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"Actions\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n              <!-- <td mat-cell *matCellDef=\"let element\"> {{element.Actions}} </td> -->\n              <td mat-cell *matCellDef=\"let element\"> <i title=\"Edit\" class=\"fas fa-pencil-alt\"  (click)=\"getByEdit(element)\" ></i> | <i title=\"Delete\"\n                class=\"far fa-trash-alt\" (click)=\"deleteItem(element)\"></i> </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n\n          </table>\n\n\n          \n          <mat-paginator class=\"mat-paginator-sticky custom_paginator\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-receipt-entry/bank-receipt-entry.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-receipt-entry/bank-receipt-entry.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n  <div fxLayout=\"row\" class=\"md_flex\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"40\" class=\"align-self-center\">\n      <h4 class=\"pharmacyHeading\">Bank Receipt  Entry</h4>\n    </div>\n\n    <div fxFlex=\"40\" *ngIf=\"showTable\">\n      <h5 class=\"pharmacyHeading\">No :&nbsp;&nbsp;<span>{{headNo}}</span></h5>\n    </div>\n\n    <div fxFlex=\"30\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb mb-0\">\n          <!-- <li class=\"breadcrumb-item active\">\n              <a>Home</a>\n            </li>\n            <li class=\"breadcrumb-item active\">\n              <a>Finance</a>\n            </li> -->\n          <li class=\"breadcrumb-item\" aria-current=\"page\">Bank Receipt  Entry</li>\n        </ol>\n      </nav>\n\n    </div>\n  </div>\n</div>\n\n<mat-card class=\"m-2 rounded\">\n  <form [formGroup]=\"bankReceiptVoucherEntryFormGroup\">\n    <div fxFlex=\"100\" fxlayout=\"row\" fxlayout.xs=\"column\" fxLayoutGap=\"60px\" fxLayoutGap.md=\"20px\"  class=\"buttons\">\n\n      <mat-form-field appearance=\"fill\" class=\"mat_date mt-1\" style=\"width: 140px;\">\n        <mat-label>Choose a date</mat-label>\n        <input matInput [matDatepicker]=\"picker\"  [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"finDate\" #finTranDate>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n\n    \n      <div class=\"mt-1 d-inline\">\n        <app-autocomplete [definition]=\"contraActDefintion\" [control]=\"contraAcct\"\n        [optionsTableDefinition]=\"contraActsOptTable\"></app-autocomplete>\n      </div>\n\n      <div class=\"d-inline mt-1\">\n        <app-autocomplete [definition]=\"customAccountAutoCompleteDef\" [control]=\"accName\"\n        [optionsTableDefinition]=\"customAccountsOptsTable\"></app-autocomplete>\n      </div>\n\n\n      <mat-form-field class=\"example-full-width mt-2\">\n        <mat-label>SH.Name</mat-label>\n        <input matInput disabled value=\"\" formControlName=\"accShName\">\n\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width mt-2\">\n        <mat-label>City Name</mat-label>\n        <input matInput disabled value=\"\" formControlName=\"cityName\">\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"example-full-width mt-2\">\n        <mat-label>Description</mat-label>\n        <textarea matInput placeholder=\"\" formControlName=\"finTranDesc\"></textarea>\n      </mat-form-field>\n\n      <!-- <mat-form-field class=\"example-full-width\">\n        <mat-label>Vocuher No.*</mat-label>\n        <textarea matInput placeholder=\"\" formControlName=\"finTranVno\"></textarea>\n\n      </mat-form-field> -->\n\n      <mat-form-field appearance=\"outline\" class=\"mt-2\">\n        <mat-label>Instrument type</mat-label>\n        <mat-select [formControl]=\"instruType\" (selectionChange)=\"changefirmgroup($event.value)\">\n          <mat-option *ngFor=\"let dat of instrumentTypes\" [value]=\"dat.id\">\n            {{dat.type}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div *ngIf=\"showBankact == true\" class=\"d-inline mt-1\">\n        <app-autocomplete [definition]=\"bankActDefintion\" [control]=\"bankAcct\"\n        [optionsTableDefinition]=\"bankOptTable\"></app-autocomplete>\n      </div>\n\n      <mat-form-field class=\"example-full-width mt-2\">\n        <mat-label>Instrument No.*</mat-label>\n        <textarea matInput placeholder=\"\" maxlength=\"9\" formControlName=\"finTranVno\"></textarea>\n\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width mt-2\">\n        <mat-label>Amount*</mat-label>\n        <textarea matInput placeholder=\"\" formControlName=\"Amount\"   appOmitSpecialCharacters=\"integer\"  (focusout)=\"validateFloatKeyPress($event.target)\"></textarea>\n\n      </mat-form-field>\n\n      <div class=\"action_btn\">\n        <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"  (click)=\"saveRecptVchr()\" >{{btnSave}}</button> &nbsp;\n      <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"\n        (click)=\"reset()\">Reset</button>&nbsp;\n      <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"\n        routerLink=\"../bankReceipts\">Back</button>\n      </div>\n\n\n    </div>\n\n\n\n  </form>\n\n</mat-card>\n\n<div *ngIf=\"showTable == true\">\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> S.No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.finTranSno}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Head Of Account </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.accName}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.accShName}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> City Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.cityName}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.finTranDesc}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"VoucherNo\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Voucher No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.finTranVno}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Amount\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.finTranAmount}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Discount\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Discount </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Discount}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Actions\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n      <!-- <td mat-cell *matCellDef=\"let element\"> {{element.Actions}} </td> -->\n      <td mat-cell *matCellDef=\"let element\"> <i title=\"Edit\" class=\"fas fa-pencil-alt\"\n          (click)=\"addOrEdit(element)\"></i> | <i title=\"Delete\" class=\"far fa-trash-alt\" (click)=\"deleteItem(element)\"></i>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-receipt-register/bank-receipt-register.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-receipt-register/bank-receipt-register.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n  <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"60\">\n      <h4 class=\"pharmacyHeading\">Bank Receipt Register</h4>\n    </div>\n    \n  </div>\n\n\n  <mat-accordion class=\"example-headers-align\">\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n      <form [formGroup]=\"bankReceiptRegisterFormGroup\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\"\n          fxLayoutWrap fxLayoutGap=\"10px\">\n\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"100\" class=\"user-card w-100\">\n            <mat-card class=\"CashReceiptCard\" fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"row\" >\n              <!-- From Date -->\n              <mat-form-field fxFlex=\"15\" fxFlex.sm=\"19\" fxFlex.xs=\"100\" appearance=\"outline\" class=\"e_mat_date\">\n                <mat-label>From Date</mat-label>\n                <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDatePicker></mat-datepicker>\n              </mat-form-field>\n          \n              <!-- To Date -->\n              <mat-form-field fxFlex=\"15\" fxFlex.sm=\"17\" fxFlex.xs=\"100\" appearance=\"outline\" class=\"e_mat_date\">\n                <mat-label>To Date</mat-label>\n                <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDatePicker></mat-datepicker>\n              </mat-form-field>\n          \n              <!-- Want Voucher Total -->\n              <div fxFlex=\"30\" fxFlex.xs=\"100\" fxFlex.sm=\"24\" class=\"radio-group d-flex text-center mt-2\">\n                <span style=\"margin-right: 8px;\">Want Voucher Total:</span>\n                <mat-radio-group formControlName=\"wantVoucherTotal\" fxLayout=\"row\" fxLayoutGap=\"16px\">\n                  <mat-radio-button value=\"yes\" class=\"mr-2\">Yes</mat-radio-button>\n                  <mat-radio-button value=\"no\">No</mat-radio-button>\n                </mat-radio-group>\n              </div>\n          \n              <!-- Buttons -->\n              <div fxFlex=\"24\" fxFlex.xs=\"100\" class=\"text-center\" fxFlex.sm=\"20\">\n                <button type=\"button\" class=\"finance-button mt-1\" mat-raised-button color=\"primary\" (click)=\"nextStep(bankReceiptRegisterFormGroup.value)\">Generate</button>\n                <button type=\"button\" class=\"finance-button mt-1 ml-1\" mat-raised-button (click)=\"resetForm()\">Reset</button>\n                <!-- <button type=\"button\" class=\"finance-button\" mat-raised-button>Cancel</button> -->\n                \n              </div>\n              <div fxFlex=\"8\" fxFlex.xs=\"100\" class=\"text-center\">\n                <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"\n                (click)=\"goback()\">Back</button>\n              </div>\n            </mat-card>\n            \n          </div>\n          \n        </div>\n      </form>\n\n    </mat-expansion-panel>\n\n    <ng-template [ngIf]=\"openPanel\">\n      <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle class=\"full-height\">\n        <!-- Action Buttons for Export -->\n        <div class=\"action-icons\">\n          <!-- Excel Export Button -->\n          <button mat-icon-button (click)=\"exportToExcel(bankReceiptRegisterFormGroup.value)\">\n            <img src=\"assets/new_xl.png\" alt=\"Excel\" class=\"icon-img\" />\n          </button>\n    \n          <!-- PDF Export Button -->\n          <button mat-icon-button (click)=\"exportToPdf()\">\n            <img src=\"assets/new_pdf.png\" alt=\"PDF\" class=\"icon-img\" />\n          </button>\n        </div>\n    \n        <!-- Table Container -->\n        <div class=\"table-container table-responsive mt-4\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n            <!-- Columns Definitions -->\n            <ng-container matColumnDef=\"voucherNo\">\n              <th mat-header-cell *matHeaderCellDef> Voucher No. </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranHeadNo}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"voucherDate\">\n              <th mat-header-cell *matHeaderCellDef> Voucher Date </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranDate}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"AccountName\">\n              <th mat-header-cell *matHeaderCellDef> Account Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.accName}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"Description\">\n              <th mat-header-cell *matHeaderCellDef> Description </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranDesc}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"Amount\">\n              <th mat-header-cell *matHeaderCellDef> Amount </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranAmount}} </td>\n            </ng-container>\n    \n            <!-- <ng-container matColumnDef=\"Discount\">\n              <th mat-header-cell *matHeaderCellDef> Discount </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.Discount}} </td>\n            </ng-container> -->\n    \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <mat-paginator class=\"mat-paginator-sticky custom_paginator\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n\n        </div>\n    \n        <mat-action-row>\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </ng-template>\n\n  </mat-accordion>\n</div>\n\n  \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-receipt/bank-receipt.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-receipt/bank-receipt.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>bank-receipt works!</p> -->\n\n<div class=\"m-3\">\n\n  <div fxLayout=\"row\" class=\"md_flex\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"50\">\n      <h4 class=\"pharmacyHeading\">Bank Receipt (BR) List</h4>\n    </div>\n    <div fxFlex=\"50\" fxLayoutGap=\"10px\" class=\"\">\n      <div class=\"\">\n        <button type=\"button\" class=\"finance-button\" mat-raised-button color=\"primary\" routerLink=\"../bankreceiptRegister\"  title=\"Bank Receipt Register\">Bank Receipt\n        Register</button>&nbsp;\n      <!-- <button type=\"button\"  class=\"finance-button\"  mat-raised-button color=\"primary\" routerLink=\"../areaWiseCollections\"  title=\"Areawise Collection\">Areawise\n        Collection</button>&nbsp; -->\n      <button type=\"button\"  class=\"finance-button\" mat-raised-button color=\"primary\" (click)=\"clickBank()\" title=\"Add Bank Receipt Voucher Entry\">Add Bank Receipt </button>\n      <button type=\"button\" class=\"finance-button ml-1\" mat-raised-button color=\"primary\" [routerLink]=\"['../FinanceTransaction']\" >Back </button></div>\n    </div>\n  </div>\n\n  <div class=\"mt-2\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <div fxFlex=\"100\">\n\n        <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n          <table mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"shName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranHeadDate}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"ProductName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Vocuher No.</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranVno}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductPack\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Contra Name</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranContraId}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Actions\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n              <td mat-cell *matCellDef=\"let element\"> <i title=\"Edit\" class=\"fas fa-pencil-alt\"\n                  (click)=\"getByEdit(element)\"></i> | <i title=\"Delete\" class=\"far fa-trash-alt\"\n                  (click)=\"deleteItem(element)\"></i> </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n\n          </table>\n        </div>\n        <mat-paginator class=\"mat-paginator-sticky custom_paginator\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-payment-register/cash-payment-register.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-payment-register/cash-payment-register.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n  <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"60\">\n      <h4 class=\"pharmacyHeading\">Cash Payment Register</h4>\n    </div>\n    \n  </div>\n\n\n  <mat-accordion class=\"example-headers-align\">\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n      <form [formGroup]=\"cashPaymentRegisterFormGroup\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\"\n          fxLayoutWrap fxLayoutGap=\"10px\">\n\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"100\" class=\"user-card w-100\">\n            <mat-card class=\"CashReceiptCard\" fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"row\" >\n              <!-- From Date -->\n              <mat-form-field fxFlex=\"15\" fxFlex.sm=\"19\" fxFlex.xs=\"100\" appearance=\"outline\" class=\"e_mat_date\">\n                <mat-label>From Date</mat-label>\n                <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDatePicker></mat-datepicker>\n              </mat-form-field>\n          \n              <!-- To Date -->\n              <mat-form-field fxFlex=\"15\" fxFlex.sm=\"17\" fxFlex.xs=\"100\" appearance=\"outline\" class=\"e_mat_date\">\n                <mat-label>To Date</mat-label>\n                <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDatePicker></mat-datepicker>\n              </mat-form-field>\n          \n              <!-- Want Voucher Total -->\n              <div fxFlex=\"30\" fxFlex.xs=\"100\" fxFlex.sm=\"24\" class=\"radio-group d-flex text-center mt-2\">\n                <span style=\"margin-right: 8px;\">Want Voucher Total:</span>\n                <mat-radio-group formControlName=\"wantVoucherTotal\" fxLayout=\"row\" fxLayoutGap=\"16px\">\n                  <mat-radio-button value=\"yes\" class=\"ml-1 mr-2\">Yes</mat-radio-button>\n                  <mat-radio-button value=\"no\">No</mat-radio-button>\n                </mat-radio-group>\n              </div>\n          \n              <!-- Buttons -->\n              <div fxFlex=\"24\" fxFlex.xs=\"100\" class=\"text-center\" fxFlex.sm=\"20\">\n                <button type=\"button\" class=\"finance-button mt-1 mr-2\" mat-raised-button color=\"primary\" (click)=\"nextStep(cashPaymentRegisterFormGroup.value)\">Generate</button>\n                <button type=\"button\" class=\"finance-button mt-1\" mat-raised-button (click)=\"resetForm()\">Reset</button>                \n              </div>\n\n              <div fxFlex=\"8\" fxFlex.xs=\"100\" class=\"text-center\">\n                <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"\n                    (click)=\"goback()\">Back</button>\n              </div>\n            </mat-card>\n          </div>\n          \n        </div>\n      </form>\n\n    </mat-expansion-panel>\n\n    <ng-template [ngIf]=\"openPanel\">\n      <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle class=\"full-height\">\n        <!-- Action Buttons for Export -->\n        <div class=\"action-icons\">\n          <!-- Excel Export Button -->\n          <button mat-icon-button (click)=\"exportToExcel(cashPaymentRegisterFormGroup.value)\">\n            <img src=\"assets/new_xl.png\" alt=\"Excel\" class=\"icon-img\" />\n          </button>\n    \n          <!-- PDF Export Button -->\n          <button mat-icon-button (click)=\"exportToPdf()\">\n            <img src=\"assets/new_pdf.png\" alt=\"PDF\" class=\"icon-img\" />\n          </button>\n        </div>\n    \n        <!-- Table Container -->\n        <div class=\"table-container table-responsive mt-4\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n            <!-- Columns Definitions -->\n            <ng-container matColumnDef=\"voucherNo\">\n              <th mat-header-cell *matHeaderCellDef> Voucher No. </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranHeadNo}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"voucherDate\">\n              <th mat-header-cell *matHeaderCellDef> Voucher Date </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranDate}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"AccountName\">\n              <th mat-header-cell *matHeaderCellDef> Account Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.accName}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"Description\">\n              <th mat-header-cell *matHeaderCellDef> Description </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranDesc}} </td>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"Amount\">\n              <th mat-header-cell *matHeaderCellDef> Amount </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranAmount}} </td>\n            </ng-container>\n    \n            <!-- <ng-container matColumnDef=\"Discount\">\n              <th mat-header-cell *matHeaderCellDef> Discount </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.Discount}} </td>\n            </ng-container> -->\n    \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <mat-paginator class=\"mat-paginator-sticky custom_paginator\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n\n        </div>\n    \n        <mat-action-row>\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </ng-template>\n\n  </mat-accordion>\n</div>\n\n  \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-payment-voucher-entry/cash-payment-voucher-entry.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-payment-voucher-entry/cash-payment-voucher-entry.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-3\">\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n      fxLayoutGap=\"10px\">\n      <div fxFlex=\"40\">\n        <h4 class=\"pharmacyHeading\">Cash Payment  Entry</h4>\n      </div>\n      <div fxFlex=\"40\"  *ngIf=\"showTable\">\n        <h5 class=\"pharmacyHeading\">No :&nbsp;&nbsp;<span> {{headNo}}</span></h5>\n      </div>\n      <div fxFlex=\"30\"></div>\n      <div fxFlex=\"30\">\n        <nav aria-label=\"breadcrumb\">\n          <ol class=\"breadcrumb mb-0\">\n            <li class=\"breadcrumb-item active\">\n              <a>Home</a>\n            </li>\n            <li class=\"breadcrumb-item active\">\n              <a>Finance</a>\n            </li>\n            <li class=\"breadcrumb-item\" aria-current=\"page\">Cash Payment Entry</li>\n          </ol>\n        </nav>\n  \n      </div>\n    </div>\n  </div>\n  \n  <mat-card class=\"rounded m-2\">\n    <form [formGroup]=\"cashPaymentVoucherEntryFormGroup\">\n      <div fxFlex=\"100\" fxlayout=\"row\" fxlayout.xs=\"column\" fxLayoutGap=\"60px\"  class=\"buttons\">\n  \n        <mat-form-field appearance=\"fill\" class=\"mat_date\">\n          <mat-label>Choose a date</mat-label>\n          <input matInput [matDatepicker]=\"picker\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"finDate\" #finTranDate>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n  \n        <mat-form-field class=\"example-full-width mt-3\">\n          <mat-label>Contra Account</mat-label>\n          <input matInput disabled value=\"Cash On Hand\" formControlName=\"finContraId\">\n        </mat-form-field>\n  \n        <!-- <mat-form-field class=\"example-full-width\">\n          <mat-label>Head Of Account*</mat-label> -->\n          <!-- <textarea matInput placeholder=\"\" formControlName=\"customAccId\"></textarea> -->\n          \n  \n        <!-- </mat-form-field> -->\n  \n        <div class=\"mt-1 d-inline\">\n          <app-autocomplete [definition]=\"customAccountAutoCompleteDef\" [control]=\"accName\"\n        [optionsTableDefinition]=\"customAccountsOptsTable\"></app-autocomplete>\n        </div>\n  \n  \n        <mat-form-field class=\"example-full-width mt-1\">\n          <mat-label>SH.Name</mat-label>\n          <input matInput disabled value=\"\" formControlName=\"accShName\">\n  \n        </mat-form-field>\n  \n        <mat-form-field class=\"example-full-width mt-1\">\n          <mat-label>City Name</mat-label>\n          <input matInput disabled value=\"\" formControlName=\"cityName\">\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-full-width mt-1\">\n          <mat-label>Description</mat-label>\n          <textarea matInput placeholder=\"\" formControlName=\"finTranDesc\"></textarea>\n        </mat-form-field>\n  \n        <mat-form-field class=\"example-full-width mt-1\" >\n          <mat-label>RC.No.*</mat-label>\n          <textarea matInput placeholder=\"\" maxlength=\"9\" formControlName=\"finTranVno\"></textarea>\n  \n        </mat-form-field>\n  \n        \n  \n        <mat-form-field class=\"example-full-width mt-1\">\n          <mat-label>Amount*</mat-label>\n          <textarea matInput placeholder=\"\" formControlName=\"Amount\"   appOmitSpecialCharacters=\"integer\" (focusout)=\"validateFloatKeyPress($event.target)\"></textarea>\n  \n        </mat-form-field>\n  \n        <!-- <mat-form-field class=\"example-full-width\">\n          <mat-label>Discount(optional)</mat-label>\n          <textarea matInput placeholder=\"\" formControlName=\"finDisc\"></textarea>\n        </mat-form-field> -->\n       \n\n        <div class=\"action_btn\">\n          <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"  (click)=\"cashPaymentVchrSave()\" >{{btnSave}}</button>&nbsp;\n          <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"  (click)=\"reset()\">Reset</button>&nbsp;\n          <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\" routerLink=\"../cashPayments\">Back</button>\n        </div>\n\n  \n      </div>\n      \n   \n      \n    </form>\n  \n  </mat-card>\n  \n  <div  *ngIf=\"showTable == true\">\n    <table mat-table  [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n  \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> S.No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranSno}} </td>\n      </ng-container>\n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Head Of Account </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.accName}} </td>\n      </ng-container>\n    \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.accShName}} </td>\n      </ng-container>\n    \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> City Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.cityName}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranDesc}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"rcNo\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> RC No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranVno}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Amount\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranAmount}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Discount\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Discount </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Discount}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Actions\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n        <!-- <td mat-cell *matCellDef=\"let element\"> {{element.Actions}} </td> -->\n        <td mat-cell *matCellDef=\"let element\"> <i title=\"Edit\" class=\"fas fa-pencil-alt\"  (click)=\"addOrEdit(element)\" ></i> | <i title=\"Delete\"\n          class=\"far fa-trash-alt\" (click)=\"delete(element)\"></i> </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-payment/cash-payment.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-payment/cash-payment.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-3\">\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n      fxLayoutGap=\"10px\" class=\"md_flex\">\n      <div fxFlex=\"50\">\n        <h4 class=\"pharmacyHeading\">Cash Payment  List</h4>\n      </div>\n      <div fxFlex=\"50\" fxLayoutGap=\"10px\" class=\"pharma-finance\">\n       <div class=\"action_btn\">\n        <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\" routerLink=\"../cpRegister\" title=\"Cash Payment Register\">Cash Payment Register</button>&nbsp;\n        <!-- <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\" routerLink=\"../areaWiseCollections\" title=\"Areawise Collection\">Areawise Collection</button>&nbsp; -->\n        <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\" (click)=\"clickCashPayment()\"  title=\"Add Cash Payment Voucher Entry\">Add Cash Payment </button>\n        <button type=\"button\" class=\"finance-button ml-1\" mat-raised-button color=\"primary\" [routerLink]=\"['../FinanceTransaction']\" >Back </button>\n       </div>\n      </div>\n    </div>\n  \n    <div class=\"mt-2\">\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\">\n  \n          <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n            <table mat-table [dataSource]=\"dataSource\" matSort>\n              <ng-container matColumnDef=\"shName\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.finTranHeadDate}}</td>\n              </ng-container>\n             \n              <ng-container matColumnDef=\"ProductName\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Vocuher No.</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.finTranVno}}</td>\n              </ng-container>\n              <ng-container matColumnDef=\"ProductPack\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Contra Name</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.contraAccName}}</td>\n              </ng-container>\n            \n              <ng-container matColumnDef=\"Actions\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                <!-- <td mat-cell *matCellDef=\"let element\"> {{element.Actions}} </td> -->\n                <td mat-cell *matCellDef=\"let element\"> <i title=\"Edit\" class=\"fas fa-pencil-alt\"  (click)=\"getByEdit(element)\" ></i> | <i title=\"Delete\"\n                  class=\"far fa-trash-alt\" (click)=\"deletePayemnt(element)\"></i> </td>\n              </ng-container>\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  \n  \n            </table>\n  \n  \n            \n            <mat-paginator class=\"mat-paginator-sticky custom_paginator\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n          </div>\n  \n        </div>\n  \n      </div>\n  \n    </div>\n  \n  \n  \n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-receipt-list/cash-receipt-list.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-receipt-list/cash-receipt-list.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\" >\n    <div fxFlex=\"50\" class=\"align-self-center\">\n      <h4 class=\"pharmacyHeading\">Cash Receipt List</h4>\n    </div>\n    <div fxFlex=\"50\" fxLayoutGap=\"10px\" class=\"pharma-finance\">\n      <div  class=\"action_btn\">\n        <button type=\"button\"  class=\"finance-button\" mat-raised-button color=\"primary\" routerLink=\"../cashReceiptRegister\" title=\"Cash Receipt Register\">Cash Receipt Register</button>&nbsp;\n      <!-- <button type=\"button\" class=\"finance-button\" mat-raised-button color=\"primary\" routerLink=\"../areaWiseCollections\" title=\"Areawise Collection\">Areawise Collection</button>&nbsp; -->\n      <button type=\"button\" class=\"finance-button\" mat-raised-button color=\"primary\" (click)=\"clickCashList()\" title=\"Add Cash Receipt Voucher Entry\">Add Cash Receipt </button>\n      <button type=\"button\" class=\"finance-button ml-1\" mat-raised-button color=\"primary\" [routerLink]=\"['../FinanceTransaction']\" >Back </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-2\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <div fxFlex=\"100\">\n\n        <div class=\"master-table table-responsive mat-elevation-z4\" id=\"table-scroll\">\n          <table mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"shName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranHeadDate}}</td>\n            </ng-container>\n           \n            <ng-container matColumnDef=\"ProductName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Vocuher No.</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranVno}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductPack\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Contra Name</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.contraAccName}}</td>\n            </ng-container>\n          \n            <ng-container matColumnDef=\"Actions\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n              <!-- <td mat-cell *matCellDef=\"let element\"> {{element.Actions}} </td> -->\n              <td mat-cell *matCellDef=\"let element\"> \n                <!-- <i title=\"Edit\" class=\"fas fa-pencil-alt\"  (click)=\"getByEdit(element)\" ></i> -->\n                <img src=\"../../../../assets/new_edit2.png\" height=\"18px\" width=\"20px\" title=\"Edit\" class=\"fas fa-pencil-alt\"  (click)=\"getByEdit(element)\" >\n                 |\n                <!-- <i title=\"Delete\" class=\"far fa-trash-alt\" (click)=\"deleteId(element)\"></i> -->\n                <img src=\"../../../../assets/new_delete2.png\" height=\"18px\" width=\"20px\" title=\"Delete\" class=\"far fa-trash-alt\" (click)=\"deleteId(element)\">\n               </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n\n          </table>\n        </div>\n        <mat-paginator class=\"mat-paginator-sticky custom_paginator\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-receipt-register/cash-receipt-register.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-receipt-register/cash-receipt-register.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n  <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"60\">\n      <h4 class=\"pharmacyHeading\">Cash Receipt Register</h4>\n    </div>\n    \n  </div>\n\n\n  <mat-accordion class=\"example-headers-align\">\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n      <form [formGroup]=\"cashReceiptRegisterFormGroup\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\"\n          fxLayoutWrap fxLayoutGap=\"10px\" class=\" justify-content-center\">\n\n          <div fxLayout=\"row\" class=\"user-card w-100\">\n            <mat-card class=\"CashReceiptCard\" fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"row\" >\n              <!-- From Date -->\n              <mat-form-field fxFlex=\"15\" fxFlex.sm=\"19\" fxFlex.xs=\"100\" appearance=\"outline\" class=\"e_mat_date\">\n                <mat-label>From Date</mat-label>\n                <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDatePicker></mat-datepicker>\n              </mat-form-field>\n          \n              <!-- To Date -->\n              <mat-form-field fxFlex=\"15\" fxFlex.sm=\"17\" fxFlex.xs=\"100\" appearance=\"outline\" class=\"e_mat_date\">\n                <mat-label>To Date</mat-label>\n                <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDatePicker></mat-datepicker>\n              </mat-form-field>\n          \n              <!-- Want Voucher Total -->\n              <div fxFlex=\"30\" fxFlex.xs=\"100\" fxFlex.sm=\"24\" class=\"radio-group text-center mt-2\">\n                <span style=\"margin-right: 8px;\">Want Voucher Total:</span>\n                <mat-radio-group formControlName=\"wantVoucherTotal\">\n                  <mat-radio-button value=\"yes\" class=\"mr-2\">Yes</mat-radio-button>\n                  <mat-radio-button value=\"no\">No</mat-radio-button>\n                </mat-radio-group>\n              </div>\n          \n              <!-- Buttons -->\n              <div fxFlex=\"24\" fxFlex.xs=\"100\" class=\"text-center\" fxFlex.sm=\"20\">\n                <button type=\"button\" class=\"finance-button ml-1 mt-1\" mat-raised-button color=\"primary\" (click)=\"generate(cashReceiptRegisterFormGroup.value)\">Generate</button>\n                <button type=\"button\" class=\"finance-button ml-1 mt-1\" mat-raised-button (click)=\"resetForm()\">Reset</button>\n                <!-- <button type=\"button\" class=\"finance-button\" mat-raised-button>Cancel</button> -->\n                \n              </div>\n              <div fxFlex=\"8\" fxFlex.xs=\"100\" class=\"text-center\">\n               <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"\n               (click)=\"goback()\">Back</button>\n              </div>\n            </mat-card>\n          </div>\n          \n        </div>\n      </form>\n\n    </mat-expansion-panel>\n\n    <ng-template [ngIf]=\"openPanel\">\n      <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle class=\"full-height\">\n        <!-- Action Buttons for Export -->\n        <div class=\"action-icons\">\n          <!-- Excel Export Button -->\n          <button mat-icon-button (click)=\"exportToExcel(cashReceiptRegisterFormGroup.value)\">\n            <img src=\"assets/new_xl.png\" alt=\"Excel\" class=\"icon-img\" />\n          </button>\n          \n    \n          <!-- PDF Export Button -->\n          <button mat-icon-button (click)=\"exportToPdf()\">\n            <img src=\"assets/new_pdf.png\" alt=\"PDF\" class=\"icon-img\" />\n          </button>\n        </div>\n    \n        <!-- Table Container -->\n        <div class=\"table-container table-responsive mt-4\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n            <!-- Columns Definitions -->\n            <ng-container matColumnDef=\"voucherNo\">\n              <th mat-header-cell *matHeaderCellDef> Voucher No. </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranHeadNo}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"voucherDate\">\n              <th mat-header-cell *matHeaderCellDef> Voucher Date </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranDate}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"AccountName\">\n              <th mat-header-cell *matHeaderCellDef> Account Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.accName}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"Description\">\n              <th mat-header-cell *matHeaderCellDef> Description </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranDesc}} </td>\n            </ng-container>\n        \n            <ng-container matColumnDef=\"Amount\">\n              <th mat-header-cell *matHeaderCellDef> Amount </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.finTranAmount}} </td>\n            </ng-container>\n        \n            <!-- <ng-container matColumnDef=\"Discount\">\n              <th mat-header-cell *matHeaderCellDef> Discount </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.Discount}} </td>\n            </ng-container> -->\n        \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        \n          <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n\n        </div>\n        \n    \n        <mat-action-row>\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </ng-template>\n    \n\n  </mat-accordion>\n</div>\n\n  \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-receipt-voucher-entry/cash-receipt-voucher-entry.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-receipt-voucher-entry/cash-receipt-voucher-entry.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n  <div fxLayout=\"row\" class=\" md_flex\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"40\" class=\"align-self-center\">\n      <h4 class=\"pharmacyHeading\">Cash Receipt  Entry</h4>\n    </div>\n\n    <div fxFlex=\"40\"  *ngIf=\"showTable\">\n      <h5 class=\"pharmacyHeading\">No :&nbsp;&nbsp;<span>{{headNo}}</span></h5>\n    </div>\n    <div fxFlex=\"30\" fxFlex.sm=\"0\"></div>\n    <div fxFlex=\"30\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb mb-0\">\n          <li class=\"breadcrumb-item active\">\n            <a>Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\">\n            <a>Finance</a>\n          </li>\n          <li class=\"breadcrumb-item\" aria-current=\"page\">Cash Receipt  Entry</li>\n        </ol>\n      </nav>\n\n    </div>\n  </div>\n</div>\n\n<mat-card class=\"m-2 rounded\">\n  <form [formGroup]=\"cashReceiptVoucherEntryFormGroup\">\n    <div fxFlex=\"100\" fxlayout=\"row\" fxlayout.xs=\"column\" fxLayoutGap=\"60px\" fxLayoutGap.md=\"20px\"  class=\"buttons\">\n\n      <mat-form-field appearance=\"fill\" class=\"mat_date mt-1\" style=\"width: 140px;\">\n        <mat-label>Choose a date</mat-label>\n        <input matInput [matDatepicker]=\"picker\"  [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"finDate\" #finTranDate>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width mt-3\">\n        <mat-label>Contra Account</mat-label>\n        <input matInput disabled value=\"Cash On Hand\" formControlName=\"finContraId\">\n      </mat-form-field>\n\n      <!-- <mat-form-field class=\"example-full-width\">\n        <mat-label>Head Of Account*</mat-label> -->\n        <!-- <textarea matInput placeholder=\"\" formControlName=\"customAccId\"></textarea> -->\n        \n\n      <!-- </mat-form-field> -->\n\n      <div class=\"mt-1 d-inline\">\n        <app-autocomplete [definition]=\"customAccountAutoCompleteDef\" [control]=\"accName\"\n      [optionsTableDefinition]=\"customAccountsOptsTable\"></app-autocomplete>\n      </div>\n\n\n      <mat-form-field class=\"example-full-width mt-3\">\n        <mat-label>SH.Name</mat-label>\n        <input matInput disabled value=\"\" formControlName=\"accShName\">\n\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width mt-3\">\n        <mat-label>City Name</mat-label>\n        <input matInput disabled value=\"\" formControlName=\"cityName\">\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"example-full-width mt-1\">\n        <mat-label>Description</mat-label>\n        <textarea matInput placeholder=\"\" formControlName=\"finTranDesc\"></textarea>\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width mt-1\" >\n        <mat-label>RC.No.*</mat-label>\n        <textarea matInput placeholder=\"\" maxlength=\"9\" formControlName=\"finTranVno\"></textarea>\n\n      </mat-form-field>\n\n      \n\n      <mat-form-field class=\"example-full-width mt-1\">\n        <mat-label>Amount*</mat-label>\n        <textarea matInput placeholder=\"\" formControlName=\"Amount\"  appOmitSpecialCharacters=\"integer\" (focusout)=\"validateFloatKeyPress($event.target)\"></textarea>\n\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width mt-1\">\n        <mat-label>Discount(optional)</mat-label>\n        <textarea matInput placeholder=\"\" formControlName=\"finDisc\"></textarea>\n      </mat-form-field>\n      \n      <div class=\"action_btn\">\n        <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"  (click)=\"saveCashRcptVchr()\" >{{btnSave}}</button>&nbsp;\n      <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"  (click)=\"reset()\">Reset</button>&nbsp;\n      <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\" routerLink=\"../cashReceipts\">Back</button>\n\n      </div>\n     </div>\n    \n \n    \n  </form>\n\n</mat-card>\n\n<div *ngIf=\"showTable == true\">\n  <table mat-table  [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> S.No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.finTranSno}} </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Head Of Account </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.accName}} </td>\n    </ng-container>\n  \n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.accShName}} </td>\n    </ng-container>\n  \n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> City Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.cityName}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.finTranDesc}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"rcNo\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> RC No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.finTranVno}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Amount\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.finTranAmount}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Discount\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Discount </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Discount}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Actions\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n      <!-- <td mat-cell *matCellDef=\"let element\"> {{element.Actions}} </td> -->\n      <td mat-cell *matCellDef=\"let element\"> <i title=\"Edit\" class=\"fas fa-pencil-alt\"  (click)=\"addOrEdit(element)\" ></i> | <i title=\"Delete\"\n        class=\"far fa-trash-alt\" (click)=\"deleteVocuherEntry(element)\"></i> </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/finance-register/finance-register.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/finance-register/finance-register.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-5 button-icons\">    \n    \n    <div class=\"row mx-0 mt-3\" style=\"column-gap: 20px;\">\n\n        <button class=\"btn btn-info p-4 col-md-2 mb-2\" *ngFor=\"let item of menuArray\" (click)=\"trans(item?.menuPath)\" >\n    \n            <div><i class=\"mt-1 fa fa-file-signature\"></i></div>                    \n            <div class=\"text-center\" style=\"white-space: normal\">{{item?.menuName + ' Register'}} </div>\n\n        </button>\n               \n    \n    </div>\n\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/finance-transaction/finance-transaction.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/finance-transaction/finance-transaction.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-5 button-icons\">\n\n    <div class=\"row mx-0 mt-3\" style=\"column-gap: 20px;\">\n\n        <button class=\"btn btn-info p-4 col-md-2 mb-2\" *ngFor=\"let item of menuArray\" (click)=\"finance(item?.menuPath)\">\n\n            <div *ngIf=\"item.menuName !== '' \">\n                <div *ngIf=\"item?.menuName == 'Cash Receipts' || item?.menuName == 'Cash Payments' \">\n                    <i class=\"mt-1 fa fa-money-bill\" style=\"margin-right: 4px;\"></i>\n                <i class=\"fas fa-rupee-sign\" style=\"font-size: 13px;\"></i>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Bank Receipts' \">\n                    <div><i class=\"fas fa-arrow-down\"></i></div>\n                  <i class=\"mt-1 fa fa-landmark\"></i>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Bank Payments' \">\n                    <div><i class=\"fas fa-arrow-up\"></i></div>\n              <i class=\"mt-1 fa fa-landmark\"></i>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Journal Vouchers' \">\n                    <div><i class=\"mt-1 fa fa-receipt\" style=\"margin-right: 4px;\"></i></div>\n                </div>\n\n                <div class=\"text-center\" style=\"white-space: normal\">{{item?.menuName}} </div>\n            </div>\n        </button>\n\n\n        <!-- <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div>\n            <div><i class=\"fas fa-arrow-down\"></i></div>\n            <i class=\"mt-1 fa fa-cart-plus\"></i>\n        </div>\n        <div class=\"text-center\" style=\"white-space: normal\">Purchase <br> Register</div>\n    </button>\n\n\n    <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div>\n            <div><i class=\"fas fa-arrow-up\"></i></div>\n            <i class=\"mt-1 fa fa-cart-plus\"></i>\n        </div>\n        <div class=\"text-center\" style=\"white-space: normal\"> Purchase Return <br> Register</div>\n    </button>\n\n\n    <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div><i class=\"mt-1 fa fa-cogs\"></i></div>\n        <div class=\"text-center\" style=\"white-space: normal\">Internal Stock <br> Adjustment Register</div>\n    </button>\n\n\n    <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div><i class=\"mt-1 fa fa-plus-circle\"></i></div>\n        <div class=\"text-center\" style=\"white-space: normal\">Other Purchases <br> Register</div>\n    </button> -->\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/finance.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/finance.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/journal-voucher-entry/journal-voucher-entry.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/journal-voucher-entry/journal-voucher-entry.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n    <div fxLayout=\"row\" class=\"md_flex\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n      fxLayoutGap=\"10px\">\n      <div fxFlex=\"40\" class=\"align-self-center\">\n        <h4 class=\"pharmacyHeading\">Journal Voucher Entry</h4>\n      </div>\n  \n      <div fxFlex=\"40\" class=\"align-self-center\" *ngIf=\"showTable\">\n        <h5 class=\"pharmacyHeading\">No :&nbsp;&nbsp;<span>{{headNo}}</span></h5>\n      </div>\n      <div fxFlex=\"30\"></div>\n      <div fxFlex=\"30\">\n        <nav aria-label=\"breadcrumb\">\n          <ol class=\"breadcrumb mb-0\">\n            <li class=\"breadcrumb-item active\">\n              <a>Home</a>\n            </li>\n            <li class=\"breadcrumb-item active\">\n              <a>Finance</a>\n            </li>\n            <li class=\"breadcrumb-item\" aria-current=\"page\">Journal Voucher Entry</li>\n          </ol>\n        </nav>\n  \n      </div>\n    </div>\n  </div>\n  \n  <mat-card class=\"rounded m-2\">\n    <form [formGroup]=\"journalVoucherEntryFormGroup\">\n      <div fxFlex=\"100\" fxlayout=\"row\" fxlayout.xs=\"column\">\n  \n        <div fxLayoutGap=\"30px\">\n          \n            <mat-form-field appearance=\"fill\" class=\"mat_date mt-1\">\n              <mat-label>Choose a date</mat-label>\n              <input matInput [matDatepicker]=\"picker\"  [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"finDate\" #finTranDate>\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n    \n          <div  class=\"d-inline mt-1\">\n            <app-autocomplete [definition]=\"customAccountAutoCompleteDef\" [control]=\"contarName\"\n          [optionsTableDefinition]=\"customAccountsOptsTable1\"></app-autocomplete>\n          </div>\n    \n    \n         <div class=\"d-inline\">\n          <mat-form-field class=\"example-full-width mt-1\">\n            <mat-label>Debit SH.Name</mat-label>\n            <input matInput disabled value=\"\" formControlName=\"debitAccShName\">\n    \n          </mat-form-field>\n         </div>\n    \n          <div class=\"d-inline\">\n            <mat-form-field class=\"example-full-width mt-1\">\n              <mat-label>Debit City Name</mat-label>\n              <input matInput disabled value=\"\" formControlName=\"debitCityName\">\n            </mat-form-field>\n          </div>\n        </div>\n       \n        <div fxLayoutGap=\"30px\">\n        \n          <div ></div>\n\n          <div  class=\"d-inline mt-1\">\n            <app-autocomplete [definition]=\"customAccountAutoCompleteDef1\" [control]=\"accName\"\n            [optionsTableDefinition]=\"customAccountsOptsTable\"></app-autocomplete>\n          </div>\n  \n  \n          <div class=\"d-inline\">\n            <mat-form-field class=\"example-full-width mt-1\">\n              <mat-label>Credit SH.Name</mat-label>\n              <input matInput disabled value=\"\" formControlName=\"accShName\">\n      \n            </mat-form-field>\n          </div>\n        \n  \n       <div class=\"d-inline\">\n        <mat-form-field class=\"example-full-width mt-1\">\n          <mat-label>Credit City Name</mat-label>\n          <input matInput disabled value=\"\" formControlName=\"cityName\">\n        </mat-form-field>\n       </div>\n        \n        \n       </div>\n\n       <div fxLayoutGap=\"30px\">\n        \n        <div style=\"width: 250px;\"></div>\n\n        <div class=\"d-inline\">\n          <mat-form-field class=\"example-full-width mt-1\">\n            <mat-label>Description</mat-label>\n            <textarea matInput placeholder=\"\" formControlName=\"finTranDesc\"></textarea>\n          </mat-form-field>\n        </div>\n\n        <div class=\"d-inline\">\n          <mat-form-field class=\"example-full-width mt-1\">\n            <mat-label>Amount*</mat-label>\n            <textarea matInput placeholder=\"\" formControlName=\"Amount\"  appOmitSpecialCharacters=\"integer\" (focusout)=\"validateFloatKeyPress($event.target)\"></textarea>\n    \n          </mat-form-field>\n         </div>\n\n       </div>\n        \n        <div class=\"action_btn\">\n          <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"  (click)=\"newSave()\" >{{btnSave}}</button>&nbsp;\n        <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"  (click)=\"reset()\">Reset</button>&nbsp;\n        <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\" routerLink=\"../journalVouchers\">Back</button>\n  \n        </div>\n  \n  \n      </div>\n      \n   \n      \n    </form>\n  \n  </mat-card>\n  \n  <div *ngIf=\"showTable == true\">\n    <table mat-table  [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n  \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> S.No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranSno}} </td>\n      </ng-container>\n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Head Of Account </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.accName}} </td>\n      </ng-container>\n    \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.accShName}} </td>\n      </ng-container>\n    \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> City Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.cityName}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranDesc}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"rcNo\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> RC No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranVno}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Amount\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.finTranAmount}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Discount\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Discount </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Discount}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"Actions\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n        <td mat-cell *matCellDef=\"let element\"> <i title=\"Edit\" class=\"fas fa-pencil-alt\"  (click)=\"addOrEdit(element)\" ></i> | <i title=\"Delete\"\n          class=\"far fa-trash-alt\" (click)=\"deleteData(element)\"></i> </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/journal-voucher-receipt-register/journal-voucher-receipt-register.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/journal-voucher-receipt-register/journal-voucher-receipt-register.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n    <div fxLayout=\"row\" class=\"my-1\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n      fxLayoutGap=\"10px\">\n      <div fxFlex=\"60\">\n        <h4 class=\"pharmacyHeading\">journal Voucher Register</h4>\n      </div>\n      \n    </div>\n  \n  \n    <mat-accordion class=\"example-headers-align\">\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <form [formGroup]=\"journalVoucherRegisterFormGroup\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\"\n            fxLayoutWrap fxLayoutGap=\"10px\">\n  \n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"100\" class=\"user-card w-100\">\n              <mat-card class=\"CashReceiptCard\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"16px\" fxLayoutAlign=\"start stretch\">\n                <!-- From Date -->\n                <mat-form-field fxFlex=\"15\" fxFlex.sm=\"19\" fxFlex.xs=\"100\" appearance=\"outline\" class=\"e_mat_date\">\n                  <mat-label>From Date</mat-label>\n                  <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #fromDatePicker></mat-datepicker>\n                </mat-form-field>\n            \n                <!-- To Date -->\n                <mat-form-field fxFlex=\"15\" fxFlex.sm=\"17\" fxFlex.xs=\"100\" appearance=\"outline\" class=\"e_mat_date\">\n                  <mat-label>To Date</mat-label>\n                  <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\">\n                  <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #toDatePicker></mat-datepicker>\n                </mat-form-field>\n            \n                <!-- Want Voucher Total -->\n                <div fxFlex=\"30\" fxFlex.xs=\"100\" fxFlex.sm=\"24\" class=\"radio-group d-flex text-center mt-2\">\n                  <span style=\"margin-right: 8px;\">Want Voucher Total:</span>\n                  <mat-radio-group formControlName=\"wantVoucherTotal\" fxLayout=\"row\" fxLayoutGap=\"16px\">\n                    <mat-radio-button value=\"yes\" class=\"ml-1 mr-1\">Yes</mat-radio-button>\n                    <mat-radio-button value=\"no\" class=\"ml-1\">No</mat-radio-button>\n                  </mat-radio-group>\n                </div>\n            \n                <!-- Buttons -->\n                <div fxFlex=\"24\" fxFlex.xs=\"100\" class=\"text-center\" fxFlex.sm=\"20\">\n                  <button type=\"button\" class=\"finance-button mt-1 mr-1\" mat-raised-button color=\"primary\" (click)=\"nextStep(journalVoucherRegisterFormGroup.value)\">Generate</button>\n                  <button type=\"button\" class=\"finance-button mt-1\" mat-raised-button (click)=\"resetForm()\">Reset</button>\n                  <!-- <button type=\"button\" class=\"finance-button\" mat-raised-button>Cancel</button> -->\n                  \n                </div>\n\n                <div fxFlex=\"8\" fxFlex.xs=\"100\" class=\"text-center\">\n                  <button type=\"button\" mat-raised-button color=\"primary\" class=\"finance-button\"\n                  (click)=\"goback()\">Back</button>\n                </div>\n\n              </mat-card>              \n            </div>\n            \n          </div>\n        </form>\n  \n      </mat-expansion-panel>\n  \n      <ng-template [ngIf]=\"openPanel\">\n        <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle class=\"full-height\">\n          <!-- Action Buttons for Export -->\n          <div class=\"action-icons\">\n            <!-- Excel Export Button -->\n            <button mat-icon-button (click)=\"exportToExcel(journalVoucherRegisterFormGroup.value)\">\n              <img src=\"assets/new_xl.png\" alt=\"Excel\" class=\"icon-img\" />\n            </button>\n      \n            <!-- PDF Export Button -->\n            <button mat-icon-button (click)=\"exportToPdf()\">\n              <img src=\"assets/new_pdf.png\" alt=\"PDF\" class=\"icon-img\" />\n            </button>\n          </div>\n      \n          <!-- Table Container -->\n          <div class=\"table-container mt-4\">\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n              <!-- Columns Definitions -->\n              <ng-container matColumnDef=\"voucherNo\">\n                <th mat-header-cell *matHeaderCellDef> Voucher No. </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.finTranHeadNo}} </td>\n              </ng-container>\n      \n              <ng-container matColumnDef=\"voucherDate\">\n                <th mat-header-cell *matHeaderCellDef> Voucher Date </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.finTranDate}} </td>\n              </ng-container>\n      \n              <ng-container matColumnDef=\"AccountName\">\n                <th mat-header-cell *matHeaderCellDef> Account Name </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.accName}} </td>\n              </ng-container>\n      \n              <ng-container matColumnDef=\"Description\">\n                <th mat-header-cell *matHeaderCellDef> Description </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.finTranDesc}} </td>\n              </ng-container>\n      \n              <ng-container matColumnDef=\"Amount\">\n                <th mat-header-cell *matHeaderCellDef> Amount </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.finTranAmount}} </td>\n              </ng-container>\n      \n              <!-- <ng-container matColumnDef=\"Discount\">\n                <th mat-header-cell *matHeaderCellDef> Discount </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.Discount}} </td>\n              </ng-container> -->\n      \n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n            <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n\n          </div>\n      \n          <mat-action-row>\n            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n      </ng-template>\n      \n  \n    </mat-accordion>\n  </div>\n  \n    \n  \n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/journal-voucher/journal-voucher.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/journal-voucher/journal-voucher.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-3 mr-3 mb-3\">\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n      fxLayoutGap=\"10px\"  class=\"buttons md_flex\">\n      <div fxFlex=\"50\">\n        <h4 class=\"pharmacyHeading\">Journal Voucher List</h4>\n      </div>\n      <div fxFlex=\"50\" fxLayoutGap=\"10px\" class=\"pharma-finance mt-2\">\n        <div  class=\"action_btn\">\n          <button type=\"button\"  class=\"finance-button\" mat-raised-button color=\"primary\" routerLink=\"../jvRegister\" title=\"Journal Receipt Register\">JV Register</button>&nbsp;\n        <button type=\"button\" class=\"finance-button\" mat-raised-button color=\"primary\" (click)=\"rcptEntry()\" title=\"Add Journal Voucher Entry\">Add JV Receipt </button>\n        <button type=\"button\" class=\"finance-button ml-1\" mat-raised-button color=\"primary\" [routerLink]=\"['../FinanceTransaction']\" >Back </button>\n      </div>\n      </div>\n    </div>\n  \n    <div class=\"mt-2\">\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\">\n  \n          <div class=\"master-table table-responsive mat-elevation-z4\" id=\"table-scroll\">\n            <table mat-table [dataSource]=\"dataSource\" matSort>\n              <ng-container matColumnDef=\"shName\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.finTranHeadDate}}</td>\n              </ng-container>\n             \n              <ng-container matColumnDef=\"ProductName\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Vocuher No.</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.finTranHeadNo}}</td>\n              </ng-container>\n              <ng-container matColumnDef=\"ProductPack\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Contra Name</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.contraAccName}}</td>\n              </ng-container>\n            \n              <ng-container matColumnDef=\"Actions\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                <!-- <td mat-cell *matCellDef=\"let element\"> {{element.Actions}} </td> -->\n                <td mat-cell *matCellDef=\"let element\"> <i title=\"Edit\" class=\"fas fa-pencil-alt\"  (click)=\"getByEdit(element)\" ></i> | <i title=\"Delete\"\n                  class=\"far fa-trash-alt\" (click)=\"deleteId(element)\"></i> </td>\n              </ng-container>\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  \n  \n            </table>\n  \n  \n            \n            <mat-paginator class=\"mat-paginator-sticky custom_paginator\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n          </div>\n  \n        </div>\n  \n      </div>\n  \n    </div>\n  \n  \n  \n  </div>\n  ");

/***/ }),

/***/ "./src/app/distribution/finance/area-wise-collections/area-wise-collections.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/distribution/finance/area-wise-collections/area-wise-collections.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 20px;\n  margin-bottom: 0;\n  font-family: monospace !important;\n  font-weight: 700 !important;\n}\n\n.pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n\n.CashReceiptControls {\n  height: 300px;\n  width: 100%;\n}\n\n.CashReceiptCard {\n  width: 300px;\n  height: 255px;\n}\n\n.innerCard {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  max-width: 20%;\n}\n\n::ng-deep .user-card .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0px !important;\n}\n\n::ng-deep .user-card .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .user-card .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .user-card .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n::ng-deep .user-card .mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 2em;\n  top: calc(100% - 1.79167em);\n}\n\n::ng-deep .user-card .mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvYXJlYS13aXNlLWNvbGxlY3Rpb25zL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcZmluYW5jZVxcYXJlYS13aXNlLWNvbGxlY3Rpb25zXFxhcmVhLXdpc2UtY29sbGVjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2FyZWEtd2lzZS1jb2xsZWN0aW9ucy9hcmVhLXdpc2UtY29sbGVjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2FyZWEtd2lzZS1jb2xsZWN0aW9ucy9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXG1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNGRjs7QURZQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNUSjs7QUNwQkk7RUFDRSw2QkFBQTtBRHVCTjs7QUNwQkk7RUFDRSxXQUFBO0FEc0JOOztBQ25CSTtFQUNFLHlDQUFBO0FEcUJOOztBQ2xCSTtFQUNFLGlCQUFBO0FEb0JOOztBQ2pCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QURtQk47O0FEREk7RUFDSSxXQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS9hcmVhLXdpc2UtY29sbGVjdGlvbnMvYXJlYS13aXNlLWNvbGxlY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGluLnNjc3MnO1xuXG4ucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cbi5waGFybWEtZmluYW5jZSAubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtaW4td2lkdGg6IDY1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5DYXNoUmVjZWlwdENhcmQge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjU1cHg7XG59XG5cbi8vIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuLy8gICBwYWRkaW5nOiAxMHB4IDEycHggMTJweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50Lm1hdC1leHBhbmRlZCB7XG4vLyAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4vLyB9XG4uaW5uZXJDYXJke1xuICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWF4LXdpZHRoOiAyMCU7XG59XG5cblxuXG46Om5nLWRlZXAgLnVzZXItY2FyZHtcbiAgICBAaW5jbHVkZSB1c2VyLWZvcm07XG5cbiAgICAubWF0LWZvcm0tZmllbGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iLCIucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cbi5waGFybWEtZmluYW5jZSAubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtaW4td2lkdGg6IDY1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5DYXNoUmVjZWlwdENhcmQge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjU1cHg7XG59XG5cbi5pbm5lckNhcmQge1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiAyMCU7XG59XG5cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC40ZW0gMHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIHRvcDogLTEuNWVtO1xufVxuOjpuZy1kZWVwIC51c2VyLWNhcmQgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKDAuNzUpO1xufVxuOjpuZy1kZWVwIC51c2VyLWNhcmQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIHRvcDogY2FsYygxMDAlIC0gMS43OTE2N2VtKTtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSIsIkBtaXhpbiB1c2VyLWZvcm0ge1xuXG4gIC8vIC5tYXQtZm9ybS1maWVsZCB7XG4gIC8vICAgZm9udC1zaXplOiAxNHB4O1xuICAvLyAgIGhlaWdodDogNDhweDtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gfVxuXG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4Pi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICAgIHRvcDogLTEuNWVtO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICBcbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgZm9udC1zaXplOiA3NSU7XG4gICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjdlbSk7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgQG1peGluIG1hdC10YWIge1xuICAgIC5tYXQtdGFiLWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlYmVkZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiA4JSA4JSAwJSAwJTtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgcGFkZGluZzogMCAxMXB4O1xuICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICB9XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/distribution/finance/area-wise-collections/area-wise-collections.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/distribution/finance/area-wise-collections/area-wise-collections.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AreaWiseCollectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaWiseCollectionsComponent", function() { return AreaWiseCollectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AreaWiseCollectionsComponent = class AreaWiseCollectionsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.isOpened = false;
        this.step = 0;
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step = 1;
        this.isOpened = true;
    }
    prevStep() {
        this.step = 0;
        this.isOpened = false;
    }
    ngOnInit() {
        this.areaWiseCollectionsFormGroup = this.buildAreaWiseCollectionsFormGroup();
    }
    buildAreaWiseCollectionsFormGroup() {
        return this.formBuilder.group({
            financialyear: [''],
            fromDate: [''],
            toDate: [''],
            reportType: [''],
        });
    }
};
AreaWiseCollectionsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AreaWiseCollectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-area-wise-collections',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./area-wise-collections.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/area-wise-collections/area-wise-collections.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./area-wise-collections.component.scss */ "./src/app/distribution/finance/area-wise-collections/area-wise-collections.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../finance.component.scss */ "./src/app/distribution/finance/finance.component.scss")).default]
    })
], AreaWiseCollectionsComponent);



/***/ }),

/***/ "./src/app/distribution/finance/bank-payment-register/bank-payment-register.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-payment-register/bank-payment-register.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 20px;\n  margin-bottom: 0;\n  font-family: monospace !important;\n  font-weight: 700 !important;\n}\n\n.pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n\n.CashReceiptControls {\n  height: 300px;\n  width: 100%;\n}\n\n.CashReceiptCard {\n  width: 100%;\n  /* Take full width of the container */\n  max-width: 900px;\n  /* Limit the maximum width for better readability */\n  margin: 15px auto;\n  /* Center the card and add space above */\n  padding: 16px;\n  /* Add internal spacing */\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  /* Optional: Add a shadow for a modern look */\n  border-radius: 8px;\n  /* Optional: Rounded corners */\n  background-color: #ffffff;\n  /* Optional: Card background */\n}\n\n.innerCard {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  max-width: 20%;\n}\n\n.finance-button {\n  min-width: 90px;\n  /* Ensure buttons have consistent width */\n  margin: 0;\n  /* Remove default margins if any */\n}\n\n::ng-deep .user-card .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0px !important;\n}\n\n::ng-deep .user-card .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .user-card .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .user-card .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n::ng-deep .user-card .mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 2em;\n  top: calc(100% - 1.79167em);\n}\n\n::ng-deep .user-card .mat-form-field {\n  width: 100%;\n}\n\n.full-height {\n  height: 100%;\n  /* Ensure full height for the expansion panel */\n}\n\n.table-container {\n  position: relative;\n}\n\n.action-icons {\n  display: flex;\n  justify-content: flex-end;\n  /* Align icons to the right */\n  gap: 16px;\n  /* Space between buttons */\n  margin-bottom: 8px;\n  /* Space below the buttons */\n}\n\n.icon-img {\n  width: 37px;\n  height: 38px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvYmFuay1wYXltZW50LXJlZ2lzdGVyL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcZmluYW5jZVxcYmFuay1wYXltZW50LXJlZ2lzdGVyXFxiYW5rLXBheW1lbnQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2JhbmstcGF5bWVudC1yZWdpc3Rlci9iYW5rLXBheW1lbnQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2JhbmstcGF5bWVudC1yZWdpc3Rlci9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXG1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRFNBO0VBQ0UsV0FBQTtFQUFhLHFDQUFBO0VBQ2IsZ0JBQUE7RUFBa0IsbURBQUE7RUFDbEIsaUJBQUE7RUFBbUIsd0NBQUE7RUFDbkIsYUFBQTtFQUFlLHlCQUFBO0VBQ2YsMENBQUE7RUFBNEMsNkNBQUE7RUFDNUMsa0JBQUE7RUFBb0IsOEJBQUE7RUFDcEIseUJBQUE7RUFBMkIsOEJBQUE7QUNDN0I7O0FESUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQWlCLHlDQUFBO0VBQ2pCLFNBQUE7RUFBVyxrQ0FBQTtBQ0NiOztBQ3ZDSTtFQUNFLDZCQUFBO0FEMENOOztBQ3ZDSTtFQUNFLFdBQUE7QUR5Q047O0FDdENJO0VBQ0UseUNBQUE7QUR3Q047O0FDckNJO0VBQ0UsaUJBQUE7QUR1Q047O0FDcENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBRHNDTjs7QURaRTtFQUNFLFdBQUE7QUNjSjs7QURYQTtFQUNFLFlBQUE7RUFBYywrQ0FBQTtBQ2VoQjs7QURaQTtFQUNFLGtCQUFBO0FDZUY7O0FEWkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFBMkIsNkJBQUE7RUFDM0IsU0FBQTtFQUFXLDBCQUFBO0VBQ1gsa0JBQUE7RUFBb0IsNEJBQUE7QUNrQnRCOztBRGZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ2tCRiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2JhbmstcGF5bWVudC1yZWdpc3Rlci9iYW5rLXBheW1lbnQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGluLnNjc3MnO1xuXG4ucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cbi5waGFybWEtZmluYW5jZSAubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtaW4td2lkdGg6IDY1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIC5DYXNoUmVjZWlwdENhcmQge1xuLy8gICB3aWR0aDogMzAwcHg7XG4vLyAgIGhlaWdodDogMjU1cHg7XG4vLyAgIG1hcmdpbi10b3A6IDE1cHg7XG4vLyB9XG4uQ2FzaFJlY2VpcHRDYXJkIHtcbiAgd2lkdGg6IDEwMCU7IC8qIFRha2UgZnVsbCB3aWR0aCBvZiB0aGUgY29udGFpbmVyICovXG4gIG1heC13aWR0aDogOTAwcHg7IC8qIExpbWl0IHRoZSBtYXhpbXVtIHdpZHRoIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cbiAgbWFyZ2luOiAxNXB4IGF1dG87IC8qIENlbnRlciB0aGUgY2FyZCBhbmQgYWRkIHNwYWNlIGFib3ZlICovXG4gIHBhZGRpbmc6IDE2cHg7IC8qIEFkZCBpbnRlcm5hbCBzcGFjaW5nICovXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogT3B0aW9uYWw6IEFkZCBhIHNoYWRvdyBmb3IgYSBtb2Rlcm4gbG9vayAqL1xuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIE9wdGlvbmFsOiBSb3VuZGVkIGNvcm5lcnMgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogT3B0aW9uYWw6IENhcmQgYmFja2dyb3VuZCAqL1xufVxuXG5cblxuLmlubmVyQ2FyZCB7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDIwJTtcbn1cblxuLmZpbmFuY2UtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA5MHB4OyAvKiBFbnN1cmUgYnV0dG9ucyBoYXZlIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5zIGlmIGFueSAqL1xufVxuXG5cbjo6bmctZGVlcCAudXNlci1jYXJkIHtcbiAgQGluY2x1ZGUgdXNlci1mb3JtO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mdWxsLWhlaWdodCB7XG4gIGhlaWdodDogMTAwJTsgLyogRW5zdXJlIGZ1bGwgaGVpZ2h0IGZvciB0aGUgZXhwYW5zaW9uIHBhbmVsICovXG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY3Rpb24taWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBBbGlnbiBpY29ucyB0byB0aGUgcmlnaHQgKi9cbiAgZ2FwOiAxNnB4OyAvKiBTcGFjZSBiZXR3ZWVuIGJ1dHRvbnMgKi9cbiAgbWFyZ2luLWJvdHRvbTogOHB4OyAvKiBTcGFjZSBiZWxvdyB0aGUgYnV0dG9ucyAqL1xufVxuXG4uaWNvbi1pbWcge1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW46IDNweDtcbn1cbiIsIi5waGFybWFjeUhlYWRpbmcge1xuICBjb2xvcjogIzJmOGJiZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLnBoYXJtYS1maW5hbmNlIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1pbi13aWR0aDogNjVweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cblxuLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkNhc2hSZWNlaXB0Q2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBUYWtlIGZ1bGwgd2lkdGggb2YgdGhlIGNvbnRhaW5lciAqL1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICAvKiBMaW1pdCB0aGUgbWF4aW11bSB3aWR0aCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICAvKiBDZW50ZXIgdGhlIGNhcmQgYW5kIGFkZCBzcGFjZSBhYm92ZSAqL1xuICBwYWRkaW5nOiAxNnB4O1xuICAvKiBBZGQgaW50ZXJuYWwgc3BhY2luZyAqL1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIE9wdGlvbmFsOiBBZGQgYSBzaGFkb3cgZm9yIGEgbW9kZXJuIGxvb2sgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBPcHRpb25hbDogUm91bmRlZCBjb3JuZXJzICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC8qIE9wdGlvbmFsOiBDYXJkIGJhY2tncm91bmQgKi9cbn1cblxuLmlubmVyQ2FyZCB7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDIwJTtcbn1cblxuLmZpbmFuY2UtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICAvKiBFbnN1cmUgYnV0dG9ucyBoYXZlIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5zIGlmIGFueSAqL1xufVxuXG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNGVtIDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC51c2VyLWNhcmQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICB0b3A6IC0xLjVlbTtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSgwLjc1KTtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICBmb250LXNpemU6IDc1JTtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjdlbSk7XG59XG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBFbnN1cmUgZnVsbCBoZWlnaHQgZm9yIHRoZSBleHBhbnNpb24gcGFuZWwgKi9cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFjdGlvbi1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIC8qIEFsaWduIGljb25zIHRvIHRoZSByaWdodCAqL1xuICBnYXA6IDE2cHg7XG4gIC8qIFNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC8qIFNwYWNlIGJlbG93IHRoZSBidXR0b25zICovXG59XG5cbi5pY29uLWltZyB7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbjogM3B4O1xufSIsIkBtaXhpbiB1c2VyLWZvcm0ge1xuXG4gIC8vIC5tYXQtZm9ybS1maWVsZCB7XG4gIC8vICAgZm9udC1zaXplOiAxNHB4O1xuICAvLyAgIGhlaWdodDogNDhweDtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gfVxuXG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4Pi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICAgIHRvcDogLTEuNWVtO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICBcbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgZm9udC1zaXplOiA3NSU7XG4gICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjdlbSk7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgQG1peGluIG1hdC10YWIge1xuICAgIC5tYXQtdGFiLWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlYmVkZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiA4JSA4JSAwJSAwJTtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgcGFkZGluZzogMCAxMXB4O1xuICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICB9XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/distribution/finance/bank-payment-register/bank-payment-register.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-payment-register/bank-payment-register.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BankPaymentRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPaymentRegisterComponent", function() { return BankPaymentRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let BankPaymentRegisterComponent = class BankPaymentRegisterComponent {
    constructor(formBuilder, datePipe, financeService, route) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.financeService = financeService;
        this.route = route;
        this.openPanel = false;
        this.step = 0;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.displayedColumns = ['voucherNo', 'voucherDate', 'AccountName', 'Description', 'Amount'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    setStep(index) {
        this.step = index;
    }
    prevStep() {
        this.step = 0;
        this.openPanel = false;
    }
    ngOnInit() {
        this.bankPaymentRegisterFormGroup = this.buildbankPaymentRegisterFormGroup();
    }
    ngAfterViewInit() {
        // Assign paginator after view initialization
        this.dataSource.paginator = this.paginator;
    }
    buildbankPaymentRegisterFormGroup() {
        return this.formBuilder.group({
            fromDate: [''],
            toDate: [''],
            wantVoucherTotal: ['no'] // Default value
        });
    }
    nextStep(data) {
        console.log(data);
        let voucherTotal = "2";
        let frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
        let toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
        if (data.wantVoucherTotal == "yes") {
            voucherTotal = "1";
        }
        else {
            voucherTotal = "2";
        }
        this.step = 1;
        this.openPanel = true;
        let reBody = {
            tranTypeHeadId: "8",
            fromDate: frmDte,
            toDate: toDte,
            sumTotalYN: voucherTotal
        };
        this.financeService.generateCashRecptReg(reBody).subscribe(res => {
            if (res) {
                console.log(res);
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.resultObject);
                setTimeout(() => {
                    this.dataSource.paginator = this.paginator;
                }, 100);
            }
        });
    }
    resetForm() {
        this.bankPaymentRegisterFormGroup.reset();
    }
    exportToExcel(data) {
        let voucherTotal = "2";
        let frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
        let toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
        if (data.wantVoucherTotal === "yes") {
            voucherTotal = "1";
        }
        let reBody = {
            tranTypeHeadId: "8",
            fromDate: frmDte,
            toDate: toDte,
            sumTotalYN: voucherTotal
        };
        this.financeService.generateExcel(reBody).subscribe((res) => {
            const base64String = res.resultObject;
            const fileName = 'BankPaymentRegister.xlsx'; // Desired file name
            // Decode Base64 to binary data
            const binaryData = atob(base64String);
            const byteNumbers = new Array(binaryData.length);
            for (let i = 0; i < binaryData.length; i++) {
                byteNumbers[i] = binaryData.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            // Create a Blob from the binary data
            const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            // Create a URL for the Blob
            const url = window.URL.createObjectURL(blob);
            // Create an anchor element and trigger the download
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = fileName;
            anchor.click();
            // Clean up the URL
            window.URL.revokeObjectURL(url);
        }, (err) => {
            console.error('Error generating Excel file:', err);
        });
    }
    exportToPdf() {
        // Logic for exporting to PDF
        console.log('Export to PDF clicked');
    }
    goback() {
        if (this.route.url.includes('from=bpRegister')) {
            this.route.navigate(['pharma/finance/FinanceRegister']);
        }
        else {
            this.route.navigate(['pharma/finance/bankPayments']);
        }
    }
};
BankPaymentRegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_5__["FinanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false })
], BankPaymentRegisterComponent.prototype, "paginator", void 0);
BankPaymentRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bank-payment-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bank-payment-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-payment-register/bank-payment-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bank-payment-register.component.scss */ "./src/app/distribution/finance/bank-payment-register/bank-payment-register.component.scss")).default]
    })
], BankPaymentRegisterComponent);



/***/ }),

/***/ "./src/app/distribution/finance/bank-payment-voucher-entry/bank-payment-voucher-entry.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-payment-voucher-entry/bank-payment-voucher-entry.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttons {\n  width: 960px;\n  margin: 0 auto;\n}\n\n.action_btn {\n  width: 500px;\n  margin: 5px auto;\n}\n\n.finance-button {\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvYmFuay1wYXltZW50LXZvdWNoZXItZW50cnkvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxmaW5hbmNlXFxiYW5rLXBheW1lbnQtdm91Y2hlci1lbnRyeVxcYmFuay1wYXltZW50LXZvdWNoZXItZW50cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2JhbmstcGF5bWVudC12b3VjaGVyLWVudHJ5L2JhbmstcGF5bWVudC12b3VjaGVyLWVudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDUTtFQUNKLFlBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREVJO0VBQ0UsbUJBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2JhbmstcGF5bWVudC12b3VjaGVyLWVudHJ5L2JhbmstcGF5bWVudC12b3VjaGVyLWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbnMge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBtYXJnaW46IDAgYXV0bzt9XG4gICAgXG4gICAgICAgIC5hY3Rpb25fYnRuIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bzt9XG5cblxuXG4gICAgLmZpbmFuY2UtYnV0dG9uIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH0iLCIuYnV0dG9ucyB7XG4gIHdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hY3Rpb25fYnRuIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4uZmluYW5jZS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/distribution/finance/bank-payment-voucher-entry/bank-payment-voucher-entry.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-payment-voucher-entry/bank-payment-voucher-entry.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: BankPaymentVoucherEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPaymentVoucherEntryComponent", function() { return BankPaymentVoucherEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils/app-message-utils */ "./src/app/shared/utils/app-message-utils.ts");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/my-custom-dialog/my-custom-dialog.component */ "./src/app/shared/components/my-custom-dialog/my-custom-dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/http-services/out-ward/out-ward-http.service */ "./src/app/shared/http-services/out-ward/out-ward-http.service.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");














let BankPaymentVoucherEntryComponent = class BankPaymentVoucherEntryComponent {
    constructor(formBuilder, dialog, financeService, datePipe, router, service, todayDate) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.financeService = financeService;
        this.datePipe = datePipe;
        this.router = router;
        this.service = service;
        this.todayDate = todayDate;
        this.accName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'description', 'VoucherNo', 'Amount', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.customAccountAutoCompleteDef = {
            label: 'Head of Account',
            isRequired: true,
            dataSourceFn: (name) => this.financeService.getCustomAccountsByName(name),
            minCount: 2,
            keyString: 'accName',
        };
        this.customAccountsOptsTable = {
            panelWidth: 700,
            columns: [
                { name: 'Head of Account', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 36, fxFlex1: 36, isKeyColumn: true },
                { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 19, fxFlex1: 19 },
                { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 14, fxFlex1: 14 },
                { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 20, fxFlex1: 20 },
                { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 10, fxFlex1: 10 }
            ]
        };
        this.contraActDefintion = {
            label: 'Contra Account',
            isRequired: true,
            dataSourceFn: (name) => this.financeService.getContraData(6),
            minCount: 2,
            keyString: 'accName',
        };
        this.contraActsOptTable = {
            panelWidth: 300,
            columns: [
                { name: 'Account Name', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 100, fxFlex1: 90, isKeyColumn: true },
            ]
        };
        this.bankActDefintion = {
            label: 'Bank Account',
            isRequired: true,
            dataSourceFn: (name) => this.financeService.getBankData(),
            minCount: 2,
            keyString: 'bankName',
        };
        this.bankOptTable = {
            panelWidth: 300,
            columns: [
                { name: 'Bank Name', value: (obj) => obj['bankName'] ? obj['bankName'] : '', fxFlex: 100, fxFlex1: 90, isKeyColumn: true },
            ]
        };
        this.finTranHeadId = 0;
        this.sNo = 0;
        this.fintranId = 0;
        this.headNo = "";
        this.btnSave = 'Save';
        this.instrumentTypes = [];
        this.instruType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.instruNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.contraData = [];
        this.filterObject = [];
        this.showaccts = false;
        this.showTable = false;
        this.bankData = [];
        this.showBnks = false;
        this.accountMapper = key => {
            if (key) {
                const selection = this.filterObject.find(act => act.accId === key);
                if (selection) {
                    return selection.accName;
                }
            }
        };
        this.bankMapper = key => {
            if (key) {
                const selection = this.bankNames.find(act => act.bankId === key);
                if (selection) {
                    return selection.bankName;
                }
            }
        };
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.showBankact = true;
        this.contraAcct = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.bankAcct = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"]();
    }
    ngOnInit() {
        this.bankPaymentVoucherEntryFormGroup = this.buildBankPaymnetVoucherEntry();
        this.accName.valueChanges.subscribe(res => {
            console.log(res);
            if (typeof res === 'object') {
                this.supplierData = res;
                this.bindAccountDetails(res);
            }
        });
        this.contraAcct.valueChanges.subscribe(res => {
            if (typeof res === 'object') {
                this.bindContra(res);
            }
        });
        this.bankAcct.valueChanges.subscribe(res => {
            if (typeof res === 'object') {
                this.bindBank(res);
            }
        });
        if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.firmPreferences.finEdate;
        }
        this.showClear = true;
        // this.getContraData();
        this.getBankData();
        this.instrumentTypes = [{ id: 1, type: 'CHECK' }, { id: 2, type: 'NEFT' }, { id: 3, type: 'ONLINE (UPI/NET BANKING/ANY OTHER ONLINE PAYMENT)' }];
        // var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        var dt = this.todayDate.localDate();
        dt = this.datePipe.transform(dt, 'yyyy-MM-dd');
        setTimeout(() => {
            this.bankPaymentVoucherEntryFormGroup.controls.finDate.setValue(dt);
            this.bankPaymentVoucherEntryFormGroup.controls.accShName.disable();
            this.bankPaymentVoucherEntryFormGroup.controls.cityName.disable();
        }, 200);
        setTimeout(() => {
            this.financeService.getListData$.subscribe(rees => {
                if (rees != null) {
                    this.newGet(rees.finTranHeadId);
                    this.finTranHeadId = rees.finTranHeadId;
                    this.headNo = rees.finTranHeadNo;
                }
                else {
                    this.showTable = false;
                }
                // this.listshow = true;
            });
        }, 300);
        // this.subscription.add(this.service.getTabData$.subscribe(res=>{
        //   if(res != null && res){
        //     if(res[1] == 'Head of Account'){
        //     this.bindAccountDetails(res[0]);
        //     this.accName.setValue(res[0].accName);
        //     }else if(res[1] == 'Contra Account'){
        //       this.bindContra(res[0]);
        //       this.contraAcct.setValue(res[0].accName);
        //     }else if(res[1] == 'Bank Account'){
        //       this.bankAcct.setValue(res[0].accName);
        //       this.bindBank(res[0]);
        //     }
        //   }
        // }));
    }
    buildBankPaymnetVoucherEntry() {
        return this.formBuilder.group({
            finDate: [''],
            finContraId: [''],
            customAccId: [''],
            accShName: [''],
            cityName: [''],
            finTranDesc: [''],
            finTranVno: [''],
            Amount: [''],
            finDisc: [''],
            finTranBankId: [''],
        });
    }
    bindAccountDetails(data) {
        this.bankPaymentVoucherEntryFormGroup.patchValue({
            accShName: data.accShName,
            cityName: data.cityName,
            accMobile: data.accMobile,
            accGstIn: data.accGstIn
        });
    }
    addOrEdit(element) {
        this.showClear = false;
        this.btnSave = 'Update';
        this.financeService.editCashData(element.finTranId).subscribe(res => {
            this.commonMethod(res);
        });
    }
    deleteItem(data) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
        const dialogRef = this.dialog.open(src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MyCustomDialogComponent"], dialogConfig);
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._onDestroy))
            .subscribe(result => {
            if (result === true) {
                this.delete(data);
            }
        });
    }
    delete(element) {
        this.financeService.doDeleteCashVocuher(element.finTranId).subscribe(data => src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus200(data) ? this.refresh() :
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus404(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_5__["default"].warningMessage("Voucher Had already deleted") : '');
        setTimeout(() => {
            this.newGet(this.finTranHeadId);
        }, 200);
        this.reset();
    }
    updateVocuehr() {
        const val = this.bankPaymentVoucherEntryFormGroup.controls;
        if (this.showBankact == true) {
            this.finTranBankId = val.finTranBankId.value;
        }
        else {
            this.finTranBankId = 0;
        }
        const obj = {
            finTranId: this.fintranId,
            finTranSno: this.sNo,
            tranTypeHeadId: 8,
            finTranHeadDate: this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss'),
            finTranHeadId: this.finTranHeadId,
            finTranHeadNo: this.headNo,
            finTranAccId: this.acId,
            finTranContraId: val.finContraId.value,
            finTranDesc: val.finTranDesc.value,
            finTranAmount: val.Amount.value,
            finTranVno: val.finTranVno.value,
            firmYearId: this.frimYearId,
            cityName: val.cityName.value,
            accShName: val.accShName.value,
            accName: this.accName.value.accName,
            contraAccName: val.finContraId.value,
            accCityId: 0, createdBy: 0,
            createdOn: this.createdOn,
            modifiedBy: 0,
            modifiedOn: this.modifiedOn,
            finTranBankId: this.bankAcct.value.bankId,
            FinTranInstType: this.instruType.value
        };
        this.financeService.updateCashVData(obj, 'Bank Payment Voucher').subscribe(data => {
            this.reset();
            this.newGet(this.finTranHeadId);
        });
    }
    detailDelete(Obj) {
        return Obj.deleteFlag;
    }
    deleteTemplate() {
        return this.deletePurchaseHeadTemplate;
    }
    refresh() {
    }
    reset() {
        this.btnSave = 'Save';
        this.showClear = true;
        this.accName.setValue('');
        this.bankPaymentVoucherEntryFormGroup.reset();
        this.contraAcct.setValue('');
        this.bankAcct.setValue('');
        this.bankPaymentVoucherEntryFormGroup.controls.finContraId.setValue('');
        var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        setTimeout(() => {
            this.bankPaymentVoucherEntryFormGroup.controls.finDate.setValue(dt);
        }, 200);
    }
    commonMethod(res) {
        this.bankPaymentVoucherEntryFormGroup.controls.Amount.setValue(res.finTranAmount);
        this.bankPaymentVoucherEntryFormGroup.controls.finContraId.setValue(res.finTranContraId);
        this.bankPaymentVoucherEntryFormGroup.controls.finDate.setValue(res.finTranHeadDate);
        this.bankPaymentVoucherEntryFormGroup.controls.finTranDesc.setValue(res.finTranDesc);
        this.bankPaymentVoucherEntryFormGroup.controls.finTranVno.setValue(res.finTranVno);
        this.bankPaymentVoucherEntryFormGroup.controls.finTranBankId.setValue(res.finTranBankName);
        this.accName.setValue(res.accName);
        this.contraAcct.setValue(res.contraAccName);
        this.bankAcct.setValue(res.finTranBankName);
        this.acId = res.finTranAccId;
        this.fintranId = res.finTranId;
        this.sNo = res.finTranSno;
        this.finTranHeadId = res.finTranHeadId;
        this.frimYearId = res.firmYearId;
        this.headNo = res.finTranHeadNo;
        this.createdOn = res.createdOn;
        this.modifiedOn = res.modifiedOn;
        this.instruType.setValue(res.finTranInstType);
    }
    enterText(val) {
        if (val.length >= 3) {
            this.filterObject = this.contraData.filter(x => x.accName.includes(val.toUpperCase()));
            this.showaccts = true;
        }
    }
    getContraData() {
        this.financeService.getContraData(6).subscribe(data => {
            this.contraData = data;
        });
    }
    saveBankPayment() {
        if (this.btnSave == 'Update') {
            this.updateVocuehr();
        }
        else {
            const val = this.bankPaymentVoucherEntryFormGroup.controls;
            const obj = Object.assign({});
            obj.finTranSno = this.sNo + 1;
            obj.finTranHeadDate = this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss');
            obj.finTranHeadId = this.finTranHeadId;
            obj.finTranHeadNo = this.headNo;
            obj.finTranAccId = this.accName.value.accId;
            obj.finTranContraId = val.finContraId.value;
            obj.finTranDesc = val.finTranDesc.value;
            obj.finTranAmount = Number(val.Amount.value);
            obj.firmYearId = 0;
            obj.isDeleted = 0;
            obj.cityName = val.cityName.value;
            obj.accShName = val.accShName.value;
            obj.accName = this.accName.value.accName;
            obj.contraAccName = val.finContraId.value;
            obj.accCityId = this.accName.value.accCityId;
            obj.createdBy = 0;
            obj.createdOn = new Date().toISOString();
            obj.modifiedBy = 0,
                obj.modifiedOn = new Date().toISOString();
            obj.accId = this.accName.value.accId;
            obj.accName1 = "";
            obj.finTranVno = Number(val.finTranVno.value);
            obj.finTranId = 0;
            obj.tranTypeHeadId = 8;
            if (this.showBankact == true) {
                obj.finTranBankId = this.bankAcct.value.bankId;
            }
            else {
                obj.finTranBankId = 0;
            }
            obj.FinTranInstType = this.instruType.value;
            this.financeService.saveCashVoucherRecpt(obj, 'Bank Payment Voucher').subscribe(data => {
                this.finTranHeadId = data.resultObject;
                this.newGet(data.resultObject);
                this.reset();
            });
        }
    }
    newGet(finTranHeadId) {
        this.financeService.editCashList(finTranHeadId).subscribe(res => {
            this.headNo = res[0].finTranHeadNo;
            this.sNo = res.length;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res);
            this.showTable = true;
        });
    }
    getBankData() {
        this.financeService.getBankData().subscribe(result => {
            this.bankData = result;
        });
    }
    enterBank(val) {
        if (val.length >= 3) {
            this.bankNames = this.bankData.filter(x => x.bankName.includes(val.toUpperCase()));
            this.showBnks = true;
        }
    }
    validateFloatKeyPress(el) {
        var v = parseFloat(el.value);
        // el.value = (isNaN(v)) ? '' : v.toFixed(2);
        el.value = (Math.round(v * 100) / 100).toFixed(2);
    }
    changefirmgroup(val) {
        if (val == 1) {
            this.showBankact = true;
        }
        else {
            this.showBankact = false;
        }
    }
    bindContra(res) {
        this.bankPaymentVoucherEntryFormGroup.controls.finContraId.setValue(res.accId);
    }
    bindBank(res) {
        this.bankPaymentVoucherEntryFormGroup.controls.finTranBankId.setValue(res.bankId);
    }
    ngOnDestroy() {
        // this.service.sendTabData('');
        this.subscription.unsubscribe();
    }
};
BankPaymentVoucherEntryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_4__["FinanceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_12__["OutWardHttpService"] },
    { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_13__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('districtautoCompleteInput', { static: false, read: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"] })
], BankPaymentVoucherEntryComponent.prototype, "districtautoCompleteInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], BankPaymentVoucherEntryComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('finTranDate', { static: false })
], BankPaymentVoucherEntryComponent.prototype, "date", void 0);
BankPaymentVoucherEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bank-payment-voucher-entry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bank-payment-voucher-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-payment-voucher-entry/bank-payment-voucher-entry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bank-payment-voucher-entry.component.scss */ "./src/app/distribution/finance/bank-payment-voucher-entry/bank-payment-voucher-entry.component.scss")).default]
    })
], BankPaymentVoucherEntryComponent);



/***/ }),

/***/ "./src/app/distribution/finance/bank-payment/bank-payment.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-payment/bank-payment.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2JhbmstcGF5bWVudC9iYW5rLXBheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/distribution/finance/bank-payment/bank-payment.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-payment/bank-payment.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BankPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPaymentComponent", function() { return BankPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/app-message-utils */ "./src/app/shared/utils/app-message-utils.ts");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/my-custom-dialog/my-custom-dialog.component */ "./src/app/shared/components/my-custom-dialog/my-custom-dialog.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");










let BankPaymentComponent = class BankPaymentComponent {
    constructor(financeService, router, dialog) {
        this.financeService = financeService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getVoucherData();
    }
    getVoucherData() {
        this.financeService.getAllVoucherData(8).subscribe(data => {
            if (data) {
                data.forEach(x => {
                    x.finTranHeadDate = x.finTranHeadDate.split('T')[0];
                });
                this.sNo = data.length;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
                setTimeout(() => {
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }, 100);
            }
        });
    }
    deleteItem(data) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
        const dialogRef = this.dialog.open(src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MyCustomDialogComponent"], dialogConfig);
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._onDestroy))
            .subscribe(result => {
            if (result === true) {
                this.delete(data);
            }
        });
    }
    delete(element) {
        this.financeService.doDeletCashList(element.finTranHeadId).subscribe(data => src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) ? this.refresh() :
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_4__["default"].warningMessage("Bank Payment List Had already deleted") : '');
    }
    refresh() {
    }
    getByEdit(element) {
        this.financeService.sendListData(element);
        setTimeout(() => {
            this.router.navigate(['pharma/finance/bPaymentEntry']);
        }, 200);
    }
    cashRegi() {
        this.financeService.sendListData(null);
        setTimeout(() => {
            this.router.navigate(['pharma/finance/bPaymentEntry']);
        }, 200);
    }
};
BankPaymentComponent.ctorParameters = () => [
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_3__["FinanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], BankPaymentComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], BankPaymentComponent.prototype, "sort", void 0);
BankPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bank-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bank-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-payment/bank-payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bank-payment.component.scss */ "./src/app/distribution/finance/bank-payment/bank-payment.component.scss")).default]
    })
], BankPaymentComponent);



/***/ }),

/***/ "./src/app/distribution/finance/bank-receipt-entry/bank-receipt-entry.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-receipt-entry/bank-receipt-entry.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".autocomplete-heading {\n  background-color: #2f8bbd;\n  padding-left: 10px;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  z-index: 1000;\n  color: #fff;\n  padding: 0px 15px;\n}\n\n.border-Pincode {\n  border-left: 1px solid #dee2e6 !important;\n  padding-left: 6px;\n}\n\n.buttons {\n  width: 960px;\n  margin: 0 auto;\n}\n\n.action_btn {\n  width: 500px;\n  margin: 0 auto;\n}\n\n.finance-button {\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvYmFuay1yZWNlaXB0LWVudHJ5L0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcZmluYW5jZVxcYmFuay1yZWNlaXB0LWVudHJ5XFxiYW5rLXJlY2VpcHQtZW50cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2JhbmstcmVjZWlwdC1lbnRyeS9iYW5rLXJlY2VpcHQtZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0U7RUFDRSx5Q0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FESUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdRO0VBQ0osWUFBQTtFQUNBLGNBQUE7QUNBSjs7QURJSTtFQUNFLG1CQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS9iYW5rLXJlY2VpcHQtZW50cnkvYmFuay1yZWNlaXB0LWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG9jb21wbGV0ZS1oZWFkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY4YmJkO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgfVxuICBcbiAgXG4gIC5ib3JkZXItUGluY29kZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIH1cblxuXG4gIC5idXR0b25zIHtcbiAgICB3aWR0aDogOTYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87fVxuICAgIFxuICAgICAgICAuYWN0aW9uX2J0biB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO31cblxuXG5cbiAgICAuZmluYW5jZS1idXR0b24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfSIsIi5hdXRvY29tcGxldGUtaGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjhiYmQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuLmJvcmRlci1QaW5jb2RlIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuXG4uYnV0dG9ucyB7XG4gIHdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hY3Rpb25fYnRuIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZpbmFuY2UtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/distribution/finance/bank-receipt-entry/bank-receipt-entry.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-receipt-entry/bank-receipt-entry.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BankReceiptEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReceiptEntryComponent", function() { return BankReceiptEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils/app-message-utils */ "./src/app/shared/utils/app-message-utils.ts");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/my-custom-dialog/my-custom-dialog.component */ "./src/app/shared/components/my-custom-dialog/my-custom-dialog.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/http-services/out-ward/out-ward-http.service */ "./src/app/shared/http-services/out-ward/out-ward-http.service.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");














let BankReceiptEntryComponent = class BankReceiptEntryComponent {
    constructor(formBuilder, financeService, datePipe, router, dialog, service, todayDate) {
        this.formBuilder = formBuilder;
        this.financeService = financeService;
        this.datePipe = datePipe;
        this.router = router;
        this.dialog = dialog;
        this.service = service;
        this.todayDate = todayDate;
        this.accName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'description', 'VoucherNo', 'Amount', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.customAccountAutoCompleteDef = {
            label: 'Head of Account',
            isRequired: true,
            dataSourceFn: (name) => this.financeService.getCustomAccountsByName(name),
            minCount: 2,
            keyString: 'accName'
        };
        this.customAccountsOptsTable = {
            panelWidth: 700,
            columns: [
                { name: 'Head of Account', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 36, fxFlex1: 36, isKeyColumn: true },
                { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 19, fxFlex1: 19 },
                { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 14, fxFlex1: 14 },
                { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 20, fxFlex1: 20 },
                { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 10, fxFlex1: 10 }
            ]
        };
        this.contraActDefintion = {
            label: 'Contra Account',
            isRequired: true,
            dataSourceFn: (name) => this.financeService.getContraData(6),
            minCount: 2,
            keyString: 'accName'
        };
        this.contraActsOptTable = {
            panelWidth: 300,
            columns: [
                { name: 'Account Name', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 100, fxFlex1: 90, isKeyColumn: true },
            ]
        };
        this.bankActDefintion = {
            label: 'Bank Account',
            isRequired: true,
            dataSourceFn: (name) => this.financeService.getBankData(),
            minCount: 2,
            keyString: 'bankName'
        };
        this.bankOptTable = {
            panelWidth: 300,
            columns: [
                { name: 'Bank Name', value: (obj) => obj['bankName'] ? obj['bankName'] : '', fxFlex: 100, fxFlex1: 90, isKeyColumn: true },
            ]
        };
        this.finTranHeadId = 0;
        this.sNo = 0;
        this.fintranId = 0;
        this.headNo = "";
        this.btnSave = 'Save';
        this.instrumentTypes = [];
        this.instruType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.instruNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.contraData = [];
        this.filterObject = [];
        this.showaccts = false;
        this.showTable = false;
        this.accountMapper = key => {
            if (key) {
                const selection = this.filterObject.find(act => act.accId === key);
                if (selection) {
                    return selection.accName;
                }
            }
        };
        this.bankMapper = key => {
            if (key) {
                const selection = this.bankNames.find(act => act.bankId === key);
                if (selection) {
                    return selection.bankName;
                }
            }
        };
        this.bankData = [];
        this.showBnks = false;
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.showBankact = true;
        this.contraAcct = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.bankAcct = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"]();
    }
    ngOnInit() {
        this.bankReceiptVoucherEntryFormGroup = this.buildBankReceiptVoucherEntry();
        this.accName.valueChanges.subscribe(res => {
            if (typeof res === 'object') {
                this.supplierData = res;
                this.bindAccountDetails(res);
            }
        });
        this.contraAcct.valueChanges.subscribe(res => {
            if (typeof res === 'object') {
                this.bindContra(res);
            }
        });
        this.bankAcct.valueChanges.subscribe(res => {
            if (typeof res === 'object') {
                this.bindBank(res);
            }
        });
        if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.firmPreferences.finEdate;
        }
        this.showClear = true;
        this.getContraData();
        this.instrumentTypes = [{ id: 1, type: 'CHEQUE' }, { id: 2, type: 'NEFT' }, { id: 3, type: 'ONLINE (UPI/NET BANKING/ANY OTHER ONLINE PAYMENT)' }];
        // var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        var dt = this.todayDate.localDate();
        dt = this.datePipe.transform(dt, 'yyyy-MM-dd');
        setTimeout(() => {
            this.bankReceiptVoucherEntryFormGroup.controls.finDate.setValue(dt);
            this.bankReceiptVoucherEntryFormGroup.controls.accShName.disable();
            this.bankReceiptVoucherEntryFormGroup.controls.cityName.disable();
        }, 200);
        setTimeout(() => {
            this.financeService.getListData$.subscribe(rees => {
                if (rees != null) {
                    this.newGet(rees.finTranHeadId);
                    this.finTranHeadId = rees.finTranHeadId;
                    this.headNo = rees.finTranHeadNo;
                }
                else {
                    this.showTable = false;
                }
                // this.listshow = true;
            });
        }, 300);
        this.getBankData();
        // this.subscription.add(this.service.getTabData$.subscribe(res=>{
        //   if(res != null && res){
        //     if(res[1] == 'Head of Account'){
        //     this.bindAccountDetails(res[0]);
        //     this.accName.setValue(res[0].accName);
        //     }else if(res[1] == 'Contra Account'){
        //       this.bindContra(res[0]);
        //       this.contraAcct.setValue(res[0].accName);
        //     }else if(res[1] == 'Bank Account'){
        //       this.bankAcct.setValue(res[0].accName);
        //       this.bindBank(res[0]);
        //     }
        //   }
        // }));
    }
    buildBankReceiptVoucherEntry() {
        return this.formBuilder.group({
            finDate: [''],
            finContraId: [''],
            customAccId: [''],
            accShName: [''],
            cityName: [''],
            finTranDesc: [''],
            finTranVno: [''],
            Amount: [''],
            finDisc: [''],
            finTranBankId: [''],
        });
    }
    bindAccountDetails(data) {
        console.log(data);
        this.bankReceiptVoucherEntryFormGroup.patchValue({
            accShName: data.accShName,
            cityName: data.cityName,
            accMobile: data.accMobile,
            accGstIn: data.accGstIn
        });
    }
    addOrEdit(element) {
        this.showClear = false;
        this.btnSave = 'Update';
        this.financeService.editCashData(element.finTranId).subscribe(res => {
            this.commonMethod(res);
        });
    }
    deleteItem(data) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
        const dialogRef = this.dialog.open(src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_9__["MyCustomDialogComponent"], dialogConfig);
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy))
            .subscribe(result => {
            if (result === true) {
                this.delete(data);
            }
        });
    }
    delete(element) {
        this.financeService.doDeleteCashVocuher(element.finTranId).subscribe(data => src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus200(data) ? this.refresh() :
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus404(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_5__["default"].warningMessage("Voucher Had already deleted") : '');
        setTimeout(() => {
            this.newGet(this.finTranHeadId);
        }, 200);
        this.reset();
    }
    updateVocuehr() {
        const val = this.bankReceiptVoucherEntryFormGroup.controls;
        var id;
        if (this.showBankact == true) {
            id = val.finTranBankId.value;
        }
        else {
            id = 0;
        }
        const obj = {
            finTranId: this.fintranId,
            finTranSno: this.sNo,
            tranTypeHeadId: 6,
            finTranHeadDate: this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss'),
            finTranHeadId: this.finTranHeadId,
            finTranHeadNo: this.headNo,
            finTranAccId: this.acId,
            finTranContraId: val.finContraId.value,
            finTranDesc: val.finTranDesc.value,
            finTranAmount: val.Amount.value,
            finTranVno: val.finTranVno.value,
            firmYearId: this.frimYearId,
            cityName: val.cityName.value,
            accShName: val.accShName.value,
            accName: this.accName.value.accName,
            contraAccName: val.finContraId.value,
            accCityId: 0, createdBy: 0,
            createdOn: this.createdOn,
            modifiedBy: 0,
            modifiedOn: this.modifiedOn,
            finTranBankId: this.bankAcct.value.bankId,
            finTranInstType: this.instruType.value
        };
        this.financeService.updateCashVData(obj, 'Bank Receipt').subscribe(data => {
            this.reset();
            this.newGet(this.finTranHeadId);
        });
    }
    detailDelete(Obj) {
        return Obj.deleteFlag;
    }
    deleteTemplate() {
        return this.deletePurchaseHeadTemplate;
    }
    refresh() {
    }
    reset() {
        this.btnSave = 'Save';
        this.showClear = true;
        this.accName.setValue('');
        this.contraAcct.setValue('');
        this.bankAcct.setValue('');
        this.bankReceiptVoucherEntryFormGroup.reset();
        var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        setTimeout(() => {
            this.bankReceiptVoucherEntryFormGroup.controls.finDate.setValue(dt);
        }, 200);
    }
    commonMethod(res) {
        this.bankReceiptVoucherEntryFormGroup.controls.Amount.setValue(res.finTranAmount);
        this.bankReceiptVoucherEntryFormGroup.controls.finContraId.setValue(res.finTranContraId);
        this.bankReceiptVoucherEntryFormGroup.controls.finDate.setValue(res.finTranHeadDate);
        this.bankReceiptVoucherEntryFormGroup.controls.finTranDesc.setValue(res.finTranDesc);
        this.bankReceiptVoucherEntryFormGroup.controls.finTranVno.setValue(res.finTranVno);
        this.bankReceiptVoucherEntryFormGroup.controls.finTranBankId.setValue(res.finTranBankId);
        this.instruType.setValue(res.finTranInstType);
        this.accName.setValue(res.accName);
        this.contraAcct.setValue(res.contraAccName);
        this.bankAcct.setValue(res.bankName);
        this.acId = res.finTranAccId;
        this.fintranId = res.finTranId;
        this.sNo = res.finTranSno;
        this.finTranHeadId = res.finTranHeadId;
        this.frimYearId = res.firmYearId;
        this.headNo = res.finTranHeadNo;
        this.createdOn = res.createdOn;
        this.modifiedOn = res.modifiedOn;
    }
    enterText(val) {
        if (val.length >= 3) {
            this.filterObject = this.contraData.filter(x => x.accName.includes(val.toUpperCase()));
            console.log(this.filterObject);
            this.showaccts = true;
        }
    }
    getContraData() {
        this.financeService.getContraData(6).subscribe(data => {
            this.contraData = data;
        });
    }
    saveRecptVchr() {
        if (this.btnSave == 'Update') {
            this.updateVocuehr();
        }
        else {
            const val = this.bankReceiptVoucherEntryFormGroup.controls;
            const obj = Object.assign({});
            obj.finTranSno = this.sNo + 1;
            obj.finTranHeadDate = this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss');
            obj.finTranHeadId = this.finTranHeadId;
            obj.finTranHeadNo = this.headNo;
            obj.finTranAccId = this.accName.value.accId;
            obj.finTranContraId = val.finContraId.value;
            obj.finTranDesc = val.finTranDesc.value;
            obj.finTranAmount = Number(val.Amount.value);
            obj.firmYearId = 0;
            obj.isDeleted = 0;
            obj.cityName = val.cityName.value;
            obj.accShName = val.accShName.value;
            obj.accName = this.accName.value.accName;
            obj.contraAccName = val.finContraId.value;
            obj.accCityId = this.accName.value.accCityId;
            obj.createdBy = 0;
            obj.createdOn = new Date().toISOString();
            obj.modifiedBy = 0,
                obj.modifiedOn = new Date().toISOString();
            obj.accId = this.accName.value.accId;
            obj.accName1 = "";
            obj.finTranVno = Number(val.finTranVno.value);
            obj.finTranId = 0;
            obj.tranTypeHeadId = 6;
            if (this.showBankact == true) {
                obj.finTranBankId = this.bankAcct.value.bankId;
            }
            else {
                obj.finTranBankId = 0;
            }
            obj.finTranInstType = this.instruType.value;
            this.financeService.saveCashVoucherRecpt(obj, 'Bank Receipt Voucher').subscribe(data => {
                this.finTranHeadId = data.resultObject;
                this.newGet(data.resultObject);
                this.reset();
            });
        }
    }
    newGet(finTranHeadId) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.financeService.editCashList(finTranHeadId).subscribe(res => {
            this.headNo = res[0].finTranHeadNo;
            this.sNo = res.length;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res);
            this.showTable = true;
        });
    }
    accTab(event) {
        if (event.keyCode === 9) {
            const districtTab = this.districtautoCompleteInput.activeOption.value;
            this.bankReceiptVoucherEntryFormGroup.controls.finContraId.setValue(districtTab);
            // this.clickdist();
        }
        else if (event.keyCode === 13) {
            const districtTab = this.districtautoCompleteInput.activeOption.value;
            this.bankReceiptVoucherEntryFormGroup.controls.finContraId.setValue(districtTab);
            // this.clickdist();
        }
    }
    getBankData() {
        this.financeService.getBankData().subscribe(result => {
            this.bankData = result;
        });
    }
    enterBank(val) {
        if (val.length >= 3) {
            this.bankNames = this.bankData.filter(x => x.bankName.includes(val.toUpperCase()));
            this.showBnks = true;
        }
    }
    validateFloatKeyPress(el) {
        var v = parseFloat(el.value);
        // el.value = (isNaN(v)) ? '' : v.toFixed(2);
        el.value = (Math.round(v * 100) / 100).toFixed(2);
    }
    changefirmgroup(val) {
        if (val == 1) {
            this.showBankact = true;
        }
        else {
            this.showBankact = false;
        }
    }
    bindContra(res) {
        this.bankReceiptVoucherEntryFormGroup.controls.finContraId.setValue(res.accId);
    }
    bindBank(res) {
        this.bankReceiptVoucherEntryFormGroup.controls.finTranBankId.setValue(res.finTranBankId);
    }
    ngOnDestroy() {
        // this.service.sendTabData('');
        this.subscription.unsubscribe();
    }
};
BankReceiptEntryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_4__["FinanceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_12__["OutWardHttpService"] },
    { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_13__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('districtautoCompleteInput', { static: false, read: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"] })
], BankReceiptEntryComponent.prototype, "districtautoCompleteInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], BankReceiptEntryComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('finTranDate', { static: false })
], BankReceiptEntryComponent.prototype, "date", void 0);
BankReceiptEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bank-receipt-entry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bank-receipt-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-receipt-entry/bank-receipt-entry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bank-receipt-entry.component.scss */ "./src/app/distribution/finance/bank-receipt-entry/bank-receipt-entry.component.scss")).default]
    })
], BankReceiptEntryComponent);



/***/ }),

/***/ "./src/app/distribution/finance/bank-receipt-register/bank-receipt-register.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-receipt-register/bank-receipt-register.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 20px;\n  margin-bottom: 0;\n  font-family: monospace !important;\n  font-weight: 700 !important;\n}\n\n.pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n\n.CashReceiptControls {\n  height: 300px;\n  width: 100%;\n}\n\n.CashReceiptCard {\n  width: 100%;\n  /* Take full width of the container */\n  max-width: 900px;\n  /* Limit the maximum width for better readability */\n  margin: 15px auto;\n  /* Center the card and add space above */\n  padding: 16px;\n  /* Add internal spacing */\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  /* Optional: Add a shadow for a modern look */\n  border-radius: 8px;\n  /* Optional: Rounded corners */\n  background-color: #ffffff;\n  /* Optional: Card background */\n}\n\n.innerCard {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  max-width: 20%;\n}\n\n.finance-button {\n  min-width: 90px;\n  /* Ensure buttons have consistent width */\n  margin: 0;\n  /* Remove default margins if any */\n}\n\n::ng-deep .user-card .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0px !important;\n}\n\n::ng-deep .user-card .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .user-card .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .user-card .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n::ng-deep .user-card .mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 2em;\n  top: calc(100% - 1.79167em);\n}\n\n::ng-deep .user-card .mat-form-field {\n  width: 100%;\n}\n\n.full-height {\n  height: 100%;\n  /* Ensure full height for the expansion panel */\n}\n\n.table-container {\n  position: relative;\n}\n\n.action-icons {\n  display: flex;\n  justify-content: flex-end;\n  /* Align icons to the right */\n  gap: 16px;\n  /* Space between buttons */\n  margin-bottom: 8px;\n  /* Space below the buttons */\n}\n\n.icon-img {\n  width: 37px;\n  height: 38px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvYmFuay1yZWNlaXB0LXJlZ2lzdGVyL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcZmluYW5jZVxcYmFuay1yZWNlaXB0LXJlZ2lzdGVyXFxiYW5rLXJlY2VpcHQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2JhbmstcmVjZWlwdC1yZWdpc3Rlci9iYW5rLXJlY2VpcHQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2JhbmstcmVjZWlwdC1yZWdpc3Rlci9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXG1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRFNBO0VBQ0UsV0FBQTtFQUFhLHFDQUFBO0VBQ2IsZ0JBQUE7RUFBa0IsbURBQUE7RUFDbEIsaUJBQUE7RUFBbUIsd0NBQUE7RUFDbkIsYUFBQTtFQUFlLHlCQUFBO0VBQ2YsMENBQUE7RUFBNEMsNkNBQUE7RUFDNUMsa0JBQUE7RUFBb0IsOEJBQUE7RUFDcEIseUJBQUE7RUFBMkIsOEJBQUE7QUNDN0I7O0FESUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQWlCLHlDQUFBO0VBQ2pCLFNBQUE7RUFBVyxrQ0FBQTtBQ0NiOztBQ3ZDSTtFQUNFLDZCQUFBO0FEMENOOztBQ3ZDSTtFQUNFLFdBQUE7QUR5Q047O0FDdENJO0VBQ0UseUNBQUE7QUR3Q047O0FDckNJO0VBQ0UsaUJBQUE7QUR1Q047O0FDcENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBRHNDTjs7QURaRTtFQUNFLFdBQUE7QUNjSjs7QURYQTtFQUNFLFlBQUE7RUFBYywrQ0FBQTtBQ2VoQjs7QURaQTtFQUNFLGtCQUFBO0FDZUY7O0FEWkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFBMkIsNkJBQUE7RUFDM0IsU0FBQTtFQUFXLDBCQUFBO0VBQ1gsa0JBQUE7RUFBb0IsNEJBQUE7QUNrQnRCOztBRGZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ2tCRiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2JhbmstcmVjZWlwdC1yZWdpc3Rlci9iYW5rLXJlY2VpcHQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGluLnNjc3MnO1xuXG4ucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cbi5waGFybWEtZmluYW5jZSAubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtaW4td2lkdGg6IDY1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIC5DYXNoUmVjZWlwdENhcmQge1xuLy8gICB3aWR0aDogMzAwcHg7XG4vLyAgIGhlaWdodDogMjU1cHg7XG4vLyAgIG1hcmdpbi10b3A6IDE1cHg7XG4vLyB9XG4uQ2FzaFJlY2VpcHRDYXJkIHtcbiAgd2lkdGg6IDEwMCU7IC8qIFRha2UgZnVsbCB3aWR0aCBvZiB0aGUgY29udGFpbmVyICovXG4gIG1heC13aWR0aDogOTAwcHg7IC8qIExpbWl0IHRoZSBtYXhpbXVtIHdpZHRoIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cbiAgbWFyZ2luOiAxNXB4IGF1dG87IC8qIENlbnRlciB0aGUgY2FyZCBhbmQgYWRkIHNwYWNlIGFib3ZlICovXG4gIHBhZGRpbmc6IDE2cHg7IC8qIEFkZCBpbnRlcm5hbCBzcGFjaW5nICovXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogT3B0aW9uYWw6IEFkZCBhIHNoYWRvdyBmb3IgYSBtb2Rlcm4gbG9vayAqL1xuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIE9wdGlvbmFsOiBSb3VuZGVkIGNvcm5lcnMgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogT3B0aW9uYWw6IENhcmQgYmFja2dyb3VuZCAqL1xufVxuXG5cblxuLmlubmVyQ2FyZCB7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDIwJTtcbn1cblxuLmZpbmFuY2UtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA5MHB4OyAvKiBFbnN1cmUgYnV0dG9ucyBoYXZlIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5zIGlmIGFueSAqL1xufVxuXG5cbjo6bmctZGVlcCAudXNlci1jYXJkIHtcbiAgQGluY2x1ZGUgdXNlci1mb3JtO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mdWxsLWhlaWdodCB7XG4gIGhlaWdodDogMTAwJTsgLyogRW5zdXJlIGZ1bGwgaGVpZ2h0IGZvciB0aGUgZXhwYW5zaW9uIHBhbmVsICovXG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY3Rpb24taWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBBbGlnbiBpY29ucyB0byB0aGUgcmlnaHQgKi9cbiAgZ2FwOiAxNnB4OyAvKiBTcGFjZSBiZXR3ZWVuIGJ1dHRvbnMgKi9cbiAgbWFyZ2luLWJvdHRvbTogOHB4OyAvKiBTcGFjZSBiZWxvdyB0aGUgYnV0dG9ucyAqL1xufVxuXG4uaWNvbi1pbWcge1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW46IDNweDtcbn1cbiIsIi5waGFybWFjeUhlYWRpbmcge1xuICBjb2xvcjogIzJmOGJiZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLnBoYXJtYS1maW5hbmNlIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1pbi13aWR0aDogNjVweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cblxuLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkNhc2hSZWNlaXB0Q2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBUYWtlIGZ1bGwgd2lkdGggb2YgdGhlIGNvbnRhaW5lciAqL1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICAvKiBMaW1pdCB0aGUgbWF4aW11bSB3aWR0aCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICAvKiBDZW50ZXIgdGhlIGNhcmQgYW5kIGFkZCBzcGFjZSBhYm92ZSAqL1xuICBwYWRkaW5nOiAxNnB4O1xuICAvKiBBZGQgaW50ZXJuYWwgc3BhY2luZyAqL1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIE9wdGlvbmFsOiBBZGQgYSBzaGFkb3cgZm9yIGEgbW9kZXJuIGxvb2sgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBPcHRpb25hbDogUm91bmRlZCBjb3JuZXJzICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC8qIE9wdGlvbmFsOiBDYXJkIGJhY2tncm91bmQgKi9cbn1cblxuLmlubmVyQ2FyZCB7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDIwJTtcbn1cblxuLmZpbmFuY2UtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICAvKiBFbnN1cmUgYnV0dG9ucyBoYXZlIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5zIGlmIGFueSAqL1xufVxuXG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNGVtIDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC51c2VyLWNhcmQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICB0b3A6IC0xLjVlbTtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSgwLjc1KTtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICBmb250LXNpemU6IDc1JTtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjdlbSk7XG59XG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBFbnN1cmUgZnVsbCBoZWlnaHQgZm9yIHRoZSBleHBhbnNpb24gcGFuZWwgKi9cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFjdGlvbi1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIC8qIEFsaWduIGljb25zIHRvIHRoZSByaWdodCAqL1xuICBnYXA6IDE2cHg7XG4gIC8qIFNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC8qIFNwYWNlIGJlbG93IHRoZSBidXR0b25zICovXG59XG5cbi5pY29uLWltZyB7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbjogM3B4O1xufSIsIkBtaXhpbiB1c2VyLWZvcm0ge1xuXG4gIC8vIC5tYXQtZm9ybS1maWVsZCB7XG4gIC8vICAgZm9udC1zaXplOiAxNHB4O1xuICAvLyAgIGhlaWdodDogNDhweDtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gfVxuXG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4Pi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICAgIHRvcDogLTEuNWVtO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICBcbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgZm9udC1zaXplOiA3NSU7XG4gICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjdlbSk7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgQG1peGluIG1hdC10YWIge1xuICAgIC5tYXQtdGFiLWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlYmVkZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiA4JSA4JSAwJSAwJTtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgcGFkZGluZzogMCAxMXB4O1xuICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICB9XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/distribution/finance/bank-receipt-register/bank-receipt-register.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-receipt-register/bank-receipt-register.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BankReceiptRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReceiptRegisterComponent", function() { return BankReceiptRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let BankReceiptRegisterComponent = class BankReceiptRegisterComponent {
    constructor(formBuilder, datePipe, financeService, route) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.financeService = financeService;
        this.route = route;
        this.openPanel = false;
        this.step = 0;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.displayedColumns = ['voucherNo', 'voucherDate', 'AccountName', 'Description', 'Amount'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.bankReceiptRegisterFormGroup = this.buildbankReceiptRegisterFormGroup();
    }
    ngAfterViewInit() {
        // Assign paginator after view initialization
        this.dataSource.paginator = this.paginator;
    }
    setStep(index) {
        this.step = index;
    }
    prevStep() {
        this.step = 0;
        this.openPanel = false;
    }
    buildbankReceiptRegisterFormGroup() {
        return this.formBuilder.group({
            fromDate: [''],
            toDate: [''],
            wantVoucherTotal: ['no'] // Default value
        });
    }
    nextStep(data) {
        console.log(data);
        let voucherTotal = '2';
        const frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
        const toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
        if (data.wantVoucherTotal === 'yes') {
            voucherTotal = '1';
        }
        this.step = 1;
        this.openPanel = true;
        const reBody = {
            tranTypeHeadId: '6',
            fromDate: frmDte,
            toDate: toDte,
            sumTotalYN: voucherTotal
        };
        this.financeService.generateCashRecptReg(reBody).subscribe((res) => {
            if (res) {
                console.log(res);
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.resultObject);
                setTimeout(() => {
                    this.dataSource.paginator = this.paginator;
                }, 100);
            }
        });
    }
    resetForm() {
        this.bankReceiptRegisterFormGroup.reset();
    }
    // exportToExcel() {
    //   // Logic for exporting to Excel
    //   console.log('Export to Excel clicked');
    // }
    exportToExcel(data) {
        let voucherTotal = "2";
        let frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
        let toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
        if (data.wantVoucherTotal === "yes") {
            voucherTotal = "1";
        }
        let reBody = {
            tranTypeHeadId: "6",
            fromDate: frmDte,
            toDate: toDte,
            sumTotalYN: voucherTotal
        };
        this.financeService.generateExcel(reBody).subscribe((res) => {
            const base64String = res.resultObject;
            const fileName = 'BankReceiptRegister.xlsx'; // Desired file name
            // Decode Base64 to binary data
            const binaryData = atob(base64String);
            const byteNumbers = new Array(binaryData.length);
            for (let i = 0; i < binaryData.length; i++) {
                byteNumbers[i] = binaryData.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            // Create a Blob from the binary data
            const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            // Create a URL for the Blob
            const url = window.URL.createObjectURL(blob);
            // Create an anchor element and trigger the download
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = fileName;
            anchor.click();
            // Clean up the URL
            window.URL.revokeObjectURL(url);
        }, (err) => {
            console.error('Error generating Excel file:', err);
        });
    }
    exportToPdf() {
        // Logic for exporting to PDF
        console.log('Export to PDF clicked');
    }
    goback() {
        if (this.route.url.includes('from=bankreceiptRegister')) {
            this.route.navigate(['pharma/finance/FinanceRegister']);
        }
        else {
            this.route.navigate(['pharma/finance/bankReceipts']);
        }
    }
};
BankReceiptRegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_5__["FinanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false })
], BankReceiptRegisterComponent.prototype, "paginator", void 0);
BankReceiptRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bank-receipt-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bank-receipt-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-receipt-register/bank-receipt-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bank-receipt-register.component.scss */ "./src/app/distribution/finance/bank-receipt-register/bank-receipt-register.component.scss")).default]
    })
], BankReceiptRegisterComponent);



/***/ }),

/***/ "./src/app/distribution/finance/bank-receipt/bank-receipt.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-receipt/bank-receipt.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n\n.buttons {\n  width: 960px;\n  margin: 0 auto;\n}\n\n.action_btn {\n  width: 500px;\n  margin: 5px auto;\n}\n\n.finance-button {\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvYmFuay1yZWNlaXB0L0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcZmluYW5jZVxcYmFuay1yZWNlaXB0XFxiYW5rLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2JhbmstcmVjZWlwdC9iYW5rLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ1E7RUFDSixZQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURFSTtFQUNFLG1CQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS9iYW5rLXJlY2VpcHQvYmFuay1yZWNlaXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBoYXJtYS1maW5hbmNlIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtaW4td2lkdGg6IDY1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4uYnV0dG9ucyB7XG4gICAgd2lkdGg6IDk2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO31cbiAgICBcbiAgICAgICAgLmFjdGlvbl9idG4ge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDVweCBhdXRvO31cblxuXG5cbiAgICAuZmluYW5jZS1idXR0b24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfSIsIi5waGFybWEtZmluYW5jZSAubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtaW4td2lkdGg6IDY1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5idXR0b25zIHtcbiAgd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbl9idG4ge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5maW5hbmNlLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/distribution/finance/bank-receipt/bank-receipt.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/distribution/finance/bank-receipt/bank-receipt.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BankReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankReceiptComponent", function() { return BankReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/app-message-utils */ "./src/app/shared/utils/app-message-utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/my-custom-dialog/my-custom-dialog.component */ "./src/app/shared/components/my-custom-dialog/my-custom-dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");












// const ELEMENT_DATA: PeriodicElement[] = [
//   { shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
//   { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
// ];
let BankReceiptComponent = class BankReceiptComponent {
    constructor(financeService, datePipe, formBuilder, router, dialog) {
        this.financeService = financeService;
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns1 = ['position', 'name', 'weight', 'symbol', 'description', 'rcNo', 'Amount', 'Discount', 'Actions'];
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.accName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.customAccountAutoCompleteDef = {
            label: 'Head of Account',
            isRequired: true,
            dataSourceFn: (name) => this.financeService.getCustomAccountsByName(name),
            minCount: 2,
            keyString: 'accName'
        };
        this.customAccountsOptsTable = {
            panelWidth: 700,
            columns: [
                { name: 'Head of Account', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 50, fxFlex1: 50, isKeyColumn: true },
                { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 50, fxFlex1: 50 },
                { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 35, fxFlex1: 35 },
                { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 50, fxFlex1: 50 },
                { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 20, fxFlex1: 20 }
            ]
        };
        this.fintranId = 0;
        this.instrumentTypes = [];
        this.instruType = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.instruNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getVoucherData();
    }
    getVoucherData() {
        this.financeService.getAllVoucherData(6).subscribe(data => {
            if (data) {
                data.forEach(x => {
                    x.finTranHeadDate = x.finTranHeadDate.split('T')[0];
                });
                this.sNo = data.length;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
                this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
                setTimeout(() => {
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }, 100);
            }
        });
    }
    deleteItem(data) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
        const dialogRef = this.dialog.open(src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MyCustomDialogComponent"], dialogConfig);
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._onDestroy))
            .subscribe(result => {
            if (result === true) {
                this.deleteList(data);
            }
        });
    }
    deleteList(element) {
        this.financeService.doDeletCashList(element.finTranHeadId).subscribe(data => src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus200(data) ? this.refresh() :
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus404(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__["default"].warningMessage("Voucher Had already deleted") : '');
        this.getVoucherData();
    }
    getByEdit(element) {
        this.financeService.sendListData(element);
        setTimeout(() => {
            this.router.navigate(['pharma/finance/bankentry']);
        }, 200);
    }
    refresh() { }
    //Voucher Entry Data//
    buildcashReceiptVoucherEntry() {
        return this.formBuilder.group({
            finDate: [''],
            finContraId: ['Cash On Hand'],
            customAccId: [''],
            accShName: [''],
            cityName: [''],
            finTranDesc: [''],
            finTranVno: [''],
            Amount: [''],
            finDisc: [''],
        });
    }
    detailDelete(Obj) {
        return Obj.deleteFlag;
    }
    deleteTemplate() {
        return this.deletePurchaseHeadTemplate;
    }
    clickBank() {
        this.financeService.sendListData(null);
        setTimeout(() => {
            this.router.navigate(['pharma/finance/bankentry']);
        }, 200);
    }
};
BankReceiptComponent.ctorParameters = () => [
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_3__["FinanceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], BankReceiptComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false })
], BankReceiptComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('finTranDate', { static: false })
], BankReceiptComponent.prototype, "date", void 0);
BankReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bank-receipt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bank-receipt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/bank-receipt/bank-receipt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bank-receipt.component.scss */ "./src/app/distribution/finance/bank-receipt/bank-receipt.component.scss")).default]
    })
], BankReceiptComponent);



/***/ }),

/***/ "./src/app/distribution/finance/cash-payment-register/cash-payment-register.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-payment-register/cash-payment-register.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 20px;\n  margin-bottom: 0;\n  font-family: monospace !important;\n  font-weight: 700 !important;\n}\n\n.pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n\n.CashReceiptControls {\n  height: 300px;\n  width: 100%;\n}\n\n.CashReceiptCard {\n  width: 100%;\n  /* Take full width of the container */\n  max-width: 900px;\n  /* Limit the maximum width for better readability */\n  margin: 15px auto;\n  /* Center the card and add space above */\n  padding: 16px;\n  /* Add internal spacing */\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  /* Optional: Add a shadow for a modern look */\n  border-radius: 8px;\n  /* Optional: Rounded corners */\n  background-color: #ffffff;\n  /* Optional: Card background */\n}\n\n.innerCard {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  max-width: 20%;\n}\n\n.finance-button {\n  min-width: 90px;\n  /* Ensure buttons have consistent width */\n  margin: 0;\n  /* Remove default margins if any */\n}\n\n::ng-deep .user-card .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0px !important;\n}\n\n::ng-deep .user-card .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .user-card .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .user-card .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n::ng-deep .user-card .mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 2em;\n  top: calc(100% - 1.79167em);\n}\n\n::ng-deep .user-card .mat-form-field {\n  width: 100%;\n}\n\n.full-height {\n  height: 100%;\n  /* Ensure full height for the expansion panel */\n}\n\n.table-container {\n  position: relative;\n}\n\n.action-icons {\n  display: flex;\n  justify-content: flex-end;\n  /* Align icons to the right */\n  gap: 16px;\n  /* Space between buttons */\n  margin-bottom: 8px;\n  /* Space below the buttons */\n}\n\n.icon-img {\n  width: 37px;\n  height: 38px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvY2FzaC1wYXltZW50LXJlZ2lzdGVyL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcZmluYW5jZVxcY2FzaC1wYXltZW50LXJlZ2lzdGVyXFxjYXNoLXBheW1lbnQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2Nhc2gtcGF5bWVudC1yZWdpc3Rlci9jYXNoLXBheW1lbnQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2Nhc2gtcGF5bWVudC1yZWdpc3Rlci9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXG1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRFNBO0VBQ0UsV0FBQTtFQUFhLHFDQUFBO0VBQ2IsZ0JBQUE7RUFBa0IsbURBQUE7RUFDbEIsaUJBQUE7RUFBbUIsd0NBQUE7RUFDbkIsYUFBQTtFQUFlLHlCQUFBO0VBQ2YsMENBQUE7RUFBNEMsNkNBQUE7RUFDNUMsa0JBQUE7RUFBb0IsOEJBQUE7RUFDcEIseUJBQUE7RUFBMkIsOEJBQUE7QUNDN0I7O0FESUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQWlCLHlDQUFBO0VBQ2pCLFNBQUE7RUFBVyxrQ0FBQTtBQ0NiOztBQ3ZDSTtFQUNFLDZCQUFBO0FEMENOOztBQ3ZDSTtFQUNFLFdBQUE7QUR5Q047O0FDdENJO0VBQ0UseUNBQUE7QUR3Q047O0FDckNJO0VBQ0UsaUJBQUE7QUR1Q047O0FDcENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBRHNDTjs7QURaRTtFQUNFLFdBQUE7QUNjSjs7QURYQTtFQUNFLFlBQUE7RUFBYywrQ0FBQTtBQ2VoQjs7QURaQTtFQUNFLGtCQUFBO0FDZUY7O0FEWkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFBMkIsNkJBQUE7RUFDM0IsU0FBQTtFQUFXLDBCQUFBO0VBQ1gsa0JBQUE7RUFBb0IsNEJBQUE7QUNrQnRCOztBRGZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ2tCRiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2Nhc2gtcGF5bWVudC1yZWdpc3Rlci9jYXNoLXBheW1lbnQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGluLnNjc3MnO1xuXG4ucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cbi5waGFybWEtZmluYW5jZSAubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtaW4td2lkdGg6IDY1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIC5DYXNoUmVjZWlwdENhcmQge1xuLy8gICB3aWR0aDogMzAwcHg7XG4vLyAgIGhlaWdodDogMjU1cHg7XG4vLyAgIG1hcmdpbi10b3A6IDE1cHg7XG4vLyB9XG4uQ2FzaFJlY2VpcHRDYXJkIHtcbiAgd2lkdGg6IDEwMCU7IC8qIFRha2UgZnVsbCB3aWR0aCBvZiB0aGUgY29udGFpbmVyICovXG4gIG1heC13aWR0aDogOTAwcHg7IC8qIExpbWl0IHRoZSBtYXhpbXVtIHdpZHRoIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgKi9cbiAgbWFyZ2luOiAxNXB4IGF1dG87IC8qIENlbnRlciB0aGUgY2FyZCBhbmQgYWRkIHNwYWNlIGFib3ZlICovXG4gIHBhZGRpbmc6IDE2cHg7IC8qIEFkZCBpbnRlcm5hbCBzcGFjaW5nICovXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogT3B0aW9uYWw6IEFkZCBhIHNoYWRvdyBmb3IgYSBtb2Rlcm4gbG9vayAqL1xuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIE9wdGlvbmFsOiBSb3VuZGVkIGNvcm5lcnMgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogT3B0aW9uYWw6IENhcmQgYmFja2dyb3VuZCAqL1xufVxuXG5cblxuLmlubmVyQ2FyZCB7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDIwJTtcbn1cblxuLmZpbmFuY2UtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA5MHB4OyAvKiBFbnN1cmUgYnV0dG9ucyBoYXZlIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5zIGlmIGFueSAqL1xufVxuXG5cbjo6bmctZGVlcCAudXNlci1jYXJkIHtcbiAgQGluY2x1ZGUgdXNlci1mb3JtO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mdWxsLWhlaWdodCB7XG4gIGhlaWdodDogMTAwJTsgLyogRW5zdXJlIGZ1bGwgaGVpZ2h0IGZvciB0aGUgZXhwYW5zaW9uIHBhbmVsICovXG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY3Rpb24taWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBBbGlnbiBpY29ucyB0byB0aGUgcmlnaHQgKi9cbiAgZ2FwOiAxNnB4OyAvKiBTcGFjZSBiZXR3ZWVuIGJ1dHRvbnMgKi9cbiAgbWFyZ2luLWJvdHRvbTogOHB4OyAvKiBTcGFjZSBiZWxvdyB0aGUgYnV0dG9ucyAqL1xufVxuXG4uaWNvbi1pbWcge1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW46IDNweDtcbn1cbiIsIi5waGFybWFjeUhlYWRpbmcge1xuICBjb2xvcjogIzJmOGJiZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLnBoYXJtYS1maW5hbmNlIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1pbi13aWR0aDogNjVweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cblxuLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkNhc2hSZWNlaXB0Q2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBUYWtlIGZ1bGwgd2lkdGggb2YgdGhlIGNvbnRhaW5lciAqL1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICAvKiBMaW1pdCB0aGUgbWF4aW11bSB3aWR0aCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICAvKiBDZW50ZXIgdGhlIGNhcmQgYW5kIGFkZCBzcGFjZSBhYm92ZSAqL1xuICBwYWRkaW5nOiAxNnB4O1xuICAvKiBBZGQgaW50ZXJuYWwgc3BhY2luZyAqL1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIE9wdGlvbmFsOiBBZGQgYSBzaGFkb3cgZm9yIGEgbW9kZXJuIGxvb2sgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBPcHRpb25hbDogUm91bmRlZCBjb3JuZXJzICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC8qIE9wdGlvbmFsOiBDYXJkIGJhY2tncm91bmQgKi9cbn1cblxuLmlubmVyQ2FyZCB7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDIwJTtcbn1cblxuLmZpbmFuY2UtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICAvKiBFbnN1cmUgYnV0dG9ucyBoYXZlIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5zIGlmIGFueSAqL1xufVxuXG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNGVtIDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC51c2VyLWNhcmQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICB0b3A6IC0xLjVlbTtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSgwLjc1KTtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICBmb250LXNpemU6IDc1JTtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjdlbSk7XG59XG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBFbnN1cmUgZnVsbCBoZWlnaHQgZm9yIHRoZSBleHBhbnNpb24gcGFuZWwgKi9cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFjdGlvbi1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIC8qIEFsaWduIGljb25zIHRvIHRoZSByaWdodCAqL1xuICBnYXA6IDE2cHg7XG4gIC8qIFNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC8qIFNwYWNlIGJlbG93IHRoZSBidXR0b25zICovXG59XG5cbi5pY29uLWltZyB7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbjogM3B4O1xufSIsIkBtaXhpbiB1c2VyLWZvcm0ge1xuXG4gIC8vIC5tYXQtZm9ybS1maWVsZCB7XG4gIC8vICAgZm9udC1zaXplOiAxNHB4O1xuICAvLyAgIGhlaWdodDogNDhweDtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gfVxuXG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4Pi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICAgIHRvcDogLTEuNWVtO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICBcbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgZm9udC1zaXplOiA3NSU7XG4gICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjdlbSk7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgQG1peGluIG1hdC10YWIge1xuICAgIC5tYXQtdGFiLWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlYmVkZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiA4JSA4JSAwJSAwJTtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgcGFkZGluZzogMCAxMXB4O1xuICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICB9XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/distribution/finance/cash-payment-register/cash-payment-register.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-payment-register/cash-payment-register.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CashPaymentRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPaymentRegisterComponent", function() { return CashPaymentRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let CashPaymentRegisterComponent = class CashPaymentRegisterComponent {
    constructor(formBuilder, datePipe, financeService, route) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.financeService = financeService;
        this.route = route;
        this.openPanel = false;
        this.step = 0;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.displayedColumns = ['voucherNo', 'voucherDate', 'AccountName', 'Description', 'Amount'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    setStep(index) {
        this.step = index;
    }
    prevStep() {
        this.step = 0;
        this.openPanel = false;
    }
    ngOnInit() {
        this.cashPaymentRegisterFormGroup = this.buildcashPaymentRegisterFormGroup();
    }
    ngAfterViewInit() {
        // Assign paginator after view initialization
        this.dataSource.paginator = this.paginator;
    }
    buildcashPaymentRegisterFormGroup() {
        return this.formBuilder.group({
            fromDate: [''],
            toDate: [''],
            wantVoucherTotal: ['no'] // Default value
        });
    }
    nextStep(data) {
        console.log(data);
        let voucherTotal = "2";
        let frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
        let toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
        if (data.wantVoucherTotal == "yes") {
            voucherTotal = "1";
        }
        else {
            voucherTotal = "2";
        }
        this.step = 1;
        this.openPanel = true;
        let reBody = {
            tranTypeHeadId: "7",
            fromDate: frmDte,
            toDate: toDte,
            sumTotalYN: voucherTotal
        };
        this.financeService.generateCashRecptReg(reBody).subscribe(res => {
            if (res) {
                console.log(res);
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.resultObject);
                setTimeout(() => {
                    this.dataSource.paginator = this.paginator;
                }, 100);
            }
        });
    }
    resetForm() {
        this.cashPaymentRegisterFormGroup.reset();
    }
    // exportToExcel() {
    //   // Logic for exporting to Excel
    //   console.log('Export to Excel clicked');
    // }
    exportToExcel(data) {
        let voucherTotal = "2";
        let frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
        let toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
        if (data.wantVoucherTotal === "yes") {
            voucherTotal = "1";
        }
        let reBody = {
            tranTypeHeadId: "7",
            fromDate: frmDte,
            toDate: toDte,
            sumTotalYN: voucherTotal
        };
        this.financeService.generateExcel(reBody).subscribe((res) => {
            const base64String = res.resultObject;
            const fileName = 'CashPaymentRegister.xlsx'; // Desired file name
            // Decode Base64 to binary data
            const binaryData = atob(base64String);
            const byteNumbers = new Array(binaryData.length);
            for (let i = 0; i < binaryData.length; i++) {
                byteNumbers[i] = binaryData.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            // Create a Blob from the binary data
            const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            // Create a URL for the Blob
            const url = window.URL.createObjectURL(blob);
            // Create an anchor element and trigger the download
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = fileName;
            anchor.click();
            // Clean up the URL
            window.URL.revokeObjectURL(url);
        }, (err) => {
            console.error('Error generating Excel file:', err);
        });
    }
    exportToPdf() {
        // Logic for exporting to PDF
        console.log('Export to PDF clicked');
    }
    goback() {
        if (this.route.url.includes('from=cpRegister')) {
            this.route.navigate(['pharma/finance/FinanceRegister']);
        }
        else {
            this.route.navigate(['pharma/finance/cashPayments']);
        }
    }
};
CashPaymentRegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_5__["FinanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false })
], CashPaymentRegisterComponent.prototype, "paginator", void 0);
CashPaymentRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-cash-payment-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-payment-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-payment-register/cash-payment-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cash-payment-register.component.scss */ "./src/app/distribution/finance/cash-payment-register/cash-payment-register.component.scss")).default]
    })
], CashPaymentRegisterComponent);



/***/ }),

/***/ "./src/app/distribution/finance/cash-payment-voucher-entry/cash-payment-voucher-entry.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-payment-voucher-entry/cash-payment-voucher-entry.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttons {\n  width: 960px;\n  margin: 0 auto;\n}\n\n.action_btn {\n  width: 500px;\n  margin: 5px auto;\n}\n\n.finance-button {\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvY2FzaC1wYXltZW50LXZvdWNoZXItZW50cnkvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxmaW5hbmNlXFxjYXNoLXBheW1lbnQtdm91Y2hlci1lbnRyeVxcY2FzaC1wYXltZW50LXZvdWNoZXItZW50cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2Nhc2gtcGF5bWVudC12b3VjaGVyLWVudHJ5L2Nhc2gtcGF5bWVudC12b3VjaGVyLWVudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDUTtFQUNKLFlBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREVJO0VBQ0UsbUJBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2Nhc2gtcGF5bWVudC12b3VjaGVyLWVudHJ5L2Nhc2gtcGF5bWVudC12b3VjaGVyLWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbnMge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBtYXJnaW46IDAgYXV0bzt9XG4gICAgXG4gICAgICAgIC5hY3Rpb25fYnRuIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bzt9XG5cblxuXG4gICAgLmZpbmFuY2UtYnV0dG9uIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH0iLCIuYnV0dG9ucyB7XG4gIHdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hY3Rpb25fYnRuIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4uZmluYW5jZS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/distribution/finance/cash-payment-voucher-entry/cash-payment-voucher-entry.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-payment-voucher-entry/cash-payment-voucher-entry.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CashPaymentVoucherEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPaymentVoucherEntryComponent", function() { return CashPaymentVoucherEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/app-message-utils */ "./src/app/shared/utils/app-message-utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/my-custom-dialog/my-custom-dialog.component */ "./src/app/shared/components/my-custom-dialog/my-custom-dialog.component.ts");
/* harmony import */ var src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/http-services/out-ward/out-ward-http.service */ "./src/app/shared/http-services/out-ward/out-ward-http.service.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");













let CashPaymentVoucherEntryComponent = class CashPaymentVoucherEntryComponent {
    constructor(formBuilder, financeService, datePipe, dialog, service, todayDate) {
        this.formBuilder = formBuilder;
        this.financeService = financeService;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.service = service;
        this.todayDate = todayDate;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'description', 'rcNo', 'Amount', 'Discount', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.accName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.customAccountAutoCompleteDef = {
            label: 'Head of Account',
            isRequired: true,
            dataSourceFn: (name) => this.financeService.getCustomAccountsByName(name),
            minCount: 2,
            keyString: 'accName'
        };
        this.customAccountsOptsTable = {
            panelWidth: 700,
            columns: [
                { name: 'Head of Account', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 36, fxFlex1: 36, isKeyColumn: true },
                { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 19, fxFlex1: 19 },
                { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 14, fxFlex1: 14 },
                { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 20, fxFlex1: 20 },
                { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 10, fxFlex1: 10 }
            ]
        };
        this.finTranHeadId = 0;
        this.sNo = 0;
        this.fintranId = 0;
        this.headNo = "";
        this.btnSave = 'Save';
        this.instrumentTypes = [];
        this.instruType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.instruNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.showTable = false;
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
    }
    ngOnInit() {
        this.cashPaymentVoucherEntryFormGroup = this.buildcashPaymentVoucherEntry();
        this.accName.valueChanges.subscribe(res => {
            console.log(res);
            if (typeof res === 'object') {
                this.supplierData = res;
                this.bindAccountDetails(res);
            }
        });
        // var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        var dt = this.todayDate.localDate();
        dt = this.datePipe.transform(dt, 'yyyy-MM-dd');
        this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));
        if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.firmPreferences.finEdate;
        }
        setTimeout(() => {
            this.cashPaymentVoucherEntryFormGroup.controls.finDate.setValue(dt);
            this.cashPaymentVoucherEntryFormGroup.controls.finContraId.disable();
            this.cashPaymentVoucherEntryFormGroup.controls.accShName.disable();
            this.cashPaymentVoucherEntryFormGroup.controls.cityName.disable();
        }, 200);
        this.showClear = true;
        this.instrumentTypes = [{ id: 1, type: 'CHECK' }, { id: 2, type: 'NEFT' }, { id: 3, type: 'ONLINE (UPI/NET BANKING/ANY OTHER ONLINE PAYMENT)' }];
        setTimeout(() => {
            this.financeService.getListData$.subscribe(rees => {
                if (rees != null) {
                    this.newGet(rees.finTranHeadId);
                    this.finTranHeadId = rees.finTranHeadId;
                    this.headNo = rees.finTranHeadNo;
                }
                else {
                    this.showTable = false;
                }
                // this.listshow = true;
            });
        }, 300);
        // this.subscription.add(this.service.getTabData$.subscribe(res=>{
        //   if(res != null && res){
        //     this.bindAccountDetails(res[0]);
        //     this.accName.setValue(res[0].accName);
        //   }
        // }));
    }
    buildcashPaymentVoucherEntry() {
        return this.formBuilder.group({
            finDate: [''],
            finContraId: ['Cash On Hand'],
            customAccId: [''],
            accShName: [''],
            cityName: [''],
            finTranDesc: [''],
            finTranVno: [''],
            Amount: [''],
            finDisc: [''],
        });
    }
    bindAccountDetails(data) {
        console.log(data);
        this.cashPaymentVoucherEntryFormGroup.patchValue({
            accShName: data.accShName,
            cityName: data.cityName,
            accMobile: data.accMobile,
            accGstIn: data.accGstIn
        });
    }
    addOrEdit(element) {
        this.showClear = false;
        this.btnSave = 'Update';
        this.financeService.editCashData(element.finTranId).subscribe(res => {
            this.commonMethod(res);
        });
    }
    delete(element) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
        const dialogRef = this.dialog.open(src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MyCustomDialogComponent"], dialogConfig);
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
            .subscribe(result => {
            if (result === true) {
                this.deleteid(element);
            }
        });
    }
    deleteid(element) {
        this.financeService.doDeleteCashVocuher(element.finTranId).subscribe(data => src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus200(data) ? this.refresh() :
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus404(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__["default"].warningMessage("Voucher Had already deleted") : '');
        setTimeout(() => {
            this.newGet(this.finTranHeadId);
        }, 200);
        this.reset();
    }
    updateVocuehr() {
        const val = this.cashPaymentVoucherEntryFormGroup.controls;
        const obj = {
            finTranId: this.fintranId,
            finTranSno: this.sNo,
            tranTypeHeadId: 7,
            finTranHeadDate: this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss'),
            finTranHeadId: this.finTranHeadId,
            finTranHeadNo: this.headNo,
            finTranAccId: this.acId,
            finTranContraId: this.firmPreferences.cashAccId,
            finTranDesc: val.finTranDesc.value,
            finTranAmount: val.Amount.value,
            finTranVno: val.finTranVno.value,
            firmYearId: this.frimYearId,
            cityName: val.cityName.value,
            accShName: val.accShName.value,
            accName: this.accName.value.accName,
            contraAccName: val.finContraId.value,
            accCityId: 0, createdBy: 0,
            createdOn: this.createdOn,
            modifiedBy: 0,
            modifiedOn: this.modifiedOn,
        };
        this.financeService.updateCashVData(obj, 'Cash Payment').subscribe(data => {
            this.reset();
            this.newGet(this.finTranHeadId);
        });
    }
    detailDelete(Obj) {
        return Obj.deleteFlag;
    }
    deleteTemplate() {
        return this.deletePurchaseHeadTemplate;
    }
    refresh() {
    }
    reset() {
        this.btnSave = 'Save';
        this.showClear = true;
        this.accName.setValue('');
        this.cashPaymentVoucherEntryFormGroup.reset();
        this.cashPaymentVoucherEntryFormGroup.controls.finContraId.setValue("Cash On Hand");
        var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        setTimeout(() => {
            this.cashPaymentVoucherEntryFormGroup.controls.finDate.setValue(dt);
        }, 200);
    }
    commonMethod(res) {
        this.cashPaymentVoucherEntryFormGroup.controls.Amount.setValue(res.finTranAmount);
        this.cashPaymentVoucherEntryFormGroup.controls.finContraId.setValue("Cash On Hand");
        this.cashPaymentVoucherEntryFormGroup.controls.finDate.setValue(res.finTranHeadDate);
        this.cashPaymentVoucherEntryFormGroup.controls.finTranDesc.setValue(res.finTranDesc);
        this.cashPaymentVoucherEntryFormGroup.controls.finTranVno.setValue(res.finTranVno);
        this.accName.setValue(res.accName);
        this.acId = res.finTranAccId;
        this.fintranId = res.finTranId;
        this.sNo = res.finTranSno;
        this.finTranHeadId = res.finTranHeadId;
        this.frimYearId = res.firmYearId;
        this.headNo = res.finTranHeadNo;
        this.createdOn = res.createdOn;
        this.modifiedOn = res.modifiedOn;
    }
    cashPaymentVchrSave() {
        console.log(this.firmPreferences.cashAccId);
        if (this.btnSave == 'Update') {
            this.updateVocuehr();
        }
        else {
            const val = this.cashPaymentVoucherEntryFormGroup.controls;
            const obj = Object.assign({});
            obj.finTranSno = this.sNo + 1;
            obj.finTranHeadDate = this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss');
            obj.finTranHeadId = this.finTranHeadId;
            obj.finTranHeadNo = this.headNo;
            obj.finTranAccId = this.accName.value.accId;
            obj.finTranContraId = this.firmPreferences.cashAccId;
            obj.finTranDesc = val.finTranDesc.value;
            obj.finTranAmount = Number(val.Amount.value);
            obj.firmYearId = 0;
            obj.isDeleted = 0;
            obj.cityName = val.cityName.value;
            obj.accShName = val.accShName.value;
            obj.accName = this.accName.value.accName;
            obj.contraAccName = val.finContraId.value;
            obj.accCityId = this.accName.value.accCityId;
            obj.createdBy = 0;
            obj.createdOn = new Date().toISOString();
            obj.modifiedBy = 0,
                obj.modifiedOn = new Date().toISOString();
            obj.accId = this.accName.value.accId;
            obj.accName1 = "";
            obj.finTranVno = Number(val.finTranVno.value);
            obj.finTranId = 0;
            obj.tranTypeHeadId = 7;
            this.financeService.saveCashVoucherRecpt(obj, 'Cash Payment Voucher').subscribe(data => {
                this.finTranHeadId = data.resultObject;
                this.newGet(data.resultObject);
                this.reset();
            });
        }
    }
    newGet(finTranHeadId) {
        this.financeService.editCashList(finTranHeadId).subscribe(res => {
            this.headNo = res[0].finTranHeadNo;
            this.sNo = res.length;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res);
            this.showTable = true;
        });
    }
    validateFloatKeyPress(el) {
        var v = parseFloat(el.value);
        // el.value = (isNaN(v)) ? '' : v.toFixed(2);
        el.value = (Math.round(v * 100) / 100).toFixed(2);
    }
    ngOnDestroy() {
        // this.service.sendTabData('');
        this.subscription.unsubscribe();
    }
};
CashPaymentVoucherEntryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_4__["FinanceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_11__["OutWardHttpService"] },
    { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], CashPaymentVoucherEntryComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('finTranDate', { static: false })
], CashPaymentVoucherEntryComponent.prototype, "date", void 0);
CashPaymentVoucherEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cash-payment-voucher-entry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-payment-voucher-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-payment-voucher-entry/cash-payment-voucher-entry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cash-payment-voucher-entry.component.scss */ "./src/app/distribution/finance/cash-payment-voucher-entry/cash-payment-voucher-entry.component.scss")).default]
    })
], CashPaymentVoucherEntryComponent);



/***/ }),

/***/ "./src/app/distribution/finance/cash-payment/cash-payment.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-payment/cash-payment.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttons {\n  width: 960px;\n  margin: 0 auto;\n}\n\n.action_btn {\n  width: 500px;\n  margin: 5px auto;\n}\n\n.finance-button {\n  border-radius: 30px;\n}\n\n.pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvY2FzaC1wYXltZW50L0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcZmluYW5jZVxcY2FzaC1wYXltZW50XFxjYXNoLXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2Nhc2gtcGF5bWVudC9jYXNoLXBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENRO0VBQ0osWUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FERUk7RUFDRSxtQkFBQTtBQ0NOOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS9jYXNoLXBheW1lbnQvY2FzaC1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbnMge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBtYXJnaW46IDAgYXV0bzt9XG4gICAgXG4gICAgICAgIC5hY3Rpb25fYnRuIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bzt9XG5cblxuXG4gICAgLmZpbmFuY2UtYnV0dG9uIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cblxuICAucGhhcm1hLWZpbmFuY2UgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG1pbi13aWR0aDogNjVweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG59XG4iLCIuYnV0dG9ucyB7XG4gIHdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hY3Rpb25fYnRuIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4uZmluYW5jZS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4ucGhhcm1hLWZpbmFuY2UgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWluLXdpZHRoOiA2NXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMCAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/distribution/finance/cash-payment/cash-payment.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-payment/cash-payment.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CashPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPaymentComponent", function() { return CashPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/app-message-utils */ "./src/app/shared/utils/app-message-utils.ts");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/my-custom-dialog/my-custom-dialog.component */ "./src/app/shared/components/my-custom-dialog/my-custom-dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");










let CashPaymentComponent = class CashPaymentComponent {
    constructor(financeService, router, dialog) {
        this.financeService = financeService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getVoucherData();
    }
    getVoucherData() {
        this.financeService.getAllVoucherData(7).subscribe(data => {
            if (data) {
                data.forEach(x => {
                    x.finTranHeadDate = x.finTranHeadDate.split('T')[0];
                });
                this.sNo = data.length;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
                setTimeout(() => {
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }, 100);
            }
        });
    }
    deletePayemnt(data) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
        const dialogRef = this.dialog.open(src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MyCustomDialogComponent"], dialogConfig);
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe(result => {
            if (result === true) {
                this.delete(data);
            }
        });
    }
    delete(element) {
        this.financeService.doDeletCashList(element.finTranHeadId).subscribe(data => src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) ? this.refresh() :
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_4__["default"].warningMessage("Voucher Had already deleted") : '');
    }
    refresh() {
    }
    getByEdit(element) {
        this.financeService.sendListData(element);
        setTimeout(() => {
            this.router.navigate(['pharma/finance/cpaymentEntry']);
        }, 200);
    }
    clickCashPayment() {
        this.financeService.sendListData(null);
        setTimeout(() => {
            this.router.navigate(['pharma/finance/cpaymentEntry']);
        }, 200);
    }
};
CashPaymentComponent.ctorParameters = () => [
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_3__["FinanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], CashPaymentComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], CashPaymentComponent.prototype, "sort", void 0);
CashPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cash-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-payment/cash-payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cash-payment.component.scss */ "./src/app/distribution/finance/cash-payment/cash-payment.component.scss")).default]
    })
], CashPaymentComponent);



/***/ }),

/***/ "./src/app/distribution/finance/cash-receipt-list/cash-receipt-list.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-receipt-list/cash-receipt-list.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 20px;\n  margin-bottom: 0;\n  font-family: monospace !important;\n  font-weight: 700 !important;\n}\n\n.pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n\n.buttons {\n  width: 960px;\n  margin: 0 auto;\n}\n\n.action_btn {\n  width: 500px;\n  margin: 5px auto;\n}\n\n.finance-button {\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvY2FzaC1yZWNlaXB0LWxpc3QvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxmaW5hbmNlXFxjYXNoLXJlY2VpcHQtbGlzdFxcY2FzaC1yZWNlaXB0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2Nhc2gtcmVjZWlwdC1saXN0L2Nhc2gtcmVjZWlwdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURDTTtFQUNKLFlBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREVFO0VBQ0UsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2Nhc2gtcmVjZWlwdC1saXN0L2Nhc2gtcmVjZWlwdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBoYXJtYWN5SGVhZGluZyB7XG4gIGNvbG9yOiAjMmY4YmJkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG4ucGhhcm1hLWZpbmFuY2UgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG1pbi13aWR0aDogNjVweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5idXR0b25zIHtcbiAgd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bzt9XG4gIFxuICAgICAgLmFjdGlvbl9idG4ge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogNXB4IGF1dG87fVxuXG5cblxuICAuZmluYW5jZS1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59IiwiLnBoYXJtYWN5SGVhZGluZyB7XG4gIGNvbG9yOiAjMmY4YmJkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG4ucGhhcm1hLWZpbmFuY2UgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWluLXdpZHRoOiA2NXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4uYnV0dG9ucyB7XG4gIHdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hY3Rpb25fYnRuIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4uZmluYW5jZS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/distribution/finance/cash-receipt-list/cash-receipt-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-receipt-list/cash-receipt-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CashReceiptListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashReceiptListComponent", function() { return CashReceiptListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/app-message-utils */ "./src/app/shared/utils/app-message-utils.ts");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/my-custom-dialog/my-custom-dialog.component */ "./src/app/shared/components/my-custom-dialog/my-custom-dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










// const ELEMENT_DATA: PeriodicElement[] = [
//   {shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
//   {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
//  {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
//  {shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
//  {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
// {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
// {shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
// {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
// {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
// ];
let CashReceiptListComponent = class CashReceiptListComponent {
    constructor(financeService, router, dialog) {
        this.financeService = financeService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getVoucherData();
    }
    getVoucherData() {
        this.financeService.getAllVoucherData(5).subscribe(data => {
            if (data) {
                data.forEach(x => {
                    x.finTranHeadDate = x.finTranHeadDate.split('T')[0];
                });
                this.sNo = data.length;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
                setTimeout(() => {
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }, 100);
            }
        });
    }
    deleteId(data) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
        const dialogRef = this.dialog.open(src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MyCustomDialogComponent"], dialogConfig);
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._onDestroy))
            .subscribe(result => {
            if (result === true) {
                this.delete(data);
            }
        });
    }
    delete(element) {
        this.financeService.doDeletCashList(element.finTranHeadId).subscribe(data => src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) ? this.refresh() :
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_4__["default"].warningMessage("Cash Reciept Had already deleted") : '');
        this.getVoucherData();
    }
    refresh() {
    }
    getByEdit(element) {
        this.financeService.sendListData(element);
        setTimeout(() => {
            this.router.navigate(['pharma/finance/cashReceiptVoucherEntry']);
        }, 200);
    }
    clickCashList() {
        this.financeService.sendListData(null);
        setTimeout(() => {
            this.router.navigate(['pharma/finance/cashReceiptVoucherEntry']);
        }, 200);
    }
};
CashReceiptListComponent.ctorParameters = () => [
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_3__["FinanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], CashReceiptListComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], CashReceiptListComponent.prototype, "sort", void 0);
CashReceiptListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cash-receipt-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-receipt-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-receipt-list/cash-receipt-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cash-receipt-list.component.scss */ "./src/app/distribution/finance/cash-receipt-list/cash-receipt-list.component.scss")).default]
    })
], CashReceiptListComponent);



/***/ }),

/***/ "./src/app/distribution/finance/cash-receipt-register/cash-receipt-register.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-receipt-register/cash-receipt-register.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 20px;\n  margin-bottom: 0;\n  font-family: monospace !important;\n  font-weight: 700 !important;\n}\n\n.pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n\n.CashReceiptControls {\n  height: 300px;\n  width: 100%;\n}\n\n.CashReceiptCard {\n  width: 100%;\n  /* Take full width of the container */\n  max-width: 900px;\n  /* Limit the maximum width for better readability */\n  margin: 15px auto;\n  /* Center the card and add space above */\n  padding: 16px;\n  /* Add internal spacing */\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  /* Optional: Add a shadow for a modern look */\n  border-radius: 8px;\n  /* Optional: Rounded corners */\n  background-color: #ffffff;\n  /* Optional: Card background */\n}\n\n.innerCard {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  max-width: 20%;\n}\n\n.finance-button {\n  min-width: 90px;\n  /* Ensure buttons have consistent width */\n  margin: 0;\n  /* Remove default margins if any */\n}\n\n::ng-deep .user-card .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0px !important;\n}\n\n::ng-deep .user-card .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .user-card .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .user-card .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n::ng-deep .user-card .mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 2em;\n  top: calc(100% - 1.79167em);\n}\n\n::ng-deep .user-card .mat-form-field {\n  width: 100%;\n}\n\n.full-height {\n  height: 100%;\n  /* Ensure full height for the expansion panel */\n}\n\n.table-container {\n  position: relative;\n}\n\n.action-icons {\n  display: flex;\n  justify-content: flex-end;\n  /* Align icons to the right */\n  gap: 16px;\n  /* Space between buttons */\n  margin-bottom: 8px;\n  /* Space below the buttons */\n}\n\n.icon-img {\n  width: 37px;\n  height: 38px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  margin: 3px;\n}\n\n.radio-group ::ng-deep .mat-radio-label {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvY2FzaC1yZWNlaXB0LXJlZ2lzdGVyL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcZmluYW5jZVxcY2FzaC1yZWNlaXB0LXJlZ2lzdGVyXFxjYXNoLXJlY2VpcHQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2Nhc2gtcmVjZWlwdC1yZWdpc3Rlci9jYXNoLXJlY2VpcHQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2Nhc2gtcmVjZWlwdC1yZWdpc3Rlci9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXG1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRFNBO0VBQ0UsV0FBQTtFQUFhLHFDQUFBO0VBQ2IsZ0JBQUE7RUFBa0IsbURBQUE7RUFDbEIsaUJBQUE7RUFBbUIsd0NBQUE7RUFDbkIsYUFBQTtFQUFlLHlCQUFBO0VBQ2YsMENBQUE7RUFBNEMsNkNBQUE7RUFDNUMsa0JBQUE7RUFBb0IsOEJBQUE7RUFDcEIseUJBQUE7RUFBMkIsOEJBQUE7QUNDN0I7O0FEU0E7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0VBQWlCLHlDQUFBO0VBQ2pCLFNBQUE7RUFBVyxrQ0FBQTtBQ0piOztBQ3ZDSTtFQUNFLDZCQUFBO0FEMENOOztBQ3ZDSTtFQUNFLFdBQUE7QUR5Q047O0FDdENJO0VBQ0UseUNBQUE7QUR3Q047O0FDckNJO0VBQ0UsaUJBQUE7QUR1Q047O0FDcENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBRHNDTjs7QURQRTtFQUNFLFdBQUE7QUNTSjs7QUROQTtFQUNFLFlBQUE7RUFBYywrQ0FBQTtBQ1VoQjs7QURQQTtFQUNFLGtCQUFBO0FDVUY7O0FEUEE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFBMkIsNkJBQUE7RUFDM0IsU0FBQTtFQUFXLDBCQUFBO0VBQ1gsa0JBQUE7RUFBb0IsNEJBQUE7QUNhdEI7O0FEVkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDYUY7O0FEVEE7RUFDSSwyQkFBQTtBQ1lKIiwiZmlsZSI6InNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvY2FzaC1yZWNlaXB0LXJlZ2lzdGVyL2Nhc2gtcmVjZWlwdC1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvbWl4aW4uc2Nzcyc7XG5cbi5waGFybWFjeUhlYWRpbmcge1xuICBjb2xvcjogIzJmOGJiZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLnBoYXJtYS1maW5hbmNlIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1pbi13aWR0aDogNjVweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cblxuLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gLkNhc2hSZWNlaXB0Q2FyZCB7XG4vLyAgIHdpZHRoOiAzMDBweDtcbi8vICAgaGVpZ2h0OiAyNTVweDtcbi8vICAgbWFyZ2luLXRvcDogMTVweDtcbi8vIH1cbi5DYXNoUmVjZWlwdENhcmQge1xuICB3aWR0aDogMTAwJTsgLyogVGFrZSBmdWxsIHdpZHRoIG9mIHRoZSBjb250YWluZXIgKi9cbiAgbWF4LXdpZHRoOiA5MDBweDsgLyogTGltaXQgdGhlIG1heGltdW0gd2lkdGggZm9yIGJldHRlciByZWFkYWJpbGl0eSAqL1xuICBtYXJnaW46IDE1cHggYXV0bzsgLyogQ2VudGVyIHRoZSBjYXJkIGFuZCBhZGQgc3BhY2UgYWJvdmUgKi9cbiAgcGFkZGluZzogMTZweDsgLyogQWRkIGludGVybmFsIHNwYWNpbmcgKi9cbiAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBPcHRpb25hbDogQWRkIGEgc2hhZG93IGZvciBhIG1vZGVybiBsb29rICovXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgLyogT3B0aW9uYWw6IFJvdW5kZWQgY29ybmVycyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBPcHRpb25hbDogQ2FyZCBiYWNrZ3JvdW5kICovXG59XG5cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4vLyAgIC5DYXNoUmVjZWlwdENhcmR7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuLy8gICB9XG4vLyB9XG5cblxuLmlubmVyQ2FyZCB7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDIwJTtcbn1cblxuLmZpbmFuY2UtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA5MHB4OyAvKiBFbnN1cmUgYnV0dG9ucyBoYXZlIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgbWFyZ2luOiAwOyAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5zIGlmIGFueSAqL1xufVxuXG5cbjo6bmctZGVlcCAudXNlci1jYXJkIHtcbiAgQGluY2x1ZGUgdXNlci1mb3JtO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mdWxsLWhlaWdodCB7XG4gIGhlaWdodDogMTAwJTsgLyogRW5zdXJlIGZ1bGwgaGVpZ2h0IGZvciB0aGUgZXhwYW5zaW9uIHBhbmVsICovXG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY3Rpb24taWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBBbGlnbiBpY29ucyB0byB0aGUgcmlnaHQgKi9cbiAgZ2FwOiAxNnB4OyAvKiBTcGFjZSBiZXR3ZWVuIGJ1dHRvbnMgKi9cbiAgbWFyZ2luLWJvdHRvbTogOHB4OyAvKiBTcGFjZSBiZWxvdyB0aGUgYnV0dG9ucyAqL1xufVxuXG4uaWNvbi1pbWcge1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW46IDNweDtcbn1cblxuLnJhZGlvLWdyb3Vwe1xuOjpuZy1kZWVwICAubWF0LXJhZGlvLWxhYmVse1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxufSIsIi5waGFybWFjeUhlYWRpbmcge1xuICBjb2xvcjogIzJmOGJiZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLnBoYXJtYS1maW5hbmNlIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1pbi13aWR0aDogNjVweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cblxuLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkNhc2hSZWNlaXB0Q2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBUYWtlIGZ1bGwgd2lkdGggb2YgdGhlIGNvbnRhaW5lciAqL1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICAvKiBMaW1pdCB0aGUgbWF4aW11bSB3aWR0aCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICAvKiBDZW50ZXIgdGhlIGNhcmQgYW5kIGFkZCBzcGFjZSBhYm92ZSAqL1xuICBwYWRkaW5nOiAxNnB4O1xuICAvKiBBZGQgaW50ZXJuYWwgc3BhY2luZyAqL1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIE9wdGlvbmFsOiBBZGQgYSBzaGFkb3cgZm9yIGEgbW9kZXJuIGxvb2sgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBPcHRpb25hbDogUm91bmRlZCBjb3JuZXJzICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC8qIE9wdGlvbmFsOiBDYXJkIGJhY2tncm91bmQgKi9cbn1cblxuLmlubmVyQ2FyZCB7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDIwJTtcbn1cblxuLmZpbmFuY2UtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICAvKiBFbnN1cmUgYnV0dG9ucyBoYXZlIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5zIGlmIGFueSAqL1xufVxuXG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNGVtIDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC51c2VyLWNhcmQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICB0b3A6IC0xLjVlbTtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSgwLjc1KTtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICBmb250LXNpemU6IDc1JTtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjdlbSk7XG59XG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBFbnN1cmUgZnVsbCBoZWlnaHQgZm9yIHRoZSBleHBhbnNpb24gcGFuZWwgKi9cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFjdGlvbi1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIC8qIEFsaWduIGljb25zIHRvIHRoZSByaWdodCAqL1xuICBnYXA6IDE2cHg7XG4gIC8qIFNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC8qIFNwYWNlIGJlbG93IHRoZSBidXR0b25zICovXG59XG5cbi5pY29uLWltZyB7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbjogM3B4O1xufVxuXG4ucmFkaW8tZ3JvdXAgOjpuZy1kZWVwIC5tYXQtcmFkaW8tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59IiwiQG1peGluIHVzZXItZm9ybSB7XG5cbiAgLy8gLm1hdC1mb3JtLWZpZWxkIHtcbiAgLy8gICBmb250LXNpemU6IDE0cHg7XG4gIC8vICAgaGVpZ2h0OiA0OHB4O1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyB9XG5cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXg+Lm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6IDAuNGVtIDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgICAgdG9wOiAtMS41ZW07XG4gICAgfVxuICBcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XG4gICAgfVxuICBcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICBmb250LXNpemU6IDc1JTtcbiAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgIHRvcDogY2FsYygxMDAlIC0gMS43OTE2N2VtKTtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICBAbWl4aW4gbWF0LXRhYiB7XG4gICAgLm1hdC10YWItbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogI2ViZWRlZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDglIDglIDAlIDAlO1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBwYWRkaW5nOiAwIDExcHg7XG4gICAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgIH1cbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "./src/app/distribution/finance/cash-receipt-register/cash-receipt-register.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-receipt-register/cash-receipt-register.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CashReceiptRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashReceiptRegisterComponent", function() { return CashReceiptRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let CashReceiptRegisterComponent = class CashReceiptRegisterComponent {
    constructor(formBuilder, datePipe, financeService, route) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.financeService = financeService;
        this.route = route;
        this.openPanel = false;
        this.step = 0;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.displayedColumns = ['voucherNo', 'voucherDate', 'AccountName', 'Description', 'Amount'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    setStep(index) {
        this.step = index;
    }
    prevStep() {
        this.step = 0;
        this.openPanel = false;
    }
    ngOnInit() {
        this.cashReceiptRegisterFormGroup = this.buildCashReceiptRegisterFormGroup();
        this.dataSource.sort = this.sort;
    }
    ngAfterViewInit() {
        // Assign paginator after view initialization
        this.dataSource.paginator = this.paginator;
    }
    buildCashReceiptRegisterFormGroup() {
        return this.formBuilder.group({
            fromDate: [''],
            toDate: [''],
            wantVoucherTotal: ['no'] // Default value
        });
    }
    generate(data) {
        console.log(data);
        let voucherTotal = "2";
        let frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
        let toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
        if (data.wantVoucherTotal == "yes") {
            voucherTotal = "1";
        }
        else {
            voucherTotal = "2";
        }
        this.step = 1;
        this.openPanel = true;
        let reBody = {
            tranTypeHeadId: "5",
            fromDate: frmDte,
            toDate: toDte,
            sumTotalYN: voucherTotal
        };
        this.financeService.generateCashRecptReg(reBody).subscribe(res => {
            if (res) {
                console.log(res);
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.resultObject);
                setTimeout(() => {
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }, 100);
            }
        });
    }
    resetForm() {
        this.cashReceiptRegisterFormGroup.reset();
    }
    exportToExcel(data) {
        let voucherTotal = "2";
        let frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
        let toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
        if (data.wantVoucherTotal === "yes") {
            voucherTotal = "1";
        }
        let reBody = {
            tranTypeHeadId: "5",
            fromDate: frmDte,
            toDate: toDte,
            sumTotalYN: voucherTotal
        };
        this.financeService.generateExcel(reBody).subscribe((res) => {
            const base64String = res.resultObject;
            const fileName = 'CashReceiptRegister.xlsx'; // Desired file name
            // Decode Base64 to binary data
            const binaryData = atob(base64String);
            const byteNumbers = new Array(binaryData.length);
            for (let i = 0; i < binaryData.length; i++) {
                byteNumbers[i] = binaryData.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            // Create a Blob from the binary data
            const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            // Create a URL for the Blob
            const url = window.URL.createObjectURL(blob);
            // Create an anchor element and trigger the download
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = fileName;
            anchor.click();
            // Clean up the URL
            window.URL.revokeObjectURL(url);
        }, (err) => {
            console.error('Error generating Excel file:', err);
        });
    }
    downloadFile(filePath) {
        const link = document.createElement('a');
        link.href = filePath.resultObject; // The path returned by your API
        link.download = filePath.resultObject.split('/').pop() || 'download.xlsx'; // Extract filename or use default
        link.target = '_blank';
        // Append link to the body
        document.body.appendChild(link);
        // Trigger the click
        link.click();
        // Remove the link from the DOM
        document.body.removeChild(link);
    }
    exportToPdf() {
        // Logic for exporting to PDF
        console.log('Export to PDF clicked');
    }
    goback() {
        if (this.route.url.includes('from=cashReceiptRegister')) {
            this.route.navigate(['pharma/finance/FinanceRegister']);
        }
        else {
            this.route.navigate(['pharma/finance/cashReceipts']);
        }
    }
};
CashReceiptRegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_5__["FinanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], CashReceiptRegisterComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], CashReceiptRegisterComponent.prototype, "sort", void 0);
CashReceiptRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cash-receipt-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-receipt-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-receipt-register/cash-receipt-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cash-receipt-register.component.scss */ "./src/app/distribution/finance/cash-receipt-register/cash-receipt-register.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../finance.component.scss */ "./src/app/distribution/finance/finance.component.scss")).default]
    })
], CashReceiptRegisterComponent);



/***/ }),

/***/ "./src/app/distribution/finance/cash-receipt-voucher-entry/cash-receipt-voucher-entry.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-receipt-voucher-entry/cash-receipt-voucher-entry.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 20px;\n  margin-bottom: 0;\n  font-family: monospace !important;\n  font-weight: 700 !important;\n}\n\n.pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n\n.CashReceiptControls {\n  height: 300px;\n  width: 100%;\n}\n\n.CashReceiptCard {\n  width: 300px;\n  height: 255px;\n}\n\n.mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 24px;\n  border-radius: 2px;\n}\n\nmat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.buttons {\n  width: 960px;\n  margin: 0 auto;\n}\n\n.action_btn {\n  width: 500px;\n  margin: 5px auto;\n}\n\n.finance-button {\n  border-radius: 30px;\n}\n\n@media screen and (max-width: 600px) {\n  .w_224 {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvY2FzaC1yZWNlaXB0LXZvdWNoZXItZW50cnkvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxmaW5hbmNlXFxjYXNoLXJlY2VpcHQtdm91Y2hlci1lbnRyeVxcY2FzaC1yZWNlaXB0LXZvdWNoZXItZW50cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2Nhc2gtcmVjZWlwdC12b3VjaGVyLWVudHJ5L2Nhc2gtcmVjZWlwdC12b3VjaGVyLWVudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0U7RUFDRSx5REFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFFO0VBQ0UsK0dBQUE7QUNHSjs7QURBRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDR0o7O0FERFE7RUFDSixZQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURBSTtFQUNFLG1CQUFBO0FDR047O0FEQUU7RUFDRTtJQUNFLFdBQUE7RUNHSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvY2FzaC1yZWNlaXB0LXZvdWNoZXItZW50cnkvY2FzaC1yZWNlaXB0LXZvdWNoZXItZW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhhcm1hY3lIZWFkaW5nIHtcbiAgICBjb2xvcjogIzJmOGJiZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBoYXJtYS1maW5hbmNlIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtaW4td2lkdGg6IDY1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICB9XG4gIFxuICAuQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLkNhc2hSZWNlaXB0Q2FyZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjU1cHg7XG4gIH1cbiAgLm1hdC1jYXJkIHtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfVxuICBtYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSwgMCAycHggMnB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggNXB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcbiAgfVxuICBcbiAgLmJ1dHRvbnMge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBtYXJnaW46IDAgYXV0bzt9XG4gICAgXG4gICAgICAgIC5hY3Rpb25fYnRuIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bzt9XG5cblxuXG4gICAgLmZpbmFuY2UtYnV0dG9uIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gICAgLndfMjI0e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9IiwiLnBoYXJtYWN5SGVhZGluZyB7XG4gIGNvbG9yOiAjMmY4YmJkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG4ucGhhcm1hLWZpbmFuY2UgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWluLXdpZHRoOiA2NXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4uQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uQ2FzaFJlY2VpcHRDYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDI1NXB4O1xufVxuXG4ubWF0LWNhcmQge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5idXR0b25zIHtcbiAgd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFjdGlvbl9idG4ge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5maW5hbmNlLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC53XzIyNCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/distribution/finance/cash-receipt-voucher-entry/cash-receipt-voucher-entry.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/distribution/finance/cash-receipt-voucher-entry/cash-receipt-voucher-entry.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CashReceiptVoucherEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashReceiptVoucherEntryComponent", function() { return CashReceiptVoucherEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/app-message-utils */ "./src/app/shared/utils/app-message-utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/my-custom-dialog/my-custom-dialog.component */ "./src/app/shared/components/my-custom-dialog/my-custom-dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/http-services/out-ward/out-ward-http.service */ "./src/app/shared/http-services/out-ward/out-ward-http.service.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");














let CashReceiptVoucherEntryComponent = class CashReceiptVoucherEntryComponent {
    constructor(formBuilder, financeService, datePipe, router, dialog, service, todayDate) {
        this.formBuilder = formBuilder;
        this.financeService = financeService;
        this.datePipe = datePipe;
        this.router = router;
        this.dialog = dialog;
        this.service = service;
        this.todayDate = todayDate;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'description', 'rcNo', 'Amount', 'Discount', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.accName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.customAccountAutoCompleteDef = {
            label: 'Head of Account',
            isRequired: true,
            dataSourceFn: (name) => this.financeService.getCustomAccountsByName(name),
            minCount: 2,
            keyString: 'accName'
        };
        this.customAccountsOptsTable = {
            panelWidth: 700,
            columns: [
                { name: 'Head of Account', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 36, fxFlex1: 36, isKeyColumn: true },
                { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 19, fxFlex1: 19 },
                { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 14, fxFlex1: 14 },
                { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 20, fxFlex1: 20 },
                { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 10, fxFlex1: 10 }
            ]
        };
        this.finTranHeadId = 0;
        this.sNo = 0;
        this.fintranId = 0;
        this.headNo = "";
        this.btnSave = 'Save';
        this.instrumentTypes = [];
        this.instruType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.instruNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.showTable = false;
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"]();
    }
    ngOnInit() {
        this.cashReceiptVoucherEntryFormGroup = this.buildcashReceiptVoucherEntry();
        this.accName.valueChanges.subscribe(res => {
            if (typeof res === 'object') {
                this.supplierData = res;
                this.bindAccountDetails(res);
            }
        });
        // var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        var dt = this.todayDate.localDate();
        dt = this.datePipe.transform(dt, 'yyyy-MM-dd');
        this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));
        if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.firmPreferences.finEdate;
        }
        setTimeout(() => {
            this.cashReceiptVoucherEntryFormGroup.controls.finDate.setValue(dt);
            this.cashReceiptVoucherEntryFormGroup.controls.finContraId.disable();
            this.cashReceiptVoucherEntryFormGroup.controls.accShName.disable();
            this.cashReceiptVoucherEntryFormGroup.controls.cityName.disable();
        }, 200);
        this.showClear = true;
        this.instrumentTypes = [{ id: 1, type: 'CHECK' }, { id: 2, type: 'NEFT' }, { id: 3, type: 'ONLINE (UPI/NET BANKING/ANY OTHER ONLINE PAYMENT)' }];
        setTimeout(() => {
            this.financeService.getListData$.subscribe(rees => {
                if (rees != null) {
                    this.newGet(rees.finTranHeadId);
                    this.finTranHeadId = rees.finTranHeadId;
                    this.heaidngNu = rees.finTranHeadNo;
                }
                else {
                    this.showTable = false;
                }
                // this.listshow = true;
            });
        }, 300);
        // this.subscription.add(this.service.getTabData$.subscribe(res=>{
        //   if(res != null && res){
        //     this.bindAccountDetails(res[0]);
        //     this.accName.setValue(res[0].accName);
        //   }
        // }));
    }
    buildcashReceiptVoucherEntry() {
        return this.formBuilder.group({
            finDate: [''],
            finContraId: ['Cash On Hand'],
            customAccId: [''],
            accShName: [''],
            cityName: [''],
            finTranDesc: [''],
            finTranVno: [''],
            Amount: [''],
            finDisc: [''],
        });
    }
    bindAccountDetails(data) {
        console.log(data);
        this.cashReceiptVoucherEntryFormGroup.patchValue({
            accShName: data.accShName,
            cityName: data.cityName,
            accMobile: data.accMobile,
            accGstIn: data.accGstIn
        });
    }
    addOrEdit(element) {
        this.financeService.editCashData(element.finTranId).subscribe(res => {
            this.commonMethod(res);
        });
    }
    deleteVocuherEntry(data) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
        const dialogRef = this.dialog.open(src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MyCustomDialogComponent"], dialogConfig);
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
            .subscribe(result => {
            if (result === true) {
                this.delete(data);
            }
        });
    }
    delete(element) {
        this.financeService.doDeleteCashVocuher(element.finTranId).subscribe(data => src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus200(data) ? this.refresh() :
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus404(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__["default"].warningMessage("Voucher Had already deleted") : '');
        setTimeout(() => {
            this.newGet(this.finTranHeadId);
        }, 200);
        this.reset();
    }
    updateVocuehr() {
        const val = this.cashReceiptVoucherEntryFormGroup.controls;
        const obj = {
            finTranId: this.fintranId,
            finTranSno: this.sNo,
            tranTypeHeadId: 5,
            finTranHeadDate: this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss'),
            finTranHeadId: this.finTranHeadId,
            finTranHeadNo: this.headNo,
            finTranAccId: this.acId,
            finTranContraId: this.firmPreferences.cashAccId,
            finTranDesc: val.finTranDesc.value,
            finTranAmount: val.Amount.value,
            finTranVno: val.finTranVno.value,
            firmYearId: this.frimYearId,
            cityName: val.cityName.value,
            accShName: val.accShName.value,
            accName: this.accName.value.accName,
            contraAccName: val.finContraId.value,
            accCityId: 0, createdBy: 0,
            createdOn: this.createdOn,
            modifiedBy: 0,
            modifiedOn: this.modifiedOn,
        };
        this.financeService.updateCashVData(obj, 'Cash Receipt Voucher').subscribe(data => {
            // this.finTranHeadId = data.resultObject;
            // if (this.listshow == true) {
            //   this.router.navigate(['pharma/finance/cashReceipts']);
            // }
            this.newGet(this.finTranHeadId);
            this.reset();
        });
    }
    refresh() {
    }
    reset() {
        this.btnSave = 'Save';
        this.showClear = true;
        this.accName.setValue('');
        this.cashReceiptVoucherEntryFormGroup.reset();
        this.cashReceiptVoucherEntryFormGroup.controls.finContraId.setValue("Cash On Hand");
        var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        setTimeout(() => {
            this.cashReceiptVoucherEntryFormGroup.controls.finDate.setValue(dt);
        }, 200);
    }
    commonMethod(res) {
        this.btnSave = 'Update';
        this.showClear = false;
        this.cashReceiptVoucherEntryFormGroup.controls.Amount.setValue(res.finTranAmount);
        this.cashReceiptVoucherEntryFormGroup.controls.finContraId.setValue("Cash On Hand");
        this.cashReceiptVoucherEntryFormGroup.controls.finDate.setValue(res.finTranHeadDate);
        this.cashReceiptVoucherEntryFormGroup.controls.finTranDesc.setValue(res.finTranDesc);
        this.cashReceiptVoucherEntryFormGroup.controls.finTranVno.setValue(res.finTranVno);
        this.accName.setValue(res.accName);
        this.acId = res.finTranAccId;
        this.fintranId = res.finTranId;
        this.sNo = res.finTranSno;
        this.finTranHeadId = res.finTranHeadId;
        this.frimYearId = res.firmYearId;
        this.headNo = res.finTranHeadNo;
        this.createdOn = res.createdOn;
        this.modifiedOn = res.modifiedOn;
    }
    saveCashRcptVchr() {
        if (this.btnSave == 'Update') {
            this.updateVocuehr();
        }
        else {
            const val = this.cashReceiptVoucherEntryFormGroup.controls;
            const obj = Object.assign({});
            obj.finTranSno = this.sNo + 1;
            obj.finTranHeadDate = this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss');
            obj.finTranHeadId = this.finTranHeadId;
            obj.finTranHeadNo = this.headNo;
            obj.finTranAccId = this.accName.value.accId;
            obj.finTranContraId = this.firmPreferences.cashAccId;
            obj.finTranDesc = val.finTranDesc.value;
            obj.finTranAmount = Number(val.Amount.value);
            obj.firmYearId = 0;
            obj.isDeleted = 0;
            obj.cityName = val.cityName.value;
            obj.accShName = val.accShName.value;
            obj.accName = this.accName.value.accName;
            obj.contraAccName = val.finContraId.value;
            obj.accCityId = this.accName.value.accCityId;
            obj.createdBy = 0;
            obj.createdOn = new Date().toISOString();
            obj.modifiedBy = 0,
                obj.modifiedOn = new Date().toISOString();
            obj.accId = this.accName.value.accId;
            obj.accName1 = "";
            obj.finTranVno = Number(val.finTranVno.value);
            obj.finTranId = 0;
            obj.tranTypeHeadId = 5;
            this.financeService.saveCashVoucherRecpt(obj, 'Cash Receipt Voucher').subscribe(data => {
                this.finTranHeadId = data.resultObject;
                this.newGet(data.resultObject);
                this.reset();
            });
        }
    }
    newGet(finTranHeadId) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.financeService.editCashList(finTranHeadId).subscribe(res => {
            this.headNo = res[0].finTranHeadNo;
            this.heaidngNu = res[0].finTranHeadNo;
            this.sNo = res.length;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res);
            this.showTable = true;
        });
    }
    validateFloatKeyPress(el) {
        var v = parseFloat(el.value);
        // el.value = (isNaN(v)) ? '' : v.toFixed(2);
        el.value = (Math.round(v * 100) / 100).toFixed(2);
    }
    ngOnDestroy() {
        // this.service.sendTabData('');
        this.subscription.unsubscribe();
    }
};
CashReceiptVoucherEntryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_4__["FinanceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_12__["OutWardHttpService"] },
    { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_13__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], CashReceiptVoucherEntryComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('finTranDate', { static: false })
], CashReceiptVoucherEntryComponent.prototype, "date", void 0);
CashReceiptVoucherEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cash-receipt-voucher-entry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-receipt-voucher-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/cash-receipt-voucher-entry/cash-receipt-voucher-entry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cash-receipt-voucher-entry.component.scss */ "./src/app/distribution/finance/cash-receipt-voucher-entry/cash-receipt-voucher-entry.component.scss")).default]
    })
], CashReceiptVoucherEntryComponent);



/***/ }),

/***/ "./src/app/distribution/finance/finance-register/finance-register.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/distribution/finance/finance-register/finance-register.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2ZpbmFuY2UtcmVnaXN0ZXIvZmluYW5jZS1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/distribution/finance/finance-register/finance-register.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/distribution/finance/finance-register/finance-register.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FinanceRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceRegisterComponent", function() { return FinanceRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FinanceRegisterComponent = class FinanceRegisterComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.authDetails = JSON.parse(localStorage.getItem("menuItems"));
        this.authDetails.filter(x => {
            if (x.menuName == 'Finance') {
                this.menuArray = x.menus;
            }
        });
        // this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
        // this.menuArray = this.authDetails[5].menus;
        // console.log(this.menuArray);
    }
    trans(val) {
        var r = val.split("ebusiness");
        r = r[1];
        console.log(r);
        if (r == "/pharma/finance/cashReceipts") {
            this.route.navigate(['/pharma/finance/cashReceiptRegister'], { queryParams: { from: 'cashReceiptRegister' } });
        }
        if (r == "/pharma/finance/bankReceipts") {
            this.route.navigate(['/pharma/finance/bankreceiptRegister'], { queryParams: { from: 'bankreceiptRegister' } });
        }
        if (r == "/pharma/finance/cashPayments") {
            this.route.navigate(['/pharma/finance/cpRegister'], { queryParams: { from: 'cpRegister' } });
        }
        if (r == "/pharma/finance/bankPayments") {
            this.route.navigate(['/pharma/finance/bpRegister'], { queryParams: { from: 'bpRegister' } });
        }
        if (r == "/pharma/finance/journalVouchers") {
            this.route.navigate(['/pharma/finance/jvRegister'], { queryParams: { from: 'jvRegister' } });
        }
    }
    ngOnDestroy() {
    }
};
FinanceRegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FinanceRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finance-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finance-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/finance-register/finance-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finance-register.component.scss */ "./src/app/distribution/finance/finance-register/finance-register.component.scss")).default]
    })
], FinanceRegisterComponent);



/***/ }),

/***/ "./src/app/distribution/finance/finance-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/distribution/finance/finance-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: FinanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceRoutingModule", function() { return FinanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _area_wise_collections_area_wise_collections_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./area-wise-collections/area-wise-collections.component */ "./src/app/distribution/finance/area-wise-collections/area-wise-collections.component.ts");
/* harmony import */ var _bank_payment_bank_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bank-payment/bank-payment.component */ "./src/app/distribution/finance/bank-payment/bank-payment.component.ts");
/* harmony import */ var _bank_receipt_bank_receipt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bank-receipt/bank-receipt.component */ "./src/app/distribution/finance/bank-receipt/bank-receipt.component.ts");
/* harmony import */ var _cash_payment_cash_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cash-payment/cash-payment.component */ "./src/app/distribution/finance/cash-payment/cash-payment.component.ts");
/* harmony import */ var _cash_receipt_register_cash_receipt_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cash-receipt-register/cash-receipt-register.component */ "./src/app/distribution/finance/cash-receipt-register/cash-receipt-register.component.ts");
/* harmony import */ var _cash_receipt_voucher_entry_cash_receipt_voucher_entry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cash-receipt-voucher-entry/cash-receipt-voucher-entry.component */ "./src/app/distribution/finance/cash-receipt-voucher-entry/cash-receipt-voucher-entry.component.ts");
/* harmony import */ var _cash_receipt_list_cash_receipt_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cash-receipt-list/cash-receipt-list.component */ "./src/app/distribution/finance/cash-receipt-list/cash-receipt-list.component.ts");
/* harmony import */ var _finance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finance.component */ "./src/app/distribution/finance/finance.component.ts");
/* harmony import */ var _journal_voucher_journal_voucher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./journal-voucher/journal-voucher.component */ "./src/app/distribution/finance/journal-voucher/journal-voucher.component.ts");
/* harmony import */ var _bank_receipt_register_bank_receipt_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bank-receipt-register/bank-receipt-register.component */ "./src/app/distribution/finance/bank-receipt-register/bank-receipt-register.component.ts");
/* harmony import */ var _bank_receipt_entry_bank_receipt_entry_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bank-receipt-entry/bank-receipt-entry.component */ "./src/app/distribution/finance/bank-receipt-entry/bank-receipt-entry.component.ts");
/* harmony import */ var _cash_payment_voucher_entry_cash_payment_voucher_entry_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cash-payment-voucher-entry/cash-payment-voucher-entry.component */ "./src/app/distribution/finance/cash-payment-voucher-entry/cash-payment-voucher-entry.component.ts");
/* harmony import */ var _cash_payment_register_cash_payment_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cash-payment-register/cash-payment-register.component */ "./src/app/distribution/finance/cash-payment-register/cash-payment-register.component.ts");
/* harmony import */ var _bank_payment_voucher_entry_bank_payment_voucher_entry_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bank-payment-voucher-entry/bank-payment-voucher-entry.component */ "./src/app/distribution/finance/bank-payment-voucher-entry/bank-payment-voucher-entry.component.ts");
/* harmony import */ var _bank_payment_register_bank_payment_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bank-payment-register/bank-payment-register.component */ "./src/app/distribution/finance/bank-payment-register/bank-payment-register.component.ts");
/* harmony import */ var _journal_voucher_entry_journal_voucher_entry_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./journal-voucher-entry/journal-voucher-entry.component */ "./src/app/distribution/finance/journal-voucher-entry/journal-voucher-entry.component.ts");
/* harmony import */ var _journal_voucher_receipt_register_journal_voucher_receipt_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./journal-voucher-receipt-register/journal-voucher-receipt-register.component */ "./src/app/distribution/finance/journal-voucher-receipt-register/journal-voucher-receipt-register.component.ts");
/* harmony import */ var _finance_transaction_finance_transaction_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./finance-transaction/finance-transaction.component */ "./src/app/distribution/finance/finance-transaction/finance-transaction.component.ts");
/* harmony import */ var _finance_register_finance_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./finance-register/finance-register.component */ "./src/app/distribution/finance/finance-register/finance-register.component.ts");






















const routes = [
    {
        path: '', component: _finance_component__WEBPACK_IMPORTED_MODULE_10__["FinanceComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'cashReceipts', component: _cash_receipt_list_cash_receipt_list_component__WEBPACK_IMPORTED_MODULE_9__["CashReceiptListComponent"] },
            { path: 'cashPayments', component: _cash_payment_cash_payment_component__WEBPACK_IMPORTED_MODULE_6__["CashPaymentComponent"] },
            { path: 'bankReceipts', component: _bank_receipt_bank_receipt_component__WEBPACK_IMPORTED_MODULE_5__["BankReceiptComponent"] },
            { path: 'bankPayments', component: _bank_payment_bank_payment_component__WEBPACK_IMPORTED_MODULE_4__["BankPaymentComponent"] },
            { path: 'journalVouchers', component: _journal_voucher_journal_voucher_component__WEBPACK_IMPORTED_MODULE_11__["JournalVoucherComponent"] },
            { path: 'cashReceiptRegister', component: _cash_receipt_register_cash_receipt_register_component__WEBPACK_IMPORTED_MODULE_7__["CashReceiptRegisterComponent"] },
            { path: 'areaWiseCollections', component: _area_wise_collections_area_wise_collections_component__WEBPACK_IMPORTED_MODULE_3__["AreaWiseCollectionsComponent"] },
            { path: 'cashReceiptVoucherEntry', component: _cash_receipt_voucher_entry_cash_receipt_voucher_entry_component__WEBPACK_IMPORTED_MODULE_8__["CashReceiptVoucherEntryComponent"] },
            { path: 'bankreceiptRegister', component: _bank_receipt_register_bank_receipt_register_component__WEBPACK_IMPORTED_MODULE_12__["BankReceiptRegisterComponent"] },
            { path: 'bankentry', component: _bank_receipt_entry_bank_receipt_entry_component__WEBPACK_IMPORTED_MODULE_13__["BankReceiptEntryComponent"] },
            { path: 'cpaymentEntry', component: _cash_payment_voucher_entry_cash_payment_voucher_entry_component__WEBPACK_IMPORTED_MODULE_14__["CashPaymentVoucherEntryComponent"] },
            { path: 'cpRegister', component: _cash_payment_register_cash_payment_register_component__WEBPACK_IMPORTED_MODULE_15__["CashPaymentRegisterComponent"] },
            { path: 'bPaymentEntry', component: _bank_payment_voucher_entry_bank_payment_voucher_entry_component__WEBPACK_IMPORTED_MODULE_16__["BankPaymentVoucherEntryComponent"] },
            { path: 'bpRegister', component: _bank_payment_register_bank_payment_register_component__WEBPACK_IMPORTED_MODULE_17__["BankPaymentRegisterComponent"] },
            { path: 'jvRcptEntry', component: _journal_voucher_entry_journal_voucher_entry_component__WEBPACK_IMPORTED_MODULE_18__["JournalVoucherEntryComponent"] },
            { path: 'jvRegister', component: _journal_voucher_receipt_register_journal_voucher_receipt_register_component__WEBPACK_IMPORTED_MODULE_19__["JournalVoucherReceiptRegisterComponent"] },
            { path: 'FinanceTransaction', component: _finance_transaction_finance_transaction_component__WEBPACK_IMPORTED_MODULE_20__["FinanceTransactionComponent"] },
            { path: 'FinanceRegister', component: _finance_register_finance_register_component__WEBPACK_IMPORTED_MODULE_21__["FinanceRegisterComponent"] }
        ]
    }
];
let FinanceRoutingModule = class FinanceRoutingModule {
};
FinanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FinanceRoutingModule);



/***/ }),

/***/ "./src/app/distribution/finance/finance-transaction/finance-transaction.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/distribution/finance/finance-transaction/finance-transaction.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2ZpbmFuY2UtdHJhbnNhY3Rpb24vZmluYW5jZS10cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/distribution/finance/finance-transaction/finance-transaction.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/distribution/finance/finance-transaction/finance-transaction.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FinanceTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceTransactionComponent", function() { return FinanceTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FinanceTransactionComponent = class FinanceTransactionComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        // this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
        // this.menuArray = this.authDetails[5].menus;
        // console.log(this.menuArray);
        this.authDetails = JSON.parse(localStorage.getItem("menuItems"));
        this.authDetails.filter(x => {
            if (x.menuName == 'Finance') {
                this.menuArray = x.menus;
            }
        });
    }
    finance(val) {
        var r = val.split("ebusiness");
        r = r[1];
        console.log(r);
        this.route.navigate([r]); // Pass the path as an array
    }
    ngOnDestroy() {
    }
};
FinanceTransactionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FinanceTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finance-transaction',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finance-transaction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/finance-transaction/finance-transaction.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finance-transaction.component.scss */ "./src/app/distribution/finance/finance-transaction/finance-transaction.component.scss")).default]
    })
], FinanceTransactionComponent);



/***/ }),

/***/ "./src/app/distribution/finance/finance.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/distribution/finance/finance.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".finance-button {\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxmaW5hbmNlXFxmaW5hbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS9maW5hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2ZpbmFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmluYW5jZS1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59IiwiLmZpbmFuY2UtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/distribution/finance/finance.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/distribution/finance/finance.component.ts ***!
  \***********************************************************/
/*! exports provided: FinanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceComponent", function() { return FinanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinanceComponent = class FinanceComponent {
    constructor() { }
    ngOnInit() {
    }
};
FinanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/finance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finance.component.scss */ "./src/app/distribution/finance/finance.component.scss")).default]
    })
], FinanceComponent);



/***/ }),

/***/ "./src/app/distribution/finance/finance.module.ts":
/*!********************************************************!*\
  !*** ./src/app/distribution/finance/finance.module.ts ***!
  \********************************************************/
/*! exports provided: FinanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceModule", function() { return FinanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _finance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finance-routing.module */ "./src/app/distribution/finance/finance-routing.module.ts");
/* harmony import */ var _cash_receipt_list_cash_receipt_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cash-receipt-list/cash-receipt-list.component */ "./src/app/distribution/finance/cash-receipt-list/cash-receipt-list.component.ts");
/* harmony import */ var _bank_receipt_bank_receipt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bank-receipt/bank-receipt.component */ "./src/app/distribution/finance/bank-receipt/bank-receipt.component.ts");
/* harmony import */ var _cash_payment_cash_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cash-payment/cash-payment.component */ "./src/app/distribution/finance/cash-payment/cash-payment.component.ts");
/* harmony import */ var _bank_payment_bank_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bank-payment/bank-payment.component */ "./src/app/distribution/finance/bank-payment/bank-payment.component.ts");
/* harmony import */ var _journal_voucher_journal_voucher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./journal-voucher/journal-voucher.component */ "./src/app/distribution/finance/journal-voucher/journal-voucher.component.ts");
/* harmony import */ var _finance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./finance.component */ "./src/app/distribution/finance/finance.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _area_wise_collections_area_wise_collections_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./area-wise-collections/area-wise-collections.component */ "./src/app/distribution/finance/area-wise-collections/area-wise-collections.component.ts");
/* harmony import */ var _cash_receipt_voucher_entry_cash_receipt_voucher_entry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cash-receipt-voucher-entry/cash-receipt-voucher-entry.component */ "./src/app/distribution/finance/cash-receipt-voucher-entry/cash-receipt-voucher-entry.component.ts");
/* harmony import */ var _cash_receipt_register_cash_receipt_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cash-receipt-register/cash-receipt-register.component */ "./src/app/distribution/finance/cash-receipt-register/cash-receipt-register.component.ts");
/* harmony import */ var _bank_receipt_entry_bank_receipt_entry_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bank-receipt-entry/bank-receipt-entry.component */ "./src/app/distribution/finance/bank-receipt-entry/bank-receipt-entry.component.ts");
/* harmony import */ var _bank_receipt_register_bank_receipt_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bank-receipt-register/bank-receipt-register.component */ "./src/app/distribution/finance/bank-receipt-register/bank-receipt-register.component.ts");
/* harmony import */ var _bank_payment_register_bank_payment_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bank-payment-register/bank-payment-register.component */ "./src/app/distribution/finance/bank-payment-register/bank-payment-register.component.ts");
/* harmony import */ var _bank_payment_voucher_entry_bank_payment_voucher_entry_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bank-payment-voucher-entry/bank-payment-voucher-entry.component */ "./src/app/distribution/finance/bank-payment-voucher-entry/bank-payment-voucher-entry.component.ts");
/* harmony import */ var _cash_payment_register_cash_payment_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cash-payment-register/cash-payment-register.component */ "./src/app/distribution/finance/cash-payment-register/cash-payment-register.component.ts");
/* harmony import */ var _cash_payment_voucher_entry_cash_payment_voucher_entry_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cash-payment-voucher-entry/cash-payment-voucher-entry.component */ "./src/app/distribution/finance/cash-payment-voucher-entry/cash-payment-voucher-entry.component.ts");
/* harmony import */ var _journal_voucher_entry_journal_voucher_entry_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./journal-voucher-entry/journal-voucher-entry.component */ "./src/app/distribution/finance/journal-voucher-entry/journal-voucher-entry.component.ts");
/* harmony import */ var _journal_voucher_receipt_register_journal_voucher_receipt_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./journal-voucher-receipt-register/journal-voucher-receipt-register.component */ "./src/app/distribution/finance/journal-voucher-receipt-register/journal-voucher-receipt-register.component.ts");
/* harmony import */ var _finance_transaction_finance_transaction_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./finance-transaction/finance-transaction.component */ "./src/app/distribution/finance/finance-transaction/finance-transaction.component.ts");
/* harmony import */ var _finance_register_finance_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./finance-register/finance-register.component */ "./src/app/distribution/finance/finance-register/finance-register.component.ts");
























let FinanceModule = class FinanceModule {
};
FinanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_finance_component__WEBPACK_IMPORTED_MODULE_9__["FinanceComponent"], _cash_receipt_list_cash_receipt_list_component__WEBPACK_IMPORTED_MODULE_4__["CashReceiptListComponent"], _bank_receipt_bank_receipt_component__WEBPACK_IMPORTED_MODULE_5__["BankReceiptComponent"], _cash_payment_cash_payment_component__WEBPACK_IMPORTED_MODULE_6__["CashPaymentComponent"], _bank_payment_bank_payment_component__WEBPACK_IMPORTED_MODULE_7__["BankPaymentComponent"], _journal_voucher_journal_voucher_component__WEBPACK_IMPORTED_MODULE_8__["JournalVoucherComponent"], _area_wise_collections_area_wise_collections_component__WEBPACK_IMPORTED_MODULE_11__["AreaWiseCollectionsComponent"], _cash_receipt_voucher_entry_cash_receipt_voucher_entry_component__WEBPACK_IMPORTED_MODULE_12__["CashReceiptVoucherEntryComponent"], _cash_receipt_register_cash_receipt_register_component__WEBPACK_IMPORTED_MODULE_13__["CashReceiptRegisterComponent"], _bank_receipt_entry_bank_receipt_entry_component__WEBPACK_IMPORTED_MODULE_14__["BankReceiptEntryComponent"], _bank_receipt_register_bank_receipt_register_component__WEBPACK_IMPORTED_MODULE_15__["BankReceiptRegisterComponent"], _bank_payment_register_bank_payment_register_component__WEBPACK_IMPORTED_MODULE_16__["BankPaymentRegisterComponent"], _bank_payment_voucher_entry_bank_payment_voucher_entry_component__WEBPACK_IMPORTED_MODULE_17__["BankPaymentVoucherEntryComponent"], _cash_payment_register_cash_payment_register_component__WEBPACK_IMPORTED_MODULE_18__["CashPaymentRegisterComponent"], _cash_payment_voucher_entry_cash_payment_voucher_entry_component__WEBPACK_IMPORTED_MODULE_19__["CashPaymentVoucherEntryComponent"], _journal_voucher_entry_journal_voucher_entry_component__WEBPACK_IMPORTED_MODULE_20__["JournalVoucherEntryComponent"], _journal_voucher_receipt_register_journal_voucher_receipt_register_component__WEBPACK_IMPORTED_MODULE_21__["JournalVoucherReceiptRegisterComponent"], _finance_transaction_finance_transaction_component__WEBPACK_IMPORTED_MODULE_22__["FinanceTransactionComponent"], _finance_register_finance_register_component__WEBPACK_IMPORTED_MODULE_23__["FinanceRegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _finance_routing_module__WEBPACK_IMPORTED_MODULE_3__["FinanceRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ]
    })
], FinanceModule);



/***/ }),

/***/ "./src/app/distribution/finance/finance.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/distribution/finance/finance.service.ts ***!
  \*********************************************************/
/*! exports provided: FinanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceService", function() { return FinanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_http_services_masters_masters_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/http-services/masters/masters-http.service */ "./src/app/shared/http-services/masters/masters-http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/app-message-utils */ "./src/app/shared/utils/app-message-utils.ts");
/* harmony import */ var src_app_shared_http_services_in_ward_in_ward_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/http-services/in-ward/in-ward-http.service */ "./src/app/shared/http-services/in-ward/in-ward-http.service.ts");








let FinanceService = class FinanceService {
    constructor(httpService, httpInward) {
        this.httpService = httpService;
        this.httpInward = httpInward;
        this.cashListData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.getListData$ = this.cashListData.asObservable();
    }
    getAllVoucherData(tranTypeHeadId) {
        return this.httpService.getCashVoucher(tranTypeHeadId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getPayload(data);
            }
            return null;
        }));
    }
    saveCashVoucherRecpt(data, text) {
        return this.httpService.saveCashVoucher(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].successNotification(text + " Added  Successfully.") :
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].errorNotification("Unable to Add");
            return data;
        }));
    }
    doDeleteCashVocuher(finTranId) {
        return this.httpService.deleteCashVoucher(finTranId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].successNotification("Cash Voucher has been Deleted Successfully.") :
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].errorNotification("Unable to Delete the voucher.");
            return data;
        }));
    }
    doDeletCashList(finTranHeadId) {
        return this.httpService.deletecashList(finTranHeadId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].successNotification("Cash Voucher has been Deleted Successfully.") :
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].errorNotification("Unable to Delete the voucher.");
            return data;
        }));
    }
    getCustomAccounts(payload) {
        return this.httpService.getAllCustomAccounts(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getPayload(data);
            }
            return null;
        }));
    }
    getCustomAccountsByName(name, tranType) {
        // tranType?:string
        // tranType
        return this.httpInward.getCustomAccountByName(name, tranType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getPayload(data);
            }
            return null;
        }));
    }
    editCashData(finTranId) {
        return this.httpService.editCashVoucher(finTranId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getPayload(data);
            }
            return null;
        }));
    }
    updateCashVData(payload, text) {
        return this.httpService.updateCashVocuher(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].successNotification(text + (payload.finTranId ? "Updated" : "Added") + " Successfully.") :
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].errorNotification("Unable to " + (payload.finTranId ? "Update" : "Add") + " the Cash Voucher.");
            return data;
        }));
    }
    editCashList(finTranHeadId) {
        return this.httpService.editCashList(finTranHeadId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getPayload(data);
            }
            return null;
        }));
    }
    getContraData(tranTypeHeadId) {
        return this.httpService.contraGet(tranTypeHeadId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getPayload(data);
            }
            return null;
        }));
    }
    getBankData() {
        return this.httpService.BankDetailsGet().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getPayload(data);
            }
            return null;
        }));
    }
    generateCashRecptReg(data) {
        return this.httpService.generatecashReceiptregister(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].successNotification(" Generated Successfully.") :
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].errorNotification("Unable to Generate");
            return data;
        }));
    }
    generateExcel(data) {
        return this.httpService.generateExcelReport(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].successNotification(" Generated Successfully.") :
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].errorNotification("Unable to Generate");
            return data;
        }));
    }
    sendListData(data) { this.cashListData.next(data); }
};
FinanceService.ctorParameters = () => [
    { type: src_app_shared_http_services_masters_masters_http_service__WEBPACK_IMPORTED_MODULE_3__["MastersHttpService"] },
    { type: src_app_shared_http_services_in_ward_in_ward_http_service__WEBPACK_IMPORTED_MODULE_7__["InWardHttpService"] }
];
FinanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FinanceService);



/***/ }),

/***/ "./src/app/distribution/finance/journal-voucher-entry/journal-voucher-entry.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/distribution/finance/journal-voucher-entry/journal-voucher-entry.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 20px;\n  margin-bottom: 0;\n  font-family: monospace !important;\n  font-weight: 700 !important;\n}\n\n.pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n\n.CashReceiptControls {\n  height: 300px;\n  width: 100%;\n}\n\n.CashReceiptCard {\n  width: 300px;\n  height: 255px;\n}\n\n.mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 24px;\n  border-radius: 2px;\n}\n\nmat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.buttons {\n  width: 960px;\n  margin: 0 auto;\n}\n\n.action_btn {\n  width: 500px;\n  margin: 5px auto;\n}\n\n.finance-button {\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2Uvam91cm5hbC12b3VjaGVyLWVudHJ5L0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcZmluYW5jZVxcam91cm5hbC12b3VjaGVyLWVudHJ5XFxqb3VybmFsLXZvdWNoZXItZW50cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2pvdXJuYWwtdm91Y2hlci1lbnRyeS9qb3VybmFsLXZvdWNoZXItZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDRTtFQUNFLHlEQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUU7RUFDRSwrR0FBQTtBQ0dKOztBREFFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNHSjs7QUREUTtFQUNKLFlBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREFJO0VBQ0UsbUJBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2pvdXJuYWwtdm91Y2hlci1lbnRyeS9qb3VybmFsLXZvdWNoZXItZW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhhcm1hY3lIZWFkaW5nIHtcbiAgICBjb2xvcjogIzJmOGJiZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBoYXJtYS1maW5hbmNlIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtaW4td2lkdGg6IDY1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICB9XG4gIFxuICAuQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLkNhc2hSZWNlaXB0Q2FyZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjU1cHg7XG4gIH1cbiAgLm1hdC1jYXJkIHtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfVxuICBtYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSwgMCAycHggMnB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggNXB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcbiAgfVxuICBcbiAgLmJ1dHRvbnMge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBtYXJnaW46IDAgYXV0bzt9XG4gICAgXG4gICAgICAgIC5hY3Rpb25fYnRuIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bzt9XG5cblxuXG4gICAgLmZpbmFuY2UtYnV0dG9uIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH0iLCIucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cbi5waGFybWEtZmluYW5jZSAubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtaW4td2lkdGg6IDY1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5DYXNoUmVjZWlwdENhcmQge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjU1cHg7XG59XG5cbi5tYXQtY2FyZCB7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmJ1dHRvbnMge1xuICB3aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYWN0aW9uX2J0biB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuLmZpbmFuY2UtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/distribution/finance/journal-voucher-entry/journal-voucher-entry.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/distribution/finance/journal-voucher-entry/journal-voucher-entry.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: JournalVoucherEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalVoucherEntryComponent", function() { return JournalVoucherEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/app-message-utils */ "./src/app/shared/utils/app-message-utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/my-custom-dialog/my-custom-dialog.component */ "./src/app/shared/components/my-custom-dialog/my-custom-dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/http-services/out-ward/out-ward-http.service */ "./src/app/shared/http-services/out-ward/out-ward-http.service.ts");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");














let JournalVoucherEntryComponent = class JournalVoucherEntryComponent {
    constructor(formBuilder, financeService, datePipe, router, dialog, service, todayDate) {
        this.formBuilder = formBuilder;
        this.financeService = financeService;
        this.datePipe = datePipe;
        this.router = router;
        this.dialog = dialog;
        this.service = service;
        this.todayDate = todayDate;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'description', 'rcNo', 'Amount', 'Discount', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.accName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.contarName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.customAccountAutoCompleteDef = {
            label: 'Debit Account',
            isRequired: true,
            dataSourceFn: (name) => this.financeService.getCustomAccountsByName(name),
            minCount: 2,
            keyString: 'accName'
        };
        this.customAccountAutoCompleteDef1 = {
            label: 'Credit Account',
            isRequired: true,
            dataSourceFn: (name) => this.financeService.getCustomAccountsByName(name),
            minCount: 2,
            keyString: 'accName'
        };
        this.customAccountsOptsTable = {
            panelWidth: 700,
            columns: [
                { name: 'Head of Account', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 36, fxFlex1: 36, isKeyColumn: true },
                { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 19, fxFlex1: 19 },
                { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 14, fxFlex1: 14 },
                { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 20, fxFlex1: 20 },
                { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 10, fxFlex1: 10 }
            ]
        };
        this.customAccountsOptsTable1 = {
            panelWidth: 700,
            columns: [
                { name: 'Head of Account', value: (obj) => obj['accName'] ? obj['accName'] : '', fxFlex: 36, fxFlex1: 36, isKeyColumn: true },
                { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 19, fxFlex1: 19 },
                { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 14, fxFlex1: 14 },
                { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 20, fxFlex1: 20 },
                { name: 'Sh.Name', value: (obj) => obj['accShName'] ? obj['accShName'] : '', fxFlex: 10, fxFlex1: 10 }
            ]
        };
        this.finTranHeadId = 0;
        this.sNo = 0;
        this.fintranId = 0;
        this.headNo = "";
        this.btnSave = 'Save';
        this.instrumentTypes = [];
        this.instruType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.instruNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.showTable = false;
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subscription"]();
    }
    ngOnInit() {
        this.journalVoucherEntryFormGroup = this.buildJournalReceiptVoucherEntry();
        this.accName.valueChanges.subscribe(res => {
            if (typeof res === 'object') {
                this.supplierData = res;
                this.bindeCreditDetails(res);
            }
        });
        this.contarName.valueChanges.subscribe(res => {
            console.log(res);
            if (res && typeof res === 'object') {
                this.finContraId = res.accId;
                this.bindedebitDetails(res);
            }
        });
        // var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        var dt = this.todayDate.localDate();
        dt = this.datePipe.transform(dt, 'yyyy-MM-dd');
        this.getContraData();
        ;
        this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));
        if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.firmPreferences.finEdate;
        }
        setTimeout(() => {
            this.journalVoucherEntryFormGroup.controls.finDate.setValue(dt);
            this.journalVoucherEntryFormGroup.controls.accShName.disable();
            this.journalVoucherEntryFormGroup.controls.cityName.disable();
            this.journalVoucherEntryFormGroup.controls.debitAccShName.disable();
            this.journalVoucherEntryFormGroup.controls.debitCityName.disable();
        }, 200);
        this.showClear = true;
        this.instrumentTypes = [{ id: 1, type: 'CHECK' }, { id: 2, type: 'NEFT' }, { id: 3, type: 'ONLINE (UPI/NET BANKING/ANY OTHER ONLINE PAYMENT)' }];
        setTimeout(() => {
            this.financeService.getListData$.subscribe(rees => {
                if (rees != null) {
                    this.newGet(rees.finTranHeadId);
                    this.finTranHeadId = rees.finTranHeadId;
                    this.heaidngNu = rees.finTranHeadNo;
                }
                else {
                    this.showTable = false;
                }
                // this.listshow = true;
            });
        }, 300);
        // this.subscription.add(this.service.getTabData$.subscribe(res=>{
        //     if(res != null && res){
        //       if(res[1] == 'Debit Account'){
        //         this.bindedebitDetails(res[0]);
        //         this.contarName.setValue(res[0].accName);
        //       }
        //       if(res[1]=='Credit Account'){
        //         this.bindeCreditDetails(res[0]);
        //         this.accName.setValue(res[0].accName);
        //       }
        //     }
        //   }));
    }
    buildJournalReceiptVoucherEntry() {
        return this.formBuilder.group({
            finDate: [''],
            customAccId: [''],
            accShName: [''],
            cityName: [''],
            finTranDesc: [''],
            finTranVno: ['0'],
            Amount: [''],
            finDisc: [''],
            debitAccShName: [''],
            debitCityName: ['']
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    bindeCreditDetails(data) {
        this.journalVoucherEntryFormGroup.patchValue({
            accShName: data.accShName,
            cityName: data.cityName,
            accMobile: data.accMobile,
            accGstIn: data.accGstIn,
        });
    }
    bindedebitDetails(data) {
        this.journalVoucherEntryFormGroup.patchValue({
            accMobile: data.accMobile,
            accGstIn: data.accGstIn,
            debitAccShName: data.accShName,
            debitCityName: data.cityName,
        });
    }
    addOrEdit(element) {
        // this.showClear = false;
        // this.btnSave = 'Update';
        this.financeService.editCashData(element.finTranId).subscribe(res => {
            this.commonMethod(res);
        });
    }
    deleteData(data) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
        const dialogRef = this.dialog.open(src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["MyCustomDialogComponent"], dialogConfig);
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
            .subscribe(result => {
            if (result === true) {
                this.delete(data);
            }
        });
    }
    delete(element) {
        this.financeService.doDeleteCashVocuher(element.finTranId).subscribe(data => src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus200(data) ? this.refresh() :
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isStatus404(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__["default"].warningMessage("Voucher Had already deleted") : '');
        setTimeout(() => {
            this.newGet(this.finTranHeadId);
        }, 200);
        this.reset();
    }
    updateVocuehr() {
        const val = this.journalVoucherEntryFormGroup.controls;
        console.log(this.contarName, 'this.contarName');
        console.log(this.accName, 'this.accName');
        const obj = {
            finTranId: this.fintranId,
            finTranSno: this.sNo,
            tranTypeHeadId: 9,
            finTranHeadDate: this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss'),
            finTranHeadId: this.finTranHeadId,
            finTranHeadNo: this.headNo,
            finTranAccId: this.accName.value.accId,
            finTranContraId: this.contarName.value.accId,
            finTranDesc: val.finTranDesc.value,
            finTranAmount: val.Amount.value,
            finTranVno: 0,
            firmYearId: this.frimYearId,
            cityName: val.cityName.value,
            accShName: val.accShName.value,
            accName: this.accName.value.accName,
            contraAccName: this.contarName.value.accName,
            accCityId: 0, createdBy: 0,
            createdOn: this.createdOn,
            modifiedBy: 0,
            modifiedOn: this.modifiedOn,
        };
        this.financeService.updateCashVData(obj, 'Journal Voucher').subscribe(data => {
            this.newGet(this.finTranHeadId);
            this.reset();
        });
    }
    refresh() {
    }
    reset() {
        this.btnSave = 'Save';
        this.showClear = true;
        this.accName.setValue('');
        this.contarName.setValue('');
        this.journalVoucherEntryFormGroup.reset();
        var dt = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        setTimeout(() => {
            this.journalVoucherEntryFormGroup.controls.finDate.setValue(dt);
        }, 200);
    }
    commonMethod(res) {
        this.btnSave = 'Update';
        this.showClear = false;
        this.journalVoucherEntryFormGroup.controls.Amount.setValue(res.finTranAmount);
        this.journalVoucherEntryFormGroup.controls.finDate.setValue(res.finTranHeadDate);
        this.journalVoucherEntryFormGroup.controls.finTranDesc.setValue(res.finTranDesc);
        this.journalVoucherEntryFormGroup.controls.finTranVno.setValue(res.finTranVno);
        this.accName.setValue(res.accName);
        this.acId = res.finTranAccId;
        this.fintranId = res.finTranId;
        this.sNo = res.finTranSno;
        this.finTranHeadId = res.finTranHeadId;
        this.frimYearId = res.firmYearId;
        this.headNo = res.finTranHeadNo;
        this.createdOn = res.createdOn;
        this.modifiedOn = res.modifiedOn;
        this.finContraId = res.finTranContraId;
        this.contarName.setValue(res.contraAccName);
    }
    newSave() {
        console.log(this.accName);
        console.log(this.contarName);
        if (this.btnSave == 'Update') {
            this.updateVocuehr();
        }
        else {
            const val = this.journalVoucherEntryFormGroup.controls;
            const obj = Object.assign({});
            obj.finTranSno = this.sNo + 1;
            obj.finTranHeadDate = this.datePipe.transform(val.finDate.value, 'yyyy-MM-ddTh:mm:ss');
            obj.finTranHeadId = this.finTranHeadId;
            obj.finTranHeadNo = this.headNo;
            obj.finTranAccId = this.accName.value.accId;
            obj.finTranContraId = this.contarName.value.accId;
            obj.finTranDesc = val.finTranDesc.value;
            obj.finTranAmount = Number(val.Amount.value);
            obj.firmYearId = 0;
            obj.isDeleted = 0;
            obj.cityName = val.cityName.value;
            obj.accShName = val.accShName.value;
            obj.accName = this.accName.value.accName;
            obj.contraAccName = this.contarName.value.accId;
            obj.accCityId = this.accName.value.accCityId;
            obj.createdBy = 0;
            obj.createdOn = new Date().toISOString();
            obj.modifiedBy = 0,
                obj.modifiedOn = new Date().toISOString();
            obj.accId = this.accName.value.accId;
            obj.accName1 = "";
            obj.finTranVno = Number(val.finTranVno.value);
            obj.finTranId = 0;
            obj.tranTypeHeadId = 9;
            this.financeService.saveCashVoucherRecpt(obj, 'Journal Voucher').subscribe(data => {
                this.finTranHeadId = data.resultObject;
                this.newGet(data.resultObject);
                this.reset();
            });
        }
    }
    newGet(finTranHeadId) {
        this.financeService.editCashList(finTranHeadId).subscribe(res => {
            this.headNo = res[0].finTranHeadNo;
            this.heaidngNu = res[0].finTranHeadNo;
            this.sNo = res.length;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res);
            this.showTable = true;
        });
    }
    validateFloatKeyPress(el) {
        var v = parseFloat(el.value);
        // el.value = (isNaN(v)) ? '' : v.toFixed(2);
        el.value = (Math.round(v * 100) / 100).toFixed(2);
    }
    getContraData() {
        this.financeService.getContraData(6).subscribe(data => {
            this.contraData = data;
        });
    }
};
JournalVoucherEntryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_4__["FinanceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_12__["OutWardHttpService"] },
    { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_13__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], JournalVoucherEntryComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('finTranDate', { static: false })
], JournalVoucherEntryComponent.prototype, "date", void 0);
JournalVoucherEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal-voucher-entry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./journal-voucher-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/journal-voucher-entry/journal-voucher-entry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./journal-voucher-entry.component.scss */ "./src/app/distribution/finance/journal-voucher-entry/journal-voucher-entry.component.scss")).default]
    })
], JournalVoucherEntryComponent);



/***/ }),

/***/ "./src/app/distribution/finance/journal-voucher-receipt-register/journal-voucher-receipt-register.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/distribution/finance/journal-voucher-receipt-register/journal-voucher-receipt-register.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 20px;\n  margin-bottom: 0;\n  font-family: monospace !important;\n  font-weight: 700 !important;\n}\n\n.pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n\n.CashReceiptControls {\n  height: 300px;\n  width: 100%;\n}\n\n.CashReceiptCard {\n  width: 100%;\n  /* Take full width of the container */\n  max-width: 900px;\n  /* Limit the maximum width for better readability */\n  margin: 15px auto;\n  /* Center the card and add space above */\n  padding: 16px;\n  /* Add internal spacing */\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  /* Optional: Add a shadow for a modern look */\n  border-radius: 8px;\n  /* Optional: Rounded corners */\n  background-color: #ffffff;\n  /* Optional: Card background */\n}\n\n.innerCard {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  max-width: 20%;\n}\n\n.finance-button {\n  min-width: 90px;\n  /* Ensure buttons have consistent width */\n  margin: 0;\n  /* Remove default margins if any */\n}\n\n::ng-deep .user-card .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0px !important;\n}\n\n::ng-deep .user-card .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .user-card .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .user-card .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n::ng-deep .user-card .mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 2em;\n  top: calc(100% - 1.79167em);\n}\n\n::ng-deep .user-card .mat-form-field {\n  width: 100%;\n}\n\n.full-height {\n  height: 100%;\n  /* Ensure full height for the expansion panel */\n}\n\n.table-container {\n  position: relative;\n}\n\n.action-icons {\n  display: flex;\n  justify-content: flex-end;\n  /* Align icons to the right */\n  gap: 16px;\n  /* Space between buttons */\n  margin-bottom: 8px;\n  /* Space below the buttons */\n}\n\n.icon-img {\n  width: 37px;\n  height: 38px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2Uvam91cm5hbC12b3VjaGVyLXJlY2VpcHQtcmVnaXN0ZXIvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxmaW5hbmNlXFxqb3VybmFsLXZvdWNoZXItcmVjZWlwdC1yZWdpc3Rlclxcam91cm5hbC12b3VjaGVyLXJlY2VpcHQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2pvdXJuYWwtdm91Y2hlci1yZWNlaXB0LXJlZ2lzdGVyL2pvdXJuYWwtdm91Y2hlci1yZWNlaXB0LXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS9qb3VybmFsLXZvdWNoZXItcmVjZWlwdC1yZWdpc3Rlci9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXG1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRFNBO0VBQ0UsV0FBQTtFQUFhLHFDQUFBO0VBQ2IsZ0JBQUE7RUFBa0IsbURBQUE7RUFDbEIsaUJBQUE7RUFBbUIsd0NBQUE7RUFDbkIsYUFBQTtFQUFlLHlCQUFBO0VBQ2YsMENBQUE7RUFBNEMsNkNBQUE7RUFDNUMsa0JBQUE7RUFBb0IsOEJBQUE7RUFDcEIseUJBQUE7RUFBMkIsOEJBQUE7QUNDN0I7O0FESUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQWlCLHlDQUFBO0VBQ2pCLFNBQUE7RUFBVyxrQ0FBQTtBQ0NiOztBQ3ZDSTtFQUNFLDZCQUFBO0FEMENOOztBQ3ZDSTtFQUNFLFdBQUE7QUR5Q047O0FDdENJO0VBQ0UseUNBQUE7QUR3Q047O0FDckNJO0VBQ0UsaUJBQUE7QUR1Q047O0FDcENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBRHNDTjs7QURaRTtFQUNFLFdBQUE7QUNjSjs7QURYQTtFQUNFLFlBQUE7RUFBYywrQ0FBQTtBQ2VoQjs7QURaQTtFQUNFLGtCQUFBO0FDZUY7O0FEWkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFBMkIsNkJBQUE7RUFDM0IsU0FBQTtFQUFXLDBCQUFBO0VBQ1gsa0JBQUE7RUFBb0IsNEJBQUE7QUNrQnRCOztBRGZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ2tCRiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2pvdXJuYWwtdm91Y2hlci1yZWNlaXB0LXJlZ2lzdGVyL2pvdXJuYWwtdm91Y2hlci1yZWNlaXB0LXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbi5zY3NzJztcblxuLnBoYXJtYWN5SGVhZGluZyB7XG4gIGNvbG9yOiAjMmY4YmJkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG4ucGhhcm1hLWZpbmFuY2UgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWluLXdpZHRoOiA2NXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4uQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vLyAuQ2FzaFJlY2VpcHRDYXJkIHtcbi8vICAgd2lkdGg6IDMwMHB4O1xuLy8gICBoZWlnaHQ6IDI1NXB4O1xuLy8gICBtYXJnaW4tdG9wOiAxNXB4O1xuLy8gfVxuLkNhc2hSZWNlaXB0Q2FyZCB7XG4gIHdpZHRoOiAxMDAlOyAvKiBUYWtlIGZ1bGwgd2lkdGggb2YgdGhlIGNvbnRhaW5lciAqL1xuICBtYXgtd2lkdGg6IDkwMHB4OyAvKiBMaW1pdCB0aGUgbWF4aW11bSB3aWR0aCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXG4gIG1hcmdpbjogMTVweCBhdXRvOyAvKiBDZW50ZXIgdGhlIGNhcmQgYW5kIGFkZCBzcGFjZSBhYm92ZSAqL1xuICBwYWRkaW5nOiAxNnB4OyAvKiBBZGQgaW50ZXJuYWwgc3BhY2luZyAqL1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIE9wdGlvbmFsOiBBZGQgYSBzaGFkb3cgZm9yIGEgbW9kZXJuIGxvb2sgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4OyAvKiBPcHRpb25hbDogUm91bmRlZCBjb3JuZXJzICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IC8qIE9wdGlvbmFsOiBDYXJkIGJhY2tncm91bmQgKi9cbn1cblxuXG5cbi5pbm5lckNhcmQge1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiAyMCU7XG59XG5cbi5maW5hbmNlLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogOTBweDsgLyogRW5zdXJlIGJ1dHRvbnMgaGF2ZSBjb25zaXN0ZW50IHdpZHRoICovXG4gIG1hcmdpbjogMDsgLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2lucyBpZiBhbnkgKi9cbn1cblxuXG46Om5nLWRlZXAgLnVzZXItY2FyZCB7XG4gIEBpbmNsdWRlIHVzZXItZm9ybTtcblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7IC8qIEVuc3VyZSBmdWxsIGhlaWdodCBmb3IgdGhlIGV4cGFuc2lvbiBwYW5lbCAqL1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWN0aW9uLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgLyogQWxpZ24gaWNvbnMgdG8gdGhlIHJpZ2h0ICovXG4gIGdhcDogMTZweDsgLyogU3BhY2UgYmV0d2VlbiBidXR0b25zICovXG4gIG1hcmdpbi1ib3R0b206IDhweDsgLyogU3BhY2UgYmVsb3cgdGhlIGJ1dHRvbnMgKi9cbn1cblxuLmljb24taW1nIHtcbiAgd2lkdGg6IDM3cHg7XG4gIGhlaWdodDogMzhweDtcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbiIsIi5waGFybWFjeUhlYWRpbmcge1xuICBjb2xvcjogIzJmOGJiZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLnBoYXJtYS1maW5hbmNlIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1pbi13aWR0aDogNjVweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cblxuLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkNhc2hSZWNlaXB0Q2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBUYWtlIGZ1bGwgd2lkdGggb2YgdGhlIGNvbnRhaW5lciAqL1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICAvKiBMaW1pdCB0aGUgbWF4aW11bSB3aWR0aCBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5ICovXG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICAvKiBDZW50ZXIgdGhlIGNhcmQgYW5kIGFkZCBzcGFjZSBhYm92ZSAqL1xuICBwYWRkaW5nOiAxNnB4O1xuICAvKiBBZGQgaW50ZXJuYWwgc3BhY2luZyAqL1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIE9wdGlvbmFsOiBBZGQgYSBzaGFkb3cgZm9yIGEgbW9kZXJuIGxvb2sgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBPcHRpb25hbDogUm91bmRlZCBjb3JuZXJzICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC8qIE9wdGlvbmFsOiBDYXJkIGJhY2tncm91bmQgKi9cbn1cblxuLmlubmVyQ2FyZCB7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDIwJTtcbn1cblxuLmZpbmFuY2UtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICAvKiBFbnN1cmUgYnV0dG9ucyBoYXZlIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5zIGlmIGFueSAqL1xufVxuXG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNGVtIDBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC51c2VyLWNhcmQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICB0b3A6IC0xLjVlbTtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSgwLjc1KTtcbn1cbjo6bmctZGVlcCAudXNlci1jYXJkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICBmb250LXNpemU6IDc1JTtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjdlbSk7XG59XG46Om5nLWRlZXAgLnVzZXItY2FyZCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBFbnN1cmUgZnVsbCBoZWlnaHQgZm9yIHRoZSBleHBhbnNpb24gcGFuZWwgKi9cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFjdGlvbi1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIC8qIEFsaWduIGljb25zIHRvIHRoZSByaWdodCAqL1xuICBnYXA6IDE2cHg7XG4gIC8qIFNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC8qIFNwYWNlIGJlbG93IHRoZSBidXR0b25zICovXG59XG5cbi5pY29uLWltZyB7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbjogM3B4O1xufSIsIkBtaXhpbiB1c2VyLWZvcm0ge1xuXG4gIC8vIC5tYXQtZm9ybS1maWVsZCB7XG4gIC8vICAgZm9udC1zaXplOiAxNHB4O1xuICAvLyAgIGhlaWdodDogNDhweDtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gfVxuXG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4Pi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICAgIHRvcDogLTEuNWVtO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICBcbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgZm9udC1zaXplOiA3NSU7XG4gICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjdlbSk7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgQG1peGluIG1hdC10YWIge1xuICAgIC5tYXQtdGFiLWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlYmVkZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiA4JSA4JSAwJSAwJTtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgcGFkZGluZzogMCAxMXB4O1xuICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICB9XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/distribution/finance/journal-voucher-receipt-register/journal-voucher-receipt-register.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/distribution/finance/journal-voucher-receipt-register/journal-voucher-receipt-register.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: JournalVoucherReceiptRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalVoucherReceiptRegisterComponent", function() { return JournalVoucherReceiptRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let JournalVoucherReceiptRegisterComponent = class JournalVoucherReceiptRegisterComponent {
    constructor(formBuilder, datePipe, financeService, route) {
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.financeService = financeService;
        this.route = route;
        this.openPanel = false;
        this.step = 0;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.displayedColumns = ['voucherNo', 'voucherDate', 'AccountName', 'Description', 'Amount'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    setStep(index) {
        this.step = index;
    }
    prevStep() {
        this.step = 0;
        this.openPanel = false;
    }
    ngOnInit() {
        this.journalVoucherRegisterFormGroup = this.buildjournalVoucherRegisterFormGroup();
    }
    ngAfterViewInit() {
        // Assign paginator after view initialization
        this.dataSource.paginator = this.paginator;
    }
    buildjournalVoucherRegisterFormGroup() {
        return this.formBuilder.group({
            fromDate: [''],
            toDate: [''],
            wantVoucherTotal: ['no'] // Default value
        });
    }
    nextStep(data) {
        console.log(data);
        let voucherTotal = "2";
        let frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
        let toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
        if (data.wantVoucherTotal == "yes") {
            voucherTotal = "1";
        }
        else {
            voucherTotal = "2";
        }
        this.step = 1;
        this.openPanel = true;
        let reBody = {
            tranTypeHeadId: "9",
            fromDate: frmDte,
            toDate: toDte,
            sumTotalYN: voucherTotal
        };
        this.financeService.generateCashRecptReg(reBody).subscribe(res => {
            if (res) {
                console.log(res);
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.resultObject);
                setTimeout(() => {
                    this.dataSource.paginator = this.paginator;
                    //  this.dataSource.sort = this.sort;
                }, 100);
            }
        });
    }
    resetForm() {
        this.journalVoucherRegisterFormGroup.reset();
    }
    exportToExcel(data) {
        let voucherTotal = "2";
        let frmDte = this.datePipe.transform(data.fromDate._d, 'yyyy-MM-ddTh:mm:ss');
        let toDte = this.datePipe.transform(data.toDate._d, 'yyyy-MM-ddTh:mm:ss');
        if (data.wantVoucherTotal === "yes") {
            voucherTotal = "1";
        }
        let reBody = {
            tranTypeHeadId: "9",
            fromDate: frmDte,
            toDate: toDte,
            sumTotalYN: voucherTotal
        };
        this.financeService.generateExcel(reBody).subscribe((res) => {
            const base64String = res.resultObject;
            const fileName = 'CashReceiptRegister.xlsx'; // Desired file name
            // Decode Base64 to binary data
            const binaryData = atob(base64String);
            const byteNumbers = new Array(binaryData.length);
            for (let i = 0; i < binaryData.length; i++) {
                byteNumbers[i] = binaryData.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            // Create a Blob from the binary data
            const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            // Create a URL for the Blob
            const url = window.URL.createObjectURL(blob);
            // Create an anchor element and trigger the download
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = fileName;
            anchor.click();
            // Clean up the URL
            window.URL.revokeObjectURL(url);
        }, (err) => {
            console.error('Error generating Excel file:', err);
        });
    }
    exportToPdf() {
        // Logic for exporting to PDF
        console.log('Export to PDF clicked');
    }
    goback() {
        if (this.route.url.includes('from=jvRegister')) {
            this.route.navigate(['pharma/finance/FinanceRegister']);
        }
        else {
            this.route.navigate(['pharma/finance/journalVouchers']);
        }
    }
};
JournalVoucherReceiptRegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_5__["FinanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], JournalVoucherReceiptRegisterComponent.prototype, "paginator", void 0);
JournalVoucherReceiptRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal-voucher-receipt-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./journal-voucher-receipt-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/journal-voucher-receipt-register/journal-voucher-receipt-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./journal-voucher-receipt-register.component.scss */ "./src/app/distribution/finance/journal-voucher-receipt-register/journal-voucher-receipt-register.component.scss")).default]
    })
], JournalVoucherReceiptRegisterComponent);



/***/ }),

/***/ "./src/app/distribution/finance/journal-voucher/journal-voucher.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/distribution/finance/journal-voucher/journal-voucher.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlL2pvdXJuYWwtdm91Y2hlci9qb3VybmFsLXZvdWNoZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/distribution/finance/journal-voucher/journal-voucher.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/distribution/finance/journal-voucher/journal-voucher.component.ts ***!
  \***********************************************************************************/
/*! exports provided: JournalVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalVoucherComponent", function() { return JournalVoucherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _finance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../finance.service */ "./src/app/distribution/finance/finance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils/app-message-utils */ "./src/app/shared/utils/app-message-utils.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/my-custom-dialog/my-custom-dialog.component */ "./src/app/shared/components/my-custom-dialog/my-custom-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");










let JournalVoucherComponent = class JournalVoucherComponent {
    constructor(financeService, router, dialog) {
        this.financeService = financeService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'Actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"]();
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getVoucherData();
    }
    getVoucherData() {
        this.financeService.getAllVoucherData(9).subscribe(data => {
            if (data) {
                data.forEach(x => {
                    x.finTranHeadDate = x.finTranHeadDate.split('T')[0];
                });
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](data);
                setTimeout(() => {
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }, 100);
            }
        });
    }
    deleteId(data) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
        const dialogRef = this.dialog.open(src_app_shared_components_my_custom_dialog_my_custom_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MyCustomDialogComponent"], dialogConfig);
        dialogRef
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._onDestroy))
            .subscribe(result => {
            if (result === true) {
                this.delete(data);
            }
        });
    }
    delete(element) {
        this.financeService.doDeletCashList(element.finTranHeadId).subscribe(data => src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_4__["default"].isStatus200(data) ? this.refresh() :
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_4__["default"].isStatus404(data) ?
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_5__["default"].warningMessage("Cash Reciept Had already deleted") : '');
        this.getVoucherData();
    }
    refresh() {
    }
    getByEdit(element) {
        this.financeService.sendListData(element);
        setTimeout(() => {
            this.router.navigate(['pharma/finance/jvRcptEntry']);
        }, 200);
    }
    rcptEntry() {
        this.financeService.sendListData(null);
        setTimeout(() => {
            this.router.navigate(['pharma/finance/jvRcptEntry']);
        }, 200);
    }
};
JournalVoucherComponent.ctorParameters = () => [
    { type: _finance_service__WEBPACK_IMPORTED_MODULE_2__["FinanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true })
], JournalVoucherComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: true })
], JournalVoucherComponent.prototype, "sort", void 0);
JournalVoucherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journal-voucher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./journal-voucher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance/journal-voucher/journal-voucher.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./journal-voucher.component.scss */ "./src/app/distribution/finance/journal-voucher/journal-voucher.component.scss")).default]
    })
], JournalVoucherComponent);



/***/ })

}]);
//# sourceMappingURL=finance-finance-module-es2015.js.map