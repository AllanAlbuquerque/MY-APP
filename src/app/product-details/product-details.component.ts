import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  message: string = '';

  constructor(private service: ProductDetailsService) {}

  ngOnInit(): void {
    this.buscarGatos();
  }

  buscarGatos() {
    this.service.cats().subscribe((response: any) => {
      this.message = response.string;
    });
  }
}
