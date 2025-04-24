import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userName: string = 'John Doe';
  userAge: number = 25;
  userAvatar: string = '4042356.png';
  isStudent: boolean = true;

  user: any = {
    name: 'John Doe',
    age: 25,
    email: 'WlQkE@example.com',
    phone: '123-456-7890',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001'
    }
  };
  showAlert(name: string= 'John Doe') {
    alert('Hello, ' + name + '!');
  }
}
