import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {    

   /* mantiene el orden de las peticiones
    zip(
      this.productService.apiAllProducts(20),
      this.categoryService.apiAllCategories()
    )
    .subscribe(response => {
      console.log('1 ZIP Products: ', response[0]);
      console.log('2 ZIP Categories: ', response[1]);
    }); */
  }

}
