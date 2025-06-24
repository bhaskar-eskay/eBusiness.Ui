export const menu=
[
   {
      "id": 1,
      "name": "Home",
      "pId": 0,
      "path": "/ebusiness/pharma/dashboard",
      "icon": "home"
   },
   {
      "id": 2,
      "name": "Masters",
      "pId": 0,
      "path": "/ebusiness/pharma/masters",
      "icon": "memory",
       "menus": [
         {
            "id": 201,
            "name": "Accounts",
            "pId": 2,
            "path": "/ebusiness/pharma/masters/accounts",
             "menus": [
                {
                   "id": 401,
                   "name": "Custom Accounts",
                   "pId": 201,
                   "path": "/ebusiness/pharma/masters/accounts/customAccounts"
                },
                {
                   "id": 402,
                   "name": "Schedule",
                   "pId": 201,
                   "path": "/ebusiness/pharma/masters/accounts/schedule"
                },
                {
                   "id": 403,
                   "name": "Sub-Schedule",
                   "pId": 201,
                   "path": "/ebusiness/pharma/masters/accounts/subschedule"
                },
                {
                   "id": 404,
                   "name": "Staff",
                   "pId": 201,
                   "path": "/ebusiness/pharma/masters/accounts/staff"
                },
                {
                   "id": 405,
                   "name": "Area",
                   "pId": 201,
                   "path": "/ebusiness/pharma/masters/accounts/area"
                },
                {
                   "id": 406,
                   "name": "Bank",
                   "pId": 201,
                   "path": "/ebusiness/pharma/masters/accounts/bank"
                }
            ]
         },
         {
            "id": 202,
            "name": "Products",
            "pId": 2,
            "path": "/ebusiness/pharma/masters/products",
             "menus": [
                {
                   "id": 407,
                   "name": "Custom Products",
                   "pId": 202,
                   "path": "/ebusiness/pharma/masters/products/customProductsList"
                },
                {
                   "id": 408,
                   "name": "Manufacturer",
                   "pId": 202,
                   "path": "/ebusiness/pharma/masters/products/manufacturer"
                },
                {
                   "id": 409,
                   "name": "Product Categories",
                   "pId": 202,
                   "path": "/ebusiness/pharma/masters/products/productCategories"
                },
                {
                   "id": 410,
                   "name": "Product Groups",
                   "pId": 202,
                   "path": "/ebusiness/pharma/masters/products/productGroups"
                },
                {
                   "id": 411,
                   "name": "Product Combinations",
                   "pId": 202,
                   "path": "/ebusiness/pharma/masters/products/productCombinations"
                },
                {
                   "id": 412,
                   "name": "Product Locations",
                   "pId": 202,
                   "path": "/ebusiness/pharma/masters/products/productLocations"
                },
                {
                   "id": 413,
                   "name": "Product Packs",
                   "pId": 202,
                   "path": "/ebusiness/pharma/masters/products/productPacks"
                },
                {
                   "id": 414,
                   "name": "Custom Companies",
                   "pId": 202,
                   "path": "/ebusiness/pharma/masters/products/customCompanies"
                },
                {
                   "id": 415,
                   "name": "Custom Company Divisions",
                   "pId": 202,
                   "path": "/ebusiness/pharma/masters/products/customCompanyDivisions"
                }
            ]
         },
         {
            "id": 203,
            "name": "Taxation",
            "pId": 2,
            "path": "/ebusiness/pharma/masters/taxation",
              "menus": [
                {
                   "id": 416,
                   "name": "Tax",
                   "pId": 203,
                   "path": "/ebusiness/pharma/masters/taxation/tax"
                },
                {
                   "id": 417,
                   "name": "TaxSlabs",
                   "pId": 203,
                   "path": "/ebusiness/pharma/masters/taxation/taxslabs"
                },
                {
                   "id": 418,
                   "name": "Tax Transaction Types",
                   "pId": 203,
                   "path": "/ebusiness/pharma/masters/taxation/taxTransactionTypes"
                },
                {
                   "id": 419,
                   "name": "Tax Stakes",
                   "pId": 203,
                   "path": "/ebusiness/pharma/masters/taxation/taxStakes"
                },
                {
                   "id": 420,
                   "name": "Transaction Type Details",
                   "pId": 203,
                   "path": "/ebusiness/pharma/masters/taxation/transactionTypeDetails"
                },
                {
                   "id": 421,
                   "name": "Standard Prefix",
                   "pId": 203,
                   "path": "/ebusiness/pharma/masters/taxation/standardPrefix"
                }
             ]
         },
         {
            "id": 204,
            "name": "Others",
            "pId": 2,
            "path": "/ebusiness/pharma/masters/others",
             "menus": [
               {
                  "id": 422,
                  "name": "Patients",
                  "pId": 204,
                  "path": "/ebusiness/pharma/masters/others/patients"
               },
               {
                  "id": 423,
                  "name": "Doctors",
                  "pId": 204,
                  "path": "/ebusiness/pharma/masters/others/doctors"
               }
            ]
         }
      ]
   },
   {
      "id": 3,
      "name": "Inward",
      "pId": 0,
      "path": "/ebusiness/pharma/inward",
      "icon": "system_update_alt",
       "menus": [
         {
            "id": 205,
            "name": "Purchase Order",
            "pId": 3,
            "path": "/ebusiness/pharma/inward/purchaseOrder"
         },
         {
            "id": 206,
            "name": "Purchases",
            "pId": 3,
            "path": "/ebusiness/pharma/inward/purchases"
         },
         {
            "id": 207,
            "name": "Purchase Return",
            "pId": 3,
            "path": "/ebusiness/pharma/inward/purchaseReturn"
         },
         {
            "id": 208,
            "name": "Internal Stock Adjustments Plus",
            "pId": 3,
            "path": "/ebusiness/pharma/inward/internalStockAdjustmentsPlus"
         },
         {
            "id": 209,
            "name": "Other Purchase",
            "pId": 3,
            "path": "/ebusiness/pharma/inward/otherPurchase"
         },
         {
            "id": 210,
            "name": "Supplier Issued Credit Note",
            "pId": 3,
            "path": "/ebusiness/pharma/inward/supplierIssuedCreditNote"
         },
         {
            "id": 211,
            "name": "Supplier Issued Debit Note",
            "pId": 3,
            "path": "/ebusiness/pharma/inward/supplierIssuedDebitNote"
         },
         {
            "id": 212,
            "name": "Supplier Rate Difference Credit Note",
            "pId": 3,
            "path": "/ebusiness/pharma/inward/supplierRateDifferenceCreditNote"
         },
         {
            "id": 213,
            "name": "Supplier Rate Difference Debit Note",
            "pId": 3,
            "path": "/ebusiness/pharma/inward/supplierRateDifferenceDebitNote"
         }
      ]
   },
   {
      "id": 4,
      "name": "Outward",
      "pId": 0,
      "path": "/ebusiness/pharma/outward",
      "icon": "all_out",
       "menus": [
         {
            "id": 214,
            "name": "Sales Order",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/saleOrder"
         },
         {
            "id": 215,
            "name": "Sales Delivery Challan",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/salesDeliveryChallan"
         },
         {
            "id": 216,
            "name": "Sales Invoice",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/salesInvoices"
         },
         {
            "id": 217,
            "name": "Sales Return",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/salesReturn"
         },
         {
            "id": 218,
            "name": "Internal Stock Adjustments Minus",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/internalStockAdjustmentsMinus"
         },
         {
            "id": 219,
            "name": "Other Sales",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/otherSales"
         },
         {
            "id": 220,
            "name": "General Credit Notes Issue To Customers",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/generalCreditNotesIssueToCustomers"
         },
         {
            "id": 221,
            "name": "General Debit Notes Issue To Customers",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/generalDebitNotesIssueToCustomers"
         },
         {
            "id": 222,
            "name": "Rate Difference Credit Note To Customers",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/rateDifferenceCreditNoteToCustomers"
         },
         {
            "id": 223,
            "name": "Rate Difference Debit Note To Customers",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/rateDifferenceDebitNoteToCustomers"
         },
         {
            "id": 224,
            "name": "Quotations",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/quotations"
         },
         {
            "id": 225,
            "name": "Retail Sales",
            "pId": 4,
            "path": "/ebusiness/pharma/outward/retailSales"
         }
      ]
   },
   {
      "id": 5,
      "name": "Inventory Reports",
      "pId": 0,
      "path": "/ebusiness/pharma/inventoryReports",
      "icon": "assignment",
       "menus": [
         {
            "id": 226,
            "name": "Stock Reports",
            "pId": 5,
            "path": "/ebusiness/pharma/inventoryReports/stockReports",
             "menus": [
               {
                  "id": 424,
                  "name": "Stock Position",
                  "pId": 226,
                  "path": "/ebusiness/pharma/inventoryReports/stockReports/stockPosition"
               },
               {
                  "id": 425,
                  "name": "Stock Statement",
                  "pId": 226,
                  "path": "/ebusiness/pharma/inventoryReports/stockReports/stockStatement"
               },
               {
                  "id": 426,
                  "name": "Stock Ledger",
                  "pId": 226,
                  "path": "/ebusiness/pharma/inventoryReports/stockReports/stockLedger"
               },
               {
                  "id": 427,
                  "name": "Stock Value",
                  "pId": 226,
                  "path": "/ebusiness/pharma/inventoryReports/stockReports/stockValue"
               }
            ]
         },
         {
            "id": 227,
            "name": "Company Reports",
            "pId": 5,
            "path": "/ebusiness/pharma/inventoryReports/companyReports",
             "menus": [
               {
                  "id": 428,
                  "name": "Sale Analysis",
                  "pId": 227,
                  "path": "/ebusiness/pharma/inventoryReports/companyReports/saleAnalysis"
               },
               {
                  "id": 429,
                  "name": "Purchase Analysis",
                  "pId": 227,
                  "path": "/ebusiness/pharma/inventoryReports/companyReports/purchaseAnalysis"
               },
               {
                  "id": 430,
                  "name": "Internal Stock Analysis",
                  "pId": 227,
                  "path": "/ebusiness/pharma/inventoryReports/companyReports/internalStockAnalysis"
               }
            ]
         },
         {
            "id": 228,
            "name": "Product Reports",
            "pId": 5,
            "path": "/ebusiness/pharma/inventoryReports/productReports",
             "menus": [
               {
                  "id": 431,
                  "name": "Product Wise Sales",
                  "pId": 228,
                  "path": "/ebusiness/pharma/inventoryReports/productReports/productWiseSales"
               },
               {
                  "id": 432,
                  "name": "Product Wise Purchases",
                  "pId": 228,
                  "path": "/ebusiness/pharma/inventoryReports/productReports/productWisePurchases"
               }
            ]
         },
         {
            "id": 229,
            "name": "Area Reports",
            "pId": 5,
            "path": "/ebusiness/pharma/inventoryReports/areaReports",
             "menus": [
               {
                  "id": 433,
                  "name": "Area Wise Sales",
                  "pId": 229,
                  "path": "/ebusiness/pharma/inventoryReports/areaReports/areaWiseSales"
               },
               {
                  "id": 434,
                  "name": "Area Wise Collections",
                  "pId": 229,
                  "path": "/ebusiness/pharma/inventoryReports/areaReports/areaWiseCollections"
               }
            ]
         },
         {
            "id": 230,
            "name": "Customer Reports",
            "pId": 5,
            "path": "/ebusiness/pharma/inventoryReports/customerReports",
             "menus": [
               {
                  "id": 435,
                  "name": "Customer Product Wise Sales",
                  "pId": 230,
                  "path": "/ebusiness/pharma/inventoryReports/customerReports/customerProductWiseSales"
               },
               {
                  "id": 436,
                  "name": "Customer Company Wise Sales",
                  "pId": 230,
                  "path": "/ebusiness/pharma/inventoryReports/customerReports/customerCompanyWiseSales"
               }
            ]
         },
         {
            "id": 231,
            "name": "P&LReports",
            "pId": 5,
            "path": "/ebusiness/pharma/inventoryReports/plreports",
             "menus": [
               {
                  "id": 437,
                  "name": "Product Wise",
                  "pId": 231,
                  "path": "/ebusiness/pharma/inventoryReports/plreports/productWise"
               },
               {
                  "id": 438,
                  "name": "Company Wise",
                  "pId": 231,
                  "path": "/ebusiness/pharma/inventoryReports/plreports/companyWise"
               },
               {
                  "id": 439,
                  "name": "Customer Wise",
                  "pId": 231,
                  "path": "/ebusiness/pharma/inventoryReports/plreports/customerWise"
               },
               {
                  "id": 440,
                  "name": "Area Wise",
                  "pId": 231,
                  "path": "/ebusiness/pharma/inventoryReports/plreports/areaWise"
               }
            ]
         },
         {
            "id": 232,
            "name": "Tax Wise Items",
            "pId": 5,
            "path": "/ebusiness/pharma/inventoryReports/taxWiseItems"
         },
         {
            "id": 233,
            "name": "Nill Stock",
            "pId": 5,
            "path": "/ebusiness/pharma/inventoryReports/nillStock"
         },
         {
            "id": 234,
            "name": "List",
            "pId": 5,
            "path": "/ebusiness/pharma/inventoryReports/list",
             "menus": [
               {
                  "id": 441,
                  "name": "Active Schemes",
                  "pId": 234,
                  "path": "/ebusiness/pharma/inventoryReports/list/activeSchemes"
               },
               {
                  "id": 442,
                  "name": "Item",
                  "pId": 234,
                  "path": "/ebusiness/pharma/inventoryReports/list/item"
               },
               {
                  "id": 443,
                  "name": "Expiry Items",
                  "pId": 234,
                  "path": "/ebusiness/pharma/inventoryReports/list/expiryItems"
               },
               {
                  "id": 444,
                  "name": "HSN/Comp Wise",
                  "pId": 234,
                  "path": "/ebusiness/pharma/inventoryReports/list/hsncompWise"
               },
               {
                  "id": 445,
                  "name": "Price List",
                  "pId": 234,
                  "path": "/ebusiness/pharma/inventoryReports/list/priceList"
               }
            ]
         },
         {
            "id": 235,
            "name": "Yearly Sales Reports",
            "pId": 5,
            "path": "/ebusiness/pharma/inventoryReports/yearlySalesReports"
         }
      ]
   },
   {
      "id": 6,
      "name": "Finance",
      "pId": 0,
      "path": "/ebusiness/pharma/finance",
      "icon": "monetization_on",
       "menus": [
         {
            "id": 236,
            "name": "Cash Receipts",
            "pId": 6,
            "path": "/ebusiness/pharma/finance/cashReceipts"
         },
         {
            "id": 237,
            "name": "Bank Receipts",
            "pId": 6,
            "path": "/ebusiness/pharma/finance/bankReceipts"
         },
         {
            "id": 238,
            "name": "Cash Payments",
            "pId": 6,
            "path": "/ebusiness/pharma/finance/cashPayments"
         },
         {
            "id": 239,
            "name": "Bank Payments",
            "pId": 6,
            "path": "/ebusiness/pharma/finance/bankPayments"
         },
         {
            "id": 240,
            "name": "Journal Vouchers",
            "pId": 6,
            "path": "/ebusiness/pharma/finance/journalVouchers"
         }
      ]
   },
   {
      "id": 7,
      "name": "Finance Reports",
      "pId": 0,
      "path": "/ebusiness/pharma/financeReports",
      "icon": "card_travel",
       "menus": [
         {
            "id": 241,
            "name": "Account Copy",
            "pId": 7,
            "path": "/ebusiness/pharma/financeReports/accountCopy"
         },
         {
            "id": 242,
            "name": "Trail Balance",
            "pId": 7,
            "path": "/ebusiness/pharma/financeReports/trailBalance"
         },
         {
            "id": 243,
            "name": "Trading Profit & Loss",
            "pId": 7,
            "path": "/ebusiness/pharma/financeReports/tradingProfitLoss"
         },
         {
            "id": 244,
            "name": "Balance Sheet",
            "pId": 7,
            "path": "/ebusiness/pharma/financeReports/balanceSheet"
         },
         {
            "id": 245,
            "name": "Book",
            "pId": 7,
            "path": "/ebusiness/pharma/financeReports/book",
             "menus": [
               {
                  "id": 446,
                  "name": "Cash",
                  "pId": 245,
                  "path": "/ebusiness/pharma/financeReports/book/cash"
               },
               {
                  "id": 447,
                  "name": "Bank",
                  "pId": 245,
                  "path": "/ebusiness/pharma/financeReports/book/bank"
               },
               {
                  "id": 448,
                  "name": "Journal",
                  "pId": 245,
                  "path": "/ebusiness/pharma/financeReports/book/journal"
               },
               {
                  "id": 449,
                  "name": "Day",
                  "pId": 245,
                  "path": "/ebusiness/pharma/financeReports/book/day"
               }
            ]
         },
         {
            "id": 246,
            "name": "General Ledger",
            "pId": 7,
            "path": "/ebusiness/pharma/financeReports/generalLedger"
         },
         {
            "id": 247,
            "name": "Schedule Printing",
            "pId": 7,
            "path": "/ebusiness/pharma/financeReports/schedulePrinting"
         },
         {
            "id": 248,
            "name": "Ageing Analysis",
            "pId": 7,
            "path": "/ebusiness/pharma/financeReports/ageingAnalysis"
         },
         {
            "id": 249,
            "name": "Debitors Outstanding",
            "pId": 7,
            "path": "/ebusiness/pharma/financeReports/debitorsOutstanding"
         },
         {
            "id": 250,
            "name": "Creditors OutStanding",
            "pId": 7,
            "path": "/ebusiness/pharma/financeReports/creditorsOutstanding"
         },
         {
            "id": 251,
            "name": "Interest Calculation",
            "pId": 7,
            "path": "/ebusiness/pharma/financeReports/interestCalculation"
         }
      ]
   },
   {
      "id": 8,
      "name": "GST Reports",
      "pId": 0,
      "path": "/ebusiness/pharma/gstReports",
      "icon": "table_chart",
       "menus": [
         {
            "id": 252,
            "name": "GST Registers",
            "pId": 8,
            "path": "/ebusiness/pharma/gstReports/gstRegisters",
             "menus": [
               {
                  "id": 450,
                  "name": "GSTIN Mismatch",
                  "pId": 252,
                  "path": "/ebusiness/pharma/gstReports/gstRegisters/gstinMismatch"
               },
               {
                  "id": 451,
                  "name": "Trading GST Reports",
                  "pId": 252,
                  "path": "/ebusiness/pharma/gstReports/gstRegisters/tradingGstReports"
               },
               {
                  "id": 452,
                  "name": "Total Sales Register",
                  "pId": 252,
                  "path": "/ebusiness/pharma/gstReports/gstRegisters/totalSalesRegister"
               },
               {
                  "id": 453,
                  "name": "Total Purchase Register",
                  "pId": 252,
                  "path": "/ebusiness/pharma/gstReports/gstRegisters/totalPurchaseRegister"
               }
            ]
         },
         {
            "id": 253,
            "name": "GSTR-1",
            "pId": 8,
            "path": "/ebusiness/pharma/gstReports/gstr1",
             "menus": [
               {
                  "id": 454,
                  "name": "B2B",
                  "pId": 253,
                  "path": "/ebusiness/pharma/gstReports/gstr1/b2b"
               },
               {
                  "id": 455,
                  "name": "B2CS",
                  "pId": 253,
                  "path": "/ebusiness/pharma/gstReports/gstr1/b2cs"
               },
               {
                  "id": 456,
                  "name": "CDNR",
                  "pId": 253,
                  "path": "/ebusiness/pharma/gstReports/gstr1/cdnr"
               },
               {
                  "id": 457,
                  "name": "Exemp",
                  "pId": 253,
                  "path": "/ebusiness/pharma/gstReports/gstr1/exemp"
               },
               {
                  "id": 458,
                  "name": "HSN Summary",
                  "pId": 253,
                  "path": "/ebusiness/pharma/gstReports/gstr1/hsnSummary"
               },
               {
                  "id": 459,
                  "name": "Docs",
                  "pId": 253,
                  "path": "/ebusiness/pharma/gstReports/gstr1/docs"
               },
               {
                  "id": 460,
                  "name": "All",
                  "pId": 253,
                  "path": "/ebusiness/pharma/gstReports/gstr1/all"
               }
            ]
         },
         {
            "id": 254,
            "name": "GSTR-2",
            "pId": 8,
            "path": "/ebusiness/pharma/gstReports/gstr2",
             "menus": [
               {
                  "id": 461,
                  "name": "B2B",
                  "pId": 254,
                  "path": "/ebusiness/pharma/gstReports/gstr2/b2b"
               },
               {
                  "id": 462,
                  "name": "B2Bur",
                  "pId": 254,
                  "path": "/ebusiness/pharma/gstReports/gstr2/b2bur"
               },
               {
                  "id": 463,
                  "name": "CDNR",
                  "pId": 254,
                  "path": "/ebusiness/pharma/gstReports/gstr2/cdnr"
               },
               {
                  "id": 464,
                  "name": "Exemp",
                  "pId": 254,
                  "path": "/ebusiness/pharma/gstReports/gstr2/exemp"
               },
               {
                  "id": 465,
                  "name": "HSN Summary",
                  "pId": 254,
                  "path": "/ebusiness/pharma/gstReports/gstr2/hsnSummary"
               },
               {
                  "id": 466,
                  "name": "All",
                  "pId": 254,
                  "path": "/ebusiness/pharma/gstReports/gstr2/all"
               }
            ]
         },
         {
            "id": 255,
            "name": "GSTR-3B",
            "pId": 8,
            "path": "/ebusiness/pharma/gstReports/gstr3b"
         },
         {
            "id": 256,
            "name": "GSTR-9",
            "pId": 8,
            "path": "/ebusiness/pharma/gstReports/gstr9",
             "menus": [
               {
                  "id": 467,
                  "name": "Outward Reports",
                  "pId": 256,
                  "path": "/ebusiness/pharma/gstReports/gstr9/outwardReports"
               },
               {
                  "id": 468,
                  "name": "Inward Reports",
                  "pId": 256,
                  "path": "/ebusiness/pharma/gstReports/gstr9/inwardReports"
               }
            ]
         },
         {
            "id": 257,
            "name": "GSTR Consolidations",
            "pId": 8,
            "path": "/ebusiness/pharma/gstReports/gstrConsolidations",
             "menus": [
               {
                  "id": 469,
                  "name": "GSTR1 Consolidations",
                  "pId": 257,
                  "path": "/ebusiness/pharma/gstReports/gstrConsolidations/gstr1Consolidations"
               },
               {
                  "id": 470,
                  "name": "GSTR2 Consolidations",
                  "pId": 257,
                  "path": "/ebusiness/pharma/gstReports/gstrConsolidations/gstr2Consolidations"
               },
               {
                  "id": 471,
                  "name": "GSTR3B Consolidations",
                  "pId": 257,
                  "path": "/ebusiness/pharma/gstReports/gstrConsolidations/gstr3bConsolidations"
               }
            ]
         }
      ]
   },
   {
      "id": 9,
      "name": "Administration",
      "pId": 0,
      "path": "/ebusiness/pharma/administration",
      "icon": "fingerprint",
       "menus": [
         {
            "id": 258,
            "name": "User Management",
            "pId": 9,
            "path": "/user/userManagement"
         },
         {
            "id": 259,
            "name": "Role Management",
            "pId": 9,
            "path": "/user/roleManagement"
         }
      ]
   },
   {
      "id": 10,
      "name": "Help",
      "pId": 0,
      "path": "/ebusiness/pharma/help",
      "icon": "help_outline"
   },
   {
      "id": 11,
      "name": "Tools",
      "pId": 0,
      "path": "/ebusiness/pharma/tools",
      "icon": "settings_applications",
       "menus": [
         {
            "id": 260,
            "name": "InvoiceConvertion",
            "pId": 11,
            "path": "/ebusiness/pharma/tools/invoiceconvertion"
         }
      ]
   }
];