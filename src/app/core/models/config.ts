import { Environment } from '@app/types';

/**
 * Database configuration.
 */
export interface DatabaseConfig {
  /**
   * Database name.
   */
  name: string;
}

/**
 * Logging configuration.
 */
export interface LoggingConfig {
  /**
   * Format of time in message.
   */
  timestampFormat: string;

  /**
   * Log level color in console.
   */
  colorScheme: {
    DEBUG: 'teal';
    INFO: 'blue';
    WARN: 'blueviolet';
    ERROR: 'red';
  };

  /**
   * Possible levels of logging.
   */
  levels: string[];
}

/**
 * Application configuration.
 */
export interface AppConfig {
  /**
   * Environment configuration.
   */
  environment: Environment;

  /**
   * Database configuration.
   */
  database: DatabaseConfig;

  /**
   * Logging configuration.
   */
  logging: LoggingConfig;
}
