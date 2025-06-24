import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-reports',
  templateUrl: './inventory-reports.component.html',
  styleUrls: ['./inventory-reports.component.scss']
})
export class InventoryReportsComponent implements OnInit {
  authDetails: any;
  menuArray: Menu[];

  constructor(private route:Router) { }

  ngOnInit() {    
}
}
