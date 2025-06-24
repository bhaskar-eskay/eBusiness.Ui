import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DynamicTabsService, TabModel, Tab, TabEvent } from './dynamic-tabs.service';
import { Subscription } from 'rxjs';
import { RouteService } from '../../services/route.service';
import { trigger, transition, query, stagger, animateChild, style, animate } from '@angular/animations';
import { DialogService } from '../dialog/dialog.service';


class TabContent extends TabModel {
  template:TemplateRef<any>;
  isActive:boolean;
}

@Component({
  selector: 'app-dynamic-tabs',
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@items',
          stagger(300, animateChild())
        )
      ]),
    ]),
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
      ]),
    ]),

  ]
})
export class DynamicTabsComponent implements OnInit, OnDestroy {

  @Input() id:string;
  @Input() refFuncByIdConfig:{[id:string]:()=>TemplateRef<any>};
  @Output() tabView:EventEmitter<boolean>=new EventEmitter<boolean>();

  isTabView:boolean;
  activeTab:TabContent;
  //activeTabIndex:number;
  tabs:TabContent[]=[];
  subscription:Subscription=new Subscription();

  constructor(private service:DynamicTabsService, private routeService:RouteService,
    private dialogService:DialogService) { }

  ngOnInit() {
    this.doServiceSubscription();
    this.doRouterSubscription();
  }

  private setTabView(flag:boolean) {
    this.isTabView=flag;
    this.tabView.emit(flag);
  }

  private doServiceSubscription() {
    this.subscription.add(this.service.tabEvent$.subscribe(data=>{
      if(data && (data as Tab).id === this.id) {
        let tab=data as Tab;
        if(tab.event===TabEvent.DELETE) {this.closeTab(tab.model);}
        else if(tab.event===TabEvent.ADD) {this.addTab(tab.model);}
        else {this.updateTab(tab.model);}
      }

    }));
  }

  private doRouterSubscription() {
    this.subscription.add(this.routeService.routeChange$.subscribe(data=>this.setTabView(false)));
  }

  private addTab(tabModel:TabModel) {
    this.dialogService.closeAllDialogues();
    let index = this.tabs.findIndex(tab => tab.templateRefId == tabModel.templateRefId && tab.id === tabModel.id);
    if(this.activeTab) {
      this.activeTab.isActive=false;
    }
    if(index!==-1) {
      this.activeTab=this.tabs[index];
      this.activeTab.isActive=true;
    } else {
      let tabContent={...tabModel} as TabContent;
      tabContent.template=this.refFuncByIdConfig[tabContent.templateRefId]();
      this.tabs.push(tabContent);
      this.activeTab=this.tabs[this.tabs.length-1];
      this.activeTab.isActive=true;
    }
    this.setTabView(true);
  }

  private updateTab(tabModel:TabModel) {
    this.dialogService.closeAllDialogues();
    let index = this.tabs.findIndex(tab => tab.templateRefId == tabModel.templateRefId && tab.id === 0);
    let updateIndex=this.tabs.findIndex(tab => tab.templateRefId == tabModel.templateRefId && tab.id === tabModel.id);
    if(index !== -1 && updateIndex === -1) {
      if(this.activeTab) {
        this.activeTab.isActive=false;
      }
      let tabContent={...tabModel} as TabContent;
      tabContent.template=this.refFuncByIdConfig[tabContent.templateRefId]();
      this.tabs[index]=tabContent;
      this.activeTab=this.tabs[index];
      this.activeTab.isActive=true;
    }
    this.setTabView(true);
  }

  private closeTab(tabModel:TabModel) {
    let index = this.tabs.findIndex(tab => tab.templateRefId == tabModel.templateRefId && tab.id == tabModel.id);
    this.closeTabByIndex(index);
  }

  selectTabByIndex(selectedIndex:number) {
    this.activeTab.isActive=false;
    this.activeTab=this.tabs[selectedIndex];
    this.activeTab.isActive=true;
    this.setTabView(true);
  }

  closeTabByIndex(selectedIndex:number) {
    let index=this.tabs.findIndex(tab => tab.templateRefId === this.activeTab.templateRefId && tab.id === this.activeTab.id);
    if(selectedIndex!==-1) {
      this.tabs.splice(selectedIndex,1);
    }

      if(this.tabs.length) {
        index=index > this.tabs.length-1 ? index-1: index;
        this.activeTab.isActive=false;
        this.activeTab=this.tabs[index];
        this.activeTab.isActive=true;
      } else {
        this.activeTab.isActive=false;
        this.setTabView(false);
      }
  }
  toggleTabView() {
    this.setTabView(!this.isTabView);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
