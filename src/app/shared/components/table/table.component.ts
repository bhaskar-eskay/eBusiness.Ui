import {Component, OnInit, ViewChild, Input, OnChanges, Output,EventEmitter, SimpleChanges, HostListener } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TableDefinition, TableAction, TableDialogProperties } from './table-model';
import { moveItemInArray, CdkDragStart, CdkDropList } from '@angular/cdk/drag-drop';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableFilter } from 'mat-table-filter';
import AppMessageUtils from '../../utils/app-message-utils';
import { DialogButton, DialogData } from '../dialog/dialog.component';
import { DialogService } from '../dialog/dialog.service';
import { MastersHttpService } from '../../http-services/masters/masters-http.service';
import { Router } from '@angular/router';
/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() excelData!: () => void ;
  @Input('definition') definition:TableDefinition;
  @Input('data') data:any[];
  @Input('disableActions') disableActions:boolean;
  @Input('tableAlertId') tableAlertId:string;
  @Input('isDataLoading') isDataLoading:boolean;
  @Output('noData') noDataEmitter:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output('dataLoading') dataLoadingEmitter:EventEmitter<boolean>=new EventEmitter<boolean>();
  displayedColumns: string[]=[];
  dataSource: MatTableDataSource<any[]>;

  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  selection: SelectionModel<any> = new SelectionModel<any>(false, []);
  filterGroupFilter: MatTableFilter;
  @ViewChild('groupTable', {static:true}) groupTable;
  //@ViewChild('paginator', {static:true}) paginator: MatPaginator;
  @ViewChild('paginatorComb' , {static:true}) paginatorComb: MatPaginator;
  @ViewChild('combinationTable', {static:true}) combinationTable;
  previousIndex:number;
  isEdit:boolean=false;
  isDelete:boolean= false;
  outStatus: boolean;
  isGST: boolean;
  xlicon: boolean = false;
  constructor(private dialogService:DialogService,private services:MastersHttpService,private router:Router) {
    this.dataSource = new MatTableDataSource([]);
  }
  @HostListener('window:keydown', ['$event'])  keyEvent(event: KeyboardEvent) {
    if(this.groupTable) {
      if (event.keyCode === 37) {
        this.prevGroupPage();
      } else if (event.keyCode === 39) {
        this.nextGroupPage();
      }
    } else if(this.combinationTable ) {
       if(event.keyCode === 37) {
         this.prevCombinationPage();
       } else if(event.keyCode === 39) {
         this.nextCombinationPage();
       }
    }
  }
  ngOnInit() {
    if(this.router.url.includes('pharma/home')){
      this.xlicon = true;
    }
    else{
      this.xlicon = false;
    }
  }

  ngOnChanges(changes:SimpleChanges) {
    if(this.tableAlertId) {
      AppMessageUtils.clearMessage(this.tableAlertId);
    }
    if(this.definition && this.definition.columns) {
      this.definition=this.definition;
      if(this.definition.getColOrderFn) {
        this.displayedColumns=[...this.definition.getColOrderFn()];
      } else {
        this.displayedColumns=[...this.definition.columns.map(column=>column.id)];
      }
     
    }
    if(this.data) {
      let processedDataArray=this.doGetProcessedData(this.data);
      this.dataSource.data=[].concat([...processedDataArray]);
      // this.isEdit = processedDataArray.isEditable
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;});
    }
    if(this.isDataLoading || (changes && changes.data && changes.data.firstChange && !changes.data.currentValue)) {
      this.dataLoadingEmitter.emit(true);
      if(this.tableAlertId) {
        AppMessageUtils.infoMessage("Loading...",this.tableAlertId);
      }
    } else {
      this.dataLoadingEmitter.emit(false);
      this.noDataEmitter.emit(this.dataSource.data.length===0);
      if(this.tableAlertId && this.dataSource.data.length===0 && !this.isDataLoading) {
        AppMessageUtils.warningMessage("No Data Found.",this.tableAlertId);
      }
    }
  }


  getStatus(val){

      if(val.inwardStatus == 0 || val.outwardStatus == 0){      
        this.outStatus = true;
        return true;
      }
      else {
        this.outStatus = false;
      }


    if(val.ltoNo == null && val.ltoNo == undefined && val.ltoNo == ''){
      this.isGST = true;
    }
    else{
      this.isGST = false;
    }
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(this.data[0].prodId){
      this.getAllCustomProducts(filterValue);
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }else{
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  async getAllCustomProducts(searchtext) {
    try {
      const payload = {
        prodName: searchtext.toString(),
      }
      await this.services.getproductdetails(payload).subscribe(resData => {
        if (resData) {
          let processedDataArray = this.doGetProcessedData(resData.resultObject);
          this.dataSource.data = [].concat([...processedDataArray]);
          // this.dataSource.filter = filterValue.trim().toLowerCase();
          // this.dataSource.data =data.resultObject;
        }
        return;
      });
    }
    catch (err) {
      console.log("error occured in getAllCustomProducts" + err.message);
    }

  }

  dragStarted(colId:string) {
    this.previousIndex=this.displayedColumns.indexOf(colId);
  }
  dropListDropped(colId:string) {
    if (event) {
      let newIndex=this.displayedColumns.indexOf(colId);
      moveItemInArray(this.displayedColumns, this.previousIndex, newIndex);
      if(this.definition && this.definition.setColOrderFn) {
        this.definition.setColOrderFn(this.displayedColumns);
      }
    }
  }


  prevGroupPage() {
    const pageIndex = this.paginator.pageIndex;
    if(pageIndex > 0){
      this.paginator.pageIndex = pageIndex - 1;
      this.paginator.page.next({
        pageIndex: pageIndex,
        pageSize: this.paginator.pageSize,
        length: this.paginator.length
      });
    }
  }

  nextGroupPage() {
    const pageIndex = this.paginator.pageIndex;
    const pageSize = this.paginator.pageSize;
    const length = this.paginator.length;
    if((length / pageSize) > (pageIndex + 1)){
      this.paginator.pageIndex = pageIndex + 1;
      this.paginator.page.next({
        pageIndex: pageIndex,
        pageSize: this.paginator.pageSize,
        length: this.paginator.length
      });
    }
  }

  prevCombinationPage() {
    const pageIndex = this.paginatorComb.pageIndex;
    if(pageIndex > 0){
      this.paginatorComb.pageIndex = pageIndex - 1;
      this.paginatorComb.page.next({
        pageIndex: pageIndex,
        pageSize: this.paginatorComb.pageSize,
        length: this.paginatorComb.length
      });
    }
  }

  
  nextCombinationPage() {
    const pageIndex = this.paginatorComb.pageIndex;
    const pageSize = this.paginatorComb.pageSize;
    const length = this.paginatorComb.length;
    if((length / pageSize) > (pageIndex + 1)){
      this.paginatorComb.pageIndex = pageIndex + 1;
      this.paginatorComb.page.next({
        pageIndex: pageIndex,
        pageSize: this.paginatorComb.pageSize,
        length: this.paginatorComb.length
      });
    }
  }


  doTableAction(action:TableAction,row:any) {
    let dialogProperties:TableDialogProperties=action.dialogProperties;
    if(dialogProperties) {
      let dialogInputs:DialogData={...dialogProperties} as DialogData;
      dialogInputs.data=row;
      if(action.method) {
        let confirmBtn={} as DialogButton;
        confirmBtn.label='Yes';
        confirmBtn.closeDialog=true;
        confirmBtn.clickFn=action.method;
        dialogInputs.buttons=[confirmBtn];
      }
      this.dialogService.showDialogue(dialogInputs,{disableClose:true});
    } else {
      action.method(row);
    }
    
  }

  doGetProcessedData(sourceData:any[]) {
    let processedDataArray=[];
    for(let dataIndex=0; dataIndex<sourceData.length;dataIndex++){
      let currentData=sourceData[dataIndex];
      let processData={'data':currentData};
      for(let colIndex=0;colIndex<this.definition.columns.length;colIndex++) {
        let currentCol=this.definition.columns[colIndex];
        if(currentCol.value) {
          processData[currentCol.id]=currentCol.value(currentData);
        }
        if(currentCol.actions) {
          let actionsData={};
          for(let actionIndex=0;actionIndex<currentCol.actions.length;actionIndex++) {
            if(currentCol.actions[actionIndex].isDisabled) {
              actionsData[currentCol.actions[actionIndex].name]=currentCol.actions[actionIndex].isDisabled(currentData);
            }
          }
          processData['actionsData']=actionsData;
        }
        if(currentCol.template) {
          processData['template']=currentCol.template.templateRef();
        }
      }
      processedDataArray.push(processData);
    }
    return processedDataArray;
  }

  doTableRowclick(action){
    console.log(action);
  }

  excelFile(){
  this.excelData()
  }
}