import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Departments } from '../../Models/Departments.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllDepartmentService {

  baseurl = environment.baseUrl;
  url = this.baseurl +'/doctor/get-all-department';


  constructor(private http:HttpClient) { }
  
  getAllDepartments(): Observable<Departments>{
   return this.http.get<Departments>(this.url);
  }

}
