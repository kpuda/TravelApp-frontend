import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseObject } from '../_objects/ResponseObject';
import { AuthenticationObject } from '../_objects/AuthenticationObject';

const SERVER = 'http://localhost:8080/api';
const LOGIN_ENDPOINT = '/authorization/login';
const REGISTER_ENDPOINT = '/user/register';
const VERIFY_ENDPOINT = '/user/verify?token=';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthenticationObject> {
    console.log("XD");
    return this.http.post<AuthenticationObject>(SERVER + LOGIN_ENDPOINT, {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(SERVER + REGISTER_ENDPOINT, {
      username,
      email,
      password
    }, httpOptions);
  }

  verify(token:string): Observable<ResponseObject> {
      return this.http.post<ResponseObject>(SERVER+VERIFY_ENDPOINT+token,httpOptions);
  }
}
