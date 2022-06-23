import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  api_url: string= environment.urlApi;
  constructor(
    private httpClient: HttpClient
  ) { }

  apiAllCategories(){
    return this.httpClient.get(`${this.api_url}/categories`);
  }
}
