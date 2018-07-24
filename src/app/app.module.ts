import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularformsModule } from './angularforms/angularforms.module';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { HomemadeDynamicModule } from './homemade-dynamic/homemade-dynamic.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularformsModule,
    HomemadeDynamicModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
