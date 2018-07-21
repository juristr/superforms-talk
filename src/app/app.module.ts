import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateformModule } from './templateform/templateform.module';
import { SharedModule } from './shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    TemplateformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
