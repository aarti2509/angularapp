import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    new Product(1,'Redami7','This product is really cool.',150,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxI0iDCkfo1g8w44Om2bsh52NDK6Ts7ewE6-fmCvz_a7dcgclN&usqp=CAU'),
    new Product(2,'Realme 6 Pro	','This product is really cool.this product is Redami7 Mobile',300,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNUVklIT-LsK23hBcowfX04gHnGunBObk2QZ2wX28nV7AriqNm&usqp=CAU'),
    new Product(3,'Samsung Galaxy M31','This product is really cool.this product is Redami8 Mobile.',500,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJH--ofAEdg-qu9Kh1rtcu-EKHIw0-I7uB7lbOBsNQML4VPl9z&usqp=CAU'),
    new Product(4,'Xiaomi Redmi Note 8 Pro','This product is really cool.This mobile battary is long time support.this product is Redami1 Mobile.',300 ,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ64r_6ftAquKEuS1xZWIZu0CJwt2O8rF9sZ0DPPJ-BWPtf5rfT&usqp=CAU'),
    new Product(5,'Oppo Reno3 Pro','This product is really cool.this product is Redami2 Mobile.',250,'https://static.toiimg.com/thumb/msid-72510524,width-240,resizemode-4,imgv-10/Samsung-Galaxy-M31.jpg'),
    new Product(6,'Oppo Reno3 Pro','This product is really cool.this product is Redami3 Mobile.',50,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1PhabwuHwbU7iZvWb2PcS78QX91fELqgRa6Cd0UgWFP2yMiPw&usqp=CAU'),
  

  ]
  constructor() { }

  getProduct():Product[]
  {
     return this.products;
  }
}
