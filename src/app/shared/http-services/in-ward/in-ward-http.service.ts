import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConst } from '../../app-constants';
import { CoreHttpService } from '../core/core-http.service';

@Injectable({
  providedIn: 'root'
})
export class InWardHttpService extends CoreHttpService {


  getTransportTypes(): Observable<any> {
    return this.httpService.doGet(APIConst.TRANSPORT);
  }

  postPurchaseHead(body,isFinalSave?:boolean): Observable<any> {
    if(body.inwardHeadId == 0){
      return this.httpService.doPost(APIConst.PURCHASEENTRYHEAD, body);
    }else{
      return this.httpService.doPut(APIConst.PURCHASEENTRYHEAD, body);
    }
  }

  InwardFinalSave(body): Observable<any> {
      return this.httpService.doPost(APIConst.InwardFinalSave, body);
  }


  getPurchaseHeadList(): Observable<any> {
    return this.httpService.doGet(APIConst.PURCHASEENTRYHEAD);
  }

  // deletePurchaseHead(purchaseHeadId: string): Observable<any> {
  //   return this.httpService.doDelete(APIConst.PURCHASEENTRYHEAD + '/' + purchaseHeadId);
  // }
  deletePurchaseHead(purchaseHeadId: number | string): Observable<any> {
    return this.httpService.doDelete(`${APIConst.PURCHASEENTRYHEAD}?InwardHeadId=${purchaseHeadId}`)
  }

  deletePurchaseItem(purchaseItemId) { 
    return this.httpService.doDelete(`${APIConst.PURCHASEENTRYDETAIL}?InwardDetailId=${purchaseItemId}`);
  }

  getCustomAccountByName(searchName: string,flag:boolean): Observable<any> {
    const firmPreferences = JSON.parse(sessionStorage.getItem("firmPreferences")); 
    // ,tranType?: string
    // let params=new HttpParams();
    // params=params.append('tranType',tranType);
    // params=params.append('searchName',`${searchName}`);
    // return this.httpService.doGet(APIConst.CUSTOMACCOUNTSEARCH + '?' + params);
    const payload = {
      accId: 0,
  accShName: '',
  accName: searchName ? searchName : '',
  accAddress1: '',
  accAddress2: '',
  accCityId: 0,
  accDistrictId: 0,
  cityPinId: 0,
  accStateId: 0,
  accCountryId: 0,
  accAreaId: 0,
  accSchId: flag == true ? firmPreferences.transporterSchId : 0,
  accPhone: '',
  accMobile: '',
  accContactPerson: '',
  accCpersonMobile: '',
  accFirmTypeId: 0,
  accTranMode: 0,
  accOpBal: 0,
  accOpBalType: 0,
  accCredit: 0,
  accDebit: 0,
  accCreditLimit: 0,
  accDueDays: 0,
  accInterest: 0,
  accTcsPercent: 0,
  accHsnCode: 0,
  accSacCode: 0,
  accTaxSlabId: 0,
  accBankId1: 0,
  accRemarks: '',
  accBankAccNo1: '',
  accBankIFSC1: '',
  accBankId2: 0,
  accBankAccNo2: '',
  accBankIFSC2: '',
  allowSms: 0,
  smsMobile: '',
  allowWhatsApp: 0,
  whatsAppMobile: '',
  accEmail: '',
  accGSTMode: 0,
  firmId: 0,
  isActive: 0,
  taxcategoryId: 0,
  isRegistered: 0,
  isDeleted: 0,
  cityName: '',
  districtName: '',
  cityPincode: 0,
  stateName: '',
  tax: 0,
  firmName: '',
  taxCategoryName: '',
  firmType: '',
  firmTypeAlias: ''
    }
    return this.httpService.doPost(APIConst.CUSTOMACCOUNTS, payload);
    // if(tranType) {
    //   return this.httpService.doGet(APIConst.CUSTOMACCOUNTSEARCH,{searchName:searchName,tranType:tranType});
    // }
    // return this.httpService.doGet(APIConst.CUSTOMACCOUNTSEARCH,{searchName:searchName});
  }

  getCustomAccountById(accid: Number): Observable<any> {
    const payload = {
      accId: accid,
    }
    return this.httpService.doPost(APIConst.CUSTOMACCOUNTS, payload);
  }


  postPurchaseDetail(body): Observable<any> {
    if(body.inwardDetailId == 0){
      return this.httpService.doPost(APIConst.PURCHASEENTRYDETAIL, body);
    }else{
      return this.httpService.doPut(APIConst.PURCHASEENTRYDETAIL, body);
    }
    
  }
  
