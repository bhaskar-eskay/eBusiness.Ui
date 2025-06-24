(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finance-reports-finance-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/account-copy/account-copy.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/account-copy/account-copy.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharma-finance\">\n  <div class=\"heading-container\">\n    <h4 class=\"pharmacyHeading\">Account Copy</h4>\n  </div>\n  <br>\n\n  <mat-accordion>\n    <mat-expansion-panel class=\"account_mat\" [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n      <form [formGroup]=\"cashReceiptRegisterFormGroup\">\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"CashReceiptControls\">\n          <!-- From Date -->\n          <mat-form-field fxFlex=\"20\" fxFlex.xs=\"30\" class=\"e_mat_date\" appearance=\"outline\">\n            <mat-label>From Date</mat-label>\n            <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\"\n              [matDatepickerFilter]=\"dateFilter\">\n            <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #fromDatePicker></mat-datepicker>\n            <mat-error class=\"error-msg\">\n              <span>From Date is Required...!</span>\n            </mat-error>\n          </mat-form-field>\n\n          <!-- To Date -->\n          <mat-form-field fxFlex=\"20\" fxFlex.xs=\"30\" class=\"e_mat_date\" appearance=\"outline\">\n            <mat-label>To Date</mat-label>\n            <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\" [matDatepickerFilter]=\"dateFilter\">\n            <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #toDatePicker></mat-datepicker>\n            <mat-error class=\"error-msg\">\n              <span>To Date is Required...!</span>\n            </mat-error>\n          </mat-form-field>\n\n          <!-- Sort Option -->\n          <mat-form-field fxFlex=\"20\" fxFlex.xs=\"28\" appearance=\"outline\">\n            <mat-label>Type</mat-label>\n            <mat-select formControlName=\"accopyType\">\n              <mat-option value=\"1\">Account Copy</mat-option>\n              <mat-option value=\"2\">Ledger</mat-option>\n            </mat-select>\n            <mat-error class=\"error-msg\">\n              <span>Type is Required...!</span>\n            </mat-error>\n          </mat-form-field>\n          \n          <div fxFlex=\"100\" class=\"mt-1\" *ngIf=\"cashReceiptRegisterFormGroup.get('accopyType')?.value === '1'\">\n            <app-auto-select (outPutEmitter)=\"receiveData($event)\" [optionsTableDefinition]=\"customAccountsOptsTable\" [filterKeys]=\"filterKeys\" [dataSource]=\"dropdownOptions\"></app-auto-select>\n          </div>\n\n        </div>\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"button-group justify-content-end\">\n          <button type=\"button\" mat-raised-button color=\"primary\" [disabled]=\"cashReceiptRegisterFormGroup.invalid\"\n            (click)=\"generateReport()\">Generate</button>\n          <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"resetForm()\">Reset</button>\n          <button type=\"button\" mat-raised-button color=\"primary\" class=\"my-1\" (click)=\"goback()\">Back</button>\n          <div class=\"action-icons\" *ngIf=\"isShowExcelpdf\">\n            <!-- Excel Export Button -->\n            <button mat-icon-button (click)=\"exportToExcel(cashReceiptRegisterFormGroup.value)\">\n              <img src=\"assets/new_xl.png\" width=\"30px\" alt=\"Excel\" class=\"icon-img\" />\n            </button>\n            \n      \n            <!-- PDF Export Button -->\n            <button mat-icon-button (click)=\"exportToPdf()\">\n              <img src=\"assets/new_pdf.png\" width=\"30px\" alt=\"PDF\" class=\"icon-img\" />\n            </button>\n          </div>\n        </div>\n      </form>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n\n\n<div class=\"mt-2\">\n  <div class=\"master-table\" id=\"table-scroll\" *ngIf=\"showTable\">\n    <!-- <app-alert [id]=\"'dataTableAlertId'\"></app-alert> -->\n    <app-registers-table [dataSource]=\"dataSource\"></app-registers-table>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/ageing-analysis/ageing-analysis.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/ageing-analysis/ageing-analysis.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharma-finance\">\n    <div class=\"heading-container\">\n      <h4 class=\"pharmacyHeading\">Ageing Analysis</h4>\n    </div>\n    <br>\n  \n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <form [formGroup]=\"debtorsOutstandingReportFormGroup\">\n          <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"CashReceiptControls\">\n            <!-- Area Option (Multi Select Dropdown) -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>Area Option *</mat-label>\n              <mat-select formControlName=\"areas\" multiple>\n                <!-- <mat-option *ngFor=\"let area of areasList\" [value]=\"area\">{{ area }}</mat-option> -->\n                <mat-option value=\"area\">Detailed</mat-option>\n                <mat-option value=\"area\">Abstract</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- Customer Option (Multi Selection Dropdown) -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>Customer Option *</mat-label>\n              <mat-select formControlName=\"customers\" multiple>\n                <!-- <mat-option *ngFor=\"let customer of customersList\" [value]=\"customer\">{{ customer }}</mat-option> -->\n                <mat-option value=\"customer\">Detailed</mat-option>\n                <mat-option value=\"customer\">Abstract</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- Report Option (Detailed/Abstract) -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>Report Option </mat-label>\n              <mat-select formControlName=\"reportOption\">\n                <mat-option value=\"detailed\">Detailed</mat-option>\n                <mat-option value=\"abstract\">Abstract</mat-option>\n              </mat-select>\n            </mat-form-field>\n\n             <!-- Ageing Slot (Legend with Inputs) -->\n             <div>\n                <fieldset fxFlex=\"100\" class=\"ageing-slot\">\n                  <legend>Ageing Slot</legend>\n                  <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\">\n                    <mat-form-field appearance=\"outline\" fxFlex=\"22\">\n                      <mat-label>Slot 1</mat-label>\n                      <input matInput formControlName=\"slot1\" type=\"number\">\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlex=\"22\">\n                      <mat-label>Slot 2</mat-label>\n                      <input matInput formControlName=\"slot2\" type=\"number\">\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlex=\"22\">\n                      <mat-label>Slot 3</mat-label>\n                      <input matInput formControlName=\"slot3\" type=\"number\">\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlex=\"22\">\n                      <mat-label>Slot 4</mat-label>\n                      <input matInput formControlName=\"slot4\" type=\"number\">\n                    </mat-form-field>\n                  </div>\n                </fieldset>\n              </div>\n              \n  \n            <!-- Buttons -->\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"button-group\">\n              <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"generateReport()\">Generate</button>\n              <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"resetForm()\">Reset</button>\n              <button type=\"button\" mat-raised-button color=\"primary\" class=\"my-1\" (click)=\"goback()\">Back</button>\n            </div>\n          </div>\n        </form>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/creditors-outstanding/creditors-outstanding.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/creditors-outstanding/creditors-outstanding.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharma-finance\">\n    <div class=\"heading-container\">\n      <h4 class=\"pharmacyHeading\">Creditors Outstanding</h4>\n    </div>\n    <br>\n  \n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <form [formGroup]=\"debtorsOutstandingReportFormGroup\">\n          <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"CashReceiptControls\">\n            <!-- Customer Option (Multi Selection Dropdown) -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>Supplier *</mat-label>\n              <mat-select formControlName=\"customers\" multiple>\n                <!-- <mat-option *ngFor=\"let customer of customersList\" [value]=\"customer\">{{ customer }}</mat-option> -->\n                <mat-option value=\"customer\">Detailed</mat-option>\n                <mat-option value=\"customer\">Abstract</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- Report Date (Current Date) -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>Report Date *</mat-label>\n              <input matInput [matDatepicker]=\"reportDatePicker\" formControlName=\"reportDate\" [value]=\"currentDate\" readonly>\n              <mat-datepicker-toggle matSuffix [for]=\"reportDatePicker\"></mat-datepicker-toggle>\n              <mat-datepicker #reportDatePicker></mat-datepicker>\n            </mat-form-field>\n  \n            <!-- Report Option (Detailed/Abstract) -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>Report Option </mat-label>\n              <mat-select formControlName=\"reportOption\">\n                <mat-option value=\"detailed\">Detailed</mat-option>\n                <mat-option value=\"abstract\">Abstract</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- Buttons -->\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"button-group\">\n              <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"generateReport()\">Generate</button>\n              <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"resetForm()\">Reset</button>\n              <button type=\"button\" mat-raised-button color=\"primary\" class=\"my-1\" (click)=\"goback()\">Back</button>\n            </div>\n          </div>\n        </form>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/day-book/day-book.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/day-book/day-book.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharma-finance\">\n    <div class=\"heading-container\">\n      <h4 class=\"pharmacyHeading\">Day Book</h4>\n    </div>\n    <br>\n  \n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <form [formGroup]=\"dayBookReportFormGroup\">\n          <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"CashReceiptControls\">\n            <!-- From Date -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n                <mat-label>From Date</mat-label>\n                <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\" [matDatepickerFilter]=\"dateFilter\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDatePicker></mat-datepicker>\n              </mat-form-field>\n  \n            <!-- To Date -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n                <mat-label>To Date</mat-label>\n                <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\" [matDatepickerFilter]=\"dateFilter\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDatePicker></mat-datepicker>\n            </mat-form-field>\n  \n            <!-- Sort Option -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>DayBook Type</mat-label>\n              <mat-select formControlName=\"bookType\">\n                <mat-option value=\"twoColumn\">Two Column</mat-option>\n                <mat-option value=\"fourColumn\">Four Column</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <!-- Buttons -->\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"button-group\">\n              <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"generateReport()\">Generate</button>\n              <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"resetForm()\">Reset</button>\n              <button type=\"button\" mat-raised-button color=\"primary\" class=\"my-1\" (click)=\"goback()\">Back</button>\n            </div>\n          </div>\n        </form>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/debtors-outstanding/debtors-outstanding.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/debtors-outstanding/debtors-outstanding.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharma-finance\">\n    <div class=\"heading-container\">\n      <h4 class=\"pharmacyHeading\">Debtors Outstanding</h4>\n    </div>\n    <br>\n  \n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <form [formGroup]=\"debtorsOutstandingReportFormGroup\">\n          <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"CashReceiptControls\">\n            <!-- Area Option (Multi Select Dropdown) -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>Area Option *</mat-label>\n              <mat-select formControlName=\"areas\" multiple>\n                <!-- <mat-option *ngFor=\"let area of areasList\" [value]=\"area\">{{ area }}</mat-option> -->\n                <mat-option value=\"area\">Detailed</mat-option>\n                <mat-option value=\"area\">Abstract</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- Customer Option (Multi Selection Dropdown) -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>Customer Option *</mat-label>\n              <mat-select formControlName=\"customers\" multiple>\n                <!-- <mat-option *ngFor=\"let customer of customersList\" [value]=\"customer\">{{ customer }}</mat-option> -->\n                <mat-option value=\"customer\">Detailed</mat-option>\n                <mat-option value=\"customer\">Abstract</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- Report Date (Current Date) -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>Report Date *</mat-label>\n              <input matInput [matDatepicker]=\"reportDatePicker\" formControlName=\"reportDate\" [value]=\"currentDate\" readonly>\n              <mat-datepicker-toggle matSuffix [for]=\"reportDatePicker\"></mat-datepicker-toggle>\n              <mat-datepicker #reportDatePicker></mat-datepicker>\n            </mat-form-field>\n  \n            <!-- Report Option (Detailed/Abstract) -->\n            <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n              <mat-label>Report Option </mat-label>\n              <mat-select formControlName=\"reportOption\">\n                <mat-option value=\"detailed\">Detailed</mat-option>\n                <mat-option value=\"abstract\">Abstract</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- Buttons -->\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"button-group\">\n              <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"generateReport()\">Generate</button>\n              <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"resetForm()\">Reset</button>\n              <button type=\"button\" mat-raised-button color=\"primary\" class=\"my-1\" (click)=\"goback()\">Back</button>\n            </div>\n          </div>\n        </form>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/finance-reports-register/finance-reports-register.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/finance-reports-register/finance-reports-register.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-5 button-icons\">    \n    \n    <div class=\"row mx-0 mt-3\" style=\"column-gap: 20px;\">\n\n        <button class=\"btn btn-info p-4 col-md-2 mb-2\" *ngFor=\"let item of menuArray\" (click)=\"trans(item?.menuPath)\" >\n    \n            <div><i class=\"mt-1 fa fa-file-signature\"></i></div>                    \n            <div class=\"text-center\" style=\"white-space: normal\">{{item?.menuName + ' Register'}} </div>\n\n        </button>\n               \n    \n    </div>\n\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/finance-reports-transaction/finance-reports-transaction.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/finance-reports-transaction/finance-reports-transaction.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-5 button-icons\">\n\n    <div class=\"row mx-0 mt-3\" style=\"column-gap: 20px;\">\n\n        <button class=\"btn btn-info p-4 col-md-2 mb-2\" *ngFor=\"let item of menuArray\" (click)=\"finance(item?.menuPath)\">\n\n            <div *ngIf=\"item.menuName !== '' \">\n                <div *ngIf=\"item?.menuName == 'Account Copy'\">\n                    <i class=\"mt-1 fa fa-copy\" style=\"margin-right: 4px;\"></i>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Trail Balance' \">\n                    <div><i class=\"fas fa-balance-scale\"></i></div>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Trading Profit & Loss' \">\n                    <div><i class=\"fas fa-chart-line\"></i></div>\n                </div>\n                \n                <div *ngIf=\"item?.menuName == 'Balance Sheet' \">\n                    <div><i class=\"fa-solid fa-sheet-plastic\"></i></div>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Book' \">\n                    <div><i class=\"mt-1 fa fa-book\" style=\"margin-right: 4px;\"></i></div>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'General Ledger' \">\n                    <div><i class=\"mt-1 fa fa-book-open\" style=\"margin-right: 4px;\"></i></div>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Schedule Printing' \">\n                    <div><i class=\"mt-1 fa-solid fa-calendar-days\" style=\"margin-right: 4px;\"></i></div>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Ageing Analysis' \">\n                    <div><i class=\"mt-1 fa-solid fa-chart-simple\" style=\"margin-right: 4px;\"></i></div>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Debitors Outstanding' \"\n                    class=\"d-flex justify-content-center\">\n                    <span class=\"d-block font-weight-bold\" style=\"margin: 2px 5px 0 -1px;\">+</span>\n                    <i class=\"mt-1 fa fa-rupee-sign\"></i>\n                </div>\n                \n                <div *ngIf=\"item?.menuName == 'Creditors OutStanding' \"\n                    class=\"d-flex justify-content-center\">\n                    <span class=\"d-block font-weight-bold\" style=\"margin: 2px 5px 0 -1px;\">+</span>\n                    <i class=\"mt-1 fa fa-rupee-sign\"></i>\n                </div>\n                \n                <div *ngIf=\"item?.menuName == 'Interest Calculation' \">\n                    <div><i class=\"fa-solid fa-calculator\"></i></div>\n                </div>\n\n                <div class=\"text-center\" style=\"white-space: normal\">{{item?.menuName}} </div>\n            </div>\n        </button>\n\n\n        <!-- <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div>\n            <div><i class=\"fas fa-arrow-down\"></i></div>\n            <i class=\"mt-1 fa fa-cart-plus\"></i>\n        </div>\n        <div class=\"text-center\" style=\"white-space: normal\">Purchase <br> Register</div>\n    </button>\n\n\n    <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div>\n            <div><i class=\"fas fa-arrow-up\"></i></div>\n            <i class=\"mt-1 fa fa-cart-plus\"></i>\n        </div>\n        <div class=\"text-center\" style=\"white-space: normal\"> Purchase Return <br> Register</div>\n    </button>\n\n\n    <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div><i class=\"mt-1 fa fa-cogs\"></i></div>\n        <div class=\"text-center\" style=\"white-space: normal\">Internal Stock <br> Adjustment Register</div>\n    </button>\n\n\n    <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div><i class=\"mt-1 fa fa-plus-circle\"></i></div>\n        <div class=\"text-center\" style=\"white-space: normal\">Other Purchases <br> Register</div>\n    </button> -->\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/finance-reports/finance-reports.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/finance-reports/finance-reports.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/trail-balance/trail-balance.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/trail-balance/trail-balance.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharma-finance\">\n    <div class=\"heading-container\">\n        <h4 class=\"pharmacyHeading\">Trail Balance</h4>\n    </div>\n    <br>\n\n    <mat-accordion>\n        <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n            <form [formGroup]=\"dayBookReportFormGroup\">\n                <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"CashReceiptControls\">\n                    <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n                        <mat-label>T.B. Type</mat-label>\n                        <mat-select formControlName=\"tbType\">\n                            <mat-option value=\"Main\">Main Schedule</mat-option>\n                            <mat-option value=\"Sub\">Sub Schedule</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <!-- Report Type -->\n                    <mat-form-field fxFlex=\"20\" appearance=\"outline\">\n                        <mat-label>Report Type</mat-label>\n                        <mat-select formControlName=\"reportType\" (selectionChange)=\"reporttype()\">\n                            <mat-option value=\"datewise\">DateWise</mat-option>\n                            <mat-option value=\"opening\">Opening</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                      <!-- Report Date -->\n                    <mat-form-field  *ngIf=\"showReportdate\" fxFlex=\"20\" appearance=\"outline\" >\n                        <mat-label>Report Date</mat-label>\n                        <input matInput [matDatepicker]=\"reportDatePicker\" formControlName=\"reportDate\" [matDatepickerFilter]=\"dateFilter\">\n                        <mat-datepicker-toggle matSuffix [for]=\"reportDatePicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #reportDatePicker></mat-datepicker>\n                    </mat-form-field>\n                    <!-- Buttons -->\n                    <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"button-group\">\n                        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"generateReport()\">Generate</button>\n                        <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"resetForm()\">Reset</button>\n                        <button type=\"button\" mat-raised-button color=\"primary\" class=\"my-1\" (click)=\"goback()\">Back</button>\n                    </div>\n                </div>\n            </form>\n        </mat-expansion-panel>\n    </mat-accordion>\n</div>\n");

