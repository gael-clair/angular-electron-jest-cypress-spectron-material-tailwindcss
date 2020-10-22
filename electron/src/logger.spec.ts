// tslint:disable:no-unused-expression

import { ipcMain } from 'electron';
import log from 'electron-log';
import { EVENTS } from './events';
import { IpcMainLogger, Logger, LoggerFactory } from './logger';
import Mock = jest.Mock;

describe('LoggerFactory', () => {
  beforeEach(() => {
    (ipcMain.eventNames as Mock).mockReturnValue([]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return an instance of Logger', () => {
    expect(LoggerFactory.getLogger('test')).toBeInstanceOf(Logger);
  });

  it('should return an instance of IpcMainLogger', () => {
    expect(LoggerFactory.registerMainLogger()).toBeInstanceOf(IpcMainLogger);
  });
});

describe('IpcMainLogger', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should register handler on IpcMain for log events', () => {
    new IpcMainLogger();
    (ipcMain.eventNames as Mock).mockReturnValue([]);
    expect(ipcMain.on).toHaveBeenCalledWith(EVENTS.LOGGER.IN.LOG_MESSAGE, expect.anything());
  });

  it('should not register handler on IpcMain for log events if already registered', () => {
    (ipcMain.eventNames as Mock).mockReturnValueOnce([]).mockReturnValueOnce([EVENTS.LOGGER.IN.LOG_MESSAGE]);
    new IpcMainLogger();
    new IpcMainLogger();
    expect(ipcMain.on).toHaveBeenCalledTimes(1);
  });
});

describe('Logger', () => {
  let service: Logger;

  beforeEach(() => {
    service = new Logger('test');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#error()', () => {
    it('should log message at error level with logger context', () => {
      service.error('test');
      expect((log.error as Mock).mock.calls[0][0]).toBe('[test]');
    });
  });

  describe('#warn()', () => {
    it('should log message at warn level with logger context', () => {
      service.warn('test');
      expect((log.warn as Mock).mock.calls[0][0]).toBe('[test]');
    });
  });

  describe('#info()', () => {
    it('should log message at info level with logger context', () => {
      service.info('test');
      expect((log.info as Mock).mock.calls[0][0]).toBe('[test]');
    });
  });

  describe('#debug()', () => {
    it('should log message at debug level with logger context', () => {
      service.debug('test');
      expect((log.debug as Mock).mock.calls[0][0]).toBe('[test]');
    });
  });

  describe('#verbose()', () => {
    it('should log message at verbose level with logger context', () => {
      service.verbose('test');
      expect((log.verbose as Mock).mock.calls[0][0]).toBe('[test]');
    });
  });
});
