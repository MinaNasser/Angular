import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about-us',
  imports: [
    // router outlet
    RouterOutlet,
    // router link
    RouterLink,
    // router link active
    RouterLinkActive

  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
