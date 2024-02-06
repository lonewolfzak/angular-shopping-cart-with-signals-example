import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { CartService } from '../../services/cart.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductComponent, MatGridListModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.calculateTotal()
  }

  onRemoveItem(index: number) {
    this.cartService.removeItem(index)
  }


  onQuantityChange(e: any, product: any) {
    product.quantity = e.target.value
    this.cartService.calculateTotal()
  }

}