/***/ }),

/***/ "./src/app/distribution/finance-reports/account-copy/account-copy.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/account-copy/account-copy.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 24px;\n  font-family: \"Monospace\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  text-align: center;\n}\n\n.pharma-finance {\n  padding: 16px;\n}\n\n.CashReceiptControls {\n  width: 100%;\n}\n\nbutton.mat-raised-button {\n  border-radius: 63px;\n  min-width: 101px;\n  height: 48px;\n  margin: 6px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.dropdown-table .header {\n  font-weight: bold;\n  background-color: #006476;\n  border-bottom: 1px solid #ddd;\n  color: white;\n  padding: 0 5px;\n}\n\n.mat_header {\n  padding-right: 0px !important;\n  pointer-events: none !important;\n  cursor: none;\n  background: #006476;\n  position: -webkit-sticky;\n  position: sticky;\n  top: -1px;\n  z-index: 1;\n}\n\n::ng-deep .mat_header .mat-pseudo-checkbox {\n  visibility: hidden !important;\n  pointer-events: none !important;\n}\n\n::ng-deep .mat_header.mat-active {\n  background: #006476 !important;\n}\n\n.mat_option {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n}\n\n.mat_opt {\n  padding-right: 0 !important;\n}\n\nmat-checkbox {\n  margin: 8px 0;\n}\n\n::ng-deep .account_mat .mat-expansion-panel-body {\n  padding: 14px 16px 24px 16px;\n}\n\n::ng-deep .account_select {\n  max-height: unset !important;\n}\n\n::ng-deep .account_search .mat-form-field-flex {\n  padding-top: 11px !important;\n  padding-bottom: 0px !important;\n}\n\n::ng-deep .account_search .mat-form-field-label-wrapper {\n  top: -1.1em !important;\n}\n\n::ng-deep .mat_checkbox label {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 1200px) {\n  .mat_opt, .mat_header, .mat_option {\n    line-height: unset !important;\n    height: unset !important;\n    white-space: normal !important;\n    -webkit-text-emphasis: unset !important;\n            text-emphasis: unset !important;\n    overflow: unset !important;\n  }\n\n  .action-icons {\n    display: flex;\n    justify-content: flex-end;\n    /* Align icons to the right */\n    gap: 16px;\n    /* Space between buttons */\n    margin-bottom: 8px;\n    /* Space below the buttons */\n  }\n\n  .icon-img {\n    width: 37px;\n    height: 38px;\n    -o-object-fit: contain;\n    object-fit: contain;\n    margin: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UtcmVwb3J0cy9hY2NvdW50LWNvcHkvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxmaW5hbmNlLXJlcG9ydHNcXGFjY291bnQtY29weVxcYWNjb3VudC1jb3B5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS1yZXBvcnRzL2FjY291bnQtY29weS9hY2NvdW50LWNvcHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRGVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNaRjs7QURrQkE7RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDZkY7O0FEa0JBO0VBQ0UsNkJBQUE7RUFDQSwrQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLDhCQUFBO0FDZkY7O0FEc0JBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ25CRjs7QURzQkE7RUFDRSwyQkFBQTtBQ25CRjs7QURzQkE7RUFDRSxhQUFBO0FDbkJGOztBRDZCQTtFQUNFLDRCQUFBO0FDMUJGOztBRDZCQTtFQUdJLDRCQUFBO0FDNUJKOztBRCtCQTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7QUM1QkY7O0FEK0JBO0VBQ0Usc0JBQUE7QUM1QkY7O0FEZ0NBO0VBQ0UsZ0JBQUE7QUM3QkY7O0FEZ0NBO0VBVUE7SUFDRSw2QkFBQTtJQUNBLHdCQUFBO0lBQ0EsOEJBQUE7SUFDQSx1Q0FBQTtZQUFBLCtCQUFBO0lBQ0EsMEJBQUE7RUN0Q0E7O0VEd0NGO0lBQ0UsYUFBQTtJQUNBLHlCQUFBO0lBQTJCLDZCQUFBO0lBQzNCLFNBQUE7SUFBVywwQkFBQTtJQUNYLGtCQUFBO0lBQW9CLDRCQUFBO0VDbENwQjs7RURxQ0Y7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VDbENBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS1yZXBvcnRzL2FjY291bnQtY29weS9hY2NvdW50LWNvcHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6ICdNb25vc3BhY2UnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5waGFybWEtZmluYW5jZSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDYzcHg7XG4gIG1pbi13aWR0aDogMTAxcHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luOiA2cHhcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIC5tYXQtc2VsZWN0LXBhbmVsIHtcbi8vICAgbWF4LWhlaWdodDogMjAwcHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyAuZHJvcGRvd24tdGFibGUge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgM2ZyIDJmciAyZnIgMmZyOyAvKiBBZGp1c3QgY29sdW1uIHdpZHRocyAqL1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBnYXA6IDE2cHg7XG4vLyAgIHBhZGRpbmc6IDhweDtcbi8vIH1cblxuLmRyb3Bkb3duLXRhYmxlIC5oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjQ3NjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIC8vIHBvc2l0aW9uOiBzdGlja3k7XG4gIC8vIHRvcDogLTFweDtcbiAgLy8gei1pbmRleDogMTtcbn1cblxuLm1hdF9oZWFkZXJ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwMDY0NzY7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogLTFweDtcbiAgei1pbmRleDogMTtcbn1cblxuOjpuZy1kZWVwIC5tYXRfaGVhZGVyIC5tYXQtcHNldWRvLWNoZWNrYm94e1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXRfaGVhZGVyLm1hdC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMDA2NDc2ICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5kcm9wZG93bi10YWJsZS5yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbi8vIH1cblxuLm1hdF9vcHRpb24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5tYXRfb3B0e1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4vLyAuc2VhcmNoLWNvbnRhaW5lciB7XG4vLyAgIHBhZGRpbmc6IDhweDtcbi8vIH1cblxuLy8gLnNlYXJjaC1maWVsZCB7XG4vLyAgIHdpZHRoOiAzMCU7XG4vLyB9XG5cbjo6bmctZGVlcCAuYWNjb3VudF9tYXQgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE0cHggMTZweCAyNHB4IDE2cHg7XG59XG5cbjo6bmctZGVlcCAuYWNjb3VudF9zZWxlY3Qge1xuLy8gICAgIG1pbi13aWR0aDogOTY0cHggIWltcG9ydGFudDtcbi8vICAgICAvLyBtYXJnaW46IDUwcHggMCAwIDI5cHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFjY291bnRfc2VhcmNoIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgcGFkZGluZy10b3A6IDExcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFjY291bnRfc2VhcmNoIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgdG9wOiAtMS4xZW0gIWltcG9ydGFudDtcbn1cblxuXG46Om5nLWRlZXAgLm1hdF9jaGVja2JveCBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuLy8gICA6Om5nLWRlZXAgLmFjY291bnRfc2VsZWN0e1xuLy8gICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuLy8gICAgIC8vIHdpZHRoOiAxMDAlO1xuLy8gICAgIC8vIG1hcmdpbi1sZWZ0OiAxMzdweDtcbi8vICAgfVxuLy8gICAubWFpbl9kaXZ7XG4vLyAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuLy8gICAgIC8vIG92ZXJmbG93OiBhdXRvO1xuLy8gICB9XG4ubWF0X29wdCwgLm1hdF9oZWFkZXIsIC5tYXRfb3B0aW9ue1xuICBsaW5lLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtZW1waGFzaXM6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xufVxuLmFjdGlvbi1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IC8qIEFsaWduIGljb25zIHRvIHRoZSByaWdodCAqL1xuICBnYXA6IDE2cHg7IC8qIFNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xuICBtYXJnaW4tYm90dG9tOiA4cHg7IC8qIFNwYWNlIGJlbG93IHRoZSBidXR0b25zICovXG59O1xuXG4uaWNvbi1pbWcge1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICAtby1vYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW46IDNweDtcbn07XG4vLyAubWF0X29wdGlvbiB7XG4vLyAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuLy8gICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbi8vICAgdGV4dC1vdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbi8vICAgLy8gcGFkZGluZzogMCA1cHg7XG4vLyAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbi8vIH1cbn0iLCIucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBoYXJtYS1maW5hbmNlIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgbWluLXdpZHRoOiAxMDFweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW46IDZweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kcm9wZG93bi10YWJsZSAuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY0NzY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4ubWF0X2hlYWRlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwMDY0NzY7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogLTFweDtcbiAgei1pbmRleDogMTtcbn1cblxuOjpuZy1kZWVwIC5tYXRfaGVhZGVyIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0X2hlYWRlci5tYXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAwNjQ3NiAhaW1wb3J0YW50O1xufVxuXG4ubWF0X29wdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLm1hdF9vcHQge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbjo6bmctZGVlcCAuYWNjb3VudF9tYXQgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE0cHggMTZweCAyNHB4IDE2cHg7XG59XG5cbjo6bmctZGVlcCAuYWNjb3VudF9zZWxlY3Qge1xuICBtYXgtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFjY291bnRfc2VhcmNoIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgcGFkZGluZy10b3A6IDExcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFjY291bnRfc2VhcmNoIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgdG9wOiAtMS4xZW0gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXRfY2hlY2tib3ggbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1hdF9vcHQsIC5tYXRfaGVhZGVyLCAubWF0X29wdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB0ZXh0LWVtcGhhc2lzOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFjdGlvbi1pY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC8qIEFsaWduIGljb25zIHRvIHRoZSByaWdodCAqL1xuICAgIGdhcDogMTZweDtcbiAgICAvKiBTcGFjZSBiZXR3ZWVuIGJ1dHRvbnMgKi9cbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgLyogU3BhY2UgYmVsb3cgdGhlIGJ1dHRvbnMgKi9cbiAgfVxuXG4gIC5pY29uLWltZyB7XG4gICAgd2lkdGg6IDM3cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBtYXJnaW46IDNweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/distribution/finance-reports/account-copy/account-copy.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/account-copy/account-copy.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AccountCopyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCopyComponent", function() { return AccountCopyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finance-reports.service */ "./src/app/distribution/finance-reports/finance-reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_http_services_in_ward_in_ward_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/http-services/in-ward/in-ward-http.service */ "./src/app/shared/http-services/in-ward/in-ward-http.service.ts");






let AccountCopyComponent = class AccountCopyComponent {
    constructor(fb, FinanceRepService, router, inward) {
        this.fb = fb;
        this.FinanceRepService = FinanceRepService;
        this.router = router;
        this.inward = inward;
        this.step = 0;
        this.dropdownOptions = [];
        this.filteredOptions = [];
        this.isShowExcelpdf = false;
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
        this.customAccountsOptsTable = {
            panelWidth: 800,
            columns: [
                {
                    name: 'Select All', value: (obj) => obj[''],
                    fxFlex: 10,
                    fxFlex1: 10
                },
                { name: 'Account Name', value: (obj) => obj['account_Name'] ? obj['account_Name'] : '', fxFlex: 34, fxFlex1: 34, isKeyColumn: true },
                { name: 'Shot Name', value: (obj) => obj['account_Sh_Name'] ? obj['account_Sh_Name'] : '', fxFlex: 14, fxFlex1: 14 },
                // { name: 'Address1', value: (obj) => obj['address1'] ? obj['address1'] : '', fxFlex: 16,fxFlex1:16 },
                // { name: 'Address2', value: (obj) => obj['address2'] ? obj['address2'] : '', fxFlex: 24,fxFlex1:24 },
                { name: 'City', value: (obj) => obj['city'] ? obj['city'] : '', fxFlex: 12, fxFlex1: 12 },
                { name: 'Mobile', value: (obj) => obj['mobile'] ? obj['mobile'] : '', fxFlex: 14, fxFlex1: 14 },
            ]
        };
        this.filterKeys = ['account_Name', 'account_Sh_Name', 'city', 'mobile'];
        // Datepicker filter to disable dates outside the financial year
        this.dateFilter = (date) => {
            if (!date)
                return false;
            return date >= this.financialYearStart && date <= this.financialYearEnd;
        };
        this.today = new Date().toISOString().split('T')[0];
        this.cashReceiptRegisterFormGroup = this.fb.group({
            fromDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accopyType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getCopyAccounts();
        this.calculateFinancialYearDates();
        this.firmpreference = JSON.parse(sessionStorage.getItem('firmPreferences'));
        console.log(this.firmpreference['finEdate']);
        console.log(this.cashReceiptRegisterFormGroup);
        // this.cashReceiptRegisterFormGroup.get('accId').valueChanges.subscribe((selectedValues) => {
        //   if (selectedValues) {
        //     // Preserve previously selected accounts even after filtering
        //     this.selectedAccounts = this.dropdownOptions.filter(account =>
        //       selectedValues.some((selected) => selected.account_Name === account.account_Name)
        //     );
        //   } else {
        //     this.selectedAccounts = [];
        //   }
        // });
        // this.createForm();
        // this.firmpreference = sessionStorage.getItem('firmPreferences');
        // this.firmpreference = JSON.parse(this.firmpreference);
        // console.log(this.firmpreference['transporterSchId']);
    }
    setStep(index) {
        this.step = index;
    }
    // getAccounts(){
    //   this.FinanceRepService.getCustomAccounts().subscribe(res=>{
    //     console.log(res);
    //     this.dropdownOptions=res;
    //     this.filteredOptions = [...this.dropdownOptions];
    //   })
    // };
    getCopyAccounts() {
        this.FinanceRepService.getCopyAccounts().subscribe(res => {
            console.log(res);
            this.dropdownOptions = res;
            // this.filteredOptions = [...this.dropdownOptions];
        });
    }
    ;
    generateReport() {
        console.log('Selected Accounts:', this.cashReceiptRegisterFormGroup.value);
        // let accId = 0;
        //  if(this.cashReceiptRegisterFormGroup.value.accId.length > 0){
        //   accId = this.cashReceiptRegisterFormGroup.value.accId.map(item => item.accId).toString();
        //  }
        const acctype = +this.cashReceiptRegisterFormGroup.get('accopyType').value;
        this.accountType = this.cashReceiptRegisterFormGroup.get('accopyType').value;
        if (acctype == 1) {
            if (this.selectedAccounts.length == 0) {
                return;
            }
        }
        const payload = {
            "finEDate": this.firmpreference['finEdate'],
            "finSDate": this.firmpreference['finSdate'],
            "fromDate": this.cashReceiptRegisterFormGroup.value.fromDate,
            "toDate": this.cashReceiptRegisterFormGroup.value.toDate,
            "accIds": acctype == 1 ? this.selectedAccounts.toString() : '',
            "accopyType": +this.cashReceiptRegisterFormGroup.value.accopyType
        };
        console.log('payload', payload);
        this.showTable = false;
        this.FinanceRepService.getAccountCopyData(payload).subscribe(res => {
            if (res) {
                this.showTable = true;
                this.isShowExcelpdf = true;
                console.log('res', res);
                this.dataSource = res; //JSON.parse(res);
                this.cashReceiptRegisterFormGroup.controls.accopyType.setValue(0);
            }
        });
    }
    filterOptions(searchValue) {
        const lowerSearch = searchValue ? searchValue.toLowerCase() : '';
        this.filteredOptions = this.dropdownOptions.filter(option => {
            const accountName = option.account_Name ? option.account_Name.toLowerCase() : '';
            const accountShName = option.account_Sh_Name ? option.account_Sh_Name.toLowerCase() : '';
            const city = option.city ? option.city.toLowerCase() : '';
            const mobile = option.mobile ? option.mobile.toString() : '';
            return accountName.includes(lowerSearch) ||
                accountShName.includes(lowerSearch) ||
                city.includes(lowerSearch) ||
                mobile.includes(lowerSearch);
        });
    }
    resetForm() {
        this.cashReceiptRegisterFormGroup.reset();
    }
    // toggleSelectAll(checked: boolean): void {
    //   if (checked) {
    //     this.cashReceiptRegisterFormGroup.get('accId').setValue(this.dropdownOptions);
    //   } else {
    //     this.cashReceiptRegisterFormGroup.get('accId').setValue([]);
    //   }
    //   this.updateSelectAllState();
    // }
    onOptionChange() {
        this.updateSelectAllState();
    }
    updateSelectAllState() {
        const selectedOptions = this.cashReceiptRegisterFormGroup.get('accId').value || [];
        this.isAllSelected = selectedOptions.length === this.dropdownOptions.length;
        this.isIndeterminate =
            selectedOptions.length > 0 && selectedOptions.length < this.dropdownOptions.length;
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
    // typeChange(value){
    //  console.log(value);
    //     // Based on the condition, set 'name' field required or not
    //     const nameControl = this.cashReceiptRegisterFormGroup.get('accId');
    //     if (+value == 1) {
    //       nameControl.setValue([]);
    //       nameControl.setValidators([Validators.required]);  // Set as required
    //     } else {
    //       nameControl.setValue([]);
    //       nameControl.clearValidators();  // Remove the required validator
    //     }
    //      // Always call updateValueAndValidity after changing the validators
    //       nameControl.updateValueAndValidity();
    // }
    goback() {
        this.router.navigate(['pharma/financeReports/FinanceReportsTransaction']);
    }
    clearSelectedItems(isChecked) {
        if (isChecked) {
            // Clear selected items
            this.isAllSelected = false;
            this.cashReceiptRegisterFormGroup.get('accId').setValue([]);
            this.selectedAccounts = [];
        }
    }
    receiveData(data) {
        this.selectedAccounts = [];
        data.forEach(x => {
            this.selectedAccounts.push(x.accId);
        });
        //  var ids:any = JSON.stringify(this.selectedAccounts);
        //  ids = ids.split('[');
        //  ids = ids[1].split(']');
        //  this.selectedAccounts = ids[0];
        //  console.log(ids);
        //  console.log(this.cashReceiptRegisterFormGroup)
        //  var ids = new Set([this.selectedAccounts])
    }
    exportToExcel(data) {
        const payload1 = {
            fromDate: this.cashReceiptRegisterFormGroup.value.fromDate,
            toDate: this.cashReceiptRegisterFormGroup.value.toDate,
            finEDate: this.firmpreference['finEdate'],
            finSDate: this.firmpreference['finSdate'],
            accIds: this.selectedAccounts.toString(),
            accopyType: this.accountType ? this.accountType : 0
        };
        this.FinanceRepService.getAccountCopyExcel(payload1).subscribe((res) => {
            const base64String = res;
            const fileName = 'AccountCopy.xlsx'; // Desired file name
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
        console.log('pdf');
    }
};
AccountCopyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__["FinanceReportsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_http_services_in_ward_in_ward_http_service__WEBPACK_IMPORTED_MODULE_5__["InWardHttpService"] }
];
AccountCopyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-copy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-copy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/account-copy/account-copy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-copy.component.scss */ "./src/app/distribution/finance-reports/account-copy/account-copy.component.scss")).default]
    })
], AccountCopyComponent);



