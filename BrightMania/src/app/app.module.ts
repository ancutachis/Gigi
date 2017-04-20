import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SwiperModule } from '../../node_modules/angular2-useful-swiper';

import { AppComponent } from './app.component';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { ProductsService } from './services/products.service';
import { SideContentComponent } from './side-content/side-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    SideContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SwiperModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/productsList', pathMatch: 'full' },
      { path: 'productsList', component: ProductsListComponent },
      { path: 'productDetails/:id', component: ProductDetailsComponent }
    ])
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})

export class AppModule { }