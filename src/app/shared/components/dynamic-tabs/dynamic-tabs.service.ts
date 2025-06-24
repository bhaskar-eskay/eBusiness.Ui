import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export enum TabEvent {
  ADD,
  UPDATE,
  DELETE
}
export class TabModel {
  templateRefId:string;
  id:number;
  title: string;
  data?:any;
}

export class Tab {
  id:String;
  model:TabModel;
  event:TabEvent;
}

@Injectable()
export class DynamicTabsService {

  private tabEvent: Subject<Tab> = new Subject<Tab>();
  tabEvent$: Observable<Tab> = this.tabEvent.asObservable();

  constructor() { }

  updateTab(id:string,tabModel:TabModel) {
    let tab= this.getTab(id,tabModel);
    tab.event=TabEvent.UPDATE;
    this.tabEvent.next(tab);
  }

  addTab(id:string,tabModel:TabModel) {
    let tab= this.getTab(id,tabModel);
    tab.event=TabEvent.ADD;
    this.tabEvent.next(tab);
  }
  
  closeTab(id:string,tabModel:TabModel) {
    let tab= this.getTab(id,tabModel);
    tab.event=TabEvent.DELETE;
    this.tabEvent.next(tab);
  }

  private getTab(id:string,tabModel:TabModel) {
    let tab={} as Tab;
    tab.model=tabModel;
    tab.id=id;
    return tab;
  }

}
