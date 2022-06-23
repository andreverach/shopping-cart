import { Component, OnInit } from '@angular/core';
import { Product, CartProduct } from '@core/models/product';
import { CategoryService } from '@core/services/categories/category.service';
import { ProductService } from '@core/services/products/product.service';
import { CartService } from '@core/services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: any = [];
  products: Product[] = [];
  //se puede pasar un observable al componente hijo o dumb
  //products$!: Observable<Product[]>;
  //cart$!: Observable<Product[]>;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const filtro = {
      limit: 6,
      category: ''
    };
    this.getCategories();
    this.getProducts(filtro);
  }

  getCategories(){
    //al ser http se desuscribe automaticamente
    this.categoryService.apiAllCategories()
    .subscribe(result => {
      this.categories = result;
    });
  }

  getProducts(filtro: any){
    this.productService.apiAllProducts(filtro.limit, filtro.category)
    .subscribe(products =>{
      this.products = products;
    });
  }

  addToCart(product: Product){
    //asi le asigno un valor al set
    const cartProduct: CartProduct = product;
    cartProduct.quantity = 1;//por defecto ira el valor de 1, y en el carrito se podra modificar
    this.cartService.pushToCart = cartProduct;
  }

  showDetail(id: number){
    this.router.navigate(['view', id]);
  }

}
