import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products: Product[] =  new Array<Product>();
    for (let i = 0; i < 9; i++) {

      const item = {
        id: '' + i,
        name: 'Product Name' + (i * 10),
        description: 'Some random description ' + i,
        image: 'assets/img/products/clips.jpg',
        rating: 4.0 + i,
        price: 520
      };

      products.push(item);
    }

    return of(products);
  }
}
