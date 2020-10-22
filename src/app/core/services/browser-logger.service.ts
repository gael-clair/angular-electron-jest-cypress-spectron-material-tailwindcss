import { Injectable } from '@angular/core';
import moment from 'moment';
import { AppConfigService } from './app-config.service';
import { LoggerService } from './logger.service';

/**
 * Logger service.
 * Logs message in browser console.
 */
@Injectable()
export class BrowserLoggerService extends LoggerService {
  constructor(private appConfigService: AppConfigService) {
    super();
  }

  /**
   * @inheritDoc
   */
  error(...args): void {
    this.logInternal('error', ...args);
  }

  /**
   * @inheritDoc
   */
  warn(...args): void {
    this.logInternal('warn', ...args);
  }

  /**
   * @inheritDoc
   */
  info(...args): void {
    this.logInternal('info', ...args);
  }

  /**
   * @inheritDoc
   */
  debug(...args): void {
    this.logInternal('debug', ...args);
  }

  /**
   * @inheritDoc
   */
  verbose(...args): void {
    this.logInternal('verbose', ...args);
  }

  /**
   * @inheritDoc
   */
  silly(...args): void {
    this.logInternal('silly', ...args);
  }

  /**
   * Builds a log message, adding timestamp, level and color.
   * @param level log level
   * @returns final log message
   */
  private prepareMessage(level: string): string[] {
    return [
      `%c${moment().format(this.appConfigService.logging.timestampFormat)} [${level.toLowerCase()}]`,
      `color: ${this.appConfigService.logging.colorScheme[level]}`,
    ];
  }

  /**
   * Checks if log message could be logged against current minimal log level, if true logs message in console.
   * @param level log message level
   * @param args data to log
   */
  private logInternal(level: LogLevel, ...args): void {
    if (
      this.appConfigService.logging.levels.indexOf(level) >=
      this.appConfigService.logging.levels.indexOf(this.appConfigService.environment.logLevel)
    ) {
      console[level === 'error' ? 'error' : 'log'](...this.prepareMessage(level), ...args);
    }
  }
}
