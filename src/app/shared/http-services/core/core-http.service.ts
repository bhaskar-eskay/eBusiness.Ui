import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { APIConst, RouteConst } from '../../app-constants';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreHttpService {

  constructor(public httpService:HttpService) {}

      doPostAuthDetails(body:string):Observable<{}> {
        // year: string
        return this.httpService.doPost(APIConst.LOGIN,body);
      }
    
       doLoadAppData(path:string=APIConst.APPDATA_YEARS):Observable<{}> {
        return this.httpService.doGet(path);
      }

      doLoadCities(body):Observable<{}> {
        if(body.districtId) {
          return this.httpService.doPost(APIConst.APPDATA_CITIES,body);
        }
        // return this.httpService.doGet(APIConst.APPDATA_CITIES,{isSubjectType:isSubjectType,nameContains:contains});
      }

      doLoadCities1(stateId:number,contains?:string,value?:string):Observable<{}> {
        if(stateId) {
          return this.httpService.doGet(APIConst.APPDATA_CITIES,{districtId:stateId,cityName:contains,value:value});
        }
        // return this.httpService.doGet(APIConst.APPDATA_CITIES,{isSubjectType:isSubjectType,nameContains:contains});
      }
      // https://ebusinessapi-dev.azurewebsites.net/api/Districts?stateId=2&districtName=gun

      doLoadDistricts(body):Observable<{}> {
        return this.httpService.doPost(APIConst.APPDATA_DISTRICTS,body);
      }
      doLoadAreas(id:any):Observable<{}>{
  // https://ebusiness-coreapi-dev.azurewebsites.net/api/AreaMaster
        return this,this.httpService.doGet(APIConst.APPDATA_AREAS,{AreaMaster:id})
      }
      doLoadStates(isSubjectType:boolean,contains?:number):Observable<{}> {
        return this.httpService.doGet(APIConst.APPDATA_STATES,{isSubjectType:isSubjectType,countryId:contains});
      }

      doLoadPincodes(id:number):Observable<{}>{
        return this.httpService.doGet(APIConst.APPDATA_PINCODES,{cityId:id});
      }
    
      getFirmName():Observable<{}> {
        return this.httpService.doGet(APIConst.FIRM_NAME);
      }
      doUpdatePassword(payload:{}):Observable<{}> {
        return this.httpService.doPost(APIConst.CHANGE_PASSWORD, payload);
      }
      
      // doforgotpassword(payload:{}):Observable<{}> {
      //   return this.httpService.doPost(APIConst.FORGOTPASSWORD, payload);
      // }
    
      doGetUserDetails(isLoadAllUsers?:boolean):Observable<{}> {
        let params=new HttpParams();
        if(isLoadAllUsers) {
          params=params.append('isLoadAll',`${isLoadAllUsers}`);
        }
        return this.httpService.doGet(APIConst.LOGGED_IN_USER_DETAILS,params);
      }
    
      doUpdateUserDetails(userDetails:UserDetails):Observable<{}> {
        return this.httpService.doPut(APIConst.LOGGED_IN_USER_DETAILS,userDetails);
      }
    
      doDeleteUserDetails(userDetails:UserDetails):Observable<{}> {
        return this.httpService.doDelete(APIConst.LOGGED_IN_USER_DETAILS+RouteConst.PATH+userDetails.id);
      }
    
      doGetAllRoles():Observable<{}> {
        return this.httpService.doGet(APIConst.ALL_ROLES);
      }
    
      doUpdateRole(role:Role):Observable<{}> {
        return this.httpService.doPut(APIConst.ALL_ROLES,role);
      }
    
      doGetRoleMenus(roleId:string|number):Observable<{}> {
        return this.httpService.doGet(APIConst.ALL_ROLES+RouteConst.PATH+roleId+APIConst.ROLE_MENUS);
      }
    
      doGetAllMenus():Observable<{}> {
        return this.httpService.doGet(APIConst.ALL_MENUS);
      }


      //LTO Tyeps
      loadLTOtypes():Observable<{}> {
        return this.httpService.doGet(APIConst.NEW_LTOTYPES);
      }

      loadLTOS(ltoType):Observable<{}> {
        return this.httpService.doGet(APIConst.NEW_LTOS,{ltoTypeId:ltoType.ltoTypeId,firmTypeId:ltoType.firmTypeId});
      }


      loadLTOPrefix(ltoid):Observable<{}> {
        return this.httpService.doGet(APIConst.NEW_LTOPrefix,{ltoId:ltoid});
      }

      FirmDetailsByFirmGroupId(firmGroupId):Observable<{}> {
        return this.httpService.doGet(APIConst.FirmDetailsByFirmGroupId,{firmGroupId:firmGroupId});
      }

      FirmYear(firmGroupId):Observable<{}> {
        return this.httpService.doGet(APIConst.FirmYear,{firmId:firmGroupId});
      }

      FirmMenus(firmGroupId):Observable<{}> {
        return this.httpService.doGet(APIConst.FirmMenus,{firmUserId:firmGroupId});
      }


      GetFirmPreferences(firmId){
        return this.httpService.doGet(APIConst.GetFirmPreferences  + '?firmId=' + firmId);
      }

      GetExpiryStockSummary(expSlot1:number,expSlot2:number,expSlot3:number,expSlot4:number,reportDate:string,finSDate:string,finEDate:string,companies:string){
        return this.httpService.doGet(APIConst.expiryStockSummary,{expSlot1:expSlot1,expSlot2:expSlot2,expSlot3:expSlot3,expSlot4:expSlot4,
          reportDate:reportDate,finSDate:finSDate,finEDate:finEDate,companies:companies});
      }
      
      GetExpiryStockSlots(expSlot:number,reportDate:string,finSDate:string,finEDate:string,companies:string){
        return this.httpService.doGet(APIConst.expiryStockSlots,{reportDate:reportDate,expSlot:expSlot,finSDate:finSDate,finEDate:finEDate,companies:companies});
      }

      GetExpiryStockSlotsExcel(reportDate:string,expSlot:number,finSDate:string,finEDate:string,companies:string){
        return this.httpService.doGet(APIConst.expiryStockSlotsExcel,{reportDate:reportDate,expSlot:expSlot,finSDate:finSDate,finEDate:finEDate,companies:companies});
      }
      
      GetDashboardData(payload){
        return this.httpService.doGet(APIConst.dashBoardData,payload);
      }

      

      


  
       
    

}