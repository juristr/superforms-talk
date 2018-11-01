import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;">
      <formly-group
        [field]="field"
        [options]="options"
        [form]="formControl"
        class="multi-line-row"
        >
        <div class="row-action-buttons">
          <button mat-icon-button color="accent" class="button-remove" type="button" *ngIf="model.length > 1" (click)="remove(i)">
            <mat-icon>clear</mat-icon>
          </button>
          <button mat-icon-button color="primary" class="button-add" type="button" (click)="add()" *ngIf="i === model.length - 1">
            <mat-icon>add</mat-icon>
          </button>
        </div>
      </formly-group>
    </div>
  `
})
export class RepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}
