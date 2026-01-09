import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  prodlist:Product[] = [
    { prodid: 101, prodname: 'Laptop' },
    { prodid: 102, prodname: 'Mouse' },
    { prodid: 103, prodname: 'Keyboard' },
    { prodid: 104, prodname: 'Monitor' },
    { prodid: 105, prodname: 'Printer' },
  ];

  boughtproducts:Product[] = [];

  AddToCart(prod:Product) {
    this.boughtproducts.push(prod);
  }
  RemoveFromCart(prod:Product) {
    this.boughtproducts.pop();
  }
}
