import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  products:Array<Product> = [
    {id: 10, imgUrl:null,title:'bike',price:100},
    {id: 11, imgUrl:null,title:'skateboard',price:75},
    {id: 12, imgUrl:null,title:'skates',price:35}
  ];
  product:Product;

  constructor(
    private _productService:ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {

    this._productService.productsObservable.subscribe( (products)=>{
      // this.products = products;
      for(let i=0; i<products.length; i++){
        this.products.push(products[i]);
      }


    });

    //get correct product from param.id. Loop through products array for a matching id
    //if match set local product equal to found product
    this._route.params.subscribe( param => {
      console.log('param id:', param.id);
      for (let idx=0; idx < this.products.length; idx++) {

        if (this.products[idx].id == param.id) {
          this.product = this.products[idx];
          console.log('found matching product:', this.product.title)
          break;
        }

      }
    });

  }

  update($event:Event){
    console.log('got to update');
    event.preventDefault();
    // this.products.push(this.product);
    console.log('updated product:', this.product);
    console.log('updated products array:', this.products);
    this._productService.updateProducts(this.products);  //update not working here!!


    // this._router.navigate(['/products']);

    }
  }


