import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/userAuth.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { languageAction } from '../../store/language/language.action';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule ,
    CommonModule,
    AsyncPipe

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLoggedIn!: boolean;
  counter$: Observable<number>;
  constructor( private _userAuth: UserAuthService , private store: Store<{ counter: number }>) {
    this.counter$ = this.store.select('counter');
  }
  ngOnInit(): void {
    // this.isLoggedIn = this._userAuth.getUserLoggedIn();
    this._userAuth.getAuthSubject().subscribe((res) => {
      this.isLoggedIn = res;
    });
  }
  changeLanguage(){
    this.store.dispatch(languageAction({language: 'ar'}));
  }

}
