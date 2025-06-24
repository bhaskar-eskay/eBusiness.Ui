(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gst-reports-gst-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/gst-reports/gst-reports/gst-reports.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/gst-reports/gst-reports/gst-reports.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/gst-reports/gstr1-report/gstr1-report.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/gst-reports/gstr1-report/gstr1-report.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharma-finance\">\n    <div class=\"heading-container\">\n      <h4 class=\"pharmacyHeading\">GSTR 1</h4>\n    </div>\n    <br>\n  \n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <form [formGroup]=\"dayBookReportFormGroup\">\n          <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"CashReceiptControls\">\n            \n            <!-- Report Option -->\n            <mat-form-field fxFlex=\"30\" appearance=\"outline\">\n              <mat-label>Report Option</mat-label>\n              <mat-select formControlName=\"reportOption\" (selectionChange)=\"onReportOptionChange($event)\">\n                <mat-option value=\"datewise\">Datewise</mat-option>\n                <mat-option value=\"monthwise\">Monthwise</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- Monthwise Dropdown (Only visible when Monthwise is selected) -->\n            <div *ngIf=\"dayBookReportFormGroup.get('reportOption').value === 'monthwise'\">\n              <mat-form-field fxFlex=\"70\" appearance=\"outline\">\n                <mat-label>Month</mat-label>\n                <mat-select formControlName=\"month\">\n                  <mat-option value=\"april\">April</mat-option>\n                  <mat-option value=\"may\">May</mat-option>\n                  <mat-option value=\"june\">June</mat-option>\n                  <mat-option value=\"july\">July</mat-option>\n                  <mat-option value=\"august\">August</mat-option>\n                  <mat-option value=\"september\">September</mat-option>\n                  <mat-option value=\"october\">October</mat-option>\n                  <mat-option value=\"november\">November</mat-option>\n                  <mat-option value=\"december\">December</mat-option>\n                  <mat-option value=\"january\">January</mat-option>\n                  <mat-option value=\"february\">February</mat-option>\n                  <mat-option value=\"march\">March</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n  \n            <!-- Datewise Fields (Only visible when Datewise is selected) -->\n            <div *ngIf=\"dayBookReportFormGroup.get('reportOption').value === 'datewise'\">\n              <mat-form-field fxFlex=\"40\" appearance=\"outline\">\n                <mat-label>From Date</mat-label>\n                <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\" [matDatepickerFilter]=\"dateFilter\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDatePicker></mat-datepicker>\n              </mat-form-field>\n                &nbsp;\n              <mat-form-field fxFlex=\"40\" appearance=\"outline\">\n                <mat-label>To Date</mat-label>\n                <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\" [matDatepickerFilter]=\"dateFilter\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDatePicker></mat-datepicker>\n              </mat-form-field>\n            </div>\n  \n            <!-- Buttons -->\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"button-group\">\n              <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"generateReport()\">Generate</button>\n              <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"resetForm()\">Reset</button>\n            </div>\n          </div>\n        </form>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/gst-reports/gstr3b-report/gstr3b-report.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/gst-reports/gstr3b-report/gstr3b-report.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pharma-finance\">\n    <div class=\"heading-container\">\n      <h4 class=\"pharmacyHeading\">GSTR 3B</h4>\n    </div>\n    <br>\n  \n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <form [formGroup]=\"dayBookReportFormGroup\">\n          <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"CashReceiptControls\">\n            \n            <!-- Report Option -->\n            <mat-form-field fxFlex=\"30\" appearance=\"outline\">\n              <mat-label>Report Option</mat-label>\n              <mat-select formControlName=\"reportOption\" (selectionChange)=\"onReportOptionChange($event)\">\n                <mat-option value=\"datewise\">Datewise</mat-option>\n                <mat-option value=\"monthwise\">Monthwise</mat-option>\n              </mat-select>\n            </mat-form-field>\n  \n            <!-- Monthwise Dropdown (Only visible when Monthwise is selected) -->\n            <div *ngIf=\"dayBookReportFormGroup.get('reportOption').value === 'monthwise'\">\n              <mat-form-field fxFlex=\"70\" appearance=\"outline\">\n                <mat-label>Month</mat-label>\n                <mat-select formControlName=\"month\">\n                  <mat-option value=\"april\">April</mat-option>\n                  <mat-option value=\"may\">May</mat-option>\n                  <mat-option value=\"june\">June</mat-option>\n                  <mat-option value=\"july\">July</mat-option>\n                  <mat-option value=\"august\">August</mat-option>\n                  <mat-option value=\"september\">September</mat-option>\n                  <mat-option value=\"october\">October</mat-option>\n                  <mat-option value=\"november\">November</mat-option>\n                  <mat-option value=\"december\">December</mat-option>\n                  <mat-option value=\"january\">January</mat-option>\n                  <mat-option value=\"february\">February</mat-option>\n                  <mat-option value=\"march\">March</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n  \n            <!-- Datewise Fields (Only visible when Datewise is selected) -->\n            <div *ngIf=\"dayBookReportFormGroup.get('reportOption').value === 'datewise'\">\n              <mat-form-field fxFlex=\"40\" appearance=\"outline\">\n                <mat-label>From Date</mat-label>\n                <input matInput [matDatepicker]=\"fromDatePicker\" formControlName=\"fromDate\" [matDatepickerFilter]=\"dateFilter\">\n                <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #fromDatePicker></mat-datepicker>\n              </mat-form-field>\n                &nbsp;\n              <mat-form-field fxFlex=\"40\" appearance=\"outline\">\n                <mat-label>To Date</mat-label>\n                <input matInput [matDatepicker]=\"toDatePicker\" formControlName=\"toDate\" [matDatepickerFilter]=\"dateFilter\">\n                <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n                <mat-datepicker #toDatePicker></mat-datepicker>\n              </mat-form-field>\n            </div>\n  \n            <!-- Buttons -->\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"button-group\">\n              <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"generateReport()\">Generate</button>\n              <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"resetForm()\">Reset</button>\n            </div>\n          </div>\n        </form>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n  ");

