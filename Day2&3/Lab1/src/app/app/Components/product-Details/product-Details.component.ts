import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../Models/Iproduct';
import { ProductService } from '../../../Services/Product.Service';


@Component({
  selector: 'app-product-Details',
  templateUrl: './product-Details.component.html',
  styleUrls: ['./product-Details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:number= -1
  product:IProduct|undefined
  constructor(private routeInfo:ActivatedRoute,
     private productSrv:ProductService) {
    // this.routeInfo.params.subscribe(data=>console.log(data));

    console.log(this.routeInfo.snapshot.params);
    this.id = this.routeInfo.snapshot.params["id"] as number

    this.product=  this.productSrv.GetProductById(this.id);
    
    
  }

  ngOnInit() {
  }

}
