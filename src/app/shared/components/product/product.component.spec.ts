import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// modules

import {MatCardModule} from '@angular/material';

// components
import { ProductComponent } from './product.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';



describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have product price', () => {
    expect(component.product.price).toEqual(520);
  });
});
