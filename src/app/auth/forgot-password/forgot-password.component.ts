import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterService } from 'src/app/distribution/Master/master.service';
import { AuthService } from '../auth.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  isDisabled: boolean = false;
  otpinput: boolean = true;
  timerValue: number = 30;
  timerInterval: any;
  timer: boolean;
  nPassword: boolean = false;
  checkmark: boolean = false;
  usercontact: any = '';
  forgot = new FormGroup ({
  contact: new FormControl(''),
  otp: new FormControl(''),
  newPassword: new FormControl(''),
  confirmPassword: new FormControl(''),
  })
  firmuserdata: any[];
  checkmark2: boolean = false;
  validemail: any;
  validusername: any;
  error: string;
  usercontact2: string;
  constructor(private masterService: MasterService,private authService:AuthService) { }

  ngOnInit() {
    this.forgot.controls.otp.disable();
    this.getFirmUsers();
  }

  sendotp() {
    if(this.forgot.controls.contact.value != '' && this.forgot.controls.contact.value != null && 
      this.forgot.controls.contact.value != undefined && this.forgot.controls.contact.value.length == 10 
    ){
      this.isDisabled = true;
      this.timerValue;
      this.timer = true;
      this.forgot.controls.otp.enable();
      this.forgot.controls.contact.disable();
      this.forgot.controls.fo
      this.timerInterval = setInterval(() => {
        if (this.timerValue > 0) {
          this.timerValue--;
        } else {
          clearInterval(this.timerInterval);
          this.timer= false;
          this.isDisabled = false;
          this.timerValue = 30;
          this.forgot.controls.contact.enable();
          // this.forgot.controls.otp.disable();
        }
      }, 1000);
    } else {
      AppMessageUtils.warningMessage("Please enter your registered Email address or Mobile number.");
    }
  }

  get formattedTimerValue(): string {
    return this.timerValue.toString().padStart(2, '0'); // Ensures two-digit format
  }
  
  

  verifyotp(){
    if (this.forgot.controls.otp.value.length === 4 || this.forgot.controls.otp.value.length === 6) {
      this.nPassword = true;
    } else {
      this.nPassword = false;
    }
  }

  getFirmUsers(){
    this.masterService.FirmUsers().subscribe(data=>{
      this.firmuserdata=data as any[];
    });
  }
  
  otpvalid(val: any) {
    this.usercontact2 = '';
    this.checkmark = false;
    this.checkmark2 = false;

    let found = false; // Flag to track if a match is found

    this.firmuserdata.forEach(user => {
        if (val.length === 10 && user.firmUserMobile === val) {
          this.validemail = user.firmUserEmail;
          this.validusername = user.firmUserName;
            this.usercontact = 'Mobile Number Verified.';
            this.checkmark = true;
            this.checkmark2 = false;
            this.isDisabled = false;
            found = true;
        } 
        else if (val.endsWith("@gmail.com") && user.firmUserEmail === val) {
            this.usercontact = 'Email Verified.';
            this.checkmark = true;
            this.checkmark2 = false;
            this.isDisabled = false;
            found = true;
        }
    });

    if (!found) {
        this.usercontact2 = 'Invalid Email or Mobile Number!';
        this.checkmark2 = true;
    }
    if (!val.trim()) { 
      this.usercontact2 = 'Please enter Email or Mobile Number!';
      this.checkmark2 = true;
      return;
  }
}


  newpwd(val:any){
    var cap = /[A-Z]/g;
    var small = /[a-z]/g;
    var num = /[0-9]/g;
    var spchar = /[!@#\$%\^\&*\)]/g;

    if(val == ''){
      this.error = 'Password field cannot be empty';
    }
     else if(!val.match(cap)){
      this.error = 'Password with contain atleast One Captil Letter';
    }
     else if(!val.match(small)){
      this.error = 'Password with contain atleast One Small Letter';
    }
     else if(!val.match(num)){
      this.error = 'Password with contain atleast One Number';
    }
     else if(!val.match(spchar)){
      this.error = 'Password with contain atleast One Special Character';
    }
     else {
      this.error = '';
    }
  }

  fp(){

    const body = {
      otp : this.forgot.controls.otp.value,
      userName: this.validusername,
      firmUserEmail: this.validemail,
      newPassword: this.forgot.controls.newPassword.value
    };
    // this.authService.forgotpassword(body);
  }

}
