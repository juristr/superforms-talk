import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryShellComponent } from './category-shell.component';
import { CascadingSelectsComponent } from './cascading-selects/cascading-selects.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
