import { Injectable } from '@angular/core';
import { CoreHttpService } from '../core/core-http.service';
import { Observable } from 'rxjs/internal/Observable';
import { APIConst } from '../../app-constants';
@Injectable({
  providedIn: 'root'
})
export class FinanceReportService extends CoreHttpService{

  GetStockByProducts(searchName: any): Observable<any> {
    const payload :any = {};
    payload.prodName = searchName ;
    payload.prodId = 0 ;
    
    return this.httpService.doPost(APIConst.GetStockByProducts,payload);
  }

  getAllCustomAccounts(): Observable<any> {
    const payload = {
      accId: 0,
      accShName: '',
      accName: '',
      accAddress1: '',
      accAddress2: '',
      accCityId: 0,
      accDistrictId: 0,
      cityPinId: 0,
      accStateId: 0,
      accCountryId: 0,
      accAreaId: 0,
      accSchId: 0,
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
    return this.httpService.doPost(APIConst.CUSTOMACCOUNTS,payload);
  }
  getCopyAccounts():Observable<any>{
    return this.httpService.doGet(APIConst.AccountCopyAccoounts);
  }

  getAccountCopyData(payload):Observable<any>{
    return this.httpService.doPost(APIConst.getAccountCopyData, payload);
    // return this.httpService.doGet(`${APIConst.GetPurachseRegister}?fromDate=${payload.fromDate}&toDate=${payload.toDate}&dateOption=${payload.dateOption}&reportType=${payload.reportType}&wantTaxWiseDetails=1 `);
  }

  AccountCopyExcel(payload):Observable<any>{
   return this.httpService.doPost(APIConst.accountCopyExcel , payload)
  }

}
