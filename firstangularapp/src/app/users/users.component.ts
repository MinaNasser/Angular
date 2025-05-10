import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  // userName: string = 'John Doe';
  // userAge: number = 25;
  // userAvatar: string = '4042356.png';
  // isStudent: boolean = true;

  // user: any = {
  //   name: 'John Doe',
  //   age: 25,
  //   email: 'WlQkE@example.com',
  //   phone: '123-456-7890',
  //   address: {
  //     street: '123 Main St',
  //     city: 'New York',
  //     state: 'NY',
  //     zip: '10001'
  //   }
  // };
  // showAlert(name: string= 'John Doe') {
  //   alert('Hello, ' + name + '!');
  // }
  //list of users
  users = [
    {
      name: 'John Doe',
      age: 25,
      email: 'WlQkE@example.com',
      phone: '123-456-7890',
      isAdmin: true,
    },
    {
      name: 'Jane Smith',
      age: 30,
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      isAdmin: false,
    },
    {
      name: 'Bob Johnson',
      age: 40,
      email: 'bob.johnson@example.com',
      phone: '555-555-5555',
      isAdmin: true,
    },
    {
      name: 'Alice Brown',
      age: 12,
      email: 'alice.brown@example.com',
      phone: '111-222-3333',
      isAdmin: false,
    }
  ];

  firstName = signal('Morgan');
  firstNameCapitalized = computed(() => this.firstName().toUpperCase());

  constructor() {
    console.log(this.firstNameCapitalized()); // MORGAN
  }



}
