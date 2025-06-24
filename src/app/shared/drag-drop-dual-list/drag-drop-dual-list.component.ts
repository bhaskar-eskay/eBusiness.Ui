import { Component, Input, Output, EventEmitter,OnInit, OnChanges } from '@angular/core';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-drag-drop-dual-list',
  templateUrl: './drag-drop-dual-list.component.html',
  styleUrls: ['./drag-drop-dual-list.component.scss'],
})
export class DragDropDualListComponent implements OnInit,OnChanges {

  ngOnInit() {}

  // array of items to display in left box
  @Input() availables:any[];
  // array of items to display in right box
  @Input() selects:any[];
  // field to use for value of option
  @Input() valueField:string = 'id';
  // field to use for displaying option text
  @Input() textField:string = 'name';
  // text displayed over the available items list box
  @Input() availableText:string = 'Available items';
  // text displayed over the selected items list box
  @Input() selectedText:string = 'Selected items';
  // set placeholder text in available items list box
  @Input() availableFilterPlaceholder:string = 'Filter...';
  // set placeholder text in selected items list box
  @Input() selectedFilterPlaceholder:string = 'Filter...';

  @Input() nestedField:string = 'items';

  @Input() nestedView:boolean=false;

  // event called when items are moved between boxes, returns state of both boxes and item moved
  @Output() selectsEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();

  // private availablesNestedData = {};
  // private selectsNestedData = {};
  // private parentIdKey = 'parentId';
  // private childIdsKey = 'childIds';
  // private dataKey = 'data';

  listBoxForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.listBoxForm = this.fb.group({
      availableSearchInput: [''],
      selectedSearchInput: [''],
    });
  }

  ngOnChanges() {
    if(this.availables && this.availables.length>0) {
      this.availables=[].concat([...this.availables]);
    } else {
      this.availables=[];
    }
    if(this.selects  && this.selects.length>0) {
    this.selects=[].concat([...this.selects]);
    } else {
      this.selects=[];
    }
    this.filterSelectsFromAvailables();
  }

  private filterSelectsFromAvailables() {
    if(this.selects && this.availables) {
      if(!this.nestedView) {
        let selectIds=this.selects.map(item=>item[this.valueField]);
        this.availables=this.availables.filter(item=>!selectIds.includes(item[this.valueField]));
      } else {
        // this.prepareNestedData(this.availables,this.availablesNestedData);
        // this.prepareNestedData(this.selects,this.selectsNestedData);
        // this.filterNestedSelectedFormNestedAvailables();
        // this.filterNestedAvailablesBasedOnChildIds();
        // console.log(this.availablesNestedData);
        // console.log(this.selectsNestedData)
      }
    }
    
  }

  // private filterNestedAvailablesBasedOnChildIds() {
    
  // }
  // private filterNestedSelectedFormNestedAvailables() {
  //   for (var key in this.selectsNestedData) {
  //     if (this.availablesNestedData.hasOwnProperty(key)) {
  //         let availableItem=this.availablesNestedData[key];
  //         if(availableItem && !availableItem[this.childIdsKey]) {
  //           delete this.availablesNestedData[key];
  //         }
  //     }
  //   }
  // }

  // private prepareNestedData(arrayObj:any[], container:{}, parentId?:any) {
  //   for(let index=0; index<arrayObj.length; index++) {
  //     let currentObj={...arrayObj[index]};
  //     container[currentObj[this.valueField]]={};
  //     if(currentObj[this.nestedField]) {
  //       container[currentObj[this.valueField]][this.childIdsKey]=[];
  //       this.prepareNestedData(currentObj[this.nestedField],container,currentObj[this.valueField]);
  //       delete currentObj[this.nestedField];
  //     }
  //     if(parentId) {
  //       container[currentObj[this.valueField]][this.parentIdKey]=parentId;
  //       (container[parentId][this.childIdsKey] as any[]).push(currentObj[this.valueField]);
  //     }
  //     container[currentObj[this.valueField]][this.dataKey]=currentObj;
  //   }
  // }

  drop(event: CdkDragDrop<any[]>) {
    if(event.previousContainer !== event.container) {
      if(!this.nestedView) {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      } else {
        
      }
      this.selectsEmitter.emit(this.selects);
    }
  }

  getText(item) {
    return item[this.textField];
  }

  add(index:number) {
    transferArrayItem(this.availables, this.selects, index, this.selects.length);
    this.selectsEmitter.emit(this.selects);
  }

  remove(index:number) {
    transferArrayItem(this.selects, this.availables, index, this.availables.length);
    this.selectsEmitter.emit(this.selects);
  }

}