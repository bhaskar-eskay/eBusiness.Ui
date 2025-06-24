import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InWardHttpService } from 'src/app/shared/http-services/in-ward/in-ward-http.service';
import AppMessageUtils from 'src/app/shared/utils/app-message-utils';
import ResponseUtils from 'src/app/shared/utils/response-utils';

@Injectable()
export class InwardService {

  public purchaseHeaddata = new BehaviorSubject(null);
  private update_purchase_head: any = new BehaviorSubject<any>(null);
  updatePurchaseHead$ = this.update_purchase_head.asObservable();

  setPurchaseHead(purchase_head: any) {
    return this.update_purchase_head.next(purchase_head);
  }

  constructor(private httpService: InWardHttpService) { }

  getAllTransportTypes() {
    return this.httpService.getTransportTypes().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getTaxtesData(id) {
    return this.httpService.getTaxtesData(id).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  postPurchaseHead(body: any, isFinalSave?:boolean) {
    return this.httpService.postPurchaseHead(body,isFinalSave).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        if(isFinalSave) {
          if(body.inwardHeadId){
            AppMessageUtils.successNotification('Purchase Head Updated Successfully');

          }
          else{
            AppMessageUtils.successNotification('Purchase Head Saved Successfully');
          }
        }
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  InwardFinalSave(body: any){
    return this.httpService.InwardFinalSave(body).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getPurchaseHeadList() {
    return this.httpService.getPurchaseHeadList().pipe(map(data => {
      console.log('head data service-------', data);
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  deletePurchaseHead(purchaseHeadId: string){
    return this.httpService.deletePurchaseHead(purchaseHeadId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  deletePurchaseItem(purchaseItemId: any) {
    return this.httpService.deletePurchaseItem(purchaseItemId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getCustomAccountsByName(name: string,tranType?:boolean) {
    // tranType?:string
    // tranType
    return this.httpService.getCustomAccountByName(name , tranType).pipe(
      map(data => {
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      })
    );
  }

  getCustomAccountById(accid: Number) {
    return this.httpService.getCustomAccountById(accid).pipe(
      map(data => {
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      })
    );
  }
  


  GetFirmPreferences(name:Number) {
    // tranType?:string
    // tranType
    return this.httpService.GetFirmPreferences(name).pipe(
      map(data => {
        if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
          return ResponseUtils.getPayload(data);
        }
        return null;
      })
    );
  }


  

  postPurchaseDetail(body: any){
    return this.httpService.postPurchaseDetail(body).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getPurchaseDetailList(){
    return this.httpService.getPurchaseDetailList().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  deletePurchaseDetail(purchase_id){
    return this.httpService.deletePurchaseDetail(purchase_id).pipe(map(data => {
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
  getCustomProductByName(name: string,compId:any, tranType: string) {
    return this.httpService.getCustomProductByName(name,compId, tranType).pipe(map(data => {
      console.log("yyy",data);
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
      console.log("123",data);
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }
  

  getInwardHeadList() {
    return this.httpService.getInwardHeadList().pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  GetInwardHead(body){
    return this.httpService.GetInwardHead(body).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }


  getInwardItemsForHead(headId) {
    return this.httpService.getInwardItemsForHead(headId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  postPurchaseRetDetail(body: any){
    return this.httpService.postPurchaseReturnDetail(body).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }


  getPurchaseRegistrData(payload){
    return this.httpService.purchaseRegistersGet(payload).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  getPurchaseRegistrDataExcel(payload){
    return this.httpService.purchaseRegistersGetExcel(payload).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  productSalesHistory(accId, prodId){
    return this.httpService.productSalesGet(accId, prodId).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data) || ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }
  productCusromerSalesHistory(accId, prodId, inwardDate){
    return this.httpService.productCustomerSalesGet(accId, prodId, inwardDate).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data) || ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }
  GetSupplierSaleHistoryBatch(accId, prodId, inwardDate, name){
    return this.httpService.GetSaleHistoryBatch(accId, prodId, inwardDate, name).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data) || ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }


  productPURHistory(accId, prodId, inwardDate){
    return this.httpService.productPurGet(accId, prodId, inwardDate).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data) || ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  GetSupplierPurchaseHistory(accId, prodId, inwardDate){
    return this.httpService.GetSupplierPurchaseHistory(accId, prodId, inwardDate).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data) || ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }

  GetSupplierPurchaseHistoryBatch(accId, prodId, inwardDate, name){
    return this.httpService.GetSupplierPurchaseHistoryBatch(accId, prodId, inwardDate, name).pipe(map(data => {
      if (ResponseUtils.isStatus200(data) || ResponseUtils.isStatus404(data) || ResponseUtils.isSuccessAndPayload(data)) {
        return ResponseUtils.getPayload(data);
      }
      return null;
    }));
  }
  
  

  private purheadData: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  getheadData$: Observable<any> = this.purheadData.asObservable();
  sendheadData(data: any | null, action: 'edit' | 'delete' | null): void {
    const dataWithAction = { ...data, action };
    this.purheadData.next(dataWithAction)
  }


  private purRegData: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  getRegData$: Observable<any> = this.purRegData.asObservable();
  sendRegData(data:any|null): void{this.purRegData.next(data)}


// private purheadReturnData: BehaviorSubject<any> = new BehaviorSubject<any>(null)
//   getReturnheadData$: Observable<any> = this.purheadReturnData.asObservable();
//   sendReturnheadData(data:any|null): void{this.purheadReturnData.next(data)}


  getReturnheadData: any = new BehaviorSubject<any>(null);
  getReturnheadData$ = this.getReturnheadData.asObservable();

  setInwardReturHead(InwardReturHead: any) {
    return this.getReturnheadData.next(InwardReturHead);
  }

}