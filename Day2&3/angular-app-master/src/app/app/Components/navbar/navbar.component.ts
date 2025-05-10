import { Component } from "@angular/core";

@Component({
    selector:"app-navbar",
    template:`
    <nav class="navbar"> my nav bar  
        {{current | date :"yyyy_MM_dd"}} ||
        {{current | date :"longTime"}}
      <br>
      <a routerLink="/products">Products</a>
      <a routerLink="/todolist">Todo list</a>
    </nav>
    `,
    styles:`
    .navbar{
        background-color: blue;
        padding:20px;
        color:white;
    }`,
})


export class NavbarComponent{
 current: Date = new Date()
 salary:number = 40
}