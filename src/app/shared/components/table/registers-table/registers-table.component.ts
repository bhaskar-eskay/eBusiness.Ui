import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registers-table',
  templateUrl: './registers-table.component.html',
  styleUrls: ['./registers-table.component.scss']
})
export class RegistersTableComponent implements OnInit {
  @Input('dataSource') dataSource:any[];
  displayedColumns: string[] = [];
  originalData: any[] = [];

  constructor() { }

  ngOnInit() {
    if (this.dataSource && this.dataSource.length > 0) {
      this.displayedColumns = Object.keys(this.dataSource[0]);
    }
    this.originalData = [...this.dataSource];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    if (!filterValue) {
      this.dataSource = [...this.originalData]; // Reset data when input is empty
    } else {
      this.dataSource = this.originalData.filter(row => 
        this.displayedColumns.some(column => 
          row[column] && row[column].toString().toLowerCase().includes(filterValue)
        )
      );
    }
  }

}
