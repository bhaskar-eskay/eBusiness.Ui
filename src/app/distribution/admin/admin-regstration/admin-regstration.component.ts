import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { MasterService } from '../../Master/master.service';


export function passwordValidator(control: any) {
  const password = control.value;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  const isValidLength = password.length >= 8;

  if (!hasUpperCase) {
    return { upperCase: true };
  }
  if (!hasSpecialChar) {
    return { specialChar: true };
  }
  if (!hasNumber) {
    return { number: true };
  }
  if (!isValidLength) {
    return { minLength: true };
  }

  return null;  // Return null if all checks are valid
}

@Component({
  selector: 'app-admin-regstration',
  templateUrl: './admin-regstration.component.html',
  styleUrls: ['./admin-regstration.component.scss']
})
export class AdminRegstrationComponent implements OnInit {
  formGroup: FormGroup;
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  phoneRegEx = '^[6-9]{1}[0-9]{9}$';
  passwordRegEx = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}';
  UserPassword = new FormControl('');
  hide = true;
  hide1 = true;
  getfirmRoles: any;
  firmGroup: any;
  showfirm: boolean = false;
  firmdata: any;
  filterfirmdata: any;

  constructor(private formBuilder:FormBuilder , private router:Router, private masterService: MasterService , private actvited:ActivatedRoute) { }

  ngOnInit() {
    this.formGroup=this.buildFormGroup();
    this.FirmRoles();
    this.getformgroups();
    this.getFirm();
    this.setfirm();
  }

  setfirm(){
    this.actvited.queryParams.subscribe(x=>{
      if(x.firmid){
       this.changefirm(+x.firmid,true);
        this.formGroup.controls.firmId.setValue(+x.firmid);
        this.formGroup.controls.firmId.disable();
      }
    })
  }

    // Get the password field control for error handling in the template
    get password() {
      return this.formGroup.get('firmUserPassword');
    }

  private buildFormGroup() {
    return this.formBuilder.group({
      firmUserName:['',Validators.required],
      firmUserMobile:['',Validators.pattern(this.phoneRegEx)],
      firmUserEmail:['',Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)],
      firmUserPassword:[
        '',
        [Validators.required, passwordValidator]  // Applying the custom validator
      ],
      firmUserFullName:['' ,Validators.required],
      firmUserId:[0],
      isFirstLogIn:['Y'],
      firmId:[''],
      firmMainId:[0],
      firmRoleId:[''],
      firmGroupId:['']
    });   

  }


  FirmRoles(){
    this.masterService.FirmRoles().subscribe(data =>{
      if(data){
       this.getfirmRoles = data;
      }
    })
  }


  getformgroups(){
    this.masterService.getFirmGroup().subscribe(data =>{
      if(data){
       this.firmGroup = data;
      }
    })
  }

  changefirmgroup(data){
   this.filterfirmdata =  this.firmdata.filter(x => x.firmGroupId == data)
  }

  





  changeconformpassword(value){
    if(value.target.value){
     if(this.formGroup.controls.firmUserPassword.value != value.target.value){
      this.UserPassword.setErrors({ incorrect: true  }, { emitEvent: true })
     }else{
      this.UserPassword.setErrors(null)
     }
    }

  }

  firmRolechange(data){
    if(data.value == 3){
      this.showfirm = false;
      this.formGroup.controls.firmId.setValue(0);
    }else{
     this.showfirm = true;
     this.formGroup.controls.firmId.setValue('');
    }
   }


   getFirm(){
    this.masterService.getFirm().subscribe(data =>{
      if(data){
       this.firmdata = data;
       this.filterfirmdata = data;
      }
    });
   
  }


  next(data){
   console.log(data);
  }

  saveadmin(data, status){
   data.firmId =  this.formGroup.controls.firmId.value
   data.firmGroupId = this.formGroup.controls.firmGroupId.value
   this.masterService.FirmUser(data).subscribe(x=>{
    if(x.resultType == 1){
      if(status == 'next'){
        this.router.navigate(['./pharma/admin/ltoregistration'], { queryParams: { firmid: x.resultObject} });
      }else{
        AppMessageUtils.successMessage(x.resultDescription);
        this.resetform();
        this.setfirm();
      }
      
    }else{
      AppMessageUtils.warningMessage(x.resultDescription); 
    }
   })
   
  }

  resetform(){
    this.formGroup.reset();
  }

  changefirm(data,state?){
  this.masterService.FirmDetailsByFirmId(data).subscribe(x => {
    if(x){
      if(state){
        this.formGroup.controls.firmGroupId.setValue(x.firmGroupId);
        this.formGroup.controls.firmGroupId.disable();
      }
     if(x.firmGroupAdmin > 0){
      this.getfirmRoles.forEach((y:any,i)=>{
      if(y.firmRoleId == 1){
        this.getfirmRoles.splice(i,1);
      }
      });
     }
    }
  })
  }

}
