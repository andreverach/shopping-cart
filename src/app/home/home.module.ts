import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './containers/home/home.component';

//importamos para usar el navbar y el layout
import { SharedModule } from '../shared/shared.module';
import { ViewComponent } from './containers/view/view.component';

@NgModule({
  declarations: [
    CategoriesListComponent,
    ProductsListComponent,
    HomeComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
