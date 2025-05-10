import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../Services/Product.Service';
import { IProduct } from '../../../Models/Iproduct';

@Component({
  selector: 'app-ProductDetails',
  standalone: false,
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.GetProductById(this.productId).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (err) => {
        console.error("Error fetching product:", err);
        // من الأفضل إضافة حالة لإظهار رسالة للمستخدم هنا
      }
    });
  }
  
}
