import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';
import {AppComponent} from '../../../app.component';
import {commonTestingModules} from '../../sharedModules/shared-components/commonTesting.module';
import {SharedComponentsModule} from '../../sharedModules/shared-components/shared-components.module';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavComponent ],
      imports: [
        SharedComponentsModule,
        commonTestingModules
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 side menu items', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.sidenav-link').length).toEqual(2);
  });
});
