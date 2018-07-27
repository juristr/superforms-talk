import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryShellComponent } from './category-shell.component';
import { HeroFormReactiveComponent } from './reactive-hero-form/hero-form.component';
import { HeroFormTemplateComponent } from './tmpl-hero-form/hero-form.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'template',
        pathMatch: 'full'
      },
      {
        path: 'template',
        component: HeroFormTemplateComponent
      },
      {
        path: 'reactive',
        component: HeroFormReactiveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
