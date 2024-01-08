import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CartItems } from '../../../shared/models/CartItems';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
 // styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart=cart;
    })
  }
  ngOnInit(): void {
      
  }

  removeFromCart(cartItem:CartItems){
    this.cartService.removeFromCart(cartItem.book.id);
  }

  changeQuantity(cartItem:CartItems, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.book.id, quantity);
  }
}