/***/ }),

/***/ "./src/app/distribution/gst-reports/gst-reports-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/distribution/gst-reports/gst-reports-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: GstReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstReportsRoutingModule", function() { return GstReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gstr1_report_gstr1_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gstr1-report/gstr1-report.component */ "./src/app/distribution/gst-reports/gstr1-report/gstr1-report.component.ts");
/* harmony import */ var _gst_reports_gst_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gst-reports/gst-reports.component */ "./src/app/distribution/gst-reports/gst-reports/gst-reports.component.ts");
/* harmony import */ var _gstr3b_report_gstr3b_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gstr3b-report/gstr3b-report.component */ "./src/app/distribution/gst-reports/gstr3b-report/gstr3b-report.component.ts");






const routes = [
    { path: '', component: _gst_reports_gst_reports_component__WEBPACK_IMPORTED_MODULE_4__["GstReportsComponent"],
        children: [
            { path: 'gstr1', component: _gstr1_report_gstr1_report_component__WEBPACK_IMPORTED_MODULE_3__["Gstr1ReportComponent"] },
            { path: 'gstr3b', component: _gstr3b_report_gstr3b_report_component__WEBPACK_IMPORTED_MODULE_5__["Gstr3bReportComponent"] }
        ]
    }
];
// const routes: Routes = [
//   {path: '', component: FinanceReportsComponent,
//     children:[
//       // {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//       {path:'accountCopy', component:AccountCopyComponent},
//       {path:'book', component:DayBookComponent},
//       {path:'trailBalance',component:TrailBalanceComponent},
//       {path:'debitorsOutstanding',component:DebtorsOutstandingComponent},
//       {path:'ageingAnalysis',component:AgeingAnalysisComponent},
//       {path:'creditorsOutstanding',component:CreditorsOutstandingComponent}
//     ]
// }];
let GstReportsRoutingModule = class GstReportsRoutingModule {
};
GstReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GstReportsRoutingModule);



/***/ }),

/***/ "./src/app/distribution/gst-reports/gst-reports.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/distribution/gst-reports/gst-reports.module.ts ***!
  \****************************************************************/
