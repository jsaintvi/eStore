import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {ProductService} from '../../services/product/product.service';
import {IProduct} from '../../interfaces/product';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {


  /**
   * RxJs Subject
   */
  inputSubject = new Subject<string>();

  /**
   * Searched products
   */
  products = Array<IProduct>();

  /**
   * Name Query for searching
   */
  @ViewChild('query') queryString;
  constructor(private productService: ProductService) { }

  @Output() outProductsSearch: EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();

  ngOnInit() {

    this.inputSubject.pipe(debounceTime(500)).subscribe(query => {
      this.productService.getAllProducts().subscribe((data: any) => {
        if (data.length) {
          let productsData  = data as Array<IProduct> ;

         productsData = productsData.filter((product) => {
            return product.name.includes(query) || product.description.includes(query) || product.summary.includes(query);
          });

          this.products = productsData;
        } else {
          this.products = [];
        }

        this.outProductsSearch.emit(this.products);
      });
    });
  }

  /**
   * On input name in text input
   * @param query
   */
  change(query) {
    if (query.length > 2) {
      this.inputSubject.next(query);
    } else {
      this.products = [];
    }
  }

}
