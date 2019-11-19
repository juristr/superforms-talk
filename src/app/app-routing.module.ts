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
    loadChildren: () => import('./angularforms/angularforms.module').then(m => m.AngularformsModule)
  },
  {
    path: 'homemade-dynamic',
    loadChildren:
      () => import('./homemade-dynamic/homemade-dynamic.module').then(m => m.HomemadeDynamicModule)
  },
  {
    path: 'formly-basics',
    loadChildren: () => import('./formly-basics/formly-basics.module').then(m => m.FormlyBasicsModule)
  },
  {
    path: 'formly-advanced',
    loadChildren:
      () => import('./formly-advanced/formly-advanced.module').then(m => m.FormlyAdvancedModule)
  },
  {
    path: 'angular-sf',
    loadChildren: () => import('./angular-sf/angular-sf.module').then(m => m.AngularSFModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
