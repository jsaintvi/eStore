import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {IProduct} from '../../interfaces/product';
import {MediaObserverService} from '../../services/media-observer.service';
import {MediaEnum} from '../../enums/media.enum';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[] = Array<IProduct>();
  cols: number;

  constructor(private productService: ProductService, private mediaQuery: MediaObserverService) {
  }

  ngOnInit() {
    this.cols = 1;
    this.listenToViewportChanges();
    this.getProducts();
  }

  private listenToViewportChanges() {
    this.mediaQuery.getMedia().subscribe((media) => {
      debugger;
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
    this.productService.getProducts().subscribe((products) => {
      this.products = products as Array<IProduct>;
    });
  }

}
