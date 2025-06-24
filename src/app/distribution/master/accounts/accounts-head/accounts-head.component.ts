import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-head',
  templateUrl: './accounts-head.component.html',
  styleUrls: ['./accounts-head.component.scss']
})
export class AccountsHeadComponent implements OnInit {

  navLinks= [
    {link:'customAccountsList', label:'Accounts'},
    {link:'schedule', label:'Schedule'},
    // {link:'subschedule', label:'Sub-Schedule'},
    {link:'area', label:'Area'},
    {link:'bank', label:'Bank'},
    {link:'city', label:'Map City Accounts'}
    
  ]

  constructor() { 
    console.log("Accounts Constructor");
  }

  ngOnInit() {
    console.log("Accounts ngOnInit");
  }

}
