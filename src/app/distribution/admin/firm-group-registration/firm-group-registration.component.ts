import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { MasterService } from '../../Master/master.service';

@Component({
  selector: 'app-firm-group-registration',
  templateUrl: './firm-group-registration.component.html',
  styleUrls: ['./firm-group-registration.component.scss']
})
export class FirmGroupRegistrationComponent implements OnInit {
  firmgroupForm: FormGroup;
  constructor(private masterService: MasterService , private router:Router) { }

  displayedColumns: string[] = ['firmGroupName', 'firmGroupAlias'];
  // , 'actions'
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.firmgroupForm = new FormGroup({
      firmGroupName: new FormControl('', Validators.required),
      firmGroupAlias: new FormControl('', Validators.required),
      firmGroupId:new FormControl(0),
      activeStatus:new FormControl(1)
    });
    this.getformgroups();
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  saveform(data,status){
    this.masterService.FirmGroup(data).subscribe(x =>{
      console.log(x);
      if(x.resultType == 1){
        if(status == 'next'){
          this.router.navigate(['./pharma/admin/firmregistration'], { queryParams: { firmgroupid: x.resultObject} });
        }else{
          this.getformgroups();
          this.resetform();
          AppMessageUtils.successMessage(x.resultDescription);
        }
      }else{
        AppMessageUtils.warningMessage(x.resultDescription); 
      }
    
    
    })
  }

  getformgroups(){
    this.masterService.getFirmGroup().subscribe(data =>{
      if(data){
         this.dataSource = new MatTableDataSource(data);
         setTimeout(() => {
          this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
         }, 100); 
      }
    })
  }


  resetform(){
    this.firmgroupForm.reset();
  }


  checkalias(){
    if(this.firmgroupForm.controls.firmGroupAlias.value){
      const check = this.dataSource.data.filter((x:any) => x.firmGroupAlias.toLowerCase() == this.firmgroupForm.controls.firmGroupAlias.value.toLowerCase() )
      console.log(check);
      if(check.length > 0){
        this.firmgroupForm.controls.firmGroupAlias.setErrors({ incorrect: true }, { emitEvent: true })
       }else{
        this.firmgroupForm.controls.firmGroupAlias.setErrors(null)
       }
    }
   
  }

  

}
