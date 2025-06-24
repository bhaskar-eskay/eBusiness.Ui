import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MastersHttpService } from 'src/app/shared/http-services/masters/masters-http.service';
import { map } from 'rxjs/operators';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import { InWardHttpService } from 'src/app/shared/http-services/in-ward/in-ward-http.service';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private httpService :MastersHttpService, private httpInward : InWardHttpService) { }


  getAllVoucherData(tranTypeHeadId) {
    return this.httpService.getCashVoucher(tranTypeHeadId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  saveCashVoucherRecpt(data, text): Observable<any> {
    return this.httpService.saveCashVoucher(data).pipe(map(data => {
      ResponseUtils.isStatus200(data) ? AppMessageUtils.successNotification(text + " Added  Successfully.") :
      AppMessageUtils.errorNotification("Unable to Add");
      return data;
    }));
  }


  doDeleteCashVocuher(finTranId) {
    return this.httpService.deleteCashVoucher(finTranId).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Cash Voucher has been Deleted Successfully.") :
        AppMessageUtils.errorNotification("Unable to Delete the voucher.");
      return data;
    }));
  }

  doDeletCashList(finTranHeadId){
      return this.httpService.deletecashList(finTranHeadId).pipe(map(data => {
        ResponseUtils.isStatus200(data) ?
          AppMessageUtils.successNotification("Cash Voucher has been Deleted Successfully.") :
          AppMessageUtils.errorNotification("Unable to Delete the voucher.");
        return data;
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

  getCustomAccountsByName(name: string,tranType?:boolean) {
    // tranType?:string
    // tranType
    return this.httpInward.getCustomAccountByName(name , tranType).pipe(
      map(data => {
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      })
    );
  }



  editCashData(finTranId) {
    return this.httpService.editCashVoucher(finTranId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  updateCashVData(payload, text){

    return this.httpService.updateCashVocuher(payload).pipe(map(data => {
      ResponseUtils.isStatus200(data) ? AppMessageUtils.successNotification(text + (payload.finTranId ? "Updated" : "Added") + " Successfully.") :
      AppMessageUtils.errorNotification("Unable to " + (payload.finTranId ? "Update" : "Add") + " the Cash Voucher.");
      return data;
    }));
  }

  editCashList(finTranHeadId) {
    return this.httpService.editCashList(finTranHeadId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }
  

  getContraData(tranTypeHeadId) {
    return this.httpService.contraGet(tranTypeHeadId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }


  getBankData() {
    return this.httpService.BankDetailsGet().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  generateCashRecptReg(data): Observable<any> {
    return this.httpService.generatecashReceiptregister(data).pipe(map(data => {
      ResponseUtils.isStatus200(data) ? AppMessageUtils.successNotification(" Generated Successfully.") :
      AppMessageUtils.errorNotification("Unable to Generate");
      return data;
    }));
  }
  generateExcel(data):Observable<any>{
    return this.httpService.generateExcelReport(data).pipe(map(data => {
      ResponseUtils.isStatus200(data) ? AppMessageUtils.successNotification(" Generated Successfully.") :
      AppMessageUtils.errorNotification("Unable to Generate");
      return data;
    }));
  }


  private cashListData: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  getListData$: Observable<any> = this.cashListData.asObservable();
  sendListData(data:any|null): void{this.cashListData.next(data)}
}



