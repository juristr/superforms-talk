import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatTabsModule,
  MatExpansionModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatListModule
} from '@angular/material';
import { DebugComponent } from './debug/debug.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

const sharedStuff = [
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatTabsModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatExpansionModule,
  ReactiveFormsModule,
  FormlyModule,
  RouterModule,
  NgSelectModule
];

@NgModule({
  imports: [CommonModule, ...sharedStuff],
  declarations: [DebugComponent],
  exports: [...sharedStuff, DebugComponent]
})
export class SharedModule {}
