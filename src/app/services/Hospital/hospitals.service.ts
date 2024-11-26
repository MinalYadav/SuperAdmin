import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Allhospital } from '../../Models/allHospital.model';


@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  baseurl = environment.baseUrl;
  url = this.baseurl +'/hospital/get-all-hospital';


  constructor(private http:HttpClient) { }
  
  getAllHospitalList(): Observable<Allhospital>{
   return this.http.get<Allhospital>(this.url);
  }
}
