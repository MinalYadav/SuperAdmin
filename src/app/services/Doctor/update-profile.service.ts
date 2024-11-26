import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

  baseurl = environment.baseUrl;

  url = this.baseurl +'/doctor/update-doctor';

  constructor(private http:HttpClient) { }

  addDoctor(formData:any, departmentId: string, doctorId:string, gender:string): Observable<any> {
    const data = new FormData();
    data.append('doctorId', doctorId);
    data.append('firstname', formData.firstname);
    data.append('lastname', formData.lastname);
    data.append('gender', gender);
    data.append('departmentId', departmentId);
    data.append('description', formData.description);
    data.append('File', formData.image);
    // data.append('email', formData.email);
    data.append('phone', formData.phone);
    
    return this.http.post(this.url, data);
  }

}
