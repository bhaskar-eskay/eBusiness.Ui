import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DynamicTabsService, TabModel } from '../shared/components/dynamic-tabs/dynamic-tabs.service';
import { MasterService } from './Master/master.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss']
})
export class DistributionComponent implements OnInit {

  @ViewChild('dynaTab1',{static:false}) dynaTab1;
  @ViewChild('dynaTab2',{static:false}) dynaTab2;
  isTabView:boolean;

  distDynaTabsId='distDynaTabsId';

  dynaTabsDefination={
    'dynaTab1':()=>this.getDynaTab1(),
    'dynaTab2':()=>this.getDynaTab2()
  };
  reportDate: string;
  expirySlots: any;
  expiryProducts: any;
  expArray: any[] = []; 

  @HostListener('window:keydown.alt.p', ['$event'])
  keyEvent() {
    let tabModel={} as TabModel;
    tabModel.id=2;
    tabModel.templateRefId='dynaTab1';
    tabModel.title='DynaTab1'
    this.dynaTabService.addTab(this.distDynaTabsId,tabModel);
  }

  @HostListener('window:keydown.alt.s', ['$event'])
  keyEvent2() {
    let tabModel={} as TabModel;
    tabModel.id=0;
    tabModel.templateRefId='dynaTab2';
    tabModel.title='DynaTab2'
    this.dynaTabService.addTab(this.distDynaTabsId,tabModel);
  }

  constructor(private dynaTabService:DynamicTabsService,private masterService:MasterService, private datepipe:DatePipe) { }

  ngOnInit() {
    this.reportDate = this.datepipe.transform(new Date(),'yyyy-MM-dd');
    this.expirySlots = JSON.parse(sessionStorage.getItem('firmPreferences'));
    this.GetExpiryStockSlots(30);
    this.GetExpiryStockSlots(60);
  }

  getDynaTab1(){
    return this.dynaTab1;
  }

  GetExpiryStockSlots(val){
    this.masterService.GetExpiryStockSlots(val,this.reportDate,this.expirySlots.finSdate.split('T')[0],this.expirySlots.finEdate.split('T')[0],'').subscribe(r=>{
      if(r){
        this.expiryProducts = r.objListExpiryStockSlots;
        console.log(this.expiryProducts)
        this.expiryProducts.forEach(x => {
          if(x){
            if(x){
              var dt = x.expiry;
              dt = dt.slice(5,7) + '-' + dt.slice(2,4);
              x.expiry = dt;
            }
            if(x.company_Name.trim() != '' && x.company_Name.trim() != undefined && x.company_Name.trim() != null){
              this.expArray.push(x);
            }   
          }
        });
      }
    })
  }

  getDynaTab2(){
    return this.dynaTab2;
  }

  updateTabView(tabViewFlag) {
    this.isTabView=tabViewFlag;
  }

}
