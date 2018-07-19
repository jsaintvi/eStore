import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IProduct} from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<IProduct[]> {
    const products: Array<IProduct> =  new Array<IProduct>();
    for (let i = 0; i < 9; i++) {
      const item: IProduct = {
        sku: 'some sku',
        title: 'Product Name ' + (i * 10),
        description: 'Some description',
        active: true,
        summary: this.generateSummary(i),
        category: 'Movies',
        price: 10,
        images: [{
          caption: 'Jodex picture',
          fileName: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
        }]
      };
      products.push(item);
    }

    return of(products);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.getProducts()[0];
  }

  private generateSummary(productId: number): string {
    const summaryId: number = Math.floor (Math.random() * productId * 100 );
    return 'Some long summary ' + summaryId.toString() + ' by Jodex';
  }
}
