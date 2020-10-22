import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Application module.
 */
@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
