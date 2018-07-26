import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product/product.service';
import {IProduct} from '../../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  /**
   * Product data
   */
  @Input() product: IProduct;

  /**
   *  Items of product
   */
  items = 1;

  productForm: FormGroup;
  constructor(private productService: ProductService) {
  }



}
