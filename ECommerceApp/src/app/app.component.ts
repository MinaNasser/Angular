import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ECommerceApp';
  /**
   *
   */
  language$ :Observable<string>;
  dir:string = "ltr";
  constructor(private store: Store<{ language: string }>) {
    this.language$ = this.store.select("language");
    this.language$.subscribe(lang => {
      if (lang == "en") {
        this.dir = "ltr";
      }
      else {
        this.dir = "rtl";
      }
    })
  }
}
