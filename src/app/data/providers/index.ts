import { InjectionToken } from '@angular/core';
import { DatabaseItem } from '@app/core/models';
import { AppConfigService, DatabaseService } from '@app/core/services';
import { DataService } from '../services';

/**
 * Injection token of DataService to which to create collection has to be called.
 */
export const DataServices = new InjectionToken<DataService<DatabaseItem>[]>('dataServices');

/**
 * Returns an array of all data services that will be used as a dependency to initializer.
 * @param services array of data services
 */
export function dataServicesFactory(...services: DataService<DatabaseItem>[]): DataService<DatabaseItem>[] {
  return services;
}

/**
 * Returns an initializer factory that call create collection for all provided data services.
 * @param appConfigService application configuration service
 * @param databaseService database service
 * @param dataServices array of data services
 * @returns data services initializer factory
 */
export function dataServicesInitializer(
  appConfigService: AppConfigService,
  databaseService: DatabaseService,
  dataServices: DataService<DatabaseItem>[],
): () => Promise<void> {
  return () =>
    Promise.all([appConfigService.isLoaded$, databaseService.isLoaded$]).then(() =>
      Promise.all(
        dataServices.map((dataService) => {
          return dataService.createCollection();
        }),
      )
        .then(() => Promise.resolve())
        .catch((err) => Promise.reject(err)),
    );
}
