import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import {Product} from '../../classes/product';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should return list of products with count of 9', inject ([ProductService], (service: ProductService) => {
    let  products: Product[] = new Array<Product>();
    service.getProducts().subscribe((product) => {
      products = product;
    });

    expect(products.length).toEqual(9);
  }));

  it ('should have first product with description Some random description 0', inject([ProductService], (service) => {
    let product: Product;
    service.getProducts().subscribe((products) => {
      product = products[0];
    });

    expect(product.description).toContain('Some random description 0');
  }));
});
