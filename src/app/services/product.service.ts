import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private url = 'https://myshopapp-c720b-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'products.json');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + 'products/' + id + '.json');
  }

  createProduct(p: Product): Observable<Product> {
    return this.http.post<Product>(this.url + 'products.json', p);

  }
}
