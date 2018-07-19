import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product/product.service';
import {IProduct} from '../../interfaces/product';

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
  product: IProduct;

  /**
   *  Items of product
   */
  items = 1;

  productForm: FormGroup;
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProductById(10).subscribe((product) => {
      this.product = product;
      this.id = '50';
    });
  }


}
