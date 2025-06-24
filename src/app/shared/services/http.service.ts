import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APIConst, RouteConst } from '../app-constants';

@Injectable()
export class HttpService {

  constructor(private http:HttpClient) { }

  doGet(path:string, params?:{}):Observable<{}> {
    return this.http.get<any>(path,{params:params});
  }

  doPost(path:string, payload:any,params?:{}):Observable<{}> {
    return this.http.post<any>(path,payload,{params:params});
  }

  doPut(path:string, payload:any,params?:{}):Observable<{}> {
    return this.http.put<any>(path,payload,{params:params});
  }

  doDelete(path:string,params?:{}):Observable<{}> {
    return this.http.delete<any>(path,{params:params});
  }

  localDate(){
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    return today;
  }

}
