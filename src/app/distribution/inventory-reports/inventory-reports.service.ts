import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import ResponseUtils from 'src/app/shared/utils/response-utils';
import { InventoryHttpService } from 'src/app/shared/http-services/inventory-reports/inventory-http.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryReportsService {

  constructor(private httpService: InventoryHttpService) { }

  getCompanyList() {
      return this.httpService.getCompanies().pipe(map(data => {
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }));
    }
    getGroupCompanyList() {
      return this.httpService.getCompanyGroups().pipe(map(data => {
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }));
    }

    getstockStstement(data:any){
      return this.httpService.getStockStatemt(data).pipe(map(data=>{
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }))
    };
    getstockPosition(data:any){
      return this.httpService.getStockPosition(data).pipe(map(data=>{
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }))
    };

    getstockLedger(data:any){
      return this.httpService.getStockLedger(data).pipe(map(data=>{
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }))
    };

    getproductsList(data:any){
      return this.httpService.getProducts(data).pipe(map(data=>{
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }))
      
    };

    gettockPositionExcel(data:any){
      return this.httpService.getStockPositionExcel(data).pipe(map(data=>{
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }))
    };

    gettockStatementExcel(data:any){
      return this.httpService.getStockStatementExcel(data).pipe(map(data=>{
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }))
    };

    GetBatchesByProductId(data:any){
      return this.httpService.GetBatchesByProductId(data).pipe(map(data=>{
        if(ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)){
          return ResponseUtils.getPayload(data);
        }
        return null;
      }))
    }

    GetBatchWiseStockLedger(data:any){
      return this.httpService.GetBatchWiseStockLedger(data).pipe(map(data=>{
        if(ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)){
          return ResponseUtils.getPayload(data);
        }
        return null;
      }))
    }
}
