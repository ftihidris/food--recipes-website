import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from "../not-found/not-found.component";
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    NgFor,
    RouterModule,
    CommonModule,
    NotFoundComponent,
    DropdownModule,
    FormsModule
],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  quantityOptions: { label: string, value: number }[] = [];

  constructor(private cartService: CartService) { 
    this.setCart();
    this.initializeQuantityOptions();
  }

  ngOnInit(): void {
  }

  initializeQuantityOptions() {
    this.quantityOptions = Array.from({ length: 10 }, (_, i) => ({
      label: (i + 1).toString(),
      value: i + 1
    }));
  }


  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}
