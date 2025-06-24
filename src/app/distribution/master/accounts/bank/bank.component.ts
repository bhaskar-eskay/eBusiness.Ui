import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterService } from '../../master.service';

export interface PeriodicElement {
  bankName: string;
  bankIfsc: string;
}

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss', '../../master.component.scss']
})
export class BankComponent implements OnInit {
  areaform: FormGroup;
  bankForm: FormGroup;
  banks: any;
  bankNameFilter: string = '';
  ifscFilter: string = '';
  originalData: any[] = [];
  constructor(private masterService: MasterService) { }

  displayedColumns: string[] = ['bankName', 'ifscPrefix'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.bankForm = new FormGroup({
      bankName: new FormControl('', Validators.required),
      bankIfsc: new FormControl('', Validators.required),


    })
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getbanks();
  }

  getbanks() {
    this.masterService.getbankDetails().subscribe(data => {
      if (data) {
        this.dataSource.data = data;
        this.originalData = data;
      }
    });
  }

  savebankform() {

  }

  filterData() {
    const nameFilter = this.bankNameFilter.trim().toLowerCase();
    const ifscFilter = this.ifscFilter.trim().toLowerCase();

    this.dataSource.data = this.originalData.filter(item => {
      const matchesBank = item.bankName.toLowerCase().includes(nameFilter);
      const matchesIfsc = item.ifscPrefix.toLowerCase().includes(ifscFilter);
      return matchesBank && matchesIfsc;
    });
  }

  resetFilters() {
    this.bankNameFilter = '';
    this.ifscFilter = '';
    this.dataSource.data = this.originalData;
  }


}
