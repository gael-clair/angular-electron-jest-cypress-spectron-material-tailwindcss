import { Injectable } from '@angular/core';
import * as pai from 'pouchdb-adapter-indexeddb';
import { addRxPlugin, createRxDatabase, RxDatabase } from 'rxdb';
import { AppConfigService } from './app-config.service';
import { DatabaseService } from './database.service';

/**
 * Database service in browser.
 * Database is an IndexedDB database in browser.
 */
@Injectable()
export class BrowserDatabaseService extends DatabaseService {
  private database: RxDatabase;

  constructor(private appConfigService: AppConfigService) {
    super();
  }

  /**
   * Inits an IndexedDB database.
   */
  async init(): Promise<void> {
    addRxPlugin(pai);
    this.database = await createRxDatabase({
      name: this.appConfigService.database.name || 'appdata',
      adapter: 'indexeddb',
    });
  }

  /**
   * @inheritDoc
   */
  async createCollection(collectionName: string, schema: any, options?: any): Promise<any> {
    if (!this.database[collectionName]) {
      options = Object.assign(
        {},
        {
          name: collectionName,
          schema,
        },
        options || {},
      );
      await this.database.collection(options);
    }
  }

  /**
   * @inheritDoc
   */
  async create(collectionName: string, item: any): Promise<any> {
    return (await this.database[collectionName].insert(item)).toJSON();
  }

  /**
   * @inheritDoc
   */
  async read(collectionName: string, id: any): Promise<any> {
    return (await this.database[collectionName].findOne(id).exec()).toJSON();
  }

  /**
   * @inheritDoc
   */
  async update(collectionName: string, id: any, updates: any): Promise<any> {
    return (await this.database[collectionName].findOne(id).update(updates)).toJSON();
  }

  /**
   * @inheritDoc
   */
  async delete(collectionName: string, id: any): Promise<any> {
    return (await this.database[collectionName].findOne(id).remove()).toJSON();
  }

  /**
   * @inheritDoc
   */
  async list(collectionName: string): Promise<any[]> {
    return (await this.database[collectionName].find().exec()).map((i) => i.toJSON());
  }
}
