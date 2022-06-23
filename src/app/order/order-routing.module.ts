import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { ShoppingCartComponent } from './containers/cart/shopping-cart/shopping-cart.component';
import { OrderComponent } from './containers/order/order/order.component';

const routes: Routes = [
  {    
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ShoppingCartComponent
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
