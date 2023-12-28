import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  productRepository: ProductRepository;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.productRepository = new ProductRepository();
    // this.products = this.productRepository.getProducts();
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      const categoryId = data['categoryId'];
      if (categoryId) {
        this.products =
          this.productRepository.getProductByCategoryId(categoryId);
      } else {
        // this.products = this.productRepository.getProducts();
        this.http
          .get<Product[]>(
            'https://myshopapp-c720b-default-rtdb.firebaseio.com/products.json'
          )
          .subscribe((data) => {
            for (const key in data) {
              this.products.push({ ...data[key], id: key });
            }
          });
      }
    });
  }
}
