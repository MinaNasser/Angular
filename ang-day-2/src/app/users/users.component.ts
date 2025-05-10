import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [NgFor , NgIf , NgClass , NgStyle],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
   users = [{
    name: 'Aya',
    age: 22
   } , {
    name: 'Khalid',
    age: 23
   },{
    name: 'Omar',
    age: 24
   },
   {
    name: 'Ahmed',
    age: 25
   }
  ];
   isAdmin: boolean = true;
}
