import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[autofocus]'
})

export class AutoFocusDirective implements AfterViewInit {
       
    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
        window.setTimeout(() => {
            this.el.nativeElement.focus();
        });
    }
}