import { Route } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { DetailedComponent } from './detailed/detailed.component';

export const INVOICE_ROUTES: Route[] = [
  {
    path: 'simple',
    component: SimpleComponent,
  },
  {
    path: 'detailed',
    component: DetailedComponent
  },
  {
    path: '',
    redirectTo: 'simple',
    pathMatch: 'full',
  }
];
