import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserService, UserServiceActionEnum } from '../user.service';
import { Observable, of, Subscription } from 'rxjs';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { AutoCompleteDefinition } from 'src/app/shared/components/autocomplete/autocomplete.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss', '../user.component.scss']
})
export class UserManagementComponent implements OnInit, OnDestroy {
@ViewChild('rolesTemp',{static:false}) rolesTemp;
loggedInUser:UserDetails;
userDetailsForm:FormGroup;
editUser:UserDetails;
editUserFlag:boolean;
selectedRoles:Role[];
availableRoles:Role[];
userDetailsFormAlert='userDetailsFormAlertId';
tableAlert='tableAlertId';
subscription:Subscription=new Subscription();
users:UserDetails[];
isDataLoading:boolean;
disableActions:boolean;
  tableDefinition:TableDefinition={
      columns:[
        {id:"userName",  name:"Name", value:(user)=>user['userName']?user['userName']:''},
        {id:"fullName",  name:"Full Name", value:(user)=>user['fullName']?user['fullName']:''},
        {id:"mobile",  name:"Mobile", value:(user)=>user['mobile']?user['mobile']:''},
        {id:"email",  name:"e-Mail", value:(user)=>user['email']?user['email']:''},
        {id:"roles",  name:"Roles", disableSort:true, template:{
          type:'popover',
          position:'left',
          icon:'info',
          templateRef:()=>this.getRolesPopoverTemplate()
        }},
        {id:"action", name:"Action", disableSort:true, actions:[
          {method:(user)=>this.addorEditUser(user),name:'Edit',icon:'assets/new_edit2.png',style:ActionStyle.EDIT},
          {method:(user)=>this.deleteUser(user),name:'Delete',icon:'assets/new_delete2.png',style:ActionStyle.DELETE,
          dialogProperties:{title:'Delete User'}
        }
      ]},
    ]};

  firmAutoCompleteDef:AutoCompleteDefinition={
      label:'Firm',
      isRequired:true,
      enableLazyLoad:true,
      dataSourceFn:()=>of([]),
      isStaticType:true,
      keyString:'name'
    }
  defaultFirm:FirmDetails;
  firmDataSourceFnc:()=>Observable<any>;
  
  constructor(private formBuilder:FormBuilder,
    private userService: UserService, private authService:AuthService) {}
    

  ngOnInit() {
    this.subscription.add(this.userService.userDetails$.subscribe(emitterData=> {
      if(emitterData) {
        this.disableActions=false;
        if(emitterData.action === UserServiceActionEnum.SEARCH && emitterData.data) {
          if(emitterData.isProfile) {
              this.loggedInUser=emitterData.data as UserDetails;
              this.defaultFirm=this.loggedInUser.firm;
              this.firmDataSourceFnc=()=>of([this.defaultFirm,...this.loggedInUser.firm.branches]);
          } else {
            this.users=[...emitterData.data as UserDetails[]];
          }
          this.isDataLoading=false;
        } else if(emitterData.action === UserServiceActionEnum.EDIT && emitterData.data) {
          this.updateUsersOnSuccess(emitterData.data as UserDetails);
        } else if(emitterData.action === UserServiceActionEnum.DELETE && emitterData.data) {
          this.getUserDetails();
        }
      }
    }));
    this.subscription.add(this.userService.roles$.subscribe(emitterData=> {
      if(emitterData) {
        if(emitterData.action === UserServiceActionEnum.SEARCH && emitterData.data) {
          this.availableRoles=[...emitterData.data as Role[]];
        }
      }
    }));
    this.doRefresh();
  }

  doRefresh() {
    this.userService.getUserDetails();
    this.getUserDetails();
  }

