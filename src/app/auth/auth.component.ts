import { Component, OnInit, VERSION, HostBinding, AfterViewInit, ViewChild, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';
import AppMessageUtils, { AppMessage } from '../shared/utils/app-message-utils';
import { RouteService } from '../shared/services/route.service';
import { MasterService } from '../distribution/Master/master.service';
// import { error } from 'console';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit, OnDestroy {
  loginAlert= this.authService.loginAlert;
  authForm: FormGroup;
  showPassword:boolean;
  years=[];
  firmyear = new FormControl('');
  private subscription=new Subscription();
  firmGroupId = new FormControl('');
  @ViewChild('name', {static:false}) userName: ElementRef<any>;
  firmGroup: any;
  showlogin: boolean = true;
  setintervel: any;
  otpVerify: boolean = false;
  login:boolean = true;
  otpfield = new FormControl('');
  otpForm: FormGroup;
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  resendOTP: boolean = true;
  veriftbtn: boolean = true;
  firmuserdata: any[];
  constructor(private formBuilder: FormBuilder,
    private authService:AuthService,private routeService: RouteService , private masterService: MasterService) {
      this.otpForm = this.formBuilder.group({
        digits: this.formBuilder.array(Array(6).fill('').map(() => this.formBuilder.control('')))
      });
     }



  ngOnInit() {
    sessionStorage.removeItem("authDetails");
    this.showlogin = true;
    this.authForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      firmId: [0],
      firmGroupId: [0],
      firmUserId:[0],
      token:[''],
      otp:[''],
      finYear:['']
      // , Validators.
  });
  // this.subscription.add(this.authService.loadYears().subscribe(data=> {
  //   if(data) {
  //     this.years=[...data];
  //   }}));

  // this.years=["2023-2024"];
  }
  ngAfterViewInit(): void {
    if(this.authService.isPasswordUpdateSuccess()) {
      AppMessageUtils.clearMessage(this.loginAlert);
      AppMessageUtils.infoMessage("Login with New Password",this.loginAlert);

    }
    setTimeout(()=>this.userName.nativeElement.focus());
    
  }
  get form() { return this.authForm.controls; }

  doLogin(id) {
    if (this.authForm.invalid) {
         return;
     }
    this.authService.login(this.authForm.value, id).subscribe(data => {
      if (data != '') {

        var user = JSON.parse(sessionStorage.getItem('authDetails'));
        if (user !== null && user !== undefined) {
          if (user.token == '') {
            this.otpVerify = true;
            this.login = false;
            let duration = 10 * 60;
            setTimeout(() => {
              const timerElement = document.getElementById("timer");

              const countdown = setInterval(() => {
                if (duration > 0) {
                  let minutes = Math.floor(duration / 60);
                  let seconds = duration % 60;
                  timerElement.textContent =
                    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                  duration--;
                } else {
                  clearInterval(countdown);
                  timerElement.textContent = "OTP Expired!";
                  this.resendOTP = false;
                }
              }, 1000);
            }, 800);
          }
        }
      }
    });
     if(id == 1){
      this.firmGroup = [];
        // this.setintervel = setInterval(()=>{
        //   var data = JSON.parse(sessionStorage.getItem("authDetails"));
        //   if(data){
        //     clearInterval(this.setintervel)
        //     clearInterval(this.setintervel)
        //     this.FirmDetailsByFirmGroupId(data.firmGroupId);
        //   }
        // },1000)

     }
    //  , this.form.year.value
    // this.routeService.navigateToDashboard();
   }

   FirmYear(id){
    this.authForm.controls.firmId.setValue(id);
    this.masterService.FirmYear(id).subscribe(x=>{
      if(x){
        this.years = x;
        this.firmyear.setValue(x[0].firmYear);
      }
  });
   }


   FirmDetailsByFirmGroupId(data){
    this.masterService.FirmDetailsByFirmGroupId(data).subscribe(x=>{
      if(x){
        clearInterval(this.setintervel)
        this.firmGroup = x;
        this.showlogin = false;
      }
  },error =>{
    console.log(2);
  clearInterval(this.setintervel)
  });
   }
 

ngOnDestroy() {
  this.subscription.unsubscribe();
  clearInterval(this.setintervel)
}

changefirmgroup(id){
  this.authForm.controls.finYear.setValue(id);
}

get otpControls() {
  return this.otpForm.get('digits') as FormArray;
}


moveFocus(event: any, index: number) {
  const input = event.target as HTMLInputElement;
  if (input.value && index < this.otpControls.length - 1) {
    const nextInput = input.nextElementSibling as HTMLInputElement;
    if (nextInput) nextInput.focus();    
  }
  this.otpControls.value.forEach(x=>{
    if(x == ''){
      this.veriftbtn = true;
    } else{
      this.veriftbtn = false;
    }
  })
}

handleBackspace(event: KeyboardEvent, index: number) {
  if (event.key === 'Backspace' && index > 0) {
    const input = event.target as HTMLInputElement;
    if (!input.value) {
      const prevInput = input.previousElementSibling as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  }
  if(event.key == "Enter"){
    this.verifyOTP(1);
  }
}


verifyOTP(id){
  const otp = this.otpControls.value.join('');
  this.authForm.controls.otp.setValue(otp);
  if(otp != "" && otp != null && otp != undefined){
    this.authService.login(this.authForm.value,id).subscribe(data=>{
      var x = data;
    });

  }
}


cancel(){
  this.otpVerify = false;
  this.login = true;
}

resend(){
  this.doLogin(1);
  this.resendOTP = true
}
  
}
