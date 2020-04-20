import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {
subject = new Subject();

  constructor() { }

  sendMsg(Product){
   // console.log(Product);
   this.subject.next(Product);
  }

  getMsg(){
    return this.subject.asObservable();
  }
}
