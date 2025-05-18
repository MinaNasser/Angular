import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { languageAction } from './language.action';

@Injectable()
export class LanguageEffect {
  private actions$ = inject(Actions); // ✅ هذه تحل المشكلة
  
  savedLanguage = createEffect(
    () =>
      this.actions$.pipe(
        ofType(languageAction),
        tap((action) => {
          console.log(action);
          localStorage.setItem('language', action.language);
        })
      ),
    { dispatch: false }
  );
}
