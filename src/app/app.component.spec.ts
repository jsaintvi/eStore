import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {SideNavComponent} from './common/shared-components/side-nav/side-nav.component';
import {SharedComponentsModule} from './common/sharedModules/shared-components/shared-components.module';
import {commonTestingModules} from './common/sharedModules/shared-components/commonTesting.module';
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './common/shared-components/product/product.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedComponentsModule,
        commonTestingModules
      ],
      declarations: [
        AppComponent,
        SideNavComponent,
        HomeComponent,
        ProductComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to eStore!');
  // }));
});
