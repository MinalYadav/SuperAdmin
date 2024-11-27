import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AllPharmacies } from '../../Models/allPharmacies.model';
import { Observable } from 'rxjs';
import { PharmaForm } from '../../Models/pharmaForm.model';

@Injectable({
  providedIn: 'root'
})
export class GetPharmaciesService {

   // baseUrl 
  baseUrl = environment.baseUrl;
  url = this.baseUrl + '/hospital';

  constructor(private http:HttpClient) { }

  getPharmacies() : Observable<AllPharmacies>{
    const api  = this.url + '/get-all-pharmacy';
    return this.http.get<AllPharmacies>(api);
  }

  addPharmacies(formData: PharmaForm){
   const api  =  this.url + '/add-pharmacy';
    const data = new FormData();
    data.append('name', formData.name);
    data.append('address', formData.address);
    data.append('phone', formData.phone);
    data.append('registeration_number', formData.registeration_number);
    data.append('owner_name', formData.owner_name);
    data.append('type', formData.pharmaType);
    data.append('email', formData.email);
    data.append('hospitalId',formData.hospitalId);
    data.append('start_time', formData.start_time);
    data.append('close_time', formData.close_time);
    // data.append('logo', 'null'); ==> you dont have to pass logo

    return this.http.post<any>(api, data);
  }

  // update pharmacy 
  updatePharmacies(id:string,formData: PharmaForm){
   const api  =  this.url + '/update-pharmacy';
    const data = new FormData();
    data.append('name', formData.name);
    data.append('address', formData.address);
    data.append('phone', formData.phone);
    data.append('registeration_number', formData.registeration_number);
    data.append('owner_name', formData.owner_name);
    data.append('type', formData.pharmaType);
    data.append('email', formData.email);
    data.append('hospitalId',formData.hospitalId);
    data.append('start_time', formData.start_time);
    data.append('close_time', formData.close_time);
    data.append('pharmacyId', id)
    // data.append('logo', 'null'); ==> you dont have to pass logo
    // update krte time hopital ki id update nahi ho rahi h 

    return this.http.post<any>(api, data);
  }


}
