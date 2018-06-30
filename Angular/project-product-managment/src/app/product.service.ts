import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsObservable: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  constructor() { }

  updateProducts(products: Array<Product>){
    this.productsObservable.next(products);
  }
}
