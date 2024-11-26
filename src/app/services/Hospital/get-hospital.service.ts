import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetHospitalService {

  constructor(private http: HttpClient) { }

  baseUrl  = environment.baseUrl;
  url = this.baseUrl +"/hospital/get-specific-hospital/2";

  getHospitalDetials(id:number){
    this.url = this.baseUrl + "/hospital/get-specific-hospital/" + id;
    return this.http.get<any>(this.url);
  }
}
