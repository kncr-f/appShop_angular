import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
})
export class AppComponent {
  private title = 'Home Page';
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}
  getTitle() {
    return this.title;
  }

  // createProduct() {
  //   const p = {
  //     id: 3,
  //     name: 'iphone 23',
  //     price: 44800,
  //     imageUrl: '1.jpeg',
  //     description: 'new product....',
  //     isActive: true,
  //     categoryId: 3,
  //   };

  //   // this.productService.createProduct(p).subscribe((data) => console.log(data));

  // }

  createProduct() {
    const p = {
      id: 3,
      name: 'iphone 23',
      price: 44800,
      imageUrl: '1.jpeg',
      description: 'new product....',
      isActive: true,
      categoryId: 3,
    };
    this.productService.createProduct(p).subscribe((data) => {
      console.log(data);
    });
  }
}
