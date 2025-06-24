import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-head',
  templateUrl: './tax-head.component.html',
  styleUrls: ['./tax-head.component.scss']
})
export class TaxHeadComponent implements OnInit {


  navLinks= [
    {link:'tax', label:'Tax'},
    {link:'taxslabs', label:'Tax Slabs'},
    {link:'taxTransactionTypes', label:'Tax Transaction Types'},
    {link:'taxStakes', label:'Tax Stakes'},
    {link:'transactionTypeDetails', label:'Transaction Type Details'} ,
    {link:'standardPrefix', label:'Standard Prefix'}   
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
