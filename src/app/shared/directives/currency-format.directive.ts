import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCurrencyFormat]' // Custom directive name
})
export class CurrencyFormatDirective {
  firmPreferences:any;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.firmPreferences =JSON.parse(sessionStorage.getItem('firmPreferences'));
  }

  @HostListener('focusout') onFocusOut() {
    this.formatValue();
  }

  @HostListener('input', ['$event.target.value']) onInput(value: string) {
    // If the user is typing, we update the value and format it
    // this.el.nativeElement.value = this.formatAmount(value);
  }

  private formatValue() {
    const value = this.el.nativeElement.value;
    // Apply the formatting to ensure 2 decimal places
    this.el.nativeElement.value = this.formatAmount(value);
  }

  private formatAmount(value: string): string {
    let numberValue = parseFloat(value);
    if (isNaN(numberValue)) {
      return '0.00';
    }
    // Ensure two decimal places
    return numberValue.toFixed(this.firmPreferences ? this.firmPreferences.rateDecimals : 0);
  }
}