  getCustomProductByName(searchName: string,compId:any ,tranType: string): Observable<any> {
    let params=new HttpParams();
    // params=params.append('tranType',`${tranType}`);
    // params=params.append('searchName',`${searchName}`);
    return this.httpService.doPost(APIConst.CUSTOMPRODUCTSEARCH ,{"prodName":searchName, "compId":compId});
  }


  getPurchaseDetailList(): Observable<any> {
    return this.httpService.doGet(APIConst.PURCHASEENTRYDETAIL);
  }

  deletePurchaseDetail(purchaseDetailId: string): Observable<any> {
    return this.httpService.doDelete(APIConst.PURCHASEENTRYDETAIL + '/' + purchaseDetailId);
  }

  getInwardHeadList(): Observable<any> {
    return this.httpService.doGet(APIConst.INWARDHEADLIST);
  }

  GetInwardHead(body): Observable<any> {
    return this.httpService.doPost(APIConst.GetInwardHead , body);
  }

  getInwardItemsForHead(headId) {
    return this.httpService.doGet(APIConst.INWARDHEADDETAILS + '?inwardHeadId=' + headId);
  }

  getTaxtesData(id) {
    return this.httpService.doGet(APIConst.INWARDHEADLIST + '?headId=' + id);
  }

  postPurchaseReturnDetail(body): Observable<any> {
    return this.httpService.doPost(APIConst.OUTWARDENTRYDETAIL, body);
  }

  getBatchByProductId(productId: string,accId?: string): Observable<any> {
    let params=new HttpParams();
      if(accId)
      params = params.append('accId', accId);
      params = params.append('prodId', productId);
      return this.httpService.doGet(APIConst.INWARDRETURNBATCH + '?' + params);
    // return this.httpService.doGet(APIConst.INWARDRETURNBATCH  + '/' + productId);
  }
  // getBatchByProductId(productId: string,accId?: string): Observable<any> {
  //   let params=new HttpParams();
  //   if(accId)
  //   params = params.append('accId', accId);
  //   params = params.append('prodId', productId);
  //   return this.httpService.doGet(APIConst.CUSTOMPRODUCTBYBATCH + '?' + params);
  // }



  // purchaseRegistersGet(payload):Observable<any>{
  //   let params = new HttpParams();
  //   params = params.append('fromDate', payload.fromDate.toString());
  //   params = params.append('toDate', payload.toDate.toString());
  //   params = params.append('dateOption', payload.dateOption.toString());
  //   params = params.append('reportType', payload.reportType.toString());
  //   params = params.append('wantTaxWiseDetails', payload.wantTaxWiseDetails.toString());
  //   return this.httpService.doGet(APIConst.GetPurachseRegister+'?'+params);
  // }

  purchaseRegistersGet(payload):Observable<any>{
    return this.httpService.doPost(APIConst.GetPurachseRegister, payload);
    // return this.httpService.doGet(`${APIConst.GetPurachseRegister}?fromDate=${payload.fromDate}&toDate=${payload.toDate}&dateOption=${payload.dateOption}&reportType=${payload.reportType}&wantTaxWiseDetails=1 `);
  }

  purchaseRegistersGetExcel(payload):Observable<any>{
    return this.httpService.doPost(APIConst.GetPurachseRegisterExcel, payload);
  }

  productSalesGet(accId : number, prodId: number):Observable<any>{
    return this.httpService.doGet(`${APIConst.GetProductSalesHistory}?accId=${accId}&prodId=${prodId}`)
  }
  productCustomerSalesGet(accId : number, prodId: number,inwardDate):Observable<any>{
    return this.httpService.doGet(`${APIConst.GetCustomerProductSalesHistory}?accId=${accId}&prodName=${prodId}&inwardDate=${inwardDate}`)
  }

  productPurGet(accId : number, prodId: number, inwardDate  ):Observable<any>{
    return this.httpService.doGet(`${APIConst.GetProductPURHistory}?accId=${accId}&prodId=${prodId}&inwardDate=${inwardDate}`)
  }

  GetSupplierPurchaseHistory(accId : number, prodId: number, inwardDate  ):Observable<any>{
    return this.httpService.doGet(`${APIConst.GetSupplierPurchaseHistory}?accId=${accId}&prodName=${prodId}&inwardDate=${inwardDate}`)
  }

  GetSupplierPurchaseHistoryBatch(accId : number, prodId: number, inwardDate , name ):Observable<any>{
    return this.httpService.doGet(`${APIConst.GetSupplierPurchaseHistoryBatch}?accId=${accId}&prodId=${prodId}&inwardDate=${inwardDate}&batch=${name}`)
  }
  GetSaleHistoryBatch(accId : number, prodId: number, outwardDate , name ):Observable<any>{
    return this.httpService.doGet(`${APIConst.GetsaleBatch}?accId=${accId}&prodId=${prodId}&outwardDate=${outwardDate}&batch=${name}`)
  }

  

}
