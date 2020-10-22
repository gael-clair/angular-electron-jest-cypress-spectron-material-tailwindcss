import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './page-not-found.routes';

/**
 * PageNotFound module routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNotFoundRoutingModule {}
