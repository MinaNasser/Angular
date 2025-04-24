import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../Models/Iproduct';
import { CartService } from '../../../Services/CartService.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() Product!:IProduct;
  constructor(private cartSrv:CartService) { }

  ngOnInit() {
  }

  add()
  {
    console.log(this.Product.ID);
    
  }

}
