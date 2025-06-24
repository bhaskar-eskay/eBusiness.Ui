function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["out-ward-out-ward-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/firm-entry/firm-entry.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/firm-entry/firm-entry.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardFirmEntryFirmEntryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"70\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">Sales Invoice(SAL) Entry</h4>\n    </div>\n    <div fxFlex=\"10\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"showOutwardEntryDetailTemplate()\">Add\n        Item</button>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button mat-raised-button [routerLink]=\"['../saleInvoiceList']\" color=\"primary\">Sale Invoice List</button>\n    </div>\n\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\" class=\"fieldCntrl\">\n    <form [formGroup]=\"saleInvoiceHeadFormGroup\">\n      <div fxFlex=\"100\" class=\"invoice-form\" fxLayoutGap=\"5px\">\n\n        \n        <mat-form-field appearance=\"outline\">\n          <mat-label>SAL Date</mat-label>\n          <input matInput [matDatepicker]=\"salesDate\" formControlName=\"invDate\" appDateMask>\n          <mat-datepicker-toggle matSuffix [for]=\"salesDate\"></mat-datepicker-toggle>\n          <mat-datepicker #salesDate></mat-datepicker>\n        </mat-form-field>\n\n        <app-autocomplete [definition]=\"customAccountAutoCompleteDef\" [control]=\"saleInvoiceHeadFormGroup.get('accId')\"\n          [optionsTableDefinition]=\"customAccountsOptsTable\"></app-autocomplete>\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Sh.Name</mat-label>\n          <input matInput formControlName=\"accShName\"\n            [value]=\"saleInvoiceHeadFormGroup.get('accId').value? saleInvoiceHeadFormGroup.get('accId').value.accShName:''\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>City Name</mat-label>\n          <input matInput formControlName=\"cityId\"\n            [value]=\"saleInvoiceHeadFormGroup.get('accId').value? saleInvoiceHeadFormGroup.get('accId').value.cityName:''\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Mobile</mat-label>\n          <input matInput formControlName=\"accMobile\"\n            [value]=\"saleInvoiceHeadFormGroup.get('accId').value? saleInvoiceHeadFormGroup.get('accId').value.accMobile:''\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>GSTIN</mat-label>\n          <input matInput formControlName=\"accGstIn\"\n            [value]=\"saleInvoiceHeadFormGroup.get('accId').value? saleInvoiceHeadFormGroup.get('accId').value.accGstIn:''\">\n        </mat-form-field>\n\n        <app-autocomplete [definition]=\"companyGroupAutoCompleteDef\" [control]=\"saleInvoiceHeadFormGroup.get('compId')\"\n          [optionsTableDefinition]=\"companyGroupOptsTable\"></app-autocomplete>\n\n        <app-autocomplete [definition]=\"modeAutoCompleteDef\" [control]=\"saleInvoiceHeadFormGroup.get('mode')\">\n        </app-autocomplete>\n\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Delivery To</mat-label>\n          <input matInput formControlName=\"deliveryTo\">\n        </mat-form-field>\n\n        <button mat-raised-button color=\"primary\" (click)=\"onSaveOrUpdateOutwardHead()\">{{outwardHeadBtnText}}</button>\n        <button mat-raised-button (click)=\"onResetForm()\">Reset</button>\n        <button mat-raised-button (click)=\"goBack()\">Back</button>\n\n      </div>\n    </form>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-credit-note-customer-list/general-credit-note-customer-list.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-credit-note-customer-list/general-credit-note-customer-list.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardGeneralCreditNoteCustomerListGeneralCreditNoteCustomerListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">General Credit Notes Issue To Customer(GCR) List</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button mat-raised-button [routerLink]=\"['../generalCreditNotesIssueToCustomers']\" color=\"primary\">Back</button>\n    </div>\n    \n    </div>\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"GCR-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>From Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>To Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>GCR No</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Customer  Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>City Name</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>GSTIN</mat-label>\n            <input matInput>\n          </mat-form-field>   \n          <mat-form-field>\n            <mat-label>Mode</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>Inv.Value</mat-label>\n            <input matInput>\n          </mat-form-field>      \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          <button mat-raised-button>Reset</button>       \n        \n        </div>\n        </div>\n\n\n    \n    <div class=\"mt-2\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> GCR Date</th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>GCR No </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductType\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"expDate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> City Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"gstin\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> GSTIN </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                  </ng-container>\n           \n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n    \n   \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-credit-note-customer/general-credit-note-customer.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-credit-note-customer/general-credit-note-customer.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardGeneralCreditNoteCustomerGeneralCreditNoteCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-3\">\n\n\n\n  <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">\n        General Credit Notes Issue To Customer(GCR) Entry</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n        \n        <button mat-raised-button color=\"primary\" (click)=\"clikRegisters()\">GCR Register</button>&nbsp;\n      \n      <button mat-raised-button [routerLink]=\"['../GCRList']\" color=\"primary\">Credit List</button>\n      <button type=\"button\" mat-raised-button [routerLink]=\"['../OutwardTransaction']\">Back</button>\n    </div>\n\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n    <div fxFlex=\"100\" class=\"other-form\" fxLayoutGap=\"5px\">\n      <form [formGroup]=\"generalCreditNoteHeadFormGroup\">\n        <mat-form-field>\n          <mat-label>GCR Date</mat-label>\n          <input matInput formControlName=\"invDate\" [matDatepicker]=\"picker\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n        <app-autocomplete [definition]=\"customAccountAutoCompleteDef\"\n          [control]=\"generalCreditNoteHeadFormGroup.get('accName')\" [optionsTableDefinition]=\"customAccountsOptsTable\">\n        </app-autocomplete>\n\n        <mat-form-field>\n          <mat-label>Sh.Name</mat-label>\n          <input matInput formControlName=\"accShName\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>City Name</mat-label>\n          <input matInput formControlName=\"cityName\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Mobile</mat-label>\n          <input matInput formControlName=\"accMobile\">\n        </mat-form-field>\n        <mat-form-field>\n\n          <mat-label>GSTIN</mat-label>\n          <input matInput formControlName=\"accGSTIN\">\n        </mat-form-field>\n\n      </form>\n\n      <button mat-raised-button color=\"primary\">Save</button>\n      <button mat-raised-button>Reset</button>\n\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n    <div fxFlex=\"100\" fxLayoutGap=\"5px\">\n      <form [formGroup]=\"generalCreditNoteDetailFormGroup\">\n        <mat-form-field>\n          <mat-label>Description</mat-label>\n          <input matInput formControlName=\"description\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Amount</mat-label>\n          <input matInput formControlName=\"amount\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>HSN Code</mat-label>\n          <input matInput formControlName=\"hsnCode\">\n        </mat-form-field>\n\n\n\n        <mat-form-field>\n          <mat-label>Tax%</mat-label>\n          <input matInput formControlName=\"tax\">\n        </mat-form-field>\n\n      </form>\n\n\n\n      <button mat-raised-button color=\"primary\">Save</button>\n\n      <button mat-raised-button>Cancel</button>\n\n    </div>\n  </div>\n\n  <div class=\"mt-2\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <div fxFlex=\"100\">\n\n        <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n          <table mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"shName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Description</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>HSN Code </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductPack\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductType\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Tax% </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n            </ng-container>\n\n\n\n            <ng-container matColumnDef=\"actions\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n              <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <mat-card class=\"mt-3 p-2\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <div fxFlex=\"55\">\n        <table class=\"table table-bordered table-sm\">\n          <thead>\n            <th> GST% </th>\n            <th> Taxable </th>\n          </thead>\n          <tbody>\n            <tr>\n              <td> 18% </td>\n              <td> 2000 </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div fxFlex=\"45\" class=\"pur-values-form\" fxLayoutGap=\"5px\">\n        <p> Gross.Value : </p>\n        <p> Tax.Value : </p>\n        <p> Inv.Value : </p>\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Remarks</mat-label>\n          <textarea></textarea>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"text-right\">\n      <button mat-raised-button color=\"primary\">Save</button> &nbsp;\n      <button mat-raised-button>Reset</button>\n    </div>\n\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-debit-note-customer-list/general-debit-note-customer-list.component.html":
  /*!**************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-debit-note-customer-list/general-debit-note-customer-list.component.html ***!
    \**************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardGeneralDebitNoteCustomerListGeneralDebitNoteCustomerListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">General Debit Notes Issue To Customers(GDB) List</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button mat-raised-button [routerLink]=\"['../generalDebitNotesIssueToCustomers']\" color=\"primary\">Back</button>\n    </div>\n    \n    </div>\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"GCR-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>From Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>To Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>GDB No</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Customer  Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>City Name</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>GSTIN</mat-label>\n            <input matInput>\n          </mat-form-field>   \n          <mat-form-field>\n            <mat-label>Mode</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>Inv.Value</mat-label>\n            <input matInput>\n          </mat-form-field>      \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          <button mat-raised-button>Reset</button>       \n        \n        </div>\n        </div>\n\n\n    \n    <div class=\"mt-2\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> GDB Date</th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>GDB No </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductType\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"expDate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> City Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"gstin\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> GSTIN </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                  </ng-container>\n           \n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n    \n   \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-debit-note-customer/general-debit-note-customer.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-debit-note-customer/general-debit-note-customer.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardGeneralDebitNoteCustomerGeneralDebitNoteCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-3\">\n\n\n\n  <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">\n        General Debit Notes Issue To Customers(GDB) Entry</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button mat-raised-button color=\"primary\" (click)=\"clikRegisters()\">GDB Register</button>&nbsp;\n      <button mat-raised-button [routerLink]=\"['../GDBList']\" color=\"primary\">Debit List</button>\n    </div>\n\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n    <div fxFlex=\"100\" class=\"other-form\" fxLayoutGap=\"10px\">\n      <form [formGroup]=\"generalDebitNoteCustomerHeadFormGroup\">\n\n        <mat-form-field>\n          <mat-label>GDB Date</mat-label>\n          <input matInput formControlName=\"invDate\" [matDatepicker]=\"picker\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n\n        <app-autocomplete [definition]=\"customAccountAutoCompleteDef\"\n          [control]=\"generalDebitNoteCustomerDetailFormGroup.get('accName')\"\n          [optionsTableDefinition]=\"customAccountsOptsTable\"></app-autocomplete>\n\n        <mat-form-field>\n          <mat-label>Sh.Name</mat-label>\n          <input matInput formControlName=\"accShName\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>City Name</mat-label>\n          <input matInput formControlName=\"cityName\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Mobile</mat-label>\n          <input matInput formControlName=\"accMobile\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>GSTIN</mat-label>\n          <input matInput formControlName=\"accGSTIN\">\n        </mat-form-field>\n      </form>\n\n\n      <button mat-raised-button color=\"primary\">Save</button>\n      <button mat-raised-button>Reset</button>\n      <button type=\"button\" mat-raised-button [routerLink]=\"['../OutwardTransaction']\">Back</button>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n    <div fxFlex=\"100\" fxLayoutGap=\"5px\">\n      <form [formGroup]=\"generalDebitNoteCustomerDetailFormGroup\">\n\n        <mat-form-field>\n          <mat-label>Description</mat-label>\n          <input matInput formControlName=\"description\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Amount</mat-label>\n          <input matInput formControlName=\"amount\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>HSN Code</mat-label>\n          <input matInput formControlName=\"hsnCode\">\n        </mat-form-field>\n\n\n        <mat-form-field>\n          <mat-label>Tax%</mat-label>\n          <input matInput formControlName=\"tax\">\n        </mat-form-field>\n\n\n      </form>\n\n\n      <button mat-raised-button color=\"primary\">Save</button>\n\n      <button mat-raised-button>Cancel</button>\n\n    </div>\n  </div>\n\n  <div class=\"mt-2\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <div fxFlex=\"100\">\n\n        <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n          <table mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"shName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Description</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>HSN Code </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductPack\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductType\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Tax% </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n            </ng-container>\n\n\n\n            <ng-container matColumnDef=\"actions\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n              <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <mat-card class=\"mt-3 p-2\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <div fxFlex=\"55\">\n        <table class=\"table table-bordered table-sm\">\n          <thead>\n            <th> GST% </th>\n            <th> Taxable </th>\n          </thead>\n          <tbody>\n            <tr>\n              <td> 18% </td>\n              <td> 2000 </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div fxFlex=\"45\" class=\"pur-values-form\" fxLayoutGap=\"5px\">\n        <p> Gross.Value : </p>\n        <p> Tax.Value : </p>\n        <p> Inv.Value : </p>\n\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Remarks</mat-label>\n          <textarea matInput></textarea>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"text-right\">\n      <button mat-raised-button color=\"primary\">Save</button> &nbsp;\n      <button mat-raised-button>Reset</button>\n    </div>\n\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/internalstock-adj-minus/internalstock-adj-minus.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/internalstock-adj-minus/internalstock-adj-minus.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardInternalstockAdjMinusInternalstockAdjMinusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-3\">\n\n\n\n  <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">Internal Stock Adjustments Minus(SADJM) Entry</h4>\n    </div>\n    <div fxFlex=\"25\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      \n        <button mat-raised-button color=\"primary\" (click)=\"clikRegisters()\">SADJM Register</button>\n      \n      <!-- <button mat-raised-button [routerLink]=\"['../OSALList']\" color=\"primary\">Internal Minus List</button> -->\n    </div>\n\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n    <div fxFlex=\"30\" class=\"return-form\" fxLayoutGap=\"5px\">\n      <form [formGroup]=\"internalStockAdjMinusHeadFormGroup\">\n\n        <mat-form-field class=\"mr-3\">\n          <mat-label>SADJM Date</mat-label>\n          <input matInput formControlName=\"invDate\" [matDatepicker]=\"picker\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Remarks</mat-label>\n          <input matInput formControlName=\"remarks\">\n        </mat-form-field>\n      </form>\n    </div>\n    <div fxFlex=\"40\" fxLayoutGap=\"5px\">\n      <button mat-raised-button color=\"primary\">Save</button>\n      <button mat-raised-button>Reset</button>\n      <button mat-raised-button>Cancel</button>\n      <button type=\"button\" mat-raised-button [routerLink]=\"['../OutwardTransaction']\">Back</button>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n    <div fxFlex=\"100\" class=\"minus-form\" fxLayoutGap=\"5px\">\n      <form [formGroup]=\"internalStockAdjMinusDetailFormGroup\">\n\n        <app-autocomplete [definition]=\"customProductAutoCompleteDef\" [optionsTableDefinition]=\"customProductOptsTable\"\n          [control]=\"internalStockAdjMinusDetailFormGroup.get('prodName')\" [autofocus]=\"true\" \n          nextElementId=\"addBatchProductId\" [dependent]=\"batchAutoComplete\"></app-autocomplete>\n\n        <mat-form-field>\n          <mat-label>Sh.Name</mat-label>\n          <input matInput formControlName=\"prodShName\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Product Pack</mat-label>\n          <input matInput formControlName=\"prodPackName\">\n        </mat-form-field>\n\n\n        <app-autocomplete [definition]=\"batchAutoCompleteDef\" [optionsTableDefinition]=\"batchOptsTable\"\n          [control]=\"internalStockAdjMinusDetailFormGroup.get('batch')\" id=\"addBatchProductId\" #batchAutoComplete>\n        </app-autocomplete>\n\n\n        <mat-form-field>\n          <mat-label>Qty.</mat-label>\n          <input matInput formControlName=\"issQty\">\n        </mat-form-field>\n\n\n        <mat-form-field>\n          <mat-label>Qty.Disc</mat-label>\n          <input matInput formControlName=\"issQtyDisc\">\n        </mat-form-field>\n      </form>\n\n      <button mat-raised-button color=\"primary\">Save</button>\n      <button mat-raised-button>Reset</button>\n      <button mat-raised-button>Cancel</button>\n\n    </div>\n  </div>\n\n  <div class=\"mt-2\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <div fxFlex=\"100\">\n\n        <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n          <table mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"shName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Product Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductPack\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Product Pack </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"ProductType\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Batch </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"expDate\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Exp.Date </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"companyName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Qty </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"tax\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Qty.Disc </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.tax}} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"actions\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n              <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/other-sales-list/other-sales-list.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/other-sales-list/other-sales-list.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardOtherSalesListOtherSalesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">Other Sales (OSAL) List</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button mat-raised-button [routerLink]=\"['../otherSales']\" color=\"primary\">Back</button>\n    </div>\n    \n    </div>\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"osal-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>From Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>To Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>OSAL No</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Customer  Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>City Name</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>GSTIN</mat-label>\n            <input matInput>\n          </mat-form-field>   \n          <mat-form-field>\n            <mat-label>Mode</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>Inv.Value</mat-label>\n            <input matInput>\n          </mat-form-field>      \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          <button mat-raised-button>Reset</button>       \n        \n        </div>\n        </div>\n\n\n    \n    <div class=\"mt-2\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> OSAL Date</th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>OSAL No </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductType\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"expDate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> City Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"gstin\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> GSTIN </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                  </ng-container>\n           \n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n    \n   \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/other-sales/other-sales.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/other-sales/other-sales.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardOtherSalesOtherSalesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">Other Sales (OSAL) Entry</h4>\n    </div>\n    <div fxFlex=\"25\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n              \n        <button mat-raised-button color=\"primary\" (click)=\"clikRegisters()\">Other Sales Register</button>&nbsp;\n      \n      <button mat-raised-button [routerLink]=\"['../OSALList']\" color=\"primary\">Other Sales List</button>\n    </div>\n    \n    </div>\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"other-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>OSAL Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Customer Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>City Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Mobile</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>GSTIN</mat-label>\n            <input matInput>\n          </mat-form-field>       \n          <mat-form-field>\n            <mat-label>Mode</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>Tax.Eligibilety</mat-label>\n            <input matInput>\n          </mat-form-field>  \n        \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          <button mat-raised-button>Reset</button>       \n          <button type=\"button\" mat-raised-button [routerLink]=\"['../OutwardTransaction']\">Back</button>\n        </div>\n        </div>\n\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>Description</mat-label>\n            <input matInput>\n          </mat-form-field>\n        \n          <mat-form-field>\n            <mat-label>HSN Code</mat-label>\n            <input matInput>\n          </mat-form-field>    \n\n          <mat-form-field>\n            <mat-label>Amount</mat-label>\n            <input matInput>\n          </mat-form-field>   \n\n          <mat-form-field>\n            <mat-label>Tax%</mat-label>\n            <input matInput>\n          </mat-form-field>   \n\n          \n          <mat-form-field>\n            <mat-label>Ledger A/c</mat-label>\n            <input matInput>\n          </mat-form-field>   \n\n          \n   \n        \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          \n          <button mat-raised-button>Cancel</button>\n        \n        </div>\n        </div>\n    \n    <div class=\"mt-2\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Description</th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>HSN Code </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductType\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Tax% </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"expDate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Ledger A/c </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                </ng-container>\n           \n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n    \n    <mat-card class=\"mt-3 p-2\"> \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"55\">\n            <table class=\"table table-bordered table-sm\">\n                <thead>\n                    <th> GST% </th>\n                    <th> Taxable </th>                  \n                </thead>\n                <tbody>\n                    <tr>\n                        <td> 18% </td>\n                        <td> 2000 </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div fxFlex=\"45\" class=\"pur-values-form\" fxLayoutGap=\"5px\">   \n          <mat-form-field appearance=\"fill\">\n            <mat-label>Remarks</mat-label>\n            <textarea matInput></textarea>\n          </mat-form-field>  \n        </div>\n        </div>    \n        <div class=\"text-right\">\n            <button mat-raised-button color=\"primary\">Save</button>  &nbsp;\n            <button mat-raised-button>Reset</button>\n        </div>\n    \n    </mat-card>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/out-ward.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/out-ward.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardOutWardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/outward-registers/outward-registers.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/outward-registers/outward-registers.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardOutwardRegistersOutwardRegistersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-5 button-icons\">    \n    \n    <div class=\"row mx-0 mt-3\" style=\"column-gap: 20px;\">\n\n        <button class=\"btn btn-info p-4 col-md-2 mb-2\" *ngFor=\"let item of menuArray\" (click)=\"trans(item?.menuPath)\" >\n    \n            <div><i class=\"mt-1 fa fa-file-signature\"></i></div>                    \n            <div class=\"text-center\" style=\"white-space: normal\">{{item?.menuName + ' Register'}} </div>\n\n        </button>\n               \n    \n    </div>\n\n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/outward-transaction/outward-transaction.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/outward-transaction/outward-transaction.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardOutwardTransactionOutwardTransactionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-5 button-icons\">\n\n    <div class=\"row mx-0 mt-3\" style=\"column-gap: 20px;\">\n\n        <button class=\"btn btn-info p-4 col-md-2 mb-2\" *ngFor=\"let item of menuArray\" (click)=\"trans(item?.menuPath)\">\n\n            <div *ngIf=\"item.menuName !== '' \">\n                <div *ngIf=\"item?.menuName == 'Sales Orders' \"><i class=\"mt-1 fa fa-shopping-cart\"></i></div>\n\n                <div *ngIf=\"item?.menuName == 'Sales Delivery Challans' || item?.menuName == 'Sales Invoices' \">\n                    <div><i class=\"fas fa-arrow-up\"></i></div>\n                    <i class=\"mt-1 fa fa-cart-plus\"></i>\n                </div>\n\n                <!-- <div *ngIf=\"item?.menuName == 'Sales Invoices' \">\n                    <div><i class=\"mt-1 fa fa-money-bill\"></i></div>\n                </div> -->\n\n                <div *ngIf=\"item?.menuName == 'Sales Returns' \">\n                    <div><i class=\"fas fa-arrow-down\"></i></div>\n                <i class=\"mt-1 fa fa-cart-plus\"></i>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Internal Stock Adjustments Minus' \">\n                    <div><i class=\"mt-1 fa fa-cogs\"></i></div>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Other Sales' \">\n                    <div><i class=\"mt-1 fa fa-plus-circle\"></i></div>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'General Credit Notes Issue To Customers' || item?.menuName == 'Rate Difference Credit Notes To Customers' \"\n                    class=\"d-flex justify-content-center\">\n                    <span class=\"d-block font-weight-bold\" style=\"margin: 2px 5px 0 -1px;\">-</span>\n                    <i class=\"mt-1 fa fa-rupee-sign\"></i>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'General Debit Notes Issue To Customers' || item?.menuName == 'Rate Difference Debit Notes To Customers' \"\n                    class=\"d-flex justify-content-center\">\n                    <span class=\"d-block font-weight-bold\" style=\"margin: 2px 5px 0 -1px;\">+</span>\n                    <i class=\"mt-1 fa fa-rupee-sign\"></i>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Quotations' \">\n                    <div class=\"d-flex justify-content-center\">\n                        <i class=\"mt-1 fa fa-file\"></i>\n                    </div>\n                </div>\n\n                <div *ngIf=\"item?.menuName == 'Retail Sales' \">\n                    <div class=\"d-flex justify-content-center\">\n                        <i class=\"mt-1 fa fa-store\"></i>\n                    </div>\n                </div>\n\n                <div class=\"text-center\" style=\"white-space: normal\">{{item?.menuName}} </div>\n            </div>\n        </button>\n\n\n        <!-- <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div>\n            <div><i class=\"fas fa-arrow-down\"></i></div>\n            <i class=\"mt-1 fa fa-cart-plus\"></i>\n        </div>\n        <div class=\"text-center\" style=\"white-space: normal\">Purchase <br> Register</div>\n    </button>\n\n\n    <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div>\n            <div><i class=\"fas fa-arrow-up\"></i></div>\n            <i class=\"mt-1 fa fa-cart-plus\"></i>\n        </div>\n        <div class=\"text-center\" style=\"white-space: normal\"> Purchase Return <br> Register</div>\n    </button>\n\n\n    <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div><i class=\"mt-1 fa fa-cogs\"></i></div>\n        <div class=\"text-center\" style=\"white-space: normal\">Internal Stock <br> Adjustment Register</div>\n    </button>\n\n\n    <button class=\"btn btn-info p-4 col-md-2 mb-2\">\n        <div><i class=\"mt-1 fa fa-plus-circle\"></i></div>\n        <div class=\"text-center\" style=\"white-space: normal\">Other Purchases <br> Register</div>\n    </button> -->\n\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/quotation-list/quotation-list.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/quotation-list/quotation-list.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardQuotationListQuotationListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">Quotation (SQ) List</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button mat-raised-button [routerLink]=\"['../quotations']\" color=\"primary\">Back</button>\n    </div>\n    \n    </div>\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"retList-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>SQ Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n        <mat-form-field>\n            <mat-label>Customer  Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>City Name</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>GSTIN</mat-label>\n            <input matInput>\n          </mat-form-field>   \n          <mat-form-field>\n            <mat-label>Remarks</mat-label>\n            <input matInput>\n          </mat-form-field>  \n     \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          <button mat-raised-button>Reset</button>       \n        \n        </div>\n        </div>\n\n  \n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\" class=\"retList-form\" fxLayoutGap=\"5px\">\n            <mat-form-field>\n              <mat-label>Product Name</mat-label>\n              <input matInput>\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label>Sh.Name</mat-label>\n              <input matInput>\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label> Product Pack</mat-label>\n              <input matInput>\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label>Qty.</mat-label>\n              <input matInput>\n            </mat-form-field>  \n            <mat-form-field>\n              <mat-label>Rate</mat-label>\n              <input matInput>\n            </mat-form-field>   \n           \n            <button mat-raised-button color=\"primary\">Save</button> \n            <button mat-raised-button>Reset</button>       \n          \n          </div>\n          </div>\n\n          \n\n    \n    <div class=\"mt-2\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name</th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Product Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Product Pack </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductType\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Qty. </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"expDate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Qty.Disc </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"gstin\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Rate </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                  </ng-container>\n           \n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n    \n   \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/quotation/quotation.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/quotation/quotation.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardQuotationQuotationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">Quotation (SQ) Entry</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n        <button mat-raised-button color=\"primary\" (click)=\"clikRegisters()\">Quotation Register</button>&nbsp;\n      <button mat-raised-button [routerLink]=\"['../quotationsList']\" color=\"primary\">List </button>\n    </div>\n    \n    </div>\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"retList-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>SQ Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n        <mat-form-field>\n            <mat-label>Customer  Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>City Name</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>GSTIN</mat-label>\n            <input matInput>\n          </mat-form-field>   \n          <mat-form-field>\n            <mat-label>Remarks</mat-label>\n            <input matInput>\n          </mat-form-field>  \n     \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          <button mat-raised-button>Reset</button>       \n          <button type=\"button\" mat-raised-button [routerLink]=\"['../OutwardTransaction']\">Back</button>\n        </div>\n        </div>\n\n  \n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\" class=\"retList-form\" fxLayoutGap=\"5px\">\n            <mat-form-field>\n              <mat-label>Product Name</mat-label>\n              <input matInput>\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label>Sh.Name</mat-label>\n              <input matInput>\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label> Product Pack</mat-label>\n              <input matInput>\n            </mat-form-field>\n            <mat-form-field>\n              <mat-label>Qty.</mat-label>\n              <input matInput>\n            </mat-form-field>  \n            <mat-form-field>\n              <mat-label>Rate</mat-label>\n              <input matInput>\n            </mat-form-field>   \n           \n            <button mat-raised-button color=\"primary\">Save</button> \n            <button mat-raised-button>Reset</button>       \n          \n          </div>\n          </div>\n\n          \n\n    \n    <div class=\"mt-2\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name</th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Product Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Product Pack </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductType\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Qty. </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"expDate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Qty.Disc </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"gstin\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Rate </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                  </ng-container>\n           \n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n    \n   \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component.html":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component.html ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardRateDiffCreditNoteCustomerListRateDiffCreditNoteCustomerListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">Rate Difference Credit Note To Customers(RDCRC) List</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button mat-raised-button [routerLink]=\"['../RDCRCList']\" color=\"primary\">Back</button>\n    </div>\n    \n    </div>\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"GCR-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>From Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>To Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>RDCRC No</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Customer  Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>City Name</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>GSTIN</mat-label>\n            <input matInput>\n          </mat-form-field>   \n          <mat-form-field>\n            <mat-label>Mode</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>Inv.Value</mat-label>\n            <input matInput>\n          </mat-form-field>      \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          <button mat-raised-button>Reset</button>       \n        \n        </div>\n        </div>\n\n\n    \n    <div class=\"mt-2\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> RDCRC Date</th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>RDCRC No </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductType\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"expDate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> City Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"gstin\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> GSTIN </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                  </ng-container>\n           \n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n    \n   \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-credit-note-customer/rate-diff-credit-note-customer.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-credit-note-customer/rate-diff-credit-note-customer.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardRateDiffCreditNoteCustomerRateDiffCreditNoteCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">\n        Rate Difference Credit Note To Customers(RDCRC) Entry</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button mat-raised-button [routerLink]=\"['../RDCRCList']\" color=\"primary\">Diff Credit List</button>\n    </div>\n    \n    </div>\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"other-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>RDCRC Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Customer Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>City Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Mobile</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>GSTIN</mat-label>\n            <input matInput>\n          </mat-form-field>       \n        \n        \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          <button mat-raised-button>Reset</button>       \n        \n        </div>\n        </div>\n\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"rate-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>Product Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n        \n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>Product Pack</mat-label>\n            <input matInput>\n          </mat-form-field>           \n\n          <mat-form-field>\n            <mat-label>Batch</mat-label>\n            <input matInput>\n          </mat-form-field>   \n\n          <mat-form-field>\n            <mat-label>Iss.Qty</mat-label>\n            <input matInput>\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>Inv.Rate</mat-label>\n            <input matInput>\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>Act.Rate</mat-label>\n            <input matInput>\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>Tax%</mat-label>\n            <input matInput>\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>Diff.Value</mat-label>\n            <input matInput>\n          </mat-form-field> \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          \n          <button mat-raised-button>Cancel</button>\n        \n        </div>\n        </div>\n    \n    <div class=\"mt-2\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name</th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Product Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Product Pack </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductType\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Batch </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"issQty\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Iss.Qty </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"invRate\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Inv.Rate </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"actRate\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Act.Rate </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"tax\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Tax% </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"diff\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Diff.Value </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                  </ng-container>\n       \n           \n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n    \n    <mat-card class=\"mt-3 p-2\"> \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"55\">\n            <table class=\"table table-bordered table-sm\">\n                <thead>\n                    <th> GST% </th>\n                    <th> Taxable </th>                  \n                </thead>\n                <tbody>\n                    <tr>\n                        <td> 18% </td>\n                        <td> 2000 </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div fxFlex=\"45\" class=\"pur-values-form\" fxLayoutGap=\"5px\">  \n          \n\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Remarks</mat-label>\n            <textarea matInput></textarea>\n          </mat-form-field>  \n        </div>\n        </div>    \n        <div class=\"text-right\">\n            <button mat-raised-button color=\"primary\">Save</button>  &nbsp;\n            <button mat-raised-button>Reset</button>\n        </div>\n    \n    </mat-card>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component.html":
  /*!******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component.html ***!
    \******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardRateDiffDebitNoteCustomerListRateDiffDebitNoteCustomerListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">Rate Difference Debit Note To Customers (RDDBC) List</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button mat-raised-button [routerLink]=\"['../RDDBCList']\" color=\"primary\">Back</button>\n    </div>\n    \n    </div>\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"GCR-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>From Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>To Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>RDDBC No</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Customer  Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>City Name</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>GSTIN</mat-label>\n            <input matInput>\n          </mat-form-field>   \n          <mat-form-field>\n            <mat-label>Mode</mat-label>\n            <input matInput>\n          </mat-form-field>  \n          <mat-form-field>\n            <mat-label>Inv.Value</mat-label>\n            <input matInput>\n          </mat-form-field>      \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          <button mat-raised-button>Reset</button>       \n        \n        </div>\n        </div>\n\n\n    \n    <div class=\"mt-2\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> RDDBC Date</th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>RDDBC No </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductType\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"expDate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> City Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"gstin\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> GSTIN </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                  </ng-container>\n           \n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n    \n   \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-debit-note-customer/rate-diff-debit-note-customer.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-debit-note-customer/rate-diff-debit-note-customer.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardRateDiffDebitNoteCustomerRateDiffDebitNoteCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">\n        Rate Difference Debit Note To Customers(RDDBC) Entry</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button mat-raised-button [routerLink]=\"['../RDDBCList']\" color=\"primary\">Diff Debit List</button>\n    </div>\n    \n    </div>\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"other-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>RDDBC Date</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Customer Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>City Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Mobile</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>GSTIN</mat-label>\n            <input matInput>\n          </mat-form-field>       \n        \n        \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          <button mat-raised-button>Reset</button>       \n        \n        </div>\n        </div>\n\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"rate-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>Product Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n        \n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>Product Pack</mat-label>\n            <input matInput>\n          </mat-form-field>           \n\n          <mat-form-field>\n            <mat-label>Batch</mat-label>\n            <input matInput>\n          </mat-form-field>   \n\n          <mat-form-field>\n            <mat-label>Iss.Qty</mat-label>\n            <input matInput>\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>Inv.Rate</mat-label>\n            <input matInput>\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>Act.Rate</mat-label>\n            <input matInput>\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>Tax%</mat-label>\n            <input matInput>\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>Diff.Value</mat-label>\n            <input matInput>\n          </mat-form-field> \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          \n          <button mat-raised-button>Cancel</button>\n        \n        </div>\n        </div>\n    \n    <div class=\"mt-2\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name</th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Product Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Product Pack </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductType\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Batch </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"issQty\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Iss.Qty </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"invRate\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Inv.Rate </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"actRate\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Act.Rate </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"tax\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Tax% </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"diff\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Diff.Value </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.ProductType}} </td>\n                  </ng-container>\n       \n           \n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n      </div>\n    \n    <mat-card class=\"mt-3 p-2\"> \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"55\">\n            <table class=\"table table-bordered table-sm\">\n                <thead>\n                    <th> GST% </th>\n                    <th> Taxable </th>                  \n                </thead>\n                <tbody>\n                    <tr>\n                        <td> 18% </td>\n                        <td> 2000 </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div fxFlex=\"45\" class=\"pur-values-form\" fxLayoutGap=\"5px\">  \n          \n\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Remarks</mat-label>\n            <textarea matInput></textarea>\n          </mat-form-field>  \n        </div>\n        </div>    \n        <div class=\"text-right\">\n            <button mat-raised-button color=\"primary\">Save</button>  &nbsp;\n            <button mat-raised-button>Reset</button>\n        </div>\n    \n    </mat-card>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/retail-sales/retail-sales.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/retail-sales/retail-sales.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardRetailSalesRetailSalesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>retail-sales works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-delivery-challan-list/sale-delivery-challan-list.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-delivery-challan-list/sale-delivery-challan-list.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardSaleDeliveryChallanListSaleDeliveryChallanListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>sale-delivery-challan-list works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-delivery-challan/sale-delivery-challan.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-delivery-challan/sale-delivery-challan.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardSaleDeliveryChallanSaleDeliveryChallanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\n   <div class=\"m-5\">\n    <h6>sale-delivery-challan works!</h6>\n\n    <h3 class=\"align-self-center\"> Coming Soon </h3>\n   </div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-invoice-list/sale-invoice-list.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-invoice-list/sale-invoice-list.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardSaleInvoiceListSaleInvoiceListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\n\n  <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\" class=\"d_md_flex\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">Sales Invoice(SAL) List</h4>\n    </div>\n    <div fxFlex=\"50\" fxFlex.xl=\"50\" fxFlex.sm=\"50\" fxFlex.md=\"50\" class=\"master-btn text-right\">\n      <button mat-raised-button color=\"primary\" (click)=\"clikRegisters()\">Sale Register</button>&nbsp;\n\n      <button mat-raised-button color=\"primary\" (click)=\"addInvoice()\">Add Sale</button> &nbsp;\n\n      <!-- <button mat-raised-button [routerLink]=\"['../salesInvoices']\" color=\"primary\">Back</button> -->\n    </div>\n\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"mt-2\" fxLayoutWrap>\n    <div fxFlex=\"100\" class=\"invList-form\">\n      <form [formGroup]=\"saleHeadListFormGroup\" fxLayoutGap=\"5px\">\n\n        <!-- <mat-form-field appearance=\"outline\">\n          <mat-label>From Date</mat-label>\n          <input matInput formControlName=\"fromDate\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>To Date</mat-label>\n          <input matInput formControlName=\"toDate\">\n        </mat-form-field> -->\n        <mat-form-field appearance=\"outline\" class=\"e_mat_date w_116\">\n          <mat-label>From Date</mat-label>\n          <input matInput [matDatepicker]=\"picker\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"fromDate\" >\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"e_mat_date w_116\">\n          <mat-label>To Date</mat-label>\n          <input matInput [matDatepicker]=\"picker1\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"toDate\" >\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"w_224\">\n          <mat-label>Inv.No</mat-label>\n          <input matInput formControlName=\"invNo\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"w_224\">\n          <mat-label>Customer Name</mat-label>\n          <input matInput formControlName=\"accName\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"w_116\">\n          <mat-label>Sh.Name</mat-label>\n          <input matInput formControlName=\"accShName\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"w_224\">\n          <mat-label>City Name</mat-label>\n          <input matInput formControlName=\"cityId\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"w_224\">\n          <mat-label>GSTIN</mat-label>\n          <input matInput formControlName=\"accGSTIn\">\n        </mat-form-field>\n\n        <!-- <mat-form-field appearance=\"outline\">\n          <mat-label>Inv. Date</mat-label>\n          <input matInput formControlName=\"invDate\">\n        </mat-form-field> -->\n        <mat-form-field appearance=\"outline\" class=\"e_mat_date w_116\">\n          <mat-label>Inv. Date</mat-label>\n          <input matInput [matDatepicker]=\"picker2\" formControlName=\"invDate\" #finTranDate>\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"w_224\">\n          <mat-label>Mode</mat-label>\n          <input matInput formControlName=\"mode\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"w_116\">\n          <mat-label>Inv.Value</mat-label>\n          <input matInput formControlName=\"invValue\">\n        </mat-form-field>\n\n\n        <button mat-raised-button class=\"mat_btn\" color=\"primary\" (click)=\"getsalesDataList()\">Search</button> &nbsp;\n        <button mat-raised-button class=\"mat_btn\" (click)=\"reset()\">Reset</button>\n        <button class=\"mat_btn\" type=\"button\" mat-raised-button [routerLink]=\"['../OutwardTransaction']\">Back</button>\n      </form>\n\n\n\n    </div>\n  </div>\n\n\n\n\n  <div class=\"master-table mt-2\" id=\"table-scroll\">\n    <app-alert [id]=\"'dataTableAlertId'\"></app-alert>\n    <app-table [definition]=\"tableDefinition\" [data]=\"dataList\" [tableAlertId]=\"'dataTableAlertId'\"\n      [isDataLoading]=\"isDataLoading\" [disableActions]=\"disableActions\"></app-table>\n  </div>\n\n\n\n\n</div>\n\n<ng-template #deleteSalesHeadTemplate let-salesHead=\"data\">\n  Are you sure to delete <strong></strong> Sales Head?\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-invoice/sale-invoice.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-invoice/sale-invoice.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardSaleInvoiceSaleInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\n\n  <div fxLayout=\"row\" fxLayout.md=\"row\" class=\"d_md_flex\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"20\" fxFlex.xl=\"20\" fxFlex.sm=\"20\" fxFlex.md=\"20\">\n      Inv.No: {{outwardHead?.outwardHeadNo}}\n    </div>\n    <div fxFlex=\"50\" fxFlex.xl=\"50\" fxFlex.sm=\"50\" fxFlex.md=\"50\">\n      <h4 class=\"outward-pharma-head text-center\">Sales Invoice Entry</h4>\n    </div>\n    <div fxFlex=\"30\" fxFlex.xl=\"30\" fxFlex.sm=\"30\" fxFlex.md=\"30\" class=\"master-btn text-right\">\n\n      \n      <button type=\"button\" mat-raised-button color=\"primary\"  [disabled]=\"!saleInvoiceHeadFormGroup?.valid\" (click)=\"showSalesDetailTemplate()\">Add\n        Item</button> &nbsp;\n\n      <button mat-raised-button [routerLink]=\"['../salesInvoices']\" color=\"primary\">List</button>\n    </div>\n\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\" class=\"fieldCntrl\">\n    <form [formGroup]=\"saleInvoiceHeadFormGroup\" autocomplete=\"off\">\n      <div fxFlex=\"100\" class=\"invoice-form\" fxLayoutGap=\"5px\">\n  \n        <mat-form-field appearance=\"outline\" class=\"e_mat_date w_116\">\n          <mat-label>SAL Date</mat-label>\n          <input matInput [matDatepicker]=\"salesDate\"  [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"outwardDate\" appDateMask  (dateChange)=\"onDateSelected($event)\"\n          (focusout)=\"purdatefocusout()\">\n          <mat-datepicker-toggle matSuffix [for]=\"salesDate\"></mat-datepicker-toggle>\n          <mat-datepicker #salesDate></mat-datepicker>\n        </mat-form-field>\n  \n        <app-autocomplete [definition]=\"customAccountAutoCompleteDef\" [control]=\"accName\"\n          [optionsTableDefinition]=\"customAccountsOptsTable\" #customerName></app-autocomplete>\n          <!-- <app-autocomplete [definition]=\"customAccountAutoCompleteDef\" [control]=\"accName\"\n          [optionsTableDefinition]=\"customAccountsOptsTable\"></app-autocomplete> -->\n        <mat-form-field appearance=\"outline\" class=\"w_116\">\n          <mat-label>Sh.Name</mat-label>\n          <input matInput formControlName=\"accShName\">\n        </mat-form-field>\n  \n        <mat-form-field appearance=\"outline\" class=\"w_224\">\n          <mat-label>City Name</mat-label>\n          <input matInput formControlName=\"cityId\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"w_224\">\n          <mat-label>Mobile</mat-label>\n          <input matInput formControlName=\"accMobile\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"w_224\">\n          <mat-label>GSTIN</mat-label>\n          <input matInput formControlName=\"accGstIn\">\n        </mat-form-field>\n\n        <!-- <app-autocomplete [definition]=\"companyGroupAutoCompleteDef\"\n          [control]=\"saleInvoiceHeadFormGroup.get('companyMaster')\" [optionsTableDefinition]=\"companyGroupOptsTable\">\n        </app-autocomplete> -->\n         <mat-form-field appearance=\"outline\" class=\"w_224\">\n          <mat-label>Company</mat-label>\n          <mat-select formControlName=\"compId\"  appMatSelect placeholder=\"--Select--\" #companyfocus  #CompanyTab   #singleSelect>\n            <mat-option>\n              <ngx-mat-select-search placeholderLabel=\"Find Company Type...\"  (keydown)=\"companyTab($event)\"\n              noEntriesFoundLabel=\"'no matching Company found'\"  [formControl]=\"CompanyTabMultiFilterCtrl\"></ngx-mat-select-search>\n            </mat-option>\n            <mat-option value='0'>--Select--</mat-option>\n            <mat-option *ngFor=\"let bank of filteredCompanyMulti | async\"  [value]=\"bank.compId\">\n              {{bank.compName}}\n            </mat-option>\n          </mat-select> \n\n        </mat-form-field>\n        <!-- <app-autocomplete [definition]=\"modeAutoCompleteDef\" [control]=\"saleInvoiceHeadFormGroup.get('mode')\">\n        </app-autocomplete> -->\n        <mat-form-field appearance=\"outline\" class=\"w_224\">\n          <mat-label>Mode</mat-label>\n          <mat-select formControlName=\"mode\"  appMatSelect placeholder=\"--Select--\">\n            <!-- <mat-option value='0'>--Select--</mat-option> -->\n            <mat-option *ngFor=\"let bank of modeDropDown\"  [value]=\"bank.code\">\n              {{bank.name}}\n            </mat-option>\n          </mat-select> \n\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" class=\"w_224\">\n          <mat-label>Delivery To</mat-label>\n          <input matInput formControlName=\"deliveryTo\">\n        </mat-form-field>\n        <!-- <app-autocomplete [definition]=\"customAccountAutoCompleteDefD\" [control]=\"deliveryTo\"\n        [optionsTableDefinition]=\"customAccountsOptsTableD\"></app-autocomplete> -->\n\n        <!-- <mat-form-field appearance=\"outline\">\n          <mat-label>Delivery To</mat-label>\n          <mat-select matInput formControlName=\"deliveryTo\" appMatSelect placeholder=\"--Select--\" \n          appOmitSpecialCharacters=\"noSpecialChars\">\n          <mat-option>{{}}\n          </mat-option>\n          </mat-select>\n        </mat-form-field> -->\n\n        <button mat-raised-button class=\"mat_btn\" color=\"primary\" (click)=\"onSaveOrUpdateSalesHead()\"\n          [disabled]=\"!saleInvoiceHeadFormGroup.valid\">{{outwardHeadBtnText}}</button>\n        <button mat-raised-button class=\"mat_btn\" (click)=\"onResetForm()\">Reset</button>\n        <!-- <button mat-raised-button (click)=\"goBack()\">Back</button> -->\n\n      </div>\n    </form>\n  </div>\n\n  <div class=\"mt-2\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <div fxFlex=\"100\">\n        <app-alert [id]=\"'salesDetailItemList'\"></app-alert>\n        <app-table [definition]=\"tableDefinition\" [data]=\"outWardDetail\" [tableAlertId]=\"'salesDetailItemList'\"\n          [isDataLoading]=\"isDataLoading\" [disableActions]=\"disableActions\"></app-table>\n      </div>\n\n    </div>\n  </div>\n\n  <mat-card class=\"mt-3 p-2 mb_50\">\n    <form [formGroup]=\"saleInvoiceFinalSaveFormGroup\" autocomplete=\"off\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"pur-values-form \" fxLayout.sm=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n\n      <div fxFlex=\"30\" fxFlex.md=\"20\" class=\"tab_width\" fxLayoutGap=\"5px\">\n    \n        <!-- <div fxFlex=\"30\" class=\"pur-values-form\" fxLayoutGap=\"5px\"> -->\n        <!-- <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n    \n                  <mat-form-field appearance=\"outline\" (input)=\"onAdjValue($event.target.value, 'otherDedAccId')\">\n                    <mat-label>Dr. Adj.</mat-label>\n                    <input matInput formControlName=\"otherDed\">\n                  </mat-form-field>\n    \n                  <app-autocomplete [definition]=\"customAccountDedAdjAutoCompleteDef\"\n                    [control]=\"saleInvoiceFinalSaveFormGroup.get('otherDedAccId')\"></app-autocomplete>\n    \n                </div> -->\n    \n        <!-- <div fxLayout=\"row\" fxLayoutGap=\"10px\"> -->\n    \n    \n        <!-- <mat-form-field appearance=\"outline\" >\n                    <mat-label>other Charges</mat-label>\n                    <input matInput formControlName=\"otherCharges\">\n                  </mat-form-field> -->\n    \n        <!-- <mat-form-field appearance=\"outline\" (input)=\"onAdjValue($event.target.value, 'otherAddAccId')\">\n                    <mat-label>Cr. Adj.</mat-label>\n                    <input matInput formControlName=\"otherAdd\">\n                  </mat-form-field> -->\n    \n        <!-- <app-autocomplete [definition]=\"customAccountAddAdjAutoCompleteDef\"\n                    [control]=\"saleInvoiceFinalSaveFormGroup.get('otherAddAccId')\"></app-autocomplete>  -->\n        <!-- </div> -->\n    \n        <!-- <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>Hamali Value</mat-label>\n                    <input matInput formControlName=\"hamaliValue\">\n                  </mat-form-field>\n    \n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>FRT Value</mat-label>\n                    <input matInput formControlName=\"frtValue\">\n                  </mat-form-field>\n                </div> -->\n    \n        <!-- <div fxLayout=\"row\" fxLayoutGap=\"10px\"> -->\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n          <mat-label>Remarks</mat-label>\n          <textarea matInput formControlName=\"remarks\"></textarea>\n        </mat-form-field>\n        <!-- </div> -->\n        <!-- </div> -->\n      </div>\n      <div fxFlex=\"30\" class=\"tab_width text-center\">\n        <table class=\"table table-bordered table-sm\" style=\"font-size: 12px;\" id=\"t01\">\n          <thead>\n            <th> GST% </th>\n            <th> Taxable </th>\n            <ng-template [ngIf]=\"hasIGST\">\n              <th>IGST</th>\n            </ng-template>\n            <ng-template [ngIf]=\"!hasIGST\">\n              <th>CGST</th>\n              <th>SGST</th>\n            </ng-template>\n          </thead>\n          <tr *ngFor=\"let pretax of outwardPretaxes\">\n            <td>{{pretax.tax | number:'1.2-2'}}</td>\n            <td>{{pretax.preTaxValue | number:'1.2-2'}}</td>\n            <ng-template [ngIf]=\"hasIGST\">\n              <td> {{outwardTaxes[0]?.stakeValue | number:'1.2-2'}}</td>\n            </ng-template>\n            <ng-template [ngIf]=\"!hasIGST\">\n              <td>\n                {{(outwardTaxes)?(outwardTaxes[0]?.taxStakeName=='CGST'?outwardTaxes[0].stakeValue:outwardTaxes[1]?.stakeValue):''}}\n              </td>\n              <td>\n                {{(outwardTaxes)?(outwardTaxes[0]?.taxStakeName=='SGST'?outwardTaxes[0].stakeValue:outwardTaxes[1]?.stakeValue):''}}\n              </td>\n            </ng-template>\n          </tr>\n        </table>\n      </div>\n      <div fxFlex=\"20\" fxFlex.md=\"30\" class=\"tab_width\" style=\"font-size: 14px;font-weight: bold;\">\n        <!-- <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutGap=\"20px\"> -->\n        <div class=\"row mx-0\">\n          <div class=\"col text-right\">Grs. Value :&nbsp;</div>\n          <div class=\"col text-right\">{{outwardHead?.grsValue | number:'1.2-2'}}</div>\n        </div>\n        <div class=\"row mx-0\">\n          <div class=\"col text-right\">Disc. Value :&nbsp;</div>\n          <div class=\"col text-right\">{{outwardHead?.discValue | number:'1.2-2'}}</div>\n        </div>\n        <div class=\"row mx-0\">\n          <div class=\"col text-right\"> Disc. Value 1 :&nbsp;</div>\n          <div class=\"col text-right\">{{outwardHead?.disc1Value | number:'1.2-2'}}</div>\n        </div>\n        <div class=\"row mx-0\">\n          <div class=\"col text-right\">Tax Value :&nbsp;</div>\n          <div class=\"col text-right\">{{outwardHead?.taxValue | number:'1.2-2'}}</div>\n        </div>\n        <div class=\"row mx-0\">\n          <div class=\"col text-right align-self-center\">other charges :&nbsp;</div>\n          <div class=\"col text-right\">\n            <mat-form-field appearance=\"outline\" style=\"width: 90px !important;\">\n              <input appCurrencyFormat matInput formControlName=\"otherCharges\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row mx-0\">\n          <div class=\"col text-right text-success\">Inv.Value :&nbsp;</div>\n          <div class=\"col text-right text-success\">{{roundedValue}}</div>\n        </div>\n        <!-- </div> -->\n    \n      </div>\n    \n      <div fxFlex=\"17\" class=\"tab_width text-right mt-2\" style=\"place-content: end;\">\n        <button mat-raised-button color=\"primary\" [disabled]=\"!saleInvoiceFinalSaveFormGroup?.valid\"\n          (click)=\"onSaveOrUpdateFinalSave()\">{{outwardFinalSaveBtnText}}</button>\n        &nbsp;\n        <button mat-raised-button (click)=\"resetFinalSave()\"> Reset</button>\n      </div>\n  \n    </div>\n    </form>\n  </mat-card>\n</div>\n\n<ng-template #saleEntryDetailTemplate>\n  <div fxFlex=\"100\" class=\"user-form\" fxLayoutGap=\"10px\">\n  <form [formGroup]=\"saleInvoiceDetailFormGroup\" class=\"invoice2-form\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <!-- <div fxFlex=\"100\" fxLayoutGap=\"10px\"> -->\n\n      <app-autocomplete fxFlex=\"24\" fxFlex.xs=\"100\" id=\"productName\"  [definition]=\"customProductAutoCompleteDef\"\n        [control]=\"saleInvoiceDetailFormGroup.get('prodId')\" [optionsTableDefinition]=\"customProductOptsTable\"\n        ></app-autocomplete><!-- nextElementId=\"addBatchProductId\" [dependent]=\"batchAutoComplete\"-->\n\n      <mat-form-field fxFlex=\"24\" fxFlex.xs=\"100\" appearance=\"outline\" >\n        <mat-label>Sh.Name</mat-label>\n        <input matInput formControlName=\"prodShName\" required>\n      </mat-form-field>\n\n      <mat-form-field fxFlex=\"24\" fxFlex.xs=\"100\" appearance=\"outline\">\n        <mat-label>Product Pack</mat-label>\n        <input matInput formControlName=\"prodPackName\">\n      </mat-form-field>\n      <!-- </div> -->\n\n    </div>\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"mt-2\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <!-- <div fxFlex=\"100\" fxLayoutGap=\"10px\"> -->\n\n        <app-autocomplete fxFlex=\"24\" fxFlex.xs=\"100\" [definition]=\"batchAutoCompleteDef\" id=\"addBatchProductId\"\n        [control]=\"saleInvoiceDetailFormGroup.get('batch')\" #batchAutoComplete\n        [optionsTableDefinition]=\"batchOptsTable\"></app-autocomplete>\n\n      <mat-form-field fxFlex=\"24\" appearance=\"outline\">\n        <mat-label>Exp.Date</mat-label>\n        <input matInput type=\"text\" formControlName=\"expdate\" maxLength=\"5\" (focusout)=\"expdate($event.target.value)\"\n         appOmitSpecialCharacters=\"integer\" required \n         onkeyup=\" var v = this.value;\n        if (v.match(/^\\d{2}$/) !== null) {\n            this.value = v + '-'; }\" >\n        <!-- <mat-datepicker-toggle matSuffix [for]=\"expDate\"></mat-datepicker-toggle>\n        <mat-datepicker #expDate></mat-datepicker> -->\n        <mat-error>\n         \n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field fxFlex=\"12\" fxFlex.xs=\"100\" appearance=\"outline\">\n        <mat-label>Qty.</mat-label>\n        <input matInput formControlName=\"issQty\" appQntCurrencyFormat step=\"0.01\" (input)=\"tranOutIssQty($event.target.value)\"\n          appOmitSpecialCharacters=\"integer\">\n        <mat-error\n          *ngIf=\"saleInvoiceDetailFormGroup.get('issQty').hasError('greaterValue') && (saleInvoiceDetailFormGroup.get('issQty').touched || saleInvoiceDetailFormGroup.get('issQty').dirty)\">\n          Sale\n          Qty Exceeds Cl.Qty<strong>{{closingQty}}</strong> </mat-error>\n      </mat-form-field>\n\n      <mat-form-field fxFlex=\"11\" fxFlex.xs=\"100\" appearance=\"outline\">\n        <mat-label>Qty.Disc.</mat-label>\n        <input matInput formControlName=\"issQtyDisc\" appQntCurrencyFormat (input)=\"tranOutIssQtyDisc($event.target.value)\"\n          appOmitSpecialCharacters=\"integer\">\n        <mat-error\n          *ngIf=\"saleInvoiceDetailFormGroup.get('issQtyDisc').hasError('greaterValue') && (saleInvoiceDetailFormGroup.get('issQtyDisc').touched || saleInvoiceDetailFormGroup.get('issQtyDisc').dirty)\">\n          Sale\n          Qty Exceeds Cl.Qty<strong>{{closingQtyDisc}}</strong> </mat-error>\n      </mat-form-field>\n      <!-- </div> -->\n\n    </div>\n    <div fxLayout=\"row\" fxLayout.xs=\"row\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <!-- <div fxFlex=\"100\" fxLayoutGap=\"10px\"> -->\n     \n\n      <!-- <app-autocomplete fxFlex=\"25\" [definition]=\"discountAutoCompleteDef\"\n      [control]=\"saleInvoiceDetailFormGroup.get('salDiscType')\">\n    </app-autocomplete> -->\n\n    <mat-form-field appearance=\"outline\" fxFlex=\"24\" *ngIf=\"firmPreferences?.allowDisc2 != 0 && firmPreferences?.discTypeOption == 3\">\n      <mat-label>Discount *</mat-label>\n      <mat-select appMatSelect formControlName=\"salDiscType\">\n        <!-- <mat-option [value]=0>--Select--</mat-option> -->\n        <mat-option *ngFor=\"let tran of discountDropDown\"  [value]=\"tran.code\">\n          {{tran.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field *ngIf=\"(firmPreferences?.discTypeOption == 1 || firmPreferences?.discTypeOption == 2) && firmPreferences?.allowDisc2 != 0\"\n      appearance=\"outline\">\n      <mat-label>Discount Type 1</mat-label>\n      <input matInput disabled formControlName=\"salDiscType\" [value]=\"firmPreferences?.discTypeOption == 1 ? '%': 'Rupee'\" maxlength=\"8\"\n        appOmitSpecialCharacters=\"integer\">\n    </mat-form-field>\n\n    \n    <mat-form-field fxFlex=\"24\" fxFlex.xs=\"100\" appearance=\"outline\">\n      <mat-label>Discount(%)</mat-label>\n      <input matInput formControlName=\"salDisc\" appQntCurrencyFormat appOmitSpecialCharacters=\"integer\">\n    </mat-form-field>\n\n    <!-- <app-autocomplete fxFlex=\"18\" fxFlex.xs=\"100\" *ngIf=\"firmPreferences?.allowDisc2 != 1\"    [definition]=\"discountType1\" [control]=\"saleInvoiceDetailFormGroup?.get('salDiscType1')\">\n    </app-autocomplete>     -->\n    <mat-form-field appearance=\"outline\" fxFlex=\"24\" *ngIf=\"firmPreferences?.allowDisc2 != 0 && firmPreferences?.discTypeOption == 3\">\n      <mat-label>Discount *</mat-label>\n      <mat-select appMatSelect formControlName=\"salDiscType1\">\n        <!-- <mat-option [value]=0>--Select--</mat-option> -->\n        <mat-option *ngFor=\"let tran of discountDropDown\"  [value]=\"tran.code\">\n          {{tran.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"(firmPreferences?.discTypeOption == 1 || firmPreferences?.discTypeOption == 2) && firmPreferences?.allowDisc2 != 0\"\n      appearance=\"outline\">\n      <mat-label>Discount *</mat-label>\n      <input matInput disabled [value]=\"firmPreferences?.discTypeOption == 1 ? '%': 'Rupee'\" maxlength=\"8\"\n        formControlName=\"salDiscType1\" appOmitSpecialCharacters=\"integer\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\" *ngIf=\"firmPreferences?.allowDisc2 != 0\" >\n  \n        <mat-label>Discount{{ saleInvoiceDetailFormGroup.get('salDiscType1')?.value?.name ? ('('+saleInvoiceDetailFormGroup.get('salDiscType1')?.value?.name+')'): '' }}</mat-label>\n        <input matInput appQntCurrencyFormat formControlName=\"salDisc1\" maxlength=\"5\" appOmitSpecialCharacters=\"integer\">\n        <mat-error>\n          <span *ngIf=\"saleInvoiceDetailFormGroup.get('salDisc1').hasError('invalidInput')\"> Discount cannot be greater Than 100..!\n          </span>\n          <span *ngIf=\"saleInvoiceDetailFormGroup.get('salDisc1').hasError('value')\"> Rupee Not Greater Than 6 Digits..!</span>\n        </mat-error>\n  \n      </mat-form-field>\n\n      <mat-form-field fxFlex=\"24\" fxFlex.xs=\"100\" appearance=\"outline\" *ngIf=\"firmPreferences?.allowDisc2 == 0\">\n        <mat-label>Inv.Rate</mat-label>\n        <input matInput appCurrencyFormat formControlName=\"tranRate\" appOmitSpecialCharacters=\"integer\">\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\" *ngIf=\"firmPreferences?.allowDisc2 == 0\">\n        <mat-label>Tax(%)</mat-label>\n        <input matInput formControlName=\"tax\">\n      </mat-form-field>\n    <!-- </div> -->\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"mt-2\" fxLayoutWrap fxLayoutGap=\"10px\">\n\n    <mat-form-field fxFlex=\"24\" fxFlex.xs=\"100\" appearance=\"outline\" *ngIf=\"firmPreferences?.allowDisc2 != 0\">\n      <mat-label>Inv.Rate</mat-label>\n      <input matInput appCurrencyFormat formControlName=\"tranRate\" appOmitSpecialCharacters=\"integer\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\" *ngIf=\"firmPreferences?.allowDisc2 != 0\">\n      <mat-label>Tax(%)</mat-label>\n      <input matInput formControlName=\"tax\">\n    </mat-form-field>\n\n    <mat-form-field fxFlex=\"24\" fxFlex.xs=\"100\" appearance=\"outline\">\n      <mat-label>MRP</mat-label>\n      <input matInput formControlName=\"mrp\" appCurrencyFormat appOmitSpecialCharacters=\"integer\">\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\" >\n      <mat-label>HSN Code</mat-label>\n      <input matInput formControlName=\"hsncode\" maxlength=\"8\" appOmitSpecialCharacters=\"noSpecialChars\">\n      <mat-error>\n        <span *ngIf=\"saleInvoiceDetailFormGroup.get('hsncode').hasError('required') \"> HSN Code Required...! </span>\n      </mat-error>\n    </mat-form-field>\n  </div>\n\n  </form>\n</div>\n\n</ng-template>\n\n<ng-template #saleEntryDetailButtonTemplate>\n  <button type=\"button\" mat-raised-button color=\"primary\" [disabled]=\"!saleInvoiceDetailFormGroup.valid\"\n    (click)=\"onSaveOrUpdateOutwardDetail(false)\">{{outwardDtlBtnSaveContinueTxt}}</button>&nbsp;\n  <button type=\"button\" mat-raised-button color=\"primary\" [disabled]=\"!saleInvoiceDetailFormGroup.valid\"\n    (click)=\"onSaveOrUpdateOutwardDetail(true)\">{{outwardDtlBtnSaveCloseTxt}}</button>&nbsp;\n  <button type=\"button\" mat-raised-button (click)=\"resetDetailForm()\">Reset</button>\n</ng-template>\n\n\n<ng-template #deleteSaleDetailTemplate let-saleHead=\"data\">\n  Are you sure to delete <strong></strong>?\n</ng-template>\n\n\n<ng-template #productHistoryTemplate >\n  <!-- [ngIf]=\"displayProd\" -->\n  <mat-card class=\"mt-3 p-2\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" fxLayoutWrap>\n      <div fxFlex=\"100\"  fxLayoutGap=\"20px\">\n        <div fxFlex=\"50\" id=\"t01\">\n          <table class=\"table table-sm table-bordered\">\n            <thead>\n              <tr>\n                <th>Outward Date</th>\n                <th>ProdName</th>\n                <th>prodPackName</th>\n                <th>batch</th>\n                <th>ExpDate</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of purchaseHist\">\n                <td>{{data.outwardDate}}</td>\n                <td>{{data.prodName}}</td>\n                <td>{{data.prodPackName}}</td>\n                <td>{{data.batch}}</td>\n                <td>{{data.expdate}}</td>\n              </tr>\n            </tbody>\n          </table>\n          \n        </div>\n      </div>\n    </div>\n  </mat-card>\n</ng-template>\n\n\n<div class=\"modal\" id=\"deletePopup\" style=\"display: flex;background: rgba(0, 0, 0, 0.32);\">\n  <div class=\"modal-dialog modal-dialog-centered\" style=\"min-width: 30%;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color: #006476;padding: 8px 16px;\">\n        <p class=\"modal-title\" style=\"font-size: 16px;color: #fff;\">Delete Company Group</p>\n        <button class=\"close text-white\" data-dismiss=\"modal\" style=\"opacity: 1 !important;outline: none;\">&times;</button>\n      </div>\n      <div class=\"modal-body\" style=\"font-size: 15px;\">\n        Are you sure you want to delete this item?\n      </div>\n      <div class=\"modal-footer modal-footer p-1 border-0 pb-2 pr-2\">\n        <button type=\"button\" mat-raised-button (click)=\"deleteItem()\">Yes</button>\n        <button type=\"button\" mat-raised-button (click)=\"closePopup()\">No</button>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-order-list/sale-order-list.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-order-list/sale-order-list.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardSaleOrderListSaleOrderListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">Sales Order (SORD) List</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"12\" fxFlex.md=\"20\" class=\"master-btn text-right\" fxLayoutGap=\"5px\">\n      <button mat-raised-button [routerLink]=\"['../OutwardTransaction']\" color=\"primary\">Back</button>\n      <button mat-raised-button [routerLink]=\"['../saleOrderEntry']\" color=\"primary\">Add SaleOrder</button>\n    </div>\n    \n    </div>\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"orderlist-form\">\n          <form  [formGroup]=\"SaleOrderListHeadFormGroup\" fxLayoutGap=\"5px\">\n          <mat-form-field appearance=\"outline\" class=\"e_mat_date w_116\" style=\"margin: 5px;\">\n            <mat-label>From Date</mat-label>\n          <input matInput [matDatepicker]=\"picker\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"fromDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"e_mat_date w_116\" style=\"margin: 5px;\">\n            <mat-label>To Date</mat-label>\n          <input matInput [matDatepicker]=\"picker1\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"toDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"w_224\" style=\"margin: 5px;\">\n            <mat-label>SORD No</mat-label>\n            <input matInput formControlName=\"sretNo\">\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"w_224\" style=\"margin: 5px;\">\n            <mat-label>Customer  Name</mat-label>\n            <input matInput  formControlName=\"custmorName\">\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"w_116\" style=\"margin: 5px;\">\n            <mat-label>Sh.Name</mat-label>\n            <input matInput formContromName=\"shName\">\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"w_224\" style=\"margin: 5px;\">\n            <mat-label>City Name</mat-label>\n            <input matInput formContromName=\"cityName\">\n          </mat-form-field>  \n          <mat-form-field appearance=\"outline\" class=\"w_224\" style=\"margin: 5px;\">\n            <mat-label>GSTIN</mat-label>\n            <input matInput formContromName=\"gstin\">\n          </mat-form-field>       \n        \n          <button mat-raised-button color=\"primary\" (click)=\"getList()\" >Search</button> \n          <button mat-raised-button (click)=\"resetForm()\">Reset</button>       \n        </form>\n        </div>\n        </div>\n\n\n    \n  <div class=\"mt-2\">\n    <div class=\"master-table\" id=\"table-scroll\">\n      <app-alert [id]=\"'dataTableAlertId'\"></app-alert>\n      <app-table [definition]=\"tableDefinition\" [data]=\"dataList\" [tableAlertId]=\"'dataTableAlertId'\"\n        [isDataLoading]=\"isDataLoading\" [disableActions]=\"disableActions\"></app-table>\n    </div>\n  </div>\n    \n   \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-order/sale-order.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-order/sale-order.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardSaleOrderSaleOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-3\">\n\n\n\n  <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"55\" fxFlex.sm=\"57\" fxFlex.md=\"46\">\n      <h4 class=\"outward-pharma-head\">Sales Order (SORD) Entry</h4>\n    </div>\n    <div fxFlex=\"20\" fxFlex.xl=\"12\" fxFlex.sm=\"40\" fxFlex.md=\"40\" class=\"master-btn text-right\" fxLayoutGap=\"10px\">\n      <button mat-raised-button [routerLink]=\"['../salesOrders']\" color=\"primary\">Sale Order List</button>\n      <button type=\"button\" mat-raised-button color=\"primary\" [disabled]=\"!SaleOrderHeadFormGroup.valid\"\n        (click)=\"showSaleDetailTemplate('Add')\">Add Item</button>\n    </div>\n\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n    <form [formGroup]=\"SaleOrderHeadFormGroup\" fxLayoutGap=\"10px\">\n      <mat-form-field appearance=\"outline\" class=\"e_mat_date w_116\">\n        <mat-label>SORD Date</mat-label>\n        <input matInput [autofocus]=\"true\" formControlName=\"salDate\" [matDatepicker]=\"saleorderDate\" [min]=\"minDate\"\n          [max]=\"maxDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"saleorderDate\"></mat-datepicker-toggle>\n        <mat-datepicker #saleorderDate></mat-datepicker>\n      </mat-form-field>\n\n\n      <app-autocomplete [definition]=\"customAccountAutoCompleteDef\" [control]=\"SaleOrderHeadFormGroup.get('accName')\"\n        [optionsTableDefinition]=\"customAccountsOptsTable\"></app-autocomplete>\n\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Sh.Name</mat-label>\n        <input matInput formControlName=\"accShName\">\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\">\n        <mat-label>GSTIN</mat-label>\n        <input matInput formControlName=\"gstin\" maxlength=\"15\">\n        <mat-error *ngIf=\"SaleOrderHeadFormGroup.get('gstin').hasError('pattern')\">\n          Invalid GSTIN format.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"w_224\">\n        <mat-label>Company</mat-label>\n        <mat-select formControlName=\"compId\" appMatSelect placeholder=\"--Select--\" #companyfocus #CompanyTab\n          #singleSelect>\n          <mat-option>\n            <ngx-mat-select-search placeholderLabel=\"Find Company Type...\" (keydown)=\"companyTab($event)\"\n              noEntriesFoundLabel=\"'no matching Company found'\"\n              [formControl]=\"CompanyTabMultiFilterCtrl\"></ngx-mat-select-search>\n          </mat-option>\n          <mat-option value='0'>--Select--</mat-option>\n          <mat-option *ngFor=\"let bank of filteredCompanyMulti | async\" [value]=\"bank.compId\">\n            {{bank.compName}}\n          </mat-option>\n        </mat-select>\n\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"e_mat_date w_116\">\n        <mat-label>Remarks</mat-label>\n        <input matInput>\n      </mat-form-field>\n\n\n      <button mat-raised-button color=\"primary\" (click)=\"onSaveSalesorder()\"\n        [disabled]=\"SaleOrderHeadFormGroup.invalid\">{{outwardHeadBtnText}}</button>\n      <button mat-raised-button (click)=\"resetForm()\">Reset</button>\n      <button mat-raised-button [routerLink]=\"['../salesOrders']\">Back</button>\n    </form>\n\n  </div>\n\n  <!-- <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\" class=\"return-form\" fxLayoutGap=\"5px\">\n          <mat-form-field>\n            <mat-label>Product Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n       \n          <mat-form-field>\n            <mat-label>Sh.Name</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Product Pack</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Qty</mat-label>\n            <input matInput>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Qty.Disc</mat-label>\n            <input matInput>\n          </mat-form-field>  \n        \n          <mat-form-field>\n            <mat-label>Rate</mat-label>\n            <input matInput>\n          </mat-form-field>  \n        \n        \n          <button mat-raised-button color=\"primary\">Save</button> \n          <button mat-raised-button>Cancel</button>\n          \n        \n        </div>\n        </div>\n    \n    <div class=\"mt-2\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.shName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Product Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Product Pack </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.ProductPack}} </td>\n                </ng-container>\n    \n                <ng-container matColumnDef=\"companyName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Qty </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"tax\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Qty.Disc </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.tax}} </td>\n                </ng-container>\n        \n                <ng-container matColumnDef=\"rate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Rate </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.tax}} </td>\n                </ng-container>\n \n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <img title=\"Edit\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_edit2.png\"> |  <img title=\"Delete\" style=\"height: 24px;width: 24px\" src=\"../../../../assets/new_delete2.png\"> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n      </div> -->\n\n\n  <ng-template #saleOrderDetail>\n    <div fxFlex=\"100\" class=\"user-form\" fxLayoutGap=\"10px\">\n      <form [formGroup]=\"saleOrderDetailFormGroup\" class=\"pur-add-form mbl_height\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"24\" class=\"return_mat\" fxFlex.xs=\"100\">\n            <app-autocomplete [definition]=\"customProductAutoCompleteDef\" #productName\n              [control]=\"saleOrderDetailFormGroup.get('prodId')\" [optionsTableDefinition]=\"customProductOptsTable\"\n              [autofocus]=\"false\"></app-autocomplete>\n          </div>\n          <div fxFlex=\"24\">\n            <mat-form-field class=\"w-100\" appearance=\"outline\">\n              <mat-label>Sh.Name</mat-label>\n              <input matInput formControlName=\"shname\" required>\n              <mat-error>\n                <span *ngIf=\"saleOrderDetailFormGroup.get('productpack').hasError('required') \">Sh.Name Required...!\n                </span>\n                <!-- <span *ngIf=\"saleOrderDetailFormGroup.get('shortName').hasError('greaterValue2') \"> Sh.Name Not Found...!</span> -->\n                <span\n                  *ngIf=\"saleOrderDetailFormGroup.get('productpack').errors && saleOrderDetailFormGroup.get('productpack').hasError('incorrect')\">\n                  Product Pack Not Found...!</span>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"24\">\n            <mat-form-field class=\"w-100\" appearance=\"outline\">\n              <mat-label>Product Pack</mat-label>\n              <input matInput formControlName=\"productpack\" required>\n              <mat-error>\n                <span *ngIf=\"saleOrderDetailFormGroup.get('productpack').hasError('required') \">Product Pack\n                  Required...! </span>\n                <!-- <span *ngIf=\"saleOrderDetailFormGroup.get('shortName').hasError('greaterValue2') \"> Sh.Name Not Found...!</span> -->\n                <span\n                  *ngIf=\"saleOrderDetailFormGroup.get('productpack').errors && saleOrderDetailFormGroup.get('productpack').hasError('incorrect')\">\n                  Product Pack Not Found...!</span>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"user-form\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"24\">\n            <mat-form-field class=\"w-100\" appearance=\"outline\">\n              <mat-label>Qty</mat-label>\n              <input matInput formControlName=\"qty\" required>\n              <mat-error>\n                <span *ngIf=\"saleOrderDetailFormGroup.get('qty').hasError('required') \">Qty Required...! </span>\n                <!-- <span *ngIf=\"saleOrderDetailFormGroup.get('shortName').hasError('greaterValue2') \"> Sh.Name Not Found...!</span> -->\n                <span\n                  *ngIf=\"saleOrderDetailFormGroup.get('qty').errors && saleOrderDetailFormGroup.get('qty').hasError('incorrect')\">\n                  Qty Not Found...!</span>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"24\">\n            <mat-form-field class=\"w-100\" appearance=\"outline\">\n              <mat-label>Qty.Disc</mat-label>\n              <input matInput formControlName=\"qtyDisc\" required>\n              <mat-error>\n                <span *ngIf=\"saleOrderDetailFormGroup.get('qtyDisc').hasError('required') \">Qty.Disc Required...!\n                </span>\n                <!-- <span *ngIf=\"saleOrderDetailFormGroup.get('shortName').hasError('greaterValue2') \"> Sh.Name Not Found...!</span> -->\n                <span\n                  *ngIf=\"saleOrderDetailFormGroup.get('qtyDisc').errors && saleOrderDetailFormGroup.get('qtyDisc').hasError('incorrect')\">\n                  Qty Not Found...!</span>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"24\">\n            <mat-form-field class=\"w-100\" appearance=\"outline\">\n              <mat-label>Rate</mat-label>\n              <input matInput formControlName=\"rate\" required>\n              <mat-error>\n                <span *ngIf=\"saleOrderDetailFormGroup.get('rate').hasError('required') \">Rate Required...! </span>\n                <!-- <span *ngIf=\"saleOrderDetailFormGroup.get('shortName').hasError('greaterValue2') \"> Sh.Name Not Found...!</span> -->\n                <span\n                  *ngIf=\"saleOrderDetailFormGroup.get('rate').errors && saleOrderDetailFormGroup.get('rate').hasError('incorrect')\">\n                  Rate Not Found...!</span>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"user-form\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"24\">\n            <mat-form-field class=\"w-100\" appearance=\"outline\">\n              <mat-label>Company</mat-label>\n              <input matInput formControlName=\"company\">\n              <mat-error>\n                <span *ngIf=\"saleOrderDetailFormGroup.get('company').hasError('required') \">company Required...! </span>\n                <!-- <span *ngIf=\"saleOrderDetailFormGroup.get('shortName').hasError('greaterValue2') \"> Sh.Name Not Found...!</span> -->\n                <span\n                  *ngIf=\"saleOrderDetailFormGroup.get('company').errors && saleOrderDetailFormGroup.get('company').hasError('incorrect')\">\n                  Rate Not Found...!</span>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"24\">\n            <mat-form-field class=\"w-100\" appearance=\"outline\">\n              <mat-label>HSN Code</mat-label>\n              <input matInput formControlName=\"hsncode\">\n              <mat-error>\n                <!-- <span *ngIf=\"saleOrderDetailFormGroup.get('hsncode').hasError('required') \">Sh.Name Required...! </span> -->\n                <!-- <span *ngIf=\"saleOrderDetailFormGroup.get('shortName').hasError('greaterValue2') \"> Sh.Name Not Found...!</span> -->\n                <!-- <span\n                      *ngIf=\"saleOrderDetailFormGroup.get('hsncode').errors && saleOrderDetailFormGroup.get('hsncode').hasError('incorrect')\">\n                      Sh.Name Not Found...!</span> -->\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"24\">\n            <mat-form-field class=\"w-100\" appearance=\"outline\">\n              <mat-label>Tax</mat-label>\n              <input matInput formControlName=\"tax\" required>\n              <mat-error>\n                <span *ngIf=\"saleOrderDetailFormGroup.get('tax').hasError('required') \">Tax Required...! </span>\n                <!-- <span *ngIf=\"saleOrderDetailFormGroup.get('shortName').hasError('greaterValue2') \"> Sh.Name Not Found...!</span> -->\n                <span\n                  *ngIf=\"saleOrderDetailFormGroup.get('tax').errors && saleOrderDetailFormGroup.get('tax').hasError('incorrect')\">\n                  Tax Not Found...!</span>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <ng-template #saleOrderDetailButton>\n    <button type=\"button\" mat-raised-button color=\"primary\" [disabled]=\"!saleOrderDetailFormGroup.valid\"\n      (click)=\"onSaveOrUpdateSaleOrderDetail(true)\">{{detailburron}}</button>&nbsp;\n\n    <button type=\"button\" mat-raised-button color=\"primary\" [disabled]=\"!saleOrderDetailFormGroup.valid\"\n      (click)=\"onSaveOrUpdateSaleOrderDetail(false)\">{{detailsave}}</button>&nbsp;\n\n    <button type=\"button\" mat-raised-button class=\"btn btn-primary\" (click)=\"resetDialog()\">Reset</button>\n  </ng-template>\n\n  <div class=\"mt-2\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n      <div fxFlex=\"100\">\n        <app-alert [id]=\"'purchaseEntryList'\"></app-alert>\n        <app-table [definition]=\"tableDefinition\" [data]=\"outWardDetail\" [tableAlertId]=\"'purchaseEntryList'\"\n          [isDataLoading]=\"isDataLoading\" [disableActions]=\"disableActions\"></app-table>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal\" id=\"deletePopup\" style=\"display: none;background: rgba(0, 0, 0, 0.32);\">\n    <div class=\"modal-dialog modal-dialog-centered\" style=\"min-width: 30%;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\" style=\"background-color: #006476;padding: 8px 16px;\">\n          <p class=\"modal-title\" style=\"font-size: 16px;color: #fff;\">Delete Company Group</p>\n          <button class=\"close text-white\" data-dismiss=\"modal\"\n            style=\"opacity: 1 !important;outline: none;\">&times;</button>\n        </div>\n        <div class=\"modal-body\" style=\"font-size: 15px;\">\n          Are you sure you want to delete this item?\n        </div>\n        <div class=\"modal-footer modal-footer p-1 border-0 pb-2 pr-2\">\n          <button type=\"button\" mat-raised-button (click)=\"deleteItem()\">Yes</button>\n          <button type=\"button\" mat-raised-button (click)=\"closePopup()\">No</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-register/sale-register.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-register/sale-register.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardSaleRegisterSaleRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ml-3 mr-3 mb-3\">\n    <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n      fxLayoutGap=\"10px\">\n      <div fxFlex=\"40\">\n        <h4 class=\"pharmacyHeading\">sale Register</h4>\n      </div>\n    </div>\n</div>\n  \n\n<mat-card>\n  <form [formGroup]=\"SaleRegisterForm\">\n      <div fxFlex=\"100\" fxlayout=\"row\" fxlayout.xs=\"column\" fxLayoutGap=\"60px\"  class=\"buttons\">\n\n        <div class=\"action_btn\" fxLayoutAlign=\"end\">\n          \n          <!-- <button type=\"button\" mat-raised-button color=\"primary\" class=\"purchase-button\"  (click)=\"Excel()\">Excel</button>&nbsp; -->\n          <img \n          src=\"assets\\new_xl.png\" \n          alt=\"Excel Button\" title=\"Excel\"\n          class=\"purchase-button\" \n          (click)=\"Excel()\" \n          style=\"cursor: pointer;height: 24px;width: 26px\"/> &nbsp;&nbsp;\n          <img \n          src=\"assets\\new_pdf.png\" \n          alt=\"Pdf Button\" title=\"PDF\" \n          class=\"purchase-button\" \n          (click)=\"Excel()\" \n          style=\"cursor: pointer;height: 24px;width: 26px\"/>&nbsp;&nbsp;\n          <img \n          src=\"assets\\new_print.png\" \n          alt=\"Print Button\" title=\"Print\" \n          class=\"purchase-button\" \n          (click)=\"Excel()\" \n          style=\"cursor: pointer;height: 24px;width: 26px\"/>&nbsp;&nbsp;\n\n          <img \n          src=\"assets\\new_whatsApp2.png\" \n          alt=\"WhatsApp Button\" title=\"WhatsApp\"\n          class=\"purchase-button\" \n          (click)=\"Excel()\" \n          style=\"cursor: pointer;height: 24px;width: 26px\"/>&nbsp;&nbsp;\n          <img \n          src=\"assets\\new_mail.png\" \n          alt=\"Mail Button\" title=\"Mail\"\n          class=\"purchase-button\" \n          (click)=\"Excel()\" \n          style=\"cursor: pointer;height: 24px;width: 26px\"/>&nbsp;&nbsp;\n\n          <!-- <button type=\"button\" mat-raised-button color=\"primary\" class=\"purchase-button\"  >Pdf</button>&nbsp; -->\n          \n        </div>\n    \n        \n          <!-- <div fxFlex=\"100\" class=\"head-form\" fxLayoutGap=\"5px\"> -->\n            <mat-form-field appearance=\"fill\" class=\"mat_date\">\n              <mat-label>From Date</mat-label>\n              <input matInput [matDatepicker]=\"fromdate\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"fromDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"fromdate\"></mat-datepicker-toggle>\n              <mat-datepicker #fromdate></mat-datepicker>\n            </mat-form-field>\n    \n    \n            <mat-form-field appearance=\"fill\" class=\"mat_date\">\n                <mat-label>To Date</mat-label>\n                <input matInput [matDatepicker]=\"todate\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"toDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"todate\"></mat-datepicker-toggle>\n                <mat-datepicker #todate></mat-datepicker>\n              </mat-form-field>\n        \n              <!-- <mat-form-field appearance=\"outline\" *ngIf=\"showDate\">\n                <mat-label>Date Option</mat-label>\n                <mat-select    appMatSelect  required formControlName=\"dateOption\">\n                  <mat-option *ngFor=\"let opt of dateOptionData\" [value]=\"opt?.id\">{{opt?.value}}\n                  </mat-option>\n                </mat-select>\n                <mat-error class=\"error-msg\">\n                  <span >Date option is Required...!</span>\n                </mat-error>\n              </mat-form-field> -->\n    \n    \n          <mat-form-field appearance=\"outline\">\n            <mat-label>Report Options</mat-label>\n            <mat-select id=\"transactionMode1\"   appMatSelect  required  formControlName=\"reportType\">\n              <mat-option *ngFor=\"let rprt of reportTypeData\" [value]=\"rprt?.id\">\n                {{rprt?.value}}\n              </mat-option>\n            </mat-select>\n            <mat-error class=\"error-msg\">\n              <span >Report options are Required...!</span>\n            </mat-error>\n          </mat-form-field>\n    \n    \n          <!-- <mat-form-field appearance=\"outline\">\n            <mat-label>Want Taxwise Details</mat-label>\n            <mat-select id=\"transactionMode1\"   appMatSelect  required  formControlName=\"wantTaxWiseDetails\">\n              <mat-option  value=\"1\">  Yes  </mat-option>\n              <mat-option value=\"2\">No</mat-option>\n            </mat-select>\n            <mat-error class=\"error-msg\">\n              <span >taxwise Details are Required...!</span>\n            </mat-error>\n          </mat-form-field> -->\n    \n          <!-- </div> -->\n        \n      </div>    \n  </form>  \n\n  <div class=\"action_btn\" fxLayoutAlign=\"center\">\n    <button type=\"button\" mat-raised-button color=\"primary\" class=\"purchase-button\"  (click)=\"goback()\">Back</button>&nbsp;&nbsp;\n    <button type=\"button\" [disabled]=\"SaleRegisterForm.invalid\" mat-raised-button color=\"primary\" class=\"purchase-button\"  (click)=\"getSearchData()\" > Search  </button>&nbsp;\n  </div>\n\n</mat-card>\n\n\n\n<div class=\"mt-2\">\n  <div class=\"master-table\" id=\"table-scroll\" *ngIf=\"showTable\">\n    <!-- <app-alert [id]=\"'dataTableAlertId'\"></app-alert> -->\n    <app-registers-table [dataSource]=\"dataSource\"></app-registers-table>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-return-list/sale-return-list.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-return-list/sale-return-list.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardSaleReturnListSaleReturnListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-3\">\n\n\n\n  <div fxLayout=\"row\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap\n    fxLayoutGap=\"10px\">\n    <div fxFlex=\"80\" fxFlex.xl=\"80\" fxFlex.sm=\"80\" fxFlex.md=\"80\">\n      <h4 class=\"outward-pharma-head\">Sales Return List</h4>\n    </div>\n\n    <div fxFlex=\"20\" fxFlex.xl=\"20\" fxFlex.sm=\"20\" fxFlex.md=\"20\" class=\"master-btn text-right\">\n      <button mat-raised-button (click)=\"addInvoice()\"  color=\"primary\">Add SaleReturn</button>\n\n      <!-- <button mat-raised-button [routerLink]=\"['../salesReturns']\" color=\"primary\">Back</button> -->\n    </div>\n\n  </div>\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"5px\" class=\"user-form\">\n    <div fxFlex=\"100\" class=\"retList-form\">\n      <form [formGroup]=\"salesReturnList\" fxLayoutGap=\"5px\">\n        <mat-form-field appearance=\"outline\" class=\"e_mat_date w_116\" style=\"margin: 5px;\">\n          <mat-label>From Date</mat-label>\n          <input matInput [matDatepicker]=\"picker\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"fromDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"e_mat_date w_116\" style=\"margin: 5px;\">\n          <mat-label>To Date</mat-label>\n          <input matInput [matDatepicker]=\"picker1\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"toDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1></mat-datepicker>\n        </mat-form-field>\n        <!-- <mat-form-field>\n            <mat-label>To Date</mat-label>\n            <input matInput>\n          </mat-form-field> -->\n        <mat-form-field appearance=\"outline\" class=\"w_224\" style=\"margin: 5px;\">\n          <mat-label>SRET No</mat-label>\n          <input matInput formControlName=\"sretNo\">\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"w_224\" style=\"margin: 5px;\">\n          <mat-label>Customer Name</mat-label>\n          <input matInput formControlName=\"custmorName\">\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"w_116\" style=\"margin: 5px;\">\n          <mat-label>Sh.Name</mat-label>\n          <input matInput formContromName=\"shName\">\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"w_224\" style=\"margin: 5px;\">\n          <mat-label>City Name</mat-label>\n          <input matInput formContromName=\"cityName\">\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"w_224\" style=\"margin: 5px;\">\n          <mat-label>GSTIN</mat-label>\n          <input matInput formContromName=\"gstin\">\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"w_224\" style=\"margin: 5px;\">\n          <mat-label>Mode</mat-label>\n          <input matInput formContromName=\"mode\">\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" style=\"margin: 5px;\">\n          <mat-label>Inv.Value</mat-label>\n          <input matInput formContromName=\"invValue\">\n        </mat-form-field>\n\n        <button mat-raised-button color=\"primary\" class=\"mat_btn\" (click)=\"getList()\">Search</button>\n        <button mat-raised-button class=\"mat_btn\">Reset</button>\n        <button type=\"button\" class=\"mat_btn\" mat-raised-button [routerLink]=\"['../OutwardTransaction']\">Back</button>\n      </form>\n\n    </div>\n  </div>\n\n\n\n  <div class=\"mt-2\">\n    <div class=\"master-table\" id=\"table-scroll\">\n      <app-alert [id]=\"'dataTableAlertId'\"></app-alert>\n      <app-table [definition]=\"tableDefinition\" [data]=\"dataList\" [tableAlertId]=\"'dataTableAlertId'\"\n        [isDataLoading]=\"isDataLoading\" [disableActions]=\"disableActions\"></app-table>\n    </div>\n  </div>\n\n  <ng-template #deletePurchaseHeadTemplate let-purchaseHead=\"data\">\n    Are you sure to delete <strong></strong> Purchase Head?\n  </ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-return/sale-return.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-return/sale-return.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDistributionOutWardSaleReturnSaleReturnComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-3\">\n\n\n\n  <div fxLayout=\"row\" class=\"tab_md_flex\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.xs=\"center center\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"5px\">\n    <div fxFlex=\"20\" fxFlex.xl=\"20\" fxFlex.sm=\"20\" fxFlex.md=\"20\">\n      Sal.Retn.No: {{outwardHeadNo}}\n    </div>\n    <div fxFlex=\"40\" fxFlex.xl=\"40\" class=\"text-right\" fxFlex.sm=\"40\" fxFlex.md=\"40\">\n        <h4 class=\"outward-pharma-head\">Sales Return Entry</h4>\n    </div>\n   <div fxFlex=\"40\" fxFlex.xl=\"40\" fxFlex.sm=\"40\" fxFlex.md=\"40\">\n    \n    <div  class=\"master-btn text-right\">\n      <button mat-raised-button color=\"primary\" [disabled]=\"!salesReturnFormGroup.valid\"  (click)=\"showSaleDetailTemplate('Add')\">Add Item</button> &nbsp; &nbsp;\n      <button mat-raised-button color=\"primary\"  (click)=\"showList()\">List</button>\n\n  </div>\n   </div>\n</div>\n\n    \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\" class=\"user-form\">\n      <form [formGroup]=\"salesReturnFormGroup\">\n        <div fxFlex=\"100\" class=\"return-form\" fxLayoutGap=\"5px\">\n    \n          <!-- SRET Date -->\n          <mat-form-field appearance=\"outline\" class=\"e_mat_date\">\n            <mat-label>S.RET Date *</mat-label>\n            <input  matInput [matDatepicker]=\"sretDate\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"sretDate\" appDateMask>\n            <mat-datepicker-toggle matSuffix [for]=\"sretDate\"></mat-datepicker-toggle>\n            <mat-datepicker #sretDate></mat-datepicker>\n            <mat-error *ngIf=\"salesReturnFormGroup.get('sretDate').hasError('required')\">\n              S.RET Date is required.\n            </mat-error>\n          </mat-form-field>\n    \n          <!-- Customer Name Autocomplete -->\n          <app-autocomplete\n            [definition]=\"customerNameAutoCompleteDef\"  \n            [control]=\"salesReturnFormGroup.get('accName')\"\n            [optionsTableDefinition]=\"customAccountsOptsTable\">\n          </app-autocomplete>\n    \n          <!-- Short Name -->\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Sh.Name</mat-label>\n            <input matInput formControlName=\"accShName\">\n          </mat-form-field>\n    \n          <!-- GSTIN -->\n          <mat-form-field appearance=\"outline\">\n            <mat-label>GSTIN</mat-label>\n            <input matInput formControlName=\"gstin\" maxlength=\"15\">\n            <mat-error *ngIf=\"salesReturnFormGroup.get('gstin').hasError('pattern')\">\n              Invalid GSTIN format.\n            </mat-error>\n          </mat-form-field>\n    \n          <!-- Company Name Autocomplete -->\n          <!-- <app-autocomplete\n            [definition]=\"companyNameAutoCompleteDef\"\n            [control]=\"salesReturnFormGroup.get('companyName')\"\n            [optionsTableDefinition]=\"companyNameOptsTable\">\n          </app-autocomplete> -->\n\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Company</mat-label>\n            <mat-select formControlName=\"compId\"  appMatSelect placeholder=\"--Select--\" #companyfocus  #CompanyTab   #singleSelect>\n              <mat-option>\n                <ngx-mat-select-search placeholderLabel=\"Find Company Type...\"  (keydown)=\"companyTab($event)\"\n                noEntriesFoundLabel=\"'no matching Company found'\"  [formControl]=\"CompanyTabMultiFilterCtrl\"></ngx-mat-select-search>\n              </mat-option>\n              <!-- <mat-option [value]=0>--Select--</mat-option> -->\n              <mat-option value='0'>--Select--</mat-option>\n              <mat-option *ngFor=\"let bank of filteredCompanyMulti | async\"  [value]=\"bank.compId\">\n                {{bank.compName}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    \n          <!-- Delivery From -->\n          <!-- <mat-form-field appearance=\"outline\">\n            <mat-label>Delivery From</mat-label>\n            <input matInput formControlName=\"deliveryFrom\">\n          </mat-form-field> -->\n    \n          <!-- Mode Selection -->\n          <!-- <mat-form-field appearance=\"outline\">\n            <mat-label>Mode *</mat-label>\n            <mat-select \n              formControlName=\"mode\" \n              (focusout)=\"onDropdownOpen()\">\n              <mat-option *ngFor=\"let mode of modeData\" [value]=\"mode.code\">{{ mode.name }}</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"salesReturnFormGroup.get('mode').hasError('required')\">\n              Mode is required.\n            </mat-error>\n          </mat-form-field> -->\n          <mat-form-field appearance=\"outline\" class=\"w_224\">\n            <mat-label>Mode</mat-label>\n            <mat-select formControlName=\"mode\" required appMatSelect>\n              <mat-option *ngFor=\"let mode of modeData\" [value]=\"mode?.code\">{{mode?.name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <!-- <mat-form-field appearance=\"outline\" class=\" \">\n            <mat-label>Mode</mat-label>\n            <mat-select formControlName=\"mode\" required appMatSelect>\n              <mat-option *ngFor=\"let mode of modeData\" [value]=\"mode?.code\">{{mode?.name}}</mat-option>\n            </mat-select>\n          </mat-form-field> -->\n          <!-- Buttons -->\n          <button type=\"button\" mat-raised-button color=\"primary\" [disabled]=\"salesReturnFormGroup.invalid\"\n            (click)=\"onSaveSalesReturn()\">{{purchaseHeadBtnText}}</button>\n          <button type=\"button\" mat-raised-button (click)=\"resetForm()\">Reset</button>\n          <button type=\"button\" mat-raised-button (click)=\"goBack()\">Back</button>\n        </div>\n      </form>\n    </div>\n    \n    \n    <!-- <div class=\"mt-2\" *ngIf=\"showTable\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n          <div fxFlex=\"100\">\n    \n            <div class=\"master-table mat-elevation-z4\" id=\"table-scroll\">\n              <table mat-table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"shName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sh.Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.prodShName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Product Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.prodName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductPack\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Product Pack </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.prodPackName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"ProductType\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Batch </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.batch}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"expDate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Exp.Date </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.expdate}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"companyName\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Qty </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.invQty}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"tax\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Qty.Disc </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.invQtyDisc}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"mrp\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> MRP </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.mrp}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"saleRate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Sale Rate </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.saleRate}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"rate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Rate </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.purRate}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"disc\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Disc </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.purDisc}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"grsValue\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Grs.Value </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.grsValue}} </td>\n                </ng-container>\n             \n                <ng-container matColumnDef=\"actions\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n                  <td mat-cell *matCellDef=\"let element\"> <i title=\"Edit\" class=\"fas fa-pencil-alt\" (click)=\"editDetails(element)\"></i> | <i  (click)=\"deleteDetails(element)\" title=\"Delete\"\n                      class=\"far fa-trash-alt\"></i> </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator class=\"mat-paginator-sticky\" [pageSizeOptions]=\"[10, 20, 30, 40, 50]\"></mat-paginator>\n            </div>\n          </div>\n    \n        </div>\n    </div> -->\n\n    <div class=\"mt-2\">\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"100\">\n          <app-alert [id]=\"'purchaseEntryList'\"></app-alert>\n          <app-table [definition]=\"tableDefinition\" [data]=\"dataSource\" [tableAlertId]=\"'purchaseEntryList'\"\n            [isDataLoading]=\"isDataLoading\" [disableActions]=\"disableActions\"></app-table>      \n        </div>\n      </div>\n    </div>\n\n    <ng-template [ngIf]=\"displayPreTax\">\n      <mat-card class=\"mt-1 p-2 mb-2 mb_50\">\n\n        <div fxLayout=\"row\"  [formGroup]=\"headFormGroup\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" class=\"sm_align\" fxLayout.lg=\"row\" fxLayoutWrap fxLayoutGap=\"10px\">\n          \n      <div fxFlex=\"30\" fxFlex.md=\"20\" class=\"user-form tab_width\" fxFlex.xs=\"100\">\n            <!-- <mat-form-field appearance=\"outline\">\n              <mat-label>Dr. Adj.</mat-label>\n              <input matInput formControlName=\"otherDed\" appOmitSpecialCharacters=\"integer\"  (focusout)=\"validateFloatKeyPress($event.target)\" (input)=\"djadjInput($event.target.value)\">\n            </mat-form-field> -->\n            <!-- <mat-form-field appearance=\"outline\" >\n              <mat-label>other Charges</mat-label>\n              <input matInput formControlName=\"otherDed\">\n            </mat-form-field> -->\n                      \n              <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Remarks</mat-label>\n                <textarea matInput formControlName=\"otherAdd\"></textarea>\n              </mat-form-field>\n            <!-- <mat-form-field appearance=\"outline\">\n              <mat-label>Cr. Adj.</mat-label>\n              <input matInput formControlName=\"otherAdd\"  appOmitSpecialCharacters=\"integer\"  (focusout)=\"validateFloatKeyPress($event.target)\" (input)=\"cjadjInput($event.target.value)\">\n            </mat-form-field> -->\n\n          <!-- <div fxFlex=\"60\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"47\">\n            <app-autocomplete [definition]=\"customAccountDedAdjAutoCompleteDef\"\n            [control]=\"otherDedAccId\"></app-autocomplete>\n\n            <app-autocomplete [definition]=\"customAccountAddAdjAutoCompleteDef\"\n            [control]=\"otherAddAccId\"></app-autocomplete>\n          </div> -->\n                      \n      \n        <!-- <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"row\" fxLayout.md=\"row\" fxLayoutGap=\"10px\"> -->\n          <!-- <mat-form-field appearance=\"outline\" fxFlex=\"31\">\n            <mat-label>Hamali Value</mat-label>\n            <input matInput formControlName=\"hamaliValue\">\n          </mat-form-field> -->\n          <!-- <mat-form-field appearance=\"outline\" fxFlex=\"48\" fxFlex.xs=\"100\" fxFlex.sm=\"50\">\n            <mat-label>Net. Value</mat-label>\n            <input matInput formControlName=\"netValue\">\n          </mat-form-field> -->\n          <!-- <mat-form-field appearance=\"outline\" fxFlex=\"48\" fxFlex.xs=\"100\" fxFlex.sm=\"50\">\n            <mat-label>Inv. Value</mat-label>\n            <input matInput formControlName=\"invValue\">\n          </mat-form-field> -->\n        <!-- </div> -->\n        </div>\n          \n      <div fxFlex=\"30\" id=\"t01\" class=\"tab_width text-center\">\n          <!-- <h6>As Per Calculation</h6> -->\n          <div style=\"max-height: 160px;overflow: auto;scrollbar-width: thin;\">\n            <table class=\"table table-sm table-bordered\" style=\"width: 100%;font-size: 12px;\">\n              <thead>\n                <tr>\n                  <th>GST%</th>\n                  <th>Taxable </th>\n                  <ng-template [ngIf]=\"hasIGST\">\n                    <th>IGST</th>\n                  </ng-template>\n                  <ng-template [ngIf]=\"!hasIGST\">\n                    <th>CGST</th>\n                    <th>SGST</th>\n                  </ng-template>\n                </tr>\n              </thead>\n              <tr *ngFor=\"let pretax of pretaxes\">\n                <td>{{pretax.tax | number:'1.2-2'}}</td>\n                <td>{{pretax.preTaxValue | number:'1.2-2'}}</td>\n                <ng-template [ngIf]=\"hasIGST\">\n                  <td> {{pretax?.taxes[0]?.stakeValue | number:'1.2-2'}}</td>\n                </ng-template>\n                <ng-template [ngIf]=\"!hasIGST\">\n                  <td>\n                    {{(pretax?.taxes.length > 0)?(pretax.taxes[0].taxStakeName=='CGST'?pretax.taxes[0].stakeValue:pretax.taxes[1].stakeValue | number:'1.2-2'):''}}\n                  </td>\n                  <td>\n                    {{(pretax?.taxes.length > 0)?(pretax.taxes[0].taxStakeName=='SGST'?pretax.taxes[0].stakeValue:pretax.taxes[1].stakeValue | number:'1.2-2'):''}}\n                  </td>\n                </ng-template>\n              </tr>\n            </table>\n          </div>\n        </div>\n      \n      <div fxFlex=\"20\" fxFlex.md=\"30\" class=\"tab_width\" style=\"font-size: 14px;font-weight: bold;\">\n        <!-- <div fxFlex=\"100\"  fxLayoutGap=\"20px\"> -->\n          <div style=\"display: flex;\">\n            <div class=\"col-md-6 px-1 text-right\">Grs. Value :&nbsp;</div>\n            <div class=\"col-md-6 tab_width2 px-1 text-right\"> {{head.grsValue | number:'1.2-2'}}</div>\n          </div>\n          <div style=\"display: flex;\">\n            <div class=\"col-md-6 px-1 text-right\">Disc. Value :&nbsp;</div>\n            <div class=\"col-md-6 tab_width2 px-1 text-right\">{{head.discValue | number:'1.2-2'}}</div>\n          </div>\n          <div style=\"display: flex;\">\n            <div class=\"col-md-6 px-1 text-right\"> Disc. Value 1 :&nbsp;</div>\n            <div class=\"col-md-6 tab_width2 px-1 text-right\">{{head.disc1Value | number:'1.2-2'}}</div>\n          </div>\n          <div style=\"display: flex;\">\n            <div class=\"col-md-6 px-1 text-right\">Tax Value :&nbsp;</div>\n            <div class=\"col-md-6 tab_width2 px-1 text-right\">{{head.taxValue | number:'1.2-2'}}</div>\n          </div>\n          <div style=\"display: flex;\">\n            <div class=\"col-md-6 align-self-center px-1 text-right\">other charges :&nbsp;</div>\n            <div class=\"col-md-6 tab_width2 px-1 text-right\">\n              <mat-form-field appearance=\"outline\" style=\"width: 95px !important;\" >\n                <input appCurrencyFormat matInput formControlName=\"otherDed\">\n              </mat-form-field>\n            </div>\n          </div>\n          <div style=\"display: flex;\">\n            <div class=\"col-md-6 px-1 text-right text-success\">Sal.Retn.Value :&nbsp;</div>\n            <div class=\"col px-1 tab_width2 text-right text-success\">{{roundedValue}}</div>\n          </div>\n        <!-- </div> -->\n      </div>\n\n      <div fxFlex=\"17\" class=\"text-right mbl_center mt-2\" style=\"place-content: end;\">\n        <button mat-raised-button color=\"primary\" (click)=\"doFinalSave()\">{{finalSavebutton}}</button> &nbsp;\n        <button mat-raised-button (click)=\"resetFinalSave()\">Reset</button>\n      </div>\n\n            <!-- <div fxFlex=\"50\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" id=\"t01\">\n              <h6>As per Invoice</h6>\n              <table class=\"table table-sm table-bordered\"  >\n                <thead>\n                  <th>GST%</th>\n                  <th>Taxable </th>\n                  <ng-template [ngIf]=\"hasIGST\">\n                    <th>IGST</th>\n                  </ng-template>\n                  <ng-template [ngIf]=\"!hasIGST\">\n                    <th>CGST</th>\n                    <th>SGST</th>\n                  </ng-template>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let pretaxFormGroup of invoiceTax.controls\">\n    \n                    <td>{{pretaxFormGroup.controls.tax.value}}</td>\n                    <td [formGroup]=\"pretaxFormGroup\"><input type=\"text\" formControlName=\"iPreTaxValue\"\n                        style=\"border:0;width: 66px;\" (blur)=\"updateInvValueForFinalSave()\"></td>\n                    <ng-template [ngIf]=\"hasIGST\">\n                      <ng-container *ngFor=\"let taxFormGroup of pretaxFormGroup.controls.taxes.controls\">\n                        <td [formGroup]=\"taxFormGroup\"> <input type=\"text\" formControlName=\"iStakeValue\"\n                            style=\"border:0;width: 66px;\" (blur)=\"updateInvValueForFinalSave()\"></td>\n                      </ng-container>\n                    </ng-template>\n                    <ng-template [ngIf]=\"!hasIGST\">\n                      <ng-container *ngFor=\"let taxFormGroup of pretaxFormGroup.controls.taxes.controls\">\n                        <ng-template [ngIf]=\"taxFormGroup.controls.taxStakeName.value==='CGST'\">\n                          <td [formGroup]=\"taxFormGroup\"> <input type=\"text\" formControlName=\"iStakeValue\"\n                              style=\"border:0;width: 66px;\" (blur)=\"updateInvValueForFinalSave()\"></td>\n                        </ng-template>\n                      </ng-container>\n                      <ng-container *ngFor=\"let taxFormGroup of pretaxFormGroup.controls.taxes.controls\">\n                        <ng-template [ngIf]=\"taxFormGroup.controls.taxStakeName.value==='SGST'\">\n                          <td [formGroup]=\"taxFormGroup\"> <input type=\"text\" formControlName=\"iStakeValue\"\n                              style=\"border:0;width: 66px;\" (blur)=\"updateInvValueForFinalSave()\"></td>\n                        </ng-template>\n                      </ng-container>\n                    </ng-template>\n                  </tr>\n                </tbody>\n              </table>\n            </div> -->\n           \n  \n        </div>\n  \n      </mat-card>\n    </ng-template>\n    \n    <!-- <mat-card class=\"mt-3 p-2\"> \n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n        <div fxFlex=\"55\">\n            <table class=\"table table-bordered table-sm\">\n                <thead>\n                    <th> GST% </th>\n                    <th> Taxable </th>                  \n                </thead>\n                <tbody>\n                    <tr>\n                        <td> 18% </td>\n                        <td> 2000 </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div fxFlex=\"45\" class=\"pur-values-form\" fxLayoutGap=\"5px\">   \n          <mat-form-field appearance=\"fill\">\n            <mat-label>Textarea</mat-label>\n            <textarea matInput></textarea>\n          </mat-form-field>  \n        </div>\n        </div>    \n        <div class=\"text-right\">\n            <button mat-raised-button color=\"primary\">Save</button>  &nbsp;\n            <button mat-raised-button>Reset</button>\n        </div>\n    \n    </mat-card> -->\n\n    <ng-template #purchaseDetailTemplate>\n      <div fxFlex=\"100\" class=\"user-form form_height_mbl\" fxLayoutGap=\"10px\">\n        <form [formGroup]=\"salesReturnDetails\">\n          <div fxLayout=\"row\" class=\"mt-1\" fxLayoutWrap fxLayoutGap=\"10px\">\n\n                <div fxFlex=\"24\" class=\"return_mat\" fxFlex.xs=\"100\">\n                  <app-autocomplete [definition]=\"customProductAutoCompleteDef\" #productName\n                  [control]=\"salesReturnDetails.get('prodId')\" [optionsTableDefinition]=\"customProductOptsTable\"\n                  [autofocus]=\"false\"></app-autocomplete>\n                </div>\n\n\n                <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\">\n                  <mat-label>Sh.Name</mat-label>\n                  <input matInput formControlName=\"prodShName\" required>\n                  <mat-error>\n                    <span *ngIf=\"salesReturnDetails.get('prodShName').hasError('required') \">Sh.Name Required...! </span>\n                    <span\n                      *ngIf=\"salesReturnDetails.get('prodShName').errors && purchaseDetailFormGroup.get('prodShName').hasError('incorrect')\">\n                      Sh.Name Not Found...!</span>\n                  </mat-error>\n                </mat-form-field>\n\n              <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\">\n                <mat-label>Product Pack</mat-label>\n                <input [disabled]=\"isdisable\" matInput formControlName=\"prodPackName\" required>\n    \n                <mat-error>\n                  <span *ngIf=\"salesReturnDetails.get('prodPackName').hasError('required')\">Product Pack\n                    Required...!</span>\n                </mat-error>\n              </mat-form-field>\n    \n          </div>\n          <div fxLayout=\"row\" class=\"mt-1\" fxLayoutWrap fxLayoutGap=\"10px\">\n    \n              <!-- <mat-form-field appearance=\"outline\" fxFlex=\"33\">\n                  <mat-label>Batch</mat-label>\n                  <input matInput formControlName=\"batch\" required>\n                </mat-form-field> -->\n              \n              <app-autocomplete class=\"return_mat\" fxFlex=\"24\" fxFlex.xs=\"100\" [definition]=\"batchAutoCompleteDef\" id=\"addBatchProductId\"\n              [control]=\"salesReturnDetails.get('batch')\" #batchAutoComplete\n              [optionsTableDefinition]=\"batchOptsTable\"></app-autocomplete>\n    \n              <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\">\n                <mat-label>Exp.Date</mat-label>\n                <input matInput disabled type=\"text\" formControlName=\"expdate\" maxLength=\"5\"\n                   appOmitSpecialCharacters=\"integer\" required onkeyup=\"\n                  var v = this.value;\n                  if (v.match(/^\\d{2}$/) !== null) {\n                      this.value = v + '-'; }\">\n                <mat-error>\n                  <span *ngIf=\"salesReturnDetails.get('expdate').hasError('required') \"> Exp.Date Required...! </span>\n                  <span *ngIf=\"salesReturnDetails.get('expdate').hasError('greaterValue') \"> Do not enter <b>Previous\n                      Date</b>...!</span>\n                  <span *ngIf=\"salesReturnDetails.get('expdate').hasError('greaterValue1')\">Not a Valid Date...!</span>\n                  <span *ngIf=\"salesReturnDetails.get('expdate').hasError('greater')\">Not a Valid Date...!</span>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" fxFlex=\"12\" fxFlex.xs=\"100\">\n                <mat-label>Qty.</mat-label>\n    \n                <input [disabled]=\"isdisable\" matInput formControlName=\"invQty\" appQntCurrencyFormat maxlength=\"7\"\n                  appOmitSpecialCharacters=\"integer\" (input)=\"qtyvalue('invQty')\">\n                <mat-error>\n                  <span\n                    *ngIf=\"salesReturnDetails.get('invQty').errors && purchaseDetailFormGroup.get('invQty').hasError('incorrecterror')\">quantity\n                    must be greater {{qtyvalue1}}</span>\n                  <span *ngIf=\"salesReturnDetails.get('invQty').hasError('required') \"> Qty. Required...! </span>\n                </mat-error>\n              </mat-form-field>\n    \n              <mat-form-field appearance=\"outline\" fxFlex=\"11\" fxFlex.xs=\"100\">\n                <mat-label>Qty.Disc.</mat-label>\n                <input matInput [disabled]=\"isdisable\" formControlName=\"invQtyDisc\" appQntCurrencyFormat maxlength=\"7\"\n                  appOmitSpecialCharacters=\"integer\" (input)=\"qtyvalue('recdQtyFree')\">\n                <mat-error>\n                  <!-- <span *ngIf=\"itemForm.get('recdQtyFree').hasError('notUnique')\">quantity must be greater {{qtyandfree}}</span> -->\n                  <span\n                    *ngIf=\"salesReturnDetails.get('invQtyDisc').errors && itemForm.get('invQtyDisc').hasError('incorrecterror1')\">quantity\n                    must be greater {{qtyandfree}}</span>\n                </mat-error>\n              </mat-form-field>\n\n              <div fxFlex=\"24\" fxFlex.xs=\"100\" class=\"mat_product\">\n                <!-- <app-autocomplete [definition]=\"productStatus\"\n                  [control]=\"salesReturnDetails.get('productStatus')\"></app-autocomplete> -->\n                  <mat-form-field appearance=\"outline\" class=\"w-100\">\n                    <mat-label>Status</mat-label>\n                    <mat-select formControlName=\"productStatus\" appMatSelect>\n                      <mat-option *ngFor=\"let status of statusDropdown\" [value]=\"status.code\">{{status?.name}}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n              </div>\n    \n          </div>\n          <div fxLayout=\"row\" class=\"sales-return mt-1\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n    \n              <!-- <app-autocomplete fxFlex=\"24\" fxFlex.xs=\"100\" *ngIf=\"firmPreferences?.discTypeOption === 3\" [definition]=\"discountType\"\n              [control]=\"salesReturnDetails.get('purDiscType')\">\n            </app-autocomplete> -->\n            \n            <mat-form-field appearance=\"outline\" fxFlex=\"24\" *ngIf=\"firmPreferences?.allowDisc2 != 0 && firmPreferences?.discTypeOption == 3\" >\n              <mat-label>Discount *</mat-label>\n              <mat-select appMatSelect formControlName=\"purDiscType\">\n                <!-- <mat-option [value]=0>--Select--</mat-option> -->\n                <mat-option *ngFor=\"let tran of discountDropDown\"  [value]=\"tran.code\">\n                  {{tran.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n  \n            <mat-form-field *ngIf=\"(firmPreferences?.discTypeOption == 1 || firmPreferences?.discTypeOption == 2) && firmPreferences?.allowDisc2 != 0\"\n              appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\">\n              <mat-label>Discount</mat-label>\n              <input matInput disabled [value]=\"firmPreferences?.discTypeOption == 1 ? '%': 'Rupee'\" maxlength=\"8\"\n                appOmitSpecialCharacters=\"integer\">\n            </mat-form-field>\n  \n            <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\">\n  \n              <mat-label>Discount{{ salesReturnDetails.get('purDiscType')?.value?.name ?\n                ('('+salesReturnDetails.get('purDiscType')?.value?.name+')'): '' }}</mat-label>\n              <input matInput [disabled]=\"isdisable\" formControlName=\"purDisc\" maxlength=\"2\" appOmitSpecialCharacters=\"integer\">\n              <mat-error>\n                <span *ngIf=\"salesReturnDetails.get('purDisc').hasError('invalidInput')\"> Discount cannot be greater Than\n                  100..!\n                </span>\n                <span *ngIf=\"salesReturnDetails.get('purDisc').hasError('value')\"> Rupee Not Greater Than 6\n                  Digits..!</span>\n              </mat-error>\n  \n            </mat-form-field>\n\n            \n            <mat-form-field appearance=\"outline\" fxFlex=\"24\" *ngIf=\"firmPreferences?.allowDisc2 != 0 && firmPreferences?.discTypeOption == 3\" >\n              <mat-label>Discount *</mat-label>\n              <mat-select appMatSelect formControlName=\"purdiscType1\">\n                <!-- <mat-option [value]=0>--Select--</mat-option> -->\n                <mat-option *ngFor=\"let tran of discountDropDown\"  [value]=\"tran.code\">\n                  {{tran.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            \n            <mat-form-field *ngIf=\"(firmPreferences?.discTypeOption == 1 || firmPreferences?.discTypeOption == 2) && firmPreferences?.allowDisc2 != 0\" appearance=\"outline\">\n              <mat-label>Discount *</mat-label>\n              <input matInput disabled formControlName=\"purdiscType1\" [value]=\"firmPreferences?.discTypeOption == 1 ? '%': 'Rupee'\" maxlength=\"8\"\n                appOmitSpecialCharacters=\"integer\">\n            </mat-form-field>\n            \n    \n            <mat-form-field appearance=\"outline\" *ngIf=\"firmPreferences?.allowDisc2 != 0\" fxFlex=\"24\" fxFlex.xs=\"100\">\n    \n              <mat-label>Discount{{ salesReturnDetails.get('purdiscType1')?.value?.name ?\n                ('('+salesReturnDetails.get('purdiscType1')?.value?.name+')'): '' }}</mat-label>\n              <input matInput [disabled]=\"isdisable\" formControlName=\"purDisc1\" maxlength=\"2\" appOmitSpecialCharacters=\"integer\">\n              <mat-error>\n                <span *ngIf=\"salesReturnDetails.get('purDisc1').hasError('invalidInput')\"> Discount cannot be greater Than\n                  100..!\n                </span>\n                <span *ngIf=\"salesReturnDetails.get('purDisc1').hasError('value')\"> Rupee Not Greater Than 6\n                  Digits..!</span>\n              </mat-error>\n  \n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" class=\"return_mat\" fxFlex=\"24\" fxFlex.xs=\"100\"  *ngIf=\"firmPreferences?.allowDisc2 == 0\">\n              <mat-label>Inv.Rate</mat-label>\n              <input matInput formControlName=\"purRate\" appCurrencyFormat maxlength=\"8\"\n                appOmitSpecialCharacters=\"integer\" required>\n              <mat-error>\n                <span *ngIf=\"salesReturnDetails.get('purRate').hasError('required') \">Inv.Rate required...! </span>\n                <span *ngIf=\"salesReturnDetails.get('purRate').hasError('recqq') \">Inv.Rate Required...!</span>\n              </mat-error>\n            </mat-form-field>\n        \n            <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\" *ngIf=\"firmPreferences?.allowDisc2 == 0\">\n              <mat-label>Sale Rate</mat-label>\n              <input matInput  [disabled]=\"isdisable\" formControlName=\"saleRate\" maxlength=\"10\" appCurrencyFormat\n                appOmitSpecialCharacters=\"integer\" required>\n              <mat-error>\n                <span *ngIf=\"salesReturnDetails.get('saleRate').hasError('required') \"> Sale Rate Required...! </span>\n                <span *ngIf=\"salesReturnDetails.get('saleRate').hasError('greatersalerate')\"> Sale Rate Must be Greater Than Inv.Rate...! </span>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\" class=\"sales-return mt-1\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n\n            <mat-form-field appearance=\"outline\" class=\"return_mat\" fxFlex=\"24\" fxFlex.xs=\"100\"  *ngIf=\"firmPreferences?.allowDisc2 != 0\">\n              <mat-label>Inv.Rate</mat-label>\n              <input matInput formControlName=\"purRate\" appCurrencyFormat maxlength=\"8\"\n                appOmitSpecialCharacters=\"integer\" required>\n              <mat-error>\n                <span *ngIf=\"salesReturnDetails.get('purRate').hasError('required') \">Inv.Rate required...! </span>\n                <span *ngIf=\"salesReturnDetails.get('purRate').hasError('recqq') \">Inv.Rate Required...!</span>\n              </mat-error>\n            </mat-form-field>\n        \n            <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\" *ngIf=\"firmPreferences?.allowDisc2 != 0\">\n              <mat-label>Sale Rate</mat-label>\n              <input matInput  [disabled]=\"isdisable\" formControlName=\"saleRate\" maxlength=\"10\" appCurrencyFormat\n                appOmitSpecialCharacters=\"integer\" required>\n              <mat-error>\n                <span *ngIf=\"salesReturnDetails.get('saleRate').hasError('required') \"> Sale Rate Required...! </span>\n                <span *ngIf=\"salesReturnDetails.get('saleRate').hasError('greatersalerate')\"> Sale Rate Must be Greater Than Inv.Rate...! </span>\n              </mat-error>\n            </mat-form-field>\n    \n              <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\">\n                <mat-label>MRP</mat-label>\n                <input matInput [disabled]=\"isdisable\" formControlName=\"mrp\" (focusout)=\"getmrpvalid()\" appOmitSpecialCharacters=\"integer\"\n                  maxlength=\"8\" required appCurrencyFormat>\n                <mat-error>\n                  <span *ngIf=\"salesReturnDetails.get('mrp').hasError('required')\"> MRP Required...! </span>\n                  <span *ngIf=\"salesReturnDetails.get('mrp').hasError('greaterValue')\"> MRP Must be Greater Than Retail\n                    Rate...!\n                  </span>\n                  <span *ngIf=\"salesReturnDetails.get('mrp').hasError('greaterValue1')\"> MRP Must be Greater Than or Equal\n                    To Sale Rate...!\n                  </span>\n                  <span *ngIf=\"salesReturnDetails.get('mrp').hasError('value')\">Enter Valid Number...! </span>\n                </mat-error>\n              </mat-form-field>\n    \n    \n              <div fxFlex=\"24\" fxFlex.xs=\"100\" class=\"return_mat\">\n                <app-autocomplete [definition]=\"manifactureDetails\" \n                [control]=\"salesReturnDetails.get('mfgId')\"></app-autocomplete>\n              </div>\n\n                <!-- <app-autocomplete fxFlex=\"18\" class=\"return_mat\" fxFlex.xs=\"100\" *ngIf=\"firmPreferences?.allowDisc2 != 1\" [definition]=\"discountType1\"\n                [control]=\"salesReturnDetails?.get('purdiscType1')\">\n              </app-autocomplete> -->\n    \n          </div>\n          <div fxLayout=\"row\" class=\"sales-return\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10px\">\n              <!-- *ngIf=\"firmPreferences.allowDisc2 != 1\" -->\n    \n        \n              <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\">\n                <mat-label>HSN Code</mat-label>\n                <input matInput formControlName=\"hsncode\" maxlength=\"8\" appOmitSpecialCharacters=\"noSpecialChars\">\n              </mat-form-field>\n\n              <mat-form-field appearance=\"outline\" fxFlex=\"24\" fxFlex.xs=\"100\">\n                <mat-label>Tax(%)</mat-label>\n                <input matInput [disabled]=\"isdisable\" formControlName=\"tax\">\n              </mat-form-field>\n    \n              <!-- <mat-form-field appearance=\"outline\" fxFlex=\"16\">\n                <mat-label>Sch.Qty.</mat-label>\n                <input matInput [disabled]=\"isdisable\" formControlName=\"psQty\" (input)=\"schQty()\" maxlength=\"7\">\n              </mat-form-field>\n    \n    \n              <mat-form-field appearance=\"outline\" fxFlex=\"15\">\n                <mat-label>Sch.Qty.Disc.</mat-label>\n                <input matInput [disabled]=\"isdisable\" formControlName=\"psQtyDisc\" maxlength=\"7\">\n              </mat-form-field> -->\n    \n\n          </div>\n        </form>\n      </div>\n     \n    </ng-template>\n\n    <ng-template #saleReturnDetailButtonTemplate>\n      \n        <button type=\"button\" mat-raised-button color=\"primary\" [disabled]=\"!salesReturnDetails?.valid\"\n          (click)=\"onSaveOrUpdateSaleDetail(true)\">{{detailbutton}}</button>&nbsp;\n    \n        <button type=\"button\" mat-raised-button color=\"primary\" [disabled]=\"!salesReturnDetails?.valid\"\n          (click)=\"onSaveOrUpdateSaleDetail(false)\">{{detailsave}}</button>&nbsp;\n    \n        <button type=\"button\" mat-raised-button class=\"btn btn-primary\" (click)=\"resetDialog()\">Reset</button>\n    </ng-template>\n    \n    <!-- <ng-template #purhistory>\n      <app-table [definition]=\"historytableDefinition\" [data]=\"historydataSource\" [tableAlertId]=\"'purchaseEntryList'\"\n     [disableActions]=\"disableActions\"></app-table>   \n    </ng-template> -->\n\n    <ng-template #deletePurchaseHeadTemplate let-purchaseHead=\"data\">\n      Are you sure to delete <strong></strong>?\n    </ng-template>\n\n    <!-- <ng-template #deletePurchase let-purchaseHead=\"data\">\n      Are you sure to delete <strong></strong>?\n    </ng-template> -->\n    </div>\n    <!-- <div id=\"deletePopup\" class=\"popup\">\n      <div class=\"popup-content\">\n        <p>Are you sure you want to delete this item?</p>\n        <button (click)=\"deleteItem()\">Yes</button>\n        <button onclick=\"closePopup()\">No</button>\n      </div>\n    </div> -->\n\n    <div class=\"modal\" id=\"deletePopup\" style=\"display: flex;background: rgba(0, 0, 0, 0.32);\">\n      <div class=\"modal-dialog modal-dialog-centered\" style=\"min-width: 30%;\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\" style=\"background-color: #006476;padding: 8px 16px;\">\n            <p class=\"modal-title\" style=\"font-size: 16px;color: #fff;\">Delete Company Group</p>\n            <button class=\"close text-white\" data-dismiss=\"modal\" style=\"opacity: 1 !important;outline: none;\">&times;</button>\n          </div>\n          <div class=\"modal-body\" style=\"font-size: 15px;\">\n            Are you sure you want to delete this item?\n          </div>\n          <div class=\"modal-footer modal-footer p-1 border-0 pb-2 pr-2\">\n            <button type=\"button\" mat-raised-button (click)=\"deleteItem()\">Yes</button>\n            <button type=\"button\" mat-raised-button (click)=\"closePopup()\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    ";
    /***/
  },

  /***/
  "./node_modules/rxjs/internal/InnerSubscriber.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/InnerSubscriber.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalInnerSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ./Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var InnerSubscriber = function (_super) {
      __extends(InnerSubscriber, _super);

      function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;

        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
      }

      InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
      };

      InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
      };

      InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
      };

      return InnerSubscriber;
    }(Subscriber_1.Subscriber);

    exports.InnerSubscriber = InnerSubscriber; //# sourceMappingURL=InnerSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Notification.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/Notification.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalNotificationJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var empty_1 = __webpack_require__(
    /*! ./observable/empty */
    "./node_modules/rxjs/internal/observable/empty.js");

    var of_1 = __webpack_require__(
    /*! ./observable/of */
    "./node_modules/rxjs/internal/observable/of.js");

    var throwError_1 = __webpack_require__(
    /*! ./observable/throwError */
    "./node_modules/rxjs/internal/observable/throwError.js");

    var NotificationKind;

    (function (NotificationKind) {
      NotificationKind["NEXT"] = "N";
      NotificationKind["ERROR"] = "E";
      NotificationKind["COMPLETE"] = "C";
    })(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));

    var Notification = function () {
      function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
      }

      Notification.prototype.observe = function (observer) {
        switch (this.kind) {
          case "N":
            return observer.next && observer.next(this.value);

          case "E":
            return observer.error && observer.error(this.error);

          case "C":
            return observer.complete && observer.complete();
        }
      };

      Notification.prototype["do"] = function (next, error, complete) {
        var kind = this.kind;

        switch (kind) {
          case "N":
            return next && next(this.value);

          case "E":
            return error && error(this.error);

          case "C":
            return complete && complete();
        }
      };

      Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
          return this.observe(nextOrObserver);
        } else {
          return this["do"](nextOrObserver, error, complete);
        }
      };

      Notification.prototype.toObservable = function () {
        var kind = this.kind;

        switch (kind) {
          case "N":
            return of_1.of(this.value);

          case "E":
            return throwError_1.throwError(this.error);

          case "C":
            return empty_1.empty();
        }

        throw new Error('unexpected notification kind value');
      };

      Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
          return new Notification("N", value);
        }

        return Notification.undefinedValueNotification;
      };

      Notification.createError = function (err) {
        return new Notification("E", undefined, err);
      };

      Notification.createComplete = function () {
        return Notification.completeNotification;
      };

      Notification.completeNotification = new Notification("C");
      Notification.undefinedValueNotification = new Notification("N", undefined);
      return Notification;
    }();

    exports.Notification = Notification; //# sourceMappingURL=Notification.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Observable.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Observable.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var canReportError_1 = __webpack_require__(
    /*! ./util/canReportError */
    "./node_modules/rxjs/internal/util/canReportError.js");

    var toSubscriber_1 = __webpack_require__(
    /*! ./util/toSubscriber */
    "./node_modules/rxjs/internal/util/toSubscriber.js");

    var observable_1 = __webpack_require__(
    /*! ../internal/symbol/observable */
    "./node_modules/rxjs/internal/symbol/observable.js");

    var pipe_1 = __webpack_require__(
    /*! ./util/pipe */
    "./node_modules/rxjs/internal/util/pipe.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var Observable = function () {
      function Observable(subscribe) {
        this._isScalar = false;

        if (subscribe) {
          this._subscribe = subscribe;
        }
      }

      Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };

      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }

        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;

            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }

        return sink;
      };

      Observable.prototype._trySubscribe = function (sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }

          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };

      Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function (value) {
            try {
              next(value);
            } catch (err) {
              reject(err);

              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };

      Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };

      Observable.prototype[observable_1.observable] = function () {
        return this;
      };

      Observable.prototype.pipe = function () {
        var operations = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }

        if (operations.length === 0) {
          return this;
        }

        return pipe_1.pipeFromArray(operations)(this);
      };

      Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var value;

          _this.subscribe(function (x) {
            return value = x;
          }, function (err) {
            return reject(err);
          }, function () {
            return resolve(value);
          });
        });
      };

      Observable.create = function (subscribe) {
        return new Observable(subscribe);
      };

      return Observable;
    }();

    exports.Observable = Observable;

    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }

      if (!promiseCtor) {
        throw new Error('no Promise impl found');
      }

      return promiseCtor;
    } //# sourceMappingURL=Observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/Observer.js":
  /*!************************************************!*\
    !*** ./node_modules/rxjs/internal/Observer.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObserverJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    exports.empty = {
      closed: true,
      next: function next(value) {},
      error: function error(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function complete() {}
    }; //# sourceMappingURL=Observer.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/OuterSubscriber.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/OuterSubscriber.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalOuterSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics2 = function extendStatics(d, b) {
        _extendStatics2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics2(d, b);
      };

      return function (d, b) {
        _extendStatics2(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ./Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var OuterSubscriber = function (_super) {
      __extends(OuterSubscriber, _super);

      function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
      };

      OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
      };

      OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
      };

      return OuterSubscriber;
    }(Subscriber_1.Subscriber);

    exports.OuterSubscriber = OuterSubscriber; //# sourceMappingURL=OuterSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/ReplaySubject.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/ReplaySubject.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalReplaySubjectJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics3 = function extendStatics(d, b) {
        _extendStatics3 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics3(d, b);
      };

      return function (d, b) {
        _extendStatics3(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subject_1 = __webpack_require__(
    /*! ./Subject */
    "./node_modules/rxjs/internal/Subject.js");

    var queue_1 = __webpack_require__(
    /*! ./scheduler/queue */
    "./node_modules/rxjs/internal/scheduler/queue.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var observeOn_1 = __webpack_require__(
    /*! ./operators/observeOn */
    "./node_modules/rxjs/internal/operators/observeOn.js");

    var ObjectUnsubscribedError_1 = __webpack_require__(
    /*! ./util/ObjectUnsubscribedError */
    "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");

    var SubjectSubscription_1 = __webpack_require__(
    /*! ./SubjectSubscription */
    "./node_modules/rxjs/internal/SubjectSubscription.js");

    var ReplaySubject = function (_super) {
      __extends(ReplaySubject, _super);

      function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
          bufferSize = Number.POSITIVE_INFINITY;
        }

        if (windowTime === void 0) {
          windowTime = Number.POSITIVE_INFINITY;
        }

        var _this = _super.call(this) || this;

        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;

        if (windowTime === Number.POSITIVE_INFINITY) {
          _this._infiniteTimeWindow = true;
          _this.next = _this.nextInfiniteTimeWindow;
        } else {
          _this.next = _this.nextTimeWindow;
        }

        return _this;
      }

      ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;

        _events.push(value);

        if (_events.length > this._bufferSize) {
          _events.shift();
        }

        _super.prototype.next.call(this, value);
      };

      ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));

        this._trimBufferThenGetEvents();

        _super.prototype.next.call(this, value);
      };

      ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;

        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;

        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else if (this.isStopped || this.hasError) {
          subscription = Subscription_1.Subscription.EMPTY;
        } else {
          this.observers.push(subscriber);
          subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }

        if (scheduler) {
          subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }

        if (_infiniteTimeWindow) {
          for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i]);
          }
        } else {
          for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
          }
        }

        if (this.hasError) {
          subscriber.error(this.thrownError);
        } else if (this.isStopped) {
          subscriber.complete();
        }

        return subscription;
      };

      ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
      };

      ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();

        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;

        while (spliceCount < eventsCount) {
          if (now - _events[spliceCount].time < _windowTime) {
            break;
          }

          spliceCount++;
        }

        if (eventsCount > _bufferSize) {
          spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }

        if (spliceCount > 0) {
          _events.splice(0, spliceCount);
        }

        return _events;
      };

      return ReplaySubject;
    }(Subject_1.Subject);

    exports.ReplaySubject = ReplaySubject;

    var ReplayEvent = function () {
      function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
      }

      return ReplayEvent;
    }(); //# sourceMappingURL=ReplaySubject.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/Scheduler.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/Scheduler.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Scheduler = function () {
      function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler.now;
        }

        this.SchedulerAction = SchedulerAction;
        this.now = now;
      }

      Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
          delay = 0;
        }

        return new this.SchedulerAction(this, work).schedule(state, delay);
      };

      Scheduler.now = function () {
        return Date.now();
      };

      return Scheduler;
    }();

    exports.Scheduler = Scheduler; //# sourceMappingURL=Scheduler.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subject.js":
  /*!***********************************************!*\
    !*** ./node_modules/rxjs/internal/Subject.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubjectJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics4 = function extendStatics(d, b) {
        _extendStatics4 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics4(d, b);
      };

      return function (d, b) {
        _extendStatics4(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Observable_1 = __webpack_require__(
    /*! ./Observable */
    "./node_modules/rxjs/internal/Observable.js");

    var Subscriber_1 = __webpack_require__(
    /*! ./Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var ObjectUnsubscribedError_1 = __webpack_require__(
    /*! ./util/ObjectUnsubscribedError */
    "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");

    var SubjectSubscription_1 = __webpack_require__(
    /*! ./SubjectSubscription */
    "./node_modules/rxjs/internal/SubjectSubscription.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var SubjectSubscriber = function (_super) {
      __extends(SubjectSubscriber, _super);

      function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;

        _this.destination = destination;
        return _this;
      }

      return SubjectSubscriber;
    }(Subscriber_1.Subscriber);

    exports.SubjectSubscriber = SubjectSubscriber;

    var Subject = function (_super) {
      __extends(Subject, _super);

      function Subject() {
        var _this = _super.call(this) || this;

        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
      }

      Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
      };

      Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
      };

      Subject.prototype.next = function (value) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }

        if (!this.isStopped) {
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].next(value);
          }
        }
      };

      Subject.prototype.error = function (err) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }

        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();

        for (var i = 0; i < len; i++) {
          copy[i].error(err);
        }

        this.observers.length = 0;
      };

      Subject.prototype.complete = function () {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }

        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();

        for (var i = 0; i < len; i++) {
          copy[i].complete();
        }

        this.observers.length = 0;
      };

      Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
      };

      Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else {
          return _super.prototype._trySubscribe.call(this, subscriber);
        }
      };

      Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else if (this.hasError) {
          subscriber.error(this.thrownError);
          return Subscription_1.Subscription.EMPTY;
        } else if (this.isStopped) {
          subscriber.complete();
          return Subscription_1.Subscription.EMPTY;
        } else {
          this.observers.push(subscriber);
          return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
      };

      Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
      };

      Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
      };

      return Subject;
    }(Observable_1.Observable);

    exports.Subject = Subject;

    var AnonymousSubject = function (_super) {
      __extends(AnonymousSubject, _super);

      function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;

        _this.destination = destination;
        _this.source = source;
        return _this;
      }

      AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;

        if (destination && destination.next) {
          destination.next(value);
        }
      };

      AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;

        if (destination && destination.error) {
          this.destination.error(err);
        }
      };

      AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;

        if (destination && destination.complete) {
          this.destination.complete();
        }
      };

      AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;

        if (source) {
          return this.source.subscribe(subscriber);
        } else {
          return Subscription_1.Subscription.EMPTY;
        }
      };

      return AnonymousSubject;
    }(Subject);

    exports.AnonymousSubject = AnonymousSubject; //# sourceMappingURL=Subject.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/SubjectSubscription.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubjectSubscriptionJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics5 = function extendStatics(d, b) {
        _extendStatics5 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics5(d, b);
      };

      return function (d, b) {
        _extendStatics5(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var SubjectSubscription = function (_super) {
      __extends(SubjectSubscription, _super);

      function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;

        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
      }

      SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
          return;
        }

        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;

        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
          return;
        }

        var subscriberIndex = observers.indexOf(this.subscriber);

        if (subscriberIndex !== -1) {
          observers.splice(subscriberIndex, 1);
        }
      };

      return SubjectSubscription;
    }(Subscription_1.Subscription);

    exports.SubjectSubscription = SubjectSubscription; //# sourceMappingURL=SubjectSubscription.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscriber.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscriber.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics6 = function extendStatics(d, b) {
        _extendStatics6 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics6(d, b);
      };

      return function (d, b) {
        _extendStatics6(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var Observer_1 = __webpack_require__(
    /*! ./Observer */
    "./node_modules/rxjs/internal/Observer.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    var Subscriber = function (_super) {
      __extends(Subscriber, _super);

      function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;

        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;

          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }

            if (typeof destinationOrNext === 'object') {
              if (destinationOrNext instanceof Subscriber) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }

              break;
            }

          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }

        return _this;
      }

      Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return this;
      };

      Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };

      Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };

      Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          this.isStopped = true;

          this._error(err);
        }
      };

      Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
          this.isStopped = true;

          this._complete();
        }
      };

      Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
          return;
        }

        this.isStopped = true;

        _super.prototype.unsubscribe.call(this);
      };

      Subscriber.prototype._next = function (value) {
        this.destination.next(value);
      };

      Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
      };

      Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
      };

      Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents;

        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
      };

      return Subscriber;
    }(Subscription_1.Subscription);

    exports.Subscriber = Subscriber;

    var SafeSubscriber = function (_super) {
      __extends(SafeSubscriber, _super);

      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;

        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;

          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);

            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }

            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }

        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }

      SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;

          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);

              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();

            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }

            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }

            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.complete = function () {
        var _this = this;

        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;

          if (this._complete) {
            var wrappedComplete = function wrappedComplete() {
              return _this._complete.call(_this._context);
            };

            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);

              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();

          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };

      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error('bad call');
        }

        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }

        return false;
      };

      SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;

        _parentSubscriber.unsubscribe();
      };

      return SafeSubscriber;
    }(Subscriber);

    exports.SafeSubscriber = SafeSubscriber; //# sourceMappingURL=Subscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscription.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscription.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriptionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isArray_1 = __webpack_require__(
    /*! ./util/isArray */
    "./node_modules/rxjs/internal/util/isArray.js");

    var isObject_1 = __webpack_require__(
    /*! ./util/isObject */
    "./node_modules/rxjs/internal/util/isObject.js");

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var UnsubscriptionError_1 = __webpack_require__(
    /*! ./util/UnsubscriptionError */
    "./node_modules/rxjs/internal/util/UnsubscriptionError.js");

    var Subscription = function () {
      function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;

        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }

      Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;

        if (this.closed) {
          return;
        }

        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;

        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;

        while (_parent) {
          _parent.remove(this);

          _parent = ++index < len && _parents[index] || null;
        }

        if (isFunction_1.isFunction(_unsubscribe)) {
          try {
            _unsubscribe.call(this);
          } catch (e) {
            hasErrors = true;
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }

        if (isArray_1.isArray(_subscriptions)) {
          index = -1;
          len = _subscriptions.length;

          while (++index < len) {
            var sub = _subscriptions[index];

            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                hasErrors = true;
                errors = errors || [];

                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }

        if (hasErrors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };

      Subscription.prototype.add = function (teardown) {
        var subscription = teardown;

        switch (typeof teardown) {
          case 'function':
            subscription = new Subscription(teardown);

          case 'object':
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription)) {
              var tmp = subscription;
              subscription = new Subscription();
              subscription._subscriptions = [tmp];
            }

            break;

          default:
            {
              if (!teardown) {
                return Subscription.EMPTY;
              }

              throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }

        if (subscription._addParent(this)) {
          var subscriptions = this._subscriptions;

          if (subscriptions) {
            subscriptions.push(subscription);
          } else {
            this._subscriptions = [subscription];
          }
        }

        return subscription;
      };

      Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;

        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);

          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };

      Subscription.prototype._addParent = function (parent) {
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents;

        if (_parent === parent) {
          return false;
        } else if (!_parent) {
          this._parent = parent;
          return true;
        } else if (!_parents) {
          this._parents = [parent];
          return true;
        } else if (_parents.indexOf(parent) === -1) {
          _parents.push(parent);

          return true;
        }

        return false;
      };

      Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
      }(new Subscription());

      return Subscription;
    }();

    exports.Subscription = Subscription;

    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    } //# sourceMappingURL=Subscription.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/config.js":
  /*!**********************************************!*\
    !*** ./node_modules/rxjs/internal/config.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalConfigJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: undefined,

      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }

        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }

    }; //# sourceMappingURL=config.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/observable/empty.js":
  /*!********************************************************!*\
    !*** ./node_modules/rxjs/internal/observable/empty.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableEmptyJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Observable_1 = __webpack_require__(
    /*! ../Observable */
    "./node_modules/rxjs/internal/Observable.js");

    exports.EMPTY = new Observable_1.Observable(function (subscriber) {
      return subscriber.complete();
    });

    function empty(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
    }

    exports.empty = empty;

    function emptyScheduled(scheduler) {
      return new Observable_1.Observable(function (subscriber) {
        return scheduler.schedule(function () {
          return subscriber.complete();
        });
      });
    }

    exports.emptyScheduled = emptyScheduled; //# sourceMappingURL=empty.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/observable/fromArray.js":
  /*!************************************************************!*\
    !*** ./node_modules/rxjs/internal/observable/fromArray.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableFromArrayJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Observable_1 = __webpack_require__(
    /*! ../Observable */
    "./node_modules/rxjs/internal/Observable.js");

    var Subscription_1 = __webpack_require__(
    /*! ../Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var subscribeToArray_1 = __webpack_require__(
    /*! ../util/subscribeToArray */
    "./node_modules/rxjs/internal/util/subscribeToArray.js");

    function fromArray(input, scheduler) {
      if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
      } else {
        return new Observable_1.Observable(function (subscriber) {
          var sub = new Subscription_1.Subscription();
          var i = 0;
          sub.add(scheduler.schedule(function () {
            if (i === input.length) {
              subscriber.complete();
              return;
            }

            subscriber.next(input[i++]);

            if (!subscriber.closed) {
              sub.add(this.schedule());
            }
          }));
          return sub;
        });
      }
    }

    exports.fromArray = fromArray; //# sourceMappingURL=fromArray.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/observable/of.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/observable/of.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableOfJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isScheduler_1 = __webpack_require__(
    /*! ../util/isScheduler */
    "./node_modules/rxjs/internal/util/isScheduler.js");

    var fromArray_1 = __webpack_require__(
    /*! ./fromArray */
    "./node_modules/rxjs/internal/observable/fromArray.js");

    var empty_1 = __webpack_require__(
    /*! ./empty */
    "./node_modules/rxjs/internal/observable/empty.js");

    var scalar_1 = __webpack_require__(
    /*! ./scalar */
    "./node_modules/rxjs/internal/observable/scalar.js");

    function of() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var scheduler = args[args.length - 1];

      if (isScheduler_1.isScheduler(scheduler)) {
        args.pop();
      } else {
        scheduler = undefined;
      }

      switch (args.length) {
        case 0:
          return empty_1.empty(scheduler);

        case 1:
          return scheduler ? fromArray_1.fromArray(args, scheduler) : scalar_1.scalar(args[0]);

        default:
          return fromArray_1.fromArray(args, scheduler);
      }
    }

    exports.of = of; //# sourceMappingURL=of.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/observable/scalar.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/observable/scalar.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableScalarJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Observable_1 = __webpack_require__(
    /*! ../Observable */
    "./node_modules/rxjs/internal/Observable.js");

    function scalar(value) {
      var result = new Observable_1.Observable(function (subscriber) {
        subscriber.next(value);
        subscriber.complete();
      });
      result._isScalar = true;
      result.value = value;
      return result;
    }

    exports.scalar = scalar; //# sourceMappingURL=scalar.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/observable/throwError.js":
  /*!*************************************************************!*\
    !*** ./node_modules/rxjs/internal/observable/throwError.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableThrowErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Observable_1 = __webpack_require__(
    /*! ../Observable */
    "./node_modules/rxjs/internal/Observable.js");

    function throwError(error, scheduler) {
      if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) {
          return subscriber.error(error);
        });
      } else {
        return new Observable_1.Observable(function (subscriber) {
          return scheduler.schedule(dispatch, 0, {
            error: error,
            subscriber: subscriber
          });
        });
      }
    }

    exports.throwError = throwError;

    function dispatch(_a) {
      var error = _a.error,
          subscriber = _a.subscriber;
      subscriber.error(error);
    } //# sourceMappingURL=throwError.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/operators/observeOn.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/operators/observeOn.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalOperatorsObserveOnJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics7 = function extendStatics(d, b) {
        _extendStatics7 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics7(d, b);
      };

      return function (d, b) {
        _extendStatics7(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var Notification_1 = __webpack_require__(
    /*! ../Notification */
    "./node_modules/rxjs/internal/Notification.js");

    function observeOn(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }

      return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
      };
    }

    exports.observeOn = observeOn;

    var ObserveOnOperator = function () {
      function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        this.scheduler = scheduler;
        this.delay = delay;
      }

      ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
      };

      return ObserveOnOperator;
    }();

    exports.ObserveOnOperator = ObserveOnOperator;

    var ObserveOnSubscriber = function (_super) {
      __extends(ObserveOnSubscriber, _super);

      function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        var _this = _super.call(this, destination) || this;

        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
      }

      ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification,
            destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
      };

      ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
      };

      ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
      };

      ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
        this.unsubscribe();
      };

      ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
        this.unsubscribe();
      };

      return ObserveOnSubscriber;
    }(Subscriber_1.Subscriber);

    exports.ObserveOnSubscriber = ObserveOnSubscriber;

    var ObserveOnMessage = function () {
      function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
      }

      return ObserveOnMessage;
    }();

    exports.ObserveOnMessage = ObserveOnMessage; //# sourceMappingURL=observeOn.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/operators/takeUntil.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/operators/takeUntil.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalOperatorsTakeUntilJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics8 = function extendStatics(d, b) {
        _extendStatics8 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics8(d, b);
      };

      return function (d, b) {
        _extendStatics8(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var OuterSubscriber_1 = __webpack_require__(
    /*! ../OuterSubscriber */
    "./node_modules/rxjs/internal/OuterSubscriber.js");

    var subscribeToResult_1 = __webpack_require__(
    /*! ../util/subscribeToResult */
    "./node_modules/rxjs/internal/util/subscribeToResult.js");

    function takeUntil(notifier) {
      return function (source) {
        return source.lift(new TakeUntilOperator(notifier));
      };
    }

    exports.takeUntil = takeUntil;

    var TakeUntilOperator = function () {
      function TakeUntilOperator(notifier) {
        this.notifier = notifier;
      }

      TakeUntilOperator.prototype.call = function (subscriber, source) {
        var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        var notifierSubscription = subscribeToResult_1.subscribeToResult(takeUntilSubscriber, this.notifier);

        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
          takeUntilSubscriber.add(notifierSubscription);
          return source.subscribe(takeUntilSubscriber);
        }

        return takeUntilSubscriber;
      };

      return TakeUntilOperator;
    }();

    var TakeUntilSubscriber = function (_super) {
      __extends(TakeUntilSubscriber, _super);

      function TakeUntilSubscriber(destination) {
        var _this = _super.call(this, destination) || this;

        _this.seenValue = false;
        return _this;
      }

      TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.seenValue = true;
        this.complete();
      };

      TakeUntilSubscriber.prototype.notifyComplete = function () {};

      return TakeUntilSubscriber;
    }(OuterSubscriber_1.OuterSubscriber); //# sourceMappingURL=takeUntil.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/scheduler/Action.js":
  /*!********************************************************!*\
    !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerActionJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics9 = function extendStatics(d, b) {
        _extendStatics9 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics9(d, b);
      };

      return function (d, b) {
        _extendStatics9(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscription_1 = __webpack_require__(
    /*! ../Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var Action = function (_super) {
      __extends(Action, _super);

      function Action(scheduler, work) {
        return _super.call(this) || this;
      }

      Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        return this;
      };

      return Action;
    }(Subscription_1.Subscription);

    exports.Action = Action; //# sourceMappingURL=Action.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
  /*!*************************************************************!*\
    !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerAsyncActionJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics10 = function extendStatics(d, b) {
        _extendStatics10 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics10(d, b);
      };

      return function (d, b) {
        _extendStatics10(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Action_1 = __webpack_require__(
    /*! ./Action */
    "./node_modules/rxjs/internal/scheduler/Action.js");

    var AsyncAction = function (_super) {
      __extends(AsyncAction, _super);

      function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;

        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
      }

      AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        if (this.closed) {
          return this;
        }

        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;

        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, delay);
        }

        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
      };

      AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        return setInterval(scheduler.flush.bind(scheduler, this), delay);
      };

      AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        if (delay !== null && this.delay === delay && this.pending === false) {
          return id;
        }

        clearInterval(id);
        return undefined;
      };

      AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
          return new Error('executing a cancelled action');
        }

        this.pending = false;

        var error = this._execute(state, delay);

        if (error) {
          return error;
        } else if (this.pending === false && this.id != null) {
          this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
      };

      AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;

        try {
          this.work(state);
        } catch (e) {
          errored = true;
          errorValue = !!e && e || new Error(e);
        }

        if (errored) {
          this.unsubscribe();
          return errorValue;
        }
      };

      AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;

        if (index !== -1) {
          actions.splice(index, 1);
        }

        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, null);
        }

        this.delay = null;
      };

      return AsyncAction;
    }(Action_1.Action);

    exports.AsyncAction = AsyncAction; //# sourceMappingURL=AsyncAction.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerAsyncSchedulerJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics11 = function extendStatics(d, b) {
        _extendStatics11 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics11(d, b);
      };

      return function (d, b) {
        _extendStatics11(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Scheduler_1 = __webpack_require__(
    /*! ../Scheduler */
    "./node_modules/rxjs/internal/Scheduler.js");

    var AsyncScheduler = function (_super) {
      __extends(AsyncScheduler, _super);

      function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler_1.Scheduler.now;
        }

        var _this = _super.call(this, SchedulerAction, function () {
          if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
            return AsyncScheduler.delegate.now();
          } else {
            return now();
          }
        }) || this;

        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
      }

      AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
          delay = 0;
        }

        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
          return AsyncScheduler.delegate.schedule(work, delay, state);
        } else {
          return _super.prototype.schedule.call(this, work, delay, state);
        }
      };

      AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;

        if (this.active) {
          actions.push(action);
          return;
        }

        var error;
        this.active = true;

        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (action = actions.shift());

        this.active = false;

        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }

          throw error;
        }
      };

      return AsyncScheduler;
    }(Scheduler_1.Scheduler);

    exports.AsyncScheduler = AsyncScheduler; //# sourceMappingURL=AsyncScheduler.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/scheduler/QueueAction.js":
  /*!*************************************************************!*\
    !*** ./node_modules/rxjs/internal/scheduler/QueueAction.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerQueueActionJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics12 = function extendStatics(d, b) {
        _extendStatics12 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics12(d, b);
      };

      return function (d, b) {
        _extendStatics12(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var AsyncAction_1 = __webpack_require__(
    /*! ./AsyncAction */
    "./node_modules/rxjs/internal/scheduler/AsyncAction.js");

    var QueueAction = function (_super) {
      __extends(QueueAction, _super);

      function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;

        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }

      QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        if (delay > 0) {
          return _super.prototype.schedule.call(this, state, delay);
        }

        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
      };

      QueueAction.prototype.execute = function (state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
      };

      QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }

        if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }

        return scheduler.flush(this);
      };

      return QueueAction;
    }(AsyncAction_1.AsyncAction);

    exports.QueueAction = QueueAction; //# sourceMappingURL=QueueAction.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/scheduler/QueueScheduler.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/scheduler/QueueScheduler.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerQueueSchedulerJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics13 = function extendStatics(d, b) {
        _extendStatics13 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics13(d, b);
      };

      return function (d, b) {
        _extendStatics13(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var AsyncScheduler_1 = __webpack_require__(
    /*! ./AsyncScheduler */
    "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");

    var QueueScheduler = function (_super) {
      __extends(QueueScheduler, _super);

      function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      return QueueScheduler;
    }(AsyncScheduler_1.AsyncScheduler);

    exports.QueueScheduler = QueueScheduler; //# sourceMappingURL=QueueScheduler.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/scheduler/queue.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/scheduler/queue.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSchedulerQueueJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var QueueAction_1 = __webpack_require__(
    /*! ./QueueAction */
    "./node_modules/rxjs/internal/scheduler/QueueAction.js");

    var QueueScheduler_1 = __webpack_require__(
    /*! ./QueueScheduler */
    "./node_modules/rxjs/internal/scheduler/QueueScheduler.js");

    exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction); //# sourceMappingURL=queue.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/symbol/iterator.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function getSymbolIterator() {
      if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
      }

      return Symbol.iterator;
    }

    exports.getSymbolIterator = getSymbolIterator;
    exports.iterator = getSymbolIterator();
    exports.$$iterator = exports.iterator; //# sourceMappingURL=iterator.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/symbol/observable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable'; //# sourceMappingURL=observable.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolRxSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.rxSubscriber = typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    exports.$$rxSubscriber = exports.rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
  /*!********************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilObjectUnsubscribedErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function ObjectUnsubscribedErrorImpl() {
      Error.call(this);
      this.message = 'object unsubscribed';
      this.name = 'ObjectUnsubscribedError';
      return this;
    }

    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl; //# sourceMappingURL=ObjectUnsubscribedError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilUnsubscriptionErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function UnsubscriptionErrorImpl(errors) {
      Error.call(this);
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
        return i + 1 + ") " + err.toString();
      }).join('\n  ') : '';
      this.name = 'UnsubscriptionError';
      this.errors = errors;
      return this;
    }

    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/canReportError.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilCanReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    function canReportError(observer) {
      while (observer) {
        var _a = observer,
            closed_1 = _a.closed,
            destination = _a.destination,
            isStopped = _a.isStopped;

        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }

      return true;
    }

    exports.canReportError = canReportError; //# sourceMappingURL=canReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/hostReportError.js":
  /*!************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilHostReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function hostReportError(err) {
      setTimeout(function () {
        throw err;
      });
    }

    exports.hostReportError = hostReportError; //# sourceMappingURL=hostReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isArray.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isArray.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsArrayJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.isArray = Array.isArray || function (x) {
      return x && typeof x.length === 'number';
    }; //# sourceMappingURL=isArray.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/isArrayLike.js":
  /*!********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsArrayLikeJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.isArrayLike = function (x) {
      return x && typeof x.length === 'number' && typeof x !== 'function';
    }; //# sourceMappingURL=isArrayLike.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/isFunction.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsFunctionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isFunction(x) {
      return typeof x === 'function';
    }

    exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isObject.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isObject.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsObjectJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isObject(x) {
      return x !== null && typeof x === 'object';
    }

    exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isPromise.js":
  /*!******************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsPromiseJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isPromise(value) {
      return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }

    exports.isPromise = isPromise; //# sourceMappingURL=isPromise.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isScheduler.js":
  /*!********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsSchedulerJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isScheduler(value) {
      return value && typeof value.schedule === 'function';
    }

    exports.isScheduler = isScheduler; //# sourceMappingURL=isScheduler.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/noop.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/util/noop.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilNoopJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function noop() {}

    exports.noop = noop; //# sourceMappingURL=noop.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/pipe.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/util/pipe.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilPipeJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var noop_1 = __webpack_require__(
    /*! ./noop */
    "./node_modules/rxjs/internal/util/noop.js");

    function pipe() {
      var fns = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }

      return pipeFromArray(fns);
    }

    exports.pipe = pipe;

    function pipeFromArray(fns) {
      if (!fns) {
        return noop_1.noop;
      }

      if (fns.length === 1) {
        return fns[0];
      }

      return function piped(input) {
        return fns.reduce(function (prev, fn) {
          return fn(prev);
        }, input);
      };
    }

    exports.pipeFromArray = pipeFromArray; //# sourceMappingURL=pipe.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeTo.js":
  /*!********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Observable_1 = __webpack_require__(
    /*! ../Observable */
    "./node_modules/rxjs/internal/Observable.js");

    var subscribeToArray_1 = __webpack_require__(
    /*! ./subscribeToArray */
    "./node_modules/rxjs/internal/util/subscribeToArray.js");

    var subscribeToPromise_1 = __webpack_require__(
    /*! ./subscribeToPromise */
    "./node_modules/rxjs/internal/util/subscribeToPromise.js");

    var subscribeToIterable_1 = __webpack_require__(
    /*! ./subscribeToIterable */
    "./node_modules/rxjs/internal/util/subscribeToIterable.js");

    var subscribeToObservable_1 = __webpack_require__(
    /*! ./subscribeToObservable */
    "./node_modules/rxjs/internal/util/subscribeToObservable.js");

    var isArrayLike_1 = __webpack_require__(
    /*! ./isArrayLike */
    "./node_modules/rxjs/internal/util/isArrayLike.js");

    var isPromise_1 = __webpack_require__(
    /*! ./isPromise */
    "./node_modules/rxjs/internal/util/isPromise.js");

    var isObject_1 = __webpack_require__(
    /*! ./isObject */
    "./node_modules/rxjs/internal/util/isObject.js");

    var iterator_1 = __webpack_require__(
    /*! ../symbol/iterator */
    "./node_modules/rxjs/internal/symbol/iterator.js");

    var observable_1 = __webpack_require__(
    /*! ../symbol/observable */
    "./node_modules/rxjs/internal/symbol/observable.js");

    exports.subscribeTo = function (result) {
      if (result instanceof Observable_1.Observable) {
        return function (subscriber) {
          if (result._isScalar) {
            subscriber.next(result.value);
            subscriber.complete();
            return undefined;
          } else {
            return result.subscribe(subscriber);
          }
        };
      } else if (!!result && typeof result[observable_1.observable] === 'function') {
        return subscribeToObservable_1.subscribeToObservable(result);
      } else if (isArrayLike_1.isArrayLike(result)) {
        return subscribeToArray_1.subscribeToArray(result);
      } else if (isPromise_1.isPromise(result)) {
        return subscribeToPromise_1.subscribeToPromise(result);
      } else if (!!result && typeof result[iterator_1.iterator] === 'function') {
        return subscribeToIterable_1.subscribeToIterable(result);
      } else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
      }
    }; //# sourceMappingURL=subscribeTo.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeToArray.js":
  /*!*************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToArrayJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.subscribeToArray = function (array) {
      return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }

        if (!subscriber.closed) {
          subscriber.complete();
        }
      };
    }; //# sourceMappingURL=subscribeToArray.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeToIterable.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToIterableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var iterator_1 = __webpack_require__(
    /*! ../symbol/iterator */
    "./node_modules/rxjs/internal/symbol/iterator.js");

    exports.subscribeToIterable = function (iterable) {
      return function (subscriber) {
        var iterator = iterable[iterator_1.iterator]();

        do {
          var item = iterator.next();

          if (item.done) {
            subscriber.complete();
            break;
          }

          subscriber.next(item.value);

          if (subscriber.closed) {
            break;
          }
        } while (true);

        if (typeof iterator["return"] === 'function') {
          subscriber.add(function () {
            if (iterator["return"]) {
              iterator["return"]();
            }
          });
        }

        return subscriber;
      };
    }; //# sourceMappingURL=subscribeToIterable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeToObservable.js":
  /*!******************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var observable_1 = __webpack_require__(
    /*! ../symbol/observable */
    "./node_modules/rxjs/internal/symbol/observable.js");

    exports.subscribeToObservable = function (obj) {
      return function (subscriber) {
        var obs = obj[observable_1.observable]();

        if (typeof obs.subscribe !== 'function') {
          throw new TypeError('Provided object does not correctly implement Symbol.observable');
        } else {
          return obs.subscribe(subscriber);
        }
      };
    }; //# sourceMappingURL=subscribeToObservable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeToPromise.js":
  /*!***************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToPromiseJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var hostReportError_1 = __webpack_require__(
    /*! ./hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    exports.subscribeToPromise = function (promise) {
      return function (subscriber) {
        promise.then(function (value) {
          if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
          }
        }, function (err) {
          return subscriber.error(err);
        }).then(null, hostReportError_1.hostReportError);
        return subscriber;
      };
    }; //# sourceMappingURL=subscribeToPromise.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/subscribeToResult.js":
  /*!**************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/subscribeToResult.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilSubscribeToResultJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var InnerSubscriber_1 = __webpack_require__(
    /*! ../InnerSubscriber */
    "./node_modules/rxjs/internal/InnerSubscriber.js");

    var subscribeTo_1 = __webpack_require__(
    /*! ./subscribeTo */
    "./node_modules/rxjs/internal/util/subscribeTo.js");

    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
      if (destination === void 0) {
        destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
      }

      if (destination.closed) {
        return;
      }

      return subscribeTo_1.subscribeTo(result)(destination);
    }

    exports.subscribeToResult = subscribeToResult; //# sourceMappingURL=subscribeToResult.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/toSubscriber.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilToSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var Observer_1 = __webpack_require__(
    /*! ../Observer */
    "./node_modules/rxjs/internal/Observer.js");

    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }

        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }

      if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }

      return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }

    exports.toSubscriber = toSubscriber; //# sourceMappingURL=toSubscriber.js.map

    /***/
  },

  /***/
  "./src/app/distribution/out-ward/firm-entry/firm-entry.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/distribution/out-ward/firm-entry/firm-entry.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardFirmEntryFirmEntryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9maXJtLWVudHJ5L2Zpcm0tZW50cnkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/firm-entry/firm-entry.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/distribution/out-ward/firm-entry/firm-entry.component.ts ***!
    \**************************************************************************/

  /*! exports provided: FirmEntryComponent */

  /***/
  function srcAppDistributionOutWardFirmEntryFirmEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirmEntryComponent", function () {
      return FirmEntryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.service */
    "./src/app/shared/components/dialog/dialog.service.ts");
    /* harmony import */


    var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/utils/app-message-utils */
    "./src/app/shared/utils/app-message-utils.ts");
    /* harmony import */


    var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/utils/response-utils */
    "./src/app/shared/utils/response-utils.ts");
    /* harmony import */


    var _Master_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../Master/master.service */
    "./src/app/distribution/Master/master.service.ts");
    /* harmony import */


    var _outward_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../outward.service */
    "./src/app/distribution/out-ward/outward.service.ts");
    /* harmony import */


    var _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../_files/dropdowns.json */
    "./src/app/_files/dropdowns.json");

    var _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../_files/dropdowns.json */
    "./src/app/_files/dropdowns.json", 1);
    /* harmony import */


    var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/app-constants */
    "./src/app/shared/app-constants.ts");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var FirmEntryComponent = /*#__PURE__*/function () {
      function FirmEntryComponent(formBuilder, _location, outwardService, router, masterService, dialogService) {
        var _this2 = this;

        _classCallCheck(this, FirmEntryComponent);

        this.formBuilder = formBuilder;
        this._location = _location;
        this.outwardService = outwardService;
        this.router = router;
        this.masterService = masterService;
        this.dialogService = dialogService;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'companyName', 'expDate', 'mrp', 'saleRate', 'rate', 'disc', 'grsValue', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.outwardHeadBtnText = 'Save';
        this.modeDropDown = _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_11__["mode"]; //Custom Accounts in Outward Head

        this.customAccountAutoCompleteDef = {
          label: 'Customer Name',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this2.outwardService.getCustomAccountsByName(name);
          },
          minCount: 2,
          keyString: 'accName'
        };
        this.customAccountsOptsTable = {
          panelWidth: 300,
          columns: [{
            name: 'Customer Name',
            value: function value(obj) {
              return obj['accName'] ? obj['accName'] : '';
            },
            fxFlex: 40,
            fxFlex1: 35,
            isKeyColumn: true
          }, {
            name: 'City Name',
            value: function value(obj) {
              return obj['cityName'] ? obj['cityName'] : '';
            },
            fxFlex: 40,
            fxFlex1: 35
          }, {
            name: 'Mobile',
            value: function value(obj) {
              return obj['accMobile'] ? obj['accMobile'] : '';
            },
            fxFlex: 40,
            fxFlex1: 35
          }, //   { name: 'GSTIN', value: (obj) => obj['accGSTIn'] ? obj['accGSTIn'] : '', fxFlex: 50 },
          {
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['accShName'] ? obj['accShName'] : '';
            },
            fxFlex: 40,
            fxFlex1: 35
          }]
        }; // Company  

        this.companyGroupAutoCompleteDef = {
          label: 'Company',
          isRequired: true,
          isStaticType: true,
          dataSourceFn: function dataSourceFn() {
            return _this2.masterService.getAllCompanyMaster();
          },
          keyString: 'name',
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          minCount: 2
        };
        this.companyGroupOptsTable = {
          panelWidth: 300,
          columns: [{
            name: 'Company',
            value: function value(obj) {
              return obj['name'] ? obj['name'] : '';
            },
            fxFlex: 40,
            fxFlex1: 35,
            isKeyColumn: true
          }, {
            name: 'Company Group',
            value: function value(obj) {
              return obj['companyGroups']['name'] ? obj['companyGroups']['name'] : '';
            },
            fxFlex: 40,
            fxFlex1: 35
          }]
        }; //mode AutocompleteDef

        this.modeAutoCompleteDef = {
          label: 'Mode',
          isRequired: true,
          dataSourceFn: function dataSourceFn() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_toConsumableArray(_files_dropdowns_json__WEBPACK_IMPORTED_MODULE_11__["mode"]));
          },
          isStaticType: true,
          keyString: 'name'
        };
        this.saleInvoiceHeadFormGroup = this.buildOutWardEntryHeadFormGroup();
        this.saleInvoiceDetailFormGroup = this.buildOutWardEntryDetailFormGroup();
      }

      _createClass(FirmEntryComponent, [{
        key: "buildOutWardEntryHeadFormGroup",
        value: function buildOutWardEntryHeadFormGroup() {
          return this.formBuilder.group({
            invDate: [''],
            accId: [''],
            accGstIn: [{
              value: '',
              disabled: true
            }],
            accShName: [{
              value: '',
              disabled: true
            }],
            cityId: [{
              value: '',
              disabled: true
            }],
            accMobile: [{
              value: '',
              disabled: true
            }],
            compId: [''],
            deliveryTo: [''],
            mode: ['']
          });
        }
      }, {
        key: "buildOutWardEntryDetailFormGroup",
        value: function buildOutWardEntryDetailFormGroup() {
          return this.formBuilder.group({
            prodId: [''],
            prodShName: [''],
            prodPackName: [''],
            batch: [''],
            expdate: [''],
            invQty: [''],
            invQtyDisc: [''],
            purRate: [''],
            saleRate: [''],
            retailRate: [''],
            mrp: [''],
            purDiscType: [''],
            purDisc: ['']
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "onResetForm",
        value: function onResetForm() {
          this.saleInvoiceHeadFormGroup.reset();
        }
      }, {
        key: "onSaveOrUpdateOutwardHead",
        value: function onSaveOrUpdateOutwardHead() {
          var _this3 = this;

          if (this.outwardHeadBtnText === 'Save') {
            var postOutwardObj = this.saleInvoiceHeadFormGroup.getRawValue();
            postOutwardObj.accId = this.saleInvoiceHeadFormGroup.controls.accId.value.id;
            postOutwardObj.tranTypeName = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_12__["SalePrefix"];
            postOutwardObj.isDeleted = 0;
            postOutwardObj.isEligible = 1;
            postOutwardObj.invDate = this.formatDate(postOutwardObj.invDate);
            postOutwardObj.compId = this.saleInvoiceHeadFormGroup.controls.compId.value.id;
            postOutwardObj.invValue = 0;
            postOutwardObj.invNo = 0;
            postOutwardObj.id = 0;
            postOutwardObj.taxUploadStatus = 0;
            postOutwardObj.name = "Firm";
            postOutwardObj.mode = this.saleInvoiceHeadFormGroup.controls.mode.value.name;
            delete postOutwardObj.accGstIn;
            delete postOutwardObj.accShName;
            delete postOutwardObj.accMobile;
            delete postOutwardObj.cityId;
            this.outwardService.postOrUpdateOutwardHead(postOutwardObj).subscribe(function (data) {
              return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_8__["default"].isStatus200(data) ? _this3.router.navigate(['/salesInvoices']) : src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_8__["default"].isStatus409(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__["default"].warningMessage('Outward Entry Head already exists', _this3.formAlertId) : '';
            });
          } else {}
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();
          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          return [year, month, day].join('-');
        }
      }]);

      return FirmEntryComponent;
    }();

    FirmEntryComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: Location
      }, {
        type: _outward_service__WEBPACK_IMPORTED_MODULE_10__["OutwardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _Master_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"]
      }, {
        type: src_app_shared_components_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], FirmEntryComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], FirmEntryComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('saleEntryDetailTemplate', {
      "static": true
    })], FirmEntryComponent.prototype, "saleEntryDetailTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('saleEntryDetailButtonTemplate', {
      "static": true
    })], FirmEntryComponent.prototype, "saleEntryDetailButtonTemplate", void 0);
    FirmEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-firm-entry',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./firm-entry.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/firm-entry/firm-entry.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./firm-entry.component.scss */
      "./src/app/distribution/out-ward/firm-entry/firm-entry.component.scss"))["default"]]
    })], FirmEntryComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/general-credit-note-customer-list/general-credit-note-customer-list.component.scss":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/general-credit-note-customer-list/general-credit-note-customer-list.component.scss ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardGeneralCreditNoteCustomerListGeneralCreditNoteCustomerListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".GCR-form mat-form-field {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL2dlbmVyYWwtY3JlZGl0LW5vdGUtY3VzdG9tZXItbGlzdC9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXBwXFxkaXN0cmlidXRpb25cXG91dC13YXJkXFxnZW5lcmFsLWNyZWRpdC1ub3RlLWN1c3RvbWVyLWxpc3RcXGdlbmVyYWwtY3JlZGl0LW5vdGUtY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL2dlbmVyYWwtY3JlZGl0LW5vdGUtY3VzdG9tZXItbGlzdC9nZW5lcmFsLWNyZWRpdC1ub3RlLWN1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vb3V0LXdhcmQvZ2VuZXJhbC1jcmVkaXQtbm90ZS1jdXN0b21lci1saXN0L2dlbmVyYWwtY3JlZGl0LW5vdGUtY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5HQ1ItZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEyMHB4O1xufSIsIi5HQ1ItZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/general-credit-note-customer-list/general-credit-note-customer-list.component.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/general-credit-note-customer-list/general-credit-note-customer-list.component.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: GeneralCreditNoteCustomerListComponent */

  /***/
  function srcAppDistributionOutWardGeneralCreditNoteCustomerListGeneralCreditNoteCustomerListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralCreditNoteCustomerListComponent", function () {
      return GeneralCreditNoteCustomerListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var GeneralCreditNoteCustomerListComponent = /*#__PURE__*/function () {
      function GeneralCreditNoteCustomerListComponent() {
        _classCallCheck(this, GeneralCreditNoteCustomerListComponent);

        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'expDate', 'gstin', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(GeneralCreditNoteCustomerListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }]);

      return GeneralCreditNoteCustomerListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], GeneralCreditNoteCustomerListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    })], GeneralCreditNoteCustomerListComponent.prototype, "sort", void 0);
    GeneralCreditNoteCustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-general-credit-note-customer-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general-credit-note-customer-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-credit-note-customer-list/general-credit-note-customer-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./general-credit-note-customer-list.component.scss */
      "./src/app/distribution/out-ward/general-credit-note-customer-list/general-credit-note-customer-list.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], GeneralCreditNoteCustomerListComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/general-credit-note-customer/general-credit-note-customer.component.scss":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/general-credit-note-customer/general-credit-note-customer.component.scss ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardGeneralCreditNoteCustomerGeneralCreditNoteCustomerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9nZW5lcmFsLWNyZWRpdC1ub3RlLWN1c3RvbWVyL2dlbmVyYWwtY3JlZGl0LW5vdGUtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/general-credit-note-customer/general-credit-note-customer.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/general-credit-note-customer/general-credit-note-customer.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: GeneralCreditNoteCustomerComponent */

  /***/
  function srcAppDistributionOutWardGeneralCreditNoteCustomerGeneralCreditNoteCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralCreditNoteCustomerComponent", function () {
      return GeneralCreditNoteCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../in-ward/in-ward.service */
    "./src/app/distribution/in-ward/in-ward.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var GeneralCreditNoteCustomerComponent = /*#__PURE__*/function () {
      function GeneralCreditNoteCustomerComponent(formBuilder, inwardService, router) {
        var _this4 = this;

        _classCallCheck(this, GeneralCreditNoteCustomerComponent);

        this.formBuilder = formBuilder;
        this.inwardService = inwardService;
        this.router = router;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.customAccountAutoCompleteDef = {
          label: 'Customer Name',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this4.inwardService.getCustomAccountsByName(name);
          },
          minCount: 2,
          keyString: 'accName'
        };
        this.customAccountsOptsTable = {
          panelWidth: 700,
          columns: [{
            name: 'Supplier Name',
            value: function value(obj) {
              return obj['accName'] ? obj['accName'] : '';
            },
            fxFlex: 35,
            fxFlex1: 35,
            isKeyColumn: true
          }, {
            name: 'City Name',
            value: function value(obj) {
              return obj['cityName'] ? obj['cityName'] : '';
            },
            fxFlex: 30,
            fxFlex1: 30
          }, {
            name: 'Mobile',
            value: function value(obj) {
              return obj['accMobile'] ? obj['accMobile'] : '';
            },
            fxFlex: 25,
            fxFlex1: 25
          }, //   { name:  'GSTIN', value:  (obj) => obj['accGSTIn'] ? obj['accGSTIn'] :  '', fxFlex:  50 },
          {
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['accShName'] ? obj['accShName'] : '';
            },
            fxFlex: 10,
            fxFlex1: 10
          }]
        };
      }

      _createClass(GeneralCreditNoteCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.generalCreditNoteHeadFormGroup = this.buildGeneralCreditNoteHeadFormGroup();
          this.generalCreditNoteDetailFormGroup = this.buildGeneralCreditNoteDetailFormGroup();
        }
      }, {
        key: "buildGeneralCreditNoteHeadFormGroup",
        value: function buildGeneralCreditNoteHeadFormGroup() {
          return this.formBuilder.group({
            invDate: [''],
            accName: [''],
            accShName: [''],
            cityName: [''],
            accMobile: [''],
            accGSTIN: ['']
          });
        }
      }, {
        key: "buildGeneralCreditNoteDetailFormGroup",
        value: function buildGeneralCreditNoteDetailFormGroup() {
          return this.formBuilder.group({
            description: [''],
            amount: [''],
            hsnCode: [''],
            tax: ['']
          });
        }
      }, {
        key: "clikRegisters",
        value: function clikRegisters() {
          this.inwardService.sendRegData(null);
          this.router.navigate(['pharma/outward/saleRegister']);
        }
      }]);

      return GeneralCreditNoteCustomerComponent;
    }();

    GeneralCreditNoteCustomerComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__["InwardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], GeneralCreditNoteCustomerComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], GeneralCreditNoteCustomerComponent.prototype, "sort", void 0);
    GeneralCreditNoteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-general-credit-note-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general-credit-note-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-credit-note-customer/general-credit-note-customer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./general-credit-note-customer.component.scss */
      "./src/app/distribution/out-ward/general-credit-note-customer/general-credit-note-customer.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], GeneralCreditNoteCustomerComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/general-debit-note-customer-list/general-debit-note-customer-list.component.scss":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/general-debit-note-customer-list/general-debit-note-customer-list.component.scss ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardGeneralDebitNoteCustomerListGeneralDebitNoteCustomerListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".GCR-form mat-form-field {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL2dlbmVyYWwtZGViaXQtbm90ZS1jdXN0b21lci1saXN0L0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcb3V0LXdhcmRcXGdlbmVyYWwtZGViaXQtbm90ZS1jdXN0b21lci1saXN0XFxnZW5lcmFsLWRlYml0LW5vdGUtY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL2dlbmVyYWwtZGViaXQtbm90ZS1jdXN0b21lci1saXN0L2dlbmVyYWwtZGViaXQtbm90ZS1jdXN0b21lci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL2dlbmVyYWwtZGViaXQtbm90ZS1jdXN0b21lci1saXN0L2dlbmVyYWwtZGViaXQtbm90ZS1jdXN0b21lci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkdDUi1mb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTIwcHg7XG59IiwiLkdDUi1mb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/general-debit-note-customer-list/general-debit-note-customer-list.component.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/general-debit-note-customer-list/general-debit-note-customer-list.component.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: GeneralDebitNoteCustomerListComponent */

  /***/
  function srcAppDistributionOutWardGeneralDebitNoteCustomerListGeneralDebitNoteCustomerListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralDebitNoteCustomerListComponent", function () {
      return GeneralDebitNoteCustomerListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var GeneralDebitNoteCustomerListComponent = /*#__PURE__*/function () {
      function GeneralDebitNoteCustomerListComponent() {
        _classCallCheck(this, GeneralDebitNoteCustomerListComponent);

        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'expDate', 'gstin', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(GeneralDebitNoteCustomerListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }]);

      return GeneralDebitNoteCustomerListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], GeneralDebitNoteCustomerListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    })], GeneralDebitNoteCustomerListComponent.prototype, "sort", void 0);
    GeneralDebitNoteCustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-general-debit-note-customer-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general-debit-note-customer-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-debit-note-customer-list/general-debit-note-customer-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./general-debit-note-customer-list.component.scss */
      "./src/app/distribution/out-ward/general-debit-note-customer-list/general-debit-note-customer-list.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], GeneralDebitNoteCustomerListComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/general-debit-note-customer/general-debit-note-customer.component.scss":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/general-debit-note-customer/general-debit-note-customer.component.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardGeneralDebitNoteCustomerGeneralDebitNoteCustomerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9nZW5lcmFsLWRlYml0LW5vdGUtY3VzdG9tZXIvZ2VuZXJhbC1kZWJpdC1ub3RlLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/general-debit-note-customer/general-debit-note-customer.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/general-debit-note-customer/general-debit-note-customer.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: GeneralDebitNoteCustomerComponent */

  /***/
  function srcAppDistributionOutWardGeneralDebitNoteCustomerGeneralDebitNoteCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralDebitNoteCustomerComponent", function () {
      return GeneralDebitNoteCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../in-ward/in-ward.service */
    "./src/app/distribution/in-ward/in-ward.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var GeneralDebitNoteCustomerComponent = /*#__PURE__*/function () {
      function GeneralDebitNoteCustomerComponent(formBuilder, inwardService, router) {
        var _this5 = this;

        _classCallCheck(this, GeneralDebitNoteCustomerComponent);

        this.formBuilder = formBuilder;
        this.inwardService = inwardService;
        this.router = router;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.customAccountAutoCompleteDef = {
          label: 'Customer Name',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this5.inwardService.getCustomAccountsByName(name);
          },
          minCount: 2,
          keyString: 'accName'
        };
        this.customAccountsOptsTable = {
          panelWidth: 700,
          columns: [{
            name: 'Supplier Name',
            value: function value(obj) {
              return obj['accName'] ? obj['accName'] : '';
            },
            fxFlex: 35,
            fxFlex1: 35,
            isKeyColumn: true
          }, {
            name: 'City Name',
            value: function value(obj) {
              return obj['cityName'] ? obj['cityName'] : '';
            },
            fxFlex: 30,
            fxFlex1: 30
          }, {
            name: 'Mobile',
            value: function value(obj) {
              return obj['accMobile'] ? obj['accMobile'] : '';
            },
            fxFlex: 25,
            fxFlex1: 25
          }, //   { name:  'GSTIN', value:  (obj) => obj['accGSTIn'] ? obj['accGSTIn'] :  '', fxFlex:  50 },
          {
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['accShName'] ? obj['accShName'] : '';
            },
            fxFlex: 10,
            fxFlex1: 10
          }]
        };
      }

      _createClass(GeneralDebitNoteCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.generalDebitNoteCustomerHeadFormGroup = this.buildGeneralDebitNoteCustomerHeadFormGroup();
          this.generalDebitNoteCustomerDetailFormGroup = this.buildGeneralDebitNoteCustomerDetailFormGroup();
        }
      }, {
        key: "buildGeneralDebitNoteCustomerHeadFormGroup",
        value: function buildGeneralDebitNoteCustomerHeadFormGroup() {
          return this.formBuilder.group({
            invDate: [''],
            accName: [''],
            accShName: [''],
            cityName: [''],
            accMobile: [''],
            accGSTIN: ['']
          });
        }
      }, {
        key: "buildGeneralDebitNoteCustomerDetailFormGroup",
        value: function buildGeneralDebitNoteCustomerDetailFormGroup() {
          return this.formBuilder.group({
            description: [''],
            amount: [''],
            hsnCode: [''],
            tax: ['']
          });
        }
      }, {
        key: "clikRegisters",
        value: function clikRegisters() {
          this.inwardService.sendRegData(null);
          this.router.navigate(['pharma/outward/saleRegister']);
        }
      }]);

      return GeneralDebitNoteCustomerComponent;
    }();

    GeneralDebitNoteCustomerComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__["InwardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], GeneralDebitNoteCustomerComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], GeneralDebitNoteCustomerComponent.prototype, "sort", void 0);
    GeneralDebitNoteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-general-debit-note-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./general-debit-note-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/general-debit-note-customer/general-debit-note-customer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./general-debit-note-customer.component.scss */
      "./src/app/distribution/out-ward/general-debit-note-customer/general-debit-note-customer.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], GeneralDebitNoteCustomerComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/internalstock-adj-minus/internalstock-adj-minus.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/internalstock-adj-minus/internalstock-adj-minus.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardInternalstockAdjMinusInternalstockAdjMinusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".minus-form mat-form-field {\n  width: 170px;\n}\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon {\n  width: 1.5em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL2ludGVybmFsc3RvY2stYWRqLW1pbnVzL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcb3V0LXdhcmRcXGludGVybmFsc3RvY2stYWRqLW1pbnVzXFxpbnRlcm5hbHN0b2NrLWFkai1taW51cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL2ludGVybmFsc3RvY2stYWRqLW1pbnVzL2ludGVybmFsc3RvY2stYWRqLW1pbnVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9pbnRlcm5hbHN0b2NrLWFkai1taW51cy9pbnRlcm5hbHN0b2NrLWFkai1taW51cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW51cy1mb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTcwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWRlZmF1bHQtaWNvbntcbiAgICB3aWR0aDogMS41ZW0gIWltcG9ydGFudDtcbn0iLCIubWludXMtZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtZGVmYXVsdC1pY29uIHtcbiAgd2lkdGg6IDEuNWVtICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/internalstock-adj-minus/internalstock-adj-minus.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/internalstock-adj-minus/internalstock-adj-minus.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: InternalstockAdjMinusComponent */

  /***/
  function srcAppDistributionOutWardInternalstockAdjMinusInternalstockAdjMinusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InternalstockAdjMinusComponent", function () {
      return InternalstockAdjMinusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/app-constants */
    "./src/app/shared/app-constants.ts");
    /* harmony import */


    var _outward_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../outward.service */
    "./src/app/distribution/out-ward/outward.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../in-ward/in-ward.service */
    "./src/app/distribution/in-ward/in-ward.service.ts");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var InternalstockAdjMinusComponent = /*#__PURE__*/function () {
      function InternalstockAdjMinusComponent(formBuilder, outwardService, inwardService, router) {
        var _this6 = this;

        _classCallCheck(this, InternalstockAdjMinusComponent);

        this.formBuilder = formBuilder;
        this.outwardService = outwardService;
        this.inwardService = inwardService;
        this.router = router;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'companyName', 'tax', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.customProductAutoCompleteDef = {
          label: 'Product Name',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this6.outwardService.getCustomProductByName(name, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["PurchasePrefix"]);
          },
          minCount: 2,
          keyString: 'prodName'
        }; //Custom Products Autocomplete Options Table View

        this.customProductOptsTable = {
          panelWidth: 300,
          columns: [{
            name: 'Product Name',
            value: function value(obj) {
              return obj['prodName'] ? obj['prodName'] : '';
            },
            fxFlex: 50,
            fxFlex1: 50,
            isKeyColumn: true
          }, {
            name: 'Product Pack',
            value: function value(obj) {
              return obj['prodPackName'] ? obj['prodPackName'] : '';
            },
            fxFlex: 50,
            fxFlex1: 50
          }, {
            name: 'HSN Code',
            value: function value(obj) {
              return obj['hsnCode'] ? obj['hsnCode'] : '';
            },
            fxFlex: 50,
            fxFlex1: 50
          }, {
            name: 'Tax%',
            value: function value(obj) {
              return obj['taxSlabId'] ? obj['taxSlabId'] : '';
            },
            fxFlex: 50,
            fxFlex1: 50
          }, {
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['prodShName'] ? obj['prodShName'] : '';
            },
            fxFlex: 50,
            fxFlex1: 50
          }, {
            name: 'CompanyName',
            value: function value(obj) {
              return obj['compId'] ? obj['compId'] : '';
            },
            fxFlex: 50,
            fxFlex1: 50
          }]
        };
      }

      _createClass(InternalstockAdjMinusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.internalStockAdjMinusHeadFormGroup = this.buildInternalStockAdjMinusFormGroup();
          this.internalStockAdjMinusDetailFormGroup = this.buildInternalStockAdjMinusDetailFormGroup();
        }
      }, {
        key: "buildInternalStockAdjMinusFormGroup",
        value: function buildInternalStockAdjMinusFormGroup() {
          return this.formBuilder.group({
            invDate: [''],
            remarks: ['']
          });
        }
      }, {
        key: "buildInternalStockAdjMinusDetailFormGroup",
        value: function buildInternalStockAdjMinusDetailFormGroup() {
          return this.formBuilder.group({
            prodName: [''],
            prodShName: [''],
            prodPackName: [''],
            batch: [''],
            issQty: [''],
            issQtyDisc: ['']
          });
        }
      }, {
        key: "clikRegisters",
        value: function clikRegisters() {
          this.inwardService.sendRegData(null);
          this.router.navigate(['pharma/outward/saleRegister']);
        }
      }]);

      return InternalstockAdjMinusComponent;
    }();

    InternalstockAdjMinusComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _outward_service__WEBPACK_IMPORTED_MODULE_5__["OutwardService"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_7__["InwardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], InternalstockAdjMinusComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], InternalstockAdjMinusComponent.prototype, "sort", void 0);
    InternalstockAdjMinusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-internalstock-adj-minus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./internalstock-adj-minus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/internalstock-adj-minus/internalstock-adj-minus.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./internalstock-adj-minus.component.scss */
      "./src/app/distribution/out-ward/internalstock-adj-minus/internalstock-adj-minus.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], InternalstockAdjMinusComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/other-sales-list/other-sales-list.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/other-sales-list/other-sales-list.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardOtherSalesListOtherSalesListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".osal-form mat-form-field {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL290aGVyLXNhbGVzLWxpc3QvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxvdXQtd2FyZFxcb3RoZXItc2FsZXMtbGlzdFxcb3RoZXItc2FsZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL290aGVyLXNhbGVzLWxpc3Qvb3RoZXItc2FsZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9vdGhlci1zYWxlcy1saXN0L290aGVyLXNhbGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3NhbC1mb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTIwcHg7XG59IiwiLm9zYWwtZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/other-sales-list/other-sales-list.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/other-sales-list/other-sales-list.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: OtherSalesListComponent */

  /***/
  function srcAppDistributionOutWardOtherSalesListOtherSalesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherSalesListComponent", function () {
      return OtherSalesListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var OtherSalesListComponent = /*#__PURE__*/function () {
      function OtherSalesListComponent() {
        _classCallCheck(this, OtherSalesListComponent);

        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'expDate', 'gstin', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(OtherSalesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }]);

      return OtherSalesListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], OtherSalesListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    })], OtherSalesListComponent.prototype, "sort", void 0);
    OtherSalesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-other-sales-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./other-sales-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/other-sales-list/other-sales-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./other-sales-list.component.scss */
      "./src/app/distribution/out-ward/other-sales-list/other-sales-list.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], OtherSalesListComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/other-sales/other-sales.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/distribution/out-ward/other-sales/other-sales.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardOtherSalesOtherSalesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".other-form mat-form-field {\n  width: 137px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL290aGVyLXNhbGVzL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcb3V0LXdhcmRcXG90aGVyLXNhbGVzXFxvdGhlci1zYWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL290aGVyLXNhbGVzL290aGVyLXNhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL290aGVyLXNhbGVzL290aGVyLXNhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90aGVyLWZvcm0gbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMzdweDs7XG59IiwiLm90aGVyLWZvcm0gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTM3cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/other-sales/other-sales.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/distribution/out-ward/other-sales/other-sales.component.ts ***!
    \****************************************************************************/

  /*! exports provided: OtherSalesComponent */

  /***/
  function srcAppDistributionOutWardOtherSalesOtherSalesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherSalesComponent", function () {
      return OtherSalesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../in-ward/in-ward.service */
    "./src/app/distribution/in-ward/in-ward.service.ts");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var OtherSalesComponent = /*#__PURE__*/function () {
      function OtherSalesComponent(router, inwardService) {
        _classCallCheck(this, OtherSalesComponent);

        this.router = router;
        this.inwardService = inwardService;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'expDate', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(OtherSalesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "clikRegisters",
        value: function clikRegisters() {
          this.inwardService.sendRegData(null);
          this.router.navigate(['pharma/outward/saleRegister']);
        }
      }]);

      return OtherSalesComponent;
    }();

    OtherSalesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__["InwardService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], OtherSalesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    })], OtherSalesComponent.prototype, "sort", void 0);
    OtherSalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-other-sales',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./other-sales.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/other-sales/other-sales.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./other-sales.component.scss */
      "./src/app/distribution/out-ward/other-sales/other-sales.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], OtherSalesComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/out-ward.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/distribution/out-ward/out-ward.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardOutWardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outward-pharma-head {\n  color: #006476;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcb3V0LXdhcmRcXG91dC13YXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vb3V0LXdhcmQvb3V0LXdhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9vdXQtd2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXR3YXJkLXBoYXJtYS1oZWFkIHtcbiAgICBjb2xvcjogIzAwNjQ3NjsgIFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn0iLCIub3V0d2FyZC1waGFybWEtaGVhZCB7XG4gIGNvbG9yOiAjMDA2NDc2O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/out-ward.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/distribution/out-ward/out-ward.component.ts ***!
    \*************************************************************/

  /*! exports provided: OutWardComponent */

  /***/
  function srcAppDistributionOutWardOutWardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutWardComponent", function () {
      return OutWardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OutWardComponent = /*#__PURE__*/function () {
      function OutWardComponent() {
        _classCallCheck(this, OutWardComponent);
      }

      _createClass(OutWardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OutWardComponent;
    }();

    OutWardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-out-ward',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./out-ward.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/out-ward.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], OutWardComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/out-ward.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/distribution/out-ward/out-ward.module.ts ***!
    \**********************************************************/

  /*! exports provided: OutWardModule */

  /***/
  function srcAppDistributionOutWardOutWardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutWardModule", function () {
      return OutWardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _out_ward_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./out-ward.component */
    "./src/app/distribution/out-ward/out-ward.component.ts");
    /* harmony import */


    var _sale_return_sale_return_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sale-return/sale-return.component */
    "./src/app/distribution/out-ward/sale-return/sale-return.component.ts");
    /* harmony import */


    var _sale_return_list_sale_return_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sale-return-list/sale-return-list.component */
    "./src/app/distribution/out-ward/sale-return-list/sale-return-list.component.ts");
    /* harmony import */


    var _outward_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./outward-routing.module */
    "./src/app/distribution/out-ward/outward-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _sale_order_sale_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sale-order/sale-order.component */
    "./src/app/distribution/out-ward/sale-order/sale-order.component.ts");
    /* harmony import */


    var _sale_order_list_sale_order_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sale-order-list/sale-order-list.component */
    "./src/app/distribution/out-ward/sale-order-list/sale-order-list.component.ts");
    /* harmony import */


    var _sale_delivery_challan_sale_delivery_challan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sale-delivery-challan/sale-delivery-challan.component */
    "./src/app/distribution/out-ward/sale-delivery-challan/sale-delivery-challan.component.ts");
    /* harmony import */


    var _sale_delivery_challan_list_sale_delivery_challan_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sale-delivery-challan-list/sale-delivery-challan-list.component */
    "./src/app/distribution/out-ward/sale-delivery-challan-list/sale-delivery-challan-list.component.ts");
    /* harmony import */


    var _sale_invoice_sale_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sale-invoice/sale-invoice.component */
    "./src/app/distribution/out-ward/sale-invoice/sale-invoice.component.ts");
    /* harmony import */


    var _sale_invoice_list_sale_invoice_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./sale-invoice-list/sale-invoice-list.component */
    "./src/app/distribution/out-ward/sale-invoice-list/sale-invoice-list.component.ts");
    /* harmony import */


    var _internalstock_adj_minus_internalstock_adj_minus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./internalstock-adj-minus/internalstock-adj-minus.component */
    "./src/app/distribution/out-ward/internalstock-adj-minus/internalstock-adj-minus.component.ts");
    /* harmony import */


    var _other_sales_other_sales_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./other-sales/other-sales.component */
    "./src/app/distribution/out-ward/other-sales/other-sales.component.ts");
    /* harmony import */


    var _other_sales_list_other_sales_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./other-sales-list/other-sales-list.component */
    "./src/app/distribution/out-ward/other-sales-list/other-sales-list.component.ts");
    /* harmony import */


    var _general_credit_note_customer_general_credit_note_customer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./general-credit-note-customer/general-credit-note-customer.component */
    "./src/app/distribution/out-ward/general-credit-note-customer/general-credit-note-customer.component.ts");
    /* harmony import */


    var _general_credit_note_customer_list_general_credit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./general-credit-note-customer-list/general-credit-note-customer-list.component */
    "./src/app/distribution/out-ward/general-credit-note-customer-list/general-credit-note-customer-list.component.ts");
    /* harmony import */


    var _general_debit_note_customer_list_general_debit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./general-debit-note-customer-list/general-debit-note-customer-list.component */
    "./src/app/distribution/out-ward/general-debit-note-customer-list/general-debit-note-customer-list.component.ts");
    /* harmony import */


    var _general_debit_note_customer_general_debit_note_customer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./general-debit-note-customer/general-debit-note-customer.component */
    "./src/app/distribution/out-ward/general-debit-note-customer/general-debit-note-customer.component.ts");
    /* harmony import */


    var _rate_diff_debit_note_customer_rate_diff_debit_note_customer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./rate-diff-debit-note-customer/rate-diff-debit-note-customer.component */
    "./src/app/distribution/out-ward/rate-diff-debit-note-customer/rate-diff-debit-note-customer.component.ts");
    /* harmony import */


    var _rate_diff_debit_note_customer_list_rate_diff_debit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component */
    "./src/app/distribution/out-ward/rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component.ts");
    /* harmony import */


    var _rate_diff_credit_note_customer_list_rate_diff_credit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component */
    "./src/app/distribution/out-ward/rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component.ts");
    /* harmony import */


    var _rate_diff_credit_note_customer_rate_diff_credit_note_customer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./rate-diff-credit-note-customer/rate-diff-credit-note-customer.component */
    "./src/app/distribution/out-ward/rate-diff-credit-note-customer/rate-diff-credit-note-customer.component.ts");
    /* harmony import */


    var _quotation_quotation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./quotation/quotation.component */
    "./src/app/distribution/out-ward/quotation/quotation.component.ts");
    /* harmony import */


    var _quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./quotation-list/quotation-list.component */
    "./src/app/distribution/out-ward/quotation-list/quotation-list.component.ts");
    /* harmony import */


    var _retail_sales_retail_sales_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./retail-sales/retail-sales.component */
    "./src/app/distribution/out-ward/retail-sales/retail-sales.component.ts");
    /* harmony import */


    var _firm_entry_firm_entry_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./firm-entry/firm-entry.component */
    "./src/app/distribution/out-ward/firm-entry/firm-entry.component.ts");
    /* harmony import */


    var _sale_register_sale_register_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./sale-register/sale-register.component */
    "./src/app/distribution/out-ward/sale-register/sale-register.component.ts");
    /* harmony import */


    var _outward_transaction_outward_transaction_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./outward-transaction/outward-transaction.component */
    "./src/app/distribution/out-ward/outward-transaction/outward-transaction.component.ts");
    /* harmony import */


    var _outward_registers_outward_registers_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./outward-registers/outward-registers.component */
    "./src/app/distribution/out-ward/outward-registers/outward-registers.component.ts");

    var OutWardModule = function OutWardModule() {
      _classCallCheck(this, OutWardModule);
    };

    OutWardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_out_ward_component__WEBPACK_IMPORTED_MODULE_3__["OutWardComponent"], _sale_return_sale_return_component__WEBPACK_IMPORTED_MODULE_4__["SaleReturnComponent"], _sale_return_list_sale_return_list_component__WEBPACK_IMPORTED_MODULE_5__["SaleReturnListComponent"], _sale_order_sale_order_component__WEBPACK_IMPORTED_MODULE_8__["SaleOrderComponent"], _sale_order_list_sale_order_list_component__WEBPACK_IMPORTED_MODULE_9__["SaleOrderListComponent"], _sale_delivery_challan_sale_delivery_challan_component__WEBPACK_IMPORTED_MODULE_10__["SaleDeliveryChallanComponent"], _sale_delivery_challan_list_sale_delivery_challan_list_component__WEBPACK_IMPORTED_MODULE_11__["SaleDeliveryChallanListComponent"], _sale_invoice_sale_invoice_component__WEBPACK_IMPORTED_MODULE_12__["SaleInvoiceComponent"], _sale_invoice_list_sale_invoice_list_component__WEBPACK_IMPORTED_MODULE_13__["SaleInvoiceListComponent"], _internalstock_adj_minus_internalstock_adj_minus_component__WEBPACK_IMPORTED_MODULE_14__["InternalstockAdjMinusComponent"], _other_sales_other_sales_component__WEBPACK_IMPORTED_MODULE_15__["OtherSalesComponent"], _other_sales_list_other_sales_list_component__WEBPACK_IMPORTED_MODULE_16__["OtherSalesListComponent"], _general_credit_note_customer_general_credit_note_customer_component__WEBPACK_IMPORTED_MODULE_17__["GeneralCreditNoteCustomerComponent"], _general_credit_note_customer_list_general_credit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_18__["GeneralCreditNoteCustomerListComponent"], _general_debit_note_customer_list_general_debit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_19__["GeneralDebitNoteCustomerListComponent"], _general_debit_note_customer_general_debit_note_customer_component__WEBPACK_IMPORTED_MODULE_20__["GeneralDebitNoteCustomerComponent"], _rate_diff_debit_note_customer_rate_diff_debit_note_customer_component__WEBPACK_IMPORTED_MODULE_21__["RateDiffDebitNoteCustomerComponent"], _rate_diff_debit_note_customer_list_rate_diff_debit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_22__["RateDiffDebitNoteCustomerListComponent"], _rate_diff_credit_note_customer_list_rate_diff_credit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_23__["RateDiffCreditNoteCustomerListComponent"], _rate_diff_credit_note_customer_rate_diff_credit_note_customer_component__WEBPACK_IMPORTED_MODULE_24__["RateDiffCreditNoteCustomerComponent"], _quotation_quotation_component__WEBPACK_IMPORTED_MODULE_25__["QuotationComponent"], _quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_26__["QuotationListComponent"], _retail_sales_retail_sales_component__WEBPACK_IMPORTED_MODULE_27__["RetailSalesComponent"], _firm_entry_firm_entry_component__WEBPACK_IMPORTED_MODULE_28__["FirmEntryComponent"], _sale_register_sale_register_component__WEBPACK_IMPORTED_MODULE_29__["SaleRegisterComponent"], _outward_transaction_outward_transaction_component__WEBPACK_IMPORTED_MODULE_30__["OutwardTransactionComponent"], _outward_registers_outward_registers_component__WEBPACK_IMPORTED_MODULE_31__["OutwardRegistersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _outward_routing_module__WEBPACK_IMPORTED_MODULE_6__["OutwardRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
    })], OutWardModule);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/outward-registers/outward-registers.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/outward-registers/outward-registers.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardOutwardRegistersOutwardRegistersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9vdXR3YXJkLXJlZ2lzdGVycy9vdXR3YXJkLXJlZ2lzdGVycy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/outward-registers/outward-registers.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/outward-registers/outward-registers.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: OutwardRegistersComponent */

  /***/
  function srcAppDistributionOutWardOutwardRegistersOutwardRegistersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutwardRegistersComponent", function () {
      return OutwardRegistersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OutwardRegistersComponent = /*#__PURE__*/function () {
      function OutwardRegistersComponent(route) {
        _classCallCheck(this, OutwardRegistersComponent);

        this.route = route;
      }

      _createClass(OutwardRegistersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.authDetails = JSON.parse(localStorage.getItem("menuItems"));
          this.authDetails.filter(function (x) {
            if (x.menuName == 'Outward') {
              _this7.menuArray = x.menus;
              _this7.menuArray = _this7.menuArray.filter(function (x) {
                return x.menuName !== "Outward Register";
              });
            }
          }); // this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
          // this.menuArray = this.authDetails[3].menus;
          // this.menuArray = this.menuArray.filter(x=>x.menuName !== "Outward Register");
          // console.log(this.menuArray);
        }
      }, {
        key: "trans",
        value: function trans(val) {
          var r = val.split("ebusiness");
          r = r[1];
          console.log(r);

          if (r == "/pharma/outward/salesOrders" || r == "/pharma/outward/salesDeliveryChallans" || r == "/pharma/outward/salesInvoices" || r == "/pharma/outward/salesInvoices" || r == "/pharma/outward/salesReturns" || r == "pharma/outward/internalStockAdjustmentsMinus" || "pharma/outward/otherSales" || "pharma/outward/generalCreditNotesIssueToCustomers" || "pharma/outward/generalDebitNotesIssueToCustomers" || "pharma/outward/rateDifferenceCreditNotesToCustomers" || "pharma/outward/rateDifferenceDebitNotesToCustomers" || "pharma/outward/quotations" || "pharma/outward/retailSales" || "pharma/outward/outwardRegisters") {
            this.route.navigate(['/pharma/outward/saleRegister']);
          } // Pass the path as an array

        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return OutwardRegistersComponent;
    }();

    OutwardRegistersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    OutwardRegistersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-outward-registers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./outward-registers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/outward-registers/outward-registers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./outward-registers.component.scss */
      "./src/app/distribution/out-ward/outward-registers/outward-registers.component.scss"))["default"]]
    })], OutwardRegistersComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/outward-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/distribution/out-ward/outward-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: OutwardRoutingModule */

  /***/
  function srcAppDistributionOutWardOutwardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutwardRoutingModule", function () {
      return OutwardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _firm_entry_firm_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./firm-entry/firm-entry.component */
    "./src/app/distribution/out-ward/firm-entry/firm-entry.component.ts");
    /* harmony import */


    var _general_credit_note_customer_list_general_credit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./general-credit-note-customer-list/general-credit-note-customer-list.component */
    "./src/app/distribution/out-ward/general-credit-note-customer-list/general-credit-note-customer-list.component.ts");
    /* harmony import */


    var _general_credit_note_customer_general_credit_note_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./general-credit-note-customer/general-credit-note-customer.component */
    "./src/app/distribution/out-ward/general-credit-note-customer/general-credit-note-customer.component.ts");
    /* harmony import */


    var _general_debit_note_customer_list_general_debit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./general-debit-note-customer-list/general-debit-note-customer-list.component */
    "./src/app/distribution/out-ward/general-debit-note-customer-list/general-debit-note-customer-list.component.ts");
    /* harmony import */


    var _general_debit_note_customer_general_debit_note_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./general-debit-note-customer/general-debit-note-customer.component */
    "./src/app/distribution/out-ward/general-debit-note-customer/general-debit-note-customer.component.ts");
    /* harmony import */


    var _internalstock_adj_minus_internalstock_adj_minus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./internalstock-adj-minus/internalstock-adj-minus.component */
    "./src/app/distribution/out-ward/internalstock-adj-minus/internalstock-adj-minus.component.ts");
    /* harmony import */


    var _other_sales_list_other_sales_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./other-sales-list/other-sales-list.component */
    "./src/app/distribution/out-ward/other-sales-list/other-sales-list.component.ts");
    /* harmony import */


    var _other_sales_other_sales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./other-sales/other-sales.component */
    "./src/app/distribution/out-ward/other-sales/other-sales.component.ts");
    /* harmony import */


    var _out_ward_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./out-ward.component */
    "./src/app/distribution/out-ward/out-ward.component.ts");
    /* harmony import */


    var _quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./quotation-list/quotation-list.component */
    "./src/app/distribution/out-ward/quotation-list/quotation-list.component.ts");
    /* harmony import */


    var _quotation_quotation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./quotation/quotation.component */
    "./src/app/distribution/out-ward/quotation/quotation.component.ts");
    /* harmony import */


    var _rate_diff_credit_note_customer_list_rate_diff_credit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component */
    "./src/app/distribution/out-ward/rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component.ts");
    /* harmony import */


    var _rate_diff_credit_note_customer_rate_diff_credit_note_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./rate-diff-credit-note-customer/rate-diff-credit-note-customer.component */
    "./src/app/distribution/out-ward/rate-diff-credit-note-customer/rate-diff-credit-note-customer.component.ts");
    /* harmony import */


    var _rate_diff_debit_note_customer_list_rate_diff_debit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component */
    "./src/app/distribution/out-ward/rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component.ts");
    /* harmony import */


    var _rate_diff_debit_note_customer_rate_diff_debit_note_customer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./rate-diff-debit-note-customer/rate-diff-debit-note-customer.component */
    "./src/app/distribution/out-ward/rate-diff-debit-note-customer/rate-diff-debit-note-customer.component.ts");
    /* harmony import */


    var _retail_sales_retail_sales_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./retail-sales/retail-sales.component */
    "./src/app/distribution/out-ward/retail-sales/retail-sales.component.ts");
    /* harmony import */


    var _sale_delivery_challan_list_sale_delivery_challan_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./sale-delivery-challan-list/sale-delivery-challan-list.component */
    "./src/app/distribution/out-ward/sale-delivery-challan-list/sale-delivery-challan-list.component.ts");
    /* harmony import */


    var _sale_delivery_challan_sale_delivery_challan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./sale-delivery-challan/sale-delivery-challan.component */
    "./src/app/distribution/out-ward/sale-delivery-challan/sale-delivery-challan.component.ts");
    /* harmony import */


    var _sale_invoice_list_sale_invoice_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./sale-invoice-list/sale-invoice-list.component */
    "./src/app/distribution/out-ward/sale-invoice-list/sale-invoice-list.component.ts");
    /* harmony import */


    var _sale_invoice_sale_invoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./sale-invoice/sale-invoice.component */
    "./src/app/distribution/out-ward/sale-invoice/sale-invoice.component.ts");
    /* harmony import */


    var _sale_order_list_sale_order_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./sale-order-list/sale-order-list.component */
    "./src/app/distribution/out-ward/sale-order-list/sale-order-list.component.ts");
    /* harmony import */


    var _sale_order_sale_order_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./sale-order/sale-order.component */
    "./src/app/distribution/out-ward/sale-order/sale-order.component.ts");
    /* harmony import */


    var _sale_return_list_sale_return_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./sale-return-list/sale-return-list.component */
    "./src/app/distribution/out-ward/sale-return-list/sale-return-list.component.ts");
    /* harmony import */


    var _sale_return_sale_return_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./sale-return/sale-return.component */
    "./src/app/distribution/out-ward/sale-return/sale-return.component.ts");
    /* harmony import */


    var _sale_register_sale_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./sale-register/sale-register.component */
    "./src/app/distribution/out-ward/sale-register/sale-register.component.ts");
    /* harmony import */


    var _outward_transaction_outward_transaction_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./outward-transaction/outward-transaction.component */
    "./src/app/distribution/out-ward/outward-transaction/outward-transaction.component.ts");
    /* harmony import */


    var _outward_registers_outward_registers_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./outward-registers/outward-registers.component */
    "./src/app/distribution/out-ward/outward-registers/outward-registers.component.ts");

    var routes = [{
      path: '',
      component: _out_ward_component__WEBPACK_IMPORTED_MODULE_11__["OutWardComponent"],
      children: [{
        path: '',
        component: _out_ward_component__WEBPACK_IMPORTED_MODULE_11__["OutWardComponent"]
      }, {
        path: 'saleOrderEntry',
        component: _sale_order_sale_order_component__WEBPACK_IMPORTED_MODULE_24__["SaleOrderComponent"]
      }, {
        path: 'salesOrders',
        component: _sale_order_list_sale_order_list_component__WEBPACK_IMPORTED_MODULE_23__["SaleOrderListComponent"]
      }, {
        path: 'salesDeliveryChallan',
        component: _sale_delivery_challan_sale_delivery_challan_component__WEBPACK_IMPORTED_MODULE_20__["SaleDeliveryChallanComponent"]
      }, {
        path: 'salesDeliveryChallanList',
        component: _sale_delivery_challan_list_sale_delivery_challan_list_component__WEBPACK_IMPORTED_MODULE_19__["SaleDeliveryChallanListComponent"]
      }, {
        path: 'salesInvoices',
        component: _sale_invoice_list_sale_invoice_list_component__WEBPACK_IMPORTED_MODULE_21__["SaleInvoiceListComponent"]
      }, {
        path: 'saleInvoiceEntry',
        component: _sale_invoice_sale_invoice_component__WEBPACK_IMPORTED_MODULE_22__["SaleInvoiceComponent"]
      }, {
        path: 'salesReturns',
        component: _sale_return_list_sale_return_list_component__WEBPACK_IMPORTED_MODULE_25__["SaleReturnListComponent"]
      }, {
        path: 'salesReturnEntry',
        component: _sale_return_sale_return_component__WEBPACK_IMPORTED_MODULE_26__["SaleReturnComponent"]
      }, {
        path: 'internalStockAdjustmentsMinus',
        component: _internalstock_adj_minus_internalstock_adj_minus_component__WEBPACK_IMPORTED_MODULE_8__["InternalstockAdjMinusComponent"]
      }, //  {path:'SADJMList', component: InternalstockadjustmentListComponent},
      {
        path: 'otherSales',
        component: _other_sales_other_sales_component__WEBPACK_IMPORTED_MODULE_10__["OtherSalesComponent"]
      }, {
        path: 'OSALList',
        component: _other_sales_list_other_sales_list_component__WEBPACK_IMPORTED_MODULE_9__["OtherSalesListComponent"]
      }, {
        path: 'generalCreditNotesIssueToCustomers',
        component: _general_credit_note_customer_general_credit_note_customer_component__WEBPACK_IMPORTED_MODULE_5__["GeneralCreditNoteCustomerComponent"]
      }, {
        path: 'GCRList',
        component: _general_credit_note_customer_list_general_credit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["GeneralCreditNoteCustomerListComponent"]
      }, {
        path: 'generalDebitNotesIssueToCustomers',
        component: _general_debit_note_customer_general_debit_note_customer_component__WEBPACK_IMPORTED_MODULE_7__["GeneralDebitNoteCustomerComponent"]
      }, {
        path: 'GDBList',
        component: _general_debit_note_customer_list_general_debit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_6__["GeneralDebitNoteCustomerListComponent"]
      }, {
        path: 'rateDifferenceCreditNoteToCustomers',
        component: _rate_diff_credit_note_customer_rate_diff_credit_note_customer_component__WEBPACK_IMPORTED_MODULE_15__["RateDiffCreditNoteCustomerComponent"]
      }, {
        path: 'RDCRCList',
        component: _rate_diff_credit_note_customer_list_rate_diff_credit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_14__["RateDiffCreditNoteCustomerListComponent"]
      }, {
        path: 'rateDifferenceDebitNoteToCustomers',
        component: _rate_diff_debit_note_customer_rate_diff_debit_note_customer_component__WEBPACK_IMPORTED_MODULE_17__["RateDiffDebitNoteCustomerComponent"]
      }, {
        path: 'RDDBCList',
        component: _rate_diff_debit_note_customer_list_rate_diff_debit_note_customer_list_component__WEBPACK_IMPORTED_MODULE_16__["RateDiffDebitNoteCustomerListComponent"]
      }, // {path:'saleOrder', component: SaleOrderComponent},
      {
        path: 'quotations',
        component: _quotation_quotation_component__WEBPACK_IMPORTED_MODULE_13__["QuotationComponent"]
      }, {
        path: 'quotationsList',
        component: _quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_12__["QuotationListComponent"]
      }, {
        path: 'retailSales',
        component: _retail_sales_retail_sales_component__WEBPACK_IMPORTED_MODULE_18__["RetailSalesComponent"]
      }, {
        path: 'firmEntry',
        component: _firm_entry_firm_entry_component__WEBPACK_IMPORTED_MODULE_3__["FirmEntryComponent"]
      }, {
        path: 'saleRegister',
        component: _sale_register_sale_register_component__WEBPACK_IMPORTED_MODULE_27__["SaleRegisterComponent"]
      }, {
        path: 'OutwardTransaction',
        component: _outward_transaction_outward_transaction_component__WEBPACK_IMPORTED_MODULE_28__["OutwardTransactionComponent"]
      }, {
        path: 'OutwardRegisters',
        component: _outward_registers_outward_registers_component__WEBPACK_IMPORTED_MODULE_29__["OutwardRegistersComponent"]
      }]
    }];

    var OutwardRoutingModule = function OutwardRoutingModule() {
      _classCallCheck(this, OutwardRoutingModule);
    };

    OutwardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OutwardRoutingModule);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/outward-transaction/outward-transaction.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/outward-transaction/outward-transaction.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardOutwardTransactionOutwardTransactionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Container to align the buttons */\n.button-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 25px;\n  padding: 15px;\n}\n/* Styling for buttons */\n.btn {\n  padding: 8px 20px 10px 8px;\n  font-size: 14px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.4s;\n}\n.btn i {\n  font-size: 28px;\n}\n.head {\n  color: #305687;\n  padding: 24px;\n  text-align: center;\n}\n/* Icon styling */\n.btn i {\n  margin-right: 8px;\n}\n/* Button colors */\n.btn-success {\n  background-color: #28a745;\n  color: white;\n}\n/* Hover effect */\n.btn:hover {\n  background-color: white;\n  color: green;\n  border: 1px solid;\n}\n.inward_reg_card .card-header {\n  background-color: #0fa2be;\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL291dHdhcmQtdHJhbnNhY3Rpb24vQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxvdXQtd2FyZFxcb3V0d2FyZC10cmFuc2FjdGlvblxcb3V0d2FyZC10cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL291dHdhcmQtdHJhbnNhY3Rpb24vb3V0d2FyZC10cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQ0FBQTtBQUNBO0VBQ0ksYUFBQTtFQUVBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDQUo7QURHQSx3QkFBQTtBQUNBO0VBSUksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDSEo7QURRSTtFQUNJLGVBQUE7QUNOUjtBRFVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtBQ1JKO0FEWUEsaUJBQUE7QUFDQTtFQUNJLGlCQUFBO0FDVEo7QURZQSxrQkFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDVEo7QURZQSxpQkFBQTtBQUNBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNUSjtBRGFJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNWUiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9vdXR3YXJkLXRyYW5zYWN0aW9uL291dHdhcmQtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb250YWluZXIgdG8gYWxpZ24gdGhlIGJ1dHRvbnMgKi9cbi5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDI1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLyogU3R5bGluZyBmb3IgYnV0dG9ucyAqL1xuLmJ0biB7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAyMHB4IDEwcHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHM7XG4gICAgLy8gaGVpZ2h0OiAxNDVweDtcbiAgICAvLyB3aWR0aDogMjA4cHg7XG4gICAgLy8gZm9udC1zaXplOiAxNnB4O1xuXG4gICAgaXtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgICBcbn1cbi5oZWFke1xuICAgIGNvbG9yOiAjMzA1Njg3O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDM3MXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBcbn1cblxuLyogSWNvbiBzdHlsaW5nICovXG4uYnRuIGkge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4vKiBCdXR0b24gY29sb3JzICovXG4uYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBIb3ZlciBlZmZlY3QgKi9cbi5idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmlud2FyZF9yZWdfY2FyZHtcbiAgICAuY2FyZC1oZWFkZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZmEyYmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn0iLCIvKiBDb250YWluZXIgdG8gYWxpZ24gdGhlIGJ1dHRvbnMgKi9cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4vKiBTdHlsaW5nIGZvciBidXR0b25zICovXG4uYnRuIHtcbiAgcGFkZGluZzogOHB4IDIwcHggMTBweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzO1xufVxuLmJ0biBpIHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4uaGVhZCB7XG4gIGNvbG9yOiAjMzA1Njg3O1xuICBwYWRkaW5nOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEljb24gc3R5bGluZyAqL1xuLmJ0biBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi8qIEJ1dHRvbiBjb2xvcnMgKi9cbi5idG4tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogSG92ZXIgZWZmZWN0ICovXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBncmVlbjtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5pbndhcmRfcmVnX2NhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmYTJiZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/outward-transaction/outward-transaction.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/outward-transaction/outward-transaction.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: OutwardTransactionComponent */

  /***/
  function srcAppDistributionOutWardOutwardTransactionOutwardTransactionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutwardTransactionComponent", function () {
      return OutwardTransactionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var OutwardTransactionComponent = /*#__PURE__*/function () {
      function OutwardTransactionComponent(authservice, route) {
        _classCallCheck(this, OutwardTransactionComponent);

        this.authservice = authservice;
        this.route = route;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
      }

      _createClass(OutwardTransactionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          // this.authDetails= JSON.parse(localStorage.getItem("menuItems"));
          // this.menuArray = this.authDetails[3].menus;
          // this.menuArray = this.menuArray.filter(x=>x.menuName !== "Outward Register");
          // console.log(this.menuArray);
          this.authDetails = JSON.parse(localStorage.getItem("menuItems"));
          this.authDetails.filter(function (x) {
            if (x.menuName == 'Outward') {
              _this8.menuArray = x.menus;
              _this8.menuArray = _this8.menuArray.filter(function (x) {
                return x.menuName !== "Outward Register";
              });
            }
          });
        }
      }, {
        key: "trans",
        value: function trans(val) {
          var r = val.split("ebusiness");
          r = r[1];
          console.log(r);
          this.route.navigate([r]); // Pass the path as an array
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return OutwardTransactionComponent;
    }();

    OutwardTransactionComponent.ctorParameters = function () {
      return [{
        type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    OutwardTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-outward-transaction',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./outward-transaction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/outward-transaction/outward-transaction.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./outward-transaction.component.scss */
      "./src/app/distribution/out-ward/outward-transaction/outward-transaction.component.scss"))["default"]]
    })], OutwardTransactionComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/quotation-list/quotation-list.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/quotation-list/quotation-list.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardQuotationListQuotationListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9xdW90YXRpb24tbGlzdC9xdW90YXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/quotation-list/quotation-list.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/distribution/out-ward/quotation-list/quotation-list.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: QuotationListComponent */

  /***/
  function srcAppDistributionOutWardQuotationListQuotationListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuotationListComponent", function () {
      return QuotationListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var QuotationListComponent = /*#__PURE__*/function () {
      function QuotationListComponent() {
        _classCallCheck(this, QuotationListComponent);

        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'expDate', 'gstin', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(QuotationListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }]);

      return QuotationListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], QuotationListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    })], QuotationListComponent.prototype, "sort", void 0);
    QuotationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quotation-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quotation-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/quotation-list/quotation-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quotation-list.component.scss */
      "./src/app/distribution/out-ward/quotation-list/quotation-list.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], QuotationListComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/quotation/quotation.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/distribution/out-ward/quotation/quotation.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardQuotationQuotationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9xdW90YXRpb24vcXVvdGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/quotation/quotation.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/distribution/out-ward/quotation/quotation.component.ts ***!
    \************************************************************************/

  /*! exports provided: QuotationComponent */

  /***/
  function srcAppDistributionOutWardQuotationQuotationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuotationComponent", function () {
      return QuotationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../in-ward/in-ward.service */
    "./src/app/distribution/in-ward/in-ward.service.ts");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var QuotationComponent = /*#__PURE__*/function () {
      function QuotationComponent(router, inwardService) {
        _classCallCheck(this, QuotationComponent);

        this.router = router;
        this.inwardService = inwardService;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'expDate', 'gstin', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(QuotationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "clikRegisters",
        value: function clikRegisters() {
          this.inwardService.sendRegData(null);
          this.router.navigate(['pharma/outward/saleRegister']);
        }
      }]);

      return QuotationComponent;
    }();

    QuotationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__["InwardService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], QuotationComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    })], QuotationComponent.prototype, "sort", void 0);
    QuotationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quotation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quotation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/quotation/quotation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quotation.component.scss */
      "./src/app/distribution/out-ward/quotation/quotation.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], QuotationComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component.scss":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component.scss ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardRateDiffCreditNoteCustomerListRateDiffCreditNoteCustomerListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".GCR-form mat-form-field {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3JhdGUtZGlmZi1jcmVkaXQtbm90ZS1jdXN0b21lci1saXN0L0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcb3V0LXdhcmRcXHJhdGUtZGlmZi1jcmVkaXQtbm90ZS1jdXN0b21lci1saXN0XFxyYXRlLWRpZmYtY3JlZGl0LW5vdGUtY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3JhdGUtZGlmZi1jcmVkaXQtbm90ZS1jdXN0b21lci1saXN0L3JhdGUtZGlmZi1jcmVkaXQtbm90ZS1jdXN0b21lci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3JhdGUtZGlmZi1jcmVkaXQtbm90ZS1jdXN0b21lci1saXN0L3JhdGUtZGlmZi1jcmVkaXQtbm90ZS1jdXN0b21lci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkdDUi1mb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTIwcHg7XG59IiwiLkdDUi1mb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component.ts":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: RateDiffCreditNoteCustomerListComponent */

  /***/
  function srcAppDistributionOutWardRateDiffCreditNoteCustomerListRateDiffCreditNoteCustomerListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RateDiffCreditNoteCustomerListComponent", function () {
      return RateDiffCreditNoteCustomerListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var RateDiffCreditNoteCustomerListComponent = /*#__PURE__*/function () {
      function RateDiffCreditNoteCustomerListComponent() {
        _classCallCheck(this, RateDiffCreditNoteCustomerListComponent);

        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'expDate', 'gstin', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(RateDiffCreditNoteCustomerListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }]);

      return RateDiffCreditNoteCustomerListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], RateDiffCreditNoteCustomerListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    })], RateDiffCreditNoteCustomerListComponent.prototype, "sort", void 0);
    RateDiffCreditNoteCustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rate-diff-credit-note-customer-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rate-diff-credit-note-customer-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rate-diff-credit-note-customer-list.component.scss */
      "./src/app/distribution/out-ward/rate-diff-credit-note-customer-list/rate-diff-credit-note-customer-list.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], RateDiffCreditNoteCustomerListComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/rate-diff-credit-note-customer/rate-diff-credit-note-customer.component.scss":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/rate-diff-credit-note-customer/rate-diff-credit-note-customer.component.scss ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardRateDiffCreditNoteCustomerRateDiffCreditNoteCustomerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rate-form mat-form-field {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3JhdGUtZGlmZi1jcmVkaXQtbm90ZS1jdXN0b21lci9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXBwXFxkaXN0cmlidXRpb25cXG91dC13YXJkXFxyYXRlLWRpZmYtY3JlZGl0LW5vdGUtY3VzdG9tZXJcXHJhdGUtZGlmZi1jcmVkaXQtbm90ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3JhdGUtZGlmZi1jcmVkaXQtbm90ZS1jdXN0b21lci9yYXRlLWRpZmYtY3JlZGl0LW5vdGUtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vb3V0LXdhcmQvcmF0ZS1kaWZmLWNyZWRpdC1ub3RlLWN1c3RvbWVyL3JhdGUtZGlmZi1jcmVkaXQtbm90ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYXRlLWZvcm0gbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMjBweDtcbn0iLCIucmF0ZS1mb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/rate-diff-credit-note-customer/rate-diff-credit-note-customer.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/rate-diff-credit-note-customer/rate-diff-credit-note-customer.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: RateDiffCreditNoteCustomerComponent */

  /***/
  function srcAppDistributionOutWardRateDiffCreditNoteCustomerRateDiffCreditNoteCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RateDiffCreditNoteCustomerComponent", function () {
      return RateDiffCreditNoteCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var RateDiffCreditNoteCustomerComponent = /*#__PURE__*/function () {
      function RateDiffCreditNoteCustomerComponent() {
        _classCallCheck(this, RateDiffCreditNoteCustomerComponent);

        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'issQty', 'invRate', 'actRate', 'tax', 'diff', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(RateDiffCreditNoteCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }]);

      return RateDiffCreditNoteCustomerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], RateDiffCreditNoteCustomerComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    })], RateDiffCreditNoteCustomerComponent.prototype, "sort", void 0);
    RateDiffCreditNoteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rate-diff-credit-note-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rate-diff-credit-note-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-credit-note-customer/rate-diff-credit-note-customer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rate-diff-credit-note-customer.component.scss */
      "./src/app/distribution/out-ward/rate-diff-credit-note-customer/rate-diff-credit-note-customer.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], RateDiffCreditNoteCustomerComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component.scss":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component.scss ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardRateDiffDebitNoteCustomerListRateDiffDebitNoteCustomerListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".GCR-form mat-form-field {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3JhdGUtZGlmZi1kZWJpdC1ub3RlLWN1c3RvbWVyLWxpc3QvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxvdXQtd2FyZFxccmF0ZS1kaWZmLWRlYml0LW5vdGUtY3VzdG9tZXItbGlzdFxccmF0ZS1kaWZmLWRlYml0LW5vdGUtY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3JhdGUtZGlmZi1kZWJpdC1ub3RlLWN1c3RvbWVyLWxpc3QvcmF0ZS1kaWZmLWRlYml0LW5vdGUtY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9yYXRlLWRpZmYtZGViaXQtbm90ZS1jdXN0b21lci1saXN0L3JhdGUtZGlmZi1kZWJpdC1ub3RlLWN1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuR0NSLWZvcm0gbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMjBweDtcbn0iLCIuR0NSLWZvcm0gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component.ts":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component.ts ***!
    \**************************************************************************************************************************/

  /*! exports provided: RateDiffDebitNoteCustomerListComponent */

  /***/
  function srcAppDistributionOutWardRateDiffDebitNoteCustomerListRateDiffDebitNoteCustomerListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RateDiffDebitNoteCustomerListComponent", function () {
      return RateDiffDebitNoteCustomerListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var RateDiffDebitNoteCustomerListComponent = /*#__PURE__*/function () {
      function RateDiffDebitNoteCustomerListComponent() {
        _classCallCheck(this, RateDiffDebitNoteCustomerListComponent);

        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'expDate', 'gstin', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(RateDiffDebitNoteCustomerListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }]);

      return RateDiffDebitNoteCustomerListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], RateDiffDebitNoteCustomerListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    })], RateDiffDebitNoteCustomerListComponent.prototype, "sort", void 0);
    RateDiffDebitNoteCustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rate-diff-debit-note-customer-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rate-diff-debit-note-customer-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rate-diff-debit-note-customer-list.component.scss */
      "./src/app/distribution/out-ward/rate-diff-debit-note-customer-list/rate-diff-debit-note-customer-list.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], RateDiffDebitNoteCustomerListComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/rate-diff-debit-note-customer/rate-diff-debit-note-customer.component.scss":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/rate-diff-debit-note-customer/rate-diff-debit-note-customer.component.scss ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardRateDiffDebitNoteCustomerRateDiffDebitNoteCustomerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rate-form mat-form-field {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3JhdGUtZGlmZi1kZWJpdC1ub3RlLWN1c3RvbWVyL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcb3V0LXdhcmRcXHJhdGUtZGlmZi1kZWJpdC1ub3RlLWN1c3RvbWVyXFxyYXRlLWRpZmYtZGViaXQtbm90ZS1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3JhdGUtZGlmZi1kZWJpdC1ub3RlLWN1c3RvbWVyL3JhdGUtZGlmZi1kZWJpdC1ub3RlLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3JhdGUtZGlmZi1kZWJpdC1ub3RlLWN1c3RvbWVyL3JhdGUtZGlmZi1kZWJpdC1ub3RlLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGUtZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEyMHB4O1xufSIsIi5yYXRlLWZvcm0gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/rate-diff-debit-note-customer/rate-diff-debit-note-customer.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/rate-diff-debit-note-customer/rate-diff-debit-note-customer.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: RateDiffDebitNoteCustomerComponent */

  /***/
  function srcAppDistributionOutWardRateDiffDebitNoteCustomerRateDiffDebitNoteCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RateDiffDebitNoteCustomerComponent", function () {
      return RateDiffDebitNoteCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ELEMENT_DATA = [{
      shName: 'WOMB1',
      ProductName: 'ALIVE POWEDER 200G',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }, {
      shName: 'WOMB1',
      ProductName: 'FERIWOM TAB. NEW',
      ProductPack: '1',
      ProductType: '0',
      companyName: 'WOMB',
      tax: '2',
      hsncode: '54564'
    }];

    var RateDiffDebitNoteCustomerComponent = /*#__PURE__*/function () {
      function RateDiffDebitNoteCustomerComponent() {
        _classCallCheck(this, RateDiffDebitNoteCustomerComponent);

        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'issQty', 'invRate', 'actRate', 'tax', 'diff', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(RateDiffDebitNoteCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }]);

      return RateDiffDebitNoteCustomerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], RateDiffDebitNoteCustomerComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    })], RateDiffDebitNoteCustomerComponent.prototype, "sort", void 0);
    RateDiffDebitNoteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rate-diff-debit-note-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rate-diff-debit-note-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/rate-diff-debit-note-customer/rate-diff-debit-note-customer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rate-diff-debit-note-customer.component.scss */
      "./src/app/distribution/out-ward/rate-diff-debit-note-customer/rate-diff-debit-note-customer.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], RateDiffDebitNoteCustomerComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/retail-sales/retail-sales.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/distribution/out-ward/retail-sales/retail-sales.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardRetailSalesRetailSalesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9yZXRhaWwtc2FsZXMvcmV0YWlsLXNhbGVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/retail-sales/retail-sales.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/distribution/out-ward/retail-sales/retail-sales.component.ts ***!
    \******************************************************************************/

  /*! exports provided: RetailSalesComponent */

  /***/
  function srcAppDistributionOutWardRetailSalesRetailSalesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RetailSalesComponent", function () {
      return RetailSalesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RetailSalesComponent = /*#__PURE__*/function () {
      function RetailSalesComponent() {
        _classCallCheck(this, RetailSalesComponent);
      }

      _createClass(RetailSalesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RetailSalesComponent;
    }();

    RetailSalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-retail-sales',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./retail-sales.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/retail-sales/retail-sales.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./retail-sales.component.scss */
      "./src/app/distribution/out-ward/retail-sales/retail-sales.component.scss"))["default"]]
    })], RetailSalesComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-delivery-challan-list/sale-delivery-challan-list.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-delivery-challan-list/sale-delivery-challan-list.component.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardSaleDeliveryChallanListSaleDeliveryChallanListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9zYWxlLWRlbGl2ZXJ5LWNoYWxsYW4tbGlzdC9zYWxlLWRlbGl2ZXJ5LWNoYWxsYW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-delivery-challan-list/sale-delivery-challan-list.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-delivery-challan-list/sale-delivery-challan-list.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: SaleDeliveryChallanListComponent */

  /***/
  function srcAppDistributionOutWardSaleDeliveryChallanListSaleDeliveryChallanListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleDeliveryChallanListComponent", function () {
      return SaleDeliveryChallanListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SaleDeliveryChallanListComponent = /*#__PURE__*/function () {
      function SaleDeliveryChallanListComponent() {
        _classCallCheck(this, SaleDeliveryChallanListComponent);
      }

      _createClass(SaleDeliveryChallanListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SaleDeliveryChallanListComponent;
    }();

    SaleDeliveryChallanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sale-delivery-challan-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sale-delivery-challan-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-delivery-challan-list/sale-delivery-challan-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sale-delivery-challan-list.component.scss */
      "./src/app/distribution/out-ward/sale-delivery-challan-list/sale-delivery-challan-list.component.scss"))["default"]]
    })], SaleDeliveryChallanListComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-delivery-challan/sale-delivery-challan.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-delivery-challan/sale-delivery-challan.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardSaleDeliveryChallanSaleDeliveryChallanComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9zYWxlLWRlbGl2ZXJ5LWNoYWxsYW4vc2FsZS1kZWxpdmVyeS1jaGFsbGFuLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-delivery-challan/sale-delivery-challan.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-delivery-challan/sale-delivery-challan.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: SaleDeliveryChallanComponent */

  /***/
  function srcAppDistributionOutWardSaleDeliveryChallanSaleDeliveryChallanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleDeliveryChallanComponent", function () {
      return SaleDeliveryChallanComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SaleDeliveryChallanComponent = /*#__PURE__*/function () {
      function SaleDeliveryChallanComponent() {
        _classCallCheck(this, SaleDeliveryChallanComponent);
      }

      _createClass(SaleDeliveryChallanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SaleDeliveryChallanComponent;
    }();

    SaleDeliveryChallanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sale-delivery-challan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sale-delivery-challan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-delivery-challan/sale-delivery-challan.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sale-delivery-challan.component.scss */
      "./src/app/distribution/out-ward/sale-delivery-challan/sale-delivery-challan.component.scss"))["default"]]
    })], SaleDeliveryChallanComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-invoice-list/sale-invoice-list.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-invoice-list/sale-invoice-list.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardSaleInvoiceListSaleInvoiceListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".invList-form .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0px !important;\n}\n.invList-form .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n.invList-form .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n.invList-form .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n.invList-form .mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 2em;\n  top: calc(100% - 1.79167em);\n}\n::ng-deep .invList-form .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0px !important;\n}\n::ng-deep .invList-form .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n::ng-deep .invList-form .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n::ng-deep .invList-form .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n::ng-deep .invList-form .mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 2em;\n  top: calc(100% - 1.79167em);\n}\n::ng-deep .invList-form .firm-name {\n  width: 65%;\n}\n.w_116 {\n  width: 110px !important;\n  margin: 0.5rem 0;\n}\n.w_224 {\n  width: 224px;\n  margin: 0.5rem 0;\n}\n@media screen and (max-width: 600px) {\n  .invList-form mat-form-field {\n    width: 100% !important;\n  }\n}\n@media screen and (min-width: 950px) and (max-width: 1280px) {\n  .d_md_flex {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtaW52b2ljZS1saXN0L0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhc3NldHNcXHN0eWxlc1xcbWl4aW4uc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtaW52b2ljZS1saXN0L3NhbGUtaW52b2ljZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vb3V0LXdhcmQvc2FsZS1pbnZvaWNlLWxpc3QvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxvdXQtd2FyZFxcc2FsZS1pbnZvaWNlLWxpc3RcXHNhbGUtaW52b2ljZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNJO0VBQ0UsNkJBQUE7QUNSTjtBRFdJO0VBQ0UsV0FBQTtBQ1ROO0FEWUk7RUFDRSx5Q0FBQTtBQ1ZOO0FEYUk7RUFDRSxpQkFBQTtBQ1hOO0FEY0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDWk47QURQSTtFQUNFLDZCQUFBO0FDVU47QURQSTtFQUNFLFdBQUE7QUNTTjtBRE5JO0VBQ0UseUNBQUE7QUNRTjtBRExJO0VBQ0UsaUJBQUE7QUNPTjtBREpJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ01OO0FDbkJJO0VBQ0UsVUFBQTtBRHFCTjtBQ2ZBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBRGtCRjtBQ2ZBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FEa0JGO0FDVkE7RUFDRTtJQUNFLHNCQUFBO0VEYUY7QUFDRjtBQ1ZBO0VBQ0U7SUFDRSxhQUFBO0VEWUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9zYWxlLWludm9pY2UtbGlzdC9zYWxlLWludm9pY2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB1c2VyLWZvcm0ge1xuXG4gIC8vIC5tYXQtZm9ybS1maWVsZCB7XG4gIC8vICAgZm9udC1zaXplOiAxNHB4O1xuICAvLyAgIGhlaWdodDogNDhweDtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gfVxuXG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4Pi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICAgIHRvcDogLTEuNWVtO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICBcbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgZm9udC1zaXplOiA3NSU7XG4gICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjdlbSk7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgQG1peGluIG1hdC10YWIge1xuICAgIC5tYXQtdGFiLWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlYmVkZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiA4JSA4JSAwJSAwJTtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgcGFkZGluZzogMCAxMXB4O1xuICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICB9XG4gIH1cbiAgIiwiLmludkxpc3QtZm9ybSAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNGVtIDBweCAhaW1wb3J0YW50O1xufVxuLmludkxpc3QtZm9ybSAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIHRvcDogLTEuNWVtO1xufVxuLmludkxpc3QtZm9ybSAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoMC43NSk7XG59XG4uaW52TGlzdC1mb3JtIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uaW52TGlzdC1mb3JtIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIHRvcDogY2FsYygxMDAlIC0gMS43OTE2N2VtKTtcbn1cblxuOjpuZy1kZWVwIC5pbnZMaXN0LWZvcm0gLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuaW52TGlzdC1mb3JtIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgdG9wOiAtMS41ZW07XG59XG46Om5nLWRlZXAgLmludkxpc3QtZm9ybSAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoMC43NSk7XG59XG46Om5nLWRlZXAgLmludkxpc3QtZm9ybSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuOjpuZy1kZWVwIC5pbnZMaXN0LWZvcm0gLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgdG9wOiBjYWxjKDEwMCUgLSAxLjc5MTY3ZW0pO1xufVxuOjpuZy1kZWVwIC5pbnZMaXN0LWZvcm0gLmZpcm0tbmFtZSB7XG4gIHdpZHRoOiA2NSU7XG59XG5cbi53XzExNiB7XG4gIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4ud18yMjQge1xuICB3aWR0aDogMjI0cHg7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5pbnZMaXN0LWZvcm0gbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk1MHB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5kX21kX2ZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL21peGluLnNjc3MnO1xuXG5cbi5pbnZMaXN0LWZvcm0ge1xuICBAaW5jbHVkZSB1c2VyLWZvcm07XG5cbiAgLy8gbWF0LWZvcm0tZmllbGQge1xuICAvLyAgIHdpZHRoOiA4LjUlO1xuICAvLyB9XG59XG5cbjo6bmctZGVlcCB7XG4gIC5pbnZMaXN0LWZvcm0ge1xuICAgIEBpbmNsdWRlIHVzZXItZm9ybTtcblxuICAgIC5maXJtLW5hbWUge1xuICAgICAgd2lkdGg6IDY1JTtcbiAgICB9XG4gIH1cbn1cblxuXG4ud18xMTZ7XG4gIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4ud18yMjR7XG4gIHdpZHRoOiAyMjRweDtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLy8gLmludkxpc3QtZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4vLyAgIG1hcmdpbjogMC41cmVtIDA7XG4vLyAgIHdpZHRoOiAyMjRweCAhaW1wb3J0YW50O1xuLy8gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gIC5pbnZMaXN0LWZvcm0gbWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfSAgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTUwcHgpIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xuICAuZF9tZF9mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-invoice-list/sale-invoice-list.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-invoice-list/sale-invoice-list.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: SaleInvoiceListComponent */

  /***/
  function srcAppDistributionOutWardSaleInvoiceListSaleInvoiceListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleInvoiceListComponent", function () {
      return SaleInvoiceListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/app-constants */
    "./src/app/shared/app-constants.ts");
    /* harmony import */


    var src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/components/table/table-model */
    "./src/app/shared/components/table/table-model.ts");
    /* harmony import */


    var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/utils/app-message-utils */
    "./src/app/shared/utils/app-message-utils.ts");
    /* harmony import */


    var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/utils/response-utils */
    "./src/app/shared/utils/response-utils.ts");
    /* harmony import */


    var _outward_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../outward.service */
    "./src/app/distribution/out-ward/outward.service.ts");
    /* harmony import */


    var _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../in-ward/in-ward.service */
    "./src/app/distribution/in-ward/in-ward.service.ts");
    /* harmony import */


    var src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/route.service */
    "./src/app/shared/services/route.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/services/http.service */
    "./src/app/shared/services/http.service.ts");

    var SaleInvoiceListComponent = /*#__PURE__*/function () {
      function SaleInvoiceListComponent(outwardService, router, formBuilder, datePipe, inwardService, routeService, sanitze, todayDate) {
        var _this9 = this;

        _classCallCheck(this, SaleInvoiceListComponent);

        this.outwardService = outwardService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.inwardService = inwardService;
        this.routeService = routeService;
        this.sanitze = sanitze;
        this.todayDate = todayDate;
        this.tableDefinition = {
          columns: [{
            id: "outwardDate",
            name: "Inv.Date",
            value: function value(obj) {
              return obj['outwardDate'] ? _this9.datePipe.transform(obj['outwardDate'], 'dd-MM-yyyy') : '';
            }
          }, {
            id: "outwardHeadNo",
            name: "Inv.No.",
            value: function value(obj) {
              return obj['outwardHeadNo'] ? obj['outwardHeadNo'] : '';
            }
          }, {
            id: "name",
            name: "Customer Name",
            value: function value(obj) {
              return obj['accName'] ? obj['accName'] : '';
            }
          }, {
            id: "shName",
            name: "Sh.Name",
            value: function value(obj) {
              return obj['accShName'] ? obj['accShName'] : '';
            }
          }, {
            id: "cityName",
            name: "City Name",
            value: function value(obj) {
              return obj['cityName'] ? obj['cityName'] : '';
            }
          }, {
            id: "ltoNo",
            name: "GSTIN",
            value: function value(obj) {
              return obj['ltoNo'] ? obj['ltoNo'] : '';
            }
          }, {
            id: "outwardStatus",
            name: "",
            value: function value(obj) {
              return obj['outwardStatus'] ? obj['outwardStatus'] : '';
            }
          }, // { id: "invNo", name: "Inv.No.", value: (obj) => obj['invNo'] ? obj['invNo'] : '' },
          // { id: "invDate", name: "Inv.Date", value: (obj) => obj['invDate'] ? this.datePipe.transform(obj['invDate'], 'dd-MM-yyyy') : '' },
          // { id: "mode", name: "Mode", value: (obj) => obj['mode'] ? obj['mode'] : '' },
          {
            id: "mode",
            name: "Mode",
            value: function value(obj) {
              if (obj['mode'] === 1) {
                return "Cash";
              } else if (obj['mode'] === 2) {
                return "Credit";
              } else {
                return ''; // Return empty string if mode is neither 1 nor 2
              }
            }
          }, {
            id: "invValue",
            name: "Inv.Value",
            value: function value(obj) {
              obj['invValue'] !== undefined && obj['invValue'] !== null ? obj['invValue'] : '';
              var invvalue = obj['invValue'] ? obj['invValue'] : '';
              return invvalue ? _this9.routeService.formatAmount(invvalue.toString()) : ''; // return invvalue ? parseFloat(invvalue).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
            } // value: (obj) => (obj['invValue'] !== undefined && obj['invValue'] !== null) ? obj['invValue'] : '' 

          }, {
            id: "action",
            name: "Action",
            disableSort: true,
            actions: [{
              method: function method(obj) {
                return _this9.addOrEditSalesHead(obj, 'edit');
              },
              name: 'Edit',
              icon: 'assets/new_edit2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_6__["ActionStyle"].EDIT
            }, {
              method: function method(obj) {
                return _this9.addOrEditSalesHead(obj, 'delete');
              },
              name: 'Delete',
              icon: 'assets/new_delete2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_6__["ActionStyle"].DELETE
            }, // { name: 'WhatsApp', icon: 'assets/new_whatsApp2.png', style: ActionStyle.WHATSAPP },
            {
              name: 'Share',
              icon: 'share',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_6__["ActionStyle"].SHARE
            }, {
              name: 'IRN',
              icon: 'assets/new_upload-removebg.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_6__["ActionStyle"].IRN
            }, // {
            //   name: 'PDF',
            //   method: (obj) => this.getInvoicePDF(obj),
            //   icon: 'assets/new_pdf.png',
            //   style: ActionStyle.PDF,
            // },
            {
              name: 'Print',
              method: function method(obj) {
                return _this9.getInvoicePDF2(obj);
              },
              icon: 'assets/new_print.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_6__["ActionStyle"].PRINT
            }]
          }]
        };
      }

      _createClass(SaleInvoiceListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));

          if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.firmPreferences.finEdate;
          }

          this.today = this.todayDate.localDate();
          this.saleHeadListFormGroup = this.buildSalesListFormGroup();
          this.getsalesDataList();
        }
      }, {
        key: "buildSalesListFormGroup",
        value: function buildSalesListFormGroup() {
          return this.formBuilder.group({
            fromDate: [this.today],
            toDate: [this.today],
            invNo: [''],
            accName: [''],
            accShName: [''],
            cityId: [''],
            accGSTIn: [''],
            invDate: [null],
            mode: [''],
            invValue: ['']
          });
        }
      }, {
        key: "getSaleList",
        value: function getSaleList() {
          var _this10 = this;

          this.isDataLoading = true;
          this.dataList = null;
          this.outwardService.getSalesHeadList(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["SalePrefix"]).subscribe(function (data) {
            _this10.dataList = data;

            if (_this10.dataList) {
              if (_this10.dataList.length > 0) {
                _this10.dataList.forEach(function (element) {
                  element.invValue = _this10.routeService.formatAmount(element.invValue ? Math.round(element.invValue) : '0.00');
                });
              }
            }

            _this10.isDataLoading = false;
          });
        }
      }, {
        key: "getsalesDataList",
        value: function getsalesDataList() {
          var _this11 = this;

          this.isDataLoading = true;
          this.dataList = null;
          var payload = Object.assign({});
          console.log(this.saleHeadListFormGroup.value); // payload.fromDate= "2023-11-04T09:07:45.515Z",
          // payload.toDate= "2024-11-04T09:07:45.515Z"

          if (this.saleHeadListFormGroup.value.invDate) {
            payload.outwardDate = this.saleHeadListFormGroup.value.invDate ? this.saleHeadListFormGroup.value.invDate : null;
          }

          payload.fromDate = this.datePipe.transform(this.saleHeadListFormGroup.value.fromDate, 'yyyy-MM-dd'), payload.toDate = this.datePipe.transform(this.saleHeadListFormGroup.value.toDate, 'yyyy-MM-dd'), payload.invNo = this.saleHeadListFormGroup.value.invNo;
          payload.accName = this.saleHeadListFormGroup.value.accName;
          payload.accShName = this.saleHeadListFormGroup.value.accShName;
          payload.cityId = this.saleHeadListFormGroup.value.cityId ? this.saleHeadListFormGroup.value.cityId : 0;
          payload.mode = this.saleHeadListFormGroup.value.mode ? this.saleHeadListFormGroup.value.mode : 0;
          payload.accGSTIn = this.saleHeadListFormGroup.value.accGSTIn;
          payload.invValue = this.saleHeadListFormGroup.value.invValue ? this.saleHeadListFormGroup.value.invValue : 0;
          payload.tranTypeHeadId = 2, payload.tranTypeName = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["SalePrefix"], this.outwardService.GetOutwardHead(payload).subscribe(function (data) {
            _this11.dataList = data;

            if (_this11.dataList) {
              if (_this11.dataList.length > 0) {
                _this11.dataList.forEach(function (element) {
                  element.invValue = _this11.routeService.formatAmount(element.invValue ? Math.round(element.invValue) : '0.00');
                });
              }
            }

            _this11.isDataLoading = false;
          });
        }
      }, {
        key: "addOrEditSalesHead",
        value: function addOrEditSalesHead(salesHeadRowData, method) {
          var action = method;
          this.editObj = salesHeadRowData ? salesHeadRowData : {};
          this.outwardService.setSalesHead({
            salesHeadRowData: salesHeadRowData
          }, action);
          this.router.navigate(['pharma/outward/saleInvoiceEntry']);
          this.addOrEditFlag = true;
        }
      }, {
        key: "deleteSalesHead",
        value: function deleteSalesHead(salesHeadRowData) {
          var _this12 = this;

          this.outwardService.deleteSalesHeadById(salesHeadRowData.outwardHeadId).subscribe(function (data) {
            return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_8__["default"].isStatus200(data) ? _this12.refresh() : src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_8__["default"].isStatus404(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_7__["default"].warningMessage("Sales Head already deleted") : '';
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.getSaleList();
        }
      }, {
        key: "deleteTemplate",
        value: function deleteTemplate() {
          return this.deleteSalesHeadTemplate;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.saleHeadListFormGroup.reset();
        }
      }, {
        key: "addInvoice",
        value: function addInvoice() {
          this.outwardService.setSalesHead(null, null);
          this.router.navigate(['pharma/outward/saleInvoiceEntry']);
        }
      }, {
        key: "clikRegisters",
        value: function clikRegisters() {
          this.inwardService.sendRegData(null);
          this.router.navigate(['pharma/outward/saleRegister']);
        }
      }, {
        key: "getInvoicePDF2",
        value: function getInvoicePDF2(salesHeadRowData) {
          var _this13 = this;

          this.outwardService.invpdf(salesHeadRowData.outwardHeadId).subscribe(function (data) {
            if (data != null && data != undefined) {
              var pdf = data;
              pdf = _this13.sanitze.bypassSecurityTrustResourceUrl(pdf);
              _this13.pdfData = pdf.changingThisBreaksApplicationSecurity;
              _this13.pdfData = _this13.pdfData.replace(/\\/g, '/');
              _this13.pdfData = 'https://' + _this13.pdfData;
              window.open(_this13.pdfData, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=300,width=1000,height=1000");
            }
          });
        }
      }]);

      return SaleInvoiceListComponent;
    }();

    SaleInvoiceListComponent.ctorParameters = function () {
      return [{
        type: _outward_service__WEBPACK_IMPORTED_MODULE_9__["OutwardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_10__["InwardService"]
      }, {
        type: src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_11__["RouteService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]
      }, {
        type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_13__["HttpService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('deleteSalesHeadTemplate', {
      "static": false
    })], SaleInvoiceListComponent.prototype, "deleteSalesHeadTemplate", void 0);
    SaleInvoiceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-sale-invoice-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sale-invoice-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-invoice-list/sale-invoice-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sale-invoice-list.component.scss */
      "./src/app/distribution/out-ward/sale-invoice-list/sale-invoice-list.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], SaleInvoiceListComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-invoice/sale-invoice.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-invoice/sale-invoice.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardSaleInvoiceSaleInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .invoice2-form .mat-form-field, ::ng-deep .invoice2-form app-autocomplete {\n  width: 100%;\n}\n::ng-deep #t01 tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n::ng-deep #t01 tr:nth-child(odd) {\n  background-color: #fff;\n}\n.custom-autocomplete {\n  width: 100%;\n  /* Makes the component responsive */\n}\n.custom-autocomplete .options-table {\n  min-width: 400px;\n  /* Set the minimum width for the table */\n  max-width: 800px;\n  /* Optionally set a maximum width */\n  overflow-x: auto;\n  /* Allows horizontal scrolling if needed */\n}\n@media screen and (min-width: 950px) and (max-width: 1280px) {\n  .d_md_flex {\n    display: flex;\n  }\n}\n@media screen and (min-width: 700px) and (max-width: 1280px) {\n  .fieldCntrl mat-form-field {\n    min-width: 120px !important;\n  }\n}\n@media screen and (max-width: 600px) {\n  .w_116, .w_224 {\n    min-width: 100%;\n  }\n\n  .invoice2-form {\n    max-height: 400px;\n    overflow: auto;\n  }\n}\n.w_116 {\n  width: 110px !important;\n  margin: 0.5rem 0;\n}\n.w_224 {\n  width: 224px;\n  margin: 0.5rem 0;\n}\n.mb_50 {\n  margin-bottom: 50px;\n}\n@media screen and (min-width: 700px) and (max-width: 1200px) {\n  .tab_md {\n    min-width: 50% !important;\n  }\n}\n@media screen and (min-width: 610px) and (max-width: 1010px) {\n  .tab_width {\n    width: 100% !important;\n  }\n\n  .pur-values-form {\n    place-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtaW52b2ljZS9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXBwXFxkaXN0cmlidXRpb25cXG91dC13YXJkXFxzYWxlLWludm9pY2VcXHNhbGUtaW52b2ljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtaW52b2ljZS9zYWxlLWludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUk7RUFDRSxXQUFBO0FDUE47QURrQkU7RUFDRSx5QkFBQTtBQ2hCSjtBRG1CRTtFQUNFLHNCQUFBO0FDakJKO0FEb0JBO0VBQ0UsV0FBQTtFQUFhLG1DQUFBO0FDaEJmO0FEbUJBO0VBQ0UsZ0JBQUE7RUFBa0Isd0NBQUE7RUFDbEIsZ0JBQUE7RUFBa0IsbUNBQUE7RUFDbEIsZ0JBQUE7RUFBa0IsMENBQUE7QUNicEI7QURnQkE7RUFDRTtJQUNFLGFBQUE7RUNiRjtBQUNGO0FEZ0JBO0VBRUU7SUFFRSwyQkFBQTtFQ2hCRjtBQUNGO0FEbUJBO0VBQ0U7SUFDRSxlQUFBO0VDakJGOztFRG1CQTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFQ2hCRjtBQUNGO0FEd0JBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRDBCQTtFQUNFLG1CQUFBO0FDdkJGO0FEMEJBO0VBQ0U7SUFDRSx5QkFBQTtFQ3ZCRjtBQUNGO0FEMEJBO0VBQ0U7SUFDRSxzQkFBQTtFQ3hCRjs7RUQyQkE7SUFDRSxtQkFBQTtFQ3hCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtaW52b2ljZS9zYWxlLWludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuOjpuZy1kZWVwIHtcbiAgLmludm9pY2UyLWZvcm0ge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gZmxleC13cmFwOiB3cmFwO1xuICAgIC8vIGdhcDogMTVweDtcblxuICAgIC5tYXQtZm9ybS1maWVsZCwgYXBwLWF1dG9jb21wbGV0ZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxuICB9XG5cbiAgLy8gLnVzZXItZm9ybSB7XG4gIC8vICAgZGlzcGxheTogZmxleDtcbiAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvLyAgIGdhcDogMjBweDtcbiAgLy8gfVxuXG4gICN0MDEgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICB9XG5cbiAgI3QwMSB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuLmN1c3RvbS1hdXRvY29tcGxldGUge1xuICB3aWR0aDogMTAwJTsgLyogTWFrZXMgdGhlIGNvbXBvbmVudCByZXNwb25zaXZlICovXG59XG5cbi5jdXN0b20tYXV0b2NvbXBsZXRlIC5vcHRpb25zLXRhYmxlIHtcbiAgbWluLXdpZHRoOiA0MDBweDsgLyogU2V0IHRoZSBtaW5pbXVtIHdpZHRoIGZvciB0aGUgdGFibGUgKi9cbiAgbWF4LXdpZHRoOiA4MDBweDsgLyogT3B0aW9uYWxseSBzZXQgYSBtYXhpbXVtIHdpZHRoICovXG4gIG92ZXJmbG93LXg6IGF1dG87IC8qIEFsbG93cyBob3Jpem9udGFsIHNjcm9sbGluZyBpZiBuZWVkZWQgKi9cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5NTBweCkgYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XG4gIC5kX21kX2ZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3MDBweCkgYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XG4gIFxuICAuZmllbGRDbnRybFxuICAgbWF0LWZvcm0tZmllbGR7XG4gICAgbWluLXdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgLndfMTE2LCAud18yMjR7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgfVxuICAuaW52b2ljZTItZm9ybXtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuXG4vLyAuZmllbGRDbnRybCBtYXQtZm9ybS1maWVsZHtcbi8vICAgbWFyZ2luOiAwLjVyZW0gMDtcbi8vICAgbWluLXdpZHRoOiAyMjRweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4ud18xMTZ7XG4gIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4ud18yMjR7XG4gIHdpZHRoOiAyMjRweDtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuXG4ubWJfNTB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAudGFiX21ke1xuICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MTBweCkgYW5kIChtYXgtd2lkdGg6MTAxMHB4KSB7XG4gIC50YWJfd2lkdGh7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdXItdmFsdWVzLWZvcm17XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuIiwiOjpuZy1kZWVwIC5pbnZvaWNlMi1mb3JtIC5tYXQtZm9ybS1maWVsZCwgOjpuZy1kZWVwIC5pbnZvaWNlMi1mb3JtIGFwcC1hdXRvY29tcGxldGUge1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAjdDAxIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG46Om5nLWRlZXAgI3QwMSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jdXN0b20tYXV0b2NvbXBsZXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIE1ha2VzIHRoZSBjb21wb25lbnQgcmVzcG9uc2l2ZSAqL1xufVxuXG4uY3VzdG9tLWF1dG9jb21wbGV0ZSAub3B0aW9ucy10YWJsZSB7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIC8qIFNldCB0aGUgbWluaW11bSB3aWR0aCBmb3IgdGhlIHRhYmxlICovXG4gIG1heC13aWR0aDogODAwcHg7XG4gIC8qIE9wdGlvbmFsbHkgc2V0IGEgbWF4aW11bSB3aWR0aCAqL1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAvKiBBbGxvd3MgaG9yaXpvbnRhbCBzY3JvbGxpbmcgaWYgbmVlZGVkICovXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk1MHB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5kX21kX2ZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5maWVsZENudHJsIG1hdC1mb3JtLWZpZWxkIHtcbiAgICBtaW4td2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC53XzExNiwgLndfMjI0IHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaW52b2ljZTItZm9ybSB7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cbi53XzExNiB7XG4gIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4ud18yMjQge1xuICB3aWR0aDogMjI0cHg7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5tYl81MCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50YWJfbWQge1xuICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYxMHB4KSBhbmQgKG1heC13aWR0aDogMTAxMHB4KSB7XG4gIC50YWJfd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHVyLXZhbHVlcy1mb3JtIHtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-invoice/sale-invoice.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-invoice/sale-invoice.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SaleInvoiceComponent */

  /***/
  function srcAppDistributionOutWardSaleInvoiceSaleInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleInvoiceComponent", function () {
      return SaleInvoiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _outward_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../outward.service */
    "./src/app/distribution/out-ward/outward.service.ts");
    /* harmony import */


    var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/app-constants */
    "./src/app/shared/app-constants.ts");
    /* harmony import */


    var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/utils/response-utils */
    "./src/app/shared/utils/response-utils.ts");
    /* harmony import */


    var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/utils/app-message-utils */
    "./src/app/shared/utils/app-message-utils.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Master_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../Master/master.service */
    "./src/app/distribution/Master/master.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../_files/dropdowns.json */
    "./src/app/_files/dropdowns.json");

    var _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../_files/dropdowns.json */
    "./src/app/_files/dropdowns.json", 1);
    /* harmony import */


    var src_app_shared_components_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.service */
    "./src/app/shared/components/dialog/dialog.service.ts");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../in-ward/in-ward.service */
    "./src/app/distribution/in-ward/in-ward.service.ts");
    /* harmony import */


    var src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/components/table/table-model */
    "./src/app/shared/components/table/table-model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/app/shared/http-services/out-ward/out-ward-http.service */
    "./src/app/shared/http-services/out-ward/out-ward-http.service.ts");
    /* harmony import */


    var src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/app/shared/services/route.service */
    "./src/app/shared/services/route.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/app/shared/services/http.service */
    "./src/app/shared/services/http.service.ts");

    var SaleInvoiceComponent = /*#__PURE__*/function () {
      function SaleInvoiceComponent(formBuilder, inwardservice, outwardService, router, masterService, dialogService, dialog, inwardService, datePipe, service, routeService, todayDate) {
        var _this14 = this;

        _classCallCheck(this, SaleInvoiceComponent);

        this.formBuilder = formBuilder;
        this.inwardservice = inwardservice;
        this.outwardService = outwardService;
        this.router = router;
        this.masterService = masterService;
        this.dialogService = dialogService;
        this.dialog = dialog;
        this.inwardService = inwardService;
        this.datePipe = datePipe;
        this.service = service;
        this.routeService = routeService;
        this.todayDate = todayDate; //DropDowns

        this.modeDropDown = _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_10__["mode"];
        this.discountDropDown = _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_10__["discount"];
        this.filteredCompanyMulti = new rxjs__WEBPACK_IMPORTED_MODULE_9__["ReplaySubject"](1);
        this.discountType1 = {
          label: 'Discount Type 1',
          isRequired: true,
          dataSourceFn: function dataSourceFn() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(_toConsumableArray(_files_dropdowns_json__WEBPACK_IMPORTED_MODULE_10__["discountType"]));
          },
          isStaticType: true,
          keyString: 'name'
        }; // Variables

        this.CompanyTabMultiFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.compGroupName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.accName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.deliveryTo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.batches = [];
        this.selectedProdid = 0;
        this.displayProd = false;
        this.showAutoCompleteData = false;
        this.editObj = {}; // buttons

        this.outwardHeadBtnText = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["SaveText"];
        this.outwardDtlBtnSaveCloseTxt = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["SaveCloseText"];
        this.outwardFinalSaveBtnText = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["SaveText"];
        this.outwardDtlBtnSaveContinueTxt = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["SaveContinueText"]; // Subscription for unsubscribing

        this.subscriptions = [];
        this.batchProductDetails = [];
        this.batch$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])([]);
        this.isBtnDisable = false;
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"](); //Custom Accounts Autocomplete 

        this.customAccountAutoCompleteDef = {
          label: 'Customer Name',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this14.inwardservice.getCustomAccountsByName(name);
          },
          minCount: 2,
          keyString: 'accName'
        };
        this.customAccountAutoCompleteDefD = {
          label: 'Delivery To',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this14.inwardservice.getCustomAccountsByName(name);
          },
          minCount: 2,
          keyString: 'deliveryTo'
        }; //Custom Account  Autocomplete Options Table View

        this.customAccountsOptsTable = {
          panelWidth: 800,
          columns: [{
            name: 'Customer Name',
            value: function value(obj) {
              return obj['accName'] ? obj['accName'] : '';
            },
            fxFlex: 34,
            fxFlex1: 34,
            isKeyColumn: true
          }, {
            name: 'City Name',
            value: function value(obj) {
              return obj['cityName'] ? obj['cityName'] : '';
            },
            fxFlex: 14,
            fxFlex1: 14
          }, {
            name: 'Mobile',
            value: function value(obj) {
              return obj['accMobile'] ? obj['accMobile'] : '';
            },
            fxFlex: 16,
            fxFlex1: 16
          }, {
            name: 'GSTIN',
            value: function value(obj) {
              return obj['accGstIn'] ? obj['accGstIn'] : '';
            },
            fxFlex: 24,
            fxFlex1: 24
          }, {
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['accShName'] ? obj['accShName'] : '';
            },
            fxFlex: 12,
            fxFlex1: 12
          }]
        };
        this.customAccountsOptsTableD = {
          panelWidth: 300,
          columns: [{
            name: 'Customer Name',
            value: function value(obj) {
              return obj['accName'] ? obj['accName'] : '';
            },
            fxFlex: 32,
            fxFlex1: 32,
            isKeyColumn: true
          }, {
            name: 'Delivery To',
            value: function value(obj) {
              return obj['delvTo'] ? obj['delvTo'] : '';
            },
            fxFlex: 32,
            fxFlex1: 32,
            isKeyColumn: true
          }, // { name: 'City Name', value: (obj) => obj['cityName'] ? obj['cityName'] : '', fxFlex: 50 },
          // { name: 'Mobile', value: (obj) => obj['accMobile'] ? obj['accMobile'] : '', fxFlex: 50 },
          // { name: 'GSTIN', value: (obj) => obj['accGstIn'] ? obj['accGstIn'] : '', fxFlex: 50 },
          {
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['accShName'] ? obj['accShName'] : '';
            },
            fxFlex: 32,
            fxFlex1: 32
          }]
        }; // Company  Autocomplete

        this.companyGroupAutoCompleteDef = {
          label: 'Company',
          isRequired: true,
          isStaticType: true,
          dataSourceFn: function dataSourceFn() {
            return _this14.masterService.getAllCompanyMaster();
          },
          keyString: 'name',
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          minCount: 2
        }; //Company Autocomplete Options Table View 

        this.companyGroupOptsTable = {
          panelWidth: 300,
          columns: [{
            name: 'Company',
            value: function value(obj) {
              return obj['name'] ? obj['name'] : '';
            },
            fxFlex: 50,
            fxFlex1: 50,
            isKeyColumn: true
          }, {
            name: 'Company Group',
            value: function value(obj) {
              return obj['companyGroups']['name'] ? obj['companyGroups']['name'] : '';
            },
            fxFlex: 50,
            fxFlex1: 50
          }]
        }; //mode AutocompleteDef

        this.modeAutoCompleteDef = {
          label: 'Mode',
          isRequired: true,
          dataSourceFn: function dataSourceFn() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(_toConsumableArray(_files_dropdowns_json__WEBPACK_IMPORTED_MODULE_10__["mode"]));
          },
          isStaticType: true,
          keyString: 'name'
        }; // tranOutIssQty(value: string): void {
        //   // Allow only valid input up to two decimal places
        //   const numericValue = parseFloat(value);
        //   if (!isNaN(numericValue)) {
        //     // Limit the decimal places to two
        //     const formattedValue = numericValue.toFixed(2);
        //     // Update the form control with the formatted value
        //     this.saleInvoiceDetailFormGroup.get('issQty').setValue(formattedValue, { emitEvent: false });
        //   }
        // }
        //Details Table List View 

        this.tableDefinition = {
          columns: [{
            id: 'productMaster.prodName',
            name: 'Product Name',
            value: function value(obj) {
              return obj['prodName'] ? obj['prodName'] : '';
            }
          }, {
            id: 'productMaster.prodShName',
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['prodShName'] ? obj['prodShName'] ? obj['prodShName'] : '' : '';
            }
          }, {
            id: 'batch',
            name: 'Batch No',
            value: function value(obj) {
              return obj['batch'] ? obj['batch'] : '';
            }
          }, {
            id: 'expdate',
            name: 'Exp.Date',
            value: function value(obj) {
              return obj['expdate'] ? _this14.datePipe.transform(obj['expdate'], 'MM-yy') : '';
            }
          }, {
            id: 'issQty',
            name: 'Qty',
            value: function value(obj) {
              var qty = obj['issQty'] ? obj['issQty'] : '';
              return qty ? _this14.routeService.formatAmount(qty) : ''; // return qty ? parseFloat(qty).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
            }
          }, {
            id: 'issQtyDisc',
            name: 'Qty.Disc.',
            value: function value(obj) {
              var qtydisc = obj['issQtyDisc'] ? obj['issQtyDisc'] : '';
              return qtydisc ? _this14.routeService.formatAmount(qtydisc) : ''; // return qtydisc ? parseFloat(qtydisc).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
            }
          }, {
            id: 'tranRate',
            name: 'Inv.Rate.',
            value: function value(obj) {
              var tranrate = obj['tranRate'] ? obj['tranRate'] : '';
              return tranrate ? _this14.routeService.formatAmount(tranrate) : ''; // return tranrate ? parseFloat(tranrate).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
            }
          }, {
            id: 'mrp',
            name: 'MRP',
            value: function value(obj) {
              var mrp = obj['mrp'] ? obj['mrp'] : '';
              return mrp ? _this14.routeService.formatAmount(mrp) : ''; // return mrp ? parseFloat(mrp).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
            }
          }, {
            id: 'salDisc',
            name: 'Disc',
            value: function value(obj) {
              var saledisc = obj['salDisc'] ? obj['salDisc'] : '';
              return saledisc ? _this14.routeService.formatAmount(saledisc) : ''; // return saledisc ? parseFloat(saledisc).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
            }
          }, {
            id: 'tax',
            name: 'Tax(%)',
            value: function value(obj) {
              var tax = obj['tax'] ? obj['tax'] : '';
              return tax ? _this14.routeService.formatAmount(tax) : ''; // return tax ? parseFloat(tax).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
            }
          }, {
            id: 'grsValue',
            name: 'Gross Value',
            value: function value(obj) {
              var grsValue = obj['grsValue'] ? obj['grsValue'] : '';
              return grsValue ? _this14.routeService.formatAmount(grsValue) : ''; // return grsValue ? parseFloat(grsValue).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
            }
          }, {
            id: 'action',
            name: 'Action',
            disableSort: true,
            actions: [{
              method: function method(data) {
                return _this14.addOrEdit(data);
              },
              name: 'Edit',
              icon: 'assets/new_edit2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_14__["ActionStyle"].EDIT
            }, {
              isDisabled: function isDisabled(data) {
                return _this14.isDeleteDisabled();
              },
              method: function method(obj) {
                return _this14.deleteSalesDetailItem(obj);
              },
              name: 'Delete',
              icon: 'assets/new_delete2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_14__["ActionStyle"].DELETE,
              dialogProperties: {
                title: 'Delete Sales Invoice Detail',
                templateRef: function templateRef() {
                  return _this14.deleteTemplate();
                }
              }
            }, {
              name: 'Share',
              icon: 'share',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_14__["ActionStyle"].SHARE
            }]
          }]
        }; //Custom Products Autocomplete

        this.customProductAutoCompleteDef = {
          label: 'Product Name',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this14.showAutoComplete(name);
          },
          minCount: 2,
          keyString: 'prodName'
        }; //Custom Products Autocomplete Options Table View

        this.customProductOptsTable = {
          panelWidth: 600,
          columns: [{
            name: 'Product Name',
            value: function value(obj) {
              return obj['prodName'] ? obj['prodName'] : '';
            },
            fxFlex: 24,
            fxFlex1: 24,
            isKeyColumn: true
          }, {
            name: 'Product Pack',
            value: function value(obj) {
              return obj['prodPackName'] ? obj['prodPackName'] : '';
            },
            fxFlex: 15,
            fxFlex1: 15
          }, {
            name: 'Qnt',
            value: function value(obj) {
              return obj['closingQty'] ? obj['closingQty'] : '';
            },
            fxFlex: 9,
            fxFlex1: 9
          }, {
            name: 'HSN Code',
            value: function value(obj) {
              return obj['hsncode'] ? obj['hsncode'] : '';
            },
            fxFlex: 13,
            fxFlex1: 13
          }, {
            name: 'Tax%',
            value: function value(obj) {
              return obj['tax'] ? obj['tax'] : '';
            },
            fxFlex: 9,
            fxFlex1: 9
          }, {
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['prodShName'] ? obj['prodShName'] : '';
            },
            fxFlex: 13,
            fxFlex1: 13
          }, {
            name: 'CompanyName',
            value: function value(obj) {
              return obj['compName'] ? obj['compName'] : '';
            },
            fxFlex: 17,
            fxFlex1: 17
          }]
        }; //Batch Autocopmlete

        this.batchAutoCompleteDef = {
          label: 'Batch',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this14.outwardService.GetStockByProductsId(name, _this14.selectedProdid, _this14.datePipe.transform(_this14.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd'));
          },
          keyString: 'batch',
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }; //Batch Autocomplete Options Table View

        this.batchOptsTable = {
          panelWidth: 700,
          columns: [{
            name: 'Batch',
            value: function value(obj) {
              return obj['batch'] ? obj['batch'] : '';
            },
            fxFlex: 20,
            fxFlex1: 20,
            isKeyColumn: true
          }, {
            name: 'Exp.Date',
            value: function value(obj) {
              return obj['expdate'] ? _this14.datePipe.transform(obj['expdate'], 'MM-yy') : '';
            },
            fxFlex: 15,
            fxFlex1: 15
          }, // { name: 'PUR.No.', value: (obj) => obj['invNo'] ? obj['invNo'] : '', fxFlex: 15,fxFlex1:15 },
          // { name: 'PUR.Date', value: (obj) => obj['inwardDate'] ? this.datePipe.transform(obj['inwardDate'], 'dd-MM-yyyy') : '', fxFlex: 15,fxFlex1:15 },
          {
            name: 'Cl.Qty.',
            value: function value(obj) {
              return obj['closingQty'] ? obj['closingQty'] : '';
            },
            fxFlex: 15,
            fxFlex1: 15
          }, {
            name: 'Cl.Qty.Disc.',
            value: function value(obj) {
              return obj['closingQtyDisc'] ? obj['closingQtyDisc'] : '';
            },
            fxFlex: 15,
            fxFlex1: 15
          }, {
            name: "Sale Rate",
            value: function value(obj) {
              return obj['saleRate'] ? obj['saleRate'] : '';
            },
            fxFlex: 35,
            fxFlex1: 35
          }, {
            name: "MRP",
            value: function value(obj) {
              return obj['mrp'] ? obj['mrp'] : '';
            },
            fxFlex: 7,
            fxFlex1: 7
          }, {
            name: "HSN Code",
            value: function value(obj) {
              return obj['hsncode'] ? obj['hsncode'] : '';
            },
            fxFlex: 25,
            fxFlex1: 25
          }, {
            name: "Tax%",
            value: function value(obj) {
              return obj['tax'] ? obj['tax'] : '';
            },
            fxFlex: 7,
            fxFlex1: 7
          }, {
            name: "Tran Rate",
            value: function value(obj) {
              return obj['purRate'] ? obj['purRate'] : '';
            },
            fxFlex: 25,
            fxFlex1: 25
          }, {
            name: "Disc(%)",
            value: function value(obj) {
              return obj['closingQtyDisc'] ? obj['closingQtyDisc'] : '';
            },
            fxFlex: 25,
            fxFlex1: 25
          }]
        }; // discount Autocomplete View for Dropdown

        this.discountAutoCompleteDef = {
          label: 'Discount',
          isRequired: true,
          dataSourceFn: function dataSourceFn() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(_toConsumableArray(_files_dropdowns_json__WEBPACK_IMPORTED_MODULE_10__["discount"]));
          },
          isStaticType: true,
          keyString: 'name'
        }; // customAccountDedAdj AutoComplete

        this.customAccountDedAdjAutoCompleteDef = {
          label: 'Ded. Adj. Led.',
          // dataSourceFn: (name) => this.inwardService.getCustomAccountsByName(name, PurchasePrefix),
          dataSourceFn: function dataSourceFn(name) {
            return _this14.inwardService.getCustomAccountsByName(name);
          },
          minCount: 2,
          keyString: 'accName'
        }; // customAccountAddAdj AutoComplete

        this.customAccountAddAdjAutoCompleteDef = {
          label: 'Cr. Adj. Led.',
          // dataSourceFn: (name) => this.inwardService.getCustomAccountsByName(name, PurchasePrefix),
          dataSourceFn: function dataSourceFn(name) {
            return _this14.inwardService.getCustomAccountsByName(name);
          },
          minCount: 2,
          keyString: 'accName'
        };
      }

      _createClass(SaleInvoiceComponent, [{
        key: "companyTab",
        value: function companyTab(event) {
          var _this15 = this;

          if (event.keyCode === 9) {
            var statetab = this.CompanyTab.options;
            var result = statetab.find(function (x) {
              return x.active === true;
            });
            this.saleInvoiceHeadFormGroup.controls.compId.setValue(result.value);
            var data = this.Companydata.find(function (x) {
              return x.compId == result.value;
            });

            if (data) {
              this.compGroupName.setValue(data.compGroupName);
            }
          } else if (event.keyCode === 13) {
            var _data = this.Companydata.find(function (x) {
              return x.compId == _this15.saleInvoiceHeadFormGroup.controls.compId.value;
            });

            if (_data) {
              this.compGroupName.setValue(_data.compGroupName);
            } // setTimeout(() => {
            //   this.boxfocus.nativeElement.focus();
            // }, 1000);

          }
        }
      }, {
        key: "companychange",
        value: function companychange(value) {
          if (value.value) {
            var data = this.Companydata.find(function (x) {
              return x.compId == value.value;
            });

            if (data) {
              this.compGroupName.setValue(data.compGroupName);
            }
          }
        }
      }, {
        key: "filterCompanyMulti",
        value: function filterCompanyMulti() {
          if (!this.Companydata) {
            return;
          } // get the search keyword


          var search = this.CompanyTabMultiFilterCtrl.value;

          if (!search) {
            this.filteredCompanyMulti.next(this.Companydata.slice());
            return;
          } else {
            search = search.toLowerCase();
          } // filter the banks


          this.filteredCompanyMulti.next(this.Companydata.filter(function (bank) {
            return bank.compName.toLowerCase().indexOf(search) > -1;
          }));
        }
      }, {
        key: "getAllCompMaster",
        value: function getAllCompMaster() {
          var _this16 = this;

          this.masterService.getAllCompanyMaster().subscribe(function (data) {
            _this16.Companydata = data;

            _this16.filteredCompanyMulti.next(_this16.Companydata.slice());
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));

          if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.today; //this.firmPreferences.finEdate;
          }

          this.today = this.todayDate.localDate(); // console.log(this.firmPreferences , 'this.firmPreferences');

          this.getAllCompMaster();
          document.getElementById('deletePopup').style.display = 'none';
          this.saleInvoiceHeadFormGroup = this.buildOutWardEntryHeadFormGroup();
          this.saleInvoiceDetailFormGroup = this.buildOutWardEntryDetailFormGroup();
          this.saleInvoiceFinalSaveFormGroup = this.buildOutWardEntryFinalSaveFormGroup();
          this.subscriptions.push(this.outwardService.updateSaleHead$.subscribe(function (result) {
            if (result && Object.keys(result.salesHeadRowData).length > 0) {
              _this17.salesInvoiceRowData = result.salesHeadRowData;
              _this17.actions = result.action;
              _this17.outwardHeadBtnText = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["UpdateText"];
              _this17.outwardFinalSaveBtnText = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["UpdateText"];
              _this17.outwardHeadId = _this17.salesInvoiceRowData.outwardHeadId;

              _this17.getSalesDetailTableList(_this17.outwardHeadId);

              setTimeout(function () {
                if (_this17.actions == "delete") {
                  _this17.confirmDelete();
                }
              }, 1500);
            }
          }));
          this.subscriptions.push(this.accName.valueChanges.subscribe(function (result) {
            if (result && typeof result === 'object') {
              _this17.bindCustomerDetails(result);
            }
          }));
          this.subscriptions.push(this.deliveryTo.valueChanges.subscribe(function (result) {
            if (result && typeof result === 'object') {
              _this17.deliveryTo.setValue(result.accName);
            }
          }));
          this.saleInvoiceDetailFormGroup.get('batch').setValue('');
          this.subscriptions.push(this.saleInvoiceDetailFormGroup.get('batch').valueChanges.subscribe(function (result) {
            console.log("prodIdData", result, _this17.saleInvoiceDetailFormGroup.get('batch').dirty);

            if (result && typeof result === 'object') {
              _this17.bindBatchDetails(result);
            }
          })); // this.getbatch$();

          this.CompanyTabMultiFilterCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this17.filterCompanyMulti();
          });
          this.saleInvoiceDetailFormGroup.get('prodId').valueChanges.subscribe(function (result) {
            console.log("prodIdData", result);

            if (result && _this17.saleInvoiceDetailFormGroup.get('prodId').dirty) {
              _this17.showAutoCompleteData = true;
            }

            if (result && typeof result === 'object') {
              _this17.selectedProdid = result.prodId;

              _this17.saleInvoiceDetailFormGroup.get('batch').setValue('');

              _this17.bindProductDetails(result);

              console.log(_this17.batches);
            }
          });
          this.saleInvoiceDetailFormGroup.get('expdate').valueChanges.subscribe(function (date) {
            console.log(/^(0?[1-9]|1[012])[\/\-]\d{4}$/.test(date));
            _this17.dateError = /^(0?[1-9]|1[012])[\/\-]\d{4}$/.test(date);

            _this17.saleInvoiceDetailFormGroup.get('expdate').setErrors(null);

            if (!_this17.dateError) {
              _this17.saleInvoiceDetailFormGroup.get('expdate').setErrors({
                incorrect: true
              });
            }
          });
          this.getTranlastdate();
        } // Head Form Group of controls

      }, {
        key: "buildOutWardEntryHeadFormGroup",
        value: function buildOutWardEntryHeadFormGroup() {
          return this.formBuilder.group({
            outwardDate: [this.today],
            accId: [''],
            accGstIn: [{
              value: '',
              disabled: true
            }],
            accShName: [{
              value: '',
              disabled: true
            }],
            cityId: [{
              value: '',
              disabled: true
            }],
            accMobile: [{
              value: '',
              disabled: true
            }],
            companyMaster: [''],
            deliveryTo: [''],
            mode: [''],
            prodId: [''],
            expdate: [''],
            compId: ['']
          });
        } // patch the customer details onto the other controls

      }, {
        key: "bindCustomerDetails",
        value: function bindCustomerDetails(data) {
          console.log(data);
          this.saleInvoiceHeadFormGroup.patchValue({
            accName: data.accName,
            compId: data.compId,
            accShName: data.accShName,
            cityId: data.cityName,
            accMobile: data.accMobile,
            accGstIn: data.accGstIn,
            deliveryTo: data.delvTo
          });
        } // Save or Update the Sales Head

      }, {
        key: "onSaveOrUpdateSalesHead",
        value: function onSaveOrUpdateSalesHead() {
          var _this18 = this;

          var postOutwardObj = this.saleInvoiceHeadFormGroup.value;
          console.log(this.deliveryTo);
          var date = "";

          if (this.outwardHeadBtnText == 'Update') {
            date = postOutwardObj.outwardDate.split("T");
          } else {
            date = postOutwardObj.outwardDate ? postOutwardObj.outwardDate : null;
          }

          var payload = {
            "outwardHeadId": this.outwardHeadBtnText == 'Update' ? this.outwardHeadId : 0,
            "outwardDate": this.outwardHeadBtnText == 'Update' ? date[0] : this.datePipe.transform(date, 'yyyy-MM-dd'),
            "tranTypeHeadId": 2,
            "tranTypeName": src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["SalePrefix"],
            "outwardHeadNo": this.outwardHead ? this.outwardHead.outwardHeadNo : '',
            "compId": postOutwardObj.compId ? postOutwardObj.compId : 0,
            "invNo": " ",
            "invDate": postOutwardObj.outwardDate ? this.datePipe.transform(postOutwardObj.outwardDate, 'yyyy-MM-dd') : null,
            "accId": this.accName.value.accId,
            "mode": postOutwardObj.mode.code ? postOutwardObj.mode.code == 'Cash' ? 1 : 2 : 1,
            "taxCategoryId": this.accName.value.taxcategoryId,
            "outwardStatus": 0,
            "isEligible": 0,
            "isDeleted": 0,
            "doctorId": 0,
            "inwardHeadId": 0,
            "transferFlag": 0,
            "wbillDate": this.today,
            "lrNo": " ",
            "lrDate": this.today,
            "wbillNo": " ",
            "transportId": 0,
            "noofCases": 0,
            "delvTo": postOutwardObj.deliveryTo,
            "grsValue": 0,
            "discValue": 0,
            "disc1Value": 0,
            "taxValue": 0,
            "frtValue": this.saleInvoiceFinalSaveFormGroup.value.frtValue ? this.saleInvoiceFinalSaveFormGroup.value.frtValue : 0,
            "hamaliValue": this.saleInvoiceFinalSaveFormGroup.value.hamaliValue ? this.saleInvoiceFinalSaveFormGroup.value.hamaliValue : 0,
            "otherAddDescription": " ",
            "inwardHeadNo": 0,
            "otherCharges": this.saleInvoiceFinalSaveFormGroup.value.otherCharges ? this.saleInvoiceFinalSaveFormGroup.value.otherCharges : 0,
            "otherAdd": this.saleInvoiceFinalSaveFormGroup.value.otherAdd ? this.saleInvoiceFinalSaveFormGroup.value.otherAdd : 0,
            "otherAddAccId": this.saleInvoiceFinalSaveFormGroup.value.otherAddAccId ? this.saleInvoiceFinalSaveFormGroup.value.otherAddAccId : 0,
            "otherDedDescription": " ",
            "otherDed": this.saleInvoiceFinalSaveFormGroup.value.otherDed ? this.saleInvoiceFinalSaveFormGroup.value.otherDed : 0,
            "otherDedAccId": this.saleInvoiceFinalSaveFormGroup.value.otherDedAccId ? this.saleInvoiceFinalSaveFormGroup.value.otherDedAccId : 0,
            "taxUploadStatus": 0,
            "netValue": 0,
            "purValue": 0,
            "rndValue": 0,
            "invValue": 0,
            "rcptAmount": 0,
            "remarks": this.saleInvoiceFinalSaveFormGroup.value.remarks ? this.saleInvoiceFinalSaveFormGroup.value.remarks : '',
            "postFlag": 0,
            "firmId": 0,
            "trFirmId": 0,
            "isActive": 0,
            "firmYearId": 0,
            "adjAmount": 0,
            "isEditable": 0,
            "isDeletable": 0
          };
          console.log(payload);
          this.outwardHeadObj = payload;
          this.subscriptions.push(this.outwardService.postOrUpdateOutwardHead(payload).subscribe(function (data) {
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) ? _this18.showSalesDetailTemplate(data) : src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus409(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].warningMessage('Outward Entry Head already exists', _this18.formAlertId) : '';
            console.log(data);
            _this18.outwardHeadId = data.resultObject;

            _this18.getSalesDetailTableList(_this18.outwardHeadId);
          }));
        }
      }, {
        key: "onResetForm",
        value: function onResetForm() {
          this.saleInvoiceHeadFormGroup.reset();
        }
      }, {
        key: "bindOutWardHeadControls",
        value: function bindOutWardHeadControls(outwardHead) {
          var _this19 = this;

          this.accName.setValue(outwardHead.accName);
          this.saleInvoiceHeadFormGroup.patchValue({
            outwardDate: this.datePipe.transform(outwardHead.outwardDate, 'yyyy-MM-dd'),
            accGstIn: outwardHead.ltoNo,
            accShName: outwardHead.accShName,
            cityId: outwardHead.cityName,
            accMobile: outwardHead.accMobile,
            mode: outwardHead.mode === 1 ? 'Cash' : 'Credit',
            deliveryTo: outwardHead.delvTo
          });
          setTimeout(function () {
            // this.deliveryTo.setValue(outwardHead.delvTo);
            _this19.saleInvoiceHeadFormGroup.controls['compId'].setValue(outwardHead.compId);
          }, 1000);
          this.saleInvoiceHeadFormGroup.controls['outwardDate'].disable();
        }
        /* HEAD END */

        /* DETAIL START */

      }, {
        key: "buildOutWardEntryDetailFormGroup",
        value: function buildOutWardEntryDetailFormGroup() {
          return this.formBuilder.group({
            prodId: [''],
            prodShName: [{
              value: '',
              disabled: true
            }],
            prodPackName: [{
              value: '',
              disabled: true
            }],
            batch: [''],
            expdate: [{
              value: '',
              disabled: true
            }],
            issQty: [''],
            issQtyDisc: [''],
            tranRate: [''],
            actRate: [{
              value: 0,
              disabled: true
            }],
            tax: [{
              value: '',
              disabled: true
            }],
            mrp: [{
              value: '',
              disabled: true
            }],
            hsncode: [{
              value: '',
              disabled: true
            }],
            hsnId: [''],
            salDiscType: [''],
            salDiscType1: [this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences.allowDisc2 !== 0 ? '' : 1],
            salDisc1: [''],
            salDisc: [''],
            compId: ['']
          });
        } // get the List of items onto the Detail Table

      }, {
        key: "getSalesDetailTableList",
        value: function getSalesDetailTableList(salesHeadId) {
          var _this20 = this;

          this.subscriptions.push(this.outwardService.getOutwardEntryDetails(salesHeadId).subscribe(function (result) {
            if (result && Object.keys(result).length > 0) {
              //head
              _this20.outwardHead = result.outwardHead;
              _this20.invValue = result.outwardHead.invValue;
              _this20.roundedValue = _this20.routeService.formatAmount(result.outwardHead.invValue ? Math.round(result.outwardHead.invValue) : '0.00'); // this.outwardHeadBtnText = UpdateText;

              _this20.bindOutWardHeadControls(_this20.outwardHead); //detail 


              _this20.outWardDetail = result.outwardDetails; // this.outwardDtlBtnSaveCloseTxt = UpdateCloseText;
              // this.outwardDtlBtnSaveCloseTxt.includes
              // this.outwardDtlBtnSaveContinueTxt = UpdateContinueText;
              // taxes
              // this.outwardFinalSaveBtnText = UpdateText;

              _this20.outwardPretaxes = result.outwardPreTaxes; // this.outwardPretaxes.outwardTaxes = [];
              // this.outwardPretaxes.outwardTaxes.push(result.outwardTaxes);
              // console.log(this.outwardPretaxes);
              // let taxes = result.outwardPretaxs[0].outwardTaxs;

              _this20.outwardTaxes = result.outwardTaxes;
              var taxes = result.outwardTaxes;
              if (taxes && taxes.length > 0) taxes.forEach(function (tax) {
                if (tax.taxStakeName && tax.taxStakeName === 'IGST') {
                  _this20.hasIGST = true;
                }
              });

              _this20.bindFinalSaveControls(_this20.outwardHead);
            } else {
              _this20.outWardDetail = [];
            }
          }));
        } //  "Add" or "Edit" the Detail Item

      }, {
        key: "addOrEdit",
        value: function addOrEdit(data) {
          var _this21 = this;

          console.log(data);
          this.showSalesDetailTemplate("Update");
          this.outwardDetailId = data.outwardDetailId;
          this.updateDetailData = data;
          this.selectedProdid = data.prodId;
          this.outwardDtlBtnSaveCloseTxt = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["UpdateCloseText"];
          this.outwardDtlBtnSaveContinueTxt = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["UpdateContinueText"];
          this.saleInvoiceDetailFormGroup.patchValue({
            prodId: data.prodName,
            prodShName: data.prodShName,
            prodPackName: data.prodPackName,
            batch: data.batch,
            expdate: data.expiryDate,
            issQty: this.routeService.formatAmount(data.issQty),
            issQtyDisc: this.routeService.formatAmount(data.issQtyDisc),
            tranRate: this.routeService.formatAmount(data.tranRate),
            actRate: this.routeService.formatAmount(data.actRate),
            salDisc: this.routeService.formatAmount(data.salDisc),
            salDiscType: data.salDiscType,
            hsncode: data.hsncode,
            tax: this.routeService.formatAmount(data.tax),
            mrp: this.routeService.formatAmount(data.mrp),
            salDiscType1: this.firmPreferences.allowDisc2 != 0 ? data.salDiscType1 : 1,
            salDisc1: this.routeService.formatAmount(data.salDisc1)
          });
          setTimeout(function () {
            _this21.saleInvoiceDetailFormGroup.controls['batch'].setValue(data.batch);
          }, 1000);
        }
      }, {
        key: "expdate",
        value: function expdate(event) {
          var str = event.substring(0, event.length - 3);
          var dateObj = new Date();
          var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
          var year = ('0' + dateObj.getFullYear()).slice(-2);
          var fid = event.slice(-2);
          var mon = event.slice(0, 2);

          if (event.length < 5) {
            this.saleInvoiceDetailFormGroup.get('expdate').setErrors({
              'greaterValue1': true
            });
          } else {
            if (year > fid) {
              this.saleInvoiceDetailFormGroup.get('expdate').setErrors({
                'greaterValue': true
              });
            } else if (str > 12) {
              this.saleInvoiceDetailFormGroup.get('expdate').setErrors({
                'greaterValue1': true
              });
            } else if (year === fid && mon < month) {
              this.saleInvoiceDetailFormGroup.get('expdate').setErrors({
                'greaterValue1': true
              });
            } else {
              this.saleInvoiceDetailFormGroup.get('expdate').setErrors(null);
              var output = [event.slice(0, 3), 20, event.slice(3)].join('');
              var data = '01' + '-' + output; //    this.expdatefiled = this.convert1(data);
              // this.expdatefiled =  this.datePipe.transform(this.expdatefiled, 'yyyy-MM-dd');
            }
          }
        }
      }, {
        key: "isDeleteDisabled",
        value: function isDeleteDisabled() {
          return false;
        }
      }, {
        key: "deleteTemplate",
        value: function deleteTemplate() {
          return this.deleteSalesHeadTemplate;
        }
      }, {
        key: "deleteSalesDetailItem",
        value: function deleteSalesDetailItem(item) {
          var _this22 = this;

          this.outwardService.deleteOutwardDetailItem(item.outwardDetailId).subscribe(function (data) {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data)) {
              _this22.refresh();
            }

            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].warningMessage('Sales Detail already deleted') : '';
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.accName.setValue('');
          this.outWardDetail = [];
          this.saleInvoiceHeadFormGroup.reset(); //   this.invoiceHeadDetails(this.invoiceHeadId);

          this.getSalesDetailTableList(this.outwardHeadId);
        } // To open the Detail PopUp

      }, {
        key: "showSalesDetailTemplate",
        value: function showSalesDetailTemplate(flag) {
          var _this23 = this;

          this.dialogService.closeAllDialogues();
          this.outwardDetailId = 0;
          this.updateDetailData = '';
          this.selectedProdid = 0;
          this.showAutoCompleteData = false;
          this.saleInvoiceDetailFormGroup.reset();
          var dialogInputs = {};
          dialogInputs.title = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["addItem"];
          dialogInputs.closeBtnLabel = 'Close';
          dialogInputs.dialogClass = src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogClass"].MEDIUM;

          dialogInputs.templateRef = function () {
            return _this23.saleEntryDetailTemplate;
          };

          dialogInputs.buttonTemplates = [{
            templateRef: this.saleEntryDetailButtonTemplate
          }];
          this.dialogService.showDialogue(dialogInputs, {
            disableClose: true
          });
          this.outwardDtlBtnSaveCloseTxt = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["SaveCloseText"];
          this.outwardDtlBtnSaveContinueTxt = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["SaveContinueText"];
        } // To patch the product details onto the other controls

      }, {
        key: "bindProductDetails",
        value: function bindProductDetails(data) {
          this.prodData = data;
          this.saleInvoiceDetailFormGroup.patchValue({
            prodShName: data.prodShName,
            prodPackName: data.prodPackName,
            hsncode: data.hsncode,
            mrp: 0,
            expdate: '',
            tranRate: 0,
            issQty: '',
            issQtyDisc: '',
            actRate: 0,
            salDiscType: '',
            salDiscType1: this.firmPreferences.allowDisc2 != 0 ? '' : 1,
            salDisc1: '',
            salDisc: '',
            batch: ''
          });
        } //mthod

      }, {
        key: "showAutoComplete",
        value: function showAutoComplete(name) {
          if (this.showAutoCompleteData) {
            var _Date = this.saleInvoiceHeadFormGroup.controls.outwardDate.value;

            if (this.saleInvoiceHeadFormGroup.controls.outwardDate.value) {
              _Date = this.datePipe.transform(this.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd');
            }

            return this.outwardService.GetStockByProducts(name, this.saleInvoiceHeadFormGroup.controls.compId.value, _Date);
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])([]);
          }
        } // To patch the batch details onto the other controls`

      }, {
        key: "bindBatchDetails",
        value: function bindBatchDetails(data) {
          this.saleInvoiceDetailFormGroup.patchValue({
            mrp: this.routeService.formatAmount(data.mrp),
            tax: this.routeService.formatAmount(data.tax),
            expdate: this.datePipe.transform(data.expdate, 'MM-yy'),
            hsncode: data.hsncode,
            hsnId: data.hsnId,
            tranRate: data.saleRate
          });
        } // To "Save" or "Update" the Sales Detai

      }, {
        key: "onSaveOrUpdateOutwardDetail",
        value: function onSaveOrUpdateOutwardDetail(flag) {
          var _this24 = this;

          var postOutwardObj = this.saleInvoiceDetailFormGroup.getRawValue();
          var expdate = postOutwardObj.batch.expdate ? postOutwardObj.batch.expdate : this.updateDetailData.expdate;
          var date = new Date(expdate); // Get month (with leading zero if necessary) and year (last two digits)

          var month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-indexed, so add 1

          var year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year

          var formattedDate = "".concat(month, "-").concat(year);
          console.log(formattedDate); // Output: 06-26

          var ouHdate = this.saleInvoiceHeadFormGroup.controls.outwardDate.value ? this.saleInvoiceHeadFormGroup.controls.outwardDate.value.split("T") : null;
          var payload = {
            outwardDetailId: this.outwardDetailId ? +this.outwardDetailId : 0,
            outwardHeadId: this.outwardHeadId ? +this.outwardHeadId : 0,
            // outwardDate:  this.purchaseHead ? this.purchaseHead.inwardDate : this.purchaseHeadFormGroup.controls.inwardDate.value,,
            outwardHeadDate: ouHdate ? ouHdate[0] : null,
            inwardDetailId: postOutwardObj.batch.inwardDetailId ? +postOutwardObj.batch.inwardDetailId : this.updateDetailData.inwardDetailId ? this.updateDetailData.inwardDetailId : 0,
            // inwardDetailId:0,
            inwardHeadNo: postOutwardObj.batch.inwardHeadNo ? +postOutwardObj.batch.inwardHeadNo : this.updateDetailData.inwardHeadNo ? this.updateDetailData.inwardHeadNo : null,
            prodId: postOutwardObj.prodId.prodId ? +postOutwardObj.prodId.prodId : this.updateDetailData.prodId ? this.updateDetailData.prodId : 0,
            hsncode: postOutwardObj.hsncode ? postOutwardObj.hsncode : this.updateDetailData.hsncode ? this.updateDetailData.hsncode : 0,
            batch: postOutwardObj.batch.batch ? postOutwardObj.batch.batch : this.updateDetailData.batch ? this.updateDetailData.batch : '',
            expdate: date,
            issQty: +this.routeService.formatAmount(postOutwardObj.issQty),
            issQtyDisc: +this.routeService.formatAmount(postOutwardObj.issQtyDisc),
            tranRate: +this.routeService.formatAmount(postOutwardObj.tranRate),
            actRate: 0,
            inwardRate: 0,
            // psQty: +postOutwardObj.batch.psQty,
            psQty: 0,
            // psQtyDisc:  +postOutwardObj.batch.psQtyDisc,
            psQtyDisc: 0,
            retStatus: 0,
            // retQty: +postOutwardObj.batch.retQty,
            retQty: 0,
            // retQtyDisc: +postOutwardObj.batch.retQtyDisc,
            retQtyDisc: 0,
            salDiscType: this.firmPreferences.discTypeOption != 3 ? this.firmPreferences.discTypeOption : postOutwardObj.salDiscType ? postOutwardObj.salDiscType : 0,
            salDisc: postOutwardObj.salDisc ? +postOutwardObj.salDisc : 0,
            salDiscType1: this.firmPreferences.discTypeOption != 3 ? this.firmPreferences.discTypeOption : postOutwardObj.salDiscType1 ? postOutwardObj.salDiscType1 : 0,
            salDisc1: Number(postOutwardObj.salDisc1) ? Number(postOutwardObj.salDisc1) : 0,
            // mrp: +postOutwardObj.batch.mrp,
            mrp: postOutwardObj.mrp ? postOutwardObj.mrp : this.updateDetailData.mrp ? this.updateDetailData.mrp : 0,
            mrpValue: 0,
            inclTaxVal: 0,
            otherCharges: 0,
            outwardQtyStatus: 0,
            prodStatus: 0,
            taxSlabId: postOutwardObj.prodId.taxSlabId ? +postOutwardObj.prodId.taxSlabId : this.updateDetailData.taxSlabId ? this.updateDetailData.taxSlabId : 0,
            tax: 0,
            grsValue: 0,
            discValue: 0,
            discValue1: 0,
            taxValue: 0,
            preTaxValue: 0,
            netValue: 0,
            purValue: 0,
            isDeleted: 0,
            crFlag: 0,
            drFlag: 0,
            prodName: postOutwardObj.prodId.prodName ? postOutwardObj.prodId.prodName : this.updateDetailData.prodName ? this.updateDetailData.prodName : '',
            stkRate: 0,
            // hsnId: +postOutwardObj.batch.hsnId,
            hsnId: postOutwardObj.hsnId ? postOutwardObj.hsnId : this.updateDetailData.hsnId ? this.updateDetailData.hsnId : 0,
            hsnDescription: "",
            tranTypeHeadId: 2,
            // expiryDate: new Date(postOutwardObj.expdate),
            firmYearId: 0
          };
          this.subscriptions.push(this.outwardService.postSaleInvoiceDetail(payload).subscribe(function (data) {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data)) {
              _this24.getSalesDetailTableList(_this24.outwardHeadId);

              src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].successMessage('Outward Entry Detail Saved Successfully', _this24.formAlertId); // this.dialogService.closeAllDialogues();

              setTimeout(function () {
                var productNameElement = document.getElementById('productName');

                if (productNameElement) {
                  var focusableElement = productNameElement.querySelector('input');

                  if (focusableElement) {
                    // (focusableElement as HTMLElement).focus();
                    var x = focusableElement; // x.value = " "

                    x.focus();
                  }
                }
              }, 900); // setTimeout(() => {
              //   let dialogInputs: DialogData = {} as DialogData;
              //   dialogInputs.title = addItem;
              //   dialogInputs.closeBtnLabel = 'Close';
              //   dialogInputs.dialogClass = DialogClass.MEDIUM;
              //   dialogInputs.templateRef = () => this.saleEntryDetailTemplate;
              //   dialogInputs.buttonTemplates = [({ templateRef: this.saleEntryDetailButtonTemplate } as DialogButtonTemplate)]
              //   this.dialogService.showDialogue(dialogInputs, { disableClose: true });
              // }, 800);
            }

            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus409(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].warningMessage('Outward Entry Detail already exists', _this24.formAlertId) : '';
          }));

          if (this.outwardDtlBtnSaveCloseTxt === src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_4__["SaveContinueText"]) {
            this.resetDetailForm();
          }

          if (flag) {
            this.dialogService.closeAllDialogues();
            this.resetDetailForm();
          } else {
            this.resetDetailForm();
          }
        }
      }, {
        key: "resetDetailForm",
        value: function resetDetailForm() {
          this.saleInvoiceDetailFormGroup.reset();
          this.selectedProdid = 0;
        } // Validation for issQty input

      }, {
        key: "tranOutIssQty",
        value: function tranOutIssQty(value) {
          this.closingQty = this.saleInvoiceDetailFormGroup.controls['batch'].value.closingQty;

          if (+value > this.closingQty) {
            this.saleInvoiceDetailFormGroup.get('issQty').setErrors({
              'greaterValue': true
            }, {
              emitEvent: true
            });
          } // const numericValue = parseFloat(value);
          // if (!isNaN(numericValue)) {
          //   // Limit the decimal places to two
          //   const formattedValue = numericValue.toFixed(2);
          //   // Update the form control with the formatted value
          //   this.saleInvoiceDetailFormGroup.get('issQty').setValue(formattedValue, { emitEvent: false });
          // }

        } // Validation for issQtyDisc input

      }, {
        key: "tranOutIssQtyDisc",
        value: function tranOutIssQtyDisc(value) {
          this.closingQtyDisc = this.saleInvoiceDetailFormGroup.controls['batch'].value.closingQtyDisc;

          if (+value > this.closingQtyDisc) {
            this.saleInvoiceDetailFormGroup.get('issQtyDisc').setErrors({
              'greaterValue': true
            }, {
              emitEvent: true
            });
          }
        }
        /*DETAIL END */

        /* FINAL SAVE START */

      }, {
        key: "buildOutWardEntryFinalSaveFormGroup",
        value: function buildOutWardEntryFinalSaveFormGroup() {
          return this.formBuilder.group({
            otherDed: [],
            otherDedAccId: [''],
            otherAdd: [''],
            otherAddAccId: [''],
            hamaliValue: [0],
            frtValue: [''],
            remarks: [''],
            otherCharges: 0
          });
        }
      }, {
        key: "onSaveOrUpdateFinalSave",
        value: function onSaveOrUpdateFinalSave() {
          var _this25 = this;

          // if (this.outwardFinalSaveBtnText === SaveText) {
          var outwardFinalSaveObj = Object.assign({}, this.outwardHead); // outwardFinalSaveObj.tranTypeName = SalePrefix;
          // outwardFinalSaveObj.isDeleted = this.outwardHead.isDeleted;
          // outwardFinalSaveObj.isEligible = this.outwardHead.isEligible;
          // outwardFinalSaveObj.taxUploadStatus = 0;
          // outwardFinalSaveObj.taxCategoryId = this.outwardHead.taxCategoryId;
          // outwardFinalSaveObj.frtValue = this.saleInvoiceFinalSaveFormGroup.controls.frtValue.value;

          outwardFinalSaveObj.frtValue = 0;
          outwardFinalSaveObj.rndValue = +this.routeService.formatAmount(outwardFinalSaveObj.invValue ? +Math.round(outwardFinalSaveObj.invValue) - outwardFinalSaveObj.invValue : '0.00');
          outwardFinalSaveObj.invValue = +this.routeService.formatAmount(outwardFinalSaveObj.invValue ? Math.round(outwardFinalSaveObj.invValue) : '0.00'); // outwardFinalSaveObj.otherDed = +this.saleInvoiceFinalSaveFormGroup.controls.otherDed.value;
          // outwardFinalSaveObj.otherDedAccId = this.saleInvoiceFinalSaveFormGroup.controls.otherDedAccId.value.accId;
          // outwardFinalSaveObj.otherAdd = +this.saleInvoiceFinalSaveFormGroup.controls.otherAdd.value;
          // outwardFinalSaveObj.otherAddAccId = this.saleInvoiceFinalSaveFormGroup.controls.otherAddAccId.value.accId;

          outwardFinalSaveObj.remarks = this.saleInvoiceFinalSaveFormGroup.controls.remarks.value;
          outwardFinalSaveObj.otherCharges = this.saleInvoiceFinalSaveFormGroup.controls.otherCharges.value; // outwardFinalSaveObj.mode = this.saleInvoiceHeadFormGroup.controls.mode.value.name;
          // delete outwardFinalSaveObj.accGstIn;
          // delete outwardFinalSaveObj.accShName;
          // delete outwardFinalSaveObj.accMobile;
          // delete outwardFinalSaveObj.cityId;

          var payload = {
            outwardHead: outwardFinalSaveObj,
            outwardPreTaxes: this.outwardPretaxes,
            outwardTaxes: this.outwardTaxes,
            outwardDetails: this.outWardDetail,
            isUpdate: true
          };
          this.subscriptions.push(this.outwardService.postOrUpdateOutwardFinalSave(payload).subscribe(function (data) {
            console.log("qw", data);

            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data)) {
              src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].successMessage('Saved Successfully', _this25.formAlertId);

              _this25.saleInvoiceDetailFormGroup.reset();

              _this25.router.navigate(['pharma/outward/salesInvoices']);
            }

            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus409(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].warningMessage('Outward Entry already exists', _this25.formAlertId) : '';
          })); // } else {
          // }
        }
      }, {
        key: "onAdjValue",
        value: function onAdjValue(adjValue, adjCtrlName) {
          if (adjValue && adjValue > 0) {
            this.saleInvoiceFinalSaveFormGroup.controls[adjCtrlName].enable();
          } else {
            this.saleInvoiceFinalSaveFormGroup.controls[adjCtrlName].disable();
          }
        }
      }, {
        key: "bindFinalSaveControls",
        value: function bindFinalSaveControls(outwardHead) {
          this.saleInvoiceFinalSaveFormGroup.patchValue({
            otherDed: outwardHead.otherDed ? outwardHead.otherDed : 0,
            otherDedAccId: outwardHead.otherDedAccId ? outwardHead.otherDedAccId : 0,
            otherAdd: outwardHead.otherAdd ? outwardHead.otherAdd : 0,
            otherAddAccId: outwardHead.otherAddAccId ? outwardHead.otherAddAccId : 0,
            hamaliValue: outwardHead.hamaliValue ? outwardHead.hamaliValue : 0,
            frtValue: outwardHead.frtValue ? outwardHead.frtValue : "",
            remarks: outwardHead.remarks ? outwardHead.remarks : ""
          });
        }
      }, {
        key: "resetFinalSave",
        value: function resetFinalSave() {
          this.saleInvoiceFinalSaveFormGroup.reset();
        }
        /* FINAL SAVE END */

        /* COMMON FUNCTIONS START */

      }, {
        key: "formatDate",
        value: function formatDate(date) {
          var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();
          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          return [year, month, day].join('-');
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['pharma/outward/saleInvoiceList']);
        }
        /* COMMON FUNCTIONS END*/

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (subscription) {
            return subscription.unsubscribe();
          });
        }
      }, {
        key: "bigFont",
        value: function bigFont(event) {
          event.preventDefault();
          this.getProductPreviousData();
        }
      }, {
        key: "getProductPreviousData",
        value: function getProductPreviousData() {
          var _this26 = this;

          var prodId = this.saleInvoiceDetailFormGroup.controls.prodId.value.prodId;
          var accid = this.accName.value.accId ? this.accName.value.accId : 192; // var ourtwardate = null;

          this.inwardService.productSalesHistory(accid, prodId).subscribe(function (res) {
            if (res) {
              _this26.displayProd = true;
              _this26.purchaseHist = res;
            }
          });
        }
      }, {
        key: "confirmDelete",
        value: function confirmDelete() {
          // return this.deletePurchase
          document.getElementById('deletePopup').style.display = 'flex';
        }
      }, {
        key: "closePopup",
        value: function closePopup() {
          // Close the confirmation popup
          document.getElementById('deletePopup').style.display = 'none';
        }
      }, {
        key: "deleteItem",
        value: function deleteItem() {
          this.deleteSalesHead(this.outwardHeadId); // Here, yout can add your delete functionality

          console.log("Item deleted!"); // Close the popup after deletion

          this.closePopup();
        }
      }, {
        key: "deleteSalesHead",
        value: function deleteSalesHead(outwardHeadId) {
          var _this27 = this;

          this.outwardService.deleteSalesHeadById(outwardHeadId).subscribe(function (data) {
            return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus200(data) ? _this27.refresh() : src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isStatus404(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].warningMessage("Sales Head already deleted") : '';
          });
        }
      }, {
        key: "purdatefocusout",
        value: function purdatefocusout() {
          if (this.firmPreferences != null && this.firmPreferences != undefined && this.firmPreferences != "") {
            if (this.firmPreferences.allowBackDatePurchase == 0) {
              this.saldate = this.datePipe.transform(this.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd');

              if (this.saldate && this.tranIndate) {
                if (this.saldate >= this.tranIndate) {
                  console.log(this.saldate);
                } else {
                  this.saleInvoiceHeadFormGroup.controls.outwardDate.setErrors({});
                  src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].errorMessage("SAL Date should not be earlier than today's date.", this.formAlertId); // this.purchaseHeadFormGroup.controls.inwardDate.setValue('');
                }
              }
            } else if (this.firmPreferences.allowBackDatePurchase == 1) {
              console.log(this.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd');
            }
          }
        }
      }, {
        key: "getTranlastdate",
        value: function getTranlastdate() {
          var _this28 = this;

          this.outwardService.getsaleTrandate(2).subscribe(function (data) {
            var objsplit;

            if (data) {
              console.log(data);

              if (data) {
                objsplit = "";
                objsplit = data[0].outwardDate != null ? data[0].outwardDate.split('T') : "";
                _this28.tranIndate = objsplit[0];
              }

              console.log(_this28.tranIndate);
            }
          });
        }
      }, {
        key: "onDateSelected",
        value: function onDateSelected(data) {
          if (this.firmPreferences.allowBackDatePurchase == 0) {
            this.saldate = this.datePipe.transform(this.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd');

            if (this.saldate && this.tranIndate) {
              if (this.saldate >= this.tranIndate) {
                console.log(this.saldate);
              } else {
                this.saleInvoiceHeadFormGroup.controls.outwardDate.setErrors({});
                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_6__["default"].errorMessage("SAL Date should not be earlier than today's date.", this.formAlertId);
              }
            } else if (this.firmPreferences.allowBackDatePurchase == 1) {
              console.log(this.saleInvoiceHeadFormGroup.controls.outwardDate.value, 'yyyy-MM-dd');
            }

            console.log(data.target.value);
          }
        }
      }]);

      return SaleInvoiceComponent;
    }();

    SaleInvoiceComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_13__["InwardService"]
      }, {
        type: _outward_service__WEBPACK_IMPORTED_MODULE_3__["OutwardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _Master_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"]
      }, {
        type: src_app_shared_components_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDialog"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_13__["InwardService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]
      }, {
        type: src_app_shared_http_services_out_ward_out_ward_http_service__WEBPACK_IMPORTED_MODULE_17__["OutWardHttpService"]
      }, {
        type: src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_18__["RouteService"]
      }, {
        type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_20__["HttpService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('saleEntryDetailTemplate', {
      "static": true
    })], SaleInvoiceComponent.prototype, "saleEntryDetailTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productName', {
      "static": true
    })], SaleInvoiceComponent.prototype, "productName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('saleEntryDetailButtonTemplate', {
      "static": true
    })], SaleInvoiceComponent.prototype, "saleEntryDetailButtonTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteSaleDetailTemplate', {
      "static": false
    })], SaleInvoiceComponent.prototype, "deleteSalesHeadTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CompanyTab', {
      "static": false
    })], SaleInvoiceComponent.prototype, "CompanyTab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productHistoryTemplate', {
      "static": true
    })], SaleInvoiceComponent.prototype, "productHistoryTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown.alt.h', ['$event'])], SaleInvoiceComponent.prototype, "bigFont", null);
    SaleInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sale-invoice',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sale-invoice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-invoice/sale-invoice.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sale-invoice.component.scss */
      "./src/app/distribution/out-ward/sale-invoice/sale-invoice.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], SaleInvoiceComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-order-list/sale-order-list.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-order-list/sale-order-list.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardSaleOrderListSaleOrderListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".orderlist-form mat-form-field {\n  width: 155px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtb3JkZXItbGlzdC9DOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xcZUJ1c2luZXNzLlVpL3NyY1xcYXBwXFxkaXN0cmlidXRpb25cXG91dC13YXJkXFxzYWxlLW9yZGVyLWxpc3RcXHNhbGUtb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtb3JkZXItbGlzdC9zYWxlLW9yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vb3V0LXdhcmQvc2FsZS1vcmRlci1saXN0L3NhbGUtb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlcmxpc3QtZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDE1NXB4O1xufSIsIi5vcmRlcmxpc3QtZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxNTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-order-list/sale-order-list.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-order-list/sale-order-list.component.ts ***!
    \************************************************************************************/

  /*! exports provided: SaleOrderListComponent */

  /***/
  function srcAppDistributionOutWardSaleOrderListSaleOrderListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleOrderListComponent", function () {
      return SaleOrderListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/components/table/table-model */
    "./src/app/shared/components/table/table-model.ts");
    /* harmony import */


    var _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../in-ward/in-ward.service */
    "./src/app/distribution/in-ward/in-ward.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _outward_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../outward.service */
    "./src/app/distribution/out-ward/outward.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/http.service */
    "./src/app/shared/services/http.service.ts");

    var SaleOrderListComponent = /*#__PURE__*/function () {
      function SaleOrderListComponent(datePipe, inwardService, fb, outwardService, router, todayDate) {
        var _this29 = this;

        _classCallCheck(this, SaleOrderListComponent);

        this.datePipe = datePipe;
        this.inwardService = inwardService;
        this.fb = fb;
        this.outwardService = outwardService;
        this.router = router;
        this.todayDate = todayDate;
        this.tableDefinition = {
          columns: [{
            id: "ordDate",
            name: "PORD Date",
            value: function value(obj) {
              return obj['ordDate'] ? _this29.datePipe.transform(obj['ordDate'], 'dd-MM-yyyy') : '';
            }
          }, {
            id: "ordHeadNo",
            name: "PORD No.",
            value: function value(obj) {
              return obj['ordHeadNo'] ? obj['ordHeadNo'] : '';
            }
          }, {
            id: "name",
            name: "Supplier Name",
            value: function value(obj) {
              return obj['accName'] ? obj['accName'] : '';
            }
          }, {
            id: "shName",
            name: "Sh.Name",
            value: function value(obj) {
              return obj['accShName'] ? obj['accShName'] : '';
            }
          }, {
            id: "cityName",
            name: "City Name",
            value: function value(obj) {
              return obj['cityName'] ? obj['cityName'] : '';
            }
          }, {
            id: "ltoNo",
            name: "GSTIN",
            value: function value(obj) {
              return obj['ltoNo'] ? obj['ltoNo'] : '';
            }
          }, {
            id: "action",
            name: "Action",
            disableSort: true,
            actions: [{
              method: function method(obj) {
                return _this29.addOrEdit(obj, "edit");
              },
              name: 'Edit',
              icon: 'assets/new_edit2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_4__["ActionStyle"].EDIT
            }, {
              method: function method(obj) {
                return _this29.addOrEdit(obj, "delete");
              },
              name: 'Delete',
              icon: 'assets/new_delete2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_4__["ActionStyle"].DELETE
            }]
          }]
        };
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
      }

      _createClass(SaleOrderListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort; // this.today = new Date().toISOString().split('T')[0];

          this.today = this.todayDate.localDate();
          this.today = this.datePipe.transform(this.today, 'yyyy-MM-dd');
          this.SaleOrderListHeadFormGroup = this.fb.group({
            fromDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            toDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            sretNo: "",
            custmorName: "",
            shName: "",
            cityName: "",
            gstin: "",
            mode: "",
            invValue: ""
          });
          this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));

          if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.firmPreferences.finEdate;
          }

          ; // this.getSaleOrderList();

          this.getOrderHead();
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();
          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          return [year, month, day].join('-');
        }
      }, {
        key: "getList",
        value: function getList() {
          this.getSaleOrderList();
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.SaleOrderListHeadFormGroup.reset();
        }
      }, {
        key: "getSaleOrderList",
        value: function getSaleOrderList() {
          var _this30 = this;

          // this.isDataLoading = true;
          this.dataList = null;
          var payload = Object.assign({}); // console.log(this.salesReturnFormGroup.value);

          payload.inwardDate = this.SaleOrderListHeadFormGroup.value.invDate ? this.SaleOrderListHeadFormGroup.value.invDate : null;
          payload.fromDate = this.datePipe.transform(this.SaleOrderListHeadFormGroup.value.fromDate, 'yyyy-MM-dd'), payload.toDate = this.datePipe.transform(this.SaleOrderListHeadFormGroup.value.toDate, 'yyyy-MM-dd'), payload.invNo = this.SaleOrderListHeadFormGroup.value.invNo ? this.SaleOrderListHeadFormGroup.value.invNo : "";
          payload.accName = this.SaleOrderListHeadFormGroup.value.accName ? this.SaleOrderListHeadFormGroup.value.accName : "";
          payload.accShName = this.SaleOrderListHeadFormGroup.value.accShName ? this.SaleOrderListHeadFormGroup.value.accShName : "";
          payload.cityId = this.SaleOrderListHeadFormGroup.value.cityId ? this.SaleOrderListHeadFormGroup.value.cityId : 0;
          payload.mode = this.SaleOrderListHeadFormGroup.value.mode ? this.SaleOrderListHeadFormGroup.value.mode : 0;
          payload.accGSTIn = this.SaleOrderListHeadFormGroup.value.accGSTIn ? this.SaleOrderListHeadFormGroup.value.accGSTIn : "";
          payload.invValue = this.SaleOrderListHeadFormGroup.value.invValue ? this.SaleOrderListHeadFormGroup.value.invValue : 0;
          payload.tranTypeHeadId = 3, payload.tranTypeName = "SORD";
          this.inwardService.GetInwardHead(payload).subscribe(function (data) {
            _this30.dataSource.data = data.map(function (list) {
              list['inwardDate'] = _this30.formatDate(list.inwardDate);
              return list;
            });
            _this30.dataList = data; // this.isDataLoading = false;
          });
        }
      }, {
        key: "addOrEdit",
        value: function addOrEdit(salesHead, method) {
          var action = method; //   console.log('head data----', purchaseHead);

          this.editObj = salesHead ? salesHead : {};
          this.outwardService.sendheadData({
            salesHead: salesHead
          }, action); // this.inwardService.setPurchaseHead(purchaseHead);

          this.outwardService.saleHeaddata.next(salesHead);
          this.router.navigate(['pharma/outward/saleOrderEntry'], {
            queryParams: {
              id: salesHead.inwardHeadId
            }
          });
          this.addOrEditFlag = true;
        }
      }, {
        key: "getOrderHead",
        value: function getOrderHead() {
          var _this31 = this;

          this.outwardService.getOrderHead().subscribe(function (data) {
            _this31.dataList = data;
          });
        }
      }]);

      return SaleOrderListComponent;
    }();

    SaleOrderListComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_5__["InwardService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _outward_service__WEBPACK_IMPORTED_MODULE_7__["OutwardService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], SaleOrderListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], SaleOrderListComponent.prototype, "sort", void 0);
    SaleOrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-sale-order-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sale-order-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-order-list/sale-order-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sale-order-list.component.scss */
      "./src/app/distribution/out-ward/sale-order-list/sale-order-list.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], SaleOrderListComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-order/sale-order.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-order/sale-order.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardSaleOrderSaleOrderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order-form mat-form-field {\n  width: 148px;\n}\n\n::ng-deep .return_mat mat-form-field {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtb3JkZXIvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxvdXQtd2FyZFxcc2FsZS1vcmRlclxcc2FsZS1vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtb3JkZXIvc2FsZS1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNFLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vb3V0LXdhcmQvc2FsZS1vcmRlci9zYWxlLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWZvcm0gbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxNDhweDtcbn1cblxuOjpuZy1kZWVwIC5yZXR1cm5fbWF0IG1hdC1mb3JtLWZpZWxke1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSIsIi5vcmRlci1mb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDE0OHB4O1xufVxuXG46Om5nLWRlZXAgLnJldHVybl9tYXQgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-order/sale-order.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-order/sale-order.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SaleOrderComponent */

  /***/
  function srcAppDistributionOutWardSaleOrderSaleOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleOrderComponent", function () {
      return SaleOrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var _Master_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Master/master.service */
    "./src/app/distribution/Master/master.service.ts");
    /* harmony import */


    var _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../in-ward/in-ward.service */
    "./src/app/distribution/in-ward/in-ward.service.ts");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.service */
    "./src/app/shared/components/dialog/dialog.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/components/table/table-model */
    "./src/app/shared/components/table/table-model.ts");
    /* harmony import */


    var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/utils/app-message-utils */
    "./src/app/shared/utils/app-message-utils.ts");
    /* harmony import */


    var _outward_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../outward.service */
    "./src/app/distribution/out-ward/outward.service.ts");
    /* harmony import */


    var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/utils/response-utils */
    "./src/app/shared/utils/response-utils.ts");
    /* harmony import */


    var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/shared/services/http.service */
    "./src/app/shared/services/http.service.ts");
    /* harmony import */


    var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/shared/app-constants */
    "./src/app/shared/app-constants.ts");

    var SaleOrderComponent = /*#__PURE__*/function () {
      function SaleOrderComponent(router, inwardservice, masterService, formBuilder, datePipe, dialogService, outwardService, todayDate) {
        var _this32 = this;

        _classCallCheck(this, SaleOrderComponent);

        this.router = router;
        this.inwardservice = inwardservice;
        this.masterService = masterService;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.dialogService = dialogService;
        this.outwardService = outwardService;
        this.todayDate = todayDate;
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.subscriptions = [];
        this.compGroupName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.accName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.filteredCompanyMulti = new rxjs__WEBPACK_IMPORTED_MODULE_10__["ReplaySubject"](1);
        this.CompanyTabMultiFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.saleHeadBtnText = 'Save';
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"]();
        this.outwardHeadBtnText = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_16__["SaveText"];
        this.historytableDefinition = {
          columns: [{
            id: 'prodShName',
            name: 'Product Name',
            value: function value(obj) {
              return obj['prodShName'] ? obj['prodShName'] ? obj['prodShName'] : '' : '';
            }
          }, {
            id: 'prodName',
            name: 'Product Pack',
            value: function value(obj) {
              return obj['prodName'] ? obj['prodName'] ? obj['prodName'] : '' : '';
            }
          }, {
            id: 'purRate',
            name: 'Rate',
            value: function value(obj) {
              return obj['purRate'] ? obj['purRate'] : '';
            }
          }, {
            id: 'company',
            name: 'Company',
            value: function value(obj) {
              return obj['batch'] ? obj['batch'] : '';
            }
          }, {
            id: 'invQty',
            name: 'Qty',
            value: function value(obj) {
              return obj['invQty'] ? obj['invQty'] : '';
            }
          }, {
            id: 'invQtyDisc',
            name: 'Qty.Disc',
            value: function value(obj) {
              return obj['invQtyDisc'] ? obj['invQtyDisc'] : '';
            }
          }, {
            id: 'invQtyDisc',
            name: 'HSN Code',
            value: function value(obj) {
              return obj['invQtyDisc'] ? obj['invQtyDisc'] : '';
            }
          }, {
            id: 'invQtyDisc',
            name: 'Tax',
            value: function value(obj) {
              return obj['invQtyDisc'] ? obj['invQtyDisc'] : '';
            }
          }, {
            id: 'invQtyDisc',
            name: 'Gross.Value',
            value: function value(obj) {
              return obj['invQtyDisc'] ? obj['invQtyDisc'] : '';
            }
          }, {
            id: 'action',
            name: 'Action',
            disableSort: true,
            actions: [{
              method: function method(data) {
                return _this32.addOrEdit(data);
              },
              name: 'Edit',
              icon: 'assets/new_edit2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_11__["ActionStyle"].EDIT
            }, {
              isDisabled: function isDisabled(data) {
                return _this32.isDeleteDisabled();
              },
              method: function method(obj) {
                return _this32.deletepreturnDetailItem(obj);
              },
              name: 'Delete',
              icon: 'assets/new_delete2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_11__["ActionStyle"].DELETE,
              dialogProperties: {
                title: 'Delete Company Group',
                templateRef: function templateRef() {
                  return _this32.deleteTemplate();
                }
              }
            }]
          }],
          disablePagination: true,
          disableFilter: true
        };
        this.customProductOptsTable = {
          panelWidth: 1900,
          columns: [{
            name: 'Product Name',
            value: function value(obj) {
              return obj['prodName'] ? obj['prodName'] : '';
            },
            fxFlex: 34,
            fxFlex1: 34,
            isKeyColumn: true
          }, {
            name: 'Product Pack',
            value: function value(obj) {
              return obj['prodPackName'] ? obj['prodPackName'] : '';
            },
            fxFlex: 12,
            fxFlex1: 12
          }, {
            name: 'Qty',
            value: function value(obj) {
              return obj['closingQty'] ? obj['closingQty'] : '';
            },
            fxFlex: 12,
            fxFlex1: 12
          }, {
            name: 'Qty.Disc',
            value: function value(obj) {
              return obj['closingQtyDisc'] ? obj['closingQtyDisc'] : '';
            },
            fxFlex: 12,
            fxFlex1: 12
          }, {
            name: 'HSN Code',
            value: function value(obj) {
              return obj['hsncode'] ? obj['hsncode'] : '';
            },
            fxFlex: 12,
            fxFlex1: 12
          }, {
            name: 'Tax%',
            value: function value(obj) {
              return obj['tax'] ? obj['tax'] : '';
            },
            fxFlex: 10,
            fxFlex1: 10
          }, {
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['prodShName'] ? obj['prodShName'] : '';
            },
            fxFlex: 10,
            fxFlex1: 10
          }, {
            name: 'CompanyName',
            value: function value(obj) {
              return obj['compName'] ? obj['compName'] : '';
            },
            fxFlex: 22,
            fxFlex1: 22
          }]
        }; //Custom Accounts Autocomplete 

        this.customAccountAutoCompleteDef = {
          label: 'Customer Name',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this32.inwardservice.getCustomAccountsByName(name);
          },
          minCount: 2,
          keyString: 'accName'
        };
        this.customProductAutoCompleteDef = {
          label: 'Product Name',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this32.showAutoComplete(name);
          },
          minCount: 2,
          keyString: 'prodName'
        }; //Custom Account  Autocomplete Options Table View

        this.customAccountsOptsTable = {
          panelWidth: 800,
          columns: [{
            name: 'Customer Name',
            value: function value(obj) {
              return obj['accName'] ? obj['accName'] : '';
            },
            fxFlex: 34,
            fxFlex1: 34,
            isKeyColumn: true
          }, {
            name: 'City Name',
            value: function value(obj) {
              return obj['cityName'] ? obj['cityName'] : '';
            },
            fxFlex: 14,
            fxFlex1: 14
          }, {
            name: 'Mobile',
            value: function value(obj) {
              return obj['accMobile'] ? obj['accMobile'] : '';
            },
            fxFlex: 16,
            fxFlex1: 16
          }, {
            name: 'GSTIN',
            value: function value(obj) {
              return obj['accGstIn'] ? obj['accGstIn'] : '';
            },
            fxFlex: 24,
            fxFlex1: 24
          }, {
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['accShName'] ? obj['accShName'] : '';
            },
            fxFlex: 12,
            fxFlex1: 12
          }]
        };
        this.tableDefinition = {
          columns: [{
            id: 'prodName',
            name: 'Product Name',
            value: function value(obj) {
              return obj['prodName'] ? obj['prodName'] ? obj['prodName'] : '' : '';
            }
          }, {
            id: 'prodShName',
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['prodShName'] ? obj['prodShName'] ? obj['prodShName'] : '' : '';
            }
          }, {
            id: 'prodPackName',
            name: 'Product Pack',
            value: function value(obj) {
              return obj['prodPackName'] ? obj['prodPackName'] : '';
            }
          }, {
            id: 'ordQty',
            name: 'Qty',
            value: function value(obj) {
              return obj['ordQty'] ? obj['ordQty'] : '';
            }
          }, {
            id: 'ordQtyDisc',
            name: 'Qty.Disc',
            value: function value(obj) {
              return obj['ordQtyDisc'] ? obj['ordQtyDisc'] : '';
            }
          }, {
            id: 'action',
            name: 'Action',
            disableSort: true,
            actions: [{
              method: function method(data) {
                return _this32.addOrEdit(data);
              },
              name: 'Edit',
              icon: 'assets/new_edit2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_11__["ActionStyle"].EDIT
            }, {
              isDisabled: function isDisabled(data) {
                return _this32.isDeleteDisabled();
              },
              method: function method(obj) {
                return _this32.deletepreturnDetailItem(obj);
              },
              name: 'Delete',
              icon: 'assets/new_delete2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_11__["ActionStyle"].DELETE,
              dialogProperties: {
                title: 'Delete Sale Order Entry',
                templateRef: function templateRef() {
                  return _this32.deleteTemplate();
                }
              }
            }]
          }]
        };
      }

      _createClass(SaleOrderComponent, [{
        key: "companyTab",
        value: function companyTab(event) {
          var _this33 = this;

          if (event.keyCode === 9) {
            var statetab = this.CompanyTab.options;
            var result = statetab.find(function (x) {
              return x.active === true;
            });
            this.SaleOrderHeadFormGroup.controls.compId.setValue(result.value);
            var data = this.Companydata.find(function (x) {
              return x.compId == result.value;
            });

            if (data) {
              this.compGroupName.setValue(data.compGroupName);
            }
          } else if (event.keyCode === 13) {
            var _data2 = this.Companydata.find(function (x) {
              return x.compId == _this33.SaleOrderHeadFormGroup.controls.compId.value;
            });

            if (_data2) {
              this.compGroupName.setValue(_data2.compGroupName);
            } // setTimeout(() => {
            //   this.boxfocus.nativeElement.focus();
            // }, 1000);

          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));

          if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.firmPreferences.finEdate;
          }

          this.today = this.todayDate.localDate();
          this.SaleOrderHeadFormGroup = this.buildHeadFormGroup();
          this.saleOrderDetailFormGroup = this.buildDetailFormGroup();
          this.getAllCompMaster();
          this.SaleOrderHeadFormGroup.controls.accName.valueChanges.subscribe(function (res) {
            if (typeof res === 'object') {
              // this.supplierData = res;
              _this34.bindSuplierDetails(res);
            }
          });
          this.outwardService.getheadData$.subscribe(function (result) {
            if (result.salesHead && result.action) {
              if (Object.keys(result.salesHead).length > 0) {
                _this34.fromlistFlag = true;
                _this34.preturnInvoiceRowData = result.salesHead;
                _this34.action = result.action;
                _this34.outwardHeadId = _this34.preturnInvoiceRowData.ordHeadId;

                _this34.getpreturnDetailTableList(_this34.outwardHeadId); // this.getOrderFullDetails(this.outwardHeadId);


                setTimeout(function () {
                  if (_this34.action == "delete") {
                    _this34.confirmDelete();
                  }
                }, 1500);
              }
            }
          });
          this.saleOrderDetailFormGroup.get('prodId').valueChanges.subscribe(function (value) {
            if (value && _this34.saleOrderDetailFormGroup.get('prodId').dirty) {
              _this34.showAutoCompleteData = true;
            }

            if (value && typeof value === 'object') {
              _this34.selectedProdid = value.prodId; // value.prodId 2087

              _this34.bindProductDetails(value);
            } // if (value) {
            //   this.getHistoryDetails(this.salesReturnFormGroup.controls.accName.value.accId,value,this.today); // Call your method when value changes
            // }

          });
        }
      }, {
        key: "showAutoComplete",
        value: function showAutoComplete(name) {
          if (this.showAutoCompleteData) {
            // return this.inwardservice.productCusromerSalesHistory(this.SaleOrderHeadFormGroup.controls.accName.value.accId, name, this.today);
            return this.inwardservice.getCustomProductByName(name, this.SaleOrderHeadFormGroup.controls.compId.value.accId, src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_16__["SalePrefix"]);
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])([]);
          }
        }
      }, {
        key: "headpatch",
        value: function headpatch(data) {
          this.outwardHeadNo = data.inwardHeadNo;
          this.SaleOrderHeadFormGroup.controls.compId.setValue(data.compId);
          this.SaleOrderHeadFormGroup.controls.salDate.setValue(data.ordDate);
          this.SaleOrderHeadFormGroup.controls.gstin.setValue(data.ltoNo);
          this.SaleOrderHeadFormGroup.controls.accName.setValue(data.accName);
          this.SaleOrderHeadFormGroup.controls.accShName.setValue(data.accShName);
        }
      }, {
        key: "confirmDelete",
        value: function confirmDelete() {
          // return this.deletePurchase
          document.getElementById('deletePopup').style.display = 'flex';
        }
      }, {
        key: "closePopup",
        value: function closePopup() {
          // Close the confirmation popup
          document.getElementById('deletePopup').style.display = 'none';
        }
      }, {
        key: "deleteItem",
        value: function deleteItem() {
          this.deleteOrderHeadById(this.outwardHeadId); // Here, yout can add your delete functionality

          src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_12__["default"].successMessage('Order Head Deleted Successfully!');
          console.log("Item deleted!"); // Close the popup after deletion

          this.closePopup();
        }
      }, {
        key: "deleteOrderHeadById",
        value: function deleteOrderHeadById(orderHeadRowData) {
          var _this35 = this;

          this.outwardService.deleteOrderHeadById(orderHeadRowData).subscribe(function (data) {
            return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_14__["default"].isStatus200(data) ? _this35.refresh() : src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_14__["default"].isStatus404(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_12__["default"].warningMessage("Return Head already deleted") : '';
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.getpreturnDetailTableList(this.outwardHeadId);
        }
      }, {
        key: "buildHeadFormGroup",
        value: function buildHeadFormGroup() {
          return this.formBuilder.group({
            salDate: [this.today],
            accName: [''],
            compId: [0],
            accShName: [{
              value: '',
              disabled: true
            }],
            gstin: [{
              value: '',
              disabled: true
            }],
            remarks: ""
          });
        }
      }, {
        key: "buildDetailFormGroup",
        value: function buildDetailFormGroup() {
          return this.formBuilder.group({
            prodId: [''],
            shname: [{
              value: '',
              disabled: true
            }],
            productpack: [{
              value: '',
              disabled: true
            }],
            rate: [{
              value: '',
              disabled: true
            }],
            qty: [''],
            qtyDisc: [''],
            hsncode: [{
              value: '',
              disabled: true
            }],
            tax: [{
              value: '',
              disabled: true
            }],
            company: [{
              value: '',
              disabled: true
            }],
            taxSlabId: [''],
            mrp: ['']
          });
        }
      }, {
        key: "companychange",
        value: function companychange(value) {
          if (value.value) {
            var data = this.Companydata.find(function (x) {
              return x.compId == value.value;
            });

            if (data) {
              this.compGroupName.setValue(data.compGroupName);
            }
          }
        }
      }, {
        key: "filterCompanyMulti",
        value: function filterCompanyMulti() {
          if (!this.Companydata) {
            return;
          } // get the search keyword


          var search = this.CompanyTabMultiFilterCtrl.value;

          if (!search) {
            this.filteredCompanyMulti.next(this.Companydata.slice());
            return;
          } else {
            search = search.toLowerCase();
          } // filter the banks


          this.filteredCompanyMulti.next(this.Companydata.filter(function (bank) {
            return bank.compName.toLowerCase().indexOf(search) > -1;
          }));
        }
      }, {
        key: "getAllCompMaster",
        value: function getAllCompMaster() {
          var _this36 = this;

          this.masterService.getAllCompanyMaster().subscribe(function (data) {
            _this36.Companydata = data;

            _this36.filteredCompanyMulti.next(_this36.Companydata.slice());
          });
        }
      }, {
        key: "showSaleDetailTemplate",
        value: function showSaleDetailTemplate(data) {
          var _this37 = this;

          var dialogInputs = {};

          if (data === 'Add') {
            this.detailburron = 'Save & Continue';
            this.detailsave = 'Save & Close';
            dialogInputs.title = 'Add Item';
            this.saleOrderDetailFormGroup.reset();
            this.selectedProdid = 0;
            this.outwardDetailId = 0;
          } else {
            this.detailburron = 'Update & Continue';
            this.detailsave = 'Update & Close';
            dialogInputs.title = 'Edit Item';
          } // this.dialogService.closeAllDialogues();
          // this.showAutoCompleteData = false;


          dialogInputs.dialogClass = src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogClass"].MEDIUM;
          dialogInputs.closeBtnLabel = 'Close';

          dialogInputs.templateRef = function () {
            return _this37.saleOrderDetail;
          };

          dialogInputs.buttonTemplates = [{
            templateRef: this.saleOrderDetailButton
          }];
          this.dialogService.showDialogue(dialogInputs, {
            disableClose: true
          });
        }
      }, {
        key: "bindProductDetails",
        value: function bindProductDetails(data) {
          this.saleOrderDetailFormGroup.patchValue({
            shname: data.prodShName,
            productpack: data.prodPackName,
            hsncode: data.hsncode,
            tax: data.tax,
            rate: data.sRate,
            company: data.compName
          });
          this.expdate = this.datePipe.transform(data.expdate, 'MM-yy');
        }
      }, {
        key: "resetDialog",
        value: function resetDialog() {
          this.saleOrderDetailFormGroup.reset();
        }
      }, {
        key: "addOrEdit",
        value: function addOrEdit(data) {
          var _this38 = this;

          console.log(data);
          this.showSaleDetailTemplate('UpDate');
          this.outwardDetailId = data.ordDetailId;
          this.updateDetailData = data;
          this.selectedProdid = data.prodId;
          this.fromlistFlag = true; // const outwardQtyStatus = this.statusDropdown.find(x => x.code === data.outwardQtyStatus);      

          setTimeout(function () {
            _this38.saleOrderDetailFormGroup.patchValue({
              prodId: data.prodName,
              // prodName: data.prodName,
              shname: data.prodShName,
              productpack: data.prodPackName,
              hsncode: data.hsncode,
              tax: data.tax,
              taxSlabId: data.taxSlabId,
              mrp: data.mrp,
              rate: data.ordRate,
              company: data.compName,
              qty: data.ordQty,
              qtyDisc: data.ordQtyDisc
            });
          }, 800);
          this.saleOrderDetailFormGroup.markAsTouched();
        }
      }, {
        key: "deleteTemplate",
        value: function deleteTemplate() {
          return this.deletePurchaseHeadTemplate;
        }
      }, {
        key: "isDeleteDisabled",
        value: function isDeleteDisabled() {
          // console.log(data);
          return false;
        }
      }, {
        key: "deletepreturnDetailItem",
        value: function deletepreturnDetailItem(item) {
          var _this39 = this;

          this.outwardService.deleteOrderDetailItem(item.ordDetailId).subscribe(function (data) {
            if (src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_14__["default"].isStatus200(data)) {
              _this39.refresh();
            }

            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_14__["default"].isStatus404(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_12__["default"].warningMessage('Sale Order Entry already deleted') : '';
          });
        }
      }, {
        key: "getpreturnDetailTableList",
        value: function getpreturnDetailTableList(preturnHeadId) {
          var _this40 = this;

          this.outwardService.getOrderHeadFullDetails(preturnHeadId).subscribe(function (result) {
            if (result && Object.keys(result).length > 0) {
              //head
              _this40.outwardHead = result.ordHead;
              _this40.outwardHeadBtnText = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_16__["UpdateText"];

              _this40.headpatch(_this40.outwardHead); //detail


              _this40.outWardDetail = result.ordDetails;
              _this40.outwardFinalSaveBtnText = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_16__["UpdateText"];
            } else {
              _this40.outWardDetail = [];
            }
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.accName.setValue('');
          this.SaleOrderHeadFormGroup.reset();
        }
      }, {
        key: "bindSuplierDetails",
        value: function bindSuplierDetails(data) {
          this.SaleOrderHeadFormGroup.patchValue({
            accShName: data.accShName,
            gstin: data.accGstIn,
            mode: data.accTranMode == 1 ? "Credit" : "Cash"
          });
        }
      }, {
        key: "onSaveSalesorder",
        value: function onSaveSalesorder() {
          var _this41 = this;

          var postOutwardObj = this.SaleOrderHeadFormGroup.getRawValue();
          var payload = {
            "ordHeadId": this.outwardHeadBtnText == 'Update' ? this.outwardHeadId : 0,
            "ordDate": postOutwardObj.salDate ? postOutwardObj.salDate : null,
            "tranTypeHeadId": 15,
            "ordHeadNo": this.outwardHead ? this.outwardHead.ordHeadNo : '',
            "compId": postOutwardObj.compId ? postOutwardObj.compId : 0,
            "accId": this.SaleOrderHeadFormGroup.controls.accName.value.accId,
            "grsValue": 0,
            "taxValue": 0,
            "ordValue": 0,
            "cancStat": true,
            "createdBy": 0,
            "createdOn": this.today,
            "modifiedBy": 0,
            "modifiedOn": this.today,
            "isEditable": true,
            "isDeletable": true,
            "ordCancStat": true
          };
          console.log(payload);
          this.outwardHeadObj = payload;
          this.subscriptions.push(this.outwardService.postorUpdateOrderHead(payload).subscribe(function (data) {
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_14__["default"].isStatus200(data) ? _this41.showSaleDetailTemplate("Add") : src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_14__["default"].isStatus409(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_12__["default"].warningMessage('Outward return Head already exists', _this41.formAlertId) : '';
            console.log(data);
            _this41.outwardHeadId = _this41.outwardHeadBtnText == 'UpDate' ? _this41.outwardHeadId : data.resultObject;

            _this41.getpreturnDetailTableList(_this41.outwardHeadId);
          }));
        }
      }, {
        key: "onSaveOrUpdateSaleOrderDetail",
        value: function onSaveOrUpdateSaleOrderDetail(flag) {
          var _this42 = this;

          if (this.saleOrderDetailFormGroup.controls.qty.value != "" && this.saleOrderDetailFormGroup.controls.qty.value != undefined && this.saleOrderDetailFormGroup.controls.qty.value != null) {
            var postPurchaseDetailObj = this.preparePayload(this.saleOrderDetailFormGroup.getRawValue(), flag);
            this.outwardService.postorUpdateOrderDeatil(postPurchaseDetailObj).subscribe(function (data) {
              if (data && flag) {
                _this42.saleOrderDetailFormGroup.reset();

                _this42.selectedProdid = 0; // this.getSalesDetailTableList(this.invoiceHeadId);

                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_12__["default"].successNotification("Details ".concat(data.resultDescription));
                setTimeout(function () {
                  var productNameElement = document.getElementById('productName');

                  if (productNameElement) {
                    var focusableElement = productNameElement.querySelector('input');

                    if (focusableElement) {
                      // (focusableElement as HTMLElement).focus();
                      var x = focusableElement; // x.value = " "

                      x.focus();
                    }
                  }
                }, 900);
              } else if (data && !flag) {
                _this42.saleOrderDetailFormGroup.reset();

                _this42.selectedProdid = 0; // this.getSalesDetailTableList(this.invoiceHeadId);

                src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_12__["default"].successNotification("Details ".concat(data.resultDescription));

                _this42.dialogService.closeAllDialogues();
              }

              _this42.getpreturnDetailTableList(_this42.outwardHeadId);
            });
          } else {
            src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_12__["default"].warningMessage('Please enter Valid Qty Value');
          }
        }
      }, {
        key: "preparePayload",
        value: function preparePayload(data, flag) {
          // console.log(date);
          var payload = {
            ordDetailId: +this.outwardDetailId ? this.outwardDetailId : 0,
            ordHeadId: this.outwardHeadId ? +this.outwardHeadId : 0,
            ordHeadDate: this.SaleOrderHeadFormGroup.controls.salDate.value,
            prodId: typeof data.prodId.prodId === 'number' && !isNaN(data.prodId.prodId) ? data.prodId.prodId : this.updateDetailData.prodId,
            // (typeof data.prodId.prodId === 'number' && !isNaN(data.prodId.prodId)) ? data.prodId.prodId : this.prodid
            hsnId: this.saleOrderDetailFormGroup.controls.hsncode.value && this.saleOrderDetailFormGroup.controls.hsncode.value !== "" ? this.saleOrderDetailFormGroup.controls.hsncode.value : 0,
            ordQty: data.qty ? +data.qty : 0,
            ordQtyDisc: data.qtyDisc ? +data.qtyDisc : 0,
            recdQty: data.Qty ? +data.Qty : 0,
            recdQyDisc: data.QtyDisc ? +data.QtyDisc : 0,
            ordRate: data.rate,
            taxSlabId: data.prodId.taxSlabId ? data.prodId.taxSlabId : this.taxslabId ? this.taxslabId : 0,
            tax: data.prodId ? data.prodId.tax : this.updateDetailData ? this.updateDetailData.tax : 0,
            taxValue: 0,
            createdBy: 0,
            createdOn: this.today,
            modifiedBy: 0,
            modifiedOn: this.today,
            ord_detailcol: '',
            isDeleted: 0,
            isEditable: 0,
            isDeletable: 0,
            recdIssQty: 0,
            recd_iss_QtyDisc: 0,
            cancQty: 0,
            cancQtyDisc: 0
          };
          return payload;
        }
      }, {
        key: "convertToValidDate",
        value: function convertToValidDate(expdate) {
          var date; // If the date is in MM-DD format (5 characters), add the current year to make it YYYY-MM-DD

          if (expdate.length === 5 && expdate.includes('-')) {
            var currentYear = new Date().getFullYear();
            expdate = "".concat(currentYear, "-").concat(expdate);
          } // Parse the date string into a Date object


          date = new Date(expdate); // Check if the date is valid

          if (isNaN(date.getTime())) {
            console.error('Invalid date:', expdate);
            return null;
          }

          return date;
        }
      }]);

      return SaleOrderComponent;
    }();

    SaleOrderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_7__["InwardService"]
      }, {
        type: _Master_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]
      }, {
        type: src_app_shared_components_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
      }, {
        type: _outward_service__WEBPACK_IMPORTED_MODULE_13__["OutwardService"]
      }, {
        type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_15__["HttpService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CompanyTab', {
      "static": false
    })], SaleOrderComponent.prototype, "CompanyTab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('saleOrderDetail', {
      "static": true
    })], SaleOrderComponent.prototype, "saleOrderDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('saleOrderDetailButton', {
      "static": true
    })], SaleOrderComponent.prototype, "saleOrderDetailButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deletePurchaseHeadTemplate', {
      "static": true
    })], SaleOrderComponent.prototype, "deletePurchaseHeadTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('purhistory', {
      "static": true
    })], SaleOrderComponent.prototype, "purhistory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], SaleOrderComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], SaleOrderComponent.prototype, "sort", void 0);
    SaleOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sale-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sale-order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-order/sale-order.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sale-order.component.scss */
      "./src/app/distribution/out-ward/sale-order/sale-order.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], SaleOrderComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-register/sale-register.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-register/sale-register.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardSaleRegisterSaleRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pharmacyHeading {\n  color: #2f8bbd;\n  font-size: 20px;\n  margin-bottom: 0;\n  font-family: monospace !important;\n  font-weight: 700 !important;\n}\n\n.pharma-finance .mat-raised-button {\n  border-radius: 30px;\n  min-width: 65px;\n  line-height: 28px;\n  padding: 0 12px;\n}\n\n.CashReceiptControls {\n  height: 300px;\n  width: 100%;\n}\n\n.CashReceiptCard {\n  width: 300px;\n  height: 255px;\n}\n\n.mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 24px;\n  border-radius: 2px;\n}\n\nmat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.buttons {\n  width: 960px;\n  margin: 0 auto;\n}\n\n.action_btn {\n  width: 500px;\n  margin: 5px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtcmVnaXN0ZXIvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxvdXQtd2FyZFxcc2FsZS1yZWdpc3Rlclxcc2FsZS1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtcmVnaXN0ZXIvc2FsZS1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENFO0VBQ0UseURBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBRTtFQUNFLCtHQUFBO0FDR0o7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERRO0VBQ0osWUFBQTtFQUNBLGdCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRpb24vb3V0LXdhcmQvc2FsZS1yZWdpc3Rlci9zYWxlLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBoYXJtYWN5SGVhZGluZyB7XG4gICAgY29sb3I6ICMyZjhiYmQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5waGFybWEtZmluYW5jZSAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWluLXdpZHRoOiA2NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgfVxuICBcbiAgLkNhc2hSZWNlaXB0Q29udHJvbHMge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5DYXNoUmVjZWlwdENhcmQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDI1NXB4O1xuICB9XG4gIC5tYXQtY2FyZCB7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbiAgbWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDIwJSksIDAgMnB4IDJweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDVweCAwIHJnYigwIDAgMCAvIDEyJSk7XG4gIH1cbiAgXG4gIC5idXR0b25zIHtcbiAgICB3aWR0aDogOTYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87fVxuICAgIFxuICAgICAgICAuYWN0aW9uX2J0biB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gIH1cblxuXG5cbiAgICAucHVyY2hhc2UtYnV0dG9uIHtcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH0iLCIucGhhcm1hY3lIZWFkaW5nIHtcbiAgY29sb3I6ICMyZjhiYmQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cbi5waGFybWEtZmluYW5jZSAubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtaW4td2lkdGg6IDY1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5cbi5DYXNoUmVjZWlwdENvbnRyb2xzIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5DYXNoUmVjZWlwdENhcmQge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjU1cHg7XG59XG5cbi5tYXQtY2FyZCB7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmJ1dHRvbnMge1xuICB3aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYWN0aW9uX2J0biB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-register/sale-register.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-register/sale-register.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SaleRegisterComponent */

  /***/
  function srcAppDistributionOutWardSaleRegisterSaleRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleRegisterComponent", function () {
      return SaleRegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _outward_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../outward.service */
    "./src/app/distribution/out-ward/outward.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/route.service */
    "./src/app/shared/services/route.service.ts");

    var SaleRegisterComponent = /*#__PURE__*/function () {
      function SaleRegisterComponent(service, fb, datePipe, router, routeService, location) {
        _classCallCheck(this, SaleRegisterComponent);

        this.service = service;
        this.fb = fb;
        this.datePipe = datePipe;
        this.router = router;
        this.routeService = routeService;
        this.location = location; // dateOptionData = [{id:1, value:'Pur.Date'}, {id:2, value:'Inv.Date'}];

        this.reportTypeData = [{
          id: 'Billwise',
          value: 'Billwise'
        }, {
          id: 'Gstinwise',
          value: 'Gstinwise'
        }, {
          id: 'Datewise',
          value: 'Datewise'
        }, {
          id: 'Summary',
          value: 'Summary'
        }];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.showTable = false;
        this.showDate = false;
        this.tableDefinition = {
          columns: [{
            id: 'inwardDate',
            name: 'InwardDate',
            value: function value(obj) {
              return obj['inwardDate'] ? obj['inwardDate'] ? obj['inwardDate'] : '' : '';
            }
          }, {
            id: 'inwardHeadNo',
            name: 'InwardHeadNo',
            value: function value(obj) {
              return obj['inwardHeadNo'] ? obj['inwardHeadNo'] ? obj['inwardHeadNo'] : '' : '';
            }
          }, {
            id: 'taxCategoryName',
            name: 'TaxCategoryName',
            value: function value(obj) {
              return obj['taxCategoryName'] ? obj['taxCategoryName'] : '';
            }
          }, {
            id: 'invNo',
            name: 'Inv.No',
            value: function value(obj) {
              return obj['invNo'] ? obj['invNo'] : '';
            }
          }, {
            id: 'invDate',
            name: 'InvDate',
            value: function value(obj) {
              return obj['invDate'] ? obj['invDate'] : '';
            }
          }, {
            id: 'accShName',
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['accShName'] ? obj['accShName'] : '';
            }
          }, {
            id: 'accName',
            name: 'Acc Name',
            value: function value(obj) {
              return obj['accName'] ? obj['accName'] : '';
            }
          }, {
            id: 'cityName',
            name: 'CityName',
            value: function value(obj) {
              return obj['cityName'] ? obj['cityName'] : '';
            }
          }, {
            id: 'accGstIn',
            name: 'accGstIn',
            value: function value(obj) {
              return obj['accGstIn'] ? obj['accGstIn'] : '';
            }
          }, {
            id: 'purMode',
            name: 'PurMode',
            value: function value(obj) {
              return obj['purMode'] ? obj['purMode'] : '';
            }
          }, {
            id: 'preTaxValue',
            name: 'PreTaxValue',
            value: function value(obj) {
              return obj['preTaxValue'] ? obj['preTaxValue'] : '';
            }
          }, {
            id: 'CGSTValue',
            name: 'CGSTValue',
            value: function value(obj) {
              return obj['CGSTValue'] ? obj['CGSTValue'] : '';
            }
          }, {
            id: 'SGSTValue',
            name: 'SGSTValue',
            value: function value(obj) {
              return obj['SGSTValue'] ? obj['SGSTValue'] : '';
            }
          }, {
            id: 'IGSTValue',
            name: 'IGSTValue',
            value: function value(obj) {
              return obj['IGSTValue'] ? obj['IGSTValue'] : '';
            }
          }, {
            id: 'InvValue',
            name: 'InvValue',
            value: function value(obj) {
              return obj['InvValue'] ? obj['InvValue'] : '';
            }
          }]
        };
      }

      _createClass(SaleRegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.today = new Date().toISOString().split('T')[0];
          this.SaleRegisterForm = this.buildForm();
          this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));

          if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.firmPreferences.finEdate;
          } // this.service.getRegData$.subscribe(x=>{
          //   if(x !== null && x !== undefined){
          //     this.showDate  = true;
          //   }else{
          //     this.showDate = false;
          //   }
          // });

        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          return this.fb.group({
            fromDate: [this.today],
            toDate: [this.today],
            // dateOption : [''],
            reportType: ['']
          });
        }
      }, {
        key: "getSearchData",
        value: function getSearchData() {
          var _this43 = this;

          var data = this.SaleRegisterForm.controls;
          var body = {
            fromDate: this.datePipe.transform(data.fromDate.value, 'yyyy-MM-dd'),
            toDate: this.datePipe.transform(data.toDate.value, 'yyyy-MM-dd'),
            // dateOption : data.dateOption.value,
            reportOption: data.reportType.value
          };
          this.service.getSaleRegisterData(body).subscribe(function (res) {
            if (res) {
              _this43.showTable = true;
              console.log('res', res);
              _this43.dataSource = JSON.parse(res);
            }
          });
        }
      }, {
        key: "Excel",
        value: function Excel() {
          var _this44 = this;

          var data = this.SaleRegisterForm.controls;
          var body = {
            fromDate: this.datePipe.transform(data.fromDate.value, 'yyyy-MM-dd'),
            toDate: this.datePipe.transform(data.toDate.value, 'yyyy-MM-dd'),
            // dateOption : data.dateOption.value,
            reportOption: data.reportType.value
          };
          this.service.getSaleRegistrDataExcel(body).subscribe(function (res) {
            if (res) {
              var payload = {
                base64Excel: res,
                name: "sale_register_".concat(body.fromDate, "_to_").concat(body.toDate)
              };

              _this44.routeService.downloadExcel(payload); // this.showTable = true;


              console.log('res', res); // this.dataSource = JSON.parse(res);
            }
          });
        } // goback(){
        //   this.router.navigate(['pharma/outward/OutwardRegisters']);
        // }

      }, {
        key: "goback",
        value: function goback() {
          // if(this.router.url.includes('from=salesInvoices')){
          //   this.router.navigate(['pharma/outward/salesInvoices']);
          // }
          // else if(this.router.url.includes('from=internalStockAdjustmentsMinus')){
          //   this.router.navigate(['pharma/outward/internalStockAdjustmentsMinus']);
          // }
          // else if(this.router.url.includes('from=otherSales')){
          //   this.router.navigate(['pharma/outward/otherSales']);
          // }
          // else if(this.router.url.includes('from=generalCreditNotesIssueToCustomers')){
          //   this.router.navigate(['pharma/outward/generalCreditNotesIssueToCustomers']);
          // }
          // else if(this.router.url.includes('from=generalDebitNotesIssueToCustomers')){
          //   this.router.navigate(['pharma/outward/generalDebitNotesIssueToCustomers']);
          // }
          // else if(this.router.url.includes('from=quotations')){
          //   this.router.navigate(['pharma/outward/quotations']);
          // }
          // else if(this.router.url.includes('from=retailSales')){
          //   this.router.navigate(['pharma/outward/retailSales']);
          // }
          //  else {
          // this.router.navigate(['pharma/outward/OutwardRegisters']);
          // }
          this.location.back();
        }
      }]);

      return SaleRegisterComponent;
    }();

    SaleRegisterComponent.ctorParameters = function () {
      return [{
        type: _outward_service__WEBPACK_IMPORTED_MODULE_2__["OutwardService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_7__["RouteService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    SaleRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sale-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sale-register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-register/sale-register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sale-register.component.scss */
      "./src/app/distribution/out-ward/sale-register/sale-register.component.scss"))["default"]]
    })], SaleRegisterComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-return-list/sale-return-list.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-return-list/sale-return-list.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardSaleReturnListSaleReturnListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (max-width: 600px) {\n  .retList-form mat-form-field {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtcmV0dXJuLWxpc3QvQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFwcFxcZGlzdHJpYnV0aW9uXFxvdXQtd2FyZFxcc2FsZS1yZXR1cm4tbGlzdFxcc2FsZS1yZXR1cm4tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtcmV0dXJuLWxpc3Qvc2FsZS1yZXR1cm4tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFO0lBQ0Usc0JBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtcmV0dXJuLWxpc3Qvc2FsZS1yZXR1cm4tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5yZXRMaXN0LWZvcm0gbWF0LWZvcm0tZmllbGQge1xuLy8gICAgIHdpZHRoOiAxMjBweDtcbi8vIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJldExpc3QtZm9ybSBtYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJldExpc3QtZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-return-list/sale-return-list.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-return-list/sale-return-list.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: SaleReturnListComponent */

  /***/
  function srcAppDistributionOutWardSaleReturnListSaleReturnListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleReturnListComponent", function () {
      return SaleReturnListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../in-ward/in-ward.service */
    "./src/app/distribution/in-ward/in-ward.service.ts");
    /* harmony import */


    var src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/table/table-model */
    "./src/app/shared/components/table/table-model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _outward_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../outward.service */
    "./src/app/distribution/out-ward/outward.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/services/http.service */
    "./src/app/shared/services/http.service.ts"); // const ELEMENT_DATA: PeriodicElement[] = [
    //   {shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
    //   {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
    //  {shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack:'1', ProductType:'0', companyName:'WOMB', tax:'2', hsncode:'54564' },
    // ];


    var SaleReturnListComponent = /*#__PURE__*/function () {
      function SaleReturnListComponent(fb, inwardService, datePipe, router, outwardService, todayDate) {
        var _this45 = this;

        _classCallCheck(this, SaleReturnListComponent);

        this.fb = fb;
        this.inwardService = inwardService;
        this.datePipe = datePipe;
        this.router = router;
        this.outwardService = outwardService;
        this.todayDate = todayDate;
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'expDate', 'gstin', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.tableDefinition = {
          columns: [{
            id: "inwardDate",
            name: "SRET Date",
            value: function value(obj) {
              return obj['inwardDate'] ? _this45.datePipe.transform(obj['inwardDate'], 'dd-MM-yyyy') : '';
            }
          }, {
            id: "inwardHeadNo",
            name: "SRET No.",
            value: function value(obj) {
              return obj['inwardHeadNo'] ? obj['inwardHeadNo'] : '';
            }
          }, {
            id: "accId",
            name: "Supplier Name",
            value: function value(obj) {
              return obj['accName'] ? obj['accName'] : '';
            }
          }, {
            id: "accShName",
            name: "Sh.Name",
            value: function value(obj) {
              return obj['accShName'] ? obj['accShName'] : '';
            }
          }, {
            id: "compId",
            name: "City Name",
            value: function value(obj) {
              return obj['cityName'] ? obj['cityName'] : '';
            }
          }, {
            id: "accGstIn",
            name: "GSTIN",
            value: function value(obj) {
              return obj['ltoNo'] ? obj['ltoNo'] : '';
            }
          }, {
            id: "outwardStatus",
            name: "",
            value: function value(obj) {
              return obj['outwardStatus'] ? obj['outwardStatus'] : '';
            }
          }, // { id: "invNo", name: "P.Inv.No.", value: (obj) => obj['invNo'] ? obj['invNo'] : '' },
          // { id: "invDate", name: "P.Inv.Date", value: (obj) => obj['invDate']  ? this.datePipe.transform(obj['invDate'], 'dd-MM-yyyy') : '' },
          // { id: "mode", name: "Mode", value: (obj) => obj['mode'] ? obj['mode'] : '' },
          {
            id: "mode",
            name: "Mode",
            value: function value(obj) {
              if (obj['mode'] === 1) {
                return "Cash";
              } else if (obj['mode'] === 2) {
                return "Credit";
              } else {
                return ''; // Return empty string if mode is neither 1 nor 2
              }
            }
          }, {
            id: "invValue",
            name: "Inv.Value",
            value: function value(obj) {
              var invvalue = obj['invValue'] ? obj['invValue'] : '';
              return invvalue ? parseFloat(invvalue).toFixed(2) : '';
            }
          }, {
            id: "action",
            name: "Action",
            disableSort: true,
            actions: [{
              method: function method(obj) {
                return _this45.addOrEdit(obj, 'edit');
              },
              name: 'Edit',
              icon: 'assets/new_edit2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_5__["ActionStyle"].EDIT
            }, {
              method: function method(obj) {
                return _this45.addOrEdit(obj, 'delete');
              },
              name: 'Delete',
              icon: 'assets/new_delete2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_5__["ActionStyle"].DELETE,
              isDisabled: function isDisabled(obj) {
                return obj['paidAmount'] == 1;
              }
            }, // { name: 'WhatsApp', icon: 'assets/new_whatsApp2.png', style: ActionStyle.WHATSAPP },
            {
              name: 'Print',
              icon: 'assets/new_print.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_5__["ActionStyle"].PRINT
            }, {
              name: 'Share',
              icon: 'share',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_5__["ActionStyle"].SHARE
            }, {
              name: 'IRN',
              icon: 'assets/new_upload-removebg.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_5__["ActionStyle"].IRN
            }]
          }]
        };
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
      }

      _createClass(SaleReturnListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));

          if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.firmPreferences.finEdate;
          }

          this.today = this.todayDate.localDate();
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.salesReturnList = this.fb.group({
            fromDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sretNo: "",
            custmorName: "",
            shName: "",
            cityName: "",
            gstin: "",
            mode: "",
            invValue: ""
          });
          this.getPurchaseList();
          this.subscription.add(this.outwardService.getheadData$.subscribe(function (x) {
            if (x !== null && x !== undefined) {
              console.log(x); // this.editObj1 = x;
              // this.additemflag = true ;
              // this.purchaseHeadBtnText = 'UpDate';
              // this.finalSavebutton = 'UpDate';
              // this.headpatch(x);
              // this.invoiceHeadId = x.inwardHeadId;
              // this.getTaxtesData(x.inwardHeadId);
              // this.invoiceHeadDetails(this.invoiceHeadId);
            } else {// this.additemflag = false;
                // this.purchaseHeadBtnText = 'Save';
                // this.finalSavebutton = 'Save';
              }
          }));
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();
          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          return [year, month, day].join('-');
        }
      }, {
        key: "getPurchaseList",
        value: function getPurchaseList() {
          var _this46 = this;

          // this.isDataLoading = true;
          this.dataList = null;
          var payload = Object.assign({}); // console.log(this.salesReturnFormGroup.value);

          payload.inwardDate = this.salesReturnList.value.invDate ? this.salesReturnList.value.invDate : null;
          payload.fromDate = this.datePipe.transform(this.salesReturnList.value.fromDate, 'yyyy-MM-dd'), payload.toDate = this.datePipe.transform(this.salesReturnList.value.toDate, 'yyyy-MM-dd'), payload.invNo = this.salesReturnList.value.invNo ? this.salesReturnList.value.invNo : "";
          payload.accName = this.salesReturnList.value.accName ? this.salesReturnList.value.accName : "";
          payload.accShName = this.salesReturnList.value.accShName ? this.salesReturnList.value.accShName : "";
          payload.cityId = this.salesReturnList.value.cityId ? this.salesReturnList.value.cityId : 0;
          payload.mode = this.salesReturnList.value.mode ? this.salesReturnList.value.mode : 0;
          payload.accGSTIn = this.salesReturnList.value.accGSTIn ? this.salesReturnList.value.accGSTIn : "";
          payload.invValue = this.salesReturnList.value.invValue ? this.salesReturnList.value.invValue : 0;
          payload.tranTypeHeadId = 3, payload.tranTypeName = "SRET";
          this.inwardService.GetInwardHead(payload).subscribe(function (data) {
            _this46.dataSource.data = data.map(function (list) {
              list['inwardDate'] = _this46.formatDate(list.inwardDate);
              return list;
            });
            _this46.dataList = data; // this.isDataLoading = false;
          });
        }
      }, {
        key: "addOrEdit",
        value: function addOrEdit(salesHead, method) {
          var action = method; //   console.log('head data----', purchaseHead);

          this.editObj = salesHead ? salesHead : {};
          this.outwardService.sendheadData({
            salesHead: salesHead
          }, action); // this.inwardService.setPurchaseHead(purchaseHead);

          this.outwardService.saleHeaddata.next(salesHead);
          this.router.navigate(['pharma/outward/salesReturnEntry'], {
            queryParams: {
              id: salesHead.inwardHeadId
            }
          });
          this.addOrEditFlag = true;
        }
      }, {
        key: "getList",
        value: function getList() {
          this.getPurchaseList();
        }
      }, {
        key: "delete",
        value: function _delete(purchaseHead) {
          this.addOrEdit(); // this.inwardService.deletePurchaseHead(purchaseHead.inwardHeadId).subscribe(data =>
          //   ResponseUtils.isStatus200(data) ? this.refresh() :
          //     ResponseUtils.isStatus404(data) ?
          //       AppMessageUtils.warningMessage("Sale Return Head already deleted") : '');
        }
      }, {
        key: "addInvoice",
        value: function addInvoice() {
          this.outwardService.sendheadData(null, null);
          this.router.navigate(['pharma/outward/salesReturnEntry']);
        }
      }, {
        key: "deleteTemplate",
        value: function deleteTemplate() {
          return this.deletePurchaseHeadTemplate;
        }
      }, {
        key: "detailDelete",
        value: function detailDelete(Obj) {
          return Obj.deleteFlag;
        }
      }, {
        key: "refresh",
        value: function refresh() {}
      }]);

      return SaleReturnListComponent;
    }();

    SaleReturnListComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__["InwardService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _outward_service__WEBPACK_IMPORTED_MODULE_8__["OutwardService"]
      }, {
        type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], SaleReturnListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deletePurchaseHeadTemplate', {
      "static": false
    })], SaleReturnListComponent.prototype, "deletePurchaseHeadTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], SaleReturnListComponent.prototype, "sort", void 0);
    SaleReturnListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sale-return-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sale-return-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-return-list/sale-return-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sale-return-list.component.scss */
      "./src/app/distribution/out-ward/sale-return-list/sale-return-list.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], SaleReturnListComponent);
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-return/sale-return.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-return/sale-return.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDistributionOutWardSaleReturnSaleReturnComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".return-form mat-form-field {\n  width: 114px;\n}\n\n::ng-deep .user-form .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0px !important;\n}\n\n::ng-deep .user-form .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .user-form .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .user-form .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n::ng-deep .user-form .mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 2em;\n  top: calc(100% - 1.79167em);\n}\n\n::ng-deep .user-form .head-form .mat-form-field {\n  width: 155px;\n  height: 30px;\n  color: red;\n}\n\n::ng-deep .user-form .adj-form .mat-form-field {\n  width: 100%;\n  color: red;\n  height: 30px;\n}\n\n#t01 table {\n  font-size: 12px;\n}\n\n#t01 tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#t01 tr:nth-child(odd) {\n  background-color: #fff;\n}\n\n.history {\n  cursor: pointer;\n}\n\n.popup {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Semi-transparent background */\n  justify-content: center;\n  align-items: center;\n}\n\n/* Popup content style */\n\n.popup-content {\n  background-color: white;\n  padding: 20px;\n  border-radius: 5px;\n  text-align: center;\n}\n\n@media screen and (max-width: 600px) {\n  .return-form mat-form-field {\n    width: 100% !important;\n  }\n\n  .form_height_mbl {\n    max-height: 400px;\n    overflow: auto;\n  }\n}\n\n::ng-deep .return_mat mat-form-field {\n  width: 100% !important;\n}\n\n@media screen and (min-width: 960px) and (max-width: 1280px) {\n  .tab_md_flex {\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 610px) and (max-width: 1010px) {\n  .tab_width {\n    width: 100% !important;\n  }\n\n  .pur-values-form {\n    place-items: center;\n  }\n}\n\n.mb_50 {\n  margin-bottom: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtcmV0dXJuL0M6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxlQnVzaW5lc3MuVWkvc3JjXFxhcHBcXGRpc3RyaWJ1dGlvblxcb3V0LXdhcmRcXHNhbGUtcmV0dXJuXFxzYWxlLXJldHVybi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlzdHJpYnV0aW9uL291dC13YXJkL3NhbGUtcmV0dXJuL3NhbGUtcmV0dXJuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlidXRpb24vb3V0LXdhcmQvc2FsZS1yZXR1cm4vQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXGVCdXNpbmVzcy5VaS9zcmNcXGFzc2V0c1xcc3R5bGVzXFxtaXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBQ09JO0VBQ0UsNkJBQUE7QURKTjs7QUNPSTtFQUNFLFdBQUE7QURMTjs7QUNRSTtFQUNFLHlDQUFBO0FETk47O0FDU0k7RUFDRSxpQkFBQTtBRFBOOztBQ1VJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBRFJOOztBRGJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDZUo7O0FEYkU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNlSjs7QURYQTtFQUNFLGVBQUE7QUNjRjs7QURaQTtFQUNFLHlCQUFBO0FDZUY7O0FEWkE7RUFDRSxzQkFBQTtBQ2VGOztBRFpBO0VBQ0UsZUFBQTtBQ2VGOztBRFpBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFBc0MsZ0NBQUE7RUFDdEMsdUJBQUE7RUFDQSxtQkFBQTtBQ2dCRjs7QURiQSx3QkFBQTs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNnQkY7O0FEWkE7RUFDRztJQUNDLHNCQUFBO0VDZUY7O0VEYkE7SUFDRSxpQkFBQTtJQUNBLGNBQUE7RUNnQkY7QUFDRjs7QURiQTtFQUNFLHNCQUFBO0FDZUY7O0FEWkE7RUFDRTtJQUNFLGFBQUE7RUNlRjtBQUNGOztBRFpBO0VBQ0U7SUFDRSxzQkFBQTtFQ2NGOztFRFhBO0lBQ0UsbUJBQUE7RUNjRjtBQUNGOztBRFhBO0VBQ0UsOEJBQUE7QUNhRiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dGlvbi9vdXQtd2FyZC9zYWxlLXJldHVybi9zYWxlLXJldHVybi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXR1cm4tZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDExNHB4O1xufVxuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9taXhpbi5zY3NzJztcblxuOjpuZy1kZWVwIC51c2VyLWZvcm0ge1xuICBAaW5jbHVkZSB1c2VyLWZvcm07XG4gIC5oZWFkLWZvcm0gLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTU1cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgLmFkai1mb3JtIC5tYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogcmVkO1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufVxuXG4jdDAxIHRhYmxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuI3QwMSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4jdDAxIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmhpc3Rvcnl7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogU2VtaS10cmFuc3BhcmVudCBiYWNrZ3JvdW5kICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBQb3B1cCBjb250ZW50IHN0eWxlICovXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgLnJldHVybi1mb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5mb3JtX2hlaWdodF9tYmx7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5yZXR1cm5fbWF0IG1hdC1mb3JtLWZpZWxke1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAudGFiX21kX2ZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYxMHB4KSBhbmQgKG1heC13aWR0aDoxMDEwcHgpIHtcbiAgLnRhYl93aWR0aHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB1ci12YWx1ZXMtZm9ybXtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5tYl81MHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xufSIsIi5yZXR1cm4tZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMTRweDtcbn1cblxuOjpuZy1kZWVwIC51c2VyLWZvcm0gLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAudXNlci1mb3JtIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgdG9wOiAtMS41ZW07XG59XG46Om5nLWRlZXAgLnVzZXItZm9ybSAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoMC43NSk7XG59XG46Om5nLWRlZXAgLnVzZXItZm9ybSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuOjpuZy1kZWVwIC51c2VyLWZvcm0gLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgdG9wOiBjYWxjKDEwMCUgLSAxLjc5MTY3ZW0pO1xufVxuOjpuZy1kZWVwIC51c2VyLWZvcm0gLmhlYWQtZm9ybSAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTU1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IHJlZDtcbn1cbjo6bmctZGVlcCAudXNlci1mb3JtIC5hZGotZm9ybSAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHJlZDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4jdDAxIHRhYmxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jdDAxIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbiN0MDEgdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uaGlzdG9yeSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLyogU2VtaS10cmFuc3BhcmVudCBiYWNrZ3JvdW5kICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBQb3B1cCBjb250ZW50IHN0eWxlICovXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJldHVybi1mb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZvcm1faGVpZ2h0X21ibCB7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cbjo6bmctZGVlcCAucmV0dXJuX21hdCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC50YWJfbWRfZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjEwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDEwcHgpIHtcbiAgLnRhYl93aWR0aCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdXItdmFsdWVzLWZvcm0ge1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbi5tYl81MCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcbn0iLCJAbWl4aW4gdXNlci1mb3JtIHtcblxuICAvLyAubWF0LWZvcm0tZmllbGQge1xuICAvLyAgIGZvbnQtc2l6ZTogMTRweDtcbiAgLy8gICBoZWlnaHQ6IDQ4cHg7XG4gIC8vICAgd2lkdGg6IDEwMCU7XG4gIC8vIH1cblxuICBcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleD4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogMC40ZW0gMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgICB0b3A6IC0xLjVlbTtcbiAgICB9XG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoLjc1KTtcbiAgICB9XG4gIFxuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgXG4gICAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgdG9wOiBjYWxjKDEwMCUgLSAxLjc5MTY3ZW0pO1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIEBtaXhpbiBtYXQtdGFiIHtcbiAgICAubWF0LXRhYi1sYWJlbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWJlZGVmO1xuICAgICAgYm9yZGVyLXJhZGl1czogOCUgOCUgMCUgMCU7XG4gICAgICBtYXJnaW46IDJweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIHBhZGRpbmc6IDAgMTFweDtcbiAgICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgfVxuICB9XG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/distribution/out-ward/sale-return/sale-return.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/distribution/out-ward/sale-return/sale-return.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SaleReturnComponent */

  /***/
  function srcAppDistributionOutWardSaleReturnSaleReturnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleReturnComponent", function () {
      return SaleReturnComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../in-ward/in-ward.service */
    "./src/app/distribution/in-ward/in-ward.service.ts");
    /* harmony import */


    var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/internal/operators/takeUntil */
    "./node_modules/rxjs/internal/operators/takeUntil.js");
    /* harmony import */


    var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/internal/Subject */
    "./node_modules/rxjs/internal/Subject.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/internal/ReplaySubject */
    "./node_modules/rxjs/internal/ReplaySubject.js");
    /* harmony import */


    var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _Master_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../Master/master.service */
    "./src/app/distribution/Master/master.service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.service */
    "./src/app/shared/components/dialog/dialog.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../_files/dropdowns.json */
    "./src/app/_files/dropdowns.json");

    var _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../../_files/dropdowns.json */
    "./src/app/_files/dropdowns.json", 1);
    /* harmony import */


    var src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/shared/utils/app-message-utils */
    "./src/app/shared/utils/app-message-utils.ts");
    /* harmony import */


    var src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/shared/components/table/table-model */
    "./src/app/shared/components/table/table-model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _outward_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../outward.service */
    "./src/app/distribution/out-ward/outward.service.ts");
    /* harmony import */


    var src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/app/shared/utils/response-utils */
    "./src/app/shared/utils/response-utils.ts");
    /* harmony import */


    var src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/app/shared/services/route.service */
    "./src/app/shared/services/route.service.ts");
    /* harmony import */


    var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/app/shared/services/http.service */
    "./src/app/shared/services/http.service.ts");

    var dataList = [// { shName: 'WOMB1', ProductName: 'ALIVE POWEDER 200G', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
      // { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
      // { shName: 'WOMB1', ProductName: 'FERIWOM TAB. NEW', ProductPack: '1', ProductType: '0', companyName: 'WOMB', tax: '2', hsncode: '54564' },
    ];

    var SaleReturnComponent = /*#__PURE__*/function () {
      function SaleReturnComponent(fb, inwardService, masterService, datePipe, dialogService, router, outwardService, routeService, todayDate) {
        var _this47 = this;

        _classCallCheck(this, SaleReturnComponent);

        this.fb = fb;
        this.inwardService = inwardService;
        this.masterService = masterService;
        this.datePipe = datePipe;
        this.dialogService = dialogService;
        this.router = router;
        this.outwardService = outwardService;
        this.routeService = routeService;
        this.todayDate = todayDate;
        this.showTable = false;
        this.showAutoCompleteData = false;
        this.detailbutton = 'Save & Continue';
        this.detailsave = 'Save & Close';
        this.purchaseHeadBtnText = 'Save';
        this.cityNameAutoCompleteDef = {};
        this.companyNameAutoCompleteDef = {};
        this.customerNameOptsTable = [];
        this.cityNameOptsTable = [];
        this.companyNameOptsTable = [];
        this.hardCodeData = {
          productData: {
            purDisc: 0,
            purDisc1: 0,
            drFlag: 0,
            crFlag: 0,
            purdiscType1: 0,
            purDiscType: 0
          },
          head: {
            TranTypeHeadId: 3,
            tranTypeName: 'SRET',
            taxCategoryId: 3,
            isEligible: 1
          }
        };
        this.displayedColumns = ['shName', 'ProductName', 'ProductPack', 'ProductType', 'companyName', 'expDate', 'mrp', 'saleRate', 'rate', 'disc', 'grsValue', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](dataList);
        this.CompanyTabMultiFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.compGroupName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.accName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.finalSavebutton = 'Save';
        this.accShName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
          value: '',
          disabled: true
        });
        this._onDestroy = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.filteredCompanyMulti = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"](1);
        this.customProductAutoCompleteDef = {
          label: 'Product Name',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this47.showAutoComplete(name);
          },
          // this.inwardService.getCustomProductByName(name,this.salesReturnFormGroup.controls.compId.value, SalePrefix)
          minCount: 2,
          keyString: 'prodName'
        };
        this.inwardTranStatus = {
          label: 'Tran.Qty.Status',
          isRequired: true,
          dataSourceFn: function dataSourceFn() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(_toConsumableArray(_files_dropdowns_json__WEBPACK_IMPORTED_MODULE_14__["inwardTranStatus"]));
          },
          isStaticType: true,
          keyString: 'name'
        };
        this.productStatus = {
          label: 'Status',
          isRequired: true,
          dataSourceFn: function dataSourceFn() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(_toConsumableArray(_files_dropdowns_json__WEBPACK_IMPORTED_MODULE_14__["productStatus"]));
          },
          isStaticType: true,
          keyString: 'name'
        };
        this.discountType = {
          label: 'Discount Type',
          isRequired: true,
          dataSourceFn: function dataSourceFn() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(_toConsumableArray(_files_dropdowns_json__WEBPACK_IMPORTED_MODULE_14__["discountType"]));
          },
          isStaticType: true,
          keyString: 'name'
        };
        this.manifactureDetails = {
          label: 'Manufacture Name',
          isRequired: false,
          dataSourceFn: function dataSourceFn() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(_this47.manifactureData);
          },
          isStaticType: true,
          keyString: 'mfgName'
        };
        this.discountType1 = {
          label: 'Discount Type 1',
          isRequired: true,
          dataSourceFn: function dataSourceFn() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(_toConsumableArray(_files_dropdowns_json__WEBPACK_IMPORTED_MODULE_14__["discountType"]));
          },
          isStaticType: true,
          keyString: 'name'
        };
        this.customProductOptsTable = {
          panelWidth: 1900,
          columns: [{
            name: 'Product Name',
            value: function value(obj) {
              return obj['prodName'] ? obj['prodName'] : '';
            },
            fxFlex: 34,
            fxFlex1: 34,
            isKeyColumn: true
          }, {
            name: 'Product Pack',
            value: function value(obj) {
              return obj['prodPackName'] ? obj['prodPackName'] : '';
            },
            fxFlex: 12,
            fxFlex1: 12
          }, {
            name: 'HSN Code',
            value: function value(obj) {
              return obj['hsncode'] ? obj['hsncode'] : '';
            },
            fxFlex: 12,
            fxFlex1: 12
          }, {
            name: 'Tax%',
            value: function value(obj) {
              return obj['tax'] ? obj['tax'] : '';
            },
            fxFlex: 10,
            fxFlex1: 10
          }, {
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['prodShName'] ? obj['prodShName'] : '';
            },
            fxFlex: 10,
            fxFlex1: 10
          }, {
            name: 'CompanyName',
            value: function value(obj) {
              return obj['compName'] ? obj['compName'] : '';
            },
            fxFlex: 22,
            fxFlex1: 22
          }]
        };
        this.historytableDefinition = {
          columns: [{
            id: 'prodShName',
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['prodShName'] ? obj['prodShName'] ? obj['prodShName'] : '' : '';
            }
          }, {
            id: 'prodName',
            name: 'Product Name',
            value: function value(obj) {
              return obj['prodName'] ? obj['prodName'] ? obj['prodName'] : '' : '';
            }
          }, {
            id: 'batch',
            name: 'Batch No',
            value: function value(obj) {
              return obj['batch'] ? obj['batch'] : '';
            }
          }, {
            id: 'expdate',
            name: 'Exp.Date',
            value: function value(obj) {
              return obj['expdate'] ? obj['expdate'] : '';
            }
          }, {
            id: 'invQty',
            name: 'InvQty',
            value: function value(obj) {
              return obj['invQty'] ? obj['invQty'] : '';
            }
          }, {
            id: 'invQtyDisc',
            name: 'Qty.Disc',
            value: function value(obj) {
              return obj['invQtyDisc'] ? obj['invQtyDisc'] : '';
            }
          }, {
            id: 'purRate',
            name: 'Inv.Rate',
            value: function value(obj) {
              return obj['purRate'] ? obj['purRate'] : '';
            }
          }, {
            id: 'discValue',
            name: 'Disc',
            value: function value(obj) {
              return obj['discValue'] ? obj['discValue'] : '';
            }
          }, {
            id: 'mrp',
            name: 'MRP',
            value: function value(obj) {
              return obj['mrp'] ? obj['mrp'] : '';
            }
          }, // {id:  'purRate',  name:  'Tran.Qty.Status', value:  (obj) => obj['purRate'] ? obj['purRate'] :  ''},
          {
            id: 'hsncode',
            name: 'HSN  code',
            value: function value(obj) {
              return obj['hsncode'] ? obj['hsncode'] : '';
            }
          }, {
            id: 'action',
            name: 'Action',
            disableSort: true,
            actions: [{
              method: function method(data) {
                return _this47.selectProduct(data);
              },
              name: 'View',
              icon: 'visibility',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_16__["ActionStyle"].EDIT
            }]
          }],
          disablePagination: true,
          disableFilter: true
        };
        this.tableDefinition = {
          columns: [{
            id: 'prodShName',
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['prodShName'] ? obj['prodShName'] ? obj['prodShName'] : '' : '';
            }
          }, {
            id: 'prodName',
            name: 'Product Name',
            value: function value(obj) {
              return obj['prodName'] ? obj['prodName'] ? obj['prodName'] : '' : '';
            }
          }, {
            id: 'batch',
            name: 'Batch No',
            value: function value(obj) {
              return obj['batch'] ? obj['batch'] : '';
            }
          }, {
            id: 'expdate',
            name: 'Exp.Date',
            value: function value(obj) {
              return obj['expiryDate'] ? obj['expiryDate'] : '';
            }
          }, {
            id: 'invQty',
            name: 'InvQty',
            value: function value(obj) {
              var invqty = obj['invQty'] ? obj['invQty'] : '';
              return invqty ? parseFloat(invqty).toFixed(2) : ''; // Convert to float and ensure 2 decimal places
            }
          }, {
            id: 'invQtyDisc',
            name: 'Qty.Disc',
            value: function value(obj) {
              return obj['invQtyDisc'] ? obj['invQtyDisc'] : '';
            }
          }, {
            id: 'purRate',
            name: 'Inv.Rate',
            value: function value(obj) {
              var purrate = obj['purRate'] ? obj['purRate'] : '';
              return purrate ? parseFloat(purrate).toFixed(2) : ''; // Convert to float and ensure 2 decimal places
            }
          }, // {id:  'mrp',  name:  'MRP', value:  (obj) => obj['mrp'] ? obj['mrp'] :  ''},
          {
            id: 'mrp',
            name: 'MRP',
            value: function value(obj) {
              var mrp = obj['mrp'] ? obj['mrp'] : '';
              return mrp ? parseFloat(mrp).toFixed(2) : ''; // Convert to float and ensure 2 decimal places
            }
          }, {
            id: 'discValue',
            name: 'Disc',
            value: function value(obj) {
              var discvalue = obj['salDisc'] ? obj['salDisc'] : '';
              return discvalue ? parseFloat(discvalue).toFixed(2) : ''; // Convert to float and ensure 2 decimal places
            }
          }, {
            id: 'tax',
            name: 'Tax(%)',
            value: function value(obj) {
              var taxpercentage = obj['tax'] ? obj['tax'] : '';
              return taxpercentage ? parseFloat(taxpercentage).toFixed(2) : ''; // Convert to float and ensure 2 decimal places
            }
          }, {
            id: 'grsValue',
            name: 'Gross Value',
            value: function value(obj) {
              var grsvalue = obj['grsValue'] ? obj['grsValue'] : '';
              return grsvalue ? parseFloat(grsvalue).toFixed(2) : ''; // Convert to float and ensure 2 decimal places
            }
          }, // {id:  'purRate',  name:  'Tran.Qty.Status', value:  (obj) => obj['purRate'] ? obj['purRate'] :  ''},
          {
            id: 'hsncode',
            name: 'HSN  code',
            value: function value(obj) {
              return obj['hsncode'] ? obj['hsncode'] : '';
            }
          }, {
            id: 'action',
            name: 'Action',
            disableSort: true,
            actions: [{
              method: function method(data) {
                return _this47.addOrEdit(data);
              },
              name: 'Edit',
              icon: 'assets/new_edit2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_16__["ActionStyle"].EDIT
            }, {
              isDisabled: function isDisabled(data) {
                return _this47.isDeleteDisabled(data) || data['issQty'] != 0;
              },
              method: function method(obj) {
                return _this47["delete"](obj);
              },
              name: 'Delete',
              icon: 'assets/new_delete2.png',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_16__["ActionStyle"].DELETE,
              dialogProperties: {
                title: 'Delete Company Group',
                templateRef: function templateRef() {
                  return _this47.deleteTemplate();
                }
              }
            }, {
              name: 'Share',
              icon: 'share',
              style: src_app_shared_components_table_table_model__WEBPACK_IMPORTED_MODULE_16__["ActionStyle"].SHARE
            }]
          }]
        }; //Batch Autocomplete Options Table View

        this.batchOptsTable = {
          panelWidth: 700,
          columns: [{
            name: 'Batch',
            value: function value(obj) {
              return obj['batch'] ? obj['batch'] : '';
            },
            fxFlex: 9,
            fxFlex1: 9,
            isKeyColumn: true
          }, {
            name: 'Exp.Date',
            value: function value(obj) {
              return obj['expdate'] ? _this47.datePipe.transform(obj['expdate'], 'MM-yy') : '';
            },
            fxFlex: 9,
            fxFlex1: 9
          }, {
            name: 'InvQty',
            value: function value(obj) {
              return obj['closingQty'] ? obj['closingQty'] : '';
            },
            fxFlex: 9,
            fxFlex1: 9
          }, {
            name: 'Qty.Disc.',
            value: function value(obj) {
              return obj['closingQtyDisc'] ? obj['closingQtyDisc'] : '';
            },
            fxFlex: 9,
            fxFlex1: 9
          }, {
            name: "Inv.Rate",
            value: function value(obj) {
              return obj['purRate'] ? obj['purRate'] : '';
            },
            fxFlex: 9,
            fxFlex1: 9
          }, {
            name: "Disc(%)",
            value: function value(obj) {
              return obj['discValue'] ? obj['discValue'] : '';
            },
            fxFlex: 9,
            fxFlex1: 9
          }, {
            name: "MRP",
            value: function value(obj) {
              return obj['mrp'] ? obj['mrp'] : '';
            },
            fxFlex: 9,
            fxFlex1: 9
          }, {
            name: "Tax%",
            value: function value(obj) {
              return obj['tax'] ? obj['tax'] : '';
            },
            fxFlex: 9,
            fxFlex1: 9
          }, {
            name: "HSN  code",
            value: function value(obj) {
              return obj['hsncode'] ? obj['hsncode'] : '';
            },
            fxFlex: 9,
            fxFlex1: 9
          }]
        };
        this.customAccountDedAdjAutoCompleteDef = {
          label: 'Ded. Adj. Led.',
          dataSourceFn: function dataSourceFn(name) {
            return _this47.inwardService.getCustomAccountsByName(name);
          },
          // dataSourceFn:  (name) => this.inwardService.getCustomAccountsByName(name,'PUR'),
          minCount: 2,
          keyString: 'accName'
        };
        this.customAccountAddAdjAutoCompleteDef = {
          label: 'Cr. Adj. Led.',
          // dataSourceFn:  (name) => this.inwardService.getCustomAccountsByName(name,'PUR'),
          dataSourceFn: function dataSourceFn(name) {
            return _this47.inwardService.getCustomAccountsByName(name);
          },
          minCount: 2,
          keyString: 'accName'
        };
        this.selectedProdid = 0;
        this.discountDropDown = _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_14__["discount"];
        this.modeData = _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_14__["mode"];
        this.statusDropdown = _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_14__["productStatus"]; //Batch Autocopmlete

        this.batchAutoCompleteDef = {
          label: 'Batch',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this47.inwardService.GetSupplierSaleHistoryBatch(_this47.salesReturnFormGroup.controls.accName.value.accId, _this47.selectedProdid ? _this47.selectedProdid : 0, _this47.salesReturnFormGroup.controls.sretDate.value, name);
          },
          keyString: 'batch',
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        };
        this.customerNameAutoCompleteDef = {
          label: 'Custmor Name',
          isRequired: true,
          dataSourceFn: function dataSourceFn(name) {
            return _this47.inwardService.getCustomAccountsByName(name);
          },
          minCount: 2,
          keyString: 'accName'
        };
        this.customAccountsOptsTable = {
          panelWidth: 700,
          columns: [{
            name: 'Customer Name',
            value: function value(obj) {
              return obj['accName'] ? obj['accName'] : '';
            },
            fxFlex: 30,
            fxFlex1: 30,
            isKeyColumn: true
          }, {
            name: 'City Name',
            value: function value(obj) {
              return obj['cityName'] ? obj['cityName'] : '';
            },
            fxFlex: 20,
            fxFlex1: 20
          }, {
            name: 'Mobile',
            value: function value(obj) {
              return obj['accMobile'] ? obj['accMobile'] : '';
            },
            fxFlex: 15,
            fxFlex1: 15
          }, {
            name: 'GSTIN',
            value: function value(obj) {
              return obj['accGstIn'] ? obj['accGstIn'] : '';
            },
            fxFlex: 20,
            fxFlex1: 20
          }, {
            name: 'Sh.Name',
            value: function value(obj) {
              return obj['accShName'] ? obj['accShName'] : '';
            },
            fxFlex: 15,
            fxFlex1: 15
          }]
        };
        this.show = false;
        this.isdisable = false;
        this.batchvalue = '';
        this.pretaxes = [];
        this.otherDedAccId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.otherAddAccId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.transportName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.headFormGroupSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subscription"]();
      }

      _createClass(SaleReturnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this48 = this;

          this.firmPreferences = JSON.parse(sessionStorage.getItem('firmPreferences'));

          if (this.firmPreferences !== null && this.firmPreferences !== undefined && this.firmPreferences !== '') {
            this.minDate = this.firmPreferences.finSdate;
            this.maxDate = this.today; //this.firmPreferences.finEdate;
          } // this.today = new Date().toISOString().split('T')[0];


          this.today = this.todayDate.localDate();
          this.today = this.datePipe.transform(this.today, 'yyyy-MM-dd');
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.getAllCompMaster();
          document.getElementById('deletePopup').style.display = 'none';
          this.salesReturnDetails = this.buildDetailFormGroup();
          this.salesReturnFormGroup = this.fb.group({
            sretDate: [this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accShName: [{
              value: '',
              disabled: true
            }],
            gstin: [{
              value: '',
              disabled: true
            }],
            compId: [0],
            mode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.getPurchaseList();
          this.CompanyTabMultiFilterCtrl.valueChanges.pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy)).subscribe(function () {
            _this48.filterCompanyMulti();
          });
          this.salesReturnFormGroup.controls.accName.valueChanges.subscribe(function (res) {
            if (typeof res === 'object') {
              _this48.supplierData = res;

              _this48.bindSuplierDetails(res);
            }
          });
          this.subscription = this.salesReturnDetails.get('prodId').valueChanges.subscribe(function (value) {
            if (value && _this48.salesReturnDetails.get('prodId').dirty) {
              _this48.showAutoCompleteData = true;
            }

            if (value && typeof value === 'object') {
              _this48.selectedProdid = value.prodId; // value.prodId 2087

              _this48.salesReturnDetails.get('batch').setValue('');

              _this48.bindProductDetails(value);
            } // if (value) {
            //   this.getHistoryDetails(this.salesReturnFormGroup.controls.accName.value.accId,value,this.today); // Call your method when value changes
            // }

          });
          this.salesReturnDetails.get('batch').valueChanges.subscribe(function (result) {
            console.log("prod batch Data", result); // if(result){
            //   // this.showAutoCompleteData = true;
            // }

            if (result && typeof result === 'object') {
              _this48.selectProduct(result);
            }
          }); // this.salesReturnDetails.get('batch').valueChanges.subscribe(result => {
          //   console.log("prod batch Data", result);
          //   if(result && this.salesReturnDetails.get('batch').dirty){
          //     // this.showAutoCompleteData = true;
          //   }
          //   if (result && typeof result === 'object') {
          //     this.selectProduct(result)
          //   }
          // });

          this.subscription.add(this.outwardService.getheadData$.subscribe(function (x) {
            if (x.salesHead !== null && x.salesHead !== undefined && x.action) {
              console.log(x.salesHead); // this.editObj1 = x;
              // this.additemflag = true ;

              _this48.purchaseHeadBtnText = 'UpDate';
              _this48.finalSavebutton = 'UpDate';
              _this48.actions = x.action;

              _this48.headpatch(x.salesHead);

              _this48.invoiceHeadId = x.salesHead.inwardHeadId; // this.getTaxtesData(x.inwardHeadId);

              _this48.getSalesDetailTableList(_this48.invoiceHeadId);

              setTimeout(function () {
                if (_this48.actions == "delete") {
                  _this48.confirmDelete();
                }
              }, 1000);
            } else {
              // this.additemflag = false;
              _this48.purchaseHeadBtnText = 'Save';
              _this48.finalSavebutton = 'Save';
            }
          }));
        }
      }, {
        key: "onDropdownOpen",
        value: function onDropdownOpen() {
          // Automatically select the first option when the dropdown opens.
          // this.matSelect.open();
          if (!this.salesReturnFormGroup.get('mode').value && this.modeData.length > 0) {
            this.salesReturnFormGroup.get('mode').setValue(this.modeData[0].code);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.headFormGroupSubscription.unsubscribe();
          this.subscription.unsubscribe(); // this.inwardService.sendheadData(null, null);
        }
      }, {
        key: "onSaveSalesReturn",
        value: function onSaveSalesReturn() {
          var _this49 = this;

          try {
            if (this.salesReturnFormGroup.valid) {
              console.log('Form Data:', this.salesReturnFormGroup.value);
              var payload = this.salesReturnFormGroup.getRawValue();
              payload.TranTypeHeadId = 3;
              payload.tranTypeName = "SRET";
              payload.taxcategoryId = payload.accName.taxcategoryId; // payload.transportId =this.transportName.value.accId;

              payload.cityId = payload.accName.cityPinId ? payload.accName.cityPinId : 0;
              payload.accId = payload.accName.accId;
              payload.accShName = payload.accName.accShName;
              payload.mode = payload.mode.code ? payload.mode.code == 'Cash' ? 1 : 2 : 2; // payload.inwardLrdate  = this.datePipe.transform(payload.inwardLrdate, 'yyyy-MM-dd');

              payload.inwardDate = this.datePipe.transform(payload.sretDate, 'yyyy-MM-dd');
              payload.sretDate = this.datePipe.transform(payload.sretDate, 'yyyy-MM-dd');
              payload.inwardHeadId = 0;
              payload.gstin = payload.accName.accGstIn; // payload.activeAt  = this.datePipe.transform(payload.activeAt, 'yyyy-MM-dd');
              // payload.invDate = this.datePipe.transform(payload.invDate, 'yyyy-MM-dd');

              console.log(payload);
              this.inwardService.postPurchaseHead(payload, false).subscribe(function (data) {
                console.log(data);

                if (data) {
                  src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_15__["default"].successMessage('Sale Return Entry Saved Successfully');

                  _this49.showSaleDetailTemplate("Add");

                  _this49.purchaseHeadBtnText = 'UpDate';
                  _this49.invoiceHeadId = data;
                } // this.showTable = true;
                // if(payload.inwardHeadId == 0){
                //   this.purchaseHeadFormGroup.controls.inwardHeadId.setValue(data);
                //   this.showPurchaseDetailTemplate('Add');
                //   this.additemflag = true;
                // }


                _this49.getSalesDetailTableList(_this49.invoiceHeadId);
              });
            }
          } catch (err) {
            console.log("err" + err.message);
          }
        }
      }, {
        key: "bindProductDetails",
        value: function bindProductDetails(data) {
          this.salesReturnDetails.patchValue({
            prodShName: data.prodShName,
            prodPackName: data.prodPackName,
            hsncode: data.hsncode
          });
          this.salesReturnDetails.controls.batch.setValue(''); // this.getProductPreviousData(data);
        }
      }, {
        key: "filterCompanyMulti",
        value: function filterCompanyMulti() {
          if (!this.Companydata) {
            return;
          } // get the search keyword


          var search = this.CompanyTabMultiFilterCtrl.value;

          if (!search) {
            this.filteredCompanyMulti.next(this.Companydata.slice());
            return;
          } else {
            search = search.toLowerCase();
          } // filter the banks


          this.filteredCompanyMulti.next(this.Companydata.filter(function (bank) {
            return bank.compName.toLowerCase().indexOf(search) > -1;
          }));
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.accName.setValue('');
          this.salesReturnFormGroup.reset();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          console.log('Go back action triggered');
          this.router.navigate(['pharma/outward/salesReturns']);
        }
      }, {
        key: "bindSuplierDetails",
        value: function bindSuplierDetails(data) {
          this.salesReturnFormGroup.patchValue({
            accShName: data.accShName,
            gstin: data.accGstIn,
            mode: data.accTranMode == 1 ? "Credit" : "Cash"
          }); // this.purchaseHeadFormGroup.controls.accShName.setValue(data.accShName);
          // this.accShName.setValue(data.accShName);
          // this.accGSTIn
        }
      }, {
        key: "getAllCompMaster",
        value: function getAllCompMaster() {
          var _this50 = this;

          this.masterService.getAllCompanyMaster().subscribe(function (data) {
            _this50.Companydata = data;

            _this50.filteredCompanyMulti.next(_this50.Companydata.slice());
          });
        }
      }, {
        key: "companyTab",
        value: function companyTab(event) {
          var _this51 = this;

          if (event.keyCode === 9) {
            var statetab = this.CompanyTab.options;
            var result = statetab.find(function (x) {
              return x.active === true;
            });
            this.salesReturnFormGroup.controls.compId.setValue(result.value);
            var data = this.Companydata.find(function (x) {
              return x.compId == result.value;
            });

            if (data) {
              this.compGroupName.setValue(data.compGroupName);
            }
          } else if (event.keyCode === 13) {
            var _data3 = this.Companydata.find(function (x) {
              return x.compId == _this51.salesReturnFormGroup.controls.compId.value;
            });

            if (_data3) {
              this.compGroupName.setValue(_data3.compGroupName);
            } // setTimeout(() => {
            //   this.boxfocus.nativeElement.focus();
            // }, 1000);

          }
        }
      }, {
        key: "showSaleDetailTemplate",
        value: function showSaleDetailTemplate(data) {
          var _this52 = this;

          if (this.salesReturnFormGroup.controls.accName.status == "INVALID") {
            src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_15__["default"].warningMessage('Please Enter All Required Fields', this.formAlertId);
          } else {
            var dialogInputs = {};

            if (data === 'Add') {
              this.inwardDetailId = 0;
              this.detailbutton = 'Save & Continue';
              this.detailsave = 'Save & Close';
              dialogInputs.title = 'Add Item';
              this.salesReturnDetails.reset();
              this.selectedProdid = 0;
            } else {
              this.detailbutton = 'Update & Continue';
              this.detailsave = 'Update & Close';
              dialogInputs.title = 'Edit Item';
            }

            this.showAutoCompleteData = false;
            this.dialogService.closeAllDialogues();
            dialogInputs.dialogClass = src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogClass"].MEDIUM;
            dialogInputs.closeBtnLabel = 'Close';

            dialogInputs.templateRef = function () {
              return _this52.purchaseDetailTemplate;
            };

            dialogInputs.buttonTemplates = [{
              templateRef: this.saleReturnDetailButtonTemplate
            }];
            this.dialogService.showDialogue(dialogInputs, {
              disableClose: true
            });
          }
        }
      }, {
        key: "buildDetailFormGroup",
        value: function buildDetailFormGroup() {
          return this.fb.group({
            prodId: [''],
            prodShName: [{
              value: '',
              disabled: true
            }],
            prodPackName: [{
              value: '',
              disabled: true
            }],
            hsncode: [''],
            batch: [''],
            expdate: [{
              value: '',
              disabled: true
            }],
            invQty: [''],
            invQtyDisc: [''],
            purRate: [''],
            // actRate:  [''],
            saleRate: [''],
            retailRate: [''],
            mrp: [''],
            // stkRate:  [''],
            // psQty:  [{value:'', disabled:true}],
            // psQtyDisc:  [{value:'', disabled:true}],
            purDiscType: [''],
            purDisc: [''],
            purdiscType1: [''],
            purDiscType1Calc: [''],
            purDisc1: [''],
            mfgId: [''],
            taxSlabId: [''],
            tax: [{
              value: '',
              disabled: true
            }],
            discValue: [''],
            discValue1: [''],
            // inwardTranStatus:  [''],
            // inwardQtyStatus:  [''],
            productStatus: ['']
          });
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();
          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;
          return [year, month, day].join('-');
        }
      }, {
        key: "getHistoryDetails",
        value: function getHistoryDetails(accId, prodId, inwardDate) {
          var _this53 = this;

          var payload = this.salesReturnFormGroup.getRawValue();
          this.inwardService.productCusromerSalesHistory(accId, prodId, inwardDate).subscribe(function (res) {
            if (res) {
              _this53.historydataSource = res.map(function (list) {
                list['expdate'] = _this53.formatDate(list.expdate);

                _this53.bindProductDetails(list);

                return list;
              }); // this.showPURHistoryTemplate();
              // this.show=true;
              // this.historyData =res
              // console.log(this.historyData)
            }
          });
        }
      }, {
        key: "prodhistoryData",
        value: function prodhistoryData(data) {
          console.log(data);
          this.show = false;
          this.salesReturnDetails.patchValue({
            prodShName: data.prodShName,
            prodPackName: data.prodPackName,
            batch: data.batch,
            expdate: data.expdate,
            invQty: [0],
            invQtyDisc: [0],
            purRate: data.tranRate,
            purDisc: data.disc,
            saleRate: data.saleRate,
            mrp: data.mrp,
            hsncode: data.hsnId,
            // [{value:data.hsnId, disabled:true}]
            purDisc1: data.disc1,
            tax: data.tax,
            // psQty:[0],
            // psQtyDisc:[0],
            mfgId: data.mfgName,
            outwardQtyStatus: data.outwardQtyStatus ? data.outwardQtyStatus : ""
          });
          this.salesReturnDetails.controls.hsncode.disable();
          this.salesReturnDetails.controls.purDisc.disable();
          this.salesReturnDetails.controls.mfgId.disable();

          if (data.batch) {
            this.salesReturnDetails.controls.batch.disable();
          }

          if (data.expdate) {
            this.salesReturnDetails.controls.expdate.disable();
          }

          this.salesReturnDetails.controls.mrp.disable();

          if (data.tranRate) {
            this.salesReturnDetails.controls.saleRate.disable();
          }

          this.isdisable = true;
        }
      }, {
        key: "showList",
        value: function showList() {
          this.router.navigate(['pharma/outward/salesReturns']);
        }
      }, {
        key: "selectProduct",
        value: function selectProduct(data) {
          console.log(data);
          this.purhistoryData = data;
          this.outwardDetailid = data.outwardDetailId;
          this.outwardHeadid = data.outwardHeadId;
          this.bindProductBatchDetails(data); // this.dailogData.close();
        }
      }, {
        key: "bindProductBatchDetails",
        value: function bindProductBatchDetails(data) {
          this.salesReturnDetails.patchValue({
            batch: data.batch,
            mrp: this.routeService.formatAmount(data.mrp),
            tax: this.routeService.formatAmount(data.tax),
            expdate: this.datePipe.transform(data.expdate, 'MM-yy'),
            purDisc: data.disc,
            purRate: data.purRate,
            saleRate: data.saleRate
          });
        }
      }, {
        key: "expDate",
        value: function expDate(val) {
          var data = val;
          var formatted = "".concat(String(new Date(data).getMonth() + 1).padStart(2, '0'), "-").concat(String(new Date(data).getFullYear()).slice(-2));
          this.expiringdate = formatted;
          return formatted;
        } //  bindProductBatchDetails(data) {
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

      }, {
        key: "getSalesDetailTableList",
        value: function getSalesDetailTableList(salesHeadId) {
          var _this54 = this;

          this.inwardService.getInwardItemsForHead(salesHeadId).subscribe(function (result) {
            if (result && Object.keys(result).length > 0) {
              _this54.dataSource = result.inwardDetails; // //head

              _this54.outwardHeadNo = result.inwardHead.inwardHeadNo; // this.outwardHead = result.outwardHead;
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

              _this54.getTaxtesData(result);
            } else {// this.outWardDetail = [];
            }
          });
        }
      }, {
        key: "showAutoComplete",
        value: function showAutoComplete(name) {
          if (this.showAutoCompleteData) {
            return this.inwardService.productCusromerSalesHistory(this.salesReturnFormGroup.controls.accName.value.accId, name, this.today); // return this.inwardService.getCustomProductByName(name,this.salesReturnFormGroup.controls.compId.value, SalePrefix)
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])([]);
          }
        }
      }, {
        key: "onSaveOrUpdateSaleDetail",
        value: function onSaveOrUpdateSaleDetail(flag) {
          var _this55 = this;

          try {
            if (this.salesReturnDetails.controls.invQty.value != "" && this.salesReturnDetails.controls.invQty.value != undefined && this.salesReturnDetails.controls.invQty.value != null) {
              this.validdate = this.salesReturnDetails.controls.expdate.value, console.log(this.salesReturnDetails.value);

              if (this.detailbutton == 'Save & Continue') {
                this.actRetQty = this.salesReturnDetails.value.prodId.closingQty; // (this.salesReturnDetails.value.prodId.issQty - this.salesReturnDetails.value.prodId.retQty);
              } else {
                this.actRetQty = this.issuedQty - this.rqry;
              }

              if (Number(this.salesReturnDetails.controls.invQty.value) <= this.actRetQty) {
                var postPurchaseDetailObj = this.preparePayload(this.salesReturnDetails.value, flag);
                this.inwardService.postPurchaseDetail(postPurchaseDetailObj).subscribe(function (data) {
                  console.log(data);

                  if (data == 1 && flag) {
                    _this55.salesReturnDetails.reset();

                    _this55.selectedProdid = 0; // this.getSalesDetailTableList(this.invoiceHeadId);

                    src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_15__["default"].successNotification('Details saved successfully');
                    setTimeout(function () {
                      var productNameElement = document.getElementById('productName');

                      if (productNameElement) {
                        var focusableElement = productNameElement.querySelector('input');

                        if (focusableElement) {
                          // (focusableElement as HTMLElement).focus();
                          var x = focusableElement; // x.value = " "

                          x.focus();
                        }
                      }
                    }, 900);
                  } else if (data && !flag) {
                    _this55.salesReturnDetails.reset();

                    _this55.selectedProdid = 0; // this.getSalesDetailTableList(this.invoiceHeadId);

                    src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_15__["default"].successNotification('Details saved successfully');

                    _this55.dialogService.closeAllDialogues();
                  }

                  _this55.getSalesDetailTableList(_this55.invoiceHeadId);
                });
              } else {
                console.log("invalid qty");
              }
            } else {
              src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_15__["default"].warningMessage('Please enter Valid Qty Value');
            } // const postPurchaseDetailObj = this.preparePayload(this.salesReturnDetails.value , flag);
            // console.log(postPurchaseDetailObj);

          } catch (err) {
            console.log(err.message);
          }
        }
      }, {
        key: "preparePayload",
        value: function preparePayload(data, flag) {
          // console.log(data);
          // console.log(this.purchaseHead);
          var d = data.expdate ? data.expdate.split('-') : "";
          var date = "01-".concat(d[0], "-20").concat(d[1]);
          var dd = d[1] + "-" + d[0];

          if (typeof this.salesReturnDetails.controls.batch.value === 'object') {
            this.batchvalue = this.salesReturnDetails.controls.batch.value.batch;
          } else {
            this.batchvalue = this.salesReturnDetails.controls.batch.value;
          }

          if (this.detailbutton == 'Save') {
            var parts = dd.split('-');
            var dts = "".concat(parts[0], "-").concat(parts[1].slice(2, 4));
            this.expiringdate = dts;
          } else {
            this.expiringdate = this.salesReturnDetails.controls.expdate.value;
          } // console.log(date);


          var payload = {
            inwardDetailId: this.inwardDetailId ? this.inwardDetailId : 0,
            outwardDetailId: this.outwardDetailid,
            outwardHeadId: this.outwardHeadid,
            inwardHeadId: this.invoiceHeadId,
            prodId: typeof data.prodId.prodId === 'number' && !isNaN(data.prodId.prodId) ? data.prodId.prodId : this.prodid,
            hsnId: this.salesReturnDetails.controls.hsncode.value && this.salesReturnDetails.controls.hsncode.value.trim() !== "" ? this.salesReturnDetails.controls.hsncode.value : 0,
            batch: this.batchvalue,
            isOnlySave: flag,
            // expiryDate: data.expdate ? new Date(date) : '',
            //  this.datePipe.transform(this.salesReturnDetails.controls.expdate.value, 'yyyy-MM');
            // expiryDate: this.salesReturnDetails.controls.expdate ? this.datePipe.transform(this.salesReturnDetails.controls.expdate.value, 'MM-yy') : '',
            // expiryDate: this.salesReturnDetails.controls.expdate ? 
            // this.datePipe.transform(this.convertToValidDate(this.salesReturnDetails.controls.expdate.value), 'MM-yy') : '',
            expiryDate: this.salesReturnDetails.controls.expdate.value,
            // this.datePipe.transform(this.salesReturnDetails.controls.expdate.value, 'MM-yy'),
            invQty: data.invQty ? +data.invQty : 0,
            invQtyDisc: data.invQtyDisc ? +data.invQtyDisc : 0,
            recdQty: data.invQty ? +data.invQty : 0,
            recdQyDisc: data.invQtyDisc ? +data.invQtyDisc : 0,
            inwardRate: 0,
            purRate: data.purRate ? +data.purRate : 0,
            actRate: data.actRate ? +data.actRate : 0,
            tranRate: this.salesReturnDetails.controls.saleRate ? this.salesReturnDetails.controls.saleRate.value : this.updateDetailData.saleRate ? this.updateDetailData.saleRate : 0,
            retailRate: data.retailRate ? +data.retailRate : 0,
            stkRate: data.prodId ? data.prodId.stkRate : 0,
            mrp: data.prodId ? data.prodId.mrp : this.updateDetailData.mrp ? this.updateDetailData.mrp : 0,
            psQty: data.psQty ? +data.psQty : 0,
            psQtyDisc: data.psQtyDisc ? +data.psQtyDisc : 0,
            purDiscType: this.firmPreferences.discTypeOption != 3 ? this.firmPreferences.discTypeOption : data.purDiscType ? data.purDiscType : 0,
            purDisc: data.purDisc ? +data.purDisc : 0,
            purdiscType1: this.firmPreferences.discTypeOption != 3 ? this.firmPreferences.discTypeOption : data.purDiscType ? data.purdiscType1 : 0,
            purDiscType1Calc: 0,
            purDisc1: data.purDisc1 ? data.purDisc1 : 0,
            mfgId: 0,
            // mfgId: this.salesReturnDetails.controls.mfgId ? this.salesReturnDetails.controls.mfgId.value : 0,
            othCharges: 0,
            outwardQtyStatus: this.salesReturnDetails.controls.productStatus ? this.salesReturnDetails.controls.productStatus.value : 0,
            taxSlabId: data.prodId.taxSlabId ? data.prodId.taxSlabId : this.taxslabId ? this.taxslabId : 0,
            tax: data.prodId ? data.prodId.tax : this.updateDetailData.tax ? this.updateDetailData.tax : 0,
            grsValue: 0,
            discValue: data.discValue ? data.discValue : 0,
            discValue1: data.discValue1 ? data.discValue1 : 0,
            taxValue: data.prodId.tax ? data.prodId.tax : this.tax ? this.tax : 0,
            preTaxValue: 0,
            issQty: data.prodId.issQty ? data.prodId.issQty : 0,
            issQtyDisc: 0,
            retQty: 0,
            retQtyDisc: 0,
            isDeleted: 0,
            TranTypeHeadId: 3,
            // drFlag: lodash.get(this.hardCodeData.productData, 'drFlag'),
            // crFlag: lodash.get(this.hardCodeData.productData, 'crFlag'),
            firmYearId: 0
          };
          return payload;
        }
      }, {
        key: "getPurchaseList",
        value: function getPurchaseList() {
          var _this56 = this;

          // this.isDataLoading = true;
          this.dataList = null;
          var payload = Object.assign({}); // console.log(this.salesReturnFormGroup.value);

          payload.inwardDate = this.salesReturnFormGroup.value.invDate ? this.salesReturnFormGroup.value.invDate : null;
          payload.fromDate = this.salesReturnFormGroup.controls.sretDate.value, payload.toDate = this.salesReturnFormGroup.controls.sretDate.value, payload.invNo = this.salesReturnFormGroup.value.invNo ? this.salesReturnFormGroup.value.invNo : "";
          payload.accName = this.salesReturnFormGroup.value.accName ? this.salesReturnFormGroup.value.accName : "";
          payload.accShName = this.salesReturnFormGroup.value.accShName ? this.salesReturnFormGroup.value.accShName : "";
          payload.cityId = this.salesReturnFormGroup.value.cityId ? this.salesReturnFormGroup.value.cityId : 0;
          payload.mode = this.salesReturnFormGroup.value.mode ? this.salesReturnFormGroup.value.mode : 0;
          payload.accGSTIn = this.salesReturnFormGroup.value.accGSTIn ? this.salesReturnFormGroup.value.accGSTIn : "";
          payload.invValue = this.salesReturnFormGroup.value.invValue ? this.salesReturnFormGroup.value.invValue : 0;
          payload.tranTypeHeadId = 3, payload.tranTypeName = "SRET";
          this.inwardService.GetInwardHead(payload).subscribe(function (data) {
            _this56.dataList = data; // this.isDataLoading = false;
          });
        }
      }, {
        key: "editDetails",
        value: function editDetails(data) {}
      }, {
        key: "deleteDetails",
        value: function deleteDetails(data) {} // convertToValidDate(expdate: string): Date {
        //   const [month, year] = expdate.split('-');
        //   // Assuming the year is two digits, we'll add the prefix '20' for 21st-century years.
        //   const fullYear = '20' + year;
        //   return new Date(`${fullYear}-${month}-01`); // Sets the date to the 1st of the month.
        // }

      }, {
        key: "convertToValidDate",
        value: function convertToValidDate(expdate) {
          var date; // If the date is in MM-DD format (5 characters), add the current year to make it YYYY-MM-DD

          if (expdate.length === 5 && expdate.includes('-')) {
            var currentYear = new Date().getFullYear();
            expdate = "".concat(currentYear, "-").concat(expdate);
          } // Parse the date string into a Date object


          date = new Date(expdate); // Check if the date is valid

          if (isNaN(date.getTime())) {
            console.error('Invalid date:', expdate);
            return null;
          }

          return date;
        }
      }, {
        key: "headpatch",
        value: function headpatch(data) {
          console.log(data);
          this.showTable = true;
          this.outwardHeadNo = data.inwardHeadNo; // this.salesReturnFormGroup.controls.inwardHeadId.setValue(data.inwardHeadId);

          this.salesReturnFormGroup.controls.compId.setValue(data.compId); // this.salesReturnFormGroup.controls.inwardHeadNo.setValue(data.inwardHeadNo);

          this.salesReturnFormGroup.controls.sretDate.setValue(data.inwardDate);
          this.salesReturnFormGroup.controls.sretDate.disable();
          this.salesReturnFormGroup.controls.gstin.setValue(data.ltoNo); // this.salesReturnFormGroup.controls.invNo.setValue(data.invNo);
          // this.salesReturnFormGroup.controls.invDate.setValue(data.invDate);

          this.salesReturnFormGroup.controls.accName.setValue(data.accName); // if(data.account.city){
          //   this.purchaseHeadFormGroup.controls.cityId.setValue(data.account.city.name);
          // }
          // this.purchaseHeadFormGroup.controls.accMobile.setValue(data.account.mobile);
          // this.purchaseHeadFormGroup.controls.accGstIn.setValue(data.accGstIn);

          this.salesReturnFormGroup.controls.mode.setValue(data.mode.value == 1 ? 'Cash' : 'Credit'); // this.salesReturnFormGroup.controls.inwardLrNo.setValue(data.inwardLrNo);
          // this.salesReturnFormGroup.controls.inwardWaybillNo.setValue(data.inwardWaybillNo);
          // this.salesReturnFormGroup.controls.noOfCases.setValue(data.noOfCases);
          // this.salesReturnFormGroup.controls.invValue.setValue(data.invValue);
          // this.transportName.setValue(data.transportId);

          this.salesReturnFormGroup.controls.accShName.setValue(data.accShName); // this.purchaseHeadFormGroup.controls.id.setValue(data.id);
        }
      }, {
        key: "confirmDelete",
        value: function confirmDelete() {
          // return this.deletePurchase
          document.getElementById('deletePopup').style.display = 'flex';
        }
      }, {
        key: "closePopup",
        value: function closePopup() {
          // Close the confirmation popup
          document.getElementById('deletePopup').style.display = 'none';
        }
      }, {
        key: "deleteItem",
        value: function deleteItem() {
          this.resetForm();
          this.deleteHead(this.invoiceHeadId); // Here, yout can add your delete functionality

          console.log("Item deleted!"); // Close the popup after deletion

          this.closePopup();
        }
      }, {
        key: "deleteHead",
        value: function deleteHead(purchaseHead) {
          var _this57 = this;

          this.inwardService.deletePurchaseHead(purchaseHead).subscribe(function (data) {
            return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_19__["default"].isStatus200(data) ? _this57.refresh() : src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_19__["default"].isStatus404(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_15__["default"].warningMessage("Sale Return Head already deleted") : '';
          });
        }
      }, {
        key: "addOrEdit",
        value: function addOrEdit(data) {
          this.prodid = 0;
          console.log('data product----', data);
          this.inwardDetailId = data.inwardDetailId;
          this.updateDetailData = data; // this.detailburron = 'UpDate';

          this.showSaleDetailTemplate('UpDate');

          var inwardTranStatus = _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_14__["inwardTranStatus"].find(function (type) {
            return type.code === data.inwardQtyStatus;
          });

          var discType = _files_dropdowns_json__WEBPACK_IMPORTED_MODULE_14__["discountType"].find(function (type) {
            return type.code === data.purDiscType;
          });

          this.salesReturnDetails.controls.prodId.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'prodName'));
          this.salesReturnDetails.controls.batch.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'batch'));
          this.salesReturnDetails.controls.expdate.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'expiryDate'));
          this.salesReturnDetails.controls.invQty.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'invQty'));
          this.salesReturnDetails.controls.invQtyDisc.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'invQtyDisc'));
          this.salesReturnDetails.controls.purRate.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'purRate'));
          this.salesReturnDetails.controls.mfgId.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'mfgName'));
          this.salesReturnDetails.controls.hsncode.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'hsncode'));
          this.salesReturnDetails.controls.tax.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'tax'));
          this.salesReturnDetails.controls.purDisc.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'purDisc'));
          this.salesReturnDetails.controls.purDisc1.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'purDisc1'));
          this.salesReturnDetails.controls.purDiscType.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'purDiscType'));
          this.salesReturnDetails.controls.purdiscType1.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'purdiscType1'));
          this.salesReturnDetails.controls.saleRate.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'saleRate'));
          this.salesReturnDetails.controls.mrp.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'mrp'));
          this.salesReturnDetails.controls.prodShName.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'prodShName'));
          this.salesReturnDetails.controls.prodPackName.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'prodPackName'));
          this.salesReturnDetails.controls.productStatus.patchValue(lodash__WEBPACK_IMPORTED_MODULE_9__["get"](data, 'outwardQtyStatus'));
          this.salesReturnDetails.controls.hsncode.disable();
          this.salesReturnDetails.controls.purDisc.disable();
          this.salesReturnDetails.controls.mfgId.disable();
          this.headFormGroup.controls.otherDed.disable();
          this.headFormGroup.controls.otherAdd.disable();
          this.issuedQty = data.issQty;
          this.rqry = data.recdQty;
          this.prodid = data.prodId;
          this.taxslabId = data.taxSlabId;
          this.tax = data.tax; // if(data.batch){
          //   this.salesReturnDetails.controls.batch.disable();
          // }

          if (data.expdate) {
            this.salesReturnDetails.controls.expdate.disable();
          }

          this.salesReturnDetails.controls.mrp.disable();

          if (data.tranRate) {
            this.salesReturnDetails.controls.saleRate.disable();
          }

          this.salesReturnDetails.controls.saleRate.disable(); // setTimeout(() => {
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
      }, {
        key: "isDeleteDisabled",
        value: function isDeleteDisabled(data) {
          console.log(data);
          return data.deletedFlag;
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.getSalesDetailTableList(this.invoiceHeadId);
        }
      }, {
        key: "delete",
        value: function _delete(item) {
          var _this58 = this;

          this.inwardService.deletePurchaseItem(item.inwardDetailId).subscribe(function (data) {
            return src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_19__["default"].isStatus200(data) ? _this58.refresh() : src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_19__["default"].isStatus404(data) ? src_app_shared_utils_app_message_utils__WEBPACK_IMPORTED_MODULE_15__["default"].warningMessage('sale return details already deleted') : '';
          });
        }
      }, {
        key: "deleteTemplate",
        value: function deleteTemplate() {
          return this.deletePurchaseHeadTemplate;
        }
      }, {
        key: "getTaxtesData",
        value: function getTaxtesData(head) {
          var _this59 = this;

          if (head) {
            this.invValue = head.inwardHead.netValue;
            this.roundedValue = Math.ceil(this.invValue); //lodash.get(head, 'id')
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
            this.pretaxes.forEach(function (x) {
              var taxvalue = head.inwardTaxes.filter(function (y) {
                return y.taxSlabId == x.taxSlabId;
              });
              x.taxes = taxvalue;
            });
            this.inwardTaxes = head.inwardTaxes;
            this.inwardDetails = head.inwardDetails;
            console.log(this.pretaxes);

            if (!this.headFormGroup) {
              this.buildHeadFormGroupForFinalSave();
              this.subscribeForFinalSaveChanges();
            }

            this.headFormGroup.reset(Object.assign({}, this.head));
            this.buildPretaxesFormGroup();
            setTimeout(function () {
              if (_this59.head.otherDedAccId) {
                _this59.inwardService.getCustomAccountById(_this59.head.otherDedAccId).subscribe(function (data) {
                  _this59.otherDedAccId.setValue(data[0].accName);
                });
              }
            }, 1000);
            setTimeout(function () {
              if (_this59.head.otherAddAccId) {
                _this59.inwardService.getCustomAccountById(_this59.head.otherAddAccId).subscribe(function (data) {
                  console.log(data);

                  _this59.otherAddAccId.setValue(data[0].accName);
                });
              }
            }, 1000);
            setTimeout(function () {
              if (_this59.head.transportId) {
                _this59.inwardService.getCustomAccountById(_this59.head.transportId).subscribe(function (data) {
                  console.log(data);

                  _this59.transportName.setValue(data[0].accName);
                });
              }
            }, 1000);
          }
        }
      }, {
        key: "buildPretaxesFormGroup",
        value: function buildPretaxesFormGroup() {
          var _this60 = this;

          this.invoiceTax = this.fb.array([]);
          var preTaxes = this.pretaxes;
          var atleastOnePretaxFlag;
          preTaxes.forEach(function (pretax) {
            atleastOnePretaxFlag = true;

            _this60.invoiceTax.push(_this60.buildPretaxFormGroup(pretax));

            console.log(_this60.invoiceTax);
          });
          this.displayPreTax = atleastOnePretaxFlag;
        }
      }, {
        key: "buildPretaxFormGroup",
        value: function buildPretaxFormGroup(pretax) {
          return this.fb.group({
            id: pretax.id,
            tranAccId: pretax.tranAccId,
            taxCategoryId: pretax.taxCategoryId,
            taxSlabId: pretax.taxSlabId,
            tax: pretax.tax,
            preTaxValue: pretax.preTaxValue,
            iPreTaxValue: pretax.iPreTaxValue,
            ledpost: pretax.ledpost,
            taxes: this.buildTaxesFormArray(pretax.taxes)
          });
        }
      }, {
        key: "buildTaxesFormArray",
        value: function buildTaxesFormArray(taxes) {
          var _this61 = this;

          var taxesFormArray = this.fb.array([]);

          if (taxes.length > 0) {
            taxes.forEach(function (tax) {
              if (tax.taxStakeName && tax.taxStakeName === 'IGST') {
                _this61.hasIGST = true;
              }

              taxesFormArray.push(_this61.fb.group({
                id: tax.id,
                taxAccId: tax.taxAccId,
                taxSlabId: tax.taxSlabId,
                taxStakeId: tax.taxStakeId,
                taxStakeName: tax.taxStakeName,
                stakeContribution: tax.stakeContribution,
                stakeValue: tax.stakeValue,
                iStakeValue: tax.iStakeValue,
                ledpost: tax.ledpost
              }));
            });
          } else {// taxesFormArray.push(this.formBuilder.group({
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
      }, {
        key: "getTaxes",
        value: function getTaxes() {
          return this.invoiceTax.get('taxes');
        }
      }, {
        key: "updateInvValueForFinalSave",
        value: function updateInvValueForFinalSave() {
          var inputTaxValues = 0;
          var pretaxes = this.invoiceTax ? this.invoiceTax.getRawValue() : [];
          pretaxes.forEach(function (pretax) {
            inputTaxValues = Number(inputTaxValues) + Number(pretax.iPreTaxValue ? pretax.iPreTaxValue : 0);
            pretax.taxes.forEach(function (tax) {
              inputTaxValues = Number(inputTaxValues) + Number(tax.iStakeValue ? tax.iStakeValue : 0);
            });
          });
          var netValue = Number(this.head.netValue);
          var debValue = Number(this.headFormGroup.controls.otherDed.value ? this.headFormGroup.controls.otherDed.value : 0);
          var hamaliValue = Number(this.headFormGroup.controls.hamaliValue.value ? this.headFormGroup.controls.hamaliValue.value : 0);
          var crValue = Number(this.headFormGroup.controls.otherAdd.value ? this.headFormGroup.controls.otherAdd.value : 0);
          this.headFormGroup.controls.invValue.patchValue(Number(inputTaxValues) + Number(debValue) - Number(crValue) + Number(hamaliValue));
          this.headFormGroup.controls.netValue.patchValue(Number(netValue) + Number(debValue) - Number(crValue) + Number(hamaliValue));
        }
      }, {
        key: "resetFinalSave",
        value: function resetFinalSave() {
          this.headFormGroup.reset(Object.assign({}, this.head), {
            emitEvent: false
          });
          this.buildPretaxesFormGroup();
        }
      }, {
        key: "validateFloatKeyPress",
        value: function validateFloatKeyPress(el) {
          var v = parseFloat(el.value); // el.value = (isNaN(v)) ? '' : v.toFixed(2);

          el.value = (Math.round(v * 100) / 100).toFixed(2);
        }
      }, {
        key: "resetDialog",
        value: function resetDialog() {
          this.salesReturnDetails.reset();
          this.selectedProdid = 0;
        }
      }, {
        key: "djadjInput",
        value: function djadjInput(val) {
          if (val == 0) {
            this.otherDedAccId.disable();
          } else {
            this.otherDedAccId.enable();
          }
        }
      }, {
        key: "cjadjInput",
        value: function cjadjInput(val) {
          if (val == 0) {
            this.otherAddAccId.disable();
          } else {
            this.otherAddAccId.enable();
          }
        }
      }, {
        key: "doFinalSave",
        value: function doFinalSave() {
          var _this62 = this;

          var headData = this.headFormGroup.getRawValue();
          var preTaxData = this.invoiceTax.getRawValue();
          this.head.hamaliValue = headData.hamaliValue;
          var inwardHead = Object.assign({}, this.head, this.headFormGroup.getRawValue());
          inwardHead.otherAddAccId = this.otherAddAccId.value.accId;
          inwardHead.otherDedAccId = this.otherDedAccId.value.accId;
          this.preTaxesData.forEach(function (x, i) {
            x.iPreTaxValue = +preTaxData[i].iPreTaxValue; // this.inwardTaxes.forEach((y,j)=>{
            //   if(x.taxSlabId == y.taxSlabId){
            //     y.iStakeValue = +preTaxData[i].taxes[j].iStakeValue;
            //   }
            // })
          });
          preTaxData.forEach(function (y) {
            if (y.taxes.length > 0) {
              _this62.inwardTaxes.forEach(function (z) {
                var taxStakeId = y.taxes.find(function (x) {
                  return x.taxStakeId == z.taxStakeId;
                });

                if (taxStakeId) {
                  z.iStakeValue = +taxStakeId.iStakeValue;
                }
              });
            }
          });
          var petaxes = this.preTaxesData;
          var inwardTaxes = this.inwardTaxes;
          var payload = {
            inwardHead: inwardHead,
            inwardPreTaxes: petaxes,
            inwardTaxes: inwardTaxes,
            inwardDetails: this.inwardDetails
          };
          console.log(inwardHead);
          console.log(petaxes);
          console.log(inwardTaxes); // console.log(this.headFormGroup.getRawValue());
          // console.log(this.invoiceTax.getRawValue())
          // let finalSaveHead={...this.head,...this.headFormGroup.getRawValue() as InwardHead,'pretaxes':[...this.invoiceTax.getRawValue() as Pretax[]]};
          // console.log(finalSaveHead);
          // finalSaveHead['otherAddAccountMaster'] = finalSaveHead['otheraddAccid'];
          // finalSaveHead['otherDebAccountMaster'] = finalSaveHead['otherdebAccid'];

          this.inwardService.InwardFinalSave(payload).subscribe(function (data) {
            src_app_shared_utils_response_utils__WEBPACK_IMPORTED_MODULE_19__["default"].isStatus200(data);

            _this62.router.navigate(['pharma/outward/salesReturns']);
          });
        }
      }, {
        key: "buildHeadFormGroupForFinalSave",
        value: function buildHeadFormGroupForFinalSave() {
          var _this63 = this;

          var finalSaveHeadKeys = ['hamaliValue', 'invValue', 'netValue', 'otherAdd', 'otherAddAccId', 'otherDed', 'otherDedAccId', 'remarks'];
          this.headFormGroup = this.fb.group({});
          finalSaveHeadKeys.forEach(function (headKey) {
            var validatorFn = headKey === 'invValue' ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : null;

            _this63.headFormGroup.addControl(headKey, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](headKey === 'netValue' ? {
              value: '',
              disabled: true
            } : '', validatorFn));
          });
          this.headFormGroup.reset(Object.assign({}, this.head));
        }
      }, {
        key: "subscribeForFinalSaveChanges",
        value: function subscribeForFinalSaveChanges() {
          var _this64 = this;

          this.headFormGroupSubscription.add(this.headFormGroup.controls.hamaliValue.valueChanges.subscribe(function (hamaliValue) {
            return _this64.updateInvValueForFinalSave();
          }));
          this.headFormGroupSubscription.add(this.headFormGroup.controls.otherAdd.valueChanges.subscribe(function (crValue) {
            return _this64.updateInvValueForFinalSave();
          }));
          this.headFormGroupSubscription.add(this.headFormGroup.controls.otherDed.valueChanges.subscribe(function (debValue) {
            return _this64.updateInvValueForFinalSave();
          }));
        }
      }, {
        key: "openSelect",
        value: function openSelect(select) {
          select.open();
        }
      }]);

      return SaleReturnComponent;
    }();

    SaleReturnComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _in_ward_in_ward_service__WEBPACK_IMPORTED_MODULE_4__["InwardService"]
      }, {
        type: _Master_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]
      }, {
        type: src_app_shared_components_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]
      }, {
        type: _outward_service__WEBPACK_IMPORTED_MODULE_18__["OutwardService"]
      }, {
        type: src_app_shared_services_route_service__WEBPACK_IMPORTED_MODULE_20__["RouteService"]
      }, {
        type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_21__["HttpService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    })], SaleReturnComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CompanyTab', {
      "static": false
    })], SaleReturnComponent.prototype, "CompanyTab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], SaleReturnComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productName', {
      "static": true
    })], SaleReturnComponent.prototype, "productName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('purchaseDetailTemplate', {
      "static": true
    })], SaleReturnComponent.prototype, "purchaseDetailTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('saleReturnDetailButtonTemplate', {
      "static": true
    })], SaleReturnComponent.prototype, "saleReturnDetailButtonTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productHistory', {
      "static": true
    })], SaleReturnComponent.prototype, "productHistory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deletePurchaseHeadTemplate', {
      "static": false
    })], SaleReturnComponent.prototype, "deletePurchaseHeadTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deletePurchase', {
      "static": false
    })], SaleReturnComponent.prototype, "deletePurchase", void 0);
    SaleReturnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sale-return',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sale-return.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/distribution/out-ward/sale-return/sale-return.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sale-return.component.scss */
      "./src/app/distribution/out-ward/sale-return/sale-return.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../out-ward.component.scss */
      "./src/app/distribution/out-ward/out-ward.component.scss"))["default"]]
    })], SaleReturnComponent);
    /***/
  }
}]);
//# sourceMappingURL=out-ward-out-ward-module-es5.js.map