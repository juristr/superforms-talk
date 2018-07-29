import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryShellComponent } from './category-shell.component';
import { CascadingSelectsComponent } from './cascading-selects/cascading-selects.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { PersonSimpleComponent } from './custom-dsl/person-simple.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'cascading-selects',
        pathMatch: 'full'
      },
      {
        path: 'cascading-selects',
        component: CascadingSelectsComponent
      },
      {
        path: 'autocomplete',
        component: AutocompleteComponent
      },
      {
        path: 'custom-dsl',
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