/***/ }),

/***/ "./src/app/distribution/finance-reports/ageing-analysis/ageing-analysis.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/ageing-analysis/ageing-analysis.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 24px;\n  font-family: \"Monospace\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  text-align: left;\n}\n\n.pharma-finance {\n  padding: 16px;\n}\n\n.CashReceiptControls {\n  margin-top: 20px;\n  width: 100%;\n}\n\nbutton.mat-raised-button {\n  border-radius: 63px;\n  min-width: 101px;\n  height: 48px;\n  margin: 6px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-select-panel {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.dropdown-table {\n  display: grid;\n  grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr;\n  /* Adjust column widths */\n  align-items: center;\n  gap: 16px;\n  padding: 8px;\n}\n\n.dropdown-table.header {\n  font-weight: bold;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row:nth-child(even) {\n  background-color: #fafafa;\n}\n\n.dropdown-table span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\nmat-checkbox {\n  margin: 8px 0;\n}\n\n.search-container {\n  padding: 8px;\n}\n\n.search-field {\n  width: 30%;\n}\n\n/* Ageing Slot Section Styling */\n\n.ageing-slot {\n  border: 1px solid #ccc;\n  /* Border around the ageing slot fieldset */\n  border-radius: 8px;\n  /* Rounded corners */\n  padding: 10px;\n  /* Padding around the content inside the fieldset */\n  margin: 10px;\n  /* Space above the Ageing Slot section */\n  background-color: #f9f9f9;\n  /* Light background for the section */\n  width: 100%;\n  /* Make the ageing slot fill the container's width */\n  box-sizing: border-box;\n  /* Include padding in the total width calculation */\n}\n\n.ageing-slot legend {\n  font-size: 18px;\n  /* Larger font size for the legend */\n  color: #2f8bbd;\n  padding: 0 10px;\n  /* Padding around the legend text */\n  width: auto;\n  /* Ensures the legend width adjusts to content */\n  margin-bottom: 16px;\n  /* Space between the legend and the form fields */\n}\n\n.ageing-slot .mat-form-field {\n  margin-bottom: 16px;\n  /* Space between the form fields */\n}\n\n.ageing-slot .mat-form-field mat-label {\n  font-size: 14px;\n  /* Smaller label font for each slot */\n}\n\n.ageing-slot .mat-form-field input {\n  font-size: 14px;\n  /* Input font size */\n  padding: 8px;\n  /* Padding inside the input fields */\n}\n\n.ageing-slot .mat-form-field {\n  display: inline-block;\n  /* Ensures the form fields are inline */\n  width: 23%;\n  /* Set width to make form fields responsive */\n}\n\n@media (max-width: 768px) {\n  /* Make Ageing Slot section more responsive on smaller screens */\n  .ageing-slot .mat-form-field {\n    width: 48%;\n    /* Two columns on smaller screens */\n  }\n}\n\n@media (max-width: 480px) {\n  /* Stack form fields on very small screens */\n  .ageing-slot .mat-form-field {\n    width: 100%;\n    /* Full width on mobile devices */\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UtcmVwb3J0cy9hZ2VpbmctYW5hbHlzaXMvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxmaW5hbmNlLXJlcG9ydHNcXGFnZWluZy1hbmFseXNpc1xcYWdlaW5nLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS1yZXBvcnRzL2FnZWluZy1hbmFseXNpcy9hZ2VpbmctYW5hbHlzaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSw4Q0FBQTtFQUFnRCx5QkFBQTtFQUNoRCxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDRTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDRTtFQUNFLHlCQUFBO0FDRUo7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0U7RUFDRSxhQUFBO0FDRUo7O0FEQUU7RUFDRSxZQUFBO0FDR0o7O0FEQUU7RUFDRSxVQUFBO0FDR0o7O0FEREMsZ0NBQUE7O0FBQ0Q7RUFDSSxzQkFBQTtFQUF3QiwyQ0FBQTtFQUN4QixrQkFBQTtFQUFvQixvQkFBQTtFQUNwQixhQUFBO0VBQWUsbURBQUE7RUFDZixZQUFBO0VBQWMsd0NBQUE7RUFDZCx5QkFBQTtFQUEyQixxQ0FBQTtFQUMzQixXQUFBO0VBQWEsb0RBQUE7RUFDYixzQkFBQTtFQUF3QixtREFBQTtBQ1c1Qjs7QURSRTtFQUNFLGVBQUE7RUFBaUIsb0NBQUE7RUFHakIsY0FBQTtFQUNBLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsV0FBQTtFQUFhLGdEQUFBO0VBQ2IsbUJBQUE7RUFBcUIsaURBQUE7QUNhekI7O0FEVkU7RUFDRSxtQkFBQTtFQUFxQixrQ0FBQTtBQ2N6Qjs7QURYRTtFQUNFLGVBQUE7RUFBaUIscUNBQUE7QUNlckI7O0FEWkU7RUFDRSxlQUFBO0VBQWlCLG9CQUFBO0VBQ2pCLFlBQUE7RUFBYyxvQ0FBQTtBQ2lCbEI7O0FEZEU7RUFDRSxxQkFBQTtFQUF1Qix1Q0FBQTtFQUN2QixVQUFBO0VBQVksNkNBQUE7QUNtQmhCOztBRGhCRTtFQUNFLGdFQUFBO0VBQ0E7SUFDRSxVQUFBO0lBQVksbUNBQUE7RUNvQmhCO0FBQ0Y7O0FEakJFO0VBQ0UsNENBQUE7RUFDQTtJQUNFLFdBQUE7SUFBYSxpQ0FBQTtFQ29CakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlLXJlcG9ydHMvYWdlaW5nLWFuYWx5c2lzL2FnZWluZy1hbmFseXNpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waGFybWFjeUhlYWRpbmcge1xuICAgIGNvbG9yOiAjMmY4YmJkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogJ01vbm9zcGFjZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC5waGFybWEtZmluYW5jZSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIGJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgICBtaW4td2lkdGg6IDEwMXB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBtYXJnaW46IDZweFxuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgM2ZyIDJmciAyZnIgMmZyOyAvKiBBZGp1c3QgY29sdW1uIHdpZHRocyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLmhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLnJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLnJvdzpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZSBzcGFuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG4gIFxuICBtYXQtY2hlY2tib3gge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICBcbiAgLnNlYXJjaC1maWVsZCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuIC8qIEFnZWluZyBTbG90IFNlY3Rpb24gU3R5bGluZyAqL1xuLmFnZWluZy1zbG90IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBCb3JkZXIgYXJvdW5kIHRoZSBhZ2Vpbmcgc2xvdCBmaWVsZHNldCAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgLyogUm91bmRlZCBjb3JuZXJzICovXG4gICAgcGFkZGluZzogMTBweDsgLyogUGFkZGluZyBhcm91bmQgdGhlIGNvbnRlbnQgaW5zaWRlIHRoZSBmaWVsZHNldCAqL1xuICAgIG1hcmdpbjogMTBweDsgLyogU3BhY2UgYWJvdmUgdGhlIEFnZWluZyBTbG90IHNlY3Rpb24gKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OyAvKiBMaWdodCBiYWNrZ3JvdW5kIGZvciB0aGUgc2VjdGlvbiAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBNYWtlIHRoZSBhZ2Vpbmcgc2xvdCBmaWxsIHRoZSBjb250YWluZXIncyB3aWR0aCAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEluY2x1ZGUgcGFkZGluZyBpbiB0aGUgdG90YWwgd2lkdGggY2FsY3VsYXRpb24gKi9cbiAgfVxuICBcbiAgLmFnZWluZy1zbG90IGxlZ2VuZCB7XG4gICAgZm9udC1zaXplOiAxOHB4OyAvKiBMYXJnZXIgZm9udCBzaXplIGZvciB0aGUgbGVnZW5kICovXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7IC8qIEJvbGQgZm9udCB3ZWlnaHQgZm9yIHRoZSBsZWdlbmQgKi9cbiAgICAvLyBjb2xvcjogIzMzMzsgLyogRGFyayBjb2xvciBmb3IgdGhlIGxlZ2VuZCB0ZXh0ICovXG4gICAgY29sb3I6ICMyZjhiYmQ7XG4gICAgcGFkZGluZzogMCAxMHB4OyAvKiBQYWRkaW5nIGFyb3VuZCB0aGUgbGVnZW5kIHRleHQgKi9cbiAgICB3aWR0aDogYXV0bzsgLyogRW5zdXJlcyB0aGUgbGVnZW5kIHdpZHRoIGFkanVzdHMgdG8gY29udGVudCAqL1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7IC8qIFNwYWNlIGJldHdlZW4gdGhlIGxlZ2VuZCBhbmQgdGhlIGZvcm0gZmllbGRzICovXG4gIH1cbiAgXG4gIC5hZ2Vpbmctc2xvdCAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7IC8qIFNwYWNlIGJldHdlZW4gdGhlIGZvcm0gZmllbGRzICovXG4gIH1cbiAgXG4gIC5hZ2Vpbmctc2xvdCAubWF0LWZvcm0tZmllbGQgbWF0LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7IC8qIFNtYWxsZXIgbGFiZWwgZm9udCBmb3IgZWFjaCBzbG90ICovXG4gIH1cbiAgXG4gIC5hZ2Vpbmctc2xvdCAubWF0LWZvcm0tZmllbGQgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTRweDsgLyogSW5wdXQgZm9udCBzaXplICovXG4gICAgcGFkZGluZzogOHB4OyAvKiBQYWRkaW5nIGluc2lkZSB0aGUgaW5wdXQgZmllbGRzICovXG4gIH1cbiAgXG4gIC5hZ2Vpbmctc2xvdCAubWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogRW5zdXJlcyB0aGUgZm9ybSBmaWVsZHMgYXJlIGlubGluZSAqL1xuICAgIHdpZHRoOiAyMyU7IC8qIFNldCB3aWR0aCB0byBtYWtlIGZvcm0gZmllbGRzIHJlc3BvbnNpdmUgKi9cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLyogTWFrZSBBZ2VpbmcgU2xvdCBzZWN0aW9uIG1vcmUgcmVzcG9uc2l2ZSBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgICAuYWdlaW5nLXNsb3QgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHdpZHRoOiA0OCU7IC8qIFR3byBjb2x1bW5zIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLyogU3RhY2sgZm9ybSBmaWVsZHMgb24gdmVyeSBzbWFsbCBzY3JlZW5zICovXG4gICAgLmFnZWluZy1zbG90IC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBvbiBtb2JpbGUgZGV2aWNlcyAqL1xuICAgIH1cbiAgfVxuICAgIiwiLnBoYXJtYWN5SGVhZGluZyB7XG4gIGNvbG9yOiAjMmY4YmJkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucGhhcm1hLWZpbmFuY2Uge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA2M3B4O1xuICBtaW4td2lkdGg6IDEwMXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbjogNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1zZWxlY3QtcGFuZWwge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5kcm9wZG93bi10YWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAzZnIgMmZyIDJmciAyZnI7XG4gIC8qIEFkanVzdCBjb2x1bW4gd2lkdGhzICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uZHJvcGRvd24tdGFibGUuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uZHJvcGRvd24tdGFibGUucm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5kcm9wZG93bi10YWJsZS5yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLmRyb3Bkb3duLXRhYmxlIHNwYW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZzogNHB4O1xufVxuXG5tYXQtY2hlY2tib3gge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnNlYXJjaC1maWVsZCB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi8qIEFnZWluZyBTbG90IFNlY3Rpb24gU3R5bGluZyAqL1xuLmFnZWluZy1zbG90IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgLyogQm9yZGVyIGFyb3VuZCB0aGUgYWdlaW5nIHNsb3QgZmllbGRzZXQgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cbiAgcGFkZGluZzogMTBweDtcbiAgLyogUGFkZGluZyBhcm91bmQgdGhlIGNvbnRlbnQgaW5zaWRlIHRoZSBmaWVsZHNldCAqL1xuICBtYXJnaW46IDEwcHg7XG4gIC8qIFNwYWNlIGFib3ZlIHRoZSBBZ2VpbmcgU2xvdCBzZWN0aW9uICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIC8qIExpZ2h0IGJhY2tncm91bmQgZm9yIHRoZSBzZWN0aW9uICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBNYWtlIHRoZSBhZ2Vpbmcgc2xvdCBmaWxsIHRoZSBjb250YWluZXIncyB3aWR0aCAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBJbmNsdWRlIHBhZGRpbmcgaW4gdGhlIHRvdGFsIHdpZHRoIGNhbGN1bGF0aW9uICovXG59XG5cbi5hZ2Vpbmctc2xvdCBsZWdlbmQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIC8qIExhcmdlciBmb250IHNpemUgZm9yIHRoZSBsZWdlbmQgKi9cbiAgY29sb3I6ICMyZjhiYmQ7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgLyogUGFkZGluZyBhcm91bmQgdGhlIGxlZ2VuZCB0ZXh0ICovXG4gIHdpZHRoOiBhdXRvO1xuICAvKiBFbnN1cmVzIHRoZSBsZWdlbmQgd2lkdGggYWRqdXN0cyB0byBjb250ZW50ICovXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIC8qIFNwYWNlIGJldHdlZW4gdGhlIGxlZ2VuZCBhbmQgdGhlIGZvcm0gZmllbGRzICovXG59XG5cbi5hZ2Vpbmctc2xvdCAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAvKiBTcGFjZSBiZXR3ZWVuIHRoZSBmb3JtIGZpZWxkcyAqL1xufVxuXG4uYWdlaW5nLXNsb3QgLm1hdC1mb3JtLWZpZWxkIG1hdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLyogU21hbGxlciBsYWJlbCBmb250IGZvciBlYWNoIHNsb3QgKi9cbn1cblxuLmFnZWluZy1zbG90IC5tYXQtZm9ybS1maWVsZCBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLyogSW5wdXQgZm9udCBzaXplICovXG4gIHBhZGRpbmc6IDhweDtcbiAgLyogUGFkZGluZyBpbnNpZGUgdGhlIGlucHV0IGZpZWxkcyAqL1xufVxuXG4uYWdlaW5nLXNsb3QgLm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvKiBFbnN1cmVzIHRoZSBmb3JtIGZpZWxkcyBhcmUgaW5saW5lICovXG4gIHdpZHRoOiAyMyU7XG4gIC8qIFNldCB3aWR0aCB0byBtYWtlIGZvcm0gZmllbGRzIHJlc3BvbnNpdmUgKi9cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC8qIE1ha2UgQWdlaW5nIFNsb3Qgc2VjdGlvbiBtb3JlIHJlc3BvbnNpdmUgb24gc21hbGxlciBzY3JlZW5zICovXG4gIC5hZ2Vpbmctc2xvdCAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiA0OCU7XG4gICAgLyogVHdvIGNvbHVtbnMgb24gc21hbGxlciBzY3JlZW5zICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAvKiBTdGFjayBmb3JtIGZpZWxkcyBvbiB2ZXJ5IHNtYWxsIHNjcmVlbnMgKi9cbiAgLmFnZWluZy1zbG90IC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogRnVsbCB3aWR0aCBvbiBtb2JpbGUgZGV2aWNlcyAqL1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/distribution/finance-reports/ageing-analysis/ageing-analysis.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/ageing-analysis/ageing-analysis.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AgeingAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgeingAnalysisComponent", function() { return AgeingAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finance-reports.service */ "./src/app/distribution/finance-reports/finance-reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AgeingAnalysisComponent = class AgeingAnalysisComponent {
    constructor(fb, FinanceRepService, router) {
        this.fb = fb;
        this.FinanceRepService = FinanceRepService;
        this.router = router;
        this.step = 0;
        // dropdownOptions:any=[];
        // filteredOptions:any=[];
        // isAllSelected = false;
        this.isIndeterminate = false;
        // Datepicker filter to disable dates outside the financial year
        this.dateFilter = (date) => {
            if (!date)
                return false;
            return date >= this.financialYearStart && date <= this.financialYearEnd;
        };
        this.debtorsOutstandingReportFormGroup = this.fb.group({
            areas: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customers: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            slot1: [''],
            slot2: [''],
            slot3: [''],
            slot4: [''],
            reportOption: ['']
        });
        this.accountSelectionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
    }
    ngOnInit() {
        // this.getAccounts();
        this.calculateFinancialYearDates();
        // this.createForm();
    }
    setStep(index) {
        this.step = index;
    }
    generateReport() {
        console.log('Selected Accounts:', this.accountSelectionControl.value);
    }
    resetForm() {
        this.debtorsOutstandingReportFormGroup.reset();
        // this.accountSelectionControl.setValue([]);
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
    goback() {
        this.router.navigate(['pharma/financeReports/FinanceReportsTransaction']);
    }
};
AgeingAnalysisComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__["FinanceReportsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AgeingAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ageing-analysis',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ageing-analysis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/ageing-analysis/ageing-analysis.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ageing-analysis.component.scss */ "./src/app/distribution/finance-reports/ageing-analysis/ageing-analysis.component.scss")).default]
    })
], AgeingAnalysisComponent);



