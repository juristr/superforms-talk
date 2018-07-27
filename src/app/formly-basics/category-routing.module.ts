import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonSimpleComponent } from './person-simple/person-simple.component';
import { CategoryShellComponent } from './category-shell.component';
import { ExpressionPropsComponent } from './expression-props/expression-props.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

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
      },
      {
        path: 'expression-props',
        component: ExpressionPropsComponent
      },
      {
        path: 'form-validation',
        component: FormValidationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
