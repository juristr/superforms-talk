import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angularforms',
    pathMatch: 'full'
  },
  {
    path: 'angularforms',
    loadChildren: './angularforms/angularforms.module#AngularformsModule'
  },
  {
    path: 'homemade-dynamic',
    loadChildren:
      './homemade-dynamic/homemade-dynamic.module#HomemadeDynamicModule'
  },
  {
    path: 'formly-basics',
    loadChildren: './formly-basics/formly-basics.module#FormlyBasicsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
