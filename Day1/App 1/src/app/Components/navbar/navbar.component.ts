import { Component } from "@angular/core";

@Component({
    selector:"app-navbar",
    template:`
    <nav class="navbar"> my nav bar </nav>
    `,
    styles:`
    .navbar{
        background-color: blue;
        color:white;
        padding:20px;
    }`,
    standalone:true
})


export class NavbarComponent{

}