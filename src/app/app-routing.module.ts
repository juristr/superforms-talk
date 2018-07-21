import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormTemplateComponent } from './angularforms/tmpl-hero-form/hero-form.component';
import { HeroFormReactiveComponent } from './angularforms/reactive-hero-form/hero-form.component';

const routes: Routes = [
  {
    path: 'angularforms/template',
    component: HeroFormTemplateComponent
  },
  {
    path: 'angularforms/reactive',
    component: HeroFormReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
