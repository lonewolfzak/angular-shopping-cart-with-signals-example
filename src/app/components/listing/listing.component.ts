import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [ProductComponent, MatGridListModule, MatButtonModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent implements OnInit {
  constructor(public dialog: MatDialog, public cartService: CartService, public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
  }

  openCart(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-modalbox',
      width: '20vw',
      data: {
        component: CartComponent
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
}
