import { Routes } from '@angular/router';
import { HomeContainerComponent } from './containers';

/**
 * Home module routes.
 * Used to display home page.
 */
export const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
];
