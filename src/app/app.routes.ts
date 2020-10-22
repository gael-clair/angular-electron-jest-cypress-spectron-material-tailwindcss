import { Routes } from '@angular/router';

/**
 * Applications global routes.
 */
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/features/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => import('@app/features/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
    pathMatch: 'full',
  },
];
