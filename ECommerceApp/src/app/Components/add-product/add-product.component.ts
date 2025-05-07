import { FormsModule } from '@angular/forms';
import { iCategory } from './../../Models/icategory';
import { iProduct } from './../../Models/iproduct';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APICategoryService } from '../../services/apicategory.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  categories: iCategory[] = [];
  product: iProduct = {} as iProduct
  constructor(private _catSrv: APICategoryService) {
  }
  ngOnInit() {
    this._catSrv.GetAllCategories().subscribe({
      next: (res) => {
        this.categories = res
        // console.log(this.categories);
      },
      error: (err) => {
        console.log(err);

      }
    })
  }



  AddProduct() {
    throw new Error('Method not implemented.');
  }


}