/***/ }),

/***/ "./src/app/distribution/finance-reports/creditors-outstanding/creditors-outstanding.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/creditors-outstanding/creditors-outstanding.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 24px;\n  font-family: \"Monospace\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  text-align: left;\n}\n\n.pharma-finance {\n  padding: 16px;\n}\n\n.CashReceiptControls {\n  margin-top: 20px;\n  width: 100%;\n}\n\nbutton.mat-raised-button {\n  border-radius: 63px;\n  min-width: 101px;\n  height: 48px;\n  margin: 6px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-select-panel {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.dropdown-table {\n  display: grid;\n  grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr;\n  /* Adjust column widths */\n  align-items: center;\n  gap: 16px;\n  padding: 8px;\n}\n\n.dropdown-table.header {\n  font-weight: bold;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row:nth-child(even) {\n  background-color: #fafafa;\n}\n\n.dropdown-table span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\nmat-checkbox {\n  margin: 8px 0;\n}\n\n.search-container {\n  padding: 8px;\n}\n\n.search-field {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UtcmVwb3J0cy9jcmVkaXRvcnMtb3V0c3RhbmRpbmcvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxmaW5hbmNlLXJlcG9ydHNcXGNyZWRpdG9ycy1vdXRzdGFuZGluZ1xcY3JlZGl0b3JzLW91dHN0YW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS1yZXBvcnRzL2NyZWRpdG9ycy1vdXRzdGFuZGluZy9jcmVkaXRvcnMtb3V0c3RhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSw4Q0FBQTtFQUFnRCx5QkFBQTtFQUNoRCxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDRTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDRTtFQUNFLHlCQUFBO0FDRUo7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0U7RUFDRSxhQUFBO0FDRUo7O0FEQUU7RUFDRSxZQUFBO0FDR0o7O0FEQUU7RUFDRSxVQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS1yZXBvcnRzL2NyZWRpdG9ycy1vdXRzdGFuZGluZy9jcmVkaXRvcnMtb3V0c3RhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhhcm1hY3lIZWFkaW5nIHtcbiAgICBjb2xvcjogIzJmOGJiZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb25vc3BhY2UnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICAucGhhcm1hLWZpbmFuY2Uge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBidXR0b24ubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDYzcHg7XG4gICAgbWluLXdpZHRoOiAxMDFweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbWFyZ2luOiA2cHhcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDNmciAyZnIgMmZyIDJmcjsgLyogQWRqdXN0IGNvbHVtbiB3aWR0aHMgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZS5oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZS5yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZS5yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUgc3BhbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICBcbiAgbWF0LWNoZWNrYm94IHtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgXG4gIC5zZWFyY2gtZmllbGQge1xuICAgIHdpZHRoOiAzMCU7XG4gIH0iLCIucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5waGFybWEtZmluYW5jZSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDYzcHg7XG4gIG1pbi13aWR0aDogMTAxcHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luOiA2cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXNlbGVjdC1wYW5lbCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmRyb3Bkb3duLXRhYmxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDNmciAyZnIgMmZyIDJmcjtcbiAgLyogQWRqdXN0IGNvbHVtbiB3aWR0aHMgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5kcm9wZG93bi10YWJsZS5oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5kcm9wZG93bi10YWJsZS5yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLmRyb3Bkb3duLXRhYmxlLnJvdzpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4uZHJvcGRvd24tdGFibGUgc3BhbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uc2VhcmNoLWZpZWxkIHtcbiAgd2lkdGg6IDMwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/distribution/finance-reports/creditors-outstanding/creditors-outstanding.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/creditors-outstanding/creditors-outstanding.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CreditorsOutstandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorsOutstandingComponent", function() { return CreditorsOutstandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finance-reports.service */ "./src/app/distribution/finance-reports/finance-reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CreditorsOutstandingComponent = class CreditorsOutstandingComponent {
    constructor(fb, FinanceRepService, router) {
        this.fb = fb;
        this.FinanceRepService = FinanceRepService;
        this.router = router;
        this.step = 0;
        // dropdownOptions:any=[];
        // filteredOptions:any=[];
        // isAllSelected = false;
        this.isIndeterminate = false;
        // Datepicker filter to disable dates outside the financial year
        this.dateFilter = (date) => {
            if (!date)
                return false;
            return date >= this.financialYearStart && date <= this.financialYearEnd;
        };
        this.debtorsOutstandingReportFormGroup = this.fb.group({
            areas: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customers: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reportDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reportOption: ['']
        });
        this.accountSelectionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
    }
    ngOnInit() {
        // this.getAccounts();
        this.calculateFinancialYearDates();
        // this.createForm();
    }
    setStep(index) {
        this.step = index;
    }
    generateReport() {
        console.log('Selected Accounts:', this.accountSelectionControl.value);
    }
    resetForm() {
        this.debtorsOutstandingReportFormGroup.reset();
        // this.accountSelectionControl.setValue([]);
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
    goback() {
        this.router.navigate(['pharma/financeReports/FinanceReportsTransaction']);
    }
};
CreditorsOutstandingComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__["FinanceReportsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CreditorsOutstandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditors-outstanding',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditors-outstanding.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/creditors-outstanding/creditors-outstanding.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditors-outstanding.component.scss */ "./src/app/distribution/finance-reports/creditors-outstanding/creditors-outstanding.component.scss")).default]
    })
], CreditorsOutstandingComponent);



