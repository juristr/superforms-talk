import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFormTemplateComponent } from './tmpl-hero-form/hero-form.component';
import { SharedModule } from '../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [HeroFormTemplateComponent],
  exports: [HeroFormTemplateComponent]
})
export class AngularformsModule {}
