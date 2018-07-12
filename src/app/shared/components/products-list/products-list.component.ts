import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Product} from '../../classes/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts().subscribe((productList) => {
      this.products = productList
    });
  }

  getProducts(): Observable<Product[]> {
    return this.productService.getProducts();
  }

}
