import { TestBed } from '@angular/core/testing';
import { ElectronDatabaseService } from './electron-database.service';
import Mock = jest.Mock;

describe('ElectronDatabaseService', () => {
  let service: ElectronDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronDatabaseService],
    });
    service = TestBed.inject(ElectronDatabaseService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#createCollection()', () => {
    it('should send CREATE_COLLECTION event to Electron', () => {
      service.createCollection('test', {});
      expect(window.eventsApi.invoke).toHaveBeenCalledWith(
        window.eventsApi.EVENTS.DATABASE.IN.CREATE_COLLECTION,
        'test',
        {},
        undefined,
      );
    });
  });

  describe('#create()', () => {
    it('should send CREATE_COLLECTION event to Electron', () => {
      service.create('test', {});
      expect(window.eventsApi.invoke).toHaveBeenCalledWith(window.eventsApi.EVENTS.DATABASE.IN.CREATE_ITEM, 'test', {});
    });

    it('should return created item', async () => {
      const created = {
        id: 'id',
      };
      (window.eventsApi.invoke as Mock).mockResolvedValue(created);
      const result = await service.create('test', {});
      expect(result).toBe(created);
    });
  });

  describe('#read()', () => {
    it('should send READ_ITEM event to Electron', () => {
      service.read('test', 'id');
      expect(window.eventsApi.invoke).toHaveBeenCalledWith(window.eventsApi.EVENTS.DATABASE.IN.READ_ITEM, 'test', 'id');
    });

    it('should return read item', async () => {
      const read = {
        id: 'id',
      };
      (window.eventsApi.invoke as Mock).mockResolvedValue(read);
      const result = await service.read('test', 'id');
      expect(result).toBe(read);
    });
  });

  describe('#update()', () => {
    it('should send UPDATE_ITEM event to Electron', () => {
      service.update('test', 'id', {});
      expect(window.eventsApi.invoke).toHaveBeenCalledWith(
        window.eventsApi.EVENTS.DATABASE.IN.UPDATE_ITEM,
        'test',
        'id',
        {},
      );
    });

    it('should return updated item', async () => {
      const updated = {
        id: 'id',
      };
      (window.eventsApi.invoke as Mock).mockResolvedValue(updated);
      const result = await service.update('test', 'id', {});
      expect(result).toBe(updated);
    });
  });

  describe('#delete()', () => {
    it('should send DELETE_ITEM event to Electron', () => {
      service.delete('test', 'id');
      expect(window.eventsApi.invoke).toHaveBeenCalledWith(
        window.eventsApi.EVENTS.DATABASE.IN.DELETE_ITEM,
        'test',
        'id',
      );
    });

    it('should return deleted item', async () => {
      const deleted = {
        id: 'id',
      };
      (window.eventsApi.invoke as Mock).mockResolvedValue(deleted);
      const result = await service.delete('test', 'id');
      expect(result).toBe(deleted);
    });
  });

  describe('#list()', () => {
    it('should send LIST_ITEMS event to Electron', () => {
      service.list('test');
      expect(window.eventsApi.invoke).toHaveBeenCalledWith(window.eventsApi.EVENTS.DATABASE.IN.LIST_ITEMS, 'test');
    });

    it('should return collection items', async () => {
      const items = [
        {
          id: 'id',
        },
      ];
      (window.eventsApi.invoke as Mock).mockResolvedValue(items);
      const result = await service.list('test');
      expect(result).toBe(items);
    });
  });
});
