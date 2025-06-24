import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf, of } from 'rxjs';
import { APIConst, RouteConst } from '../../app-constants';
import { CoreHttpService } from '../core/core-http.service';
import { HttpParams } from '@angular/common/http';
import { ProdMasterType,CompanyMaster,CompanyGroup, ProductPack,Manufacturer, TaxSlab, TaxStake} from 'src/app/shared/models/master-models';
import { catchError, retry } from 'rxjs/operators';


export class ProdMasterTypeEnum {
  static readonly PROD_UOM=new ProdMasterTypeEnum('PROD_UOM', 'PROD_UOM');
  static readonly PROD_TYPE=new ProdMasterTypeEnum('PROD_TYPE', 'Product Type'); 
  static readonly PROD_LOCATION=new ProdMasterTypeEnum('PROD_LOCATION', 'Product Location');
  static readonly PROD_COMB=new ProdMasterTypeEnum('PROD_COMB', 'Product Combination');
  static readonly PROD_CAT=new ProdMasterTypeEnum('PROD_CAT', 'Product Category');
  static readonly PROD_GROUP=new ProdMasterTypeEnum('PROD_GROUP', 'Product Group');
  static readonly MFG_MASTER=new ProdMasterTypeEnum('MFG_MASTER', 'MFG Master');
  // private to disallow creating other instances of this type
  private constructor(private readonly key: string, public readonly value: any) {}
  toString=() => this.key;
}

@Injectable()
export class MastersHttpService extends CoreHttpService {
 
postCompanyMaster(companyMaster:CompanyMaster): Observable<any>{
  if(companyMaster.compId){
    return this.httpService.doPut(APIConst.COMPANY, companyMaster);
  }else{
    return this.httpService.doPost(APIConst.COMPANY, companyMaster);
  }
 
}
getCompanyMaster(contains?:string): Observable<any>{
  if(contains) {
    return this.httpService.doGet(APIConst.COMPANYGROUP,{nameContains:contains});
  }
  return this.httpService.doGet(APIConst.COMPANY);
}
deleteCompanyMaster(companyMaster:CompanyMaster): Observable<any>{
  return this.httpService.doDelete(`${APIConst.COMPANY}?compId=${companyMaster.compId}`);
}
  //companyDivisionMaster
  postcompanyDivisionMaster(body): Observable<any>{
    return this.httpService.doPost(APIConst.COMPANYDIVISIONMASTER, body);
  }
  getcompanyDivisionMaster(): Observable<any>{
    return this.httpService.doGet(APIConst.COMPANY_DIVISON);
  }
  deletecompanyDivisionMaster(body): Observable<any>{
    return this.httpService.doDelete(APIConst.COMPANY_DIVISON+'/'+ body.compDivId);
  }

  //prodMasterType
  getProdMasterType(prodMasterTypeEnum:ProdMasterTypeEnum): Observable<any>{
    return this.httpService.doGet(`${APIConst.PRODMASTERTYPE}?prodMasterTypes=${prodMasterTypeEnum}`);
  }
 
  postProdMasterType(prodMasterTypeEnum:ProdMasterTypeEnum,prodMasterType:ProdMasterType): Observable<any>{
  if(prodMasterType.prodMasterTypeId == 0){
    return this.httpService.doPost(APIConst.ProductMasterTypes, prodMasterType);
    }else{
      return this.httpService.doPut(APIConst.ProductMasterTypes, prodMasterType);
     }

   
  }

  deleteProdMasterType(prodMasterTypeEnum:ProdMasterTypeEnum,prodMasterType:ProdMasterType): Observable<any>{
    return this.httpService.doDelete(`${APIConst.ProductMasterTypes}?prodMasterTypeId=${prodMasterType.prodMasterTypeId}`);
  }
  
  // prodPackMaster
  
  postProdPackMaster(prodPack:ProductPack): Observable<any>{
    if(prodPack.prodPackId){
      return this.httpService.doPut(APIConst.PRODPACKMASTER, prodPack);
    }else{
      return this.httpService.doPost(APIConst.PRODPACKMASTER, prodPack);
    }
    
  }
  getProdPackMaster(contains?: any): Observable<any>{
    // if(contains) {
    //   return this.httpService.doGet(APIConst.PRODPACKMASTER,{nameContains:contains});
    // }
    return this.httpService.doGet(`${APIConst.PRODPACKMASTER}?prodPackId=${contains.prodPackId}&prodPackName=${contains.prodPackName}`);
  }
  deleteProdPackMaster(prodPack:ProductPack): Observable<any>{
    return this.httpService.doDelete(`${APIConst.PRODPACKMASTER}?prodPackId=${prodPack.prodPackId}`);
  }

