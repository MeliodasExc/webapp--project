import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import { provideRouter } from "@angular/router";
import path from "path";

bootstrapApplication(App, {
  providers: [
    provideRouter([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./app/pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'about', loadComponent: () => import('./app/pages/about/about.component').then(m => m.AboutComponent) }
  ])
  ]
}).catch(err => console.error(err));