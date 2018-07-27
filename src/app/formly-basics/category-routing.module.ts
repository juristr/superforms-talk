import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonSimpleComponent } from './person-simple/person-simple.component';
import { CategoryShellComponent } from './category-shell.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'person-simple',
        pathMatch: 'full'
      },
      {
        path: 'person-simple',
        component: PersonSimpleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
