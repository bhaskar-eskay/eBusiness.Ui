import { Directive, Input, HostListener, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
declare var $: any;
@Directive({
  selector: '[appFocuschanged]'
})
export class FocuschangedDirective {
  @Input('appFocuschanged') appFocuschanged;
  @Input('enterfocus') enterfocus;
  @Input('secondfocus') secondFocus;
  @Input('enterkeyempty') enterkeyempty;
  constructor(public renderer: Renderer, private control: NgControl) {}
 
  @HostListener('keydown', ['$event']) onKeyDown(e: any) {
    console.log(this.appFocuschanged);
    console.log(this.enterfocus);
    console.log(this.secondFocus);
    console.log(this.enterkeyempty);

    if (!(e.shiftKey || e.metaKey) && e.keyCode == 9) {
      if (this.control.control.value === '') {
        const d = this.appFocuschanged.id;
        $(function() {
          document.getElementById(d).focus();
        });
      } else {
        const d = this.secondFocus.id;
        $(function() {
          document.getElementById(d).focus();
        });
      }
    }
    if (e.keyCode == 13) {
      if (this.control.control.value === '') {
        const d = this.enterkeyempty.id;
        $(function() {
          document.getElementById(d).focus();
        });
      } else {
        const d = this.enterfocus.id;
        $(function() {
          document.getElementById(d).focus();
        });
      }
    }
  }
}
