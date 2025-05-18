import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor.service';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { languageReducer } from './store/language/language.reducer';
import { LanguageEffect } from './store/language/language.effect';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideHttpClient(withFetch()), for Api
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])), provideStore({
        counter: counterReducer,
        language: languageReducer
    }), provideEffects(
      // counterEffects
      // languageEffects
      [
        LanguageEffect
      ]
    )]
};
