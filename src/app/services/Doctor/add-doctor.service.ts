import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DoctorData } from '../../Models/doctorData.model';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddDoctorService {
  
  baseurl = environment.baseUrl;

  url = this.baseurl +'/doctor/add-doctor';

  constructor(private http:HttpClient) { }

  addDoctor(formData: DoctorData, departmentId: string): Observable<any> {
    const data = new FormData();
    data.append('File', formData.image);
    data.append('firstname', formData.firstname);
    data.append('lastname', formData.lastname);
    data.append('gender', formData.gender);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    // data.append('formauthority', formData.formauthority);
    // data.append('selectAuthority', formData.selectAuthority);
    data.append('department', formData.department);
    data.append('description', formData.description);
    data.append('departmentId', departmentId);

    return this.http.post(this.url, data);
  }

}
