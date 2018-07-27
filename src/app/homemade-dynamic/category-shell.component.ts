import { Component } from '@angular/core';
import { navLinks } from './category-navigation';

@Component({
  selector: 'app-category-shell',
  template: `
    <nav mat-tab-nav-bar>
      <a mat-tab-link *ngFor="let link of navLinks"
        [routerLink]="link.path"
        routerLinkActive #rla="routerLinkActive"
        [active]="rla.isActive">
        {{link.label}}
      </a>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class CategoryShellComponent {
  navLinks = navLinks;
}
