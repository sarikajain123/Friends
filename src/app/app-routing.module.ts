import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { CartComponent } from './root/shared/cart/cart.component';
import { AllProductsComponent } from './root/shared/all-products/all-products.component';
import { ProductDetailsComponent } from './root/shared/product-details/product-details.component';
const  routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductDetailsComponent },
  { path: 'allProducts', component: AllProductsComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {onSameUrlNavigation: 'reload' }) 
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
