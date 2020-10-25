import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core';
import { DataModule } from '@app/data';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Application module.
 */
@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule.forRoot(), DataModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
