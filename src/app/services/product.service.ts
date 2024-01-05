import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

import { Observable, delay, map } from 'rxjs';

@Injectable()
export class ProductService {
  private url = 'https://myshopapp-c720b-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  getProducts(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'products.json').pipe(
      map((data) => {
        const prods: Product[] = [];
        for (const key in data) {
          if (categoryId) {
            if (categoryId == data[key].categoryId) {
              prods.push({ ...data[key], id: key });
            }
          } else {
            prods.push({ ...data[key], id: key });
          }
        }
        return prods;
      }),
      delay(1000)
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http
      .get<Product>(this.url + 'products/' + id + '.json')
      .pipe(delay(1000));
  }

  createProduct(p: Product): Observable<Product> {
    return this.http.post<Product>(this.url + 'products.json', p);
  }
}
