import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDynamicComponent } from './simple/simple-dynamic.component';
import { SharedModule } from '../shared';
import { DynamicPersonFormComponent } from './person-form/dyn-person-form.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SimpleDynamicComponent, DynamicPersonFormComponent]
})
export class HomemadeDynamicModule {}