/***/ }),

/***/ "./src/app/distribution/finance-reports/day-book/day-book.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/day-book/day-book.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 24px;\n  font-family: \"Monospace\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  text-align: left;\n}\n\n.pharma-finance {\n  padding: 16px;\n}\n\n.CashReceiptControls {\n  margin-top: 20px;\n  width: 100%;\n}\n\nbutton.mat-raised-button {\n  border-radius: 63px;\n  min-width: 101px;\n  height: 48px;\n  margin: 6px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-select-panel {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.dropdown-table {\n  display: grid;\n  grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr;\n  /* Adjust column widths */\n  align-items: center;\n  gap: 16px;\n  padding: 8px;\n}\n\n.dropdown-table.header {\n  font-weight: bold;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row:nth-child(even) {\n  background-color: #fafafa;\n}\n\n.dropdown-table span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\nmat-checkbox {\n  margin: 8px 0;\n}\n\n.search-container {\n  padding: 8px;\n}\n\n.search-field {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UtcmVwb3J0cy9kYXktYm9vay9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXBwXFxkaXN0cmlidXRpb25cXGZpbmFuY2UtcmVwb3J0c1xcZGF5LWJvb2tcXGRheS1ib29rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS1yZXBvcnRzL2RheS1ib29rL2RheS1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsOENBQUE7RUFBZ0QseUJBQUE7RUFDaEQsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENFO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FDRUo7O0FEQ0U7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0FDRUo7O0FEQ0U7RUFDRSx5QkFBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENFO0VBQ0UsYUFBQTtBQ0VKOztBREFFO0VBQ0UsWUFBQTtBQ0dKOztBREFFO0VBQ0UsVUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UtcmVwb3J0cy9kYXktYm9vay9kYXktYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waGFybWFjeUhlYWRpbmcge1xuICAgIGNvbG9yOiAjMmY4YmJkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogJ01vbm9zcGFjZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC5waGFybWEtZmluYW5jZSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIGJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgICBtaW4td2lkdGg6IDEwMXB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBtYXJnaW46IDZweFxuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgM2ZyIDJmciAyZnIgMmZyOyAvKiBBZGp1c3QgY29sdW1uIHdpZHRocyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLmhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLnJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLnJvdzpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZSBzcGFuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG4gIFxuICBtYXQtY2hlY2tib3gge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICBcbiAgLnNlYXJjaC1maWVsZCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICAiLCIucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5waGFybWEtZmluYW5jZSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDYzcHg7XG4gIG1pbi13aWR0aDogMTAxcHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luOiA2cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXNlbGVjdC1wYW5lbCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmRyb3Bkb3duLXRhYmxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDNmciAyZnIgMmZyIDJmcjtcbiAgLyogQWRqdXN0IGNvbHVtbiB3aWR0aHMgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5kcm9wZG93bi10YWJsZS5oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5kcm9wZG93bi10YWJsZS5yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLmRyb3Bkb3duLXRhYmxlLnJvdzpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4uZHJvcGRvd24tdGFibGUgc3BhbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uc2VhcmNoLWZpZWxkIHtcbiAgd2lkdGg6IDMwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/distribution/finance-reports/day-book/day-book.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/day-book/day-book.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DayBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayBookComponent", function() { return DayBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finance-reports.service */ "./src/app/distribution/finance-reports/finance-reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DayBookComponent = class DayBookComponent {
    constructor(fb, FinanceRepService, router) {
        this.fb = fb;
        this.FinanceRepService = FinanceRepService;
        this.router = router;
        this.step = 0;
        // dropdownOptions:any=[];
        // filteredOptions:any=[];
        // isAllSelected = false;
        this.isIndeterminate = false;
        // Datepicker filter to disable dates outside the financial year
        this.dateFilter = (date) => {
            if (!date)
                return false;
            return date >= this.financialYearStart && date <= this.financialYearEnd;
        };
        this.dayBookReportFormGroup = this.fb.group({
            fromDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bookType: ['']
        });
        this.accountSelectionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
    }
    ngOnInit() {
        // this.getAccounts();
        this.calculateFinancialYearDates();
        // this.createForm();
    }
    setStep(index) {
        this.step = index;
    }
    generateReport() {
        console.log('Selected Accounts:', this.accountSelectionControl.value);
    }
    resetForm() {
        this.dayBookReportFormGroup.reset();
        // this.accountSelectionControl.setValue([]);
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
    goback() {
        this.router.navigate(['pharma/financeReports/FinanceReportsTransaction']);
    }
};
DayBookComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__["FinanceReportsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DayBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-day-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./day-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/day-book/day-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./day-book.component.scss */ "./src/app/distribution/finance-reports/day-book/day-book.component.scss")).default]
    })
], DayBookComponent);



