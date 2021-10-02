import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../sevices/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  myData:any = {}
 
  // productData={
  //   name:this.myData.name,
  //   description:this.myData.Description,
  //   category:this.myData.category,
  //   price:this.myData.price,
  //   //image:''
  // }
  constructor(private _product:ProductService,private _activatedRoute: ActivatedRoute,private _router:Router) { }
  id = this._activatedRoute.snapshot.params.id

  ngOnInit(): void {
  //console.log(id)
  this._product.getProductDetailes(this.id).subscribe(all=>{
          console.log(all)
          this.myData=all.data
        })
  }
  onedit(data:any){
    if(data.valid){
      //console.log(data.value)
      console.log(this.myData)
      this._product.editProduct(this.id,this.myData).subscribe(data=>{
        console.log(data)
      },
      
      ()=>{},
      ()=>{
        this._router.navigateByUrl('/allProducts')
      }
      )
      
    }
  }
}
