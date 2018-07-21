import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFormTemplateComponent } from './tmpl-hero-form/hero-form.component';
import { SharedModule } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroFormReactiveComponent } from './reactive-hero-form/hero-form.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  declarations: [HeroFormTemplateComponent, HeroFormReactiveComponent],
  exports: [HeroFormTemplateComponent, HeroFormReactiveComponent]
})
export class AngularformsModule {}
