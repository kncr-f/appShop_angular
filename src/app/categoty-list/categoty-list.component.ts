import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'categoty-list',
  templateUrl: './categoty-list.component.html',
  styleUrls: ['./categoty-list.component.css'],
})
export class CategotyListComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category | null;
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }

  ngOnInit(): void {}

  selectCategory(category: Category) {
    if (this.selectedCategory) {
      this.selectedCategory = null;
    } else {
      this.selectedCategory = category;
    }
  }
}
