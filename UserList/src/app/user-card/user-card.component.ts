import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: any;
  getRoleClass(role: string): string {
    switch (role) {
      case 'admin':
        return 'admin-role';  // اللون الأحمر
      case 'moderator':
        return 'moderator-role';  // اللون الأصفر
      case 'user':
        return 'user-role';  // اللون الأخضر
      default:
        return '';
    }
  }
}
