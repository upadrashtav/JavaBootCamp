import { Injectable } from '@angular/core';
import { Product } from '../Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  endpointurl:string="http://localhost:3000/products";
  
  constructor(private http: HttpClient) { }
  
  saveProduct(): void{

  }

  updateProduct(): void{
    
  }

  fetchProducts(): Observable<Product[]>
  {
    return (this.http.get<Product[]>(this.endpointurl));
  }
}
