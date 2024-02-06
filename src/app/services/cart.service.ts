import { Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart = signal<IProduct[]>([])
  public cartTotal = signal<Number>(0)
  constructor() { }


  addItem(item: IProduct): void {
    if (this.cart().map((item: IProduct) => item.id).includes(item?.id)) return
    this.cart.update((val: IProduct[]) => {
      return [...val, { ...item, quantity: 1 }]
    })
  }

  removeItem(i: number): void {
    this.cart.set(this.cart().filter((item: IProduct, index: number) => index !== i))
    this.calculateTotal()
  }

  public calculateTotal(): void {
    this.cartTotal.set(this.cart().reduce((a: number, b: IProduct) => a + (b?.price * (b?.quantity || 1)), 0))
  }



}
