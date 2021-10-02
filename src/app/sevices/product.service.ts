import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public isAdminLogin = localStorage.getItem('adminToken')?true:false
  constructor(private _http:HttpClient) { 
  
  }
  registerAdmin(adminData:any):Observable<any>{
    return this._http.post('http://localhost:3000/admin/register', adminData)
  }
  loginAdmin(adminData:any):Observable<any>{
    return this._http.post('http://localhost:3000/admin/login', adminData)
  }
  me():Observable<any>{
    return this._http.post('http://localhost:3000/admin/me',null)
  }
  logout():Observable<any>{
    return this._http.post('http://localhost:3000/admin/logout', null)
  }
  addProduct(productData:any):Observable<any>{
    return this._http.post('http://localhost:3000/admin/addProduct', productData)
  }
  getAllProducts(): Observable<any>{
    return this._http.get('http://localhost:3000/admin/allProducts')
  }
  getProductDetailes(id:any): Observable<any>{
    return this._http.get(`http://localhost:3000/admin/productDetails/${id}`)
  }
  editProduct(id:any, data:any): Observable<any>{
    return this._http.patch(`http://localhost:3000/admin/editProduct/${id}`, data)
  }
  deleteProduct(id:any): Observable<any>{
    return this._http.delete(`http://localhost:3000/admin/deleteProduct/${id}`)
  }

}
