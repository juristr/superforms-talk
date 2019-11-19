import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { City, CityService } from '../../services/city.service';
import { FormlyService } from '../../services/formly.service';
import { DebugComponent } from '../../shared/debug/debug.component';

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
    this.formly.input({
      key: 'firstname',
      label: 'Firstname'
    }),
    this.formly.input({
      key: 'surname',
      label: 'Surname'
    }),
    this.formly.number({
      key: 'age',
      label: 'Age'
    }),
    this.formly.select({
      key: 'cityId',
      label: 'City',
      data: this.cityService.getCities()
    })
  ];

  constructor(
    private cityService: CityService,
    private formly: FormlyService
  ) {}

  ngOnInit() {}

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.debugCmp.displaySubmit(form.value);
    } else {
      alert('Form not valid');
    }
  }
}
