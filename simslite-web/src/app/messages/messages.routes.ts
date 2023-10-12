import { Routes } from '@angular/router';

export const MESSAGES_ROUTES: Routes = [
  {
    path: 'inbox',
    loadComponent: () => import('./inbox/inbox.component').then((m) => m.InboxComponent),
  },
  {
    path: '',
    redirectTo: 'inbox',
    pathMatch: 'full',
  },
];
