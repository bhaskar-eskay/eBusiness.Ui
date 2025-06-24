import { Injectable } from '@angular/core';
// import { CoreHttpService } from '../core/core-http.service';
import { Observable } from 'rxjs/internal/Observable';
import { APIConst } from '../../app-constants';
import { HttpService } from '../../services/http.service';
import { ThrowStmt } from '@angular/compiler';
import { platform } from 'os';
@Injectable({
  providedIn: 'root'
})
export class InventoryHttpService {

   constructor(private httpService:HttpService) { }

 getCompanies(): Observable<any> {
    return this.httpService.doGet(APIConst.companiesMaster);
  }

  getCompanyGroups(): Observable<any> {
    return this.httpService.doGet(APIConst.companiesGroups);
  }

  getStockStatemt(payload:any):Observable<any>{
    return this.httpService.doPost(APIConst.stockStatement,payload);
  }

  getStockPosition(payload:any):Observable<any>{
    return this.httpService.doPost(APIConst.stockPosition,payload);
  }

  getStockLedger(payload:any):Observable<any>{
    return this.httpService.doPost(APIConst.stockLedger, payload);
  }

  getProducts(payload:any):Observable<any>{
    return this.httpService.doPost(APIConst.GETCUSTOMPRODUCTS , payload);
  }
  getStockPositionExcel(payload:any):Observable<any>{
   return this.httpService.doPost(APIConst.stockPositionExcel, payload);
  }
  getStockStatementExcel(payload:any):Observable<any>{
    return this.httpService.doPost(APIConst.stockStatementExcel, payload);
   }
   GetBatchesByProductId(payload:any):Observable<any>{
    return this.httpService.doGet(APIConst.batchesByProductId, payload);
   }
   GetBatchWiseStockLedger(payload:any):Observable<any>{
    return this.httpService.doGet(APIConst.batchWiseStockLedger, payload);
   }
}
