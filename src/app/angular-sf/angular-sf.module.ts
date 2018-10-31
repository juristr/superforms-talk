import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { Routes, RouterModule } from '@angular/router';
import { AngularSFShellComponent } from './angular-sf-shell.component';
import { FormlyDemoComponent } from './formly-demo/formly-demo.component';

const routes: Routes = [
  {
    path: '',
    component: AngularSFShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'formly-demo',
        pathMatch: 'full'
      },
      {
        path: 'formly-demo',
        component: FormlyDemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [AngularSFShellComponent, FormlyDemoComponent]
})
export class AngularSFModule {}
