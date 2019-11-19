import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DebugComponent } from '../../shared/debug/debug.component';
import { of, Observable, Subject } from 'rxjs';
import { map, tap, filter, takeUntil } from 'rxjs/operators';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-cascading-selects',
  templateUrl: './cascading-selects.component.html'
})
export class CascadingSelectsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  @ViewChild(DebugComponent, { static: true }) debugCmp: DebugComponent;

  nations$ = this.cityService.getNations();
  cities$ = this.cityService.getCities();

  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'nationId',
      type: 'select',
      templateOptions: {
        label: 'Nation',
        options: this.nations$
      }
    },
    {
      key: 'cityId',
      type: 'select',
      templateOptions: {
        label: 'city'
      },
      expressionProperties: {
        'templateOptions.disabled': (model, formState) => !model.nationId
      },
      hooks: {
        onInit: field => {
          field.form
            .get('nationId')
            .valueChanges.pipe(
              tap(nationId => {
                field.formControl.setValue(null);
                field.templateOptions.options = this.cities$.pipe(
                  map(cities => cities.filter(x => x.nationId === nationId))
                );
              }),
              takeUntil(this.destroy$)
            )
            .subscribe();
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
      alert('Form not valid');
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
