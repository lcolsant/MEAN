import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsObservable: BehaviorSubject<Product[]> = new BehaviorSubject(null);

  constructor() { }

  updateProducts(products: Array<Product>){
    console.log('got to service!');
    console.log('in service',products);
    this.productsObservable.next(products);
  }
}
