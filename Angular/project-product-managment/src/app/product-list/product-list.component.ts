import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product'
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Array<Product> = [
  {id: 10, imgUrl:null,title:'bike',price:100},
  {id: 11, imgUrl:null,title:'skateboard',price:75},
  {id: 12, imgUrl:null,title:'skates',price:35}
];

  constructor(
    private _productService:ProductService,
    private router: Router,

  ) { }

  ngOnInit() {
      this._productService.productsObservable.subscribe( (products)=>{
        for(let i=0; i<products.length; i++){
          this.products.push(products[i]);
        }
    })
  }

  onDelete(product){
    const idx = this.products.indexOf(product)
    this.products.splice(idx,1);
    this._productService.updateProducts(this.products);
  }
}
