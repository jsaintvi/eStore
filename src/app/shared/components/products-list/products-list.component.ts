import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {IProduct} from '../../interfaces/product';
import {MediaObserverService} from '../../services/media-observer.service';
import {MediaEnum} from '../../enums/media.enum';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = Array<IProduct>();
  categoryId = '';

  cols: number;

  constructor(private productService: ProductService, private mediaQuery: MediaObserverService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      console.log(params);
      if ( params['id']) {
        this.categoryId = params['id'];
      }
    });
    this.cols = 1;
    this.listenToViewportChanges();
    this.getProducts();
  }

  displayProductSearchResult(data) {
    this.products = data;
  }

  private listenToViewportChanges() {
    this.mediaQuery.getMedia().subscribe((media) => {
      if (media === MediaEnum.XSMALL) {
        this.cols = 1;
      } else if ( media === MediaEnum.SMALL) {
        this.cols = 2;
      } else  {
        this.cols = 3;
      }
    });
  }
  private getProducts() {
    if (this.categoryId.length) {
      this.productService.getProductsByCategoryId(this.categoryId).subscribe((products) => {
        this.products = products as Array<IProduct>;
      });
    } else {
      this.productService.getAllProducts().subscribe(products => {
        this.products = products as Array<IProduct>;
      });
    }

  }

}
