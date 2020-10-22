import { InjectionToken } from '@angular/core';
import { isElectron } from '@app/shared/utils';
import {
  AppConfigService,
  BrowserDatabaseService,
  BrowserLoggerService,
  DatabaseService,
  ElectronDatabaseService,
  ElectronLoggerService,
  LoggerService,
} from '../services';

/**
 * Returns a configured application initializer factory that loads global configuration and call all provided init methods.
 * @param appConfigService application configuration service
 * @param configDeps array of init methods
 * @returns application initializer factory
 */
export function appConfigInitializer(
  appConfigService: AppConfigService,
  configDeps: (() => () => any)[],
): () => Promise<void> {
  return () =>
    appConfigService
      .loadAppConfig()
      .then(() => Promise.all(configDeps.map((dep) => dep())))
      .then(() => Promise.resolve())
      .catch((err) => Promise.reject(err));
}

/**
 * Returns a database service initializer factory that inits database.
 * @param databaseService database service
 * @returns database service initializer
 */
export function initDatabaseFactory(databaseService: DatabaseService): () => Promise<void> {
  return async () => {
    if (databaseService instanceof BrowserDatabaseService) {
      return databaseService.init();
    }
  };
}

/**
 * Returns an instance of adapted database service (browser or Electron) depending on current execution environment.
 * @param appConfigService application configuration service
 * @returns database service
 */
export function databaseServiceFactory(appConfigService: AppConfigService): DatabaseService {
  return isElectron() ? new ElectronDatabaseService() : new BrowserDatabaseService(appConfigService);
}

/**
 * Returns an instance of adapted logger service (browser or Electron) depending on current execution environment.
 * @param appConfigService application configuration service
 * @returns logger service
 */
export function loggerServiceFactory(appConfigService: AppConfigService): LoggerService {
  return isElectron() ? new ElectronLoggerService() : new BrowserLoggerService(appConfigService);
}

/**
 * Injection token of initialization array dependencies.
 */
export const ConfigDeps = new InjectionToken<(() => () => void)[]>('configDeps');
