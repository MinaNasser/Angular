import { Component } from "@angular/core";

@Component({
    selector:"app-navbar",
    templateUrl:"navbar.component.html"
})


export class NavbarComponent{
 current: Date = new Date()
 salary:number = 40
}