import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { User } from './user/user';
import { FormsModule } from '@angular/forms';
import { Orders } from './orders/orders';
import { Products } from './products/products';
import { MovieList } from './movie-list/movie-list';
import { MovieTicket } from './movie-ticket/movie-ticket';
import { ProductList } from './product-list/product-list';
import { ProductBuy } from './product-buy/product-buy';

@NgModule({
  declarations: [
    App,
    User,
    Orders,
    Products,
    MovieList,
    MovieTicket,
    ProductList,
    ProductBuy
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [ProductList]
})
export class AppModule { }