/***/ }),

/***/ "./src/app/distribution/finance-reports/debtors-outstanding/debtors-outstanding.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/debtors-outstanding/debtors-outstanding.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 24px;\n  font-family: \"Monospace\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  text-align: left;\n}\n\n.pharma-finance {\n  padding: 16px;\n}\n\n.CashReceiptControls {\n  margin-top: 20px;\n  width: 100%;\n}\n\nbutton.mat-raised-button {\n  border-radius: 63px;\n  min-width: 101px;\n  height: 48px;\n  margin: 6px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-select-panel {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.dropdown-table {\n  display: grid;\n  grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr;\n  /* Adjust column widths */\n  align-items: center;\n  gap: 16px;\n  padding: 8px;\n}\n\n.dropdown-table.header {\n  font-weight: bold;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row:nth-child(even) {\n  background-color: #fafafa;\n}\n\n.dropdown-table span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\nmat-checkbox {\n  margin: 8px 0;\n}\n\n.search-container {\n  padding: 8px;\n}\n\n.search-field {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UtcmVwb3J0cy9kZWJ0b3JzLW91dHN0YW5kaW5nL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcZmluYW5jZS1yZXBvcnRzXFxkZWJ0b3JzLW91dHN0YW5kaW5nXFxkZWJ0b3JzLW91dHN0YW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS1yZXBvcnRzL2RlYnRvcnMtb3V0c3RhbmRpbmcvZGVidG9ycy1vdXRzdGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0VBQWdELHlCQUFBO0VBQ2hELG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0UseUJBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGFBQUE7QUNFSjs7QURBRTtFQUNFLFlBQUE7QUNHSjs7QURBRTtFQUNFLFVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlLXJlcG9ydHMvZGVidG9ycy1vdXRzdGFuZGluZy9kZWJ0b3JzLW91dHN0YW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBoYXJtYWN5SGVhZGluZyB7XG4gICAgY29sb3I6ICMyZjhiYmQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9ub3NwYWNlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLnBoYXJtYS1maW5hbmNlIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIFxuICAuQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA2M3B4O1xuICAgIG1pbi13aWR0aDogMTAxcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbjogNnB4XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAzZnIgMmZyIDJmciAyZnI7IC8qIEFkanVzdCBjb2x1bW4gd2lkdGhzICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUucm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUucm93Om50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlIHNwYW4ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwYWRkaW5nOiA0cHg7XG4gIH1cbiAgXG4gIG1hdC1jaGVja2JveCB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIFxuICAuc2VhcmNoLWZpZWxkIHtcbiAgICB3aWR0aDogMzAlO1xuICB9IiwiLnBoYXJtYWN5SGVhZGluZyB7XG4gIGNvbG9yOiAjMmY4YmJkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucGhhcm1hLWZpbmFuY2Uge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA2M3B4O1xuICBtaW4td2lkdGg6IDEwMXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbjogNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1zZWxlY3QtcGFuZWwge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5kcm9wZG93bi10YWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAzZnIgMmZyIDJmciAyZnI7XG4gIC8qIEFkanVzdCBjb2x1bW4gd2lkdGhzICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uZHJvcGRvd24tdGFibGUuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uZHJvcGRvd24tdGFibGUucm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5kcm9wZG93bi10YWJsZS5yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLmRyb3Bkb3duLXRhYmxlIHNwYW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZzogNHB4O1xufVxuXG5tYXQtY2hlY2tib3gge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnNlYXJjaC1maWVsZCB7XG4gIHdpZHRoOiAzMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/distribution/finance-reports/debtors-outstanding/debtors-outstanding.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/debtors-outstanding/debtors-outstanding.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DebtorsOutstandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtorsOutstandingComponent", function() { return DebtorsOutstandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finance-reports.service */ "./src/app/distribution/finance-reports/finance-reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DebtorsOutstandingComponent = class DebtorsOutstandingComponent {
    constructor(fb, FinanceRepService, router) {
        this.fb = fb;
        this.FinanceRepService = FinanceRepService;
        this.router = router;
        this.step = 0;
        // dropdownOptions:any=[];
        // filteredOptions:any=[];
        // isAllSelected = false;
        this.isIndeterminate = false;
        // Datepicker filter to disable dates outside the financial year
        this.dateFilter = (date) => {
            if (!date)
                return false;
            return date >= this.financialYearStart && date <= this.financialYearEnd;
        };
        this.debtorsOutstandingReportFormGroup = this.fb.group({
            areas: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customers: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reportDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reportOption: ['']
        });
        this.accountSelectionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
    }
    ngOnInit() {
        // this.getAccounts();
        this.calculateFinancialYearDates();
        // this.createForm();
    }
    setStep(index) {
        this.step = index;
    }
    generateReport() {
        console.log('Selected Accounts:', this.accountSelectionControl.value);
    }
    resetForm() {
        this.debtorsOutstandingReportFormGroup.reset();
        // this.accountSelectionControl.setValue([]);
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
    goback() {
        this.router.navigate(['pharma/financeReports/FinanceReportsTransaction']);
    }
};
DebtorsOutstandingComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__["FinanceReportsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DebtorsOutstandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-debtors-outstanding',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./debtors-outstanding.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/debtors-outstanding/debtors-outstanding.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./debtors-outstanding.component.scss */ "./src/app/distribution/finance-reports/debtors-outstanding/debtors-outstanding.component.scss")).default]
    })
], DebtorsOutstandingComponent);



