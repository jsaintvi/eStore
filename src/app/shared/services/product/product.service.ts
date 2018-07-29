import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IImage, IProduct} from '../../interfaces/product';
import {DatabaseWrapper} from '../../../auth-connector/database-wrapper';
import {IProductService} from '../../interfaces/product-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService  implements IProductService {

  constructor(private dal: DatabaseWrapper) { }

  getProductById(id: string) {
     return this.dal.getProductById(id);
  }
  getAllProducts() {
    return this.dal.getAllProducts();
  }

  getProductsByCategoryId(categoryId) {
    return this.dal.getProductByCategoryId(categoryId);
  }

  getCategories() {
    return this.dal.getCategories();
  }
}
