import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styles: []
})
export class AutocompleteComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'cityId',
      type: 'my-autocomplete',
      templateOptions: {
        label: 'City',
        options: this.cityService.getCities()
      }
    }
  ];

  constructor(private cityService: CityService) {}

  ngOnInit() {}
}
