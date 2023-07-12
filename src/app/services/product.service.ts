import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

//Local Service

@Injectable()
export class ProductService {
  private url = 'https://ng-shopapp-47866-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'products.json');
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url + 'products.json', product);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.url + 'products/' + id + '.json');
  }
}
