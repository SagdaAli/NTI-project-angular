import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../sevices/product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  myData:any[]=[]
  constructor(public _productService:ProductService,private _router:Router ) { }

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe(data=>{
      console.log(data)
      this.myData = data.data
    })
  }
  delProduct(id:any, i:any){
    this._productService.deleteProduct(id).subscribe(
      data=>{},
      ()=>{},
      ()=>{
        this.myData.splice(i,1)
      }
    )
  }
  logout(){
    this._productService.logout().subscribe(
      data=>{},
      (e)=>{console.log(e)},
      ()=>{
        this._productService.isAdminLogin=false
        localStorage.removeItem('adminToken')
        this._router.navigateByUrl('/')
      }
    )
  }
}