/*! exports provided: GstReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstReportsModule", function() { return GstReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _gst_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gst-reports-routing.module */ "./src/app/distribution/gst-reports/gst-reports-routing.module.ts");
/* harmony import */ var _gstr1_report_gstr1_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gstr1-report/gstr1-report.component */ "./src/app/distribution/gst-reports/gstr1-report/gstr1-report.component.ts");
/* harmony import */ var _gstr3b_report_gstr3b_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gstr3b-report/gstr3b-report.component */ "./src/app/distribution/gst-reports/gstr3b-report/gstr3b-report.component.ts");
/* harmony import */ var _gst_reports_gst_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gst-reports/gst-reports.component */ "./src/app/distribution/gst-reports/gst-reports/gst-reports.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let GstReportsModule = class GstReportsModule {
};
GstReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_gstr1_report_gstr1_report_component__WEBPACK_IMPORTED_MODULE_4__["Gstr1ReportComponent"], _gstr3b_report_gstr3b_report_component__WEBPACK_IMPORTED_MODULE_5__["Gstr3bReportComponent"], _gst_reports_gst_reports_component__WEBPACK_IMPORTED_MODULE_6__["GstReportsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gst_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["GstReportsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]
    })
], GstReportsModule);



/***/ }),

/***/ "./src/app/distribution/gst-reports/gst-reports/gst-reports.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/distribution/gst-reports/gst-reports/gst-reports.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9nc3QtcmVwb3J0cy9nc3QtcmVwb3J0cy9nc3QtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/distribution/gst-reports/gst-reports/gst-reports.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/distribution/gst-reports/gst-reports/gst-reports.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GstReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstReportsComponent", function() { return GstReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GstReportsComponent = class GstReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
GstReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gst-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gst-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/gst-reports/gst-reports/gst-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gst-reports.component.scss */ "./src/app/distribution/gst-reports/gst-reports/gst-reports.component.scss")).default]
    })
], GstReportsComponent);



/***/ }),

