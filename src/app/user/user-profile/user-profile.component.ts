import { Component, OnInit, ViewEncapsulation, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { AlertContent } from 'src/app/shared/components/alert/alert-model';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { DialogClass } from 'src/app/shared/components/dialog/dialog.component';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation:ViewEncapsulation.None,
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class UserProfileComponent implements OnInit, OnDestroy, AfterViewInit {
  userProfileForm:FormGroup;
  userDetails:UserDetails;
  subscription:Subscription=new Subscription();
  firmHasBranches:boolean;
  alertId='profileAlert';
  loadingAlertId='profileLoadingAlert';
  @ViewChild('profileLoadingAlertTemplate',{static:true}) loadingAlertTemplate;
  loadingAlertContent:AlertContent={templateFunction:()=>this.loadingAlertTemplate};
  hasEditAccess:boolean=true;

  firmBranchesTableDef:TableDefinition={
    columns:[
      {id:"category",  name:"Category", value:(firm)=>firm['type']['category']['name']?firm['type']['category']['name']:''},
      {id:"type",  name:"Type", value:(firm)=>firm['type']['name']?firm['type']['name']:''},
      {id:"name",  name:"Name", value:(firm)=>firm['name']?firm['name']:''},
      {id:"details", name:"Details", disableSort:true, actions:[
        {name:'Show Details',style:ActionStyle.DELETE,
        dialogProperties:{title:'Firm Details',templateRef:()=>this.getFirmDetailsTemplate(), closeBtnLabel:'Close', dialogClass:DialogClass.LARGE}}
    ]},
    {id:"ltos", name:"LTOs", disableSort:true, actions:[
      {name:'Show LTOs',style:ActionStyle.DELETE,
      dialogProperties:{title:'License Tax Others',templateRef:()=>this.getFirmLTOsTemplate(), closeBtnLabel:'Close', dialogClass:DialogClass.LARGE}}
  ]},
      
  ]};
  @ViewChild('firmDetailsTemplate',{static:false}) firmDetailsTemplate;
  @ViewChild('firmLTOsTemplate',{static:false}) firmLTOsTemplate;
  firmBranches:FirmDetails[];
  constructor(private formBuilder:FormBuilder,
    private userService: UserService,
    private authService:AuthService,
    private router:Router) { 
      this.router.events.subscribe(event=> {
        if(event instanceof NavigationEnd && !this.authService.isRoutePathAccesable(event.url)) {
            this.hasEditAccess=false;
        }
      });
    }

  ngOnInit() {
    this.subscription.add(this.userService.userDetails$.subscribe(emitterData=> {
      if(emitterData && emitterData.data) {
        if(emitterData.isProfile) {
          this.userDetails={...emitterData.data as UserDetails};
          this.firmHasBranches=this.userDetails.firm.branches && this.userDetails.firm.branches.length?true:false;
          if(this.firmHasBranches) {
            this.firmBranches=[...this.userDetails.firm.branches];
          }
          this.userProfileForm=this.buildUserProfileForm();
          if(!this.hasEditAccess) {
            this.userProfileForm.disable();
          }
          this.clearMessages();
          this.subscription.add(this.userProfileForm.valueChanges.subscribe(data=>this.clearMessages()));
        }     
      }
    }));
    this.userService.getUserDetails();
  }

  ngAfterViewInit() {
    if(!this.userProfileForm) {
      AppMessageUtils.infoMessage('',this.loadingAlertId);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private clearMessages() {
    AppMessageUtils.clearMessage(this.loadingAlertId);
    AppMessageUtils.clearMessage(this.alertId);
  }

  private buildUserProfileForm() {
    return this.formBuilder.group({userDetailsForm:this.buildUserDetailsForm()});
  }

  private buildUserDetailsForm() {
    return this.formBuilder.group({
      fullName:[this.userDetails.fullName,Validators.required],
      email:[this.userDetails.email,Validators.required],
      mobile:[this.userDetails.mobile, Validators.required]
    });

  }

  resetUserDetailsForm() {
    let userDetailsForm=this.userProfileForm.controls.userDetailsForm as FormGroup;
    userDetailsForm.reset({...this.userDetails});
  }

  doUpdateUserProfile() {
    AppMessageUtils.clearMessage(this.alertId);
    if(!this.userProfileForm.valid) {
        return;
    }
    let updatedUserDetails:UserDetails={...this.userDetails,...(this.userProfileForm.controls.userDetailsForm as FormGroup).getRawValue()};
    console.log(updatedUserDetails);
    if(JSON.stringify(updatedUserDetails) === JSON.stringify(this.userDetails)) {
      AppMessageUtils.warningMessage("Modify the form in order to submit",this.alertId);
      return;
    }
    this.userDetails=updatedUserDetails;
    this.userService.updateUserDetails(updatedUserDetails,true);
  }

  getFirmDetailsTemplate() {
    return this.firmDetailsTemplate;
  }
  getFirmLTOsTemplate() {
    return this.firmLTOsTemplate;
  }
}
