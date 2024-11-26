import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Hospital } from '../../Models/hospital.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAuthorityService {

  baseUrl = environment.baseUrl;
  url = `${this.baseUrl}/hospital/add-hospital`;

  constructor(private http :HttpClient) { }

  addHospital(formData: any): Observable<any> {
    const data = new FormData();
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('registeration_number', formData.registeration_number);
    data.append('owner_name',formData.owner_name);
    data.append('address', formData.address);
    data.append('type', formData.type);
    data.append('payment', formData.payment);
    data.append('file',formData.file);
    data.append('name', formData.name);
    return this.http.post(this.url, data);
  }
}
