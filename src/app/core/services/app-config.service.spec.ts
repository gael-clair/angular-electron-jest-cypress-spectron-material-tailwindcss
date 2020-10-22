import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { AppConfigService } from './app-config.service';

jest.mock('@app/env', () => ({
  environment: {
    production: false,
    logLevel: 'error',
  },
}));

describe('AppConfigService', () => {
  let httpTestingController: HttpTestingController;
  let service: AppConfigService;
  const environmentMock = {
    production: false,
    logLevel: 'error',
  };
  const configMock = {
    database: {
      db: 'test',
    },
    logging: {
      logger: 'test',
    },
  };

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AppConfigService);
  });

  afterEach(() => {
    httpTestingController.verify();
    TestBed.resetTestingModule();
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  describe('#loadAppConfig()', () => {
    it('should load config from ./assets/app.config.json', async (): Promise<void> => {
      const test = service.loadAppConfig().then(() => {
        expect(service.config).toMatchObject(configMock);
      });
      const req = httpTestingController.expectOne('./assets/app.config.json');
      expect(req.request.method).toEqual('GET');
      req.flush(configMock);
      return test;
    });

    it('should emit on loaded$ when config has been loaded', async (): Promise<void> => {
      service.loaded$.pipe(take(1)).subscribe((loaded) => expect(loaded).toBe(false));
      const call = service.loadAppConfig().then(() => {
        service.loaded$.pipe(take(1)).subscribe((loaded) => expect(loaded).toBeTruthy());
      });
      httpTestingController.expectOne('./assets/app.config.json').flush(configMock);
      return call;
    });
  });

  describe('#getters', () => {
    it('should return database config from loaded config', async (): Promise<void> => {
      const call = service.loadAppConfig().then(() => expect(service.database).toBe(configMock.database));
      httpTestingController.expectOne('./assets/app.config.json').flush(configMock);
      return call;
    });

    it('should return logging config from loaded config', async (): Promise<void> => {
      const call = service.loadAppConfig().then(() => expect(service.logging).toBe(configMock.logging));
      httpTestingController.expectOne('./assets/app.config.json').flush(configMock);
      return call;
    });

    it('should return app environment', (): Promise<void> => {
      const call = service.loadAppConfig().then(() => expect(service.environment).toEqual(environmentMock));
      httpTestingController.expectOne('./assets/app.config.json').flush(configMock);
      return call;
    });
  });
});
