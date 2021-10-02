import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/sevices/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myData:any[]=[]
  constructor(public _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe(data=>{
      console.log(data)
      this.myData = data.data
    })
  }

}
