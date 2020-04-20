import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingCartComponent} from 'src/app/components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: 'shopping-cart', component:ShoppingCartComponent },
  { path: '', redirectTo: '/shoping-cart', pathMatch: 'full' }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
