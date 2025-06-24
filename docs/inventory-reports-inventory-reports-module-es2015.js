(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-reports-inventory-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/area-reports/area-reports.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/area-reports/area-reports.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-5 button-icons\">    \n    \n    <div class=\"row mx-0 mt-3\" style=\"column-gap: 20px;\">\n\n        <button class=\"btn btn-info p-4 col-md-2 mb-2\" *ngFor=\"let item of menuArray\">\n    \n            <div><i class=\"bi bi-geo-alt\"></i></div>                    \n            <div class=\"text-center\" style=\"white-space: normal\">{{item?.menuName}} </div>\n\n        </button>\n               \n    \n    </div>\n\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/company-reports/company-reports.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/company-reports/company-reports.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-5 button-icons\">    \n    \n    <div class=\"row mx-0 mt-3\" style=\"column-gap: 20px;\">\n\n        <button class=\"btn btn-info p-4 col-md-2 mb-2\" *ngFor=\"let item of menuArray\">\n    \n            <div><i class=\"fas fa-arrow-dowbi bi-buildings\"></i></div>                    \n            <div class=\"text-center\" style=\"white-space: normal\">{{item?.menuName}} </div>\n\n        </button>\n               \n    \n    </div>\n\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/inventory-reports.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/inventory-reports.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/product-reports/product-reports.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/product-reports/product-reports.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-5 button-icons\">    \n    \n    <div class=\"row mx-0 mt-3\" style=\"column-gap: 20px;\">\n\n        <button class=\"btn btn-info p-4 col-md-2 mb-2\" *ngFor=\"let item of menuArray\">\n    \n            <div><i class=\"bi bi-box\"></i></div>                    \n            <div class=\"text-center\" style=\"white-space: normal\">{{item?.menuName}} </div>\n\n        </button>\n               \n    \n    </div>\n\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-ledger/stock-ledger.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-ledger/stock-ledger.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharma-finance\">\n    <div class=\"heading-container\">\n      <h4 class=\"pharmacyHeading\" style=\"text-align: center;\">Stock Ledger</h4>\n      <!-- please check stock-statement component for stock-position code componenets are interchanged -->\n    </div>\n    <br>\n  \n    <mat-accordion>\n      <mat-expansion-panel class=\"ledger_mat\" [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <!-- [expanded]=\"step === 0\" -->\n        <form [formGroup]=\"stockLedgerRepost\">\n          <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"CashReceiptControls\">\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\" fxFlex.xs=\"30\" class=\"e_mat_date\">\n                <mat-label>From Date</mat-label>\n                <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\" [matDatepickerFilter]=\"dateFilter\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDatePicker></mat-datepicker>\n                <mat-error class=\"error-msg\">\n                  <span >From Date is Required...!</span>\n                </mat-error>\n              </mat-form-field>\n  \n            <mat-form-field fxFlex=\"20\" appearance=\"outline\" fxFlex.xs=\"30\" class=\"e_mat_date\">\n                <mat-label>To Date</mat-label>\n                <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\" [matDatepickerFilter]=\"dateFilter\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDatePicker></mat-datepicker>\n                <mat-error class=\"error-msg\">\n                  <span >To Date is Required...!</span>\n                </mat-error>\n            </mat-form-field>\n  \n            <mat-form-field fxFlex=\"20\" fxFlex.sm=\"28\" appearance=\"outline\">\n              <mat-label>Report Option</mat-label>\n              <mat-select formControlName=\"accopyType\" (selectionChange)=\"typeChange($event.value)\">\n                <mat-option value=1>Product Wise</mat-option>\n                <mat-option value=2>Batch Wise</mat-option>\n              </mat-select>\n              <mat-error class=\"error-msg\">\n                <span >Type is Required...!</span>\n              </mat-error>\n            </mat-form-field>\n            <div fxFlex=\"20\" fxFlex.xs=\"30\" *ngIf=\"stockLedgerRepost.get('accopyType')?.value === '2'\" >\n              <!-- <div fxFlex=\"20\" fxFlex.xs=\"30\"> -->\n                <app-autocomplete [definition]=\"customProductAutoCompleteDef\" [control]=\"ProductName\"\n                [optionsTableDefinition]=\"customProductOptsTable\"></app-autocomplete>\n              <!-- </div> -->\n            </div>\n            <div fxFlex=\"100\" class=\"mt-1\" *ngIf=\"stockLedgerRepost.get('accopyType')?.value === '1'\" >\n              <app-auto-select (outPutEmitter)=\"receiveGroupData($event)\" [optionsTableDefinition]=\"customProductsOptsTable\" [filterKeys]=\"prodFilterKeys\" [dataSource]=\"proddropdown\"></app-auto-select>\n            </div>\n            <div fxFlex=\"100\" *ngIf=\"batchWise\">\n              <app-auto-select (outPutEmitter)=\"receiveGroupData($event)\" [optionsTableDefinition]=\"customAccountsOptsTable\" [filterKeys]=\"filterKeys\" [dataSource]=\"batchewisestock\"></app-auto-select>\n            </div>\n            <!-- <div fxFlex=\"100\" class=\"mt-1\" *ngIf=\"stockLedgerRepost.get('accopyType')?.value === '2'\" >\n              <app-auto-select (outPutEmitter)=\"receiveGroupData($event)\" [optionsTableDefinition]=\"customProductsOptsTable\" [filterKeys]=\"prodFilterKeys\" [dataSource]=\"proddropdown\"></app-auto-select>\n            </div> -->\n            <!-- <mat-form-field fxFlex=\"100\" appearance=\"outline\" *ngIf=\"stockLedgerRepost.get('accopyType')?.value === '1'\">\n              <mat-label> Search with product Name</mat-label>\n            \n              <mat-select formControlName=\"accId\" multiple>\n                <div class=\"search-container\">\n                  <mat-form-field appearance=\"fill\" class=\"search-field\">\n                    <mat-label>Search</mat-label>\n                    <input matInput (keyup)=\"filterOptions($event.target.value)\" placeholder=\"Type to search\">\n                  </mat-form-field>\n                </div>\n                <mat-checkbox [checked]=\"isAllSelected\" [indeterminate]=\"isIndeterminate\"\n                  (change)=\"toggleSelectAll($event.checked)\">\n                  Select All\n                </mat-checkbox>\n            \n                <div class=\"dropdown-table header\">\n                  <span>Company Name</span>\n                  <span>Shot Name</span>\n                  <span>Address1</span>\n                  <span>Address1</span>\n                  <span>Group Name</span>\n                </div>\n            \n                <mat-option *ngFor=\"let option of filteredOptions\" [value]=\"option\">\n                  <div class=\"dropdown-table row\">\n                    <span>{{ option.compName }}</span>\n                    <span>{{ option.compShName }}</span>\n                    <span>{{ option.address1 }}</span>\n                    <span>{{ option.address2 }}</span>\n                    <span>{{ option.compGroupName }}</span>\n                  </div>\n                </mat-option>\n              </mat-select>\n              <mat-error class=\"error-msg\">\n                <span >Company option is Required...!</span>\n              </mat-error>\n            </mat-form-field> -->\n\n            <!-- <mat-form-field fxFlex=\"100\" appearance=\"outline\" *ngIf=\"stockLedgerRepost.get('accopyType')?.value === '2'\">\n                <mat-label>Company Group Option</mat-label>\n              \n                <mat-select formControlName=\"accId\" multiple>\n                  <div class=\"search-container\">\n                    <mat-form-field appearance=\"fill\" class=\"search-field\">\n                      <mat-label>Search</mat-label>\n                      <input matInput (keyup)=\"GroupfilterOptions($event.target.value)\" placeholder=\"Type to search\">\n                    </mat-form-field>\n                  </div>\n                  <mat-checkbox [checked]=\"isAllSelected\" [indeterminate]=\"isIndeterminate\"\n                    (change)=\"toggleSelectAllgroups($event.checked)\">\n                    Select All\n                  </mat-checkbox>\n              \n                  <div class=\"dropdown-table header\">\n                    <span>CompanyGroup Name</span>\n                  </div>\n              \n                  <mat-option *ngFor=\"let option of groupFilteredOptions\" [value]=\"option\">\n                    <div class=\"dropdown-table row\">\n                      <span>{{ option.compGroupName }}</span>\n                    </div>\n                  </mat-option>\n                </mat-select>\n                <mat-error class=\"error-msg\">\n                  <span >Account option is Required...!</span>\n                </mat-error>\n            </mat-form-field> -->\n  \n            <!-- Buttons -->\n          </div>\n          <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"button-group mt-2 justify-content-end button-group\">\n            <button type=\"button\" mat-raised-button color=\"primary\"  (click)=\"generateReport()\">Get</button>\n            <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"resetForm()\">Reset</button>\n            <button type=\"button\" mat-raised-button color=\"primary\" class=\"my-1\" (click)=\"goback()\">Back</button>\n            <div class=\"action-icons\">\n              <!-- Excel Export Button -->\n              <button mat-icon-button>\n                <img src=\"assets/new_xl.png\" alt=\"Excel\" class=\"icon-img\" />\n              </button>\n              \n        \n              <!-- PDF Export Button -->\n              <button mat-icon-button >\n                <img src=\"assets/new_pdf.png\" alt=\"PDF\" class=\"icon-img\" />\n              </button>\n            </div>\n          </div>\n        </form>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n\n  \n<div class=\"mt-2\">\n  <div class=\"master-table\" id=\"table-scroll\" *ngIf=\"showTable\">\n    <!-- <app-alert [id]=\"'dataTableAlertId'\"></app-alert> -->\n    <app-registers-table [dataSource]=\"dataSource\"></app-registers-table>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-position/stock-position.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-position/stock-position.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"pharma-finance\">\n  <div class=\"heading-container\">\n    <h4 class=\"pharmacyHeading\" style=\"text-align: center;\">Stock Statement</h4>\n  </div>\n  <br>\n  <!-- Stock Statement code is in stock position component and stock position code is in stock statement component. components are inter changed. -->\n\n  <mat-accordion>\n    <mat-expansion-panel class=\"account_mat\" [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n      <!-- [expanded]=\"step === 0\" -->\n      <form [formGroup]=\"stockStatementRepost\">\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"CashReceiptControls\">\n          <mat-form-field fxFlex=\"20\" fxFlex.sm=\"24\" fxFlex.xs=\"30\" class=\"e_mat_date\" appearance=\"outline\">\n              <mat-label>From Date</mat-label>\n              <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\" [matDatepickerFilter]=\"dateFilter\">\n              <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n              <mat-datepicker #fromDatePicker></mat-datepicker>\n              <mat-error class=\"error-msg\">\n                <span >From Date is Required...!</span>\n              </mat-error>\n            </mat-form-field>\n\n          <mat-form-field fxFlex=\"20\" fxFlex.sm=\"24\" fxFlex.xs=\"30\" class=\"e_mat_date\" appearance=\"outline\">\n              <mat-label>To Date</mat-label>\n              <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\" [matDatepickerFilter]=\"dateFilter\">\n              <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n              <mat-datepicker #toDatePicker></mat-datepicker>\n              <mat-error class=\"error-msg\">\n                <span >To Date is Required...!</span>\n              </mat-error>\n          </mat-form-field>\n\n          <mat-form-field fxFlex=\"20\" fxFlex.xs=\"30\" fxFlex.sm=\"30\" appearance=\"outline\">\n            <mat-label>Report Option</mat-label>\n            <mat-select formControlName=\"accopyType\" (selectionChange)=\"typeChange($event.value)\">\n              <mat-option value=1>Companywise</mat-option>\n              <mat-option value=2>CompanyGroupwise</mat-option>\n            </mat-select>\n            <mat-error class=\"error-msg\">\n              <span >Type is Required...!</span>\n            </mat-error>\n          </mat-form-field>\n\n          <!-- <mat-form-field fxFlex=\"100\" class=\"mt-2\" appearance=\"outline\" *ngIf=\"stockStatementRepost.get('accopyType')?.value === '1'\">\n            <mat-label>Company Option</mat-label>\n          \n            <mat-select (selectionChange)=\"comp($event)\" formControlName=\"accId\" panelClass=\"account_select\" multiple>\n              <mat-select-trigger>\n                <ng-container *ngIf=\"selectedAccounts?.length > 0\">\n                  {{ selectedAccounts[0]?.compName }}\n                  <span *ngIf=\"selectedAccounts.length > 1\" class=\"example-additional-selection\">\n                    (+{{ selectedAccounts.length - 1 }} {{ selectedAccounts.length === 2 ? 'other' : 'others' }})\n                  </span>\n                </ng-container>\n              </mat-select-trigger>\n              <div class=\"search-container\">\n                <mat-form-field appearance=\"fill\" class=\"search-field mat_date account_search\">\n                  <mat-label>Search</mat-label>\n                  <input matInput (input)=\"filterOptions($event.target.value)\" placeholder=\"Type to search\">\n                </mat-form-field>\n              </div>\n              <mat-checkbox class=\"d-block ml-2 mb-0\" [checked]=\"isAllSelected\" [indeterminate]=\"isIndeterminate\"\n                (change)=\"toggleSelectAll($event.checked)\">\n                Select All\n              </mat-checkbox>\n          \n              <div class=\"row mx-0\">\n                <div class=\"col-md-12 col-xl-8 pr-0\" style=\"max-height: 250px;overflow: auto;\">\n                  <mat-option class=\"mat_header\">\n                    <div fxLayout=\"row\" class=\"dropdown-table\">\n                      <div fxFlex=\"20\" class=\"header\">Company Name</div>\n                      <div fxFlex=\"12\" class=\"header\">Shot Name</div>\n                      <div fxFlex=\"20\" class=\"header\">Address1</div>\n                      <div fxFlex=\"20\" class=\"header\">Address2</div>\n                      <div fxFlex=\"20\" class=\"header\">Group Name</div>\n                    </div>\n                  </mat-option>\n              \n                  <mat-option class=\"mat_opt\" *ngFor=\"let option of filteredOptions\" [value]=\"option\">\n                    <div fxLayout=\"row\">\n                      <div fxFlex=\"20\" class=\"mat_option\" title=\"{{ option.compName }}\">{{ option.compName }}</div>\n                      <div fxFlex=\"12\" class=\"mat_option\">{{ option.compShName }}</div>\n                      <div fxFlex=\"20\" class=\"mat_option\" title=\"{{ option.address1 }}\">{{ option.address1 }}</div>\n                      <div fxFlex=\"20\" class=\"mat_option\" title=\"{{ option.address2}}\">{{ option.address2 }}</div>\n                      <div fxFlex=\"20\" class=\"mat_option\">{{ option.compGroupName }}</div>\n                    </div>\n                  </mat-option>\n                </div>\n                <div class=\"col-md-12 col-xl-4 pr-0\" style=\"max-height: 250px;overflow: auto;\">\n                  <div class=\"m-0 mat_header text-white font-weight-bold p-2\">\n                    <span>Selected List</span>\n                    <mat-checkbox class=\"ml-3 mat_checkbox\" (change)=\"clearSelectedItems($event.checked)\" [checked]=\"false\"\n                      style=\"pointer-events: auto;\">Unselect All</mat-checkbox>\n                  </div>\n                  <ul class=\"mb-0\" *ngIf=\"stockStatementRepost.get('accId')?.value.length > 0\" >\n                    <li *ngFor=\"let account of stockStatementRepost.get('accId')?.value\">{{ account.compName }} ({{ account.accShName }} - {{\n                      account.cityName\n                      }})</li>\n                  </ul>\n                  <div class=\"text-danger font-weight-bold\" *ngIf=\"stockStatementRepost.get('accId')?.value.length == 0\" >\n                    No company is selected.\n                  </div>\n                </div>\n              </div>\n            </mat-select>\n            <mat-error class=\"error-msg\">\n              <span >Company option is Required...!</span>\n            </mat-error>\n          </mat-form-field> -->\n          <div fxFlex=\"100\" class=\"mt-1\" *ngIf=\"stockStatementRepost.get('accopyType')?.value === '1'\" >\n            <app-auto-select (outPutEmitter)=\"receiveData($event)\" [optionsTableDefinition]=\"customAccountsOptsTable\" [filterKeys]=\"filterKeys\" [dataSource]=\"dropdownOptions\"></app-auto-select>\n          </div>\n\n          <!-- <mat-form-field fxFlex=\"100\" appearance=\"outline\" *ngIf=\"stockStatementRepost.get('accopyType')?.value === '2'\">\n              <mat-label>Company Group Option</mat-label>\n            \n              <mat-select formControlName=\"accId\" multiple>\n                <div class=\"search-container\">\n                  <mat-form-field appearance=\"fill\" class=\"search-field mat_date\">\n                    <mat-label>Search</mat-label>\n                    <input matInput (keyup)=\"GroupfilterOptions($event.target.value)\" placeholder=\"Type to search\">\n                  </mat-form-field>\n                </div>\n                <mat-checkbox [checked]=\"isAllSelected\" [indeterminate]=\"isIndeterminate\"\n                  (change)=\"toggleSelectAllgroups($event.checked)\">\n                  Select All\n                </mat-checkbox>\n            \n                <div class=\"mat_header\">\n                  <div class=\"header text-white p-2\">CompanyGroup Name</div>\n        \n                </div>\n            \n                <mat-option class=\"mat_option\" *ngFor=\"let option of groupFilteredOptions\" [value]=\"option\">\n                  <div fxLayout=\" row\">\n                    <span class=\"mat_opt\">{{ option.compGroupName }}</span>\n                   \n                  </div>\n                </mat-option>\n              </mat-select>\n              <mat-error class=\"error-msg\">\n                <span >Account option is Required...!</span>\n              </mat-error>\n            </mat-form-field> -->\n            <div fxFlex=\"100\" class=\"mt-1\" *ngIf=\"stockStatementRepost.get('accopyType')?.value === '2'\" >\n              <app-auto-select (outPutEmitter)=\"receiveGroupData($event)\" [optionsTableDefinition]=\"customCmpGroupsOptsTable\" [filterKeys]=\"groupfilterKeys\" [dataSource]=\"groupdropdown\"></app-auto-select>\n            </div>\n          </div>\n        <!-- Buttons -->\n        <div fxLayout=\"row\" fxLayoutGap=\"16px\" class=\"button-group\">\n          <div fxFlex=\"100\" class=\"d-sm-flex justify-content-end\">\n            <button type=\"button\" mat-raised-button color=\"primary\"\n              (click)=\"generateReport()\">Get</button>\n            <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"resetForm()\">Reset</button>\n            <button type=\"button\" mat-raised-button color=\"primary\" class=\"my-1\" (click)=\"goback()\">Back</button>\n            <div class=\"action-icons\" *ngIf=\"isshowExcel\">\n              <!-- Excel Export Button -->\n              <button mat-icon-button  (click)=\"exportToExcel(stockStatementRepost.value)\">\n                <img src=\"assets/new_xl.png\" alt=\"Excel\" class=\"icon-img\" />\n              </button>\n              \n        \n              <!-- PDF Export Button -->\n              <button mat-icon-button >\n                <img src=\"assets/new_pdf.png\" alt=\"PDF\" class=\"icon-img\" />\n              </button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n\n\n<div class=\"mt-2\">\n<div class=\"master-table\" id=\"table-scroll\" *ngIf=\"showTable\">\n  <!-- <app-alert [id]=\"'dataTableAlertId'\"></app-alert> -->\n  <app-registers-table [dataSource]=\"dataSource\"></app-registers-table>\n</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-reports.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-reports.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-5 button-icons\">    \n    \n    <div class=\"row mx-0 mt-3\" style=\"column-gap: 20px;\">\n\n        <button (click)=\"report(item?.menuPath)\" class=\"btn btn-info p-4 col-md-2 mb-2\" *ngFor=\"let item of menuArray\">\n    \n            <div><i class=\"bi bi-file-earmark-bar-graph\"></i></div>                    \n            <div class=\"text-center\" style=\"white-space: normal\">{{item?.menuName}} </div>\n\n        </button>\n               \n    \n    </div>\n\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-statement/stock-statement.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-statement/stock-statement.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"pharma-finance\">\n    <div class=\"heading-container\">\n      <h4 class=\"pharmacyHeading\" style=\"text-align: center;\">Stock Position</h4>\n<!-- please check stock-position component for stock-statement code componenets are interchanged -->\n    </div>\n    <br>\n  \n    <mat-accordion>\n      <mat-expansion-panel class=\"pt-3\" [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <!-- [expanded]=\"step === 0\" -->\n        <form [formGroup]=\"stockPositionRepost\">\n          <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"CashReceiptControls\">\n            <!-- <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n                <mat-label>From Date</mat-label>\n                <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\" [matDatepickerFilter]=\"dateFilter\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDatePicker></mat-datepicker>\n                <mat-error class=\"error-msg\">\n                  <span >From Date is Required...!</span>\n                </mat-error>\n              </mat-form-field>\n  \n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n                <mat-label>To Date</mat-label>\n                <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\" [matDatepickerFilter]=\"dateFilter\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDatePicker></mat-datepicker>\n                <mat-error class=\"error-msg\">\n                  <span >To Date is Required...!</span>\n                </mat-error>\n            </mat-form-field> -->\n  \n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>Report Option</mat-label>\n              <mat-select formControlName=\"accopyType\" (selectionChange)=\"typeChange($event.value)\">\n                <mat-option value=1>Detailed</mat-option>\n                <mat-option value=2>Product Abstract</mat-option>\n                <mat-option value=3>Company Abstract</mat-option>\n              </mat-select>\n              <mat-error class=\"error-msg\">\n                <span >Type is Required...!</span>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n                <mat-label>Include Nill Stocks</mat-label>\n                <mat-select formControlName=\"accopyType\" (selectionChange)=\"stockOptionChange($event.value)\">\n                  <mat-option value=1>Yes</mat-option>\n                  <mat-option value=2>No</mat-option>\n                </mat-select>\n                <!-- <mat-error class=\"error-msg\">\n                  <span >Type is Required...!</span>\n                </mat-error> -->\n              </mat-form-field>\n  \n            <!-- <mat-form-field fxFlex=\"100\" appearance=\"outline\">\n              <mat-label>Company Option</mat-label>\n            \n              <mat-select formControlName=\"accId\" multiple>\n                <div class=\"search-container\">\n                  <mat-form-field appearance=\"fill\" class=\"search-field\">\n                    <mat-label>Search</mat-label>\n                    <input matInput (keyup)=\"filterOptions($event.target.value)\" placeholder=\"Type to search\">\n                  </mat-form-field>\n                </div>\n                <mat-checkbox [checked]=\"isAllSelected\" [indeterminate]=\"isIndeterminate\"\n                  (change)=\"toggleSelectAll($event.checked)\">\n                  Select All\n                </mat-checkbox>\n            \n                <div class=\"dropdown-table header\">\n                  <span>Company Name</span>\n                  <span>Shot Name</span>\n                  <span>Address1</span>\n                  <span>Address1</span>\n                  <span>Group Name</span>\n                </div>\n            \n                <mat-option *ngFor=\"let option of filteredOptions\" [value]=\"option\">\n                  <div class=\"dropdown-table row\">\n                    <span>{{ option.compName }}</span>\n                    <span>{{ option.compShName }}</span>\n                    <span>{{ option.address1 }}</span>\n                    <span>{{ option.address2 }}</span>\n                    <span>{{ option.compGroupName }}</span>\n                  </div>\n                </mat-option>\n              </mat-select>\n              <mat-error class=\"error-msg\">\n                <span >Company option is Required...!</span>\n              </mat-error>\n            </mat-form-field> -->\n            <div fxFlex=\"100\" class=\"mt-1\" >\n              <app-auto-select (outPutEmitter)=\"receiveData($event)\" [optionsTableDefinition]=\"customAccountsOptsTable\" [filterKeys]=\"filterKeys\" [dataSource]=\"dropdownOptions\"></app-auto-select>\n            </div>\n\n       \n  \n            <!-- Buttons -->\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"button-group\">\n              <button type=\"button\" mat-raised-button color=\"primary\"  (click)=\"generateReport()\">Get</button>\n              <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"resetForm()\">Reset</button>\n              <button type=\"button\" mat-raised-button color=\"primary\" class=\"my-1\" (click)=\"goback()\">Back</button>\n              <div class=\"action-icons\" *ngIf=\"isShowExcelpdf\">\n                <!-- Excel Export Button -->\n                <button mat-icon-button (click)=\"exportToExcel(stockPositionRepost.value)\">\n                  <img src=\"assets/new_xl.png\" alt=\"Excel\" class=\"icon-img\" />\n                </button>\n                \n          \n                <!-- PDF Export Button -->\n                <button mat-icon-button (click)=\"exportToPdf()\">\n                  <img src=\"assets/new_pdf.png\" alt=\"PDF\" class=\"icon-img\" />\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n\n  \n<div class=\"mt-2\">\n  <div class=\"master-table\" id=\"table-scroll\" *ngIf=\"showTable\">\n    <!-- <app-alert [id]=\"'dataTableAlertId'\"></app-alert> -->\n    <app-registers-table [dataSource]=\"dataSource\"></app-registers-table>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/distribution/inventory-reports/area-reports/area-reports.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/area-reports/area-reports.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9pbnZlbnRvcnktcmVwb3J0cy9hcmVhLXJlcG9ydHMvYXJlYS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/distribution/inventory-reports/area-reports/area-reports.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/area-reports/area-reports.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AreaReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaReportsComponent", function() { return AreaReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AreaReportsComponent = class AreaReportsComponent {
    constructor() { }
    ngOnInit() {
        // this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
        // this.menuArray = this.authDetails[4].menus[3].menus;
        this.authDetails = JSON.parse(localStorage.getItem("menuItems"));
        this.authDetails.filter(x => {
            if (x.menuName == 'Inventory Reports') {
                var menus = x.menus;
                menus.filter(y => {
                    if (y.menuName == 'Area Reports') {
                        this.menuArray = y.menus;
                    }
                });
            }
        });
    }
};
AreaReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-area-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./area-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/area-reports/area-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./area-reports.component.scss */ "./src/app/distribution/inventory-reports/area-reports/area-reports.component.scss")).default]
    })
], AreaReportsComponent);



