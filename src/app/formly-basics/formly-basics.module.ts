import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonSimpleComponent } from './person-simple/person-simple.component';
import { SharedModule } from '../shared';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryShellComponent } from './category-shell.component';
import { ExpressionPropsComponent } from './expression-props/expression-props.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

@NgModule({
  imports: [CommonModule, SharedModule, CategoryRoutingModule],
  declarations: [
    CategoryShellComponent,
    PersonSimpleComponent,
    ExpressionPropsComponent,
    FormValidationComponent
  ]
})
export class FormlyBasicsModule {}
