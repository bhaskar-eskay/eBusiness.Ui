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

  private parentIdKey:string='parentId';
  private childIdsKey:string='childIds';
  private dataItemKey:string='dataItem';
  selectsKey:string='selects';
  availablesKey:string='availables';
  availablesRelItems:{}={};
  selectsRelItems:{}={};

  // event called when items are moved between boxes, returns state of both boxes and item moved
  @Output() selectsEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();


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
    if(!this.nestedView) {
      if(this.selects && this.availables) {
          let selectIds=this.selects.map(item=>item[this.valueField]);
          this.availables=this.availables.filter(item=>!selectIds.includes(item[this.valueField]));
        }
    } else {
      this.availablesRelItems={};
      this.selectsRelItems={};
      this.prepareFilterNestedSelectsAndAvailables();
      this.doEmitSeletecedNestItems();
    }
  }

  private prepareFilterNestedSelectsAndAvailables() {
    if(this.selects) {
        this.prepareRelItems(this.selectsRelItems,this.selects);
    }
    this.filterRelItems(this.availablesRelItems,this.availables,this.selectsRelItems);
  }

  private prepareRelItems(containerObj:{},nestedItems:any[],parentId?:string) {
    nestedItems.forEach(item=>{
      let itemObj={};
      containerObj[item[this.valueField]]=itemObj;
      //To Create Child Items
      if(item[this.nestedField]) {
        itemObj[this.childIdsKey]=[];
        this.prepareRelItems(containerObj,item[this.nestedField],item[this.valueField]);
      }
      //To Update Parent Ids & Child Ids
      if(parentId) {
        itemObj[this.parentIdKey]=parentId;
        containerObj[parentId][this.childIdsKey].push(item[this.valueField]);
      }
      //To Create DataItem
      let tempItem={...item};
      delete tempItem[this.nestedField];
      itemObj[this.dataItemKey]=tempItem;
    });
  }

  private deleteRelItems(destContainer:{},sourceContainer:{},dataItem:{},startFlag:boolean=true) {
    if(dataItem[this.nestedField]) {
      (dataItem[this.nestedField] as []).forEach(item=>
        this.deleteRelItems(destContainer,sourceContainer,item,false));
    }
    delete destContainer[dataItem[this.valueField]];
  }

  private replicateParent(destContainer:{},sourceContainer:{},item:{}, replicateFlag:boolean=false, moreChilds:boolean=false,childId?:any) {
    if(sourceContainer[item[this.valueField]] && (sourceContainer[item[this.valueField]] as {}).hasOwnProperty(this.parentIdKey)) {
        let parentItem=sourceContainer[sourceContainer[item[this.valueField]][this.parentIdKey]];
        let moreChildsFlag=moreChilds;
        if(!moreChildsFlag && parentItem[this.childIdsKey].length>1) {
          moreChildsFlag=true;
        }
        this.replicateParent(destContainer,sourceContainer,parentItem[this.dataItemKey],true,moreChildsFlag,item[this.valueField]);
    }

    if(replicateFlag) {
      let sourceChildIdsArray=sourceContainer[item[this.valueField]][this.childIdsKey];
      sourceContainer[item[this.valueField]][this.childIdsKey]=sourceChildIdsArray.filter(item=>item!==childId);
        if(destContainer[item[this.valueField]]) {
          let destChildIdsArray=destContainer[item[this.valueField]][this.childIdsKey];
          destContainer[item[this.valueField]][this.childIdsKey]=[...destChildIdsArray,childId];
        } else {
          destContainer[item[this.valueField]]={...sourceContainer[item[this.valueField]]};
          destContainer[item[this.valueField]][this.childIdsKey]=[childId];
        }
        if(sourceContainer[item[this.valueField]][this.childIdsKey].length===0 && !moreChilds) {
          delete sourceContainer[item[this.valueField]];
        }
     }
     
  }

  private addRelItems(destContainer:{},item:{},parentId?:string) {
      if(!destContainer.hasOwnProperty(item[this.valueField])) {
        destContainer[item[this.valueField]]={};
      }
      let itemObj=destContainer[item[this.valueField]];
      if(item[this.nestedField]) {
        itemObj[this.childIdsKey]=(itemObj[this.childIdsKey] && itemObj[this.childIdsKey].length>0)?itemObj[this.childIdsKey]:[];    
        (item[this.nestedField] as []).forEach(dataItem=>
          this.addRelItems(destContainer,dataItem,item[this.valueField]));   
      }
      if(parentId) {
        itemObj[this.parentIdKey]=parentId;
        if(destContainer[parentId][this.childIdsKey].indexOf(item[this.valueField])===-1) {
          destContainer[parentId][this.childIdsKey].push(item[this.valueField]);
        }
      }
      let tempItem={...item};
      delete tempItem[this.nestedField];
      itemObj[this.dataItemKey]=tempItem;
  }

  private filterRelItems(containerObj:{},nestedItems:any[],relItemsObj:{},parentId?:string) {
    nestedItems.forEach(item=>{
      let itemObj={};
      containerObj[item[this.valueField]]=itemObj;
      //To Create Child Items
      if(item[this.nestedField]) {
        itemObj[this.childIdsKey]=[];
        this.filterRelItems(containerObj,item[this.nestedField],relItemsObj,item[this.valueField]);
      }
      if((item[this.nestedField] && itemObj[this.childIdsKey].length>0) || (!item[this.nestedField] && !relItemsObj.hasOwnProperty(item[this.valueField]))){
          //To Update Parent Ids & Child Ids
          if(parentId) {
            itemObj[this.parentIdKey]=parentId;
            containerObj[parentId][this.childIdsKey].push(item[this.valueField]);
          }
          //To Create DataItem
          let tempItem={...item};
          delete tempItem[this.nestedField];
          itemObj[this.dataItemKey]=tempItem;
      } else {
        delete containerObj[item[this.valueField]];
      }
      
    });
  }

  drop(event: CdkDragDrop<any[]>,destContainerKey:string) {
    if(event.previousContainer !== event.container) {
      if(!this.nestedView) {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      } else {
        this.updateNestedItem(destContainerKey,event.item.data);
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

  updateNestedItem(destContainerKey:string,dataItem:{}) {
    if(destContainerKey===this.selectsKey) {
      this.replicateParent(this.selectsRelItems,this.availablesRelItems,dataItem);
      this.addRelItems(this.selectsRelItems,dataItem,this.availablesRelItems[dataItem[this.valueField]][this.parentIdKey]);
      this.deleteRelItems(this.availablesRelItems,this.selectsRelItems,dataItem);
    } else if(destContainerKey===this.availablesKey) {
      this.replicateParent(this.availablesRelItems,this.selectsRelItems,dataItem);
      this.addRelItems(this.availablesRelItems,dataItem,this.selectsRelItems[dataItem[this.valueField]][this.parentIdKey]);
      this.deleteRelItems(this.selectsRelItems,this.availablesRelItems,dataItem);
    }
    this.doEmitSeletecedNestItems();
  }

  private doEmitSeletecedNestItems() {
    let nestedItems=[];
    if(this.selectsRelItems) {
      for (var key in this.selectsRelItems) {
        if (this.selectsRelItems.hasOwnProperty(key) && !this.selectsRelItems[key].hasOwnProperty(this.childIdsKey)) {
          nestedItems.push(this.selectsRelItems[key][this.dataItemKey]);
        }
      }
    }
    this.selectsEmitter.emit(nestedItems);
  }

  isDisplayItem(item:{},keyString:string) {
    let retflag:boolean=false;
    if(keyString===this.selectsKey && this.selectsRelItems.hasOwnProperty(item[this.valueField])) {
      retflag=true;
    } else if(keyString===this.availablesKey && this.availablesRelItems.hasOwnProperty(item[this.valueField])) {
      retflag=true;
    }
    return retflag;
  }


}