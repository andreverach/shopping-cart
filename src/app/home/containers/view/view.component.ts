import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProduct, Product } from '@core/models/product';
import { ProductService } from '@core/services/products/product.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartService } from '@core/services/cart/cart.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  product$: Observable<Product> | null = null;
  //product!: Product;

  constructor(
    private productService: ProductService,
    private cartService:CartService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {    
    this.getProduct();
  }

  getProduct(){
    //con async en el html ya me desuscribo ya que todo esto esta encapsulado en el observable de producto
    //de todas maneras observable de tipo http y router no es necesario desuscribir, otros casos si
    this.product$ = this.activatedRoute.params
    .pipe(
      //take(1),//nos desuscribimos del activaterouted
      switchMap(params => {
        return this.productService.apiProductById(params.id);
      })
    );
    /* .subscribe(result => {
      this.loadingProduct = false;
      this.product = result;
    }); */

    /* this.activatedRoute.params
    .subscribe((r: Params) => {
      this.productService.apiProductById(r.id)
      .subscribe(product => {
        console.log('Product: ', product);
      })
      //console.log('usando params: ', r);
    }); */

    /* this.activatedRoute.paramMap
    .subscribe((r: Params) => {
      console.log('usando paramMap: ', r);
    });

    let id = this.activatedRoute.snapshot.params['id'];
    console.log('usando snapshot: ', id);

    let id2 = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('usando snapshot: ', id2);   */  
  }

  addToCart(product: Product){
    //asi le asigno un valor al set
    const cartProduct: CartProduct = product;
    cartProduct.quantity = 1;
    this.cartService.pushToCart = cartProduct;
  }
}
