import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedComponentsModule} from '../../sharedModules/shared-components/shared-components.module';
import { ProductComponent } from './product.component';
import {MatCardModule} from '@angular/material';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, MatCardModule],
      declarations: [ ProductComponent ]
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
