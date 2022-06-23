import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from '@core/models/product';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  //onPush, aun implementando el onPush aqui, el observable del carrito sifue perfecto
  cart$!: Observable<CartProduct[]>;  
  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cart$ = this.cartService.cart;
  }

  goToCart(){
    const total = this.cartService.getCartTotal();
    if(total > 0)
      this.router.navigate(['/shopping-cart']);
  }
}
