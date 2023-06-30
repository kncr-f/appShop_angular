import { Product } from './product';

export class ProductRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'IPhone 14',
      imageUrl: '1.jpeg',
      price: 2000,
      description: 'it is a good product but a bit expensive',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'IPhone 15',
      imageUrl: '2.jpeg',
      price: 2300,
      description: 'it is a good product but a bit expensive',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 3,
      name: 'IPhone 16',
      imageUrl: '3.jpeg',
      price: 2600,
      description: 'it is a good product but a bit expensive',
      isActive: true,
      categoryId: 1,
    },
    {
      id: 4,
      name: 'IPhone 17',
      imageUrl: '1.jpeg',
      price: 3000,
      description: 'it is a good product but a bit expensive',
      isActive: true,
      categoryId: 2,
    },
    {
      id: 5,
      name: 'IPhone 18',
      imageUrl: '2.jpeg',
      price: 3200,
      description: 'it is a good product but a bit expensive',
      isActive: true,
      categoryId: 2,
    },
    {
      id: 6,
      name: 'IPhone 19',
      imageUrl: '3.jpeg',
      price: 3400,
      description: 'it is a good product but a bit expensive',
      isActive: true,
      categoryId: 3,
    },
  ];

  getProducts(): Product[] {
    return this.products.filter((p) => p.isActive);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

  getProductByCategoryId(id: number): Product[] {
    return this.products.filter((p) => p.categoryId == id);
  }
}
