import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../Master/master.service';
import { DatePipe } from '@angular/common';
import { MatTableDataSource, MatPaginator, MatSort, MatSelect } from '@angular/material';
import { TableDefinition } from 'src/app/shared/components/table/table-model';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import { DialogData, DialogClass } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  expiryslots: any;
  reportDate: any;
  slotValues: any;
  isDataLoading: boolean;
  dynamicSlot: any;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('expirydataTable', { static: true }) expirydataTable;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dyexpslot: any;
  dashboardData: any;
  constructor(private router: Router, private masterService: MasterService, private datepipe: DatePipe, private dialogService: DialogService) { }

  tableDefinition: TableDefinition = {
    columns: [
      { id: 'sh_Name', name: 'Sh.name', value: (obj) => obj['sh_Name'] ? obj['sh_Name'] : '' },
      { id: 'batch', name: 'Batch No', value: (obj) => obj['batch'] ? obj['batch'] : '' },
      { id: 'city', name: 'City Name', value: (obj) => obj['city'] ? obj['city'] : '' },
      { id: 'company_Name', name: 'Company Name', value: (obj) => obj['company_Name'] ? obj['company_Name'] : '' },
      { id: 'product_Name', name: 'Product Name', value: (obj) => obj['prod_Name'] ? obj['prod_Name'] : '' },
      { id: 'expiry', name: 'Exp.Date', value: (obj) => obj['expiry'] ? this.datepipe.transform(obj['expiry'], 'dd-MM-yyyy') : '' },
      { id: 'inv_Date', name: 'Invoice Date', value: (obj) => obj['inv_Date'] ? this.datepipe.transform(obj['inv_Date'], 'dd-MM-yyyy') : '' },
      { id: 'pur_Date', name: 'Purchase Date', value: (obj) => obj['pur_Date'] ? this.datepipe.transform(obj['pur_Date'], 'dd-MM-yyyy') : '' },
      {
        id: 'qty', name: 'Qty', value: (obj) => {
          let invqty = obj['qty'] ? obj['qty'] : '';
          return invqty ? parseFloat(invqty).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
        }
      },
      { id: 'qty_Disc', name: 'Qty.Disc', value: (obj) => obj['qty_Disc'] ? obj['qty_Disc'] : '' },
      {
        id: 'p_Rate', name: 'Inv.Rate', value: (obj) => {
          let purrate = obj['p_Rate'] ? obj['p_Rate'] : '';
          return purrate ? parseFloat(purrate).toFixed(2) : '';  // Convert to float and ensure 2 decimal places
        }
      },
      { id: 'supplier', name: 'Supplier', value: (obj) => obj['supplier'] ? obj['supplier'] : '' },
    ]
  }

  ngOnInit() {
    this.reportDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd')
    const autData = JSON.parse(sessionStorage.getItem("authDetails"));
    console.log(autData.firmId);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.masterService.GetFirmPreferences(autData.firmId).subscribe(x => {
      if (x) {
        console.log(x);
        this.expiryslots = {
          expirySlot1: x.expirySlot1,
          expirySlot2: x.expirySlot2,
          expirySlot3: x.expirySlot3,
          expirySlot4: x.expirySlot4,
          finSDate: x.finSdate.split('T')[0],
          finEDate: x.finEdate.split('T')[0]
        }
        sessionStorage.setItem("firmPreferences", JSON.stringify(x));
        this.expirystocksummary();
        this.Getdashboarddata();
      }
    });

  }

  expirystocksummary() {
    this.masterService.GetExpiryStockSummary(this.expiryslots.expirySlot1, this.expiryslots.expirySlot2, this.expiryslots.expirySlot3,
      this.expiryslots.expirySlot4, this.reportDate, this.expiryslots.finSDate, this.expiryslots.finEDate, '').subscribe(r => {
        if (r) {
          console.log(r);
          this.slotValues = {
            exp_Slot1: r[0].exp_Slot1,
            exp_Slot2: r[0].exp_Slot2,
            exp_Slot3: r[0].exp_Slot3,
            exp_Slot4: r[0].exp_Slot4
          }
        }
      })
  }

  routeAdmin() {
    this.router.navigate(['./pharma/admin/firmgroupregistration']);
  }

  todays(val) {
    if (val == 'purchases') {
      this.router.navigate(['pharma/inward/purchases']);
    }
    else if (val == 'sales') {
      this.router.navigate(['pharma/outward/salesInvoices']);
    }
    else if (val == 'Sreturns') {
      this.router.navigate(['pharma/outward/salesReturns']);
    }
    else if (val == 'Preturns') {
      this.router.navigate(['pharma/inward/purchaseReturns']);
    }
    else if (val == 'cashR') {
      this.router.navigate(['pharma/finance/cashReceipts']);
    }
    else if (val == 'bankR') {
      this.router.navigate(['pharma/finance/bankReceipts']);
    }
    else if (val == 'cash') {
      this.router.navigate(['pharma/finance/cashPayments']);
    }
    else if (val == 'bank') {
      this.router.navigate(['pharma/finance/bankPayments']);
    }
  }

  showexpirydata(val) {
    this.dyexpslot = val;
    let dialogInputs: DialogData = {} as DialogData
    this.dialogService.closeAllDialogues();
    dialogInputs.dialogClass = DialogClass.MEDIUM;
    dialogInputs.title = 'Expiry Stocks In ' + val + ' Days';
    dialogInputs.closeBtnLabel = 'Close';
    dialogInputs.templateRef = () => this.expirydataTable;
    this.dialogService.showDialogue(dialogInputs, { disableClose: true });
  }


  expiryslot(val) {
    this.isDataLoading = true;
    this.dynamicSlot = null;
    console.log(this.expirydataTable)
    this.masterService.GetExpiryStockSlots(val, this.reportDate, this.expiryslots.finSDate, this.expiryslots.finEDate, '').subscribe(r => {
      if (r) {
        console.log(r);
        this.dynamicSlot = r.objListExpiryStockSlots;
        this.isDataLoading = false;
        this.showexpirydata(val);
      }
    })
  }

  Getdashboarddata() {
    this.isDataLoading = true;
    this.dashboardData = null;
    console.log(this.expirydataTable)
    const payload = {
      reportDate: this.reportDate,
      finSDate: this.expiryslots.finSDate,
      finEDate: this.expiryslots.finEDate
    }
    this.masterService.GetDashboardData(payload).subscribe(r => {
      if (r) {
        this.dashboardData = r;
        console.log(this.dashboardData);
      }
    })
  }

  exportToExcel() {

    this.masterService.GetExpiryStockSlotsExcel(this.reportDate, this.dyexpslot, this.expiryslots.finSDate, this.expiryslots.finEDate, '').subscribe(
      (res: any) => {
        const base64String = res;
        const fileName = 'ExpiryStockSlots.xlsx'; // Desired file name
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
      },
      (err) => {
        console.error('Error generating Excel file:', err);
      }
    );
  }

  showHide(id,my) {

    const x = document.getElementById(id);
    const m: any = document.getElementsByClassName(my);
    if (x.classList.contains('fa-eye-slash')) {
      x.classList.remove('fa-eye-slash');
      x.classList.add('fa-eye');
      for (let i = 0; i < m.length; i++) {
        m[i].innerText = ' 14,58,323.84';
      }
    } else {
      x.classList.remove('fa-eye');
      x.classList.add('fa-eye-slash');
      for (let i = 0; i < m.length; i++) {
        m[i].innerText = ' xxxxxxxxxx';
      }
    }
  }



}
