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
  @ViewChild(DebugComponent, { static: true }) debugCmp: DebugComponent;

  cities$ = of([
    {
      value: null,
      label: ' -- '
    },
    {
      value: 1,
      label: 'Bolzano'
    },
    {
      value: 2,
      label: 'Berlin'
    },
    {
      value: 3,
      label: 'San Francisco'
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
    },
    {
      key: 'zipCode',
      type: 'input',
      templateOptions: {
        label: 'Zip Code'
      },
      expressionProperties: {
        'templateOptions.required': model => !!model.cityId
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
