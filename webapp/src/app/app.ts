import { Component, signal } from '@angular/core';
import { provideRouter, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class App {
  protected readonly title = signal('webapp');
}
