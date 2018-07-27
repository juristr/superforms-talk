import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDynamicComponent } from './simple/simple-dynamic.component';
import { SharedModule } from '../shared';
import { DynamicPersonFormComponent } from './person-form/dyn-person-form.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryShellComponent } from './category-shell.component';

@NgModule({
  imports: [CommonModule, SharedModule, CategoryRoutingModule],
  declarations: [
    CategoryShellComponent,
    SimpleDynamicComponent,
    DynamicPersonFormComponent
  ]
})
export class HomemadeDynamicModule {}
