import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CartComponent } from './root/shared/cart/cart.component';
import { AllProductsComponent } from './root/shared/all-products/all-products.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './root/shared/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    AllProductsComponent,
    ProductDetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
