import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DocResponse } from '../../Models/alldoctors.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorDataService {

  baseurl = environment.baseUrl;

  url = this.baseurl +'/doctor/get-all-doctor';

  constructor(private http:HttpClient) { }
  
  getAllDoctors() :Observable<DocResponse> {
    return this.http.get<DocResponse>(this.url);
  }

}