  private getUserDetails() {
    this.isDataLoading=true;
    this.userService.getUserDetails(true);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addorEditUser(user?:UserDetails){
    this.editUser=user?user:{} as UserDetails;
    if(!this.editUser.firm) {
      this.editUser.firm=this.defaultFirm;
    }
    this.userDetailsForm=this.buildUserDetailsFormGroup();
    this.selectedRoles=this.editUser.roles;
    this.userService.getAllRoles();
    this.editUserFlag=true;
  }

  private buildUserDetailsFormGroup() {
    return this.formBuilder.group({
      id:[this.editUser.id],
      userName:[this.editUser.userName,Validators.required],
      fullName:[this.editUser.fullName,Validators.required],
      mobile:[this.editUser.mobile, Validators.required],
      email:[this.editUser.email,Validators.required],
      firm:[this.editUser.firm]
    });

  }

  clearOrResetUserDetailsForm() {
    let userDetailsForm=this.userDetailsForm as FormGroup;
    userDetailsForm.reset({...this.editUser});
    this.selectedRoles=this.editUser.roles;
    this.availableRoles=[...this.availableRoles];
    AppMessageUtils.clearMessage(this.userDetailsFormAlert);
  }

  updateUser() {
    AppMessageUtils.clearMessage(this.userDetailsFormAlert);
    if(!this.userDetailsForm.valid) {
      return;
    } else if(!this.selectedRoles || this.selectedRoles.length===0) {
      AppMessageUtils.warningMessage("Atleast One Role is Required",this.userDetailsFormAlert);
      return;
    }
    this.editUser.roles=this.sortRoles(this.editUser.roles);
    let updatedUser:UserDetails={...this.userDetailsForm.getRawValue()};
    updatedUser.roles=[].concat([...this.sortRoles(this.selectedRoles)]);
    console.log(this.editUser.roles);
    console.log(updatedUser.roles);
    if(JSON.stringify(this.editUser) === JSON.stringify(updatedUser)) {
      AppMessageUtils.warningMessage("Modify the form in order to submit",this.userDetailsFormAlert);
      return;
    } else if(!this.isValidUser(updatedUser)) {
      return;
    }
    this.disableActions=true;
    this.userService.updateUserDetails(updatedUser);
  }


  private isValidUser(updatedUser:UserDetails) {
      let isValid:boolean=true;
      let usersList=this.users?[...this.users]:[];
      if(updatedUser.id) {
        usersList=usersList.filter(user=>user.id !==updatedUser.id);
      }
      if((usersList &&  usersList.filter(user=>user.userName === updatedUser.userName).length>0)
      || (this.loggedInUser &&  this.loggedInUser.userName===updatedUser.userName)) {
        AppMessageUtils.warningMessage("User with same name already exists",this.userDetailsFormAlert);
        isValid=false;
      } else if((usersList &&  usersList.filter(user=>user.mobile === updatedUser.mobile).length>0)
      ||(this.loggedInUser &&  this.loggedInUser.mobile===updatedUser.mobile)) {
        AppMessageUtils.warningMessage("User with same mobile already exists",this.userDetailsFormAlert);
        isValid=false;
      } else if((usersList &&  usersList.filter(user=>user.email === updatedUser.email).length>0)
      ||(this.loggedInUser &&  this.loggedInUser.email===updatedUser.email)) {
        AppMessageUtils.warningMessage("User with same email already exists",this.userDetailsFormAlert);
        isValid=false;
      } 
      return isValid;
  }

  private sortRoles(roles:Role[]) {
    return roles?
    roles.sort((role1,role2)=>role1.id>role2.id?1:-1):
    [];
  }

  updateUsersOnSuccess(user:UserDetails) {
    this.getUserDetails();
    this.clearEditUserDetailsFlag();
  }

  clearEditUserDetailsFlag() {
    this.editUserFlag=false;
    this.userDetailsForm=null;
    this.editUser=null;
    this.selectedRoles=null;
  }

  deleteUser(user:UserDetails) {
    this.disableActions=true;
    this.userService.deleteUserDetails(user);
  }

  getRolesPopoverTemplate(){
    return this.rolesTemp;
  }

  onRolesSelect(roles:Role[]) {
    AppMessageUtils.clearMessage(this.userDetailsFormAlert);
    this.selectedRoles=roles;
  }

}
