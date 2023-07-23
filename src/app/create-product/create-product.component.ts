import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  constructor(private productService: ProductService, private route: Router) {}

  ngOnInit(): void {}

  saveProduct(
    name: any,
    price: any,
    imageUrl: any,
    description: any,
    isActive: any,
    categoryId: any
  ) {
    const newProduct = {
      id: 1,
      name: name.value,
      price: price.value,
      imageUrl: imageUrl.value,
      description: description.value,
      isActive: isActive.checked,
      categoryId: categoryId.value,
    };
    this.productService.createProduct(newProduct).subscribe((data) => {
      this.route.navigate(['/products']);
    });
  }
}
