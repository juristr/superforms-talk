import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonSimpleComponent } from '../formly-basics/person-simple/person-simple.component';
import { SimpleDynamicComponent } from './simple/simple-dynamic.component';
import { DynamicPersonFormComponent } from './person-form/dyn-person-form.component';
import { CategoryShellComponent } from './category-shell.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'simple',
        pathMatch: 'full'
      },
      {
        path: 'simple',
        component: SimpleDynamicComponent
      },
      {
        path: 'dyn-person-form',
        component: DynamicPersonFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
