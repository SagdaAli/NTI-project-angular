import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servies/login.service';
import { ProductService } from 'src/app/sevices/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _loginService:LoginService,private _router:Router,public _admin:ProductService) { }

  ngOnInit(): void {
  }

  logout(){
    this._loginService.logout().subscribe(
      data=>{},
      ()=>{},
      ()=>{
        this._loginService.isLogin=false
        localStorage.removeItem('appToken')
        this._router.navigateByUrl('/')
      }
    )
  }
  logOut(){
    this._admin.logout().subscribe(
      data=>{},
      (e)=>{console.log(e)},
      ()=>{
        this._admin.isAdminLogin=false
        localStorage.removeItem('adminToken')
        this._router.navigateByUrl('/')
      }
    )
  }
}
