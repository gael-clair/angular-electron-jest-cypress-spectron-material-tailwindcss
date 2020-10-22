import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/env';
import { Environment } from '@app/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConfig, DatabaseConfig, LoggingConfig } from '../models';

/**
 * Application configuration service.
 * Configuration is loaded from a JSON in assets folder and environment file.
 */
@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private loaded = new BehaviorSubject(false);
  private appConfig: AppConfig;

  constructor(private http: HttpClient) {
    this.appConfig = {
      database: undefined,
      logging: undefined,
      environment,
    };
  }

  /**
   * Loads application configuration from JSON in assets folder.
   */
  loadAppConfig(): Promise<void> {
    return this.http
      .get('./assets/app.config.json')
      .toPromise()
      .then((data: AppConfig) => {
        this.appConfig = {
          ...this.appConfig,
          ...data,
        };
        this.loaded.next(true);
      });
  }

  /**
   * Application config.
   */
  get config(): AppConfig {
    return this.appConfig;
  }

  /**
   * Database configuration.
   */
  get database(): DatabaseConfig {
    return this.appConfig.database;
  }

  /**
   * Logging configuration.
   */
  get logging(): LoggingConfig {
    return this.appConfig.logging;
  }

  /**
   * Angular environment.
   */
  get environment(): Environment {
    return this.appConfig.environment;
  }

  /**
   * Observable on loading state. Emits true when configuration is loaded.
   */
  get loaded$(): Observable<boolean> {
    return this.loaded.asObservable();
  }
}
