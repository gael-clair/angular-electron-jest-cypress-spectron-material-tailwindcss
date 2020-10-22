import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '@app/env';
import { routes } from './app.routes';

/**
 * Global application routing module.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: environment.production,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
