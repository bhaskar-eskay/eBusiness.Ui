import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { FinanceReportService } from 'src/app/shared/http-services/finance-report/finance-report.service';
@Injectable({
  providedIn: 'root'
})
export class FinanceReportsService {

  constructor(private httpService: FinanceReportService) { }

  GetStockByProducts(name: any){
    return this.httpService.GetStockByProducts(name).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getCustomAccounts() {
    return this.httpService.getAllCustomAccounts().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getCopyAccounts() {
    return this.httpService.getCopyAccounts().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }


    getAccountCopyData(payload){
      return this.httpService.getAccountCopyData(payload).pipe(map(data => {
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }));
    }

    getAccountCopyExcel(payload){
      return this.httpService.AccountCopyExcel(payload).pipe(map(data => {
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }));
    }
}
