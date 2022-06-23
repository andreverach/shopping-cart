import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent {
  /*
  onPush, al parecer segun hice pruebas de render usando funciones en cada typescript y ejecutando en el
  html de los componentes, para ver como iba la rama y la detección de cambios en los componentes
  en los dumb o hijos que no tienen alguna logica adicional no hay problema
  Eventos que desencadenan la deteccion de cambios: Eventos de los usuarios (eg, realizar un click), timers (setTimeout o setInterval), 
  eventos asincrónicos de la API como request de XHR y HTTP y eventos que se basan en promesas
  
  al aplicar onPush, dejamos al componente para que solo active esta deteccion de cambios con los input u output
  para su funcionamiento, de manera que siguen funcionando bien

  en home aplique onPush y no mostraba nada, es decir las variables que declaraba al inicio no tomaban mas valores
  en las subscripciones que realizaba por lo tanto en un Componente Smart no hay que aplicar esto.

  En Layout tambien aplique el onPush y no mostraba nada, aunque ahi no tengo variables supongo que al ser el
  layout y no permitir que angular lo recorra, no muestra nada

  Es decir aplicar el onPush en componentes dumb viendo que no afecte al funcionamiento

  En este caso tmbien le aplique a navbar que aunque no es smart tampoco dumb, solo se suscribe con un observable
  al carrito de compras para mostrar la cantidad total de elementos en el carrito.
  esto funciona sin ningun problema supongo porque no recibo o le cambio el valor a la variable
  sino que le asigno el observable del carrito y lo ejecuto con async en la vista y ahi le obtengo el total

  */

  category: string = "";//para mostrar en el titulo de categoria
  @Input() categories!: string[];
  //este filtro podria ser una interfaz tmbien y asi poder tipar de mejor manera
  @Output() filterProducts: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  filterProductsByCategory(category:string){
    this.category = ": " + category;
    this.filterProducts.emit({limit: 6, category: category});
  }
}
