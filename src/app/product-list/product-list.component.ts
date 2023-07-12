import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productRepository: ProductRepository;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productRepository = new ProductRepository();
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      const categoryId = data['categoryId'];
      if (categoryId) {
        this.products =
          this.productRepository.getProductByCategoryId(categoryId);
      } else {
        //Firebase Connection
        this.productService.getProducts().subscribe((data) => {
          for (const key in data) {
            this.products.push({ ...data[key], id: key });
          }
        });
      }
    });
  }
}
