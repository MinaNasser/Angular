import { FormsModule } from '@angular/forms';
import { iCategory } from './../../Models/icategory';
import { iProduct } from './../../Models/iproduct';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APICategoryService } from '../../services/apicategory.service';
import { APIProductService } from '../../services/apiproduct.service';
import { routes } from '../../app.routes';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  constructor(
    private _catSrv: APICategoryService ,
     private _productSrv: APIProductService,
     private _router: Router
    ) {
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
    this._productSrv.AddProduct(this.product).subscribe({
      next: (res) => {
        // console.log(res);
        // alert("Product Added Successfully");
        // this.product = {} as iProduct
        Swal.fire({
          title: "Success!",
          text: "Product Added Successfully",
          icon: "success"
        });
        this._router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