    postCompGroup(compGroup:CompanyGroup): Observable<any>{
      if(compGroup.compGroupId){
        return this.httpService.doPut(APIConst.COMPANYGROUP, compGroup);
      }else{
        return this.httpService.doPost(APIConst.COMPANYGROUP, compGroup);
      }
      
    }
    getCompGroup(contains?:string): Observable<any>{
      if(contains) {
        return this.httpService.doGet(APIConst.COMPANYGROUP,{nameContains:contains});
      }
      return this.httpService.doGet(APIConst.COMPANYGROUP);
    }
    deleteCompGroup(compGroup:CompanyGroup): Observable<any>{
      return this.httpService.doDelete(`${APIConst.COMPANYGROUP}?compGroupId=${compGroup.compGroupId}`);
    }
    
    getAllManufacturers():Observable<any> {
      return this.httpService.doGet(APIConst.MASTERS_MANUFACTURERS);
    }

    doAddOrUpdateManfacturer(manufacturer:Manufacturer):Observable<any> {
      if(manufacturer.mfgId){
     return this.httpService.doPut(APIConst.MASTERS_MANUFACTURERS,manufacturer);
      }else{
        return this.httpService.doPost(APIConst.MASTERS_MANUFACTURERS,manufacturer);
      }
      
    }

    doDeleteManufacturer(manufacturer:Manufacturer):Observable<any> {
      return this.httpService.doDelete(`${APIConst.MASTERS_MANUFACTURERS}?mfgId=${manufacturer.mfgId}`);
    }

    updateCity(body):Observable<any> {
      return this.httpService.doPost(APIConst.UPDATECITY,body);
    }

    /// Tax Type

    getTaxType(): Observable<any>{
      return this.httpService.doGet(APIConst.TAXTYPEMASTER);
    }

    getTaxCategory(): Observable<any>{
      return this.httpService.doGet(APIConst.TAXCATEGORY);
    }

    getFirmPreferences(): Observable<any>{
      return this.httpService.doGet(APIConst.FIRMPREFERENCE);
    }

    getTaxSlabs(typeId?:number): Observable<any>{
      return typeId ?
      this.httpService.doGet(APIConst.TAXSLABS,{typeId:typeId}):
      this.httpService.doGet(APIConst.TAXSLABS);
    }

    postTaxSlab(body:TaxSlab): Observable<any>{
      return this.httpService.doPost(APIConst.TAXSLABS, body);
    }

    getTaxStakes(): Observable<any>{
      return this.httpService.doGet(APIConst.TAXSTAKES);
    }

    postTaxStakes(taxStakes:TaxStake[]): Observable<any>{
      return this.httpService.doPost(APIConst.TAXSTAKES, taxStakes);
    }

    getscheduleMode(mode): Observable<any>{
      return this.httpService.doGet(APIConst.SCHEDULE+'/schedules/'+mode);
    }

    getschedules(name): Observable<any>{
      return this.httpService.doGet(`${APIConst.SCHEDULE}?schName=${name ? name : '*'}`);
    }

    MainSchedules():Observable<any>{
      return this.httpService.doGet(APIConst.MainSchedules);
    }

  

    postschedules(body): Observable<any>{
      if(body.schId){
        return this.httpService.doPut(APIConst.SCHEDULE, body);
      }else{
        return this.httpService.doPost(APIConst.SCHEDULE, body);
      }
      
    } 

    deleteschedules(body): Observable<any>{
      return this.httpService.doDelete(`${APIConst.SCHEDULE}?schId=${body.schId}`);
    }

    // Areas 

    getbanks(): Observable<any>{
      return this.httpService.doGet(APIConst.BANKS);
    }

    getareas(): Observable<any>{
      return this.httpService.doGet(APIConst.AREAS);
    }
    getpincodes(id): Observable<any>{
      return this.httpService.doGet(APIConst.PINCODES+ `/${id}`);
    }

    FirmUsers():Observable<any>{
      return this.httpService.doGet(APIConst.FirmUsers);
    }

    postareas(body): Observable<any>{
      if(body.areaId){
        return this.httpService.doPut(APIConst.AREAS, body);
      }else{
        return this.httpService.doPost(APIConst.AREAS, body);
      }
      
    } 

    deleteareas(body): Observable<any>{
      return this.httpService.doDelete(`${APIConst.AREAS}?areaId=${body.areaId}`);
    }

