import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { startWith, switchMap } from "rxjs/operators";
import { CityService } from "../../services/city.service";
import { DebugComponent } from "../../shared/debug/debug.component";

@Component({
  selector: "app-formly-demo",
  templateUrl: "./formly-demo.component.html"
})
export class FormlyDemoComponent implements OnInit {
  @ViewChild(DebugComponent, { static: true }) debugCmp: DebugComponent;

  form = new FormGroup({});
  model: any = {
    id: 1223,
    firstname: "Juri",
    age: 33,
    nationId: 1,
    cityId: 1,
    zipCode: 39100,
    phoneNumbers: [{ contactTypeId: 1, number: "" }]
  };

  fields: FormlyFieldConfig[] = [
    {
      key: "firstname",
      type: "input",
      templateOptions: {
        label: "Firstname",
        required: true
      }
    },
    {
      key: "age",
      type: "input",
      templateOptions: {
        label: "Age",
        type: "number",
        min: 18
      },
      validation: {
        messages: {
          min: "Sorry, you have to be of legal age."
        }
      }
    },
    {
      key: "nationId",
      type: "my-autocomplete",
      templateOptions: {
        label: "Nation",
        options: this.cityService.getNations()
      }
    },
    {
      key: "cityId",
      type: "select",
      templateOptions: {
        label: "City",
        options: []
      },
      expressionProperties: {
        "templateOptions.disabled": model => !model.nationId,
        "model.cityId": "!model.nationId ? null : model.cityId"
      },
      hideExpression: model => !model.nationId,
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          field.templateOptions.options = field.form
            .get("nationId")
            .valueChanges.pipe(
              startWith(this.model.nationId),
              switchMap(nationId => this.cityService.getCities(nationId))
            );
        }
      }
    }
  ];

  constructor(private cityService: CityService) {}

  ngOnInit() {}

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.debugCmp.displaySubmit(form.value);
    } else {
      alert("Form not valid");
    }
  }
}
