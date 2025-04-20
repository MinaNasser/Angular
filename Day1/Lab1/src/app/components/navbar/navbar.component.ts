import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // ✅ صح كده
})
export class NavbarComponent {
  bannerImage: string = 'Images/banner.png';
}

