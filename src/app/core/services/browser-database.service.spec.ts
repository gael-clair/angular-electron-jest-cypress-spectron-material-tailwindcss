import { TestBed } from '@angular/core/testing';
import { mockGetter, mockPrivateProperty } from '@test/utils';
import { createRxDatabase } from 'rxdb';
import { AppConfigService } from './app-config.service';
import { BrowserDatabaseService } from './browser-database.service';

jest.mock('./app-config.service');
jest.mock('rxdb');

describe('BrowserDatabaseService', () => {
  let service: BrowserDatabaseService;
  let appConfigService: AppConfigService;
  const databaseConfigMock = {
    name: 'test',
  };
  const collectionMock = jest.fn();
  const toJSONMock = jest.fn();
  const findOneMock = {
    exec: jest.fn().mockReturnValue({
      toJSON: toJSONMock,
    }),
    update: jest.fn().mockReturnValue({
      toJSON: toJSONMock,
    }),
    remove: jest.fn().mockReturnValue({
      toJSON: toJSONMock,
    }),
  };
  const findMock = {
    exec: jest.fn(),
  };
  const databaseMock = {
    insert: jest.fn().mockReturnValue({
      toJSON: toJSONMock,
    }),
    findOne: jest.fn(() => findOneMock),
    find: jest.fn(() => findMock),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppConfigService, BrowserDatabaseService],
    });
    appConfigService = TestBed.inject(AppConfigService);
    service = TestBed.inject(BrowserDatabaseService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#init()', () => {
    it('should create an IndexedDB database with default name', async () => {
      mockGetter(appConfigService, 'database').mockReturnValue({});
      await service.init();
      expect(createRxDatabase).toHaveBeenCalledWith({
        name: 'appdata',
        adapter: 'indexeddb',
      });
    });

    it('should create an IndexedDB database', async () => {
      mockGetter(appConfigService, 'database').mockReturnValue(databaseConfigMock);
      await service.init();
      expect(createRxDatabase).toHaveBeenCalledWith({
        name: databaseConfigMock.name,
        adapter: 'indexeddb',
      });
    });
  });

  describe('#createCollection()', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should create a new collection if no collection exists with same name', async () => {
      mockPrivateProperty(service, 'database').mockReturnValue({
        collection: collectionMock,
      });
      await service.createCollection('test', {});
      expect(collectionMock).toHaveBeenCalledWith({ name: 'test', schema: {} });
    });

    it('should not create a new collection if a collection exists with same name', async () => {
      mockPrivateProperty(service, 'database').mockReturnValue({
        test: {},
        collection: collectionMock,
      });
      await service.createCollection('test', {});
      expect(collectionMock).not.toHaveBeenCalled();
    });

    it('should create a new collection with given options', async () => {
      mockPrivateProperty(service, 'database').mockReturnValue({
        collection: collectionMock,
      });
      const options = {
        optionA: true,
        optionB: false,
      };
      await service.createCollection('test', {}, options);
      expect(collectionMock).toHaveBeenCalledWith({ name: 'test', schema: {}, ...options });
    });
  });

  describe('#create()', () => {
    it('should create a new item in given collection and return it', async () => {
      const item = {
        name: 'test',
      };
      const createdItem = {
        id: 'id',
        ...item,
      };
      mockPrivateProperty(service, 'database').mockReturnValue({
        test: databaseMock,
      });
      toJSONMock.mockReturnValue(createdItem);
      expect(await service.create('test', item)).toBe(createdItem);
      expect(databaseMock.insert).toHaveBeenCalledWith(item);
    });
  });

  describe('#read()', () => {
    it('should read an item in given collection by its id', async () => {
      const id = 'test';
      const readItem = {
        id,
        test: 'test',
      };
      mockPrivateProperty(service, 'database').mockReturnValue({
        test: databaseMock,
      });
      toJSONMock.mockReturnValue(readItem);
      expect(await service.read('test', id)).toBe(readItem);
      expect(databaseMock.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('#update()', () => {
    it('should update an item in given collection', async () => {
      const id = 'test';
      const updates = {
        test: 'test2',
      };
      const updatedItem = {
        id,
        test: 'test',
      };
      mockPrivateProperty(service, 'database').mockReturnValue({
        test: databaseMock,
      });
      toJSONMock.mockReturnValue(updatedItem);
      expect(await service.update('test', id, updates)).toBe(updatedItem);
      expect(databaseMock.findOne).toHaveBeenCalledWith(id);
      expect(findOneMock.update).toHaveBeenCalledWith(updates);
    });
  });

  describe('#delete()', () => {
    it('should delete an item in given collection', async () => {
      const id = 'test';
      const deletedItem = {
        id,
        test: 'test',
      };
      mockPrivateProperty(service, 'database').mockReturnValue({
        test: databaseMock,
      });
      toJSONMock.mockReturnValue(deletedItem);
      expect(await service.delete('test', id)).toBe(deletedItem);
      expect(databaseMock.findOne).toHaveBeenCalledWith(id);
      expect(findOneMock.remove).toHaveBeenCalled();
    });
  });

  describe('#list()', () => {
    it('should return all items of given collection', async () => {
      const item = {
        id: 'id',
        test: 'test',
      };
      const items = [
        {
          ...item,
          toJSON: toJSONMock,
        },
      ];
      mockPrivateProperty(service, 'database').mockReturnValue({
        test: databaseMock,
      });
      toJSONMock.mockReturnValue(item);
      findMock.exec.mockReturnValue(items);
      expect(await service.list('test')).toContain(item);
      expect(databaseMock.find).toHaveBeenCalled();
    });
  });
});
