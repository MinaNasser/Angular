import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iProduct } from '../../Models/iproduct';
import { CommonModule, Location } from '@angular/common';
import { APIProductService } from '../../services/apiproduct.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: iProduct | undefined;
  currantID: number = 0;
  idsArr: number[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiProductService: APIProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.currantID = Number(params['id']);
      this.getProduct(this.currantID);
    });
    this._apiProductService.GetAllProducts().subscribe(products => {
      this.idsArr = products.map(p => Number(p.id));
      // console.log('idsArr (numbers):', this.idsArr);
    });
    
  }

  getProduct(id: number): void {
    this._apiProductService.GetProductById(id).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => console.error(error)
    );
  }

  GoNext(): void {
    if (this.idsArr.length === 0) return;
    const currantIndex = this.idsArr.findIndex(id => id === this.currantID);
    if (currantIndex === -1) {
      console.error('Current ID not found in idsArr:', this.currantID, this.idsArr);
      return;
    }
    const nextIndex = (currantIndex + 1) % this.idsArr.length;
    const nextId = this.idsArr[nextIndex];
    this.router.navigateByUrl(`/products-details/${nextId}`);
  }
  
  GoPrevious(): void {
    if (this.idsArr.length === 0) return;
    const currantIndex = this.idsArr.findIndex(id => id === this.currantID);
    if (currantIndex === -1) {
      console.error('Current ID not found in idsArr:', this.currantID, this.idsArr);
      return;
    }
    const prevIndex = (currantIndex - 1 + this.idsArr.length) % this.idsArr.length;
    const prevId = this.idsArr[prevIndex];
    this.router.navigateByUrl(`/products-details/${prevId}`);
  }
  goBack(): void {
    this.router.navigateByUrl('/products');
  }
}



/*
// import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iProduct } from '../../Models/iproduct';
import { StaticProductService } from '../../services/static-product.service';
import { CommonModule, Location } from '@angular/common';
import { APIProductService } from '../../services/apiproduct.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: iProduct | undefined;
  id!: number;
  currantID: number = 0;
  idsArr: number[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: StaticProductService,
    private _apiProductService: APIProductService,
    private _location: Location,
    private router: Router

  ) {
    this.idsArr = this._productService.mapProductsToIDS();
  }
  ngOnInit(): void {
    // this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this._activatedRoute.paramMap.subscribe((paramMap) => {
      this.currantID = Number(paramMap.get('id'));
      // this.product = this.getProductById(this.currantID);
      this._apiProductService.GetProductById(this.currantID).subscribe(
        next => {
          this.product = next;
        },
        error => console.log(error),
        () => console.log('complete')
      );

    });
    // this.currantID = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    // this.product = this.getProductById(this.currantID);

  }


  getProductById(id: number): iProduct | undefined {
    return this._productService.getProductById(id);
  }

  goBack(): void {
    this._location.back();
  }
  // next & previous
  GoNext() {

    let currantIndex = this.idsArr.findIndex((id) => id == this.currantID);
    if (currantIndex == this.idsArr.length - 1) {
      this.router.navigateByUrl(`/products-details/${this.idsArr[0]}`);
      this.product = this.getProductById(this.idsArr[0]);
      return;
    }
    else {
      this.router.navigateByUrl(`/products-details/${this.idsArr[currantIndex + 1]}`);
      this.product = this.getProductById(currantIndex);
    }
    // }
    // this.router.navigateByUrl(`/products-details/${this.idsArr[currantIndex + 1]}`);
    // this.product = this.getProductById(currantIndex);


    // let ids = this._productService.mapProductsToIDS();
    // // this._productService.getProducts()
    // let index = ids.indexOf(this.id);
    // if (index == ids.length - 1) {
    //   this.id = ids[0];
    // } else {
    //   this.id = ids[index + 1];
    // }

    // this.product = this.getProductById(this.id);

  }
  GoPrevious() {
    // let idsArr = this._productService.mapProductsToIDS();

    let currantIndex = this.idsArr.findIndex((id) => id == this.currantID);
    if (currantIndex == 0) {
      this.router.navigateByUrl(`/products-details/${this.idsArr[this.idsArr.length - 1]}`);
    }
    else
      this.router.navigateByUrl(`/products-details/${this.idsArr[currantIndex - 1]}`);
    // this.router.navigateByUrl(`/products-details/${this.idsArr[currantIndex + 1]}`);

    // let ids = this._productService.mapProductsToIDS();
    // // this._productService.getProducts()
    // let index = ids.indexOf(this.id);
    // if (index == 0) {
    //   this.id = ids[ids.length - 1];
    // } else {
    //   this.id = ids[index - 1];
    // }
    // this.product = this.getProductById(this.id);
  }

}

// 
// 
// 11 */