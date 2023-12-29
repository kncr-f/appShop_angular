import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

import { CategoryService } from '../services/category.service';

@Component({
  selector: 'categoty-list',
  templateUrl: './categoty-list.component.html',
  styleUrls: ['./categoty-list.component.css'],
  providers: [CategoryService],
})
export class CategotyListComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category | null;

  displayAll: boolean = true;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }

  selectCategory(category?: Category) {
    if (category) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }
}
