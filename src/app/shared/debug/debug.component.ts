import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  template: `
    <mat-card>
      <mat-card-subtitle>
        Debug
      </mat-card-subtitle>
      <mat-card-content>
        <mat-tab-group>
          <mat-tab label="Form">
            <pre>{{ form | json }}</pre>
          </mat-tab>
          <mat-tab label="Model">
            <pre>{{ model | json }}</pre>
          </mat-tab>
        </mat-tab-group>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      :host {
        margin: 20px;
      }
    `
  ]
})
export class DebugComponent implements OnInit {
  @Input() form;
  @Input() model;

  constructor() {}

  ngOnInit() {}
}
