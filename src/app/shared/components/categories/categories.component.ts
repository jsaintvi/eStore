import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories = [];
  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }


  onSelect(categoryId) {
    this.router.navigate(['products', categoryId])
  }
}
