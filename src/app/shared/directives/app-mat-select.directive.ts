import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';
import { MatSelect } from '@angular/material';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appMatSelect]'
})
export class AppMatSelectDirective implements AfterViewInit, OnDestroy {

  private isPanelOpened:boolean;
  private subscription:Subscription=new Subscription();

  @Input() nextElementId:string;

  @HostListener('focus', ['$event'])
    onFocus(event: Event) {
      event.preventDefault();
      if(!this.isPanelOpened) {
        this.matSelect.open();
      }
    }

  @HostListener('keydown.tab', ['$event'])
    onTab(event: Event) {
      if(this.matSelect.options && this.matSelect.options.length) {
        this.matSelect.options.find((option,index,options)=>option.active).select();
      }
    }

    @HostListener('keydown.enter', ['$event'])
    onEnter(event: Event) {
      if(this.nextElementId &&  document.getElementById(this.nextElementId)) {
        setTimeout(()=>{
          event.preventDefault();
          let element=document.getElementById(this.nextElementId);
          element.focus();
          element.dispatchEvent(new Event("auto-complete-dependent-focused"));
        });
      }
    }

  constructor(private matSelect: MatSelect) {
   this.subscription.add(this.matSelect._openedStream.subscribe(val=>{
    this.isPanelOpened=true;
   }));
   this.subscription.add(this.matSelect._closedStream.subscribe(val=>{
    this.isPanelOpened=false;
   }));
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
