import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isLogin = localStorage.getItem('appToken')?true:false
  constructor(private _http:HttpClient) { 
    
  }
  registerUser(userData:any):Observable<any>{
    return this._http.post('http://localhost:3000/user/register', userData)
  }
  addAddr(data:any,id:any):Observable<any>{
    return this._http.post('http://localhost:3000/user/addAddr', data)
  }
  logOut():Observable<any>{
    return this._http.post('http://localhost:3000/user/logout', null)
  }
  me():Observable<any>{
    return this._http.post('http://localhost:3000/user/me', null)
  }
  addPImg(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/admin/addPImg', data)
  }
  allProducts():Observable<any>{
    return this._http.get('http://localhost:3000/admin/allProducts')
  }
  editProduct(data:any,id:any):Observable<any>{
    return this._http.post('http://localhost:3000/admin/editProduct', data)
  }
}
