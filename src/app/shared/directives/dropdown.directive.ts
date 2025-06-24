import { Directive,  HostListener, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatSelect } from '@angular/material';

@Directive({
  selector: '[Dropdown]'
})
export class DropdownDirective implements OnInit{

  constructor(private elementref: MatSelect,private formControl: NgControl) { }

  ngOnInit(){
    console.log(this.elementref);
    this.formControl.valueChanges.subscribe(
      () => {
        this.elementref.close();
      }
    )
  }


  @HostListener('focus', ['$event']) onFocus(e) {
  this.elementref.open();
  }

  @HostListener('focusout', ['$event']) onFocusout(e) {
    this.formControl.control.patchValue(this.patch())
    }

    patch(){
    return  this.elementref.options.find(x => x.active).value
    }
  
}
