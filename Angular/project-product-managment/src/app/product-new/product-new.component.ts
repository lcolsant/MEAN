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
  newProduct = new Product();
  products:Array<Product>;

  constructor(
    private _productService:ProductService,
    private router: Router,
  ) {
    this._productService.productsObservable.subscribe( (products)=>{
      this.products = products;
      console.log('from service:', this.products)
    })
  }

  ngOnInit() {
    this.newProduct = new Product();

  }

  create(newProduct:Product, $event:Event){
    event.preventDefault();
    if (this.newProduct.imgUrl === null ||
        this.newProduct.imgUrl === 'null' ||
        this.newProduct.imgUrl.length < 1) {
   }
    console.log(`NewProduct: ${this.newProduct.title}`);
    this.products.push(this.newProduct);  //Erroring out here!!!
    console.log(`products array: ${this.products}`);
    this._productService.updateProducts(this.products);
    this.newProduct = new Product();
    // this.router.navigate(['/products'])
  }

}
