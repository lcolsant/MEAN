import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products:Array<Product> = [];

  constructor(
    private _productService:ProductService,

  ) { }

  ngOnInit() {
      this._productService.productsObservable.subscribe( (products)=>{
          this.products = products;
    });
  }

  //send the product to delete to the deleteProduct function of the service
  onDelete(product){
    const idx = this.products.indexOf(product)
    this._productService.deleteProduct(idx);
  }
}
