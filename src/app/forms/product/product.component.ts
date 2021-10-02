import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/sevices/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productData={
    name:'',
    description:'',
    category:'',
    price:'',
    //image:''
  }
  
  constructor(private _productService:ProductService,private _router:Router) { }

  ngOnInit(): void {
  }
  onAdded(data:any){
    if(data.valid){
      //console.log(data.value)
      console.log(this.productData)
      this._productService.addProduct(this.productData).subscribe(data=>{
        console.log(data)
      },
      
      ()=>{},
      ()=>{
        this._router.navigateByUrl('/allProducts')
      })
      
    }
  }

}
