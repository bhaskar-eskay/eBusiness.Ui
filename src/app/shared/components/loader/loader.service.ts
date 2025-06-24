import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export class LoaderService {

  private showLoader$:Subject<boolean>=new Subject<boolean>();
  private isDisable:boolean;
  private count:number=0;

  constructor() { }

  get loaderStatus$():Observable<boolean> { return this.showLoader$.asObservable(); }

  public showLoader() {
    if(this.isAddToCount() && !this.isDisable) {
      this.showLoader$.next(true);
    }
  }

  public hideLoader() {
    if(this.isRemoveFromCount()) {
      this.isDisable=false;
      this.showLoader$.next(false);
    }
  }

  public disableLoader() {
    this.isDisable=true;
  }

  private isAddToCount():boolean {
    this.count++;
    return this.count===1;
  }

  private isRemoveFromCount():boolean {
    if(this.count > 0) {
      this.count--;
    }
    return this.count===0;
  }
}
