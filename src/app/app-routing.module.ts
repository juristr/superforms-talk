import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormTemplateComponent } from './angularforms/tmpl-hero-form/hero-form.component';
import { HeroFormReactiveComponent } from './angularforms/reactive-hero-form/hero-form.component';
import { SimpleDynamicComponent } from './homemade-dynamic/simple/simple-dynamic.component';
import { DynamicPersonFormComponent } from './homemade-dynamic/person-form/dyn-person-form.component';
import { PersonSimpleComponent } from './formly-basics/person-simple/person-simple.component';

const routes: Routes = [
  {
    path: 'angularforms/template',
    component: HeroFormTemplateComponent
  },
  {
    path: 'angularforms/reactive',
    component: HeroFormReactiveComponent
  },
  {
    path: 'homemade-dynamic',
    children: [
      {
        path: 'simple',
        component: SimpleDynamicComponent
      },
      {
        path: 'dyn-person-form',
        component: DynamicPersonFormComponent
      }
    ]
  },
  {
    path: 'formly-basics',
    children: [
      {
        path: 'person-simple',
        component: PersonSimpleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
