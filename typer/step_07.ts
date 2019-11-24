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
  @ViewChild(DebugComponent, { static: true })
  debugCmp: DebugComponent;

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
        type: "number"
      }
    },
    {
      key: "nationId",
      type: "select",
      templateOptions: {
        label: "Nation",
        options: [
          {
            value: 1,
            label: "Italy"
          },
          {
            value: 2,
            label: "Germany"
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
      alert("Form not valid");
    }
  }
}
