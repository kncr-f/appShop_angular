export interface Product {
  id: any;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  isActive: boolean;
  categoryId?: number;
}
