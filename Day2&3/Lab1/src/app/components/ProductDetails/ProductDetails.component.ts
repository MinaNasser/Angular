import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/Iproduct';
import { ProductService } from '../../Services/Product.service';

@Component({
  selector: 'app-ProductDetails',
  standalone:false,
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.GetProductById(this.productId);
  }
}
