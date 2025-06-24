import { AfterViewInit, Directive, OnDestroy, Optional } from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material';

@Directive({
  selector: '[appAppMatTab]'
})
export class AppMatTabDirective implements AfterViewInit, OnDestroy {

  observable: any;
  constructor(@Optional() private autoTrigger: MatAutocompleteTrigger) { }
  ngAfterViewInit() {
    this.observable = this.autoTrigger.panelClosingActions.subscribe(x => {
      if (this.autoTrigger.activeOption) {
        this.autoTrigger.writeValue(this.autoTrigger.activeOption.value)
      }
    })
  }
  ngOnDestroy() {
    this.observable.unsubscribe();
  }

}



// @Directive({
//   selector: '[tab-directive]'
// })
// export class TabDirective {
//   observable: any;
//   constructor(@Optional() private autoTrigger: MatAutocompleteTrigger) {}

//   @HostListener('keydown.tab', ['$event.target']) onBlur() {
//       if (this.autoTrigger.activeOption) {
//           this.autoTrigger.writeValue(this.autoTrigger.activeOption.value)
//       }
//   }

// }