     // Custom Products 
     postCustomProd(body): Observable<any>{
      if(body.prodId){
        return this.httpService.doPut(APIConst.CUSTOMPRODUCTS, body);
      }else{
        return this.httpService.doPost(APIConst.CUSTOMPRODUCTS, body);
      }
      
    } 

    getCustomProducts(body): Observable<any> {
      return this.httpService.doPost(APIConst.GETCUSTOMPRODUCTS,body);
    }

    updateCustomProduct(body):Observable<any>{
      return this.httpService.doPut(APIConst.CUSTOMPRODUCTS, body);
    }

    deleteCustomProduct(body): Observable<any> {
      return this.httpService.doDelete(`${APIConst.CUSTOMPRODUCTS}?prodId=${body.prodId}`);
    }

    // Custom Account
    getAllCustomAccounts(data): Observable<any> {
      return this.httpService.doPost(APIConst.CUSTOMACCOUNTS,data);
    }

    getLtoAccounts(id): Observable<any> {
      return this.httpService.doGet(APIConst.LTOACCOUNTS, + id )
    }

    postAccounts(body): Observable<any>{
      if(body.accId){
        return this.httpService.doPut(APIConst.POSTACCOUNTS, body);
      }else{
        return this.httpService.doPost(APIConst.POSTACCOUNTS, body);
      }
      
    }

    getCustomAcountByName(name: string): Observable<any> {
      let params=new HttpParams();
      params=params.append('tranType','PRET');
      // params=params.append('name',`${name}`);
      return this.httpService.doGet(APIConst.CUSTOMACCOUNTBYNAME + '/' + name + '?' + params);
    }

    // Transaction Type Details
    postTransactionTypeHead(body): Observable<any>{
      return this.httpService.doPost(APIConst.TRANTYPEHEAD, body);
    } 

    getTransactionTypeHead(): Observable<any> {
      return this.httpService.doGet(APIConst.TRANTYPEHEAD);
    }

    postTransactionTypeDetail(body): Observable<any>{
      return this.httpService.doPost(APIConst.TRANTYPEDETAIL, body);
    } 

    getTransactionTypeDetail(): Observable<any> {
      return this.httpService.doGet(APIConst.TRANTYPEDETAIL);
    }

    deleteTransactionTypeDetail(): Observable<any> {
      return this.httpService.doDelete(APIConst.TRANTYPEDETAIL);
    }

    getLookUpTable(columnName: string): Observable<any> {
      return this.httpService.doGet(APIConst.LOOKUPTABLE +  '/' + columnName); //'compId'
    }

    getTableMetaData(tableName: string): Observable<any> {
      return this.httpService.doGet(APIConst.TABLEMETATABLE + '/' + tableName); // inwardHead
    }

    gethsnmasters(text): Observable<any>{
      return this.httpService.doGet(`${APIConst.HSNMASTER}?hsnCode=${text}`);
    }
    //for getting product search values in table;//
    getproductdetails(body):Observable<any>{
      return this.httpService.doPost(APIConst.CUSTOMPRODUCTSEARCH,body);
    }

    deleteAccount(id): Observable<any>{
      return this.httpService.doDelete(`${APIConst.POSTACCOUNTS}?accountId=${id}`);
    }

    getFirmTypes(id): Observable<any> {
      return this.httpService.doGet(`${APIConst.FIRMTYPES}?firmCategoryId=${id}`);
    }

    getFirmDetails(id): Observable<any> {
      return this.httpService.doGet(`${APIConst.FIRMDETAILS}?firmTypeId=${id}`);
    }

    isFirmAliasExisting(id): Observable<any> {
      return this.httpService.doGet(`${APIConst.isFirmAliasExisting}?firmAlias=${id}`);
    }

    

    getbankDetails(): Observable<any> {
      return this.httpService.doGet(`${APIConst.GETBANKS}`);
    }

    getbankIFSC(id): Observable<any> {
      return this.httpService.doGet(`${APIConst.GETIFSC}?bankId=${id}`);
    }

    

    getBankIfscCodes(id): Observable<any> {
      return this.httpService.doGet(`${APIConst.BANKIFSCCODE}/${id}`);
    }


    //purchage
    getTranInDate(): Observable<any>{
      return this.httpService.doGet(`${APIConst.TRANDATE}/PUR`);

    }
    getTranInate(id:any): Observable<any>{
      return this.httpService.doGet(`${APIConst.TRANDATE_v1}?tranTypeHeadId=${id}`);

    }

