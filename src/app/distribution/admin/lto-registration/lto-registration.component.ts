import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MyCustomDialogComponent } from 'src/app/shared/components/my-custom-dialog/my-custom-dialog.component';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { MasterService } from '../../Master/master.service';

@Component({
  selector: 'app-lto-registration',
  templateUrl: './lto-registration.component.html',
  styleUrls: ['./lto-registration.component.scss']
})
export class LTORegistrationComponent implements OnInit {
  formltoGroup: FormGroup;
  protected _onDestroy = new Subject<void>();
  getLTOtypeData: any;
  getLTOSData: any []=[];
  getLTOPrefix: any []=[];
  firmId = new FormControl('');
  firmdata: any;
  today: string;
  firmid: any;
  constructor(private formBuilder:FormBuilder ,private datePipe: DatePipe, private masterService: MasterService , public dialog: MatDialog, public actvited:ActivatedRoute) { }

  ngOnInit() {
    this.formltoGroup = this.buildltoformgroup();
    this.today = new Date().toISOString().split('T')[0];
    this.getLTOtype();
    this.getFirm();
    this.setfirm();
  }

  private buildltoformgroup(){
    return this.formBuilder.group({
      firmLtos:this.formBuilder.array([])
    });
  }

  setfirm(){
    this.actvited.queryParams.subscribe(x=>{
      if(x.firmid){
        this.firmid = x.firmid;
        this.firmId.setValue(+x.firmid);
        this.firmId.disable();
        this.changefirm(+x.firmid);
      }else{
        this.addLtoTypes();
      }
    })
  }

  getFirm(){
    this.masterService.getFirm().subscribe(data =>{
      if(data){
       this.firmdata = data;
      }
    });
    // this.formGroup.controls.firmMainId.setValue('');
  }


  addLtoTypes(index?) {
    const add = this.formltoGroup.get('firmLtos') as FormArray;
    if(add.length > 0 && index){
      add.controls[index].get('ltoType').disable();
      add.controls[index].get('ltos').disable();
      add.controls[index].get('ltoPrefixId').disable();
    }
      add.push(this.formBuilder.group({
        ltoType: [''],
        ltos: [''],
        ltoPrefixId: [''],  //
        ltoNo: [''],
        validUpto: [this.today],
        ltoPrefixOrder:[''],
        firmLtoId:[0]
      }));

  }

  resetLtoTypes(index){
    const add = this.formltoGroup.get('firmLtos') as FormArray;
    if(add.length > 0 && index){
      add.controls[index].reset();
      add.controls[index].get('firmLtoId').setValue(0);
      add.controls[index].get('validUpto').setValue(this.today);
    }
    console.log(add.controls[index]);
  }


  getLTOtype(){
    this.masterService.loadLTOtypes().subscribe(result => {
      if (result) {
        this.getLTOtypeData = result;
      }
    });
  }


  loadLTOS(id,i,form){
  const payload = {
    ltoTypeId:id,
    firmTypeId:1
    }
    this.masterService.loadLTOS(payload).subscribe(result => {
      if (result) {
        this.getLTOSData[i] = result;
      }
    });

    form.controls.ltos.setValue('');
    form.controls.ltoPrefixId.setValue('');
  }
  ltoprefix = new FormControl();
  loadLTOPrefix(id,i,form){
    form.controls.ltoPrefixId.setValue('');
    this.masterService.loadLTOPrefix(id).subscribe(result => {
      if (result) {
        this.getLTOPrefix[i] = result;
        const add = this.formltoGroup.get('firmLtos') as FormArray;
        if(add.length > 0){
          add.controls.forEach((element:any,ind) => {
            this.getLTOPrefix[i].forEach((x:any,in1)=>{
              if(x){
                if(x.ltoPrefixId == element.get('ltoPrefixId').value){
                  this.getLTOPrefix[i].splice(in1,1);
                 }
              }
            });
          });
          if(this.getLTOPrefix[i].length == 0){
            AppMessageUtils.warningMessage('Already You Taken Lto Prefix.Try To Choose Different One Of The LTO Name Or LTO Type'); 
          }
        }
      }
    }, (error) => {
      this.getLTOPrefix[i] = [];
      AppMessageUtils.warningMessage('No Data Found'); 
    }
    );
  }

  changeLTOPrefix(id,i,form){
  this.getLTOPrefix[i].forEach(x=>{
    if(x.ltoPrefixId == id){
     form.controls.ltoPrefixOrder.setValue(x.ltoPrefixOrder);
    }
  })

  }

  deleteLtoTypes(i){
    const add = this.formltoGroup.get('firmLtos') as FormArray;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { id: 1, title: `Do you want to delete this Record`, buttontext: 'Delete' };
    const dialogRef = this.dialog.open(MyCustomDialogComponent, dialogConfig);
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(result => {
        if (result === true) {
          add.removeAt(i);
        }
      });

  }

  finalsave(data){
    console.log(data);
   data.firmLtos.forEach(x=>{
    x.validUpto = this.datePipe.transform(x.validUpto, 'yyyy-MM-dd');
   })
   console.log(data);
   const array = [];
   const add = this.formltoGroup.get('firmLtos') as FormArray;
   console.log(add);
   if(add.controls.length > 0){
    add.controls.forEach(element => {
      if(element['controls'].firmLtoId.value == 0){
        const payload = {
          firmLtoId: 0,
          ltoPrefixId: element['controls'].ltoPrefixId.value,
          ltoPrefixOrder: element['controls'].ltoPrefixOrder.value,
          ltoNo: element['controls'].ltoNo.value,
          firmId: this.firmId.value,
          validUpto: this.datePipe.transform(element['controls'].validUpto.value, 'yyyy-MM-dd')
        }
        array.push(payload);
      }
    });
   }

   this.masterService.FirmLtos(array).subscribe(x=>{
    if(x.resultType == 1){
      AppMessageUtils.successMessage(x.resultDescription);
      this.changefirm(this.firmId.value);
    }else{
      AppMessageUtils.warningMessage(x.resultDescription); 
    }
   })
  }

  resetfirm(){
    const add = this.formltoGroup.get('firmLtos') as FormArray;
    add.controls = [];
    this.addLtoTypes();
  }


  changefirm(data){
    const add = this.formltoGroup.get('firmLtos') as FormArray;
    add.controls = [];
    this.masterService.getFirmLtos(data).subscribe(x => {
      if(x){
        const add = this.formltoGroup.get('firmLtos') as FormArray;
        x.forEach(y =>{
          add.push(this.buildLtos(y))
        });
        this.addLtoTypes();
      }else{
        this.addLtoTypes();
      }
    }, (error) => {
      this.addLtoTypes();
    })
    }


    buildLtos(data):FormGroup {
      return this.formBuilder.group({
        ltoType: [{value:1, disabled: true}],
        ltos: [{value:1, disabled: true}],
        ltoPrefixId: [{value:data.ltoPrefixId ,disabled: true }],  //
        ltoNo: [{value: data.ltoNo, disabled: true}],
        validUpto: [{value: this.datePipe.transform(data.validUpto, 'yyyy-MM-dd'), disabled: true}],
        ltoPrefixOrder:[data.ltoPrefixOrder],
        firmLtoId:[data.firmLtoId],
        ltoName:[data.ltoName],
        ltoPrefix:[data.ltoPrefix],
        ltoTypeName:[data.ltoType]
      });
    }

}
