import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../sevices/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private _product:ProductService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.params.id
    this._product.deleteProduct(id)
  }

}
