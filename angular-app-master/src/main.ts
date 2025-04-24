// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/Components/home/app.component';
// bootstrapApplication(AppComponent);
//Standalone 🚫

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)
