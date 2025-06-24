import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-area-wise-collections',
  templateUrl: './area-wise-collections.component.html',
  styleUrls: ['./area-wise-collections.component.scss', '../finance.component.scss']
})
export class AreaWiseCollectionsComponent implements OnInit {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  isOpened = false;
  step = 0;
  areaWiseCollectionsFormGroup: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step =1;
    this.isOpened = true;

  }

  prevStep() {
    this.step = 0;
    this.isOpened = false;
  }
 

  ngOnInit() {
    this.areaWiseCollectionsFormGroup=this.buildAreaWiseCollectionsFormGroup();
  }
  buildAreaWiseCollectionsFormGroup(){
    return this.formBuilder.group({
      financialyear:[''],
      fromDate:[''],
      toDate:[''],
      reportType:[''],
    });
  }
}
