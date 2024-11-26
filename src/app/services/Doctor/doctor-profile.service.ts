import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorProfile } from '../../Models/doctorProfile.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorProfileService {
  
  baseurl = environment.baseUrl;
  url = "";

  constructor(private http:HttpClient){ }
  
  getDoctor(id:string) :Observable<DoctorProfile> {
    this.url = this.baseurl +'/doctor/get-specific-doctor/'+ id;
    return this.http.get<DoctorProfile>(this.url);
  }
}
