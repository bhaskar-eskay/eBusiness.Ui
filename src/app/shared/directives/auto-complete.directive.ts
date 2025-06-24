import { AfterViewInit, Directive, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material';

@Directive({
  selector: '[appAutoComplete]'
})
export class AutoCompleteDirective implements OnInit, AfterViewInit{
@ViewChild('appAutoComplete', {static:false}) element1: MatAutocomplete
  constructor(private formControl: NgControl, private element: MatAutocompleteTrigger) { }
  ngAfterViewInit(): void {
    console.log(this.formControl, 'hello');
  }

  ngOnInit(){
this.formControl.valueChanges.subscribe(
  data => {
   if(data.length > 0 && this.element.autocomplete.options.length === 0){
      this.formControl.control.setErrors({'notFound': true})
   }
   this.openpanel(data);
  }
)
  }
  openpanel(data){
    if(data.length > 1){
      this.element.autocomplete.showPanel = true;
    }
  }
}
