import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './pageNotFound/page-not-found.component';
import {LoginComponent} from './shared/components/login/login.component';
import {SignupComponent} from './shared/components/signup/signup.component';
import {CategoriesComponent} from './shared/components/categories/categories.component';
import {ProductsListComponent} from './shared/components/products-list/products-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsListComponent},
  {path: 'products/:id', component: ProductsListComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
