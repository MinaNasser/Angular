import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iProduct } from '../../Models/iproduct';
import { StaticProductService } from '../../services/static-product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: iProduct | undefined;
  id!: number ;
  constructor(private _activatedRoute: ActivatedRoute, private _productService: StaticProductService) {

  }
  ngOnInit(): void {
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    console.log("From ngOnInit: " + this.id);
    this.product = this.getProductById(this.id);


  }


  getProductById(id: number) :iProduct|undefined {
    return this._productService.getProductById(id);
  }

}
