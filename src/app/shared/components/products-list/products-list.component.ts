import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {IProduct} from '../../interfaces/product';
import {BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = Array<IProduct>();
  cols = 3;
  constructor(private productService: ProductService, private breakPointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.breakPointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.cols = 2;
      } else {
        this.cols = 3;
      }
    });

    this.getProducts();
  }

  private getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products as Array<IProduct>;
    });
  }
  
}
