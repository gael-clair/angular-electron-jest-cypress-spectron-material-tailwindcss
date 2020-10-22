import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

/**
 * Electron Logger service.
 * Sends all log messages to Electron to be able to log into a file and console.
 */
@Injectable()
export class ElectronLoggerService extends LoggerService {
  private readonly eventsApi = window.eventsApi;
  private readonly events = window.eventsApi.EVENTS.LOGGER;

  constructor() {
    super();
  }

  /**
   * @inheritDoc
   */
  error(...args): void {
    this.eventsApi.send(this.events.IN.LOG_MESSAGE, 'error', ...args);
  }

  /**
   * @inheritDoc
   */
  warn(...args): void {
    this.eventsApi.send(this.events.IN.LOG_MESSAGE, 'warn', ...args);
  }

  /**
   * @inheritDoc
   */
  info(...args): void {
    this.eventsApi.send(this.events.IN.LOG_MESSAGE, 'info', ...args);
  }

  /**
   * @inheritDoc
   */
  verbose(...args): void {
    this.eventsApi.send(this.events.IN.LOG_MESSAGE, 'verbose', ...args);
  }

  /**
   * @inheritDoc
   */
  debug(...args): void {
    this.eventsApi.send(this.events.IN.LOG_MESSAGE, 'debug', ...args);
  }

  /**
   * @inheritDoc
   */
  silly(...args): void {
    this.eventsApi.send(this.events.IN.LOG_MESSAGE, 'silly', ...args);
  }
}