/***/ }),

/***/ "./src/app/distribution/finance-reports/finance-reports-register/finance-reports-register.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/finance-reports-register/finance-reports-register.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlLXJlcG9ydHMvZmluYW5jZS1yZXBvcnRzLXJlZ2lzdGVyL2ZpbmFuY2UtcmVwb3J0cy1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/distribution/finance-reports/finance-reports-register/finance-reports-register.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/finance-reports-register/finance-reports-register.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: FinanceReportsRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceReportsRegisterComponent", function() { return FinanceReportsRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FinanceReportsRegisterComponent = class FinanceReportsRegisterComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.authDetails = JSON.parse(localStorage.getItem("menuItems"));
        this.menuArray = this.authDetails[6].menus;
        // console.log(this.menuArray);
    }
    trans(val) {
        var r = val.split("ebusiness");
        r = r[1];
        console.log(r);
        this.route.navigate([r]); // Pass the path as an array
    }
    ngOnDestroy() {
    }
};
FinanceReportsRegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FinanceReportsRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finance-reports-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finance-reports-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/finance-reports-register/finance-reports-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finance-reports-register.component.scss */ "./src/app/distribution/finance-reports/finance-reports-register/finance-reports-register.component.scss")).default]
    })
], FinanceReportsRegisterComponent);



/***/ }),

/***/ "./src/app/distribution/finance-reports/finance-reports-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/finance-reports-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: FinanceReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceReportsRoutingModule", function() { return FinanceReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _finance_reports_finance_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finance-reports/finance-reports.component */ "./src/app/distribution/finance-reports/finance-reports/finance-reports.component.ts");
/* harmony import */ var _account_copy_account_copy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-copy/account-copy.component */ "./src/app/distribution/finance-reports/account-copy/account-copy.component.ts");
/* harmony import */ var _day_book_day_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day-book/day-book.component */ "./src/app/distribution/finance-reports/day-book/day-book.component.ts");
/* harmony import */ var _trail_balance_trail_balance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trail-balance/trail-balance.component */ "./src/app/distribution/finance-reports/trail-balance/trail-balance.component.ts");
/* harmony import */ var _debtors_outstanding_debtors_outstanding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./debtors-outstanding/debtors-outstanding.component */ "./src/app/distribution/finance-reports/debtors-outstanding/debtors-outstanding.component.ts");
/* harmony import */ var _ageing_analysis_ageing_analysis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ageing-analysis/ageing-analysis.component */ "./src/app/distribution/finance-reports/ageing-analysis/ageing-analysis.component.ts");
/* harmony import */ var _creditors_outstanding_creditors_outstanding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./creditors-outstanding/creditors-outstanding.component */ "./src/app/distribution/finance-reports/creditors-outstanding/creditors-outstanding.component.ts");
/* harmony import */ var _finance_reports_transaction_finance_reports_transaction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finance-reports-transaction/finance-reports-transaction.component */ "./src/app/distribution/finance-reports/finance-reports-transaction/finance-reports-transaction.component.ts");
/* harmony import */ var _finance_reports_register_finance_reports_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./finance-reports-register/finance-reports-register.component */ "./src/app/distribution/finance-reports/finance-reports-register/finance-reports-register.component.ts");












const routes = [
    { path: '', component: _finance_reports_finance_reports_component__WEBPACK_IMPORTED_MODULE_3__["FinanceReportsComponent"],
        children: [
            // {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'accountCopy', component: _account_copy_account_copy_component__WEBPACK_IMPORTED_MODULE_4__["AccountCopyComponent"] },
            { path: 'book', component: _day_book_day_book_component__WEBPACK_IMPORTED_MODULE_5__["DayBookComponent"] },
            { path: 'trailBalance', component: _trail_balance_trail_balance_component__WEBPACK_IMPORTED_MODULE_6__["TrailBalanceComponent"] },
            { path: 'debitorsOutstanding', component: _debtors_outstanding_debtors_outstanding_component__WEBPACK_IMPORTED_MODULE_7__["DebtorsOutstandingComponent"] },
            { path: 'ageingAnalysis', component: _ageing_analysis_ageing_analysis_component__WEBPACK_IMPORTED_MODULE_8__["AgeingAnalysisComponent"] },
            { path: 'creditorsOutstanding', component: _creditors_outstanding_creditors_outstanding_component__WEBPACK_IMPORTED_MODULE_9__["CreditorsOutstandingComponent"] },
            { path: 'FinanceReportsTransaction', component: _finance_reports_transaction_finance_reports_transaction_component__WEBPACK_IMPORTED_MODULE_10__["FinanceReportsTransactionComponent"] },
            { path: 'FinanceReportsRegister', component: _finance_reports_register_finance_reports_register_component__WEBPACK_IMPORTED_MODULE_11__["FinanceReportsRegisterComponent"] }
        ]
    }
];
let FinanceReportsRoutingModule = class FinanceReportsRoutingModule {
};
FinanceReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FinanceReportsRoutingModule);



/***/ }),

/***/ "./src/app/distribution/finance-reports/finance-reports-transaction/finance-reports-transaction.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/finance-reports-transaction/finance-reports-transaction.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlLXJlcG9ydHMvZmluYW5jZS1yZXBvcnRzLXRyYW5zYWN0aW9uL2ZpbmFuY2UtcmVwb3J0cy10cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/distribution/finance-reports/finance-reports-transaction/finance-reports-transaction.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/finance-reports-transaction/finance-reports-transaction.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: FinanceReportsTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceReportsTransactionComponent", function() { return FinanceReportsTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FinanceReportsTransactionComponent = class FinanceReportsTransactionComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.authDetails = JSON.parse(localStorage.getItem("menuItems"));
        this.menuArray = this.authDetails[6].menus;
        // console.log(this.menuArray);
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
FinanceReportsTransactionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FinanceReportsTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finance-reports-transaction',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finance-reports-transaction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/finance-reports-transaction/finance-reports-transaction.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finance-reports-transaction.component.scss */ "./src/app/distribution/finance-reports/finance-reports-transaction/finance-reports-transaction.component.scss")).default]
    })
], FinanceReportsTransactionComponent);



/***/ }),

/***/ "./src/app/distribution/finance-reports/finance-reports.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/finance-reports.module.ts ***!
  \************************************************************************/
/*! exports provided: FinanceReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceReportsModule", function() { return FinanceReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _finance_reports_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finance-reports-routing.module */ "./src/app/distribution/finance-reports/finance-reports-routing.module.ts");
/* harmony import */ var _finance_reports_finance_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finance-reports/finance-reports.component */ "./src/app/distribution/finance-reports/finance-reports/finance-reports.component.ts");
/* harmony import */ var _account_copy_account_copy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-copy/account-copy.component */ "./src/app/distribution/finance-reports/account-copy/account-copy.component.ts");
/* harmony import */ var _day_book_day_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./day-book/day-book.component */ "./src/app/distribution/finance-reports/day-book/day-book.component.ts");
/* harmony import */ var _trail_balance_trail_balance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trail-balance/trail-balance.component */ "./src/app/distribution/finance-reports/trail-balance/trail-balance.component.ts");
/* harmony import */ var _debtors_outstanding_debtors_outstanding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./debtors-outstanding/debtors-outstanding.component */ "./src/app/distribution/finance-reports/debtors-outstanding/debtors-outstanding.component.ts");
/* harmony import */ var _ageing_analysis_ageing_analysis_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ageing-analysis/ageing-analysis.component */ "./src/app/distribution/finance-reports/ageing-analysis/ageing-analysis.component.ts");
/* harmony import */ var _creditors_outstanding_creditors_outstanding_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./creditors-outstanding/creditors-outstanding.component */ "./src/app/distribution/finance-reports/creditors-outstanding/creditors-outstanding.component.ts");
/* harmony import */ var _finance_reports_transaction_finance_reports_transaction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finance-reports-transaction/finance-reports-transaction.component */ "./src/app/distribution/finance-reports/finance-reports-transaction/finance-reports-transaction.component.ts");
/* harmony import */ var _finance_reports_register_finance_reports_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./finance-reports-register/finance-reports-register.component */ "./src/app/distribution/finance-reports/finance-reports-register/finance-reports-register.component.ts");














let FinanceReportsModule = class FinanceReportsModule {
};
FinanceReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        // declarations: [FinanceReportsComponent],
        // imports: [
        //   CommonModule,
        //   FinanceReportsRoutingModule
        // ]
        declarations: [_finance_reports_finance_reports_component__WEBPACK_IMPORTED_MODULE_5__["FinanceReportsComponent"], _account_copy_account_copy_component__WEBPACK_IMPORTED_MODULE_6__["AccountCopyComponent"], _day_book_day_book_component__WEBPACK_IMPORTED_MODULE_7__["DayBookComponent"], _trail_balance_trail_balance_component__WEBPACK_IMPORTED_MODULE_8__["TrailBalanceComponent"], _debtors_outstanding_debtors_outstanding_component__WEBPACK_IMPORTED_MODULE_9__["DebtorsOutstandingComponent"], _ageing_analysis_ageing_analysis_component__WEBPACK_IMPORTED_MODULE_10__["AgeingAnalysisComponent"], _creditors_outstanding_creditors_outstanding_component__WEBPACK_IMPORTED_MODULE_11__["CreditorsOutstandingComponent"], _finance_reports_transaction_finance_reports_transaction_component__WEBPACK_IMPORTED_MODULE_12__["FinanceReportsTransactionComponent"], _finance_reports_register_finance_reports_register_component__WEBPACK_IMPORTED_MODULE_13__["FinanceReportsRegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _finance_reports_routing_module__WEBPACK_IMPORTED_MODULE_4__["FinanceReportsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], FinanceReportsModule);



