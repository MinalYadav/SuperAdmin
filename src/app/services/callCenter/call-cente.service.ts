import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllCallCenter } from '../../Models/allCallCenter.model';
import { CallForm } from '../../Models/callForm.model';
import { CallCenterHistory } from '../../Models/callCenterHistory.model';

@Injectable({
  providedIn: 'root'
})
export class CallCenteService {

  constructor(private http :HttpClient) { }

  baseUrl = environment.baseUrl;
  url = this.baseUrl + '/admin';

  // get all call center data 
  getAllCallCenterData():Observable<AllCallCenter>{
    const api = this.url +'/get-all-callCenter';
    return this.http.get<AllCallCenter>(api)
  }

  // add new call center
  addCallCenter(formData: CallForm){
    const api  =  this.url + '/add-call-center';
    const headers = new HttpHeaders({'content-type': 'application/json'});
    const data = {
      name:formData.name,
      address:formData.address,
      mobile:formData.mobile,
      gender:formData.gender,
      shift:formData.shift,
      email: formData.email,
      uniqueId:formData.uniqueId,

    }
    const body = JSON.stringify(data);
     return this.http.post<any>(api, body,{headers:headers});
   }


  //  block / unblock callCenter employee
  blockStatusOfEmp(id:number,status:string){
    const api = this.url +'/change-callcenter-status';
    const headers = new HttpHeaders({'content-type': 'application/json'});
    const data={
      callCenterId:id,
      status: status,
    } 
    let body = JSON.stringify(data);
    return this.http.post<any>(api,body,{headers:headers});
  }

  // get Call center employee data 
  getCallCenterEmployee(id:string) :Observable<CallCenterHistory>{
    const api = this.url + '/call-center-history/' + id;
    return this.http.get<CallCenterHistory>(api)
  }






}
