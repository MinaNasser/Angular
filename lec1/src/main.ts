import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
  // preserveWhitespaces: true,// preserve whitespace in template
})
  .catch(err => console.error(err));
