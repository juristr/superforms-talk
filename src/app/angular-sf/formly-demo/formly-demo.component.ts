import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { startWith, switchMap } from 'rxjs/operators';
import { CityService } from '../../services/city.service';
import { DebugComponent } from '../../shared/debug/debug.component';

@Component({
  selector: 'app-formly-demo',
  templateUrl: './formly-demo.component.html'
})
export class FormlyDemoComponent implements OnInit {
  @ViewChild(DebugComponent, { static: true })
  debugCmp: DebugComponent;

  form = new FormGroup({});
  model: any = {
    id: 1223,
    firstname: 'Juri',
    age: 33,
    nationId: 1,
    cityId: 1,
    zipCode: 39100,
    phoneNumbers: [{ contactTypeId: 1, number: '' }]
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'input',
      templateOptions: {
        label: 'Firstname',
        required: true
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        label: 'Age',
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
        options: this.cityService.getCities()
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
            .subscribe(cities => {
              field.templateOptions.options = cities;
            });
        }
      }
    },
    {
      key: 'phoneNumbers',
      type: 'repeat',
      fieldArray: {
        fieldGroup: [
          {
            key: 'contactTypeId',
            type: 'select',
            templateOptions: {
              label: 'Type',
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
