import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 // mmodules

import {SharedModule} from '../shared/shared.module';

// components

import { HomeComponent } from './home.component';
// import {ProductComponent} from '../shared/components/product/product.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it ('should have the text landing page', () => {
  //   expect(fixture.nativeElement.querySelector('p').innerHTML).toContain('landing page')
  // });
});
