import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../sevices/product.service';

@Component({
  selector: 'app-productdetaile',
  templateUrl: './productdetaile.component.html',
  styleUrls: ['./productdetaile.component.css']
})
export class ProductdetaileComponent implements OnInit {
  myData:any = {}
  constructor(private _product:ProductService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this._activatedRoute.snapshot.params.id
  //console.log(id)
  this._product.getProductDetailes(id).subscribe(all=>{
          console.log(all)
          this.myData=all.data
        })
  }
 

}
