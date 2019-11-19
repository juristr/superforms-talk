import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DebugComponent } from '../../shared/debug/debug.component';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-expression-props',
  templateUrl: './expression-props.component.html'
})
export class ExpressionPropsComponent implements OnInit {
  @ViewChild(DebugComponent, { static: true }) debugCmp: DebugComponent;

  form = new FormGroup({});
  model: any = {
    id: 1223,
    firstname: 'Juri',
    twitter: '@juristr',
    cityId: 1
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
      key: 'surname',
      type: 'input',
      templateOptions: {
        label: 'Surname'
      }
    },
    {
      key: 'cityId',
      type: 'select',
      templateOptions: {
        label: 'city',
        options: this.cityService.getCities()
      }
    },
    {
      key: 'zipCode',
      type: 'input',
      templateOptions: {
        label: 'ZipCode'
      },
      expressionProperties: {
        // 'templateOptions.disabled': '!model.cityId'
        'templateOptions.disabled': (model, formState) => !model.cityId
      },
      lifecycle: {
        onInit: (form, field, model) => {
          form.get('cityId').valueChanges.subscribe(x => {
            if (x === null) {
              field.formControl.setValue(null);
            }
          });
        }
      }
    },
    {
      template: `<p><strong>Awesome</strong>, thanks for choosing your city!</p>`,
      hideExpression: model => !model.cityId
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
