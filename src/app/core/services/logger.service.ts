/**
 * Base logging service.
 * Abstract class is used instead of an interface so it can be used as by a provider.
 */
export abstract class LoggerService {
  /**
   * Logs message at error level.
   * @param args data to log
   */
  abstract error(...args): void;

  /**
   * Logs message at warn level.
   * @param args data to log
   */
  abstract warn(...args): void;

  /**
   * Logs message at info level.
   * @param args data to log
   */
  abstract info(...args): void;

  /**
   * Logs message at verbose level.
   * @param args data to log
   */
  abstract verbose(...args): void;

  /**
   * Logs message at debug level.
   * @param args data to log
   */
  abstract debug(...args): void;

  /**
   * Logs message at silly level.
   * @param args data to log
   */
  abstract silly(...args): void;
}
