import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from "./users/users.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-ang-app';
}
