import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  downloadProducts(product: Product) {
    alert("it worked!");
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(JSON.stringify(product)));
    a.setAttribute('download', '/assets/feedback.json');
    a.click()
    return this.http.put<Product>(
      '/assets/feedback.json',
      product
    ).subscribe();
  }

  getProducts() {
    return this.http.get<Product[]>(
      '/assets/products.json'
    );
  }


}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  favorite: boolean;
}
