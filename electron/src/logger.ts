import { ipcMain, IpcMainEvent } from 'electron';
import log from 'electron-log';
import { EVENTS } from './events';

// Transports logging format
log.transports.console.format = '[{d}-{m}-{y} {h}:{i}:{s}.{ms}] [{level}] {text}';
log.transports.file.format = '[{d}-{m}-{y} {h}:{i}:{s}.{ms}] [{level}] {text}';

/**
 * Base logger adding context in log message.
 */
export class Logger {
  constructor(private context: string) {}

  /**
   * Logs context and data at error level.
   * @param data data to log
   */
  error(...data: any[]): void {
    log.error(`[${this.context}]`, ...data);
  }

  /**
   * Logs context and data at warn level.
   * @param data data to log
   */
  warn(...data: any[]): void {
    log.warn(`[${this.context}]`, ...data);
  }

  /**
   * Logs context and data at info level.
   * @param data data to log
   */
  info(...data: any[]): void {
    log.info(`[${this.context}]`, ...data);
  }

  /**
   * Logs context and data at debug level.
   * @param data data to log
   */
  debug(...data: any[]): void {
    log.debug(`[${this.context}]`, ...data);
  }

  /**
   * Logs context and data at verbose level.
   * @param data data to log
   */
  verbose(...data: any[]): void {
    log.verbose(`[${this.context}]`, ...data);
  }
}

/**
 * Logger handling logging events on IpcMain.
 */
export class IpcMainLogger extends Logger {
  constructor() {
    super('IpcMainLogger');

    // checks if handler already added before adding it
    if (!ipcMain.eventNames().includes(EVENTS.LOGGER.IN.LOG_MESSAGE)) {
      // add handler
      ipcMain.on(EVENTS.LOGGER.IN.LOG_MESSAGE, (event: IpcMainEvent, level: LogLevel, ...data: any[]): void => {
        this[level](...data);
      });
      // to log all uncatched errors
      log.catchErrors();
    }
  }
}

/**
 * Factory to get contextualized logger.
 */
export class LoggerFactory {
  static getLogger(context: string): Logger {
    return new Logger(context);
  }

  static registerMainLogger(): IpcMainLogger {
    return new IpcMainLogger();
  }
}
