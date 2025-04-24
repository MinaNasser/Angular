import { Injectable } from '@angular/core';
import { ICategory } from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
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
  GetAllCategories(): Array<ICategory> {
    return this.Categories;
  }
  GetCategoryById(id: number): ICategory | undefined {
    return this.Categories.find((cat) => cat.id == id);
  }
}
