import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionStyle, TableDefinition } from 'src/app/shared/components/table/table-model';
import { UserService, UserServiceActionEnum } from '../user.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { menu } from 'src/app/shared/models/menu-json';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss', '../user.component.scss']
})
export class RoleManagementComponent implements OnInit, OnDestroy {
roleForm:FormGroup;
editRole:Role;
editRoleFlag:boolean;
selectedMenus:Menu[];
availableMenus:Menu[];
isInitData:boolean;
initialSelectedMenuData:Menu[];
roleFormAlert="roleFormAlertId";
tableAlert='tableAlertId';
subscription:Subscription=new Subscription();
roles:Role[];
isDataLoading:boolean;
disableActions:boolean;
tableDefinition:TableDefinition={
        columns:[
          {id:"id",  name:"ID", value:(role)=>role['id']?role['id']:''},
          {id:"name",  name:"Name", value:(role)=>role['name']?role['name']:''},
          {id:"action", name:"Action", disableSort:true, actions:[
            {method:(role)=>this.addorEditRole(role),name:'Edit',icon:'assets/new_edit2.png',style:ActionStyle.EDIT},
            {method:(role)=>this.deleteRole(role),name:'Delete',icon:'assets/new_delete2.png',style:ActionStyle.DELETE,isDisabled:(role)=>this.isDisableDelete(role)}
        ]},
      ]};
    
    constructor(private formBuilder:FormBuilder,private userService: UserService) {}
      
  
    ngOnInit() {
      this.subscription.add(this.userService.roles$.subscribe(emitterData=> {
        if(emitterData) {
          if(emitterData.action === UserServiceActionEnum.SEARCH && emitterData.data) {
            this.roles=[...emitterData.data as Role[]];
            this.isDataLoading=false;
          } else if(emitterData.action === UserServiceActionEnum.EDIT && emitterData.data) {
            this.updateRolesOnSuccess(emitterData.data as Role);
          } 
        }
      }));
      this.subscription.add(this.userService.menus$.subscribe(emitterData=> {
          if(emitterData && emitterData.action === UserServiceActionEnum.SEARCH && emitterData.data) {
            this.isInitData=true;
            this.selectedMenus=this.editRole.id ? [...emitterData.data['selectedMenus']]:[];
            this.availableMenus=[...emitterData.data['availableMenus']] as Menu[];

          }
      }));
      this.getAllRoles();
    }

    private getAllRoles() {
      this.isDataLoading=true;
      this.userService.getAllRoles();
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  
    addorEditRole(role?:Role){
      this.editRole=role?role:{} as Role;
      this.roleForm=this.buildRoleFormGroup();
      this.userService.getMenus(this.editRole.id);
      this.selectedMenus=[];
      this.availableMenus=[];
      this.editRoleFlag=true;
    }

    private buildRoleFormGroup() {
      return this.formBuilder.group({
        id:[this.editRole.id],
        name:[this.editRole.name,Validators.required]
      });
    }
  
    deleteRole(role) {
      let roleObj=role as Role;
      this.roles=this.roles.filter(item=>item.id !=roleObj.id);
    }

    updateRole() {
      AppMessageUtils.clearMessage(this.roleFormAlert);
      if(!this.roleForm.valid) {
        return;
      }
      let updatedRole:Role={...this.roleForm.getRawValue()};
      updatedRole.menus=[].concat([...this.sortMenus(this.editRole.menus)]);
      this.editRole.menus=this.initialSelectedMenuData;
      if(JSON.stringify(this.editRole) === JSON.stringify(updatedRole)) {
        AppMessageUtils.warningMessage("Modify the form in order to submit",this.roleFormAlert);
        return;
      } else if(!this.isValid(updatedRole)) {
        return
      }
      this.userService.updateRole(updatedRole);
    }

    private isValid(updatedRole:Role) {
        let isValid:boolean=true;
        let rolesList = this.roles ? [...this.roles] : [];
        if(updatedRole.id) {
          rolesList=rolesList.filter(role=>role.id!==updatedRole.id)
        }
        if(rolesList &&  rolesList.filter(role=>role.name === updatedRole.name).length>0) {
          AppMessageUtils.warningMessage("Role with same name already exists",this.roleFormAlert);
          isValid=false;
        }
        return isValid;
    }

    private sortMenus(menus:any[]) {
      return menus?
      menus.sort((menu1,menu2)=>menu1.menuId>menu2.menuId?1:-1):
      [];
    }

    updateRolesOnSuccess(role:Role) {
      this.getAllRoles();
      this.clearEditRoleFlag();
    }

    clearOrResetRoleForm() {
      let roleForm=this.roleForm as FormGroup;
      roleForm.reset({...this.editRole});
      this.selectedMenus=[...this.selectedMenus];
      this.availableMenus=[...this.availableMenus];
      AppMessageUtils.clearMessage(this.roleFormAlert);
    }
  
    clearEditRoleFlag() {
      this.editRoleFlag=false;
      this.roleForm=null;
      this.editRole=null;
      this.selectedMenus=null;
      this.availableMenus=null;
    }

    onMenusSelect(selectedMenuData:Menu[]) {
      AppMessageUtils.clearMessage(this.roleFormAlert);
      if(this.isInitData) {
          this.isInitData=false;
          this.initialSelectedMenuData=selectedMenuData?[].concat([...this.sortMenus(selectedMenuData)]):[];
      }
      this.editRole=({...this.editRole} as Role);
      this.editRole.menus=[...selectedMenuData];

    }

    private isDisableDelete(role:Role) {
        return true;
    }
  
  }
