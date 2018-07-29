import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import {Product} from '../../classes/product';
import {ProductServiceFakeService} from './product-service-fake.service';
import {IProduct} from '../../interfaces/product';
import {commonTestingProviders, commonTestingModules} from '../../../common/commonTesting';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders,
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should return list of products with count of 1', inject ([ProductService], (service: ProductService) => {
    let  products: IProduct[] = new Array<IProduct>();
    service.getAllProducts().subscribe((product) => {
      products = product;
    });

    expect(products.length).toEqual(1);
  }));

  it ('should have first product with description Some random description 0', inject([ProductService], (service) => {
    let product: Product;
    service.getAllProducts().subscribe((products) => {
      product = products[0];
    });

    expect(product.description).toContain('shirt description');
  }));
});
