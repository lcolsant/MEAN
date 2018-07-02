import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
import { PRODUCTS } from './data/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[];

  productsObservable: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() {
    //PRODUCTS is a starting data set of product objects imported
    this.products = PRODUCTS;
    this.productsObservable.next(this.products);
   }

  //function used to add new products
  updateProducts(product: Product){
    this.products.push(product);
    this.productsObservable.next(this.products);
  }

  //function used to edit a product
  editProducts(products: Array<Product>){
    this.productsObservable.next(products);
  }

  //function used to delete a product
  deleteProduct(index:number){
    this.products.splice(index,1);
    this.productsObservable.next(this.products);
  }
}
