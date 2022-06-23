import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '@core/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api_url: string = environment.urlApi;
  constructor(
    private httpClient: HttpClient
  ) { }

    apiAllProducts(limit: number, category: string){
      let query = "?limit=" + limit;
      if(category !== ''){
        query = "/category/" + category + query;
      }
      return this.httpClient.get<Product[]>(`${this.api_url}${query}`);
    }

    apiProductById(id: number){
      return this.httpClient.get<Product>(`${this.api_url}/${id}`);
    }

    apiProductsByCategory(category: string){
      return this.httpClient.get<Product[]>(`${this.api_url}/category/${category}`);
    }
}
