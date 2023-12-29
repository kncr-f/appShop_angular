import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}
  saveProduct(
    name: any,
    price: any,
    imageUrl: any,
    description: any,
    isActive: any,
    categoryId: any
  ) {
    const p = {
      id: 1,
      name: name.value,
      price: price.value,
      imageUrl: imageUrl.value,
      description: description.value,
      isActive: isActive.value,
      categoryId: categoryId.value,
    };
    this.productService.createProduct(p).subscribe((data) => {
      this.router.navigate(['products']);
    });
  }
}
