import { Component } from '@angular/core';
import { Istore } from '../../Models/istore';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myStore:Istore;

  constructor(){  
    this.myStore = {
      name: "My Store",
      imgUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      brand: ["Apple", "Samsung", "Huawei"]
    }

  }
  print(){
    console.log(this.myStore);
  }
}
