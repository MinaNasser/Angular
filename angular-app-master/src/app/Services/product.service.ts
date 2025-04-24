import { Injectable } from '@angular/core';
import { IProduct } from '../Models/Product';
import { ICategory } from '../Models/Category';

@Injectable({
  providedIn: "root"
})
export class ProductService {

  constructor() { }

  Products: Array<IProduct> = [
    {
      id: 1,
      name: "Lenvo thinpad X230",
      price: 100000,
      quantity: 10,
      categoryID: 1,
      imgURL: "https://picsum.photos/200"
    },
    {
      id: 2,
      name: "Dell",
      price: 2002020,
      quantity: 20,
      categoryID: 1,
      imgURL: "https://picsum.photos/200"
    },
    {
      id: 3,
      name: "Lenovo Tab",
      price: 100888,
      quantity: 10,
      categoryID: 2,
      imgURL: "https://picsum.photos/200"
    },
    {
      id: 4,
      name: "Samsung Tab",
      price: 1000000,
      quantity: 10,
      categoryID: 2,
      imgURL: "https://picsum.photos/200"
    },
    {
      id: 5,
      name: "Samsung note 10",
      price: 100777,
      quantity: 10,
      categoryID: 3,
      imgURL: "https://picsum.photos/200"
    },
    {
      id: 6,
      name: "Samsung S10",
      price: 100,
      quantity: 10,
      categoryID: 3,
      imgURL: "https://picsum.photos/200"
    },
    {
      id: 7,
      name: "tochiba Utlra",
      price: 60000,
      quantity: 14,
      imgURL: "https://fakeimg.pl/200x100",
      categoryID: 4
    },
    {
      id: 8,
      name: "Apple Utlra",
      price: 7800060,
      quantity: 6,
      imgURL: "https://fakeimg.pl/200x100",
      categoryID: 4
    },
    {
      id: 9,
      name: "test Utlra",
      price: 7800060,
      quantity: 3,
      imgURL: "https://fakeimg.pl/200x100",
      categoryID: 4
    },
    {
      id: 10,
      name: "jhgfjxz",
      imgURL: "https://picsum.photos/200",
      quantity: 33,
      price: 44444444,
      categoryID: 1
    },
    {
      name: "fsdjhfgsdjhkgfsh",
      price: 7800060,
      quantity: 3,
      imgURL: "https://fakeimg.pl/200x100",
      categoryID: 4,
      id: 11
    }
  ]
  Categories: Array<ICategory> = [
    {
      id: 0,
      name: "All",
      desciption: "This is description"
    },
    {
      id: 1,
      name: "Laptops",
      desciption: "This is description"
    },
    {
      id: 2,
      name: "Tablets",
      desciption: "This is description"
    },
    {
      id: 3,
      name: "Mobiles",
      desciption: "This is description"
    },
    {
      id: 4,
      name: "Accessories",
      desciption: "This is description"
    }
  ]

  GetAllCategories() :Array<ICategory>{
    return this.Categories;
  }

  GetAllProduct() :Array<IProduct>{
    return this.Products;
    //Api
  }
  Filter(CatagoryId:number):Array<IProduct>{
    if (CatagoryId == 0) {
      return this.Products;
    } else {
      return this.Products.filter(item=>item.categoryID == CatagoryId)
    }
  }

findById(id:number):IProduct|undefined{
  return this.Products.find((item)=>item.id == id)
}


}
