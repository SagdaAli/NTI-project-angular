import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    password:new FormControl("", [Validators.required]),
    email:new FormControl("", [Validators.email]),
    phone: new FormControl("", [Validators.required])
  })
  get name() { return this.registerForm.get('name')}
  get email() { return this.registerForm.get('email')}
  get password() { return this.registerForm.get('password')}
  get phone() { return this.registerForm.get('phone')}
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
  }
  handleRegister(){
    console.log(this.registerForm.value)
  //  if(data.valid){
  //   //console.log(data.value)
  //   console.log(this.registerForm)
  //   this._userService.registerUser(this.registerForm).subscribe(data=>{
  //     console.log(data)
  //   })
  // }
  }
}
