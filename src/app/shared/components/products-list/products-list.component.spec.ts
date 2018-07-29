import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import {commonTestingProviders, commonTestingModules, MediaObserverFakeService} from '../../../common/commonTesting';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {MediaObserverService} from '../../services/media-observer.service';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {NO_ERRORS_SCHEMA} from '@angular/core';

xdescribe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat([
        {provide: MediaObserverService, useClass: MediaObserverFakeService},
      ]),
      declarations: [ ProductsListComponent, SearchBarComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 1 products', () => {
    expect(component.products.length).toEqual(1);
  });
  it('should the first item name to equal shirt ', () => {
    expect(component.products[1].name).toEqual('shirt');
  });
});