/***/ "./src/app/distribution/gst-reports/gstr1-report/gstr1-report.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/distribution/gst-reports/gstr1-report/gstr1-report.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 24px;\n  font-family: \"Monospace\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  text-align: left;\n}\n\n.pharma-finance {\n  padding: 16px;\n}\n\n.CashReceiptControls {\n  margin-top: 20px;\n  width: 100%;\n}\n\nbutton.mat-raised-button {\n  border-radius: 63px;\n  min-width: 101px;\n  height: 48px;\n  margin: 6px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-select-panel {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.dropdown-table {\n  display: grid;\n  grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr;\n  /* Adjust column widths */\n  align-items: center;\n  gap: 16px;\n  padding: 8px;\n}\n\n.dropdown-table.header {\n  font-weight: bold;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row:nth-child(even) {\n  background-color: #fafafa;\n}\n\n.dropdown-table span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\nmat-checkbox {\n  margin: 8px 0;\n}\n\n.search-container {\n  padding: 8px;\n}\n\n.search-field {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2dzdC1yZXBvcnRzL2dzdHIxLXJlcG9ydC9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXBwXFxkaXN0cmlidXRpb25cXGdzdC1yZXBvcnRzXFxnc3RyMS1yZXBvcnRcXGdzdHIxLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL2dzdC1yZXBvcnRzL2dzdHIxLXJlcG9ydC9nc3RyMS1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSw4Q0FBQTtFQUFnRCx5QkFBQTtFQUNoRCxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDRTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURDRTtFQUNFLHlCQUFBO0FDRUo7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0U7RUFDRSxhQUFBO0FDRUo7O0FEQUU7RUFDRSxZQUFBO0FDR0o7O0FEQUU7RUFDRSxVQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vZ3N0LXJlcG9ydHMvZ3N0cjEtcmVwb3J0L2dzdHIxLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waGFybWFjeUhlYWRpbmcge1xuICAgIGNvbG9yOiAjMmY4YmJkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogJ01vbm9zcGFjZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC5waGFybWEtZmluYW5jZSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIGJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgICBtaW4td2lkdGg6IDEwMXB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBtYXJnaW46IDZweFxuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgM2ZyIDJmciAyZnIgMmZyOyAvKiBBZGp1c3QgY29sdW1uIHdpZHRocyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLmhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLnJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRhYmxlLnJvdzpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZSBzcGFuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG4gIFxuICBtYXQtY2hlY2tib3gge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICBcbiAgLnNlYXJjaC1maWVsZCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICAiLCIucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5waGFybWEtZmluYW5jZSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDYzcHg7XG4gIG1pbi13aWR0aDogMTAxcHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luOiA2cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXNlbGVjdC1wYW5lbCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmRyb3Bkb3duLXRhYmxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDNmciAyZnIgMmZyIDJmcjtcbiAgLyogQWRqdXN0IGNvbHVtbiB3aWR0aHMgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5kcm9wZG93bi10YWJsZS5oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5kcm9wZG93bi10YWJsZS5yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLmRyb3Bkb3duLXRhYmxlLnJvdzpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4uZHJvcGRvd24tdGFibGUgc3BhbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uc2VhcmNoLWZpZWxkIHtcbiAgd2lkdGg6IDMwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/distribution/gst-reports/gstr1-report/gstr1-report.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/distribution/gst-reports/gstr1-report/gstr1-report.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Gstr1ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gstr1ReportComponent", function() { return Gstr1ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let Gstr1ReportComponent = class Gstr1ReportComponent {
    constructor(fb) {
        this.fb = fb;
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
        // this.dayBookReportFormGroup = this.fb.group({
        //   fromDate: [null, Validators.required],
        //   toDate: [null, Validators.required],
        //   bookType: ['']
        // });
        // this.accountSelectionControl = new FormControl([]);
    }
    ngOnInit() {
        this.dayBookReportFormGroup = this.fb.group({
            reportOption: [''],
            month: [''],
            fromDate: [''],
            toDate: ['']
        });
    }
    setStep(index) {
        this.step = index;
    }
    generateReport() {
        console.log('Selected Accounts:', this.accountSelectionControl.value);
    }
    // Method to handle Report Option change
    onReportOptionChange(event) {
        const reportOption = event.value;
        if (reportOption === 'monthwise') {
            this.dayBookReportFormGroup.get('fromDate').reset();
            this.dayBookReportFormGroup.get('toDate').reset();
        }
    }
    resetForm() {
        this.dayBookReportFormGroup.reset();
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
};
Gstr1ReportComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
Gstr1ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gstr1-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gstr1-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/gst-reports/gstr1-report/gstr1-report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gstr1-report.component.scss */ "./src/app/distribution/gst-reports/gstr1-report/gstr1-report.component.scss")).default]
    })
], Gstr1ReportComponent);



/***/ }),

