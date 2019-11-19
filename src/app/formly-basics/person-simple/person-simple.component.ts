import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DebugComponent } from '../../shared/debug/debug.component';
import { of } from 'rxjs';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-person-simple',
  templateUrl: './person-simple.component.html'
})
export class PersonSimpleComponent implements OnInit {
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
      key: 'twitter',
      type: 'input',
      templateOptions: {
        label: 'Twitter'
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        label: 'age',
        type: 'number'
      }
    },
    {
      key: 'cityId',
      type: 'select',
      templateOptions: {
        label: 'city',
        options: this.cityService.getCities()
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
