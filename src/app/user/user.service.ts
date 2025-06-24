import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import ResponseUtils from '../shared/utils/response-utils';
import AppMessageUtils from '../shared/utils/app-message-utils';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Subject, Observable, forkJoin } from 'rxjs';
import AppCoreTransformer from '../shared/transformers/app-core-transformer';
import { CoreHttpService } from '../shared/http-services/core/core-http.service';

export enum UserServiceActionEnum {SEARCH, ADD, EDIT, DELETE}

interface UserServiceEmitterType {
  action:UserServiceActionEnum,
  isProfile:boolean,
  data:UserDetails|UserDetails[]|Role|Role[]|SelectedAvailableMenu
}

interface SelectedAvailableMenu {
  selectedMenus?:Menu[];
  availableMenus:Menu[];
}

@Injectable()
export class UserService {

  private userDetails: Subject<UserServiceEmitterType> = new Subject<UserServiceEmitterType>();
  userDetails$: Observable<UserServiceEmitterType> = this.userDetails.asObservable();

  private roles: Subject<UserServiceEmitterType> = new Subject<UserServiceEmitterType>();
  roles$: Observable<UserServiceEmitterType> = this.roles.asObservable();

  private menus: Subject<UserServiceEmitterType> = new Subject<UserServiceEmitterType>();
  menus$: Observable<UserServiceEmitterType> = this.menus.asObservable();



  
  constructor(private httpService: CoreHttpService, private authService:AuthService) { }

  getUserDetails(loadAllUsers?:boolean) {
     this.httpService.doGetUserDetails(loadAllUsers).subscribe(data=>{
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        let emitterData=this.getEmitterData(UserServiceActionEnum.SEARCH,AppCoreTransformer.getUserFirmDetails(ResponseUtils.getPayload(data)));
        emitterData.isProfile=!loadAllUsers;
        this.userDetails.next(emitterData);
      }
   });

  }

  updateUserDetails(userDetails:UserDetails, isProfile?:boolean) {
     this.httpService.doUpdateUserDetails(AppCoreTransformer.getUserFirmDetails(userDetails) as UserDetails).subscribe(data=>{
      if (ResponseUtils.isSuccessAndPayload(data)) {
        let emitterData=this.getEmitterData(UserServiceActionEnum.EDIT,AppCoreTransformer.getUserFirmDetails(ResponseUtils.getPayload(data)));
        this.userDetails.next(emitterData);
        if(isProfile) {
          this.authService.doUpdateUserName(userDetails.fullName);
        }
        AppMessageUtils.successNotification((isProfile?"Profile":"User")+" has been "+(userDetails.id?"updated":"added")+" successfully");
      } else {
        AppMessageUtils.errorNotification("Unable to "+(userDetails.id?"updated":"added")+" "+(isProfile?"Profile":"User"));
      }});
  }

  deleteUserDetails(userDetails:UserDetails) {
    this.httpService.doDeleteUserDetails(AppCoreTransformer.getUserFirmDetails(userDetails) as UserDetails).subscribe(data=>{
     if (ResponseUtils.isStatus200(data)) {
       let emitterData=this.getEmitterData(UserServiceActionEnum.DELETE,userDetails);
       this.userDetails.next(emitterData);
       AppMessageUtils.successNotification("User has been deleted successfully");
     } else {
       AppMessageUtils.errorNotification("Unable to delete the User");
     }});
 }

  getAllRoles() {
    this.httpService.doGetAllRoles().subscribe(data=>{
     if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
      let emitterData=this.getEmitterData(UserServiceActionEnum.SEARCH,AppCoreTransformer.getRoles(ResponseUtils.getPayload(data)));
      this.roles.next(emitterData);
     }
  });
 }

 getMenus(roleId?:number|string) {
    let menuServices=[];
    menuServices.push(this.httpService.doGetAllMenus().pipe(map(data=>{
      let retData;
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          retData=AppCoreTransformer.getMenus(ResponseUtils.getPayload(data)) as Menu[];
      }
      return retData?retData:[];
    })));
    if(roleId) {
      menuServices.push(this.httpService.doGetRoleMenus(roleId).pipe(map(data=>{
        let retData;
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
            retData=AppCoreTransformer.getMenus(ResponseUtils.getPayload(data)) as Menu[];
        }
        return retData?retData:[];
      })));
    }
    forkJoin(menuServices).subscribe(results => {
      let emitterData={} as SelectedAvailableMenu;
      emitterData.availableMenus=results[0];
      if(roleId) {
        emitterData.selectedMenus=results[1];
      }
      this.menus.next(this.getEmitterData(UserServiceActionEnum.SEARCH,emitterData));
    });

 }

 private getEmitterData(action:UserServiceActionEnum,data) {
  let emitterData={} as UserServiceEmitterType;
  emitterData.action=action;
  emitterData.data=data;
  return emitterData;
 }

 updateRole(role:Role) {
  this.httpService.doUpdateRole(AppCoreTransformer.getRoles(role) as Role).subscribe(data=>{
   if (ResponseUtils.isSuccessAndPayload(data)) {
     let emitterData=this.getEmitterData(UserServiceActionEnum.EDIT,AppCoreTransformer.getRoles(ResponseUtils.getPayload(data)) as Role);
     this.roles.next(emitterData);
     AppMessageUtils.successNotification("Role has been "+(role.id?"updated":"add")+" successfully");
   } else {
     AppMessageUtils.errorNotification("Unable to "+(role.id?"updated":"add")+" Role");
   }});
}

}
