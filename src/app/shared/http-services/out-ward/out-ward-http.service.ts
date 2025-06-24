import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { APIConst, SalePrefix } from '../../app-constants';
import { CoreHttpService } from '../core/core-http.service';

@Injectable({
  providedIn: 'root'
})
export class OutWardHttpService extends CoreHttpService {

 /*SALES INVOICE HEAD START */
  postOutwardEntryHead(body): Observable<any> {
    if(body.outwardHeadId){
      return this.httpService.doPut(APIConst.OUTWARDENTRYHEAD, body);
    }else{
      return this.httpService.doPost(APIConst.OUTWARDENTRYHEAD, body);
    }
    
  }

  getSalesHeadList(tranType: string): Observable<any> {
    return this.httpService.doGet(`${APIConst.OUTWARDENTRYHEAD}/${tranType}`);
  }

  deleteSalesHeadById(outwardHeadId: number | string): Observable<any> {
    return this.httpService.doDelete(`${APIConst.OUTWARDENTRYHEAD}?outwardHeadId=${outwardHeadId}`);
  }

  getCustomAccountByName(searchName: string): Observable<any> {
    return this.httpService.doGet(APIConst.CUSTOMACCOUNTSEARCH + '/' + searchName);
  }
 /*SALES INVOICE HEAD END */


 /*SALES INVOICE DETAIL START */
  postorUpdateOutwardEntryDetail(body): Observable<any> {
    if(body.outwardDetailId){
      return this.httpService.doPut(APIConst.OUTWARDENTRYDETAIL, body);
    }else{
      return this.httpService.doPost(APIConst.OUTWARDENTRYDETAIL, body);
    }
    
  }

  getOutwardEntryDetails(outwardHeadId: number): Observable<any> {
    return this.httpService.doGet(`${APIConst.OUTWARDENTRYDETAILLIST}?outwardHeadId=${outwardHeadId}`);
  }

  deleteOutwardDetailItem(detailId: number): Observable<any> {
    return this.httpService.doDelete(`${APIConst.OUTWARDENTRYDETAIL}?outwardDetailId=${detailId}`);
  }

  getCustomProductByName(searchName: string,tranType: string): Observable<any> {
    // let params=new HttpParams();
    // params=params.append('tranType', `${tranType}`);
    // params=params.append('searchName',`${searchName}`);
    return this.httpService.doPost(APIConst.CUSTOMPRODUCTSEARCH,{"prodName":searchName});
  }

  GetStockByProducts(searchName: any, id:any,date:any): Observable<any> {
    const payload :any = {};
    payload.prodName = searchName ;
    payload.prodId = 0 ;
    payload.compId = id;
    payload.inwardDate = date;
    
    return this.httpService.doPost(APIConst.GetStockByProducts,payload);
  }

  GetStockByProductsId(searchName: any,prodId: any,date:any): Observable<any> {
    const payload :any = {};
    payload.prodName = '' ;
    payload.batch = searchName ;
    payload.prodId = prodId ? prodId : 0 ;
    payload.inwardDate = date;
    return this.httpService.doPost(APIConst.GetStockByProducts,payload);
  }

  

  getBatchByProductId(productId: string,accId?: string): Observable<any> {
    let params=new HttpParams();
    if(accId)
    params = params.append('accId', accId);
    params = params.append('prodId', productId);
    return this.httpService.doGet(APIConst.CUSTOMPRODUCTBYBATCH + '?' + params);
  }

  

  /*SALES INVOICE DETAIL END */


  /*SALES INVOICE FINAL SAVE START */
  postOrUpdateOutwardFinalSave(body): Observable<any> {
    return this.httpService.doPost(APIConst.OUTWARDENTRYFINALSAVE, body);
  }
  /*SALES INVOICE FINAL SAVE END */

  /*sales List data*/
  GetOutwardHead(body):Observable<any>{
    return this.httpService.doPost(APIConst.OUTWARDHEAD,body);
  }

  // private autoTabdata: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  // getTabData$: Observable<any> = this.autoTabdata.asObservable();
  // sendTabData(data:any|null): void{this.autoTabdata.next(data)}

  saleRegisterGet(payload):Observable<any>{
    return this.httpService.doPost(APIConst.GetSaleRegister, payload);
    // return this.httpService.doGet(`${APIConst.GetPurachseRegister}?fromDate=${payload.fromDate}&toDate=${payload.toDate}&dateOption=${payload.dateOption}&reportType=${payload.reportType}&wantTaxWiseDetails=1 `);
  }

  saleRegisterGetExcel(payload):Observable<any>{
    return this.httpService.doPost(APIConst.GetSaleRegisterExcel, payload);
  }

  saleTranlastdate(id:any):Observable<any>{
    return this.httpService.doGet(`${APIConst.saleTranDate}?tranTypeHeadId=${id}`);
  }

  invPDF(id:any):Observable<any>{
    return this.httpService.doGet(`${APIConst.invoicePDF}?outwardHeadId=${id}`);
  }

  postorUpdateOrderHead(body): Observable<any> {
    if (body.ordHeadId) {
      return this.httpService.doPut(APIConst.ORDERHEADUPDATE, body);
    } else {
      return this.httpService.doPost(APIConst.ORDERHEAD, body);
    }

  }

  getOrderDetail(): Observable<any> {
    return this.httpService.doGet(APIConst.ORDERDETAIL);
  }

  getOrderHead(): Observable<any> {
    return this.httpService.doGet(APIConst.ORDERHEAD);
  }

  getOrderHeadFullDetails(id: any): Observable<any> {
    return this.httpService.doGet(`${APIConst.ORDERHEADFULLDETAILS}?ordHeadId=${id}`);
  }

  getOrderFullDetails(id: any): Observable<any> {
    return this.httpService.doGet(`${APIConst.ORDERDETAILUPDATE}?ordDetailId=${id}`);
  }

  postorUpdateOrderDeatil(body): Observable<any> {
    if (body.ordDetailId) {
      return this.httpService.doPut(APIConst.ORDERDETAILUPDATE, body);
    } else {
      return this.httpService.doPost(APIConst.ORDERDETAIL, body);
    }

  }

  deleteOrderDetailItem(detailId: number): Observable<any> {
    return this.httpService.doDelete(`${APIConst.ORDERDETAILUPDATE}?ordDetailId=${detailId}`);
  }

  deleteOrderHeadById(ordHeadId: number | string): Observable<any> {
    return this.httpService.doDelete(`${APIConst.ORDERHEADUPDATE}?ordHeadId=${ordHeadId}`);
  }
  
}
