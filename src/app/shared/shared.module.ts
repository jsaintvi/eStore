import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import {ProductService} from './services/product/product.service';
import {AppMaterialModule} from '../app-material.module';
import {AuthConnectorModule} from '../auth-connector/auth-connector.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {CommonTestingModules} from './common-testing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from '../auth-connector/services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    CommonTestingModules,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    CommonTestingModules,
    SideNavComponent,
    ProductComponent,
    ProductsListComponent,
    LoginComponent

  ],
  declarations: [ProductComponent, SideNavComponent, ProductsListComponent, LoginComponent],
  providers: [ProductService]
})
export class SharedModule { }
