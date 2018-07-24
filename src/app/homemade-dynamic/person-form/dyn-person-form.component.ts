import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple',
  template: `
    <form [formGroup]="form">
      <mat-form-field class="full-width" *ngFor="let prop of personProps">
        <input matInput type="text" [placeholder]="prop" [formControlName]="prop">
      </mat-form-field>
    </form>
    <app-form-debug [form]="form.value" [model]="person"></app-form-debug>
  `
})
export class DynamicPersonFormComponent implements OnInit {
  form: FormGroup;
  person = {
    firstname: 'Juri',
    age: 32,
    surname: 'Strumpflohner',
    twitter: '@juristr',
    website: 'https://juristr.com'
  };
  personProps = [];

  ngOnInit() {
    const formDataObj = Object.keys(this.person).reduce((formObj, prop) => {
      formObj[prop] = new FormControl(this.person[prop]);
      return formObj;
    }, {});

    this.personProps = Object.keys(this.person);

    this.form = new FormGroup(formDataObj);
  }
}
