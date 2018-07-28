import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './pageNotFound/page-not-found.component';
import {LoginComponent} from './shared/components/login/login.component';
import {SignupComponent} from './shared/components/signup/signup.component';
import {CategoriesComponent} from './shared/components/categories/categories.component';
import {ProductsListComponent} from './shared/components/products-list/products-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'products', redirectTo: '/home', pathMatch: 'full'},
  {path: 'products/:id', component: ProductsListComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
