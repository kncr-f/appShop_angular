import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers: [CategoryService, ProductService],
})
export class CreateProductComponent implements OnInit {
  categories: Category[] = [];
  error: string = '';

  constructor(
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }
  saveProduct(
    name: any,
    price: any,
    imageUrl: any,
    description: any,
    isActive: any,
    categoryId: any
  ) {
    if (name.value == '' || name.value.length < 3) {
      this.error = 'Please enter a valid name. It must be at least 3 Character';
      return;
    }
    if (price.value == '') {
      this.error = 'Please enter a valid Price';
      return;
    }

    if (imageUrl.value == '') {
      this.error = 'Please enter a image name';
    }

    const extentios = ['jpeg', 'jpg', 'png'];
    const extention = imageUrl.value.split('.').pop();

    if (extentios.indexOf(extention) == -1) {
      this.error = 'image extention must be jpeg, jpg or png';
      return;
    }

    if (categoryId.value == '0') {
      this.error = 'Please enter a category';
      return;
    }

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
