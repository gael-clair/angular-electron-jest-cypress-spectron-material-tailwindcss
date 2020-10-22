/**
 * Angular environment.
 */
export interface Environment {
  /**
   * Flag indicating if current environment is production.
   */
  production: boolean;

  /**
   * Minimal log level.
   */
  logLevel: LogLevel;
}

/**
 * Error thrown during business treatment.
 * Should be catch.
 */
export class BusinessError extends Error {
  constructor(message: string) {
    super(message);
  }
}

/**
 * Error thrown in unexpected situations.
 * Should not be catch except in global error handler.
 */
export class TechnicalError extends Error {
  constructor(message: string) {
    super(message);
  }
}
