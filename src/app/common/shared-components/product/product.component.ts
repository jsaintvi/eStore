import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ProductService} from '../../sharedServices/product.service';
import {Product} from '../../classes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  /**
   * Id of product
   */
  id: string;

  /**
   * Product data
   */
  product: Product;

  productForm: FormGroup;
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
   this.productService.getProducts().subscribe((products) => {
      this.product = products[0];
      this.id = '50';
    });
  }

}
