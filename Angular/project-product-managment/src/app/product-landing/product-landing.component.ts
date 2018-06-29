import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrls: ['./product-landing.component.css']
})
export class ProductLandingComponent implements OnInit {

  constructor(private _productService:ProductService) { }

  ngOnInit() {
  }

}
