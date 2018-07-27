import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonSimpleComponent } from './person-simple/person-simple.component';
import { SharedModule } from '../shared';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryShellComponent } from './category-shell.component';

@NgModule({
  imports: [CommonModule, SharedModule, CategoryRoutingModule],
  declarations: [CategoryShellComponent, PersonSimpleComponent]
})
export class FormlyBasicsModule {}
