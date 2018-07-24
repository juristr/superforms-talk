import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple',
  template: `
    <form [formGroup]="form">
      <mat-form-field class="full-width">
        <input matInput type="text" [formControlName]="fieldName">
      </mat-form-field>
    </form>
    <app-form-debug [form]="form.value"></app-form-debug>
  `
})
export class SimpleDynamicComponent implements OnInit {
  form: FormGroup;
  fieldName = 'firstname';
  firstnameValue = 'Juri';

  ngOnInit() {
    this.form = new FormGroup({
      [this.fieldName]: new FormControl(this.firstnameValue)
    });
  }
}
