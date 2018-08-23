import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  cartList=[];
  constructor() { }
  setCartList(product)
  {
    this.cartList.push(product);
  }

  getCartList()
  { 
   // console.log(":::::::::inside cart service get method::::::::::::::::::"+this.cartList.length);
    return this.cartList;
  }

}
