import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iProduct } from '../../Models/iproduct';
import { StaticProductService } from '../../services/static-product.service';
import { Location } from '@angular/common';

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
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: StaticProductService,
    private _location : Location

  ) {

  }
  ngOnInit(): void {
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    console.log("From ngOnInit: " + this.id);
    this.product = this.getProductById(this.id);


  }


  getProductById(id: number) :iProduct|undefined {
    return this._productService.getProductById(id);
  }

  goBack(): void {
    this._location.back();
  }
  // next & previous
  GoNext() {
    let ids = this._productService.mapProductsToIDS();
    // this._productService.getProducts()
    let index = ids.indexOf(this.id);
    if (index == ids.length - 1) {
      this.id = ids[0];
    } else {
      this.id = ids[index + 1];
    }

    this.product = this.getProductById(this.id);

  }
  GoPrevious() {
    let ids = this._productService.mapProductsToIDS();
    // this._productService.getProducts()
    let index = ids.indexOf(this.id);
    if (index == 0) {
      this.id = ids[ids.length - 1];
    } else {
      this.id = ids[index - 1];
    }
    this.product = this.getProductById(this.id);
  }

}
