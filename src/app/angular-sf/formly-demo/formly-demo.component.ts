import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyField } from '@ngx-formly/core';
import { DebugComponent } from '../../shared/debug/debug.component';
import { of } from 'rxjs';
import { CityService } from '../../services/city.service';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-formly-demo',
  templateUrl: './formly-demo.component.html'
})
export class FormlyDemoComponent implements OnInit {
  @ViewChild(DebugComponent)
  debugCmp: DebugComponent;

  form = new FormGroup({});
  model: any = {
    id: 1223,
    firstname: 'Juri',
    age: 33,
    nationId: 3,
    cityId: 1,
    zipCode: 39100,
    phoneNumbers: [{ contactTypeId: 1, number: '' }]
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'input',
      templateOptions: {
        label: 'Firstname'
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        label: 'Age',
        type: 'number'
      }
    },
    {
      key: 'nationId',
      type: 'select',
      templateOptions: {
        label: 'Nation',
        options: this.cityService.getNations()
      }
    },
    {
      key: 'cityId',
      type: 'select',
      templateOptions: {
        label: 'City',
        options: []
      },
      expressionProperties: {
        'templateOptions.disabled': model => !model.nationId
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          field.form
            .get('nationId')
            .valueChanges.pipe(
              startWith(this.model.nationId),
              switchMap(nationId => this.cityService.getCities(nationId))
            )
            .subscribe(data => {
              field.templateOptions.options = data;
            });
        }
      }
    },
    {
      key: 'phoneNumbers',
      type: 'repeat',
      className: 'js-contacts',
      fieldArray: {
        className: 'js-array',
        templateOptions: {
          btnText: 'Add another investment'
        },
        fieldGroup: [
          {
            key: 'contactTypeId',
            type: 'select',
            templateOptions: {
              label: '',
              options: [
                {
                  value: 1,
                  label: 'Private'
                },
                {
                  value: 2,
                  label: 'Work'
                }
              ]
            }
          },
          {
            key: 'number',
            type: 'input',
            className: 'js-group',
            templateOptions: {
              label: 'Number'
            }
          }
        ]
      }
    }
  ];

  constructor(private cityService: CityService) {}

  ngOnInit() {}

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.debugCmp.displaySubmit(form.value);
    } else {
      alert('Form not valid');
    }
  }
}
