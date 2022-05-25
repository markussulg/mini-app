import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  shippingCosts = this.cartService.getShippingPrices();
  constructor(private cartService: CartService) {}

  decideColor(price: number): string {
    if (price < 4) {
      return "green";
    } else if (price < 12) {
      return "#CCCC00";
    } else {
      return "red";
    }
  }
}
