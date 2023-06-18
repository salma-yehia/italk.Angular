import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import jwtDecode from 'jwt-decode';
import{Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = `https://localhost:7137/api/User`;
  userData = new BehaviorSubject (null);

  constructor(private http : HttpClient , private router : Router) { 
    if(localStorage.getItem('userToken')!=null){
      this.saveUserData();
    }
  }
  Login(login: Login): Observable<Token> {
    const url = `${this.loginUrl}/Login`;
    return this.http.post<Token>(url , login);
  }

  saveUserData(){
    let encodeUserData = JSON.stringify(localStorage.getItem('userToken'));
    this.userData.next(jwtDecode(encodeUserData));
    console.log(this.userData);
  }
  
  getUserId(): Observable<number | null> {
    return this.userData.asObservable();
  }

  Logout (){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this.router.navigate(['/login']);
  }
}
