import { app, ipcMain } from 'electron';
import { join } from 'path';
import * as pal from 'pouchdb-adapter-leveldb';
import { addRxPlugin, createRxDatabase } from 'rxdb';
import { EVENTS } from './events';
import { LoggerFactory } from './logger';

/**
 * Creates database connection and adds IpcMain handlers for database interactions.
 */
export function createDatabaseConnection(): Promise<void> {
  const log = LoggerFactory.getLogger('#createDatabaseConnection');
  const databaseName = join(app.getPath('userData'), 'app-data');

  log.debug(`Creating database connection to '${databaseName}'...`);
  addRxPlugin(pal);
  return createRxDatabase({
    name: databaseName,
    adapter: require('leveldown'),
    multiInstance: false,
  }).then((db) => {
    log.debug('Database connection OK.');

    log.debug('Adding IpcMain handlers...');
    ipcMain.handle(EVENTS.DATABASE.IN.CREATE_COLLECTION, async (event, collectionName, schema, options?) => {
      if (!db[collectionName]) {
        options = Object.assign(
          {},
          {
            name: collectionName,
            schema,
          },
          options || {},
        );
        await db.collection(options);
      }
    });
    ipcMain.handle(EVENTS.DATABASE.IN.CREATE_ITEM, async (event, collectionName, item) => {
      return (await db[collectionName].insert(item)).toJSON();
    });
    ipcMain.handle(EVENTS.DATABASE.IN.READ_ITEM, async (event, collectionName, id) => {
      return (await db[collectionName].findOne(id).exec()).toJSON();
    });
    ipcMain.handle(EVENTS.DATABASE.IN.UPDATE_ITEM, async (event, collectionName, id, updates) => {
      return (await db[collectionName].findOne(id).update(updates)).toJSON();
    });
    ipcMain.handle(EVENTS.DATABASE.IN.DELETE_ITEM, async (event, collectionName, id) => {
      return (await db[collectionName].findOne(id).remove()).toJSON();
    });
    ipcMain.handle(EVENTS.DATABASE.IN.LIST_ITEMS, async (event, collectionName) => {
      return (await db[collectionName].find().exec()).map((i) => i.toJSON());
    });
    log.debug('IpcMain handlers added.');
  });
}
