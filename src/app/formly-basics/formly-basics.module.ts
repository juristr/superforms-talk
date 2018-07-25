import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonSimpleComponent } from './person-simple/person-simple.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [PersonSimpleComponent]
})
export class FormlyBasicsModule {}
