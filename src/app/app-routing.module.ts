import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  { path: 'products/createProduct', component: CreateProductComponent },
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'products/category/:categoryId', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
