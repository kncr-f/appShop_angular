import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers: [CategoryService, ProductService],
})
export class CreateProductComponent implements OnInit {
  categories: Category[] = [];
  error: string = '';
  model: any = {
    name: 'ip',
    price: 2000,
    categoryId: '0',
  };

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
  saveProduct(form: NgForm) {
    const extensions = ['jpeg', 'jpg', 'png'];
    const extension = this.model.imageUrl.split('.').pop();

    if (extensions.indexOf(extension) == -1) {
      this.error = 'image extention must be jpeg, jpg or png';
      return;
    }
    if (this.model.categoryId == '0') {
      this.error = 'Please enter a category';
      return;
    }
    const p = {
      id: 1,
      name: this.model.name,
      price: this.model.price,
      imageUrl: this.model.imageUrl,
      description: this.model.description,
      isActive: this.model.isActive,
      categoryId: this.model.categoryId,
    };
    if (form.valid) {
      this.productService.createProduct(p).subscribe((data) => {
        this.router.navigate(['/products']);
      });
      console.log(this.model);
    } else {
      this.error = 'please control the form';
    }
  }
}
