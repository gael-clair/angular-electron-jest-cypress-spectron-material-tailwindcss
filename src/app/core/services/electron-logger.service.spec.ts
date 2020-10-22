import { TestBed } from '@angular/core/testing';
import { ElectronLoggerService } from './electron-logger.service';

describe('ElectronLoggerService', () => {
  let service: ElectronLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronLoggerService],
    });
    service = TestBed.inject(ElectronLoggerService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#error()', () => {
    it('should send LOG_MESSAGE event with error level to Electron', () => {
      service.error('test');
      expect(window.eventsApi.send).toHaveBeenCalledWith(
        window.eventsApi.EVENTS.LOGGER.IN.LOG_MESSAGE,
        'error',
        'test',
      );
    });
  });

  describe('#warn()', () => {
    it('should send LOG_MESSAGE event with warn level to Electron', () => {
      service.warn('test');
      expect(window.eventsApi.send).toHaveBeenCalledWith(window.eventsApi.EVENTS.LOGGER.IN.LOG_MESSAGE, 'warn', 'test');
    });
  });

  describe('#info()', () => {
    it('should send LOG_MESSAGE event with info level to Electron', () => {
      service.info('test');
      expect(window.eventsApi.send).toHaveBeenCalledWith(window.eventsApi.EVENTS.LOGGER.IN.LOG_MESSAGE, 'info', 'test');
    });
  });

  describe('#verbose()', () => {
    it('should send LOG_MESSAGE event with verbose level to Electron', () => {
      service.verbose('test');
      expect(window.eventsApi.send).toHaveBeenCalledWith(
        window.eventsApi.EVENTS.LOGGER.IN.LOG_MESSAGE,
        'verbose',
        'test',
      );
    });
  });

  describe('#debug()', () => {
    it('should send LOG_MESSAGE event with debug level to Electron', () => {
      service.debug('test');
      expect(window.eventsApi.send).toHaveBeenCalledWith(
        window.eventsApi.EVENTS.LOGGER.IN.LOG_MESSAGE,
        'debug',
        'test',
      );
    });
  });

  describe('#silly()', () => {
    it('should send LOG_MESSAGE event with silly level to Electron', () => {
      service.silly('test');
      expect(window.eventsApi.send).toHaveBeenCalledWith(
        window.eventsApi.EVENTS.LOGGER.IN.LOG_MESSAGE,
        'silly',
        'test',
      );
    });
  });
});
