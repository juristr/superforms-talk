import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatTabsModule
} from '@angular/material';
import { DebugComponent } from './debug/debug.component';

const sharedStuff = [
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatTabsModule
];

@NgModule({
  imports: [CommonModule, ...sharedStuff],
  declarations: [DebugComponent],
  exports: [...sharedStuff, DebugComponent]
})
export class SharedModule {}
