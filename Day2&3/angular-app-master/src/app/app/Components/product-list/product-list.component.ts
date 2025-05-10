import { Component } from '@angular/core';
import { IProduct } from '../../../Models/Product';
import { ICategory } from '../../../Models/Category';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // ProductController > index
  // ProductController > add
  // cartController > add NO UI

  selectedCatagory:number=0;

  Products:Array<IProduct>

  Categories : Array<ICategory>


  constructor(private productsrv:ProductService){
    this.Products = this.productsrv.GetAllProduct()
    this.Categories = this.productsrv.GetAllCategories()
  }

  filter(){
    this.Products = this.productsrv.Filter(this.selectedCatagory)
  }


  
}
