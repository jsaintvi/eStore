import { Injectable } from '@angular/core';
import {IProductService} from '../../interfaces/product-service';
import {of} from 'rxjs';
import {IProduct} from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceFakeService implements IProductService {

  constructor() { }

  getAllProducts() {
    return of([<IProduct>{
      name: 'shirt',
      description: 'shirt description',
      summary: 'some long details of the product'
    }]);
  }

  getCategories() {
    return of([]);
  }

  getProductById(id: string) {
    return of({});
  }

  getProductsByCategoryId(categoryId) {
    return of([]);
  }
}
