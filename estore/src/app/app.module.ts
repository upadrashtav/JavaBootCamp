import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProductListComponent,
    ProductViewComponent,
    UsersComponent,
    OrdersComponent,
    PaymentComponent,
    ShipmentComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
