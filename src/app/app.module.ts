import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { NgSelectFormlyComponent } from './formly-types/ng-select.type';
import { RepeatTypeComponent } from './formly-types/repeat-section.type';

@NgModule({
  declarations: [AppComponent, NgSelectFormlyComponent, RepeatTypeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' }
      ],
      types: [
        {
          name: 'my-autocomplete',
          component: NgSelectFormlyComponent
        },
        {
          name: 'repeat',
          component: RepeatTypeComponent
        }
      ]
    }),
    FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
