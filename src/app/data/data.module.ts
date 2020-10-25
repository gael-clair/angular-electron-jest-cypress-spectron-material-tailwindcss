import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppConfigService, DatabaseService } from '@app/core/services';
import { DataServices, dataServicesFactory, dataServicesInitializer } from './providers';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: dataServicesInitializer,
      deps: [AppConfigService, DatabaseService, DataServices],
      multi: true,
    },
    {
      provide: DataServices,
      useFactory: dataServicesFactory,
      deps: [], // add data service for which to create collection
    },
  ],
})
export class DataModule {}
