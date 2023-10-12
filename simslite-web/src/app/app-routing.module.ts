import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'data-table',
        loadComponent: () => import('./data-table/data-table.component').then((m) =>
          m.DataTableComponent),
      },
      {
        path: 'transactions',
        loadComponent: () => import('./transactions/transactions.component').then((m) =>
          m.TransactionsComponent),
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('./invoice/invoice.routes').then((m) => m.INVOICE_ROUTES),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('./messages/messages.routes').then((m) => m.MESSAGES_ROUTES),
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component').then((m) => m.AuthComponent),
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