/***/ }),

/***/ "./src/app/distribution/inventory-reports/company-reports/company-reports.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/company-reports/company-reports.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9pbnZlbnRvcnktcmVwb3J0cy9jb21wYW55LXJlcG9ydHMvY29tcGFueS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/distribution/inventory-reports/company-reports/company-reports.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/company-reports/company-reports.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CompanyReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyReportsComponent", function() { return CompanyReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompanyReportsComponent = class CompanyReportsComponent {
    constructor() { }
    ngOnInit() {
        this.authDetails = JSON.parse(localStorage.getItem("menuItems"));
        this.authDetails.filter(x => {
            if (x.menuName == 'Inventory Reports') {
                var menus = x.menus;
                menus.filter(y => {
                    if (y.menuName == 'Company Reports') {
                        this.menuArray = y.menus;
                    }
                });
            }
        });
    }
};
CompanyReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/company-reports/company-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-reports.component.scss */ "./src/app/distribution/inventory-reports/company-reports/company-reports.component.scss")).default]
    })
], CompanyReportsComponent);



/***/ }),

/***/ "./src/app/distribution/inventory-reports/inventory-reports-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/inventory-reports-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: InventoryReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryReportsRoutingModule", function() { return InventoryReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inventory_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-reports.component */ "./src/app/distribution/inventory-reports/inventory-reports.component.ts");
/* harmony import */ var _stock_reports_stock_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock-reports/stock-reports.component */ "./src/app/distribution/inventory-reports/stock-reports/stock-reports.component.ts");
/* harmony import */ var _company_reports_company_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-reports/company-reports.component */ "./src/app/distribution/inventory-reports/company-reports/company-reports.component.ts");
/* harmony import */ var _product_reports_product_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-reports/product-reports.component */ "./src/app/distribution/inventory-reports/product-reports/product-reports.component.ts");
/* harmony import */ var _area_reports_area_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./area-reports/area-reports.component */ "./src/app/distribution/inventory-reports/area-reports/area-reports.component.ts");
/* harmony import */ var _stock_reports_stock_position_stock_position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock-reports/stock-position/stock-position.component */ "./src/app/distribution/inventory-reports/stock-reports/stock-position/stock-position.component.ts");
/* harmony import */ var _stock_reports_stock_statement_stock_statement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stock-reports/stock-statement/stock-statement.component */ "./src/app/distribution/inventory-reports/stock-reports/stock-statement/stock-statement.component.ts");
/* harmony import */ var _stock_reports_stock_ledger_stock_ledger_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stock-reports/stock-ledger/stock-ledger.component */ "./src/app/distribution/inventory-reports/stock-reports/stock-ledger/stock-ledger.component.ts");











