import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOmitSpecialCharacters]'
})
export class OmitSpecialCharactersDirective {
  // tslint:disable-next-line: no-input-rename
  @Input('appOmitSpecialCharacters') appOmitSpecialCharacters: string;
  inputElement: ElementRef;
  arabicRegex = '[\u0600-\u06FF]';

  constructor(el: ElementRef) {
    this.inputElement = el;
  }

  @HostListener('keypress', ['$event']) onKeyPress(event) {
    if (this.appOmitSpecialCharacters === 'integer') {
      this.integerOnly(event);
    } else if (this.appOmitSpecialCharacters === 'noSpecialChars') {
      this.noSpecialChars(event);
    }
  }

  integerOnly(event) {
    const e = <KeyboardEvent>event;
    if (e.key === 'Tab' || e.key === 'TAB') {
      return;
    } // tslint:disable-next-line: deprecation
    if (
      [46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
      // tslint:disable-next-line: deprecation  Allow: Ctrl+A
      (e.keyCode === 65 && e.ctrlKey === true) ||
      // tslint:disable-next-line: deprecation   // Allow: Ctrl+C
      (e.keyCode === 67 && e.ctrlKey === true) ||
      // tslint:disable-next-line: deprecation // Allow: Ctrl+V
      (e.keyCode === 86 && e.ctrlKey === true) ||
      // tslint:disable-next-line: deprecation // Allow: Ctrl+X
      (e.keyCode === 88 && e.ctrlKey === true)
    ) {
      // let it happen, don't do anything
      return;
    }
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(e.key) === -1) {
      e.preventDefault();
    }
  }

  noSpecialChars(event) {
    const e = <KeyboardEvent>event;
    if (e.key === 'Tab' || e.key === 'TAB') {
      return;
    }
    let k;
    k = event.keyCode; // k = event.charCode;  (Both can be used)
    if ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57)) {
      return;
    } // tslint:disable-next-line: deprecation
    const ch = String.fromCharCode(e.keyCode);
    const regEx = new RegExp(this.arabicRegex);
    if (regEx.test(ch)) {
      return;
    }
    e.preventDefault();
  }

  @HostListener('paste', ['$event']) onPaste(event) {
    let regex;
    if (this.appOmitSpecialCharacters === 'integer') {
      regex = /[0-9]/g;
    } else if (this.appOmitSpecialCharacters === 'noSpecialChars') {
      regex = /[a-zA-Z0-9\u0600-\u06FF]/g;
    }
    const e = <ClipboardEvent>event;
    const pasteData = e.clipboardData.getData('text/plain');
    let m;
    let matches = 0;
    while ((m = regex.exec(pasteData)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      // The result can be accessed through the `m`-variable.
      m.forEach((_match, _groupIndex) => {
        matches++;
      });
    }
    if (matches === pasteData.length) {
      return;
    } else {
      e.preventDefault();
    }
  }
}
