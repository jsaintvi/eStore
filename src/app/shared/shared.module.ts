import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import {ProductService} from './services/product/product.service';
import {AppMaterialModule} from '../app-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {commonTestingModules} from '../common/commonTesting';
import { ProductsListComponent } from './components/products-list/products-list.component';
import {LoginComponent} from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {MediaObserverService} from './services/media-observer.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    commonTestingModules,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    commonTestingModules,
    SideNavComponent,
    ProductComponent,
    ProductsListComponent,
    LoginComponent,
    SearchBarComponent
  ],
  declarations: [ProductComponent, SideNavComponent, ProductsListComponent,
    LoginComponent, SignupComponent, CategoriesComponent, SearchBarComponent],
  providers: [ProductService, MediaObserverService]
})
export class SharedModule { }