    getTranIndate():Observable<any>{
      return this.httpService.doGet(`${APIConst.PURCHASEENTRYHEAD}/GetLastInwardDateByTranTypeId`)
    }
    getvalidInvoice(data): Observable<any>{
      let params=new HttpParams();
      params=params.append('tranTypeHeadId',data.tranTypeHeadId).append('invoice',data.Inoice).append('accId',data.accId).append('isUpdate',data.isUpdate);
      return this.httpService.doGet(APIConst.VALIDATEINVOICE2 + '?' + params).pipe(
        catchError(error => {
          if (error.status === 400) {
            // Handle 400 status, return the error response data or any custom data
            return of(error.error || { message: 'Invalid request' });
          }
          // For other errors, rethrow or return the error as is
          throw error;
        })
      )
      // return this.httpService.doGet('api/InwardHead/ValidateInvoice' + '?' + params);
    }

    // firm 
    // getFirm(): Observable<any>{
    //   return this.httpService.doGet(APIConst.FIRM);
    // }

    FirmGroup(data):Observable<any>{
      return this.httpService.doPost(APIConst.FirmGroup,data);
    }

    getFirmGroup():Observable<any>{
      return this.httpService.doGet(APIConst.FirmGroup);
    }

    FirmDetailsByFirmId(id):Observable<any>{
      return this.httpService.doGet(`${APIConst.FirmDetailsByFirmId}?firmId=${id}`);
    }

    getFirmLtos(id):Observable<any>{
      return this.httpService.doGet(`${APIConst.getFirmLtos}?firmId=${id}`);
    }

    


    FirmUser(data):Observable<any> {
      return this.httpService.doPost(APIConst.FirmUser,data);
    }

    FirmLtos(data):Observable<any> {
      return this.httpService.doPost(APIConst.FirmLtos,data);
    }

    AccountLtos(data):Observable<any> {
      return this.httpService.doPost(APIConst.AccountLtos,data);
    }

    updateAccountLtos(data):Observable<any> {
      return this.httpService.doPut(APIConst.AccountLtos,data);
    }

    getAccountLtos(data):Observable<any> {
      return this.httpService.doGet(`${APIConst.AccountLtos}?accId=${data}`);
    }

    getNoCityAccounts():Observable<any> {
      return this.httpService.doGet(APIConst.NoCityAccounts);
    }


    
    
   

    // admin post 
    doAddFirmPost(data):Observable<any> {
      return this.httpService.doPost(APIConst.ADMINREG,data);
    }

    getFirm():Observable<any>{
      return this.httpService.doGet(APIConst.ADMINREG);
    }

    FirmRoles():Observable<any>{
      return this.httpService.doGet(APIConst.FirmRoles);
    }


    //  Finance CASH//

    getCashVoucher(tranTypeHeadId):Observable<any>{
      return this.httpService.doGet(`${APIConst.CASHVOUCHER}?tranTypeHeadId=${tranTypeHeadId}      `);
    }
    
    saveCashVoucher(data):Observable<any>{
      return this.httpService.doPost(APIConst.CASHRECIEPTSAVE, data);
    }

    deleteCashVoucher(finTranId):Observable<any>{
      return  this.httpService.doDelete(`${APIConst.CASHRECIEPTDELETE}?finTranId=${finTranId}`);
    }

    editCashVoucher(finTranId):Observable<any>{
      return  this.httpService.doGet(`${APIConst.CASHRECIEPTEDIT}?finTranId=${finTranId}`);
    }

    updateCashVocuher(data):Observable<any>{
      let params=new HttpParams();
      params=params.append('finTranId',data.finTranId);
      
      return this.httpService.doPut(APIConst.CASHRECEIPTUPDATE, data, {params});
    }

    deletecashList(finTranHeadId):Observable<any>{
      return this.httpService.doDelete(`${APIConst.CASHLISTDELETE}?finTranHeadId=${finTranHeadId}`)
    }

    editCashList(finTranHeadId):Observable<any>{
      return this.httpService.doGet(`${APIConst.CASHLISTEDIT}?finTranHeadId=${finTranHeadId}`);
    }

    contraGet(tranTypeHeadId):Observable<any>{
      return this.httpService.doGet(`${APIConst.CASHCONTRAGET}?tranTypeHeadId=${tranTypeHeadId}`);
    }

    BankDetailsGet():Observable<any>{
      return this.httpService.doGet(APIConst.GETBANKS);
    }

  generatecashReceiptregister(body):Observable<any>{
    return this.httpService.doPost(APIConst.CASHRECEIPTREGISTERGENERATE , body);
  }

  generateExcelReport(body):Observable<any>{
    return this.httpService.doPost(APIConst.GENERATEEXCEL,body)
  }

   
}
