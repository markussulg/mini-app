import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
  addToCart(product: Product) {
    this.items.push(product);
  }
  removeFromCart(id: number) {
    this.items.forEach((element, index) => {
      if(element.id == id) {
        this.items.splice(index, 1);
        return;
      }
    });
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
