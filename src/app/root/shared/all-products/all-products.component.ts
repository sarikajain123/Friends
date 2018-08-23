import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private ProductsService:ProductsService) { }
  products=[];
  ngOnInit() {
   this.products=this.ProductsService.getAllProducts();
   console.log("........ this.products..........", this.products);
  }

  // addToCart(productid:number)
  // {
  //    this.cartList = this.CartService.getCartList();
  //   for(var i = 0; i<this.cartList.length; i++)
  //   {
  //     if(this.cartList[i].id == productid)
  //      {
  //        alert("Product is already present in the cart");
  //        return;
  //      } 
  //   }

  //   for(var i = 0; i<this.products.length; i++)
  //   {
  //       if(this.products[i].id == productid)
  //     {
  //        this.CartService.setCartList(this.products[i]);
  //        this.products[i].qty--;
      
  //     }
  //   }
  //  }
}
