import { Injectable } from '@angular/core';
import { IProduct } from '../Models/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  GetAllProducts(): IProduct[] {
    return this.Products;
  }
  GetProductById(id: number): IProduct | undefined {
    return this.Products.find(product => product.ID === id);
  }
  FilterProductsByName(name: string): IProduct[] {
    return this.Products.filter(product => product.Name.toLowerCase().includes(name.toLowerCase()));
  }
  // Filter Product By Catagory
  FilterProductByCatagory(catId: number): IProduct[] {
    return this.Products.filter(product => product.ID === catId);
  }

constructor() {
  
  
 }
 Products: Array<IProduct> =[
  { ID: 1, Name: "Lenvo thinpad X230", Price: 100000, Quantity: 10, Img: "https://picsum.photos/201", Description: "Powerful business laptop." },
  { ID: 2, Name: "Dell", Price: 2002020, Quantity: 20, Img: "https://picsum.photos/202", Description: "High-performance Dell device." },
  { ID: 3, Name: "Lenovo Tab", Price: 100888, Quantity: 10, Img: "https://picsum.photos/203", Description: "Compact tablet for daily use." },
  { ID: 4, Name: "Samsung Tab", Price: 1000000, Quantity: 10, Img: "https://picsum.photos/204", Description: "Samsung’s latest Android tablet." },
  { ID: 5, Name: "Samsung note 10", Price: 100777, Quantity: 10, Img: "https://picsum.photos/205", Description: "Samsung Note series smartphone." },
  { ID: 6, Name: "Samsung S10", Price: 100, Quantity: 10, Img: "", Description: "Affordable Samsung S series." },
  { ID: 7, Name: "tochiba Utlra", Price: 60000, Quantity: 14, Img: "https://picsum.photos/207", Description: "Toshiba Ultra light model." },
  { ID: 8, Name: "Apple Utlra", Price: 7800060, Quantity: 6, Img: "https://picsum.photos/208", Description: "High-end Apple device." },
  { ID: 9, Name: "test Utlra", Price: 7800060, Quantity: 3, Img: "https://picsum.photos/209", Description: "Testing device for QA." },
  { ID: 10, Name: "jhgfjxz", Price: 44444444, Quantity: 33, Img: "https://picsum.photos/210", Description: "Random test product." },
  { ID: 11, Name: "HP EliteBook", Price: 65000, Quantity: 12, Img: "https://picsum.photos/211", Description: "Reliable HP laptop for professionals." },
  { ID: 12, Name: "iPad Air", Price: 150000, Quantity: 7, Img: "https://picsum.photos/212", Description: "Sleek and lightweight Apple tablet." },
  { ID: 13, Name: "Asus ROG", Price: 300000, Quantity: 4, Img: "https://picsum.photos/213", Description: "Gaming beast with RGB backlight." },
  { ID: 14, Name: "MSI Stealth", Price: 270000, Quantity: 6, Img: "https://picsum.photos/214", Description: "Slim and powerful gaming laptop." },
  { ID: 15, Name: "Surface Pro", Price: 90000, Quantity: 5, Img: "https://picsum.photos/215", Description: "2-in-1 device for productivity." },
  { ID: 16, Name: "Huawei MatePad", Price: 55000, Quantity: 9, Img: "https://picsum.photos/216", Description: "Affordable Android tablet." },
  { ID: 17, Name: "Sony Xperia", Price: 88000, Quantity: 8, Img: "https://picsum.photos/217", Description: "Sleek Sony smartphone." },
  { ID: 18, Name: "Google Pixel", Price: 110000, Quantity: 6, Img: "https://picsum.photos/218", Description: "Clean Android experience." },
  { ID: 19, Name: "Realme Pad", Price: 35000, Quantity: 10, Img: "https://picsum.photos/219", Description: "Budget-friendly tablet." },
  { ID: 20, Name: "Acer Aspire", Price: 45000, Quantity: 7, Img: "https://picsum.photos/220", Description: "Good performance for everyday use." }
];

}
