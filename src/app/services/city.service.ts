import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface City {
  value: number;
  label: string;
  nationId: number;
}

@Injectable({
  providedIn: 'root'
})
export class CityService {
  getNations() {
    return of([
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
  }

  getCities(nationId: number = null): Observable<City[]> {
    return of(<City[]>[
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
    ].filter(entry => {
      if (nationId) {
        return entry.nationId === nationId;
      } else {
        return true;
      }
    }));
  }
}
