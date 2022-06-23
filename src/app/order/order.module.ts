import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ngModule para el data binding
import { FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { ShoppingCartComponent } from './containers/cart/shopping-cart/shopping-cart.component';
import { OrderComponent } from './containers/order/order/order.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    SharedModule,    
  ]
})
export class OrderModule { }