const routes = [
    { path: '', component: _inventory_reports_component__WEBPACK_IMPORTED_MODULE_3__["InventoryReportsComponent"],
        children: [
            { path: 'stockReports', component: _stock_reports_stock_reports_component__WEBPACK_IMPORTED_MODULE_4__["StockReportsComponent"] },
            { path: 'stockReports/stockStatement', component: _stock_reports_stock_position_stock_position_component__WEBPACK_IMPORTED_MODULE_8__["StockPositionComponent"] },
            { path: 'stockReports/stockPosition', component: _stock_reports_stock_statement_stock_statement_component__WEBPACK_IMPORTED_MODULE_9__["StockStatementComponent"] },
            { path: 'stockReports/stockLedger', component: _stock_reports_stock_ledger_stock_ledger_component__WEBPACK_IMPORTED_MODULE_10__["StockLedgerComponent"] },
            { path: 'companyReports', component: _company_reports_company_reports_component__WEBPACK_IMPORTED_MODULE_5__["CompanyReportsComponent"] },
            { path: 'productReports', component: _product_reports_product_reports_component__WEBPACK_IMPORTED_MODULE_6__["ProductReportsComponent"] },
            { path: 'areaReports', component: _area_reports_area_reports_component__WEBPACK_IMPORTED_MODULE_7__["AreaReportsComponent"] }
        ]
    },
];
let InventoryReportsRoutingModule = class InventoryReportsRoutingModule {
};
InventoryReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InventoryReportsRoutingModule);



/***/ }),

/***/ "./src/app/distribution/inventory-reports/inventory-reports.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/inventory-reports.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9pbnZlbnRvcnktcmVwb3J0cy9pbnZlbnRvcnktcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/distribution/inventory-reports/inventory-reports.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/inventory-reports.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InventoryReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryReportsComponent", function() { return InventoryReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let InventoryReportsComponent = class InventoryReportsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
};
InventoryReportsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InventoryReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inventory-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/inventory-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inventory-reports.component.scss */ "./src/app/distribution/inventory-reports/inventory-reports.component.scss")).default]
    })
], InventoryReportsComponent);



/***/ }),

/***/ "./src/app/distribution/inventory-reports/inventory-reports.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/inventory-reports.module.ts ***!
  \****************************************************************************/
/*! exports provided: InventoryReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryReportsModule", function() { return InventoryReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _inventory_reports_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-reports-routing.module */ "./src/app/distribution/inventory-reports/inventory-reports-routing.module.ts");
/* harmony import */ var _inventory_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory-reports.component */ "./src/app/distribution/inventory-reports/inventory-reports.component.ts");
/* harmony import */ var _stock_reports_stock_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-reports/stock-reports.component */ "./src/app/distribution/inventory-reports/stock-reports/stock-reports.component.ts");
/* harmony import */ var _company_reports_company_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-reports/company-reports.component */ "./src/app/distribution/inventory-reports/company-reports/company-reports.component.ts");
/* harmony import */ var _product_reports_product_reports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-reports/product-reports.component */ "./src/app/distribution/inventory-reports/product-reports/product-reports.component.ts");
/* harmony import */ var _area_reports_area_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./area-reports/area-reports.component */ "./src/app/distribution/inventory-reports/area-reports/area-reports.component.ts");
/* harmony import */ var _stock_reports_stock_position_stock_position_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stock-reports/stock-position/stock-position.component */ "./src/app/distribution/inventory-reports/stock-reports/stock-position/stock-position.component.ts");
/* harmony import */ var _stock_reports_stock_statement_stock_statement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stock-reports/stock-statement/stock-statement.component */ "./src/app/distribution/inventory-reports/stock-reports/stock-statement/stock-statement.component.ts");
/* harmony import */ var _stock_reports_stock_ledger_stock_ledger_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stock-reports/stock-ledger/stock-ledger.component */ "./src/app/distribution/inventory-reports/stock-reports/stock-ledger/stock-ledger.component.ts");













let InventoryReportsModule = class InventoryReportsModule {
};
InventoryReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inventory_reports_component__WEBPACK_IMPORTED_MODULE_5__["InventoryReportsComponent"], _stock_reports_stock_reports_component__WEBPACK_IMPORTED_MODULE_6__["StockReportsComponent"], _company_reports_company_reports_component__WEBPACK_IMPORTED_MODULE_7__["CompanyReportsComponent"], _product_reports_product_reports_component__WEBPACK_IMPORTED_MODULE_8__["ProductReportsComponent"], _area_reports_area_reports_component__WEBPACK_IMPORTED_MODULE_9__["AreaReportsComponent"], _stock_reports_stock_position_stock_position_component__WEBPACK_IMPORTED_MODULE_10__["StockPositionComponent"], _stock_reports_stock_statement_stock_statement_component__WEBPACK_IMPORTED_MODULE_11__["StockStatementComponent"], _stock_reports_stock_ledger_stock_ledger_component__WEBPACK_IMPORTED_MODULE_12__["StockLedgerComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _inventory_reports_routing_module__WEBPACK_IMPORTED_MODULE_4__["InventoryReportsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], InventoryReportsModule);



/***/ }),

/***/ "./src/app/distribution/inventory-reports/inventory-reports.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/inventory-reports.service.ts ***!
  \*****************************************************************************/
/*! exports provided: InventoryReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryReportsService", function() { return InventoryReportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var src_app_shared_http_services_inventory_reports_inventory_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/http-services/inventory-reports/inventory-http.service */ "./src/app/shared/http-services/inventory-reports/inventory-http.service.ts");





