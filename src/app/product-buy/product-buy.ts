import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-buy',
  standalone: false,
  templateUrl: './product-buy.html',
  styleUrl: './product-buy.css',
})
export class ProductBuy {
  @Input() p!:Product;
  @Output() purchased=new EventEmitter<Product>();
  @Output() deleted=new EventEmitter<Product>();

  AddToCart() {
    this.purchased.emit(this.p);
  }
  RemoveFromCart() {
    this.deleted.emit(this.p);
  }
}
