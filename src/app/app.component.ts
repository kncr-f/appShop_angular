import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private title = 'Home Page';
  constructor(private http: HttpClient) {}
  getTitle() {
    return this.title;
  }
  createProduct() {
    const p = {
      id: 3,
      name: 'iphone 17',
      price: 44800,
      imageUrl: '3.jpeg',
      description: 'puffff....',
      isActive: true,
      categoryId: 2,
    };

    this.http
      .post(
        'https://myshopapp-c720b-default-rtdb.firebaseio.com/products.json',
        p
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
