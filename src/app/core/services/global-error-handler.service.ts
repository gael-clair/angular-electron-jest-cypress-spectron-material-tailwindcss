import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggerService } from './logger.service';

/**
 * Global error handler.
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  /**
   * Returns an instance of GlobalErrorHandler.
   * @param injector dependencies injector
   */
  constructor(private readonly injector: Injector) {}

  /**
   * Returns an instance of LoggerService.
   */
  private get loggerService(): LoggerService {
    return this.injector.get(LoggerService);
  }

  /**
   * Handles an error
   * @param error error to handle
   */
  handleError(error: any): void {
    this.loggerService.error(error);
  }
}
