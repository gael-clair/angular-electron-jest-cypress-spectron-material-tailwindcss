import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { mockGetter } from '@test/utils';
import { AppConfigService } from './app-config.service';
import { BrowserLoggerService } from './browser-logger.service';

jest.mock('./app-config.service');

describe('BrowserLoggerService', () => {
  let service: BrowserLoggerService;
  let appConfigService: AppConfigService;

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'log').mockImplementation(() => {});

    TestBed.configureTestingModule({
      providers: [AppConfigService, DatePipe, BrowserLoggerService],
    });
    appConfigService = TestBed.inject(AppConfigService);
    mockGetter(appConfigService, 'logging', {
      timestampFormat: 'yyyy-MM-dd HH:mm:ss',
      colorScheme: {
        DEBUG: 'teal',
        INFO: 'blue',
        WARN: 'blueviolet',
        ERROR: 'red',
      },
      levels: ['silly', 'verbose', 'debug', 'info', 'warn', 'error', 'silent'],
    });
    service = TestBed.inject(BrowserLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#error()', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should log message when log level is silly', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silly',
      });
      service.error('msg');
      expect(console.error).toHaveBeenCalled();
    });

    it('should log message when log level is verbose', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'verbose',
      });
      service.error('msg');
      expect(console.error).toHaveBeenCalled();
    });

    it('should log message when log level is debug', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'debug',
      });
      service.error('msg');
      expect(console.error).toHaveBeenCalled();
    });

    it('should log message when log level is info', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'info',
      });
      service.error('msg');
      expect(console.error).toHaveBeenCalled();
    });

    it('should log message when log level is warn', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'warn',
      });
      service.error('msg');
      expect(console.error).toHaveBeenCalled();
    });

    it('should log message when log level is error', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'error',
      });
      service.error('msg');
      expect(console.error).toHaveBeenCalled();
    });

    it('should not log message when log level is silent', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silent',
      });
      service.error('msg');
      expect(console.error).not.toHaveBeenCalled();
    });
  });

  describe('#warn()', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should log message when log level is silly', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silly',
      });
      service.warn('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should log message when log level is verbose', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'verbose',
      });
      service.warn('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should log message when log level is debug', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'debug',
      });
      service.warn('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should log message when log level is info', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'info',
      });
      service.warn('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should log message when log level is warn', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'warn',
      });
      service.warn('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should not log message when log level is error', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'error',
      });
      service.warn('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is silent', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silent',
      });
      service.warn('msg');
      expect(console.log).not.toHaveBeenCalled();
    });
  });

  describe('#info()', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should log message when log level is silly', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silly',
      });
      service.info('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should log message when log level is verbose', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'verbose',
      });
      service.info('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should log message when log level is debug', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'debug',
      });
      service.info('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should log message when log level is info', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'info',
      });
      service.info('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should not log message when log level is warn', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'warn',
      });
      service.info('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is error', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'error',
      });
      service.info('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is silent', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silent',
      });
      service.info('msg');
      expect(console.log).not.toHaveBeenCalled();
    });
  });

  describe('#debug()', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should log message when log level is silly', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silly',
      });
      service.debug('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should log message when log level is verbose', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'verbose',
      });
      service.debug('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should log message when log level is debug', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'debug',
      });
      service.debug('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should not log message when log level is info', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'info',
      });
      service.debug('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is warn', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'warn',
      });
      service.debug('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is error', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'error',
      });
      service.debug('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is silent', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silent',
      });
      service.debug('msg');
      expect(console.log).not.toHaveBeenCalled();
    });
  });

  describe('#verbose()', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should log message when log level is silly', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silly',
      });
      service.verbose('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should log message when log level is verbose', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'verbose',
      });
      service.verbose('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should not log message when log level is debug', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'debug',
      });
      service.verbose('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is info', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'info',
      });
      service.verbose('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is warn', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'warn',
      });
      service.verbose('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is error', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'error',
      });
      service.verbose('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is silent', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silent',
      });
      service.verbose('msg');
      expect(console.log).not.toHaveBeenCalled();
    });
  });

  describe('#silly()', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should log message when log level is silly', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silly',
      });
      service.silly('msg');
      expect(console.log).toHaveBeenCalled();
    });

    it('should not log message when log level is verbose', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'verbose',
      });
      service.silly('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is debug', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'debug',
      });
      service.silly('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is info', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'info',
      });
      service.silly('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is warn', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'warn',
      });
      service.silly('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is error', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'error',
      });
      service.silly('msg');
      expect(console.log).not.toHaveBeenCalled();
    });

    it('should not log message when log level is silent', () => {
      mockGetter(appConfigService, 'environment', {
        logLevel: 'silent',
      });
      service.silly('msg');
      expect(console.log).not.toHaveBeenCalled();
    });
  });
});
