import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { ManagerModule } from './manager/manager.module';
import { InventoryModule } from './inventory/inventory.module';
import { PosModule } from './pos/pos.module';
import { UserModule } from './user/user.module';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import {ProductService} from './shared/services/product/product.service';
import {LayoutModule} from '@angular/cdk/layout';

import { AuthConnectorModule } from './auth-connector/auth-connector.module';
import {AuthService} from './auth-connector/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ManagerModule,
    InventoryModule,
    PosModule,
    UserModule,
    AuthConnectorModule,
    SharedModule,
  ],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
