import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OutWardHttpService } from 'src/app/shared/http-services/out-ward/out-ward-http.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';

@Injectable({
  providedIn: 'root'
})
export class OutwardService {


  updateSaleHead: any = new BehaviorSubject<any>(null);
  updateSaleHead$ = this.updateSaleHead.asObservable();

  setSalesHead(saleHeadData: any, action: 'edit' | 'delete' | null) {
    const dataAction = { ...saleHeadData, action };
    return this.updateSaleHead.next(dataAction);
  }
  
  constructor(private httpService: OutWardHttpService) { }

  

  /*SALES INVOICE HEAD START */

  postOrUpdateOutwardHead(outwardReqObj: any) {
    return this.httpService.postOutwardEntryHead(outwardReqObj).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Head has been " + (outwardReqObj.outwardHeadId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (outwardReqObj.outwardHeadId ? "Update" : "Add") + " the Sale Invoice.");
      return data;
    }));
  }

  getSalesHeadList(outwardPrefix: string){
    return this.httpService.getSalesHeadList(outwardPrefix).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data) || ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  deleteSalesHeadById(salesHeadId: string){
    return this.httpService.deleteSalesHeadById(salesHeadId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return data;
      }
      return null;
    }));
  }

  getCustomAccountsByName(name: string) {
    return this.httpService.getCustomAccountByName(name).pipe(
      map(data => {
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      })
    );
  }

  /*SALES INVOICE HEAD END */

 /*SALES INVOICE DETAIL START */ 

  postSaleInvoiceDetail(outwardReqObj: any) {
    return this.httpService.postorUpdateOutwardEntryDetail(outwardReqObj).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Detail has been " + (outwardReqObj.outwardDetailId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (outwardReqObj.outwardDetailId ? "Update" : "Add") + " the Sale Invoice.");
      return data;
    }));
  }

  getOutwardEntryDetails(salesHeadId: number){
    return this.httpService.getOutwardEntryDetails(salesHeadId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data) || ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  deleteOutwardDetailItem(saleDetailItemId: number) {
    return this.httpService.deleteOutwardDetailItem(saleDetailItemId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return data;
      }
      return null;
    }));
  }

  getCustomProductByName(name: string, tranType: string){
    return this.httpService.getCustomProductByName(name, tranType).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }


  GetStockByProductsId(name: any, tranType: any,date:any){
    return this.httpService.GetStockByProductsId(name, tranType,date).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  GetStockByProducts(name: any,id:any,date:any){
    return this.httpService.GetStockByProducts(name,id,date).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }


  getBatchByProductId(productId: string, accId?: string, ){
    return this.httpService.getBatchByProductId(productId,accId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data) || ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }


/*SALES INVOICE DETAIL END */

/* SALES INVOICE FINAL SAVE START */

postOrUpdateOutwardFinalSave(outwardReqObj: any) {
  return this.httpService.postOrUpdateOutwardFinalSave(outwardReqObj).pipe(map(data => {
    ResponseUtils.isStatus200(data) 
    // ?
    //   AppMessageUtils.successNotification("Sale Invoice Head has been " + (outwardReqObj.id ? "Updated" : "Added") + " Successfully.") :
    //   AppMessageUtils.errorNotification("Unable to " + (outwardReqObj.id ? "Update" : "Add") + " the Sale Invoice.");
    return data;
  }));
}

/* SALES INVOICE FINAL SAVE END */

GetOutwardHead(body){
  return this.httpService.GetOutwardHead(body).pipe(map(data => {
    if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
      return ResponseUtils.getPayload(data);
    }
    return null;
  }));
}

 private saleReturnData: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  getheadData$: Observable<any> = this.saleReturnData.asObservable();
  sendheadData(data:any|null,action: 'edit' | 'delete' | null): void{
    const dataWithAction = { ...data, action };
    this.saleReturnData.next(dataWithAction)};

  
   
  


  public saleHeaddata = new BehaviorSubject(null);
  private update_sale_head: any = new BehaviorSubject<any>(null);
  updatePurchaseHead$ = this.update_sale_head.asObservable();


//** sales register services** //

getSaleRegisterData(payload){
    return this.httpService.saleRegisterGet(payload).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getSaleRegistrDataExcel(payload){
      return this.httpService.saleRegisterGetExcel(payload).pipe(map(data => {
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      }));
  }

  getsaleTrandate(id:any){
    return this.httpService.saleTranlastdate(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
}

invpdf(id:any){
  return this.httpService.invPDF(id).pipe(map(data=>{
    if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
      return ResponseUtils.getPayload(data);
    }
  }));
}

  postorUpdateOrderHead(outwardReqObj: any) {
    return this.httpService.postorUpdateOrderHead(outwardReqObj).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Head has been " + (outwardReqObj.ordHeadId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (outwardReqObj.ordHeadId ? "Update" : "Add") + " the Sale Invoice.");
      return data;
    }));
  }

  postorUpdateOrderDeatil(outwardReqObj: any) {
    return this.httpService.postorUpdateOrderDeatil(outwardReqObj).pipe(map(data => {
      ResponseUtils.isStatus200(data) ?
        AppMessageUtils.successNotification("Head has been " + (outwardReqObj.ordHeadId ? "Updated" : "Added") + " Successfully.") :
        AppMessageUtils.errorNotification("Unable to " + (outwardReqObj.ordHeadId ? "Update" : "Add") + " the Sale Invoice.");
      return data;
    }));
  }

  getOrderHead() {
    return this.httpService.getOrderHead().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getOrderDetail() {
    return this.httpService.getOrderDetail().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getOrderHeadFullDetails(id) {
    return this.httpService.getOrderHeadFullDetails(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getOrderFullDetails(id) {
    return this.httpService.getOrderFullDetails(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  deleteOrderDetailItem(saleDetailItemId: number) {
    return this.httpService.deleteOrderDetailItem(saleDetailItemId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return data;
      }
      return null;
    }));
  }

    deleteOrderHeadById(orderHeadId: string){
    return this.httpService.deleteOrderHeadById(orderHeadId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return data;
      }
      return null;
    }));
  }


}
