import { app, ipcMain } from 'electron';
import { createRxDatabase } from 'rxdb';
import { createDatabaseConnection } from './database';
import { EVENTS } from './events';
import Mock = jest.Mock;

jest.mock('rxdb');
jest.mock('events');
jest.mock('./logger');

describe('createDatabaseConnection()', () => {
  const ipcMainMock = ipcMain.handle as Mock;
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

  beforeAll(() => {
    (createRxDatabase as Mock).mockResolvedValue({});
    (app.getPath as Mock).mockReturnValue('');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add event handler for CREATE_ITEM event', async () => {
    await createDatabaseConnection();
    expect(ipcMain.handle).toHaveBeenCalledWith(EVENTS.DATABASE.IN.CREATE_ITEM, expect.anything());
  });

  it('should add event handler for READ_ITEM event', async () => {
    await createDatabaseConnection();
    expect(ipcMain.handle).toHaveBeenCalledWith(EVENTS.DATABASE.IN.READ_ITEM, expect.anything());
  });

  it('should add event handler for UPDATE_ITEM event', async () => {
    await createDatabaseConnection();
    expect(ipcMain.handle).toHaveBeenCalledWith(EVENTS.DATABASE.IN.UPDATE_ITEM, expect.anything());
  });

  it('should add event handler for DELETE_ITEM event', async () => {
    await createDatabaseConnection();
    expect(ipcMain.handle).toHaveBeenCalledWith(EVENTS.DATABASE.IN.DELETE_ITEM, expect.anything());
  });

  it('should add event handler for LIST_ITEMS event', async () => {
    await createDatabaseConnection();
    expect(ipcMain.handle).toHaveBeenCalledWith(EVENTS.DATABASE.IN.LIST_ITEMS, expect.anything());
  });

  it('should add event handler for LIST_ITEMS event ', async () => {
    await createDatabaseConnection();
    expect(ipcMain.handle).toHaveBeenCalledWith(EVENTS.DATABASE.IN.LIST_ITEMS, expect.anything());
  });

  describe('#createCollection()', () => {
    let callback;

    beforeAll(() => {
      (createRxDatabase as Mock)
        .mockResolvedValueOnce({
          test: {},
          collection: collectionMock,
        })
        .mockResolvedValue({
          collection: collectionMock,
        });
    });

    beforeEach(async () => {
      await createDatabaseConnection();
      callback = ipcMainMock.mock.calls.find((c) => c[0] === EVENTS.DATABASE.IN.CREATE_COLLECTION)[1];
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should not create a new collection if a collection exists with same name', async () => {
      await callback(EVENTS.DATABASE.IN.CREATE_COLLECTION, 'test', {});
      expect(collectionMock).not.toHaveBeenCalled();
    });

    it('should create a new collection if no collection exists with same name', async () => {
      await callback(EVENTS.DATABASE.IN.CREATE_COLLECTION, 'test', {});
      expect(collectionMock).toHaveBeenCalledWith({
        name: 'test',
        schema: {},
      });
    });

    it('should create a new collection with given options', async () => {
      const options = {
        optionA: true,
        optionB: false,
      };
      await callback(EVENTS.DATABASE.IN.CREATE_COLLECTION, 'test', {}, options);
      expect(collectionMock).toHaveBeenCalledWith({
        name: 'test',
        schema: {},
        ...options,
      });
    });
  });

  describe('#create()', () => {
    let callback;

    beforeAll(() => {
      (createRxDatabase as Mock).mockResolvedValue({
        test: databaseMock,
      });
    });

    beforeEach(async () => {
      await createDatabaseConnection();
      callback = ipcMainMock.mock.calls.find((c) => c[0] === EVENTS.DATABASE.IN.CREATE_ITEM)[1];
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should create a new item in given collection and return it', async () => {
      const item = {
        name: 'test',
      };
      const createdItem = {
        id: 'id',
        ...item,
      };
      toJSONMock.mockReturnValue(createdItem);
      expect(await callback(EVENTS.DATABASE.IN.CREATE_ITEM, 'test', item)).toBe(createdItem);
      expect(databaseMock.insert).toHaveBeenCalledWith(item);
    });
  });

  describe('#read()', () => {
    let callback;

    beforeAll(() => {
      (createRxDatabase as Mock).mockResolvedValue({
        test: databaseMock,
      });
    });

    beforeEach(async () => {
      await createDatabaseConnection();
      callback = ipcMainMock.mock.calls.find((c) => c[0] === EVENTS.DATABASE.IN.READ_ITEM)[1];
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should read an item in given collection by its id', async () => {
      const id = 'test';
      const readItem = {
        id,
        test: 'test',
      };
      toJSONMock.mockReturnValue(readItem);
      expect(await callback(EVENTS.DATABASE.IN.READ_ITEM, 'test', id)).toBe(readItem);
      expect(databaseMock.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('#update()', () => {
    let callback;

    beforeAll(() => {
      (createRxDatabase as Mock).mockResolvedValue({
        test: databaseMock,
      });
    });

    beforeEach(async () => {
      await createDatabaseConnection();
      callback = ipcMainMock.mock.calls.find((c) => c[0] === EVENTS.DATABASE.IN.UPDATE_ITEM)[1];
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should update an item in given collection', async () => {
      const id = 'test';
      const updates = {
        test: 'test2',
      };
      const updatedItem = {
        id,
        test: 'test',
      };
      toJSONMock.mockReturnValue(updatedItem);
      expect(await callback(EVENTS.DATABASE.IN.UPDATE_ITEM, 'test', id, updates)).toBe(updatedItem);
      expect(databaseMock.findOne).toHaveBeenCalledWith(id);
      expect(findOneMock.update).toHaveBeenCalledWith(updates);
    });
  });

  describe('#delete()', () => {
    let callback;

    beforeAll(() => {
      (createRxDatabase as Mock).mockResolvedValue({
        test: databaseMock,
      });
    });

    beforeEach(async () => {
      await createDatabaseConnection();
      callback = ipcMainMock.mock.calls.find((c) => c[0] === EVENTS.DATABASE.IN.DELETE_ITEM)[1];
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should delete an item in given collection', async () => {
      const id = 'test';
      const deletedItem = {
        id,
        test: 'test',
      };
      toJSONMock.mockReturnValue(deletedItem);
      expect(await callback(EVENTS.DATABASE.IN.DELETE_ITEM, 'test', id)).toBe(deletedItem);
      expect(databaseMock.findOne).toHaveBeenCalledWith(id);
      expect(findOneMock.remove).toHaveBeenCalled();
    });
  });

  describe('#list()', () => {
    let callback;

    beforeAll(() => {
      (createRxDatabase as Mock).mockResolvedValue({
        test: databaseMock,
      });
    });

    beforeEach(async () => {
      await createDatabaseConnection();
      callback = ipcMainMock.mock.calls.find((c) => c[0] === EVENTS.DATABASE.IN.LIST_ITEMS)[1];
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

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
      toJSONMock.mockReturnValue(item);
      findMock.exec.mockReturnValue(items);
      expect(await callback(EVENTS.DATABASE.IN.LIST_ITEMS, 'test')).toContain(item);
      expect(databaseMock.find).toHaveBeenCalledWith();
    });
  });
});
