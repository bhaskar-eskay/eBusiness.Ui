
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  navLinks= [
    {link:'firmgroupregistration', label:'Firm Group Registration'},
    {link:'firmregistration', label:'Firm Registration'},
    {link:'adminregistration', label:'Admin Registration'},
    {link:'ltoregistration', label:'LTO Registration'},
  ]
  constructor() { }

  ngOnInit() { }

}
