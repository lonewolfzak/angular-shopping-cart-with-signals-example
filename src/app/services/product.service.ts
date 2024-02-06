
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
    providedIn: 'root'
})


export class ProductService {
    public products = signal<IProduct[]>([])

    constructor(private http: HttpClient) { }

    public getProducts() {
        return this.http.get('http://localhost:4200/assets/data/products.json').pipe(
            map((data: any) => {
                this.products.set(data.products)
            })
        ).subscribe()
    }


}