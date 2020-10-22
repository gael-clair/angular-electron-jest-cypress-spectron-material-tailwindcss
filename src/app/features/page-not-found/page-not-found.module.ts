import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

/**
 * PageNotFound module.
 * Used to display 404 page.
 */
@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, PageNotFoundRoutingModule],
})
export class PageNotFoundModule {}
