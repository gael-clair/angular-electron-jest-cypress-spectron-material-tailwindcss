import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';

/**
 * Home module routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
