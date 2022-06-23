import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from '@core/models/product';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$!: Observable<CartProduct[]>;
  totalAmount: number = 0;
  constructor(
    private cartService: CartService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.checkCart();
  }

  checkCart(): void{
    let total = this.cartService.getCartTotal();
    if(total === 0){
      this.router.navigate(['/home']);
    }else{
      this.getCart();
      this.getCartAmount();
    }
  }

  getCart(): void{
    this.cart$ = this.cartService.cart;
  }

  addItemCart(product: CartProduct): void{
    //si la cantidad es diferente de undefined y mayor a 0
    if(product.quantity && product.quantity > 0){//entramos al servicio
      this.cartService.setProductCart(product);
      this.getCartAmount();
    }else{//si el usuario baja a menos de 1 entonces lo reseteamos a 1
      product.quantity = 1;
    }
  }

  removeProductCart(product: CartProduct): void{    
    this.cartService.deleteProductCart(product);
    this.getCartAmount();
    if(this.cartService.getCartTotal() === 0){
      this.router.navigate(['/home']);
    }
  }

  removeAll(){
    this.cartService.deleteAllCart();
    this.totalAmount = 0;
    this.router.navigate(['/home']);
  }

  getCartAmount(){
    this.totalAmount = this.cartService.getAmountTotal();    
  }

}