let InventoryReportsService = class InventoryReportsService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getCompanyList() {
        return this.httpService.getCompanies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    getGroupCompanyList() {
        return this.httpService.getCompanyGroups().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    getstockStstement(data) {
        return this.httpService.getStockStatemt(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    ;
    getstockPosition(data) {
        return this.httpService.getStockPosition(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    ;
    getstockLedger(data) {
        return this.httpService.getStockLedger(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    ;
    getproductsList(data) {
        return this.httpService.getProducts(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    ;
    gettockPositionExcel(data) {
        return this.httpService.getStockPositionExcel(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    ;
    gettockStatementExcel(data) {
        return this.httpService.getStockStatementExcel(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    ;
    GetBatchesByProductId(data) {
        return this.httpService.GetBatchesByProductId(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    GetBatchWiseStockLedger(data) {
        return this.httpService.GetBatchWiseStockLedger(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
};
InventoryReportsService.ctorParameters = () => [
    { type: src_app_shared_http_services_inventory_reports_inventory_http_service__WEBPACK_IMPORTED_MODULE_4__["InventoryHttpService"] }
];
InventoryReportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InventoryReportsService);



/***/ }),

/***/ "./src/app/distribution/inventory-reports/product-reports/product-reports.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/product-reports/product-reports.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9pbnZlbnRvcnktcmVwb3J0cy9wcm9kdWN0LXJlcG9ydHMvcHJvZHVjdC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/distribution/inventory-reports/product-reports/product-reports.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/product-reports/product-reports.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReportsComponent", function() { return ProductReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductReportsComponent = class ProductReportsComponent {
    constructor() { }
    ngOnInit() {
        this.authDetails = JSON.parse(localStorage.getItem("menuItems"));
        this.authDetails.filter(x => {
            if (x.menuName == 'Inventory Reports') {
                var menus = x.menus;
                menus.filter(y => {
                    if (y.menuName == 'Product Reports') {
                        this.menuArray = y.menus;
                    }
                });
            }
        });
    }
};
ProductReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/product-reports/product-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-reports.component.scss */ "./src/app/distribution/inventory-reports/product-reports/product-reports.component.scss")).default]
    })
], ProductReportsComponent);



/***/ }),

/***/ "./src/app/distribution/inventory-reports/stock-reports/stock-ledger/stock-ledger.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/stock-reports/stock-ledger/stock-ledger.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 24px;\n  font-family: \"Monospace\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  text-align: right;\n}\n\n.pharma-finance {\n  padding: 16px;\n}\n\n.CashReceiptControls {\n  width: 100%;\n}\n\nbutton.mat-raised-button {\n  border-radius: 63px;\n  min-width: 101px;\n  height: 48px;\n  margin: 6px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-select-panel {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.dropdown-table {\n  display: grid;\n  grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr;\n  /* Adjust column widths */\n  align-items: center;\n  gap: 16px;\n  padding: 8px;\n}\n\n.dropdown-table.header {\n  font-weight: bold;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row:nth-child(even) {\n  background-color: #fafafa;\n}\n\n.dropdown-table span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\nmat-checkbox {\n  margin: 8px 0;\n}\n\n.search-container {\n  padding: 8px;\n}\n\n.search-field {\n  width: 30%;\n}\n\n.action-icons {\n  display: flex;\n  justify-content: flex-end;\n  /* Align icons to the right */\n  gap: 16px;\n  /* Space between buttons */\n  margin-bottom: 8px;\n  /* Space below the buttons */\n}\n\n.icon-img {\n  width: 37px;\n  height: 38px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  margin: 3px;\n}\n\n::ng-deep .ledger_mat .mat-expansion-panel-body {\n  padding: 14px 16px 24px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ludmVudG9yeS1yZXBvcnRzL3N0b2NrLXJlcG9ydHMvc3RvY2stbGVkZ2VyL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcaW52ZW50b3J5LXJlcG9ydHNcXHN0b2NrLXJlcG9ydHNcXHN0b2NrLWxlZGdlclxcc3RvY2stbGVkZ2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vaW52ZW50b3J5LXJlcG9ydHMvc3RvY2stcmVwb3J0cy9zdG9jay1sZWRnZXIvc3RvY2stbGVkZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0VBQWdELHlCQUFBO0VBQ2hELG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0UseUJBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGFBQUE7QUNFSjs7QURBRTtFQUNFLFlBQUE7QUNHSjs7QURBRTtFQUNFLFVBQUE7QUNHSjs7QURERTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUEyQiw2QkFBQTtFQUMzQixTQUFBO0VBQVcsMEJBQUE7RUFDWCxrQkFBQTtFQUFvQiw0QkFBQTtBQ094Qjs7QURKRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNPSjs7QURKRTtFQUNFLDRCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vaW52ZW50b3J5LXJlcG9ydHMvc3RvY2stcmVwb3J0cy9zdG9jay1sZWRnZXIvc3RvY2stbGVkZ2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBoYXJtYWN5SGVhZGluZyB7XG4gICAgY29sb3I6ICMyZjhiYmQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9ub3NwYWNlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gIC5waGFybWEtZmluYW5jZSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBidXR0b24ubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDYzcHg7XG4gICAgbWluLXdpZHRoOiAxMDFweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbWFyZ2luOiA2cHhcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDNmciAyZnIgMmZyIDJmcjsgLyogQWRqdXN0IGNvbHVtbiB3aWR0aHMgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZS5oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZS5yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZS5yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUgc3BhbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICBcbiAgbWF0LWNoZWNrYm94IHtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgXG4gIC5zZWFyY2gtZmllbGQge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgLmFjdGlvbi1pY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBBbGlnbiBpY29ucyB0byB0aGUgcmlnaHQgKi9cbiAgICBnYXA6IDE2cHg7IC8qIFNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDhweDsgLyogU3BhY2UgYmVsb3cgdGhlIGJ1dHRvbnMgKi9cbiAgfVxuICBcbiAgLmljb24taW1nIHtcbiAgICB3aWR0aDogMzdweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIG1hcmdpbjogM3B4O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5sZWRnZXJfbWF0IC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICAgIHBhZGRpbmc6IDE0cHggMTZweCAyNHB4IDE2cHg7XG4gIH0iLCIucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucGhhcm1hLWZpbmFuY2Uge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA2M3B4O1xuICBtaW4td2lkdGg6IDEwMXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbjogNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1zZWxlY3QtcGFuZWwge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5kcm9wZG93bi10YWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAzZnIgMmZyIDJmciAyZnI7XG4gIC8qIEFkanVzdCBjb2x1bW4gd2lkdGhzICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uZHJvcGRvd24tdGFibGUuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uZHJvcGRvd24tdGFibGUucm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5kcm9wZG93bi10YWJsZS5yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLmRyb3Bkb3duLXRhYmxlIHNwYW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZzogNHB4O1xufVxuXG5tYXQtY2hlY2tib3gge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnNlYXJjaC1maWVsZCB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5hY3Rpb24taWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAvKiBBbGlnbiBpY29ucyB0byB0aGUgcmlnaHQgKi9cbiAgZ2FwOiAxNnB4O1xuICAvKiBTcGFjZSBiZXR3ZWVuIGJ1dHRvbnMgKi9cbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAvKiBTcGFjZSBiZWxvdyB0aGUgYnV0dG9ucyAqL1xufVxuXG4uaWNvbi1pbWcge1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW46IDNweDtcbn1cblxuOjpuZy1kZWVwIC5sZWRnZXJfbWF0IC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAxNHB4IDE2cHggMjRweCAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/distribution/inventory-reports/stock-reports/stock-ledger/stock-ledger.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/stock-reports/stock-ledger/stock-ledger.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: StockLedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockLedgerComponent", function() { return StockLedgerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inventory_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../inventory-reports.service */ "./src/app/distribution/inventory-reports/inventory-reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/app-constants */ "./src/app/shared/app-constants.ts");
/* harmony import */ var src_app_distribution_in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/distribution/in-ward/in-ward.service */ "./src/app/distribution/in-ward/in-ward.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



// import { FinanceReportsService } from '../finance-reports.service';






let StockLedgerComponent = class StockLedgerComponent {
    constructor(fb, router, StockRepService, datepipe, inwardService) {
        this.fb = fb;
        this.router = router;
        this.StockRepService = StockRepService;
        this.datepipe = datepipe;
        this.inwardService = inwardService;
        this.step = 0;
        this.dropdownOptions = [];
        this.proddropdown = [];
        this.filteredOptions = [];
        this.groupFilteredOptions = [];
        this.showAutoCompleteData = false;
        // Updated with additional columns
        // dropdownOptions = [
        //   { id: 1, name: 'Account A', address: '123 Main St', city: 'New York', state: 'NY' },
        //   { id: 2, name: 'Account B', address: '456 Elm St', city: 'Los Angeles', state: 'CA' },
        //   { id: 3, name: 'Account C', address: '789 Oak St', city: 'Chicago', state: 'IL' },
        //   { id: 4, name: 'Account D', address: '101 Pine St', city: 'Houston', state: 'TX' }
        // ];
        // dropdownOptions = [
        //   { id: 1, name: 'A', address: '1', city: 'N', state: 'N' },
        //   { id: 2, name: 'B', address: '4', city: 'L', state: 'C' },
        //   ...
        // ];
        this.isAllSelected = false;
        this.isIndeterminate = false;
        this.showTable = false;
        this.ProductName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.customProductAutoCompleteDef = {
            label: 'Product Name',
            isRequired: true,
            dataSourceFn: (name) => this.showAutoComplete(name),
            minCount: 2,
            keyString: 'prodName'
        };
        this.batchWise = false;
        this.customProductOptsTable = {
            panelWidth: 900,
            columns: [
                { name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName'] : '', fxFlex: 20, fxFlex1: 20, isKeyColumn: true },
                { name: 'Product Pack', value: (obj) => obj['prodPackName'] ? obj['prodPackName'] : '', fxFlex: 16, fxFlex1: 16 },
                { name: 'HSN Code', value: (obj) => obj['hsncode'] ? obj['hsncode'] : '', fxFlex: 16, fxFlex1: 16 },
                { name: 'Tax%', value: (obj) => obj['tax'] ? obj['tax'] : '', fxFlex: 16, fxFlex1: 16 },
                { name: 'Sh.Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] : '', fxFlex: 16, fxFlex1: 16 },
                { name: 'CompanyName', value: (obj) => obj['compName'] ? obj['compName'] : '', fxFlex: 14, fxFlex1: 14 }
            ]
        };
        this.customProductsOptsTable = {
            panelWidth: 800,
            columns: [
                {
                    name: 'Select All', value: (obj) => obj[''],
                    fxFlex: 10,
                    fxFlex1: 10
                },
                { name: 'Product Name', value: (obj) => obj['prodName'] ? obj['prodName'] : '', fxFlex: 34, fxFlex1: 34, isKeyColumn: true },
                { name: 'Shot Name', value: (obj) => obj['prodShName'] ? obj['prodShName'] : '', fxFlex: 14, fxFlex1: 14 },
                { name: 'Prod PackName', value: (obj) => obj['prodPackName'] ? obj['prodPackName'] : '', fxFlex: 16, fxFlex1: 16 },
                { name: 'Prod GroupName', value: (obj) => obj['prodGroupName'] ? obj['prodGroupName'] : '', fxFlex: 24, fxFlex1: 24 },
                { name: 'Tax', value: (obj) => obj['tax'] ? obj['tax'] : '', fxFlex: 12, fxFlex1: 12 },
            ]
        };
        this.prodFilterKeys = ['prodName', 'prodShName', 'prodGroupName'];
        this.customAccountsOptsTable = {
            panelWidth: 800,
            columns: [
                {
                    name: 'Select All', value: (obj) => obj[''],
                    fxFlex: 10,
                    fxFlex1: 10
                },
                { name: 'Company Name', value: (obj) => obj['comp_Name'] ? obj['comp_Name'] : '', fxFlex: 14, fxFlex1: 14, isKeyColumn: true },
                { name: 'Product Name', value: (obj) => obj['prod_Name'] ? obj['prod_Name'] : '', fxFlex: 14, fxFlex1: 14 },
                { name: 'Short Name', value: (obj) => obj['p_Sh_Name'] ? obj['p_Sh_Name'] : '', fxFlex: 14, fxFlex1: 14 },
                { name: 'Product Pack', value: (obj) => obj['prod_Pack'] ? obj['prod_Pack'] : '', fxFlex: 16, fxFlex1: 16 },
                { name: 'Batch', value: (obj) => obj['batch'] ? obj['batch'] : '', fxFlex: 24, fxFlex1: 24 },
                { name: 'Recd.Qty', value: (obj) => obj['recd_Qty'] ? obj['recd_Qty'] : '', fxFlex: 12, fxFlex1: 12 },
                { name: 'Supplier', value: (obj) => obj['supplier'] ? obj['supplier'] : '', fxFlex: 14, fxFlex1: 14 },
            ]
        };
        this.filterKeys = ['comp_Name', 'p_Sh_Name', 'prod_Name', 'batch'];
        this.lowerSearch = "";
        // Datepicker filter to disable dates outside the financial year
        this.dateFilter = (date) => {
            if (!date)
                return false;
            return date >= this.financialYearStart && date <= this.financialYearEnd;
        };
        this.today = new Date().toISOString().split('T')[0];
        this.stockLedgerRepost = this.fb.group({
            fromDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accopyType: [''],
            accId: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // prodId:  [''],
            compId: [0],
        });
    }
    ngOnInit() {
        // this.getCompanies();
        // this.getCompaniesGroups();
        this.lowerSearch = "";
        this.getProducts();
        this.calculateFinancialYearDates();
        // this.createForm();
        this.ProductName.valueChanges.subscribe(data => {
            // console.log(this.stockLedgerRepost.get('prodId').value.prodId);
            if (this.ProductName.value.prodId > 0) {
                this.GetBatchesByProductId();
            }
            if (this.ProductName.value == "") {
                this.batchWise = false;
            }
            if (data && this.ProductName.dirty) {
                this.showAutoCompleteData = true;
            }
        });
    }
    setStep(index) {
        this.step = index;
    }
    getProducts() {
        let payload = {
            compId: 0,
            prodName: this.lowerSearch
        };
        this.StockRepService.getproductsList(payload).subscribe(res => {
            this.proddropdown = res;
            this.filteredOptions = [...this.dropdownOptions];
        });
    }
    ;
    getCompaniesGroups() {
        this.StockRepService.getGroupCompanyList().subscribe(res => {
            this.proddropdown = res;
            this.groupFilteredOptions = [...this.proddropdown];
        });
    }
    ;
    generateReport() {
        // let toDate = this.stockLedgerRepost.value.toDate.split("T")
        let accId = [];
        if (this.stockLedgerRepost.value.accId.length > 0) {
            if (this.stockLedgerRepost.value.accopyType == 1) {
                accId = this.stockLedgerRepost.value.accId.map(item => item.prodId).toString();
            }
            else if (this.stockLedgerRepost.value.accopyType == 2) {
                accId = this.stockLedgerRepost.value.accId.map(item => item.compGroupId).toString();
            }
        }
        const payload = {
            // "stmntOption": Number(this.stockLedgerRepost.controls.accopyType.value),
            "products": this.selectedProducts ? this.selectedProducts.toString() : "",
            "fromDate": this.datepipe.transform(this.stockLedgerRepost.value.fromDate, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            // this.stockLedgerRepost.value.fromDate,
            "toDate": this.datepipe.transform(this.stockLedgerRepost.value.toDate, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            "finSDate": this.datepipe.transform(this.financialYearStart, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            "finEDate": this.datepipe.transform(this.financialYearEnd, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT)
        };
        this.showTable = false;
        this.StockRepService.getstockLedger(payload).subscribe(res => {
            if (res) {
                this.showTable = true;
                // this.stockLedgerRepost.get('accopyType').setValue(["0"]);
                this.dataSource = JSON.parse(res);
            }
        });
    }
    filterOptions(searchValue) {
        this.lowerSearch = searchValue.toLowerCase();
        this.filteredOptions = this.dropdownOptions.filter(option => option.compName.toLowerCase().includes(this.lowerSearch) ||
            option.compShName.toLowerCase().includes(this.lowerSearch) ||
            option.address1.toLowerCase().includes(this.lowerSearch) ||
            option.address2.toLowerCase().includes(this.lowerSearch) ||
            option.compGroupName.toString().includes(this.lowerSearch));
    }
    // GroupfilterOptions(searchValue: string): void {
    //   const lowerSearch = searchValue.toLowerCase();
    //   this.groupFilteredOptions = this.groupdropdown.filter(option => 
    //     option.compGroupName.toLowerCase().includes(lowerSearch)
    //     );
    // }
    resetForm() {
        this.stockLedgerRepost.reset();
        this.dataSource = [];
        this.ProductName.setValue('');
        this.batchWise = false;
        this.showTable = false;
    }
    receiveGroupData(data) {
        this.selectedProducts = [];
        data.forEach(x => {
            this.selectedProducts.push(x.prodId);
        });
    }
    toggleSelectAll(checked) {
        if (checked) {
            this.stockLedgerRepost.get('accId').setValue(this.dropdownOptions);
        }
        else {
            this.stockLedgerRepost.get('accId').setValue([]);
        }
        this.updateSelectAllState();
    }
    toggleSelectAllgroups(checked) {
        if (checked) {
            this.stockLedgerRepost.get('accId').setValue(this.proddropdown);
        }
        else {
            this.stockLedgerRepost.get('accId').setValue([]);
        }
        this.updateSelectAllgroupState();
    }
    onOptionChange() {
        this.updateSelectAllState();
    }
    updateSelectAllState() {
        const selectedOptions = this.stockLedgerRepost.get('accId').value || [];
        this.isAllSelected = selectedOptions.length === this.dropdownOptions.length;
        this.isIndeterminate =
            selectedOptions.length > 0 && selectedOptions.length < this.dropdownOptions.length;
    }
    updateSelectAllgroupState() {
        const selectedOptions = this.stockLedgerRepost.get('accId').value || [];
        this.isAllSelected = selectedOptions.length === this.proddropdown.length;
        this.isIndeterminate =
            selectedOptions.length > 0 && selectedOptions.length < this.proddropdown.length;
    }
    // Calculate the start and end date of the current financial year
    calculateFinancialYearDates() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        // Assuming financial year starts from 1st April and ends on 31st March
        if (currentDate.getMonth() < 3) {
            // If current month is before April, use last year's financial year
            this.financialYearStart = new Date(currentYear - 1, 3, 1); // 1st April of previous year
            this.financialYearEnd = new Date(currentYear, 2, 31); // 31st March of current year
        }
        else {
            // If current month is from April onwards, use current year's financial year
            this.financialYearStart = new Date(currentYear, 3, 1); // 1st April of current year
            this.financialYearEnd = new Date(currentYear + 1, 2, 31); // 31st March of next year
        }
    }
    typeChange(value) {
        // Based on the condition, set 'name' field required or not
        const nameControl = this.stockLedgerRepost.get('accId');
        if (+value == 1) {
            nameControl.setValue([]);
            nameControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]); // Set as required
            this.batchWise = false;
        }
        else {
            nameControl.setValue([]);
            nameControl.clearValidators(); // Remove the required validator
        }
        if (+value == 2) {
            this.stockLedgerRepost.get('compId').setValue(0);
        }
        // Always call updateValueAndValidity after changing the validators
        nameControl.updateValueAndValidity();
    }
    goback() {
        this.router.navigate(['pharma/inventoryReports/stockReports']);
    }
    showAutoComplete(name) {
        if (this.showAutoCompleteData) {
            return this.inwardService.getCustomProductByName(name, this.stockLedgerRepost.controls.compId.value, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["PurchasePrefix"]);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])([]);
        }
    }
    GetBatchesByProductId() {
        this.batches = [];
        const payload = {
            productId: this.ProductName.value.prodId,
            finSDate: this.datepipe.transform(this.financialYearStart, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            finEdate: this.datepipe.transform(this.financialYearEnd, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT)
        };
        this.StockRepService.GetBatchesByProductId(payload).subscribe(r => {
            if (r) {
                this.batches = r;
                this.GetBatchWiseStockLedger();
            }
        });
    }
    GetBatchWiseStockLedger() {
        this.batchewisestock = [];
        const payload = {
            productId: this.ProductName.value.prodId,
            batches: this.batches.toString(),
            fromDate: this.datepipe.transform(this.stockLedgerRepost.value.fromDate, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            toDate: this.datepipe.transform(this.stockLedgerRepost.value.toDate, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            finSDate: this.datepipe.transform(this.financialYearStart, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            finEdate: this.datepipe.transform(this.financialYearEnd, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT)
        };
        this.StockRepService.GetBatchWiseStockLedger(payload).subscribe(r => {
            if (r) {
                this.batchewisestock = r;
                this.batchWise = true;
            }
        });
    }
};
StockLedgerComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _inventory_reports_service__WEBPACK_IMPORTED_MODULE_4__["InventoryReportsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: src_app_distribution_in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_7__["InwardService"] }
];
StockLedgerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-ledger',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-ledger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-ledger/stock-ledger.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stock-ledger.component.scss */ "./src/app/distribution/inventory-reports/stock-reports/stock-ledger/stock-ledger.component.scss")).default]
    })
], StockLedgerComponent);



/***/ }),

/***/ "./src/app/distribution/inventory-reports/stock-reports/stock-position/stock-position.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/stock-reports/stock-position/stock-position.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 24px;\n  font-family: \"Monospace\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  text-align: center;\n}\n\n.pharma-finance {\n  padding: 16px;\n}\n\n.CashReceiptControls {\n  width: 100%;\n}\n\nbutton.mat-raised-button {\n  border-radius: 63px;\n  min-width: 101px;\n  height: 48px;\n  margin: 6px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.dropdown-table .header {\n  font-weight: bold;\n  background-color: #006476;\n  border-bottom: 1px solid #ddd;\n  color: white;\n  padding: 0 5px;\n}\n\n.mat_header {\n  padding-right: 0px !important;\n  pointer-events: none !important;\n  cursor: none;\n  background: #006476;\n  position: -webkit-sticky;\n  position: sticky;\n  top: -1px;\n  z-index: 1;\n}\n\n::ng-deep .mat_header .mat-pseudo-checkbox {\n  visibility: hidden !important;\n  pointer-events: none !important;\n}\n\n::ng-deep .mat_header.mat-active {\n  background: #006476 !important;\n}\n\n.mat_opt {\n  padding-right: 0 !important;\n}\n\n.mat_option {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n}\n\nmat-checkbox {\n  margin: 8px 0;\n}\n\n::ng-deep .account_mat .mat-expansion-panel-body {\n  padding: 14px 16px 24px 16px;\n}\n\n::ng-deep .account_select {\n  max-height: unset !important;\n}\n\n::ng-deep .account_search .mat-form-field-flex {\n  padding-top: 11px !important;\n  padding-bottom: 0px !important;\n}\n\n::ng-deep .account_search .mat-form-field-label-wrapper {\n  top: -1.1em !important;\n}\n\n::ng-deep .mat_checkbox label {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 1200px) {\n  .mat_opt, .mat_header, .mat_option {\n    line-height: unset !important;\n    height: unset !important;\n    white-space: normal !important;\n    -webkit-text-emphasis: unset !important;\n            text-emphasis: unset !important;\n    overflow: unset !important;\n    word-wrap: break-word;\n  }\n}\n\n.action-icons {\n  display: flex;\n  justify-content: flex-end;\n  /* Align icons to the right */\n  gap: 16px;\n  /* Space between buttons */\n  margin-bottom: 8px;\n  /* Space below the buttons */\n}\n\n.icon-img {\n  width: 37px;\n  height: 38px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ludmVudG9yeS1yZXBvcnRzL3N0b2NrLXJlcG9ydHMvc3RvY2stcG9zaXRpb24vQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxpbnZlbnRvcnktcmVwb3J0c1xcc3RvY2stcmVwb3J0c1xcc3RvY2stcG9zaXRpb25cXHN0b2NrLXBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vaW52ZW50b3J5LXJlcG9ydHMvc3RvY2stcmVwb3J0cy9zdG9jay1wb3NpdGlvbi9zdG9jay1wb3NpdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0E7SUFDRSw2QkFBQTtJQUNBLHdCQUFBO0lBQ0EsOEJBQUE7SUFDQSx1Q0FBQTtZQUFBLCtCQUFBO0lBQ0EsMEJBQUE7SUFDQSxxQkFBQTtFQ0FBO0FBQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFBMkIsNkJBQUE7RUFDM0IsU0FBQTtFQUFXLDBCQUFBO0VBQ1gsa0JBQUE7RUFBb0IsNEJBQUE7QUNHdEI7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vaW52ZW50b3J5LXJlcG9ydHMvc3RvY2stcmVwb3J0cy9zdG9jay1wb3NpdGlvbi9zdG9jay1wb3NpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waGFybWFjeUhlYWRpbmcge1xuICBjb2xvcjogIzJmOGJiZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogJ01vbm9zcGFjZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBoYXJtYS1maW5hbmNlIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgbWluLXdpZHRoOiAxMDFweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW46IDZweFxufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRyb3Bkb3duLXRhYmxlIC5oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjQ3NjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5tYXRfaGVhZGVye1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMDA2NDc2O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IC0xcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbjo6bmctZGVlcCAubWF0X2hlYWRlciAubWF0LXBzZXVkby1jaGVja2JveHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0X2hlYWRlci5tYXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAwNjQ3NiAhaW1wb3J0YW50O1xufVxuXG4ubWF0X29wdHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4ubWF0X29wdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxubWF0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuOjpuZy1kZWVwIC5hY2NvdW50X21hdCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTRweCAxNnB4IDI0cHggMTZweDtcbn1cblxuOjpuZy1kZWVwIC5hY2NvdW50X3NlbGVjdCB7XG4gICAgbWF4LWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hY2NvdW50X3NlYXJjaCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIHBhZGRpbmctdG9wOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hY2NvdW50X3NlYXJjaCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIHRvcDogLTEuMWVtICFpbXBvcnRhbnQ7XG59XG5cblxuOjpuZy1kZWVwIC5tYXRfY2hlY2tib3ggbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbi5tYXRfb3B0LCAubWF0X2hlYWRlciwgLm1hdF9vcHRpb257XG4gIGxpbmUtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC1lbXBoYXNpczogdW5zZXQgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbn1cbi5hY3Rpb24taWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBBbGlnbiBpY29ucyB0byB0aGUgcmlnaHQgKi9cbiAgZ2FwOiAxNnB4OyAvKiBTcGFjZSBiZXR3ZWVuIGJ1dHRvbnMgKi9cbiAgbWFyZ2luLWJvdHRvbTogOHB4OyAvKiBTcGFjZSBiZWxvdyB0aGUgYnV0dG9ucyAqL1xufVxuXG4uaWNvbi1pbWcge1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW46IDNweDtcbn0iLCIucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBoYXJtYS1maW5hbmNlIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgbWluLXdpZHRoOiAxMDFweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW46IDZweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kcm9wZG93bi10YWJsZSAuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY0NzY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4ubWF0X2hlYWRlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwMDY0NzY7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogLTFweDtcbiAgei1pbmRleDogMTtcbn1cblxuOjpuZy1kZWVwIC5tYXRfaGVhZGVyIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0X2hlYWRlci5tYXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAwNjQ3NiAhaW1wb3J0YW50O1xufVxuXG4ubWF0X29wdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLm1hdF9vcHRpb24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbjo6bmctZGVlcCAuYWNjb3VudF9tYXQgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE0cHggMTZweCAyNHB4IDE2cHg7XG59XG5cbjo6bmctZGVlcCAuYWNjb3VudF9zZWxlY3Qge1xuICBtYXgtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFjY291bnRfc2VhcmNoIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgcGFkZGluZy10b3A6IDExcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFjY291bnRfc2VhcmNoIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgdG9wOiAtMS4xZW0gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXRfY2hlY2tib3ggbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1hdF9vcHQsIC5tYXRfaGVhZGVyLCAubWF0X29wdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB0ZXh0LWVtcGhhc2lzOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfVxufVxuLmFjdGlvbi1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIC8qIEFsaWduIGljb25zIHRvIHRoZSByaWdodCAqL1xuICBnYXA6IDE2cHg7XG4gIC8qIFNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC8qIFNwYWNlIGJlbG93IHRoZSBidXR0b25zICovXG59XG5cbi5pY29uLWltZyB7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbjogM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/distribution/inventory-reports/stock-reports/stock-position/stock-position.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/stock-reports/stock-position/stock-position.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: StockPositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPositionComponent", function() { return StockPositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inventory_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../inventory-reports.service */ "./src/app/distribution/inventory-reports/inventory-reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/app-constants */ "./src/app/shared/app-constants.ts");



// import { FinanceReportsService } from '../finance-reports.service';




let StockPositionComponent = class StockPositionComponent {
    constructor(fb, router, StockRepService, datepipe) {
        this.fb = fb;
        this.router = router;
        this.StockRepService = StockRepService;
        this.datepipe = datepipe;
        this.step = 0;
        this.dropdownOptions = [];
        this.groupdropdown = [];
        this.filteredOptions = [];
        this.groupFilteredOptions = [];
        // Updated with additional columns
        // dropdownOptions = [
        //   { id: 1, name: 'Account A', address: '123 Main St', city: 'New York', state: 'NY' },
        //   { id: 2, name: 'Account B', address: '456 Elm St', city: 'Los Angeles', state: 'CA' },
        //   { id: 3, name: 'Account C', address: '789 Oak St', city: 'Chicago', state: 'IL' },
        //   { id: 4, name: 'Account D', address: '101 Pine St', city: 'Houston', state: 'TX' }
        // ];
        // dropdownOptions = [
        //   { id: 1, name: 'A', address: '1', city: 'N', state: 'N' },
        //   { id: 2, name: 'B', address: '4', city: 'L', state: 'C' },
        //   ...
        // ];
        this.isAllSelected = false;
        this.isIndeterminate = false;
        this.showTable = false;
        this.isshowExcel = false;
        this.selectedAccounts = [];
        this.customAccountsOptsTable = {
            panelWidth: 800,
            columns: [
                {
                    name: 'Select All', value: (obj) => obj[''],
                    fxFlex: 10,
                    fxFlex1: 0
                },
                { name: 'Company Name', value: (obj) => obj['compName'] ? obj['compName'] : '', fxFlex: 34, fxFlex1: 34, isKeyColumn: true },
                { name: 'Shot Name', value: (obj) => obj['compShName'] ? obj['compShName'] : '', fxFlex: 14, fxFlex1: 14 },
                { name: 'Address1', value: (obj) => obj['address1'] ? obj['address1'] : '', fxFlex: 16, fxFlex1: 16 },
                { name: 'Address2', value: (obj) => obj['address2'] ? obj['address2'] : '', fxFlex: 24, fxFlex1: 24 },
                { name: 'Company Group Name', value: (obj) => obj['compGroupName'] ? obj['compGroupName'] : '', fxFlex: 12, fxFlex1: 12 },
            ]
        };
        this.filterKeys = ['compName', 'compShName', 'compGroupName'];
        this.customCmpGroupsOptsTable = {
            panelWidth: 500,
            columns: [
                {
                    name: 'Select All', value: (obj) => obj[''],
                    fxFlex: 10,
                    fxFlex1: 0
                },
                { name: 'Company Group Name', value: (obj) => obj['compGroupName'] ? obj['compGroupName'] : '', fxFlex: 34, fxFlex1: 34, isKeyColumn: true },
            ]
        };
        this.groupfilterKeys = ['compGroupName'];
        // Datepicker filter to disable dates outside the financial year
        this.dateFilter = (date) => {
            if (!date)
                return false;
            return date >= this.financialYearStart && date <= this.financialYearEnd;
        };
        this.today = new Date().toISOString().split('T')[0];
        this.stockStatementRepost = this.fb.group({
            fromDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accopyType: [''],
            accId: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.getCompanies();
        this.getCompaniesGroups();
        this.calculateFinancialYearDates();
        // this.createForm();
        this.stockStatementRepost.get('accId').valueChanges.subscribe((selectedValues) => {
            if (selectedValues.length > 0) {
                // Preserve previously selected accounts even after filtering
                this.selectedAccounts = this.dropdownOptions.filter(account => selectedValues.some((selected) => selected.compName === account.compName));
                //   const commonObjects = this.filteredOptions.filter(person1 =>
                //     this.selectedAccounts.some(person2 => person2.compId === person1.compId)
                //   );
                //   if(svalues.length > 0){
                //     svalues.forEach(x=>{
                //       const duplival = this.selectedAccounts.find(y=>y.compId == x.compId);
                //       if(!duplival){
                //       this.selectedAccounts.push(x);
                //       }
                //     })
            }
            //  else {
            //   this.selectedAccounts = [];
            // }
        });
    }
    receiveData(data) {
        this.selectedCompanies = [];
        data.forEach(x => {
            this.selectedCompanies.push(x.compId);
        });
    }
    receiveGroupData(data) {
        this.selectedCompanies = [];
        data.forEach(x => {
            this.selectedCompanies.push(x.compGroupId);
        });
    }
    setStep(index) {
        this.step = index;
    }
    getCompanies() {
        this.StockRepService.getCompanyList().subscribe(res => {
            console.log(res);
            this.dropdownOptions = res;
            this.filteredOptions = res;
        });
    }
    ;
    getCompaniesGroups() {
        this.StockRepService.getGroupCompanyList().subscribe(res => {
            console.log(res);
            this.groupdropdown = res;
            this.groupFilteredOptions = [...this.groupdropdown];
        });
    }
    ;
    generateReport() {
        console.log('Selected Accounts:', this.stockStatementRepost.value);
        // let toDate = this.stockStatementRepost.value.toDate.split("T")
        let accId = [];
        this.accountType = Number(this.stockStatementRepost.controls.accopyType.value);
        //  if(this.stockStatementRepost.value.accId.length > 0){ 
        //   if(this.stockStatementRepost.value.accopyType == 1){
        //     accId = this.stockStatementRepost.value.accId.map(item => item.compId).toString();
        //   }
        //   else if(this.stockStatementRepost.value.accopyType == 2){
        //     accId = this.stockStatementRepost.value.accId.map(item => item.compGroupId).toString();
        //   }
        //  }
        const acctype = +this.stockStatementRepost.get('accopyType').value;
        if (acctype == 1) {
            if (this.selectedCompanies.length == 0) {
                return;
            }
        }
        const payload = {
            "stmntOption": Number(this.stockStatementRepost.controls.accopyType.value),
            "compGrps": this.selectedCompanies ? this.selectedCompanies.toString() : "",
            "fromDate": this.datepipe.transform(this.stockStatementRepost.value.fromDate, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            // this.stockStatementRepost.value.fromDate,
            "toDate": this.datepipe.transform(this.stockStatementRepost.value.toDate, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            "finSDate": this.datepipe.transform(this.financialYearStart, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            "finEDate": this.datepipe.transform(this.financialYearEnd, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT)
        };
        console.log('payload', payload);
        this.showTable = false;
        this.StockRepService.getstockStstement(payload).subscribe(res => {
            if (res) {
                this.showTable = true;
                this.isshowExcel = true;
                this.stockStatementRepost.get('accopyType').setValue(["0"]);
                console.log('res', res);
                this.dataSource = JSON.parse(res);
            }
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
    exportToExcel(data) {
        const payload = {
            "stmntOption": this.accountType ? this.accountType : 0,
            "compGrps": this.selectedCompanies ? this.selectedCompanies.toString() : "",
            "fromDate": this.datepipe.transform(this.stockStatementRepost.value.fromDate, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            "toDate": this.datepipe.transform(this.stockStatementRepost.value.toDate, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            "finSDate": this.datepipe.transform(this.financialYearStart, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            "finEDate": this.datepipe.transform(this.financialYearEnd, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT)
        };
        this.StockRepService.gettockStatementExcel(payload).subscribe((res) => {
            const base64String = res;
            const fileName = 'StockStatementReport.xlsx'; // Desired file name
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
    // filterOptions(searchValue: string): void {
    //   const lowerSearch = searchValue.toLowerCase();
    //   this.filteredOptions = this.dropdownOptions.filter(option => 
    //     option.compName.toLowerCase().includes(lowerSearch) ||
    //     option.compShName.toLowerCase().includes(lowerSearch) ||
    //     option.address1.toLowerCase().includes(lowerSearch) ||
    //     option.address2.toLowerCase().includes(lowerSearch) ||
    //     option.compGroupName.toString().includes(lowerSearch)
    //     );
    //     const commonObjects = this.filteredOptions.filter(person1 =>
    //       this.selectedAccounts.some(person2 => person2.compId === person1.compId)
    //     );
    //     this.stockStatementRepost.get('accId').setValue(commonObjects);
    // }
    filterOptions(searchValue) {
        const lowerSearch = searchValue.toLowerCase();
        this.filteredOptions = this.dropdownOptions.filter(option => {
            const compName = option.compName ? option.compName.toLowerCase() : '';
            const compShName = option.compShName ? option.compShName.toLowerCase() : '';
            const address1 = option.address1 ? option.address1.toLowerCase() : '';
            const address2 = option.address2 ? option.address2.toLowerCase() : '';
            const compGroupName = option.compGroupName ? option.compGroupName.toString() : '';
            return compName.includes(lowerSearch) ||
                compShName.includes(lowerSearch) ||
                address1.includes(lowerSearch) ||
                address2.includes(lowerSearch) ||
                compGroupName.includes(lowerSearch);
        });
    }
    GroupfilterOptions(searchValue) {
        const lowerSearch = searchValue.toLowerCase();
        this.groupFilteredOptions = this.groupdropdown.filter(option => {
            const cmpGroupname = option.compGroupName ? option.compGroupName.toLowerCase() : '';
            return cmpGroupname.includes(lowerSearch);
        });
    }
    resetForm() {
        this.stockStatementRepost.reset();
        this.dataSource = [];
    }
    toggleSelectAll(checked) {
        if (checked) {
            this.stockStatementRepost.get('accId').setValue(this.dropdownOptions);
        }
        else {
            this.stockStatementRepost.get('accId').setValue([]);
        }
        this.updateSelectAllState();
    }
    toggleSelectAllgroups(checked) {
        if (checked) {
            this.stockStatementRepost.get('accId').setValue(this.groupdropdown);
        }
        else {
            this.stockStatementRepost.get('accId').setValue([]);
        }
        this.updateSelectAllgroupState();
    }
    onOptionChange() {
        this.updateSelectAllState();
    }
    updateSelectAllState() {
        const selectedOptions = this.stockStatementRepost.get('accId').value || [];
        this.isAllSelected = selectedOptions.length === this.dropdownOptions.length;
        this.isIndeterminate =
            selectedOptions.length > 0 && selectedOptions.length < this.dropdownOptions.length;
    }
    updateSelectAllgroupState() {
        const selectedOptions = this.stockStatementRepost.get('accId').value || [];
        this.isAllSelected = selectedOptions.length === this.groupdropdown.length;
        this.isIndeterminate =
            selectedOptions.length > 0 && selectedOptions.length < this.groupdropdown.length;
    }
    // Calculate the start and end date of the current financial year
    calculateFinancialYearDates() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        // Assuming financial year starts from 1st April and ends on 31st March
        if (currentDate.getMonth() < 3) {
            // If current month is before April, use last year's financial year
            this.financialYearStart = new Date(currentYear - 1, 3, 1); // 1st April of previous year
            this.financialYearEnd = new Date(currentYear, 2, 31); // 31st March of current year
        }
        else {
            // If current month is from April onwards, use current year's financial year
            this.financialYearStart = new Date(currentYear, 3, 1); // 1st April of current year
            this.financialYearEnd = new Date(currentYear + 1, 2, 31); // 31st March of next year
        }
    }
    typeChange(value) {
        console.log(value);
        // Based on the condition, set 'name' field required or not
        const nameControl = this.stockStatementRepost.get('accId');
        if (+value == 1) {
            nameControl.setValue([]);
            nameControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]); // Set as required
        }
        else {
            nameControl.setValue([]);
            nameControl.clearValidators(); // Remove the required validator
        }
        // Always call updateValueAndValidity after changing the validators
        nameControl.updateValueAndValidity();
    }
    goback() {
        this.router.navigate(['pharma/inventoryReports/stockReports']);
    }
    clearSelectedItems(isChecked) {
        if (isChecked) {
            // Clear selected items
            this.stockStatementRepost.get('accId').setValue([]);
            this.selectedAccounts = [];
        }
    }
};
StockPositionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _inventory_reports_service__WEBPACK_IMPORTED_MODULE_4__["InventoryReportsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
StockPositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-position',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-position.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-position/stock-position.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stock-position.component.scss */ "./src/app/distribution/inventory-reports/stock-reports/stock-position/stock-position.component.scss")).default]
    })
], StockPositionComponent);



/***/ }),

/***/ "./src/app/distribution/inventory-reports/stock-reports/stock-reports.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/stock-reports/stock-reports.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9pbnZlbnRvcnktcmVwb3J0cy9zdG9jay1yZXBvcnRzL3N0b2NrLXJlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/distribution/inventory-reports/stock-reports/stock-reports.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/stock-reports/stock-reports.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StockReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockReportsComponent", function() { return StockReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let StockReportsComponent = class StockReportsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.authDetails = JSON.parse(localStorage.getItem("menuItems"));
        this.authDetails.filter(x => {
            if (x.menuName == 'Inventory Reports') {
                var menus = x.menus;
                menus.filter(y => {
                    if (y.menuName == 'Stock Reports') {
                        this.menuArray = y.menus;
                    }
                });
            }
        });
    }
    report(data) {
        var r = data.split("ebusiness");
        r = r[1];
        console.log(r);
        this.router.navigate([r]);
        //   debugger;
        //  console.log(data);
        //  this.router.navigate(['.pharma/inventoryReports/stockReports/stockPosition']);
    }
};
StockReportsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StockReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stock-reports.component.scss */ "./src/app/distribution/inventory-reports/stock-reports/stock-reports.component.scss")).default]
    })
], StockReportsComponent);



/***/ }),

/***/ "./src/app/distribution/inventory-reports/stock-reports/stock-statement/stock-statement.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/stock-reports/stock-statement/stock-statement.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 24px;\n  font-family: \"Monospace\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  text-align: right;\n}\n\n.pharma-finance {\n  padding: 16px;\n}\n\n.CashReceiptControls {\n  width: 100%;\n}\n\nbutton.mat-raised-button {\n  border-radius: 63px;\n  min-width: 101px;\n  height: 48px;\n  margin: 6px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-select-panel {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.dropdown-table {\n  display: grid;\n  grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr;\n  /* Adjust column widths */\n  align-items: center;\n  gap: 16px;\n  padding: 8px;\n}\n\n.dropdown-table.header {\n  font-weight: bold;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row:nth-child(even) {\n  background-color: #fafafa;\n}\n\n.dropdown-table span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\nmat-checkbox {\n  margin: 8px 0;\n}\n\n.search-container {\n  padding: 8px;\n}\n\n.search-field {\n  width: 30%;\n}\n\n.action-icons {\n  display: flex;\n  justify-content: flex-end;\n  /* Align icons to the right */\n  gap: 16px;\n  /* Space between buttons */\n  margin-bottom: 8px;\n  /* Space below the buttons */\n}\n\n.icon-img {\n  width: 37px;\n  height: 38px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ludmVudG9yeS1yZXBvcnRzL3N0b2NrLXJlcG9ydHMvc3RvY2stc3RhdGVtZW50L0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcaW52ZW50b3J5LXJlcG9ydHNcXHN0b2NrLXJlcG9ydHNcXHN0b2NrLXN0YXRlbWVudFxcc3RvY2stc3RhdGVtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vaW52ZW50b3J5LXJlcG9ydHMvc3RvY2stcmVwb3J0cy9zdG9jay1zdGF0ZW1lbnQvc3RvY2stc3RhdGVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0VBQWdELHlCQUFBO0VBQ2hELG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0UseUJBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGFBQUE7QUNFSjs7QURBRTtFQUNFLFlBQUE7QUNHSjs7QURBRTtFQUNFLFVBQUE7QUNHSjs7QURERTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUEyQiw2QkFBQTtFQUMzQixTQUFBO0VBQVcsMEJBQUE7RUFDWCxrQkFBQTtFQUFvQiw0QkFBQTtBQ094Qjs7QURKRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9pbnZlbnRvcnktcmVwb3J0cy9zdG9jay1yZXBvcnRzL3N0b2NrLXN0YXRlbWVudC9zdG9jay1zdGF0ZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhhcm1hY3lIZWFkaW5nIHtcbiAgICBjb2xvcjogIzJmOGJiZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb25vc3BhY2UnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICBcbiAgLnBoYXJtYS1maW5hbmNlIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIFxuICAuQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIGJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgICBtaW4td2lkdGg6IDEwMXB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBtYXJnaW46IDZweFxuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgM2ZyIDJmciAyZnIgMmZyOyAvKiBBZGp1c3QgY29sdW1uIHdpZHRocyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLmhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLnJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLnJvdzpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZSBzcGFuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG4gIFxuICBtYXQtY2hlY2tib3gge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICBcbiAgLnNlYXJjaC1maWVsZCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICAuYWN0aW9uLWljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IC8qIEFsaWduIGljb25zIHRvIHRoZSByaWdodCAqL1xuICAgIGdhcDogMTZweDsgLyogU3BhY2UgYmV0d2VlbiBidXR0b25zICovXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4OyAvKiBTcGFjZSBiZWxvdyB0aGUgYnV0dG9ucyAqL1xuICB9XG4gIFxuICAuaWNvbi1pbWcge1xuICAgIHdpZHRoOiAzN3B4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgbWFyZ2luOiAzcHg7XG4gIH0iLCIucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucGhhcm1hLWZpbmFuY2Uge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA2M3B4O1xuICBtaW4td2lkdGg6IDEwMXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbjogNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1zZWxlY3QtcGFuZWwge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5kcm9wZG93bi10YWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAzZnIgMmZyIDJmciAyZnI7XG4gIC8qIEFkanVzdCBjb2x1bW4gd2lkdGhzICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uZHJvcGRvd24tdGFibGUuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uZHJvcGRvd24tdGFibGUucm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5kcm9wZG93bi10YWJsZS5yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLmRyb3Bkb3duLXRhYmxlIHNwYW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZzogNHB4O1xufVxuXG5tYXQtY2hlY2tib3gge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnNlYXJjaC1maWVsZCB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5hY3Rpb24taWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAvKiBBbGlnbiBpY29ucyB0byB0aGUgcmlnaHQgKi9cbiAgZ2FwOiAxNnB4O1xuICAvKiBTcGFjZSBiZXR3ZWVuIGJ1dHRvbnMgKi9cbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAvKiBTcGFjZSBiZWxvdyB0aGUgYnV0dG9ucyAqL1xufVxuXG4uaWNvbi1pbWcge1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW46IDNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/distribution/inventory-reports/stock-reports/stock-statement/stock-statement.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/distribution/inventory-reports/stock-reports/stock-statement/stock-statement.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StockStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockStatementComponent", function() { return StockStatementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inventory_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../inventory-reports.service */ "./src/app/distribution/inventory-reports/inventory-reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/app-constants */ "./src/app/shared/app-constants.ts");



// import { FinanceReportsService } from '../finance-reports.service';




let StockStatementComponent = class StockStatementComponent {
    constructor(fb, router, StockRepService, datepipe) {
        this.fb = fb;
        this.router = router;
        this.StockRepService = StockRepService;
        this.datepipe = datepipe;
        this.step = 0;
        this.dropdownOptions = [];
        this.groupdropdown = [];
        this.filteredOptions = [];
        this.groupFilteredOptions = [];
        this.isAllSelected = false;
        this.isIndeterminate = false;
        this.showTable = false;
        this.isShowExcelpdf = false;
        this.customAccountsOptsTable = {
            panelWidth: 800,
            columns: [
                {
                    name: 'Select All', value: (obj) => obj[''],
                    fxFlex: 10,
                    fxFlex1: 0
                },
                { name: 'Company Name', value: (obj) => obj['compName'] ? obj['compName'] : '', fxFlex: 34, fxFlex1: 34, isKeyColumn: true },
                { name: 'Shot Name', value: (obj) => obj['compShName'] ? obj['compShName'] : '', fxFlex: 14, fxFlex1: 14 },
                { name: 'Address1', value: (obj) => obj['address1'] ? obj['address1'] : '', fxFlex: 16, fxFlex1: 16 },
                { name: 'Address2', value: (obj) => obj['address2'] ? obj['address2'] : '', fxFlex: 24, fxFlex1: 24 },
                { name: 'Company Group Name', value: (obj) => obj['compGroupName'] ? obj['compGroupName'] : '', fxFlex: 12, fxFlex1: 12 },
            ]
        };
        this.filterKeys = ['compName', 'compShName', 'compGroupName'];
        // Datepicker filter to disable dates outside the financial year
        this.dateFilter = (date) => {
            if (!date)
                return false;
            return date >= this.financialYearStart && date <= this.financialYearEnd;
        };
        this.today = new Date().toISOString().split('T')[0];
        this.stockPositionRepost = this.fb.group({
            fromDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accopyType: [''],
            accId: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.getCompanies();
        // this.getCompaniesGroups();
        this.calculateFinancialYearDates();
        // this.createForm();
    }
    setStep(index) {
        this.step = index;
    }
    receiveData(data) {
        this.selectedCompanies = [];
        data.forEach(x => {
            this.selectedCompanies.push(x.compId);
        });
    }
    getCompanies() {
        this.StockRepService.getCompanyList().subscribe(res => {
            console.log(res);
            this.dropdownOptions = res;
            // this.filteredOptions = [...this.dropdownOptions];
        });
    }
    ;
    getCompaniesGroups() {
        this.StockRepService.getGroupCompanyList().subscribe(res => {
            console.log(res);
            this.groupdropdown = res;
            this.groupFilteredOptions = [...this.groupdropdown];
        });
    }
    ;
    generateReport() {
        console.log('Selected Companies:', this.stockPositionRepost.value);
        // let toDate = this.stockPositionRepost.value.toDate.split("T")
        let accId = [];
        //  if(this.stockPositionRepost.value.accId.length > 0){ 
        //     accId = this.stockPositionRepost.value.accId.map(item => item.compId).toString();
        //  }
        if (this.selectedCompanies.length == 0) {
            return;
        }
        const payload = {
            "reportOption": Number(this.stockPositionRepost.controls.accopyType.value),
            "companies": this.selectedCompanies ? this.selectedCompanies.toString() : "",
            // "fromDate": this.datepipe.transform(this.stockPositionRepost.value.fromDate, AppConst.DATE_FORMAT), 
            // this.stockPositionRepost.value.fromDate,
            // "toDate": this.datepipe.transform(this.stockPositionRepost.value.toDate,AppConst.DATE_FORMAT),
            "finSDate": this.datepipe.transform(this.financialYearStart, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            "finEDate": this.datepipe.transform(this.financialYearEnd, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT)
        };
        console.log('payload', payload);
        this.showTable = false;
        this.StockRepService.getstockPosition(payload).subscribe(res => {
            if (res) {
                this.showTable = true;
                this.isShowExcelpdf = true;
                console.log('res', res);
                this.dataSource = JSON.parse(res);
                this.dropdownOptions = [];
            }
        });
    }
    exportToExcel(data) {
        let reBody = {
            companies: this.selectedCompanies ? this.selectedCompanies.toString() : "",
            reportOption: Number(this.stockPositionRepost.controls.accopyType.value),
            finSDate: this.datepipe.transform(this.financialYearStart, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT),
            finEDate: this.datepipe.transform(this.financialYearEnd, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConst"].DATE_FORMAT)
        };
        this.StockRepService.gettockPositionExcel(reBody).subscribe((res) => {
            const base64String = res;
            const fileName = 'StockPositionReport.xlsx'; // Desired file name
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
    }
    filterOptions(searchValue) {
        const lowerSearch = searchValue.toLowerCase();
        this.filteredOptions = this.dropdownOptions.filter(option => {
            const compName = option.compName ? option.compName.toLowerCase() : '';
            const compShName = option.compShName ? option.compShName.toLowerCase() : '';
            const address1 = option.address1 ? option.address1.toLowerCase() : '';
            const address2 = option.address2 ? option.address2.toLowerCase() : '';
            const compGroupName = option.compGroupName ? option.compGroupName.toString() : '';
            return compName.includes(lowerSearch) ||
                compShName.includes(lowerSearch) ||
                address1.includes(lowerSearch) ||
                address2.includes(lowerSearch) ||
                compGroupName.includes(lowerSearch);
        });
        // this.filteredOptions = this.dropdownOptions.filter(option => 
        //   option.compName.toLowerCase().includes(lowerSearch) ||
        //   option.compShName.toLowerCase().includes(lowerSearch) ||
        //   option.address1.toLowerCase().includes(lowerSearch) ||
        //   option.address2.toLowerCase().includes(lowerSearch) ||
        //   option.compGroupName.toString().includes(lowerSearch)
        //   );
    }
    GroupfilterOptions(searchValue) {
        const lowerSearch = searchValue.toLowerCase();
        this.groupFilteredOptions = this.groupdropdown.filter(option => option.compGroupName.toLowerCase().includes(lowerSearch));
    }
    resetForm() {
        this.stockPositionRepost.reset();
        this.dataSource = [];
        this.dropdownOptions = [];
    }
    toggleSelectAll(checked) {
        if (checked) {
            this.stockPositionRepost.get('accId').setValue(this.dropdownOptions);
        }
        else {
            this.stockPositionRepost.get('accId').setValue([]);
        }
        this.updateSelectAllState();
    }
    toggleSelectAllgroups(checked) {
        if (checked) {
            this.stockPositionRepost.get('accId').setValue(this.groupdropdown);
        }
        else {
            this.stockPositionRepost.get('accId').setValue([]);
        }
        this.updateSelectAllgroupState();
    }
    onOptionChange() {
        this.updateSelectAllState();
    }
    updateSelectAllState() {
        const selectedOptions = this.stockPositionRepost.get('accId').value || [];
        this.isAllSelected = selectedOptions.length === this.dropdownOptions.length;
        this.isIndeterminate =
            selectedOptions.length > 0 && selectedOptions.length < this.dropdownOptions.length;
    }
    updateSelectAllgroupState() {
        const selectedOptions = this.stockPositionRepost.get('accId').value || [];
        this.isAllSelected = selectedOptions.length === this.groupdropdown.length;
        this.isIndeterminate =
            selectedOptions.length > 0 && selectedOptions.length < this.groupdropdown.length;
    }
    // Calculate the start and end date of the current financial year
    calculateFinancialYearDates() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        // Assuming financial year starts from 1st April and ends on 31st March
        if (currentDate.getMonth() < 3) {
            // If current month is before April, use last year's financial year
            this.financialYearStart = new Date(currentYear - 1, 3, 1); // 1st April of previous year
            this.financialYearEnd = new Date(currentYear, 2, 31); // 31st March of current year
        }
        else {
            // If current month is from April onwards, use current year's financial year
            this.financialYearStart = new Date(currentYear, 3, 1); // 1st April of current year
            this.financialYearEnd = new Date(currentYear + 1, 2, 31); // 31st March of next year
        }
    }
    typeChange(value) {
        console.log(value);
        // Based on the condition, set 'name' field required or not
        const nameControl = this.stockPositionRepost.get('accId');
        if (+value == 1) {
            nameControl.setValue([]);
            nameControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]); // Set as required
        }
        else {
            nameControl.setValue([]);
            nameControl.clearValidators(); // Remove the required validator
        }
        // Always call updateValueAndValidity after changing the validators
        nameControl.updateValueAndValidity();
    }
    goback() {
        this.router.navigate(['pharma/inventoryReports/stockReports']);
    }
};
StockStatementComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _inventory_reports_service__WEBPACK_IMPORTED_MODULE_4__["InventoryReportsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
];
StockStatementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-statement',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-statement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/inventory-reports/stock-reports/stock-statement/stock-statement.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stock-statement.component.scss */ "./src/app/distribution/inventory-reports/stock-reports/stock-statement/stock-statement.component.scss")).default]
    })
], StockStatementComponent);



/***/ }),

