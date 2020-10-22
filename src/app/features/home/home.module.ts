import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components';
import { HomeContainerComponent } from './containers';
import { HomeRoutingModule } from './home-routing.module';

/**
 * Home module.
 */
@NgModule({
  declarations: [HomeComponent, HomeContainerComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
