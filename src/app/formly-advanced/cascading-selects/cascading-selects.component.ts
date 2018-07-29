import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DebugComponent } from '../../shared/debug/debug.component';
import { of, Observable, Subject } from 'rxjs';
import { map, tap, filter, takeUntil } from 'rxjs/operators';

interface City {
  value: number;
  label: string;
  nationId: number;
}

@Component({
  selector: 'app-cascading-selects',
  templateUrl: './cascading-selects.component.html'
})
export class CascadingSelectsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  @ViewChild(DebugComponent) debugCmp: DebugComponent;

  nations$ = of([
    {
      value: null,
      label: ' -- '
    },
    {
      value: 1,
      label: 'Italy'
    },
    {
      value: 2,
      label: 'Germany'
    },
    {
      value: 3,
      label: 'U.S.'
    }
  ]);

  cities$: Observable<City[]> = of([
    {
      value: null,
      label: ' -- ',
      nationId: null
    },
    {
      value: 1,
      label: 'Bolzano',
      nationId: 1
    },
    {
      value: 12,
      label: 'Rome',
      nationId: 1
    },
    {
      value: 2,
      label: 'Berlin',
      nationId: 2
    },
    {
      value: 21,
      label: 'Munich',
      nationId: 2
    },
    {
      value: 3,
      label: 'San Francisco',
      nationId: 3
    }
  ]);

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
      lifecycle: {
        onInit: (form, field, model) => {
          form
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

  constructor() {}

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
