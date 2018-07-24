import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {IProduct} from '../../interfaces/product';
import {Observable} from 'rxjs';
import {AuthService} from '../../../auth-connector/services/auth.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = Array<IProduct>();
  constructor(private productService: ProductService, private afAuth: AuthService) { }

  ngOnInit() {
    this.getProducts().subscribe((productList) => {
      this.products = productList;
    });
  }

  getProducts(): Observable<IProduct[]> {
    return this.productService.getProducts();
  }

}
