import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appGstFormat]'
})
export class GstFormatDirective {
  // Valid pattern for full input
  private readonly fullPattern = /^\d{2}[a-zA-Z]{5}\d{4}[a-zA-Z]\d[a-zA-Z][a-zA-Z0-9]$/;

  constructor(private el: ElementRef, private control: NgControl) {}

  // Prevent invalid characters while typing
  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const char = event.key;
    const inputValue = this.el.nativeElement.value + char;

    if (inputValue.length > 15) {
      event.preventDefault();
      return;
    }

    const isValidChar = this.isCharAllowedAtPosition(inputValue.length - 1, char);
    if (!isValidChar) {
      event.preventDefault();
    }
  }

  // Validate full string on input
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    if (value.length > 15) {
      this.control.control.setErrors({ maxLength: true });
    } else if (value.length === 15 && !this.fullPattern.test(value)) {
      this.control.control.setErrors({ invalidFormat: true });
    } else {
      this.control.control.setErrors(null);
    }
  }

  // Check character validity at each position
  private isCharAllowedAtPosition(index: number, char: string): boolean {
    switch (index) {
      case 0:
      case 1:
      case 7:
      case 8:
      case 9:
      case 10:
      case 12:
        return /[0-9]/.test(char);
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 11:
      case 13:
        return /[a-zA-Z]/.test(char);
      case 14:
        return /[a-zA-Z0-9]/.test(char);
      default:
        return false;
    }
  }

}
