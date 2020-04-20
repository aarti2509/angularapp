import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems =[
   /* {id:1,productId:1,productName:'RealMe1',Qty:4,price:100},
    {id:2,productId:2,productName:'RealMe2',Qty:3,price:100},
    {id:3,productId:3,productName:'RealMe3',Qty:1,price:100},*/
    
   
  ];

  cartTotal = 0;
  constructor(private msg:MessengerService) { }

  ngOnInit(){

   this.msg.getMsg().subscribe((Product :Product) => {
    // console.log(Product);
    this. addProductToCart(Product);

    
   })
  
  }

  addProductToCart(Product :Product){

    let productExits=false;

    for(let i in this.cartItems)
    {
      if(this.cartItems[i].productId === Product.id){
        this.cartItems[i].Qty++;
        productExits= true;
         break;

      }
    }

      if(!productExits)
      {
        this.cartItems.push({
          productId: Product.id,
          productName: Product.name,
          Qty:1,
          price:Product.price
        }) 
      }

      this.cartTotal = 0;
      this.cartItems.forEach(item =>{
       this.cartTotal += (item.Qty *item.price)
     });
    
  
  
  
  
  }

   /* if(this.cartItems.length===0)
    {
      this.cartItems.push({
        productId: Product.id,
        productName: Product.name,
        Qty:1,
        price:Product.price
      })
    }
    else
    {
      for(let i in this.cartItems)
    {
      if(this.cartItems[i].productId ===Product.id){
        this.cartItems[i].Qty++;
        break;

      }
      else
      {
        this.cartItems.push({
          productId:Product.id,
          productName: Product.name,
          Qty:1,
          price:Product.price

        })
      }
    }

 }*/

    
   
}