/***/ "./src/app/shared/http-services/inventory-reports/inventory-http.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/http-services/inventory-reports/inventory-http.service.ts ***!
  \**********************************************************************************/
/*! exports provided: InventoryHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryHttpService", function() { return InventoryHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-constants */ "./src/app/shared/app-constants.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/shared/services/http.service.ts");




let InventoryHttpService = class InventoryHttpService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getCompanies() {
        return this.httpService.doGet(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APIConst"].companiesMaster);
    }
    getCompanyGroups() {
        return this.httpService.doGet(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APIConst"].companiesGroups);
    }
    getStockStatemt(payload) {
        return this.httpService.doPost(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APIConst"].stockStatement, payload);
    }
    getStockPosition(payload) {
        return this.httpService.doPost(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APIConst"].stockPosition, payload);
    }
    getStockLedger(payload) {
        return this.httpService.doPost(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APIConst"].stockLedger, payload);
    }
    getProducts(payload) {
        return this.httpService.doPost(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APIConst"].GETCUSTOMPRODUCTS, payload);
    }
    getStockPositionExcel(payload) {
        return this.httpService.doPost(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APIConst"].stockPositionExcel, payload);
    }
    getStockStatementExcel(payload) {
        return this.httpService.doPost(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APIConst"].stockStatementExcel, payload);
    }
    GetBatchesByProductId(payload) {
        return this.httpService.doGet(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APIConst"].batchesByProductId, payload);
    }
    GetBatchWiseStockLedger(payload) {
        return this.httpService.doGet(_app_constants__WEBPACK_IMPORTED_MODULE_2__["APIConst"].batchWiseStockLedger, payload);
    }
};
InventoryHttpService.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
InventoryHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InventoryHttpService);



/***/ })

}]);
//# sourceMappingURL=inventory-reports-inventory-reports-module-es2015.js.map