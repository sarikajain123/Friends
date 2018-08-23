import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products=[{id:1,name:"Aashirvaad Atta",url:"assets/images/products/atta/aashirvaad.jfif",category:"atta", price:"100"},
  {id:2,name:"Aashirvaad Atta",url:"assets/images/products/atta/aashirvaad2.jfif",category:"atta", price:"200"},
  {id:3,name:"patanjali Atta",url:"assets/images/products/atta/patanjali.jfif",category:"atta", price:"10"},
  {id:4,name:"meggi",url:"assets/images/products/meggi/meggi.jfif",category:"meggi", price:"50"},
  {id:5,name:"Fortune oil",url:"assets/images/products/oil/fortune.jfif",category:"cooking oil", price:"600"},
  {id:6,name:"Saffola oil",url:"assets/images/products/oil/saffola.jfif",category:"cooking oil", price:"50"},
  {id:7,name:"Daawat rice",url:"assets/images/products/rice/daawat.jfif",category:"rice", price:"20"},
  {id:8,name:"Patanjali Rice",url:"assets/images/products/rice/patanjali.jfif",category:"rice", price:"70"},
  {id:9,name:"Dove Shampoo ",url:"assets/images/products/shampoo/dove.jfif",category:"shampoo", price:"80"},
  {id:10,name:" Head & Shoulder shampoo",url:"assets/images/products/shampoo/head&shoulder.jfif",category:"shampoo", price:"10"},
  {id:11,name:"Loreal shampoo",url:"assets/images/products/shampoo/loreal.jfif",category:"shampoo", price:"111"},
  {id:12,name:"Lux soap",url:"assets/images/products/soap/lux_soap.jfif",category:"soap", price:"520"},
  {id:13,name:" Medimix soap",url:"assets/images/products/soap/medimix.jfif",category:"soap", price:"230"},
  {id:14,name:"Savlon soap",url:"assets/images/products/soap/savlon.jfif",category:"soap", price:"32"}
 ]
  constructor() { }

  getAllProducts(){
    return this.products;
  }
}
