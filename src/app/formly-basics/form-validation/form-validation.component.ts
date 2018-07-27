import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DebugComponent } from '../../shared/debug/debug.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html'
})
export class FormValidationComponent implements OnInit {
  @ViewChild(DebugComponent) debugCmp: DebugComponent;

  cities$ = of([
    {
      value: 1,
      label: 'Bolzano',
      group: 'Europe'
    },
    {
      value: 2,
      label: 'Berlin',
      group: 'Europe'
    },
    {
      value: 3,
      label: 'San Francisco',
      group: 'North America'
    }
  ]);

  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        required: true
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        label: 'age',
        type: 'number',
        min: 18
      },
      validation: {
        messages: {
          min: 'Sorry, you have to be of legal age.'
        }
      }
    },
    {
      key: 'cityId',
      type: 'select',
      templateOptions: {
        label: 'city',
        options: this.cities$
      }
    }
  ];

  constructor() {}

  ngOnInit() {}

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.debugCmp.displaySubmit(form.value);
    } else {
      alert('Form not valid');
    }
  }
}
