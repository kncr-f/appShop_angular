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
    },
    {
      id: 1,
      name: 'IPhone 15',
      imageUrl: '2.jpeg',
      price: 2300,
      description: 'it is a good product but a bit expensive',
      isActive: true,
    },
    {
      id: 1,
      name: 'IPhone 16',
      imageUrl: '3.jpeg',
      price: 26000,
      description: 'it is a good product but a bit expensive',
      isActive: true,
    },
  ];

  getProducts(): Product[] {
    return this.products.filter((p) => p.isActive);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }
}
