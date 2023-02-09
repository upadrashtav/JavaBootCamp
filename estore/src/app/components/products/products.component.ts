import { Component } from '@angular/core';
import { Product } from '../../Product';
import { ProductsService } from 'src/app/services/products.service';
import {of} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products?: Product[];

  constructor(productsService: ProductsService) {
      this.products = of(productsService.fetchProducts());
  }
  
}
