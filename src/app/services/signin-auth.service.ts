import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninAuthService {

  // base url
  baseurl = environment.baseUrl;

  // signin url
  url = this.baseurl +'/auth/login';

  constructor(private http : HttpClient) { }
  signin(email: string, password:string) : Observable<any> {
    const headers = new HttpHeaders({'content-type': 'application/json'});
    const obj = {
     email: email,
     password: password
    }
    // converting obj to json
    let body= JSON.stringify(obj);

    return this.http.post<any>(this.url,body,{headers:headers});
  }
}
