import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//<app-root></app-root> directive
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  // template: `<h1>From  ts file</h1>`,
  // styles: [`h1{color: red}`]
})
export class AppComponent {
  title = 'MinaAl5al';
}