/***/ }),

/***/ "./src/app/distribution/finance-reports/finance-reports.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/finance-reports.service.ts ***!
  \*************************************************************************/
/*! exports provided: FinanceReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceReportsService", function() { return FinanceReportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utils/response-utils */ "./src/app/shared/utils/response-utils.ts");
/* harmony import */ var src_app_shared_http_services_finance_report_finance_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/http-services/finance-report/finance-report.service */ "./src/app/shared/http-services/finance-report/finance-report.service.ts");





let FinanceReportsService = class FinanceReportsService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    GetStockByProducts(name) {
        return this.httpService.GetStockByProducts(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    getCustomAccounts() {
        return this.httpService.getAllCustomAccounts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    getCopyAccounts() {
        return this.httpService.getCopyAccounts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    getAccountCopyData(payload) {
        return this.httpService.getAccountCopyData(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
    getAccountCopyExcel(payload) {
        return this.httpService.AccountCopyExcel(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus200(data) || src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].isStatus404(data)) {
                return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getPayload(data);
            }
            return null;
        }));
    }
};
FinanceReportsService.ctorParameters = () => [
    { type: src_app_shared_http_services_finance_report_finance_report_service__WEBPACK_IMPORTED_MODULE_4__["FinanceReportService"] }
];
FinanceReportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FinanceReportsService);



/***/ }),

/***/ "./src/app/distribution/finance-reports/finance-reports/finance-reports.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/finance-reports/finance-reports.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlLXJlcG9ydHMvZmluYW5jZS1yZXBvcnRzL2ZpbmFuY2UtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/distribution/finance-reports/finance-reports/finance-reports.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/finance-reports/finance-reports.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FinanceReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceReportsComponent", function() { return FinanceReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinanceReportsComponent = class FinanceReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
FinanceReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finance-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finance-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/finance-reports/finance-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finance-reports.component.scss */ "./src/app/distribution/finance-reports/finance-reports/finance-reports.component.scss")).default]
    })
], FinanceReportsComponent);



/***/ }),

/***/ "./src/app/distribution/finance-reports/trail-balance/trail-balance.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/trail-balance/trail-balance.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 24px;\n  font-family: \"Monospace\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  text-align: left;\n}\n\n.pharma-finance {\n  padding: 16px;\n}\n\n.CashReceiptControls {\n  margin-top: 20px;\n  width: 100%;\n}\n\nbutton.mat-raised-button {\n  border-radius: 63px;\n  min-width: 101px;\n  height: 48px;\n  margin: 6px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-select-panel {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.dropdown-table {\n  display: grid;\n  grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr;\n  /* Adjust column widths */\n  align-items: center;\n  gap: 16px;\n  padding: 8px;\n}\n\n.dropdown-table.header {\n  font-weight: bold;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row:nth-child(even) {\n  background-color: #fafafa;\n}\n\n.dropdown-table span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\nmat-checkbox {\n  margin: 8px 0;\n}\n\n.search-container {\n  padding: 8px;\n}\n\n.search-field {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2ZpbmFuY2UtcmVwb3J0cy90cmFpbC1iYWxhbmNlL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcZmluYW5jZS1yZXBvcnRzXFx0cmFpbC1iYWxhbmNlXFx0cmFpbC1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vZmluYW5jZS1yZXBvcnRzL3RyYWlsLWJhbGFuY2UvdHJhaWwtYmFsYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0VBQWdELHlCQUFBO0VBQ2hELG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0UseUJBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGFBQUE7QUNFSjs7QURBRTtFQUNFLFlBQUE7QUNHSjs7QURBRTtFQUNFLFVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9maW5hbmNlLXJlcG9ydHMvdHJhaWwtYmFsYW5jZS90cmFpbC1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBoYXJtYWN5SGVhZGluZyB7XG4gICAgY29sb3I6ICMyZjhiYmQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9ub3NwYWNlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLnBoYXJtYS1maW5hbmNlIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIFxuICAuQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA2M3B4O1xuICAgIG1pbi13aWR0aDogMTAxcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbjogNnB4XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAzZnIgMmZyIDJmciAyZnI7IC8qIEFkanVzdCBjb2x1bW4gd2lkdGhzICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUuaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUucm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUucm93Om50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlIHNwYW4ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwYWRkaW5nOiA0cHg7XG4gIH1cbiAgXG4gIG1hdC1jaGVja2JveCB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIFxuICAuc2VhcmNoLWZpZWxkIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gICIsIi5waGFybWFjeUhlYWRpbmcge1xuICBjb2xvcjogIzJmOGJiZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJNb25vc3BhY2VcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnBoYXJtYS1maW5hbmNlIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgbWluLXdpZHRoOiAxMDFweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW46IDZweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tdGFibGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgM2ZyIDJmciAyZnIgMmZyO1xuICAvKiBBZGp1c3QgY29sdW1uIHdpZHRocyAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmRyb3Bkb3duLXRhYmxlLmhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLmRyb3Bkb3duLXRhYmxlLnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uZHJvcGRvd24tdGFibGUucm93Om50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbi5kcm9wZG93bi10YWJsZSBzcGFuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxubWF0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5zZWFyY2gtZmllbGQge1xuICB3aWR0aDogMzAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/distribution/finance-reports/trail-balance/trail-balance.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/distribution/finance-reports/trail-balance/trail-balance.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TrailBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailBalanceComponent", function() { return TrailBalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finance-reports.service */ "./src/app/distribution/finance-reports/finance-reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TrailBalanceComponent = class TrailBalanceComponent {
    constructor(fb, FinanceRepService, router) {
        this.fb = fb;
        this.FinanceRepService = FinanceRepService;
        this.router = router;
        this.step = 0;
        this.showReportdate = false;
        // accountSelectionControl: FormControl;
        this.isIndeterminate = false;
        // Datepicker filter to disable dates outside the financial year
        this.dateFilter = (date) => {
            if (!date)
                return false;
            return date >= this.financialYearStart && date <= this.financialYearEnd;
        };
        this.dayBookReportFormGroup = this.fb.group({
            tbType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reportType: [''],
            reportDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // this.accountSelectionControl = new FormControl([]);
    }
    ngOnInit() {
        // this.getAccounts();
        this.calculateFinancialYearDates();
        // this.createForm();
    }
    setStep(index) {
        this.step = index;
    }
    generateReport() {
        // console.log('Selected Accounts:', this.accountSelectionControl.value);
    }
    resetForm() {
        this.dayBookReportFormGroup.reset();
        // this.accountSelectionControl.setValue([]);
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
    reporttype() {
        if (this.dayBookReportFormGroup.controls.reportType.value == "datewise") {
            this.showReportdate = true;
        }
        else {
            this.showReportdate = false;
        }
    }
    goback() {
        this.router.navigate(['pharma/financeReports/FinanceReportsTransaction']);
    }
};
TrailBalanceComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _finance_reports_service__WEBPACK_IMPORTED_MODULE_3__["FinanceReportsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TrailBalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trail-balance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trail-balance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/finance-reports/trail-balance/trail-balance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trail-balance.component.scss */ "./src/app/distribution/finance-reports/trail-balance/trail-balance.component.scss")).default]
    })
], TrailBalanceComponent);



/***/ }),

/***/ "./src/app/shared/http-services/finance-report/finance-report.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/http-services/finance-report/finance-report.service.ts ***!
  \*******************************************************************************/
/*! exports provided: FinanceReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceReportService", function() { return FinanceReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core-http.service */ "./src/app/shared/http-services/core/core-http.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-constants */ "./src/app/shared/app-constants.ts");




let FinanceReportService = class FinanceReportService extends _core_core_http_service__WEBPACK_IMPORTED_MODULE_2__["CoreHttpService"] {
    GetStockByProducts(searchName) {
        const payload = {};
        payload.prodName = searchName;
        payload.prodId = 0;
        return this.httpService.doPost(_app_constants__WEBPACK_IMPORTED_MODULE_3__["APIConst"].GetStockByProducts, payload);
    }
    getAllCustomAccounts() {
        const payload = {
            accId: 0,
            accShName: '',
            accName: '',
            accAddress1: '',
            accAddress2: '',
            accCityId: 0,
            accDistrictId: 0,
            cityPinId: 0,
            accStateId: 0,
            accCountryId: 0,
            accAreaId: 0,
            accSchId: 0,
            accPhone: '',
            accMobile: '',
            accContactPerson: '',
            accCpersonMobile: '',
            accFirmTypeId: 0,
            accTranMode: 0,
            accOpBal: 0,
            accOpBalType: 0,
            accCredit: 0,
            accDebit: 0,
            accCreditLimit: 0,
            accDueDays: 0,
            accInterest: 0,
            accTcsPercent: 0,
            accHsnCode: 0,
            accSacCode: 0,
            accTaxSlabId: 0,
            accBankId1: 0,
            accRemarks: '',
            accBankAccNo1: '',
            accBankIFSC1: '',
            accBankId2: 0,
            accBankAccNo2: '',
            accBankIFSC2: '',
            allowSms: 0,
            smsMobile: '',
            allowWhatsApp: 0,
            whatsAppMobile: '',
            accEmail: '',
            accGSTMode: 0,
            firmId: 0,
            isActive: 0,
            taxcategoryId: 0,
            isRegistered: 0,
            isDeleted: 0,
            cityName: '',
            districtName: '',
            cityPincode: 0,
            stateName: '',
            tax: 0,
            firmName: '',
            taxCategoryName: '',
            firmType: '',
            firmTypeAlias: ''
        };
        return this.httpService.doPost(_app_constants__WEBPACK_IMPORTED_MODULE_3__["APIConst"].CUSTOMACCOUNTS, payload);
    }
    getCopyAccounts() {
        return this.httpService.doGet(_app_constants__WEBPACK_IMPORTED_MODULE_3__["APIConst"].AccountCopyAccoounts);
    }
    getAccountCopyData(payload) {
        return this.httpService.doPost(_app_constants__WEBPACK_IMPORTED_MODULE_3__["APIConst"].getAccountCopyData, payload);
        // return this.httpService.doGet(`${APIConst.GetPurachseRegister}?fromDate=${payload.fromDate}&toDate=${payload.toDate}&dateOption=${payload.dateOption}&reportType=${payload.reportType}&wantTaxWiseDetails=1 `);
    }
    AccountCopyExcel(payload) {
        return this.httpService.doPost(_app_constants__WEBPACK_IMPORTED_MODULE_3__["APIConst"].accountCopyExcel, payload);
    }
};
FinanceReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FinanceReportService);



/***/ })

}]);
//# sourceMappingURL=finance-reports-finance-reports-module-es2015.js.map