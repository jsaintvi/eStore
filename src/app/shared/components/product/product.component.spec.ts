import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// modules

import {MatCardModule} from '@angular/material';

// components
import { ProductComponent } from './product.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {commonTestingProviders, commonTestingModules} from '../../../common/commonTesting';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders,
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

});
