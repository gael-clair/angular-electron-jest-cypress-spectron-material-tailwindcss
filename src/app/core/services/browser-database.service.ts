import { Injectable } from '@angular/core';
import { DatabaseItem } from '@app/core/models';
import * as pai from 'pouchdb-adapter-indexeddb';
import { addRxPlugin, createRxDatabase, RxCollection, RxCollectionCreator, RxDatabase, RxJsonSchema } from 'rxdb';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { AppConfigService } from './app-config.service';
import { DatabaseService } from './database.service';

/**
 * Database service in browser.
 * Database is an IndexedDB database in browser.
 */
@Injectable()
export class BrowserDatabaseService extends DatabaseService {
  private database: RxDatabase;
  private readonly loaded = new BehaviorSubject<boolean>(false);

  constructor(private appConfigService: AppConfigService) {
    super();
  }

  /**
   * @inheritDoc
   */
  get isLoaded$(): Promise<boolean> {
    return this.loaded.pipe(first((loaded) => loaded === true)).toPromise();
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
    this.loaded.next(true);
  }

  /**
   * @inheritDoc
   */
  async createCollection<T extends DatabaseItem>(
    collectionName: string,
    schema: RxJsonSchema<T>,
    options?: Partial<RxCollectionCreator>,
  ): Promise<RxCollection> {
    if (!this.database[collectionName]) {
      const opt = Object.assign(
        {},
        {
          name: collectionName,
          schema,
        },
        options || {},
      );
      return await this.database.collection(opt);
    }
  }

  /**
   * @inheritDoc
   */
  async create<T extends DatabaseItem>(collectionName: string, item: T): Promise<T> {
    return (await this.database[collectionName].insert(item)).toJSON();
  }

  /**
   * @inheritDoc
   */
  async read<T extends DatabaseItem>(collectionName: string, id: string): Promise<T> {
    return (await this.database[collectionName].findOne(id).exec()).toJSON();
  }

  /**
   * @inheritDoc
   */
  async update<T extends DatabaseItem>(collectionName: string, id: string, updates: any): Promise<T> {
    return (await this.database[collectionName].findOne(id).update(updates)).toJSON();
  }

  /**
   * @inheritDoc
   */
  async delete<T extends DatabaseItem>(collectionName: string, id: string): Promise<T> {
    return (await this.database[collectionName].findOne(id).remove()).toJSON();
  }

  /**
   * @inheritDoc
   */
  async list<T extends DatabaseItem>(collectionName: string): Promise<T[]> {
    return (await this.database[collectionName].find().exec()).map((i) => i.toJSON());
  }
}
