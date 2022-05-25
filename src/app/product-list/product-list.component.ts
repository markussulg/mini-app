import { Component } from '@angular/core';
import { ProductsService, Product } from '../products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = this.productsService.getProducts();
  constructor(
    private productsService: ProductsService,
  ) {}

 toggleFavorite (id: number) {
   let item = "favorite"+id;
   if (localStorage.getItem(item) != null) {
     localStorage.removeItem(item);
   } else {
    localStorage.setItem(item, "true");
  }
}

isFavorite(id: number): boolean {
  return localStorage.getItem("favorite"+id) != null;
} 
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
