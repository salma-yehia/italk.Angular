import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = `https://localhost:7137/api/User`;

  constructor(private http : HttpClient) { }
  Login(login: Login): Observable<any> {
    const url = `${this.loginUrl}/Login`;
    return this.http.post<any>(url , login);
  }
}
