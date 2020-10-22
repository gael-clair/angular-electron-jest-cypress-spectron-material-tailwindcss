import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ErrorHandler,
  ModuleWithProviders,
  NgModule,
  Optional,
  Provider,
  SkipSelf,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { throwIfAlreadyLoaded } from './guards';
import {
  appConfigInitializer,
  ConfigDeps,
  databaseServiceFactory,
  initDatabaseFactory,
  loggerServiceFactory,
} from './providers';
import { AppConfigService, DatabaseService, GlobalErrorHandler, LoggerService } from './services';

/**
 * Configuration options for CoreModule.
 */
interface CoreOptions {
  /**
   * Flag to activate or not database service in app.
   */
  database?: boolean;

  /**
   * Flag to activate or not logger service in app.
   */
  logger?: boolean;
}

/**
 * Core module.
 */
@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, HttpClientModule],
  exports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
})
export class CoreModule {
  /**
   * Constructor.
   * @param parentModule parent module
   * @throws error if another instance already exists (imported more than once).
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(options?: CoreOptions): ModuleWithProviders<CoreModule> {
    const providers: Provider = [
      {
        provide: APP_INITIALIZER,
        useFactory: appConfigInitializer,
        deps: [AppConfigService, ConfigDeps],
        multi: true,
      },
      {
        provide: ErrorHandler,
        useClass: GlobalErrorHandler,
      },
    ];

    if (!options || (options && options.database !== false)) {
      providers.push(
        {
          provide: ConfigDeps,
          useFactory: (databaseService: DatabaseService) => [initDatabaseFactory(databaseService)],
          deps: [DatabaseService],
        },
        {
          provide: DatabaseService,
          useFactory: databaseServiceFactory,
          deps: [AppConfigService],
        },
      );
    }

    if (!options || (options && options.logger !== false)) {
      providers.push({
        provide: LoggerService,
        useFactory: loggerServiceFactory,
        deps: [AppConfigService],
      });
    }

    return {
      ngModule: CoreModule,
      providers,
    };
  }
}
