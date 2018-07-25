import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  navLinks = [
    {
      label: 'Template Driven',
      path: '/angularforms/template'
    },
    {
      label: 'Reactive',
      path: '/angularforms/reactive'
    },
    {
      label: 'Simple Dyn',
      path: '/homemade-dynamic/simple'
    },
    {
      label: 'Dyn Person Form',
      path: '/homemade-dynamic/dyn-person-form'
    }
    {
      label: 'Basics - Person Simple',
      path: '/formly-basics/person-simple'
    }
  ];
}
