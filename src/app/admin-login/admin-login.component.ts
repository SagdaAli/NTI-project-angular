import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../sevices/product.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminData={
    email:'',
    password:''
  }
  constructor(private _router:Router,private _admin:ProductService) { }

  ngOnInit(): void {
  }
  onLogin(data:any){
    if(data.valid){
      //console.log(data.value)
      console.log(this.adminData)
      this._admin.loginAdmin(this.adminData).subscribe(
        data=>{
        console.log(data)
      localStorage.setItem('adminToken',`Bearer ${data.data.token}`)
      },
      ()=>{},
      ()=>{
        this._router.navigateByUrl('/allProducts')
      }
      
      )
    }
}
}
