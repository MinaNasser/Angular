import { Component } from '@angular/core';
import { IProduct } from '../../../Models/Product';
import { ICategory } from '../../../Models/Category';
import { ProductService } from '../../../Services/product.service';
import { ProductsFromAPIService } from '../../../Services/ProductsFromAPI.service';

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

  Products:Array<IProduct> = []

  Categories : Array<ICategory>


  constructor(private productsrv:ProductService,private productAPI:ProductsFromAPIService){
    this.Categories = this.productsrv.GetAllCategories()

    this.productAPI.getAll().subscribe({
      next:(res)=>{
        this.Products = res.data
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  filter(){
    this.Products = this.productsrv.Filter(this.selectedCatagory)
  }


  
}
