import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@core/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {

  @Input() products!: Product[];
  @Output() pushCart = new EventEmitter<Product>();
  @Output() goView: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }  

  addToCart(product: Product){
    this.pushCart.emit(product);
  }

  showDetail(id: number){
    this.goView.emit(id);
  } 
}
