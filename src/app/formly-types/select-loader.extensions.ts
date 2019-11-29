import { FormlyExtension, FormlyFieldConfig } from "@ngx-formly/core";
import { isObservable, of, concat, Observable } from "rxjs";
import { tap, delay, map, filter, shareReplay, finalize } from "rxjs/operators";

interface LoadingStatus {
  result: any[];
  loading: boolean;
}

/**
 * Adds an additional CSS class to the hidden (display:none) fields
 * of formly. In that way we have some greater flexibility in defining
 * the flex grid.
 */
export const selectLoadingIndicatorExtension: FormlyExtension = {
  prePopulate(field: FormlyFieldConfig) {
    if (field.type === "select") {
      field.hooks = field.hooks || {};
      const currentOnInit = field.hooks.onInit;
      const currentClassName = field.className || "";

      field.hooks.onInit = (formlyField: FormlyFieldConfig) => {
        if (currentOnInit) {
          currentOnInit(formlyField);
        }

        if (isObservable(formlyField.templateOptions.options)) {
          formlyField.className += " formly-loader";
          formlyField.templateOptions.options = formlyField.templateOptions.options.pipe(
            tap({
              next: (x: any) => {
                formlyField.className = currentClassName;
              },
              error: () => {
                formlyField.className = currentClassName;
              }
            }),
            finalize(() => {
              formlyField.className = currentClassName;
            })
          );
        }
      };
    }

    if (field.lifecycle && field.lifecycle.prePopulate) {
      field.lifecycle.prePopulate(field);
    }
  }
};
