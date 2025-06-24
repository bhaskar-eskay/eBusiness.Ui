import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material';

@Component({
  selector: 'app-firm-registrtion',
  templateUrl: './firm-registrtion.component.html',
  styleUrls: ['./firm-registrtion.component.scss']
})
export class FirmRegistrtionComponent implements OnInit {
  
  @ViewChild(MatHorizontalStepper, {static:false}) stepper: MatHorizontalStepper;

  constructor() { }

  ngOnInit() {
  }

  step1Completed = false;

  isLinear = true;

  complete() {
    this.stepper.selected.completed = true;
    this.stepper.selected.editable = false;
    this.stepper.next();
  }

  next() {
    this.stepper.next()
  }

}
