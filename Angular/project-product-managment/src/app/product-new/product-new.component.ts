import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct:Product = new Product();
  products:Array<Product> = [];

  constructor(
    private _productService:ProductService,
    private router: Router,
  ) {}

  //subscribe upon init to bring in products array from products service
  ngOnInit() {
    this.newProduct = new Product();
    this._productService.productsObservable.subscribe( (products)=>{
      this.products = products;
    })

  }

  //create new product.
  create(){

    //Handle null image if no path provided
    if ( this.newProduct.imgUrl === 'null' ||
        this.newProduct.imgUrl === null ||
        this.newProduct.imgUrl.length < 1 ) {
        this.newProduct.imgUrl = null;
    }


    console.log(`NewProduct: ${this.newProduct.title}`);
    this.products.push(this.newProduct);
    console.log(`products array: ${this.products}`);
    this._productService.updateProducts(this.products);
    this.newProduct = new Product();
    this.router.navigate(['/products']);
  }

}
