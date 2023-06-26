import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  @Output() unSelectEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  unselectProduct() {
    this.unSelectEvent.emit();
  }
}