/***/ "./src/app/distribution/gst-reports/gstr3b-report/gstr3b-report.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/distribution/gst-reports/gstr3b-report/gstr3b-report.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 24px;\n  font-family: \"Monospace\", sans-serif;\n  font-weight: bold;\n  margin: 0;\n  text-align: left;\n}\n\n.pharma-finance {\n  padding: 16px;\n}\n\n.CashReceiptControls {\n  margin-top: 20px;\n  width: 100%;\n}\n\nbutton.mat-raised-button {\n  border-radius: 63px;\n  min-width: 101px;\n  height: 48px;\n  margin: 6px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.mat-select-panel {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.dropdown-table {\n  display: grid;\n  grid-template-columns: 2fr 2fr 3fr 2fr 2fr 2fr;\n  /* Adjust column widths */\n  align-items: center;\n  gap: 16px;\n  padding: 8px;\n}\n\n.dropdown-table.header {\n  font-weight: bold;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.dropdown-table.row:nth-child(even) {\n  background-color: #fafafa;\n}\n\n.dropdown-table span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 4px;\n}\n\nmat-checkbox {\n  margin: 8px 0;\n}\n\n.search-container {\n  padding: 8px;\n}\n\n.search-field {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL2dzdC1yZXBvcnRzL2dzdHIzYi1yZXBvcnQvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxnc3QtcmVwb3J0c1xcZ3N0cjNiLXJlcG9ydFxcZ3N0cjNiLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL2dzdC1yZXBvcnRzL2dzdHIzYi1yZXBvcnQvZ3N0cjNiLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0VBQWdELHlCQUFBO0VBQ2hELG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ0VKOztBRENFO0VBQ0UseUJBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLGFBQUE7QUNFSjs7QURBRTtFQUNFLFlBQUE7QUNHSjs7QURBRTtFQUNFLFVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9nc3QtcmVwb3J0cy9nc3RyM2ItcmVwb3J0L2dzdHIzYi1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhhcm1hY3lIZWFkaW5nIHtcbiAgICBjb2xvcjogIzJmOGJiZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb25vc3BhY2UnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICAucGhhcm1hLWZpbmFuY2Uge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBidXR0b24ubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDYzcHg7XG4gICAgbWluLXdpZHRoOiAxMDFweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbWFyZ2luOiA2cHhcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDNmciAyZnIgMmZyIDJmcjsgLyogQWRqdXN0IGNvbHVtbiB3aWR0aHMgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZS5oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZS5yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10YWJsZS5yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICB9XG4gIFxuICAuZHJvcGRvd24tdGFibGUgc3BhbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICBcbiAgbWF0LWNoZWNrYm94IHtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgXG4gIC5zZWFyY2gtZmllbGQge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgIiwiLnBoYXJtYWN5SGVhZGluZyB7XG4gIGNvbG9yOiAjMmY4YmJkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucGhhcm1hLWZpbmFuY2Uge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uQ2FzaFJlY2VpcHRDb250cm9scyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA2M3B4O1xuICBtaW4td2lkdGg6IDEwMXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbjogNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1zZWxlY3QtcGFuZWwge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5kcm9wZG93bi10YWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAzZnIgMmZyIDJmciAyZnI7XG4gIC8qIEFkanVzdCBjb2x1bW4gd2lkdGhzICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uZHJvcGRvd24tdGFibGUuaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uZHJvcGRvd24tdGFibGUucm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5kcm9wZG93bi10YWJsZS5yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLmRyb3Bkb3duLXRhYmxlIHNwYW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcGFkZGluZzogNHB4O1xufVxuXG5tYXQtY2hlY2tib3gge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnNlYXJjaC1maWVsZCB7XG4gIHdpZHRoOiAzMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/distribution/gst-reports/gstr3b-report/gstr3b-report.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/distribution/gst-reports/gstr3b-report/gstr3b-report.component.ts ***!
  \***********************************************************************************/
/*! exports provided: Gstr3bReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gstr3bReportComponent", function() { return Gstr3bReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let Gstr3bReportComponent = class Gstr3bReportComponent {
    constructor(fb) {
        this.fb = fb;
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
        // this.dayBookReportFormGroup = this.fb.group({
        //   fromDate: [null, Validators.required],
        //   toDate: [null, Validators.required],
        //   bookType: ['']
        // });
        // this.accountSelectionControl = new FormControl([]);
    }
    ngOnInit() {
        this.dayBookReportFormGroup = this.fb.group({
            reportOption: [''],
            month: [''],
            fromDate: [''],
            toDate: ['']
        });
    }
    setStep(index) {
        this.step = index;
    }
    generateReport() {
        console.log('Selected Accounts:', this.accountSelectionControl.value);
    }
    // Method to handle Report Option change
    onReportOptionChange(event) {
        const reportOption = event.value;
        if (reportOption === 'monthwise') {
            this.dayBookReportFormGroup.get('fromDate').reset();
            this.dayBookReportFormGroup.get('toDate').reset();
        }
    }
    resetForm() {
        this.dayBookReportFormGroup.reset();
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
};
Gstr3bReportComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
Gstr3bReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gstr3b-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gstr3b-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/gst-reports/gstr3b-report/gstr3b-report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gstr3b-report.component.scss */ "./src/app/distribution/gst-reports/gstr3b-report/gstr3b-report.component.scss")).default]
    })
], Gstr3bReportComponent);



/***/ })

}]);
//# sourceMappingURL=gst-reports-gst-reports-module-es2015.js.map