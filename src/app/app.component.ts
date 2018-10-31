import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  navLinks = [
    {
      label: 'Angular Forms',
      path: '/angularforms'
    },
    {
      label: 'Homemade Dyn',
      path: '/homemade-dynamic'
    },
    {
      label: 'Formly Basics',
      path: '/formly-basics'
    },
    {
      label: 'Formly Adv',
      path: '/formly-advanced'
    },
    {
      label: 'Angular SF',
      path: '/angular-sf'
    }
  ];
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
