export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  isActive: boolean;
  categoryId?: number;
}
