import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}

  transform(value: string, searchValue: any, keyValue:string): any {
    let val=value;
    let searchVal=searchValue;
    if (!searchVal) {
      return value;
    }
    if(typeof searchVal !== 'string') {
      searchVal=searchValue[keyValue];
    }

    // Match in a case insensitive maneer
    const re = typeof val === 'number'? new RegExp(searchVal, 'g'): new RegExp(searchVal, 'gi');
    if(typeof val === 'number') {
      val=''+val;
    }
    if(val.match) {
      const match = val.match(re);

      // If there's no match, just return the original value.
      if (!match) {
        return val;
      }
      
      const replacedValue = val.replace(re, "<strong>" + match[0] + "</strong>")
      return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
    }
    return val;
  }
}

