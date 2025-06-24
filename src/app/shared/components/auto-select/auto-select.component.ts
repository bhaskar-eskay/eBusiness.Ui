import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface OptionsTableDefinition {
  columns:OptionsTableColumn[];
  panelWidth:number;
}
export interface OptionsTableColumn {
  fxFlex:number;
  name:string;
  value:(any)=>string;
  isKeyColumn?:boolean;
  fxFlex1 : number;
}
@Component({
  selector: 'app-auto-select',
  templateUrl: './auto-select.component.html',
  styleUrls: ['./auto-select.component.scss']
})
export class AutoSelectComponent implements OnInit {
  @Input('dataSource') dataSource:any[];
  @Input() optionsTableDefinition:OptionsTableDefinition;
  @Input('filterKeys') filterKeys:any[];
  @Output() outPutEmitter: EventEmitter<any> = new EventEmitter<any>();

  unselectedList: any[]=[];
  selectedList:any[]=[];
  selectAllDisabled:boolean = false;
  unselectAllDisabled: boolean = false;
  showcheckbox: boolean = true;
  constructor() { }

  ngOnInit() {
    console.log(this.optionsTableDefinition.columns);
    this.unselectedList = this.dataSource;
  }

  filterOptions(searchValue: string): void {
    if(searchValue.length > 0){
      this.showcheckbox = false;
      const lowerSearch = searchValue.toLowerCase() || '';
      const common = this.dataSource.filter(option => {
       return this.filterKeys.some(key => 
        option[key] && option[key].toString().toLowerCase().includes(lowerSearch)
      );
    });

    this.unselectedList =  [
      ...common.filter(obj1 => !this.selectedList.some(obj2 => this.areObjectsEqual(obj1, obj2))),
      ...this.selectedList.filter(obj2 => !common.some(obj1 => this.areObjectsEqual(obj1, obj2)))
    ];
    }else{
      this.showcheckbox = true;
      this.unselectedList =  [
        ...this.dataSource.filter(obj1 => !this.selectedList.some(obj2 => this.areObjectsEqual(obj1, obj2))),
        ...this.selectedList.filter(obj2 => !this.dataSource.some(obj1 => this.areObjectsEqual(obj1, obj2)))
      ];
    }

  } 


  selectAll(checked: boolean): void {
    if(checked){
      this.selectAllDisabled = true;
      this.unselectAllDisabled = false;
      this.selectedList = this.dataSource;
      this.unselectedList = [];
      this.outPutEmitter.emit(this.selectedList);
    }
  }

  unselectAll(checked: boolean): void {
    if(checked){
      this.unselectAllDisabled = true;
      this.selectAllDisabled = false;
      this.unselectedList = this.dataSource;
      this.selectedList = [];
      this.outPutEmitter.emit(this.selectedList);
    }
  }

  selectedItem(checked: boolean, item): void {
    if(checked){
      this.selectedList.push(this.unselectedList[item]);
      this.unselectedList.splice(item, 1);
      this.outPutEmitter.emit(this.selectedList);
      this.unselectAllDisabled = false;
    }
  }

  unselectedItem(item): void {
      this.selectAllDisabled = false;
      this.unselectedList.push(this.selectedList[item]);
      this.selectedList.splice(item, 1);
      this.outPutEmitter.emit(this.selectedList);
  }

  // Function to compare two objects for equality
 areObjectsEqual(obj1: any, obj2: any): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If the number of keys is different, the objects are not equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all keys and values are equal
  return keys1.every(key => obj1[key] === obj2[key]);
}

  
}
