import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductRepository } from 'src/app/models/product.repository';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  productRepository: ProductRepository;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      const id = data['productId'];
      //this.product = this.productRepository.getProductById(id);
      this.productService.getProductById(id).subscribe((data) => {
        this.product = { ...data, id: id };
      });
    });
  }
}
