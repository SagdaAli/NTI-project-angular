import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servies/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData={
    email:'',
    password:''
  }
  
  constructor(public _loginService:LoginService,private _router:Router) { }

  ngOnInit(): void {
  }
  onLogin(data:any){
    if(data.valid){
      //console.log(data.value)
      console.log(this.userData)
      this._loginService.loginUser(this.userData).subscribe(
        data=>{
        console.log(data)
      localStorage.setItem('appToken',`Bearer ${data.data.token}`)
      },
      ()=>{},
      ()=>{
        this._router.navigateByUrl('/home')
      }
      
      )
    }
}
}
