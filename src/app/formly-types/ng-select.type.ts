import { Component, OnInit, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

/**
 * EXPERIMENTAL
 */
@Component({
  selector: 'formly-ng-select',
  template: `
    <div class="mat-input-infix mat-form-field-infix">
       <ng-select [items]="to.options | async"
          [placeholder]="to.label"
          [bindValue]="to.bindValue || 'value'"
          [formControl]="formControl"
          [class.is-invalid]="showError">
      </ng-select>
    </div>
  `
})
export class NgSelectFormlyComponent extends FieldType {}
