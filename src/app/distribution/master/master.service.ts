import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { MastersHttpService, ProdMasterTypeEnum } from 'src/app/shared/http-services/masters/masters-http.service';
import { ProdMasterType, CompanyMaster, CompanyGroup, ProductPack, Manufacturer, TaxSlab, TaxStake, Schedules, Areas, custProducts, CustomProducts } from 'src/app/shared/models/master-models';


@Injectable()
export class MasterService {
  loadDistrictss(arg0: boolean, arg1: null) {
    throw new Error('Method not implemented.');
  }

  private update_custom_product: any = new BehaviorSubject<any>(null);
  updateCustomProduct$ = this.update_custom_product.asObservable();

  setCustomProduct(custom_product: CustomProducts) {
    return this.update_custom_product.next(custom_product);
  }


  //// custom Account Data  
  operationType = 'add';
  private basic_account_Data: any = new BehaviorSubject<any>(null);
  customAccData$ = this.basic_account_Data.asObservable();

  setaccountFormValue(value) {
    const dataObj = {
      type: this.operationType,
      data: value
    };
    return this.basic_account_Data.next(dataObj);
  }


  //// custom Account Data 

  constructor(private httpService: MastersHttpService) { }

  getalltrandate(id:any){
    return this.httpService.getTranInate(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
    
  }

  getallvalidinvoice(data){
    return this.httpService.getvalidInvoice(data).pipe(map(data => {
      // if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return data;
      // }
      // return null;
    }));
  }

  getAllCompanyMaster(name?: string) {
    return this.httpService.getCompanyMaster(name).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }



  doAddOrUpdateCompanyMaster(companyMaster: CompanyMaster) {
    return this.httpService.postCompanyMaster(companyMaster).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Company has been " + (companyMaster.compId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (companyMaster.compId ? "Update" : "Add") + " the Company.");
      return data;
    }));
  }

  doDeleteCompanyMaster(companyMaster: CompanyMaster) {
    return this.httpService.deleteCompanyMaster(companyMaster).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Company has been Deleted Successfully.") :
        AppMessageUtils.errorNotification("Unable to Delete the Company.");
      return data;
    }));
  }

  getAllProdMasterType(prodMasterTypeEnum: ProdMasterTypeEnum) {
    return this.httpService.getProdMasterType(prodMasterTypeEnum).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  doAddOrUpdateProdMasterType(prodMasterTypeEnum: ProdMasterTypeEnum, prodMasterType: ProdMasterType) {
    return this.httpService.postProdMasterType(prodMasterTypeEnum, prodMasterType).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification(prodMasterTypeEnum.value + " has been " + (prodMasterType.prodMasterTypeId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (prodMasterType.prodMasterTypeId ? "Update" : "Add") + " the " + prodMasterTypeEnum.value + ".");
      return data;
    }));
  }

  doDeleteProdMasterType(prodMasterTypeEnum: ProdMasterTypeEnum, prodMasterType: ProdMasterType): Observable<any> {
    return this.httpService.deleteProdMasterType(prodMasterTypeEnum, prodMasterType).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification(prodMasterTypeEnum.value + " has been Deleted Successfully.") :
        AppMessageUtils.errorNotification("Unable to Delete the " + prodMasterTypeEnum.value + ".");
      return data;
    }));
  }

  getAllProdPack(data) {
    return this.httpService.getProdPackMaster(data).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }
  doAddOrUpdateProdPack(prodPack: ProductPack) {
    return this.httpService.postProdPackMaster(prodPack).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Product Pack has been " + (prodPack.prodPackId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (prodPack.prodPackId ? "Update" : "Add") + " the Product Pack.");
      return data;
    }));
  }

  doDeleteProdPack(prodPack: ProductPack) {
    return this.httpService.deleteProdPackMaster(prodPack).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Product Pack has been Deleted Successfully.") :
        AppMessageUtils.errorNotification("Unable to Delete the Product Pack.");
      return data;
    }));
  }



  getAllCompGroup(name?: string) {
    return this.httpService.getCompGroup(name).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  doAddOrUpdateCompGroup(compGroup: CompanyGroup) {
    return this.httpService.postCompGroup(compGroup).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Company Group has been " + (compGroup.compGroupId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (compGroup.compGroupId ? "Update" : "Add") + " the Company Group.");
      return data;
    }));
  }

  doDeleteCompGroup(compGroup: CompanyGroup) {
    return this.httpService.deleteCompGroup(compGroup).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Company Group has been Deleted Successfully.") :
        AppMessageUtils.errorNotification("Unable to Delete the Company Group.");
      return data;
    }));
  }

  getAllManufacturers(): Observable<any> {
    return this.httpService.getAllManufacturers().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  loadCities(id, name?) {
    const payload = {
      districtId : id,
      cityName : name
    }
      return this.httpService.doLoadCities(payload).pipe(map(data => {
        if (ResponseUtils.isSuccessAndPayload(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }));
  }

 
  loadLTOtypes() {
    return this.httpService.loadLTOtypes().pipe(map(data => {
      if (ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }
  
  loadLTOS(ltoTypeId){
    return this.httpService.loadLTOS(ltoTypeId).pipe(map(data => {
      if (ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  loadLTOPrefix(ltoId){
    return this.httpService.loadLTOPrefix(ltoId).pipe(map(data => {
      if (ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }


  

  loadCitiesByState(isSubjectType, stateId,name) {
    return this.httpService.doLoadCities1(isSubjectType,stateId, name).pipe(map(data => {
      if (ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }
  // https://ebusiness-coreapi-dev.azurewebsites.net/api/AreaMaster
  // LoadAreaData(id){
  //   return this.httpService.doLoadArea(id).pipe(map(data =>{
  //     if (ResponseUtils.isSuccessAndPayload(data)) {
  //       return ResponseUtils.getPayload(data);
  //     }
  //     return null;
  //   }));
  // }
  loadDistricts(isSubjectType, name?) {
    const payload = {
      stateId : isSubjectType,
      districtName : name
    }
      return this.httpService.doLoadDistricts(payload).pipe(map(data => {
        if (ResponseUtils.isSuccessAndPayload(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }));
  }

  loadStates(isSubjectType, name?) {
    return this.httpService.doLoadStates(isSubjectType, name).pipe(map(data => {
      if (ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  loadPinCodes(name?) {
    return this.httpService.doLoadPincodes(name).pipe(map(data => {
      if (ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  doAddOrUpdateManfacturer(manufacturer: Manufacturer): Observable<any> {
    return this.httpService.doAddOrUpdateManfacturer(manufacturer).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Manufacturer has been " + (manufacturer.mfgId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (manufacturer.mfgId ? "Update" : "Add") + " the Manufacturer.");
      return data;
    }));
  }

  doDeleteManfacturer(manufacturer: Manufacturer): Observable<any> {
    return this.httpService.doDeleteManufacturer(manufacturer).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Manufacturer has been Deleted Successfully.") :
        AppMessageUtils.errorNotification("Unable to Delete the Manufacturer.");
      return data;
    }));
  }

  getTaxType() {
    return this.httpService.getTaxType().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  getTaxCategory() {
    return this.httpService.getTaxCategory().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  getTaxSlabs(typeId?: number) {
    return this.httpService.getTaxSlabs(typeId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  doAddOrUpdateTaxSlab(taxSlab: TaxSlab) {
    return this.httpService.postTaxSlab(taxSlab).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Tax Slab has been " + (taxSlab.id ? "Terminated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (taxSlab.id ? "Terminate" : "Add") + " the Tax Slab.");
      return data;
    }));
  }


  getTaxStakes() {
    return this.httpService.getTaxStakes().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  doAddOrUpdateTaxStakes(taxStakes: TaxStake[]) {
    return this.httpService.postTaxStakes(taxStakes).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Tax Stakes has been " + (taxStakes[0].id ? "Terminated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (taxStakes[0].id ? "Terminate" : "Add") + " the Tax Slab.");
      return data;
    }));
  }


  getscheduleMode(mode) {
    return this.httpService.getscheduleMode(mode).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  getschedules(name) {
    return this.httpService.getschedules(name).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }


  MainSchedules(){
    return this.httpService.MainSchedules().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }


    
  
  

  postschedules(schedules: Schedules): Observable<any> {
    return this.httpService.postschedules(schedules).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("schedules has been " + (schedules.schId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (schedules.schId ? "Update" : "Add") + " the schedule.");
      return data;
    }));
  }




  doDeleteschedules(payload): Observable<any> {
    return this.httpService.deleteschedules(payload).pipe(map(data => {
      if (ResponseUtils.isStatus200(data)) {
        AppMessageUtils.successNotification("Schedule has been Deleted Successfully.");
        return 'Success';
      }
      AppMessageUtils.errorNotification("Unable to Delete the Schedule.");
      return null;
    }));
  }


  getareas() {
    return this.httpService.getareas().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  getpincodes(id) {
    return this.httpService.getpincodes(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  FirmUsers() {
    return this.httpService.FirmUsers().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  

  postareas(areas: Areas): Observable<any> {
    return this.httpService.postareas(areas).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Area has been " + (areas.areaId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (areas.areaId ? "Update" : "Add") + " the Area.");
      return data;
    }));
  }



  doDeleteareas(payload): Observable<any> {
    return this.httpService.deleteareas(payload).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
      AppMessageUtils.successNotification( "Aera has been Deleted Successfully.") :
      AppMessageUtils.errorNotification("Unable to Delete the Aera"+ ".");
    return data;
    }));
  }

  // Custom Products
  postCustomProduct(customProducts: custProducts): Observable<any> {
    return this.httpService.postCustomProd(customProducts).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("custom Product has been " + (customProducts.prodId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (customProducts.prodId ? "Update" : "Add") + " the custom Product.");
      return data;
    }));
  }

  getAllCustomProducts(body) {
    return this.httpService.getCustomProducts(body).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  deleteCustomProduct(custProducts: CustomProducts) {
    return this.httpService.deleteCustomProduct(custProducts).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
      AppMessageUtils.successNotification( "CustomProduct has been Deleted Successfully.") :
      AppMessageUtils.errorNotification("Unable to Delete the CustomProduct"+ ".");
    return data;
    }));
  }




  //TranTypeHead
  getTransactionTypeHead(): Observable<any> {
    return this.httpService.getTransactionTypeHead().pipe(map(data => {

      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }



  postTransactionTypeHead(tranTypeHead): Observable<any> {
    return this.httpService.postTransactionTypeHead(tranTypeHead).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("TranTypeHead has been " + (tranTypeHead.id ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (tranTypeHead.id ? "Update" : "Add") + " the TranTypeHead.");
      return data;
    }));
  }

  //TranTypeDetail
  getTransactionTypeDetail(): Observable<any> {
    return this.httpService.getTransactionTypeDetail().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  postTransactionTypeDetail(tranTypeDetail): Observable<any> {
    return this.httpService.postTransactionTypeDetail(tranTypeDetail).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("TranTypeDetail has been " + (tranTypeDetail.id ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (tranTypeDetail.id ? "Update" : "Add") + " the TranTypeDetail.");
      return data;
    }));
  }


  deleteTransactionTypeDetail() {
    return this.httpService.deleteTransactionTypeDetail().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getLookUpTable(columnName): Observable<any> {
    return this.httpService.getLookUpTable(columnName).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getTableMetaData(tableName): Observable<any> {
    return this.httpService.getTableMetaData(tableName).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }



  //Custom Accounts

  getbanks() {
    return this.httpService.getbanks().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  getCustomAcountByName(name: string) {
    return this.httpService.getCustomAcountByName(name).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }


  getCustomAccounts(payload) {
    return this.httpService.getAllCustomAccounts(payload).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }


  getLtoAccounts(id) {
    return this.httpService.getLtoAccounts(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;

    }))
  };
// TODO: needto change the type any to Areas
  postCustomAccouts(CustomAccouts: any): Observable<any> {
    return this.httpService.postAccounts(CustomAccouts).pipe(map(data => {
    
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return data;
      }
      return null;
      // ResponseUtils.isStatus200(data) ?
      //   AppMessageUtils.successNotification("CustomAccouts has been " + (CustomAccouts.id ? "Updated" : "Added") + " Successfully.") :
      //   AppMessageUtils.errorNotification("Unable to " + (CustomAccouts.id ? "Update" : "Add") + " the CustomAccouts.");

    }))
  }

  gethsnmasters(text) {
      return this.httpService.gethsnmasters(text).pipe(map(data => {
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          console.log(ResponseUtils.getPayload(data));
          return ResponseUtils.getPayload(data);
        }
        return null;
      }
      ));
  }

  deleteAccount(id) {
    return this.httpService.deleteAccount(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data)) {
        AppMessageUtils.successNotification("Account is DELETED SUCCESSFULLY");
        return 'Success';
      }else if(ResponseUtils.isStatus404(data)){
        AppMessageUtils.errorNotification('Account is already deleted.');
      }else if(ResponseUtils.isStatus406(data)){
        AppMessageUtils.errorNotification('You can not delete this account.');
      }
      return null;
    }));
  }

  getFirmPreferences() {
    return this.httpService.getFirmPreferences().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  getFirmTypes(id) {
    return this.httpService.getFirmTypes(id).pipe(map(data => {
      return ResponseUtils.getPayload(data);
    }));
  }

  getFirmDetails(id): Observable<any> {
    return this.httpService.getFirmDetails(id).pipe(map(data => {
      return ResponseUtils.getPayload(data);
    }));
  }

  isFirmAliasExisting(id): Observable<any> {
    return this.httpService.isFirmAliasExisting(id).pipe(map(data => {
      return ResponseUtils.getPayload(data);
    }));
  }

  

  getbankDetails(): Observable<any> {
    return this.httpService.getbankDetails().pipe(map(data => {
      return ResponseUtils.getPayload(data);
    }));
  }

  getbankIFSC(id): Observable<any> {
    return this.httpService.getbankIFSC(id).pipe(map(data => {
      return ResponseUtils.getPayload(data);
    }));
  }

  getBankIfscCodes(id) {
    return this.httpService.getBankIfscCodes(id).pipe(map(data => {
      return ResponseUtils.getPayload(data);
    }));
  }



  
  getFirm() {
    return this.httpService.getFirm().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  FirmRoles(){
    return this.httpService.FirmRoles().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }


  FirmGroup(data){
    return this.httpService.FirmGroup(data).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        // return ResponseUtils.getPayload(data);
        return data;
      }
      return null;
    }
    ));

  }

  getFirmGroup(){
    return this.httpService.getFirmGroup().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }


  FirmDetailsByFirmGroupId(id){
    return this.httpService.FirmDetailsByFirmGroupId(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }



  FirmYear(id){
    return this.httpService.FirmYear(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }


  FirmMenus(id){
    return this.httpService.FirmMenus(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }


  GetFirmPreferences(id){
    return this.httpService.GetFirmPreferences(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  GetExpiryStockSummary(expSlot1,expSlot2,expSlot3,expSlot4,reportDate,finSDate,finEDate,companies){
    return this.httpService.GetExpiryStockSummary(expSlot1,expSlot2,expSlot3,expSlot4,reportDate,finSDate,finEDate,companies).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }
  
  GetExpiryStockSlots(expSlot,reportDate,finSDate,finEDate,companies){
    return this.httpService.GetExpiryStockSlots(expSlot,reportDate,finSDate,finEDate,companies).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  GetExpiryStockSlotsExcel(reportDate,expSlot,finSDate,finEDate,companies){
    return this.httpService.GetExpiryStockSlotsExcel(reportDate,expSlot,finSDate,finEDate,companies).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }
 
  GetDashboardData(data:any){
    return this.httpService.GetDashboardData(data).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }



  

  FirmDetailsByFirmId(id){
    return this.httpService.FirmDetailsByFirmId(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }


  getFirmLtos(id){
    return this.httpService.getFirmLtos(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  FirmUser(data){
    return this.httpService.FirmUser(data).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return data;
      }
      return null;
    }
    ));
  }


 
  FirmLtos(data){
    return this.httpService.FirmLtos(data).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return data;
      }
      return null;
    }
    ));
  }

  AccountLtos(data){
    return this.httpService.AccountLtos(data).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return data;
      }
      return null;
    }
    ));
  }

  updateAccountLtos(data){
    return this.httpService.updateAccountLtos(data).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return data;
      }
      return null;
    }
    ));
  }
 
  getAccountLtos(data){
    return this.httpService.getAccountLtos(data).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }


  

 


  // Admin post service

  // doAddFirmReg(data): Observable<any> {
  //   return this.httpService.doAddFirmPost(data).pipe(map(data => {
  //     ResponseUtils.isStatus200(data) ?
  //       AppMessageUtils.successNotification("doAddFirmReg has been  Successfully.") :
  //       AppMessageUtils.errorNotification("Unable to open");
  //     return data;
  //   }));
  // }


  //Add form 

  // Admin post service

  doAddFirmReg(data): Observable<any> {
    return this.httpService.doAddFirmPost(data).pipe(map(data => {
      ResponseUtils.isStatus200(data) ? AppMessageUtils.successNotification("doAddFirmReg has been  Successfully.") :
      AppMessageUtils.errorNotification("Unable to open");
      return data;
    }));
  }

  noCityAccounts(){
    return this.httpService.getNoCityAccounts().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }
    ));
  }

  cityUpdate(body){
    return this.httpService.updateCity(body).pipe(map(data=>{
      ResponseUtils.isStatus200(data) ?
      AppMessageUtils.successNotification("City was been added successfully for this Account.") :
      AppMessageUtils.errorNotification("Unable to add the city to this Account.");
    return data;
    }));
    
  }
}










