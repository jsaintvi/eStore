import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IImage, IProduct} from '../../interfaces/product';
import {DatabaseWrapper} from '../../../auth-connector/database-wrapper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dal: DatabaseWrapper) { }

  getProductById(id: number) {
     return this.dal.getProductById(id);
  }
  getProducts() {
    return this.dal.getProducts();
  }

  getCategories() {
    return this.dal.getCategories();
  }

  getProductsBycategoryId(id) {
    return this.dal.getProductsByCategoryId(id);
  }

}
