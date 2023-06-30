import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  productRepository: ProductRepository;

  constructor(private route: ActivatedRoute) {
    this.productRepository = new ProductRepository();
    this.products = this.productRepository.getProducts();
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      const categoryId = data['categoryId'];
      if (categoryId) {
        this.products =
          this.productRepository.getProductByCategoryId(categoryId);
      } else {
        this.products = this.productRepository.getProducts();
      }
    });
  }
  // selectProduct(product: Product) {
  //   this.selectedProduct = product;
  // }
  // unselectProduct() {
  //   this.selectedProduct = null;
  // }
}
