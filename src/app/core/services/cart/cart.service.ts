import { Injectable } from '@angular/core';
import { CartProduct } from '@core/models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: CartProduct[] = [];
  private cartPrivate$: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([]);  
  constructor() { }

  get cart(){//si se llama igual que el set marca error
    return this.cartPrivate$.asObservable();
  }

  //es como una variable a la que le asigno con un = el valor del parentesis
  set pushToCart(product: CartProduct){
    if(!this.cartProducts.find(p => p.id === product.id)){
      this.cartProducts.push(product);
      this.cartPrivate$.next(this.cartProducts);
    }    
  }

  getCartTotal(): number{
    return this.cartProducts.length;
  }

  getAmountTotal(): number{
    //en este caso por ser un arreglo de objetos el reduce le pasamos un ,0 al final
    const amount = this.cartProducts.reduce((acc, product) => { 
      //al ser quantity opcional tenemos que verificar si exsite, en realidad siempre va existir pero 
      //en este caso le puse opcional como prueba de dato     
      if(product.quantity)
        return acc + (product.price * product.quantity);
      else
        return acc + (product.price * 1);
    }, 0);
    return amount;
  }

 /*  setCart(products: CartProduct[]){
    this.cartProducts = products;
    this.cartPrivate$.next(this.cartProducts);
  } */

  setProductCart(productNewQuantity: CartProduct){
    //encontramos el indice del producto
    const index = this.cartProducts.findIndex(product => product.id === productNewQuantity.id);
    //modificamos a ese producto con su nueva cantidad, incluso hasta podriamos igualarlo directamente sin entrar al atributo
    this.cartProducts[index].quantity = productNewQuantity.quantity;
    this.cartPrivate$.next(this.cartProducts);
  }

  deleteProductCart(productDelete: CartProduct)/* : number */{
    //devuelve a todos menos al que encontró
    const newCart = this.cartProducts.filter(product => product.id !== productDelete.id);
    //actualizo la lista, se podria hacer con mutabilidad para evitar una variable extra como newCart
    this.cartProducts = newCart;
    this.cartPrivate$.next(this.cartProducts);
    //return this.cartProducts.length;
  }

  deleteAllCart(): void{
    this.cartProducts = [];
    this.cartPrivate$.next(this.cartProducts);
  }

  /**
   * lo mejor seria que en cada manipulacion del carrito
   * no devuelva un vacio sino que siempre devuelva un arreglo con los datos de
   * data: arreglo del carrito
   * total: cantidad de items osea el length
   * amount: la suma de los precios con sus cantidades
   * entonces me ahorraria tener mas funciones o metodos
   */
  
}
