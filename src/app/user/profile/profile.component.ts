import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servies/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myData:any={}
  constructor(private _loginService:LoginService,private _router:Router) { }

  ngOnInit(): void {
    this._loginService.me().subscribe(data=>{
      console.log(data)
     this.myData = data
    },
    ()=>{ this._router.navigate(['/login'])},
      ()=>{}
    )
  }
  
}
