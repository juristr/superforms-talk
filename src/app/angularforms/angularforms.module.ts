import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { SharedModule } from '../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [HeroFormComponent],
  exports: [HeroFormComponent]
})
export class AngularformsModule {}
