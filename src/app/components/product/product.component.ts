import { Component, Input, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../interfaces/product';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input({ required: false }) product: IProduct;


  constructor(private cartService: CartService) {

  }


  onAddItem(item: IProduct) {
    this.cartService.addItem(item)
  }
}
