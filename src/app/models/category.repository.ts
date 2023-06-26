import { Category } from './category';

export class CategoryRepository {
  private categories: Category[] = [
    { id: 1, name: 'smartPhone' },
    { id: 2, name: 'smartWatch' },
    { id: 3, name: 'androidTv' },
  ];
  getCategories(): Category[] {
    return this.categories;
  }
  getCategoryById(id: number): Category | undefined {
    return this.categories.find((category) => category.id == id);
  }
}
