import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  shippingCosts = this.cartService.getShippingPrices();
  shipping: number = 0; 

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.shipping = 0;
  }

  getTotal(): number {
    let sum_total = 0
    this.items.forEach(item => sum_total += item.price)
    return sum_total + this.shipping;
  }
  

  setShipping(price: number) {
    this.shipping = price;
  }

  isCartEmpty(): boolean {
    return this.items.length == 0;
  }

  removeFromCart(id:number) {
    this.cartService.removeFromCart(id);
    window.alert('Your product has been removed!');
  }  
}
