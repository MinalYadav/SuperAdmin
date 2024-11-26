import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

//  api nahi hai abhi 
@Injectable({
  providedIn: 'root'
})
export class UpdateHospitalService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;
  // url = this.baseUrl+"/update-hospital";
  url = "";

  update(id:number,formData: any): Observable<any> {
    this.url = this.baseUrl+"/hospital/update-hospital";
    const data = new FormData();
    data.append('hospitalId',id.toString());
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('registeration_number', formData.registeration_number);
    data.append('owner_name',formData.owner_name);
    data.append('address', formData.address);
    data.append('type', formData.type);
    data.append('payment', formData.payment);
    data.append('file',formData.file);
    return this.http.post(this.url, data);
  }





}
