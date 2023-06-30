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
      name: 'iphone §',
      price: 3800,
      imageUrl: '2.jpeg',
      description: 'puffff....',
      isActive: true,
      categoryId: 2,
    };

    this.http
      .post(
        'https://ng-shopapp-47866-default-rtdb.firebaseio.com/products.json',
        p
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
