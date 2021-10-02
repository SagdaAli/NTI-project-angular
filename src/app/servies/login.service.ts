import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLogin = localStorage.getItem('appToken')?true:false
  constructor(private _http:HttpClient) { 
    
  }
  loginUser(userData:any):Observable<any>{
    return this._http.post('http://localhost:3000/user/login', userData)
  }
  me():Observable<any>{
    return this._http.post('http://localhost:3000/user/me',null)
  }
  logout():Observable<any>{
    return this._http.post('http://localhost:3000/user/logout', null)
  }
}
