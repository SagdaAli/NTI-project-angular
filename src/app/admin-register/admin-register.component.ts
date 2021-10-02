import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../sevices/product.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  adminData={
    name:'',
    email:'',
    password:'',
    phone:''
   
  
  }
  constructor(private _admin:ProductService,private _router:Router) { }

  ngOnInit(): void {
  }
  onRegister(data:any){
    if(data.valid){
      //console.log(data.value)
      console.log(this.adminData)
      this._admin.registerAdmin(this.adminData).subscribe(data=>{
        console.log(data)
      },
      ()=>{},
      ()=>{
        
        this._router.navigateByUrl('/adminLogin')
      }
      
      )
    }
  }
}
