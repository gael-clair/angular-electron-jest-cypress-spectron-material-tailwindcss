import { Injectable } from '@angular/core';
import { RxCollection, RxCollectionCreator, RxJsonSchema } from 'rxdb';
import { DatabaseItem } from '../models';
import { DatabaseService } from './database.service';

/**
 * Electron database service.
 * Invokes methods on Electron to interact with a database, that could be persisted on file system.
 */
@Injectable()
export class ElectronDatabaseService extends DatabaseService {
  private readonly eventsApi = window.eventsApi;
  private readonly events = window.eventsApi.EVENTS.DATABASE;

  constructor() {
    super();
  }

  /**
   * @inheritDoc
   */
  get isLoaded$(): Promise<boolean> {
    return Promise.resolve(true);
  }

  /**
   * @inheritDoc
   */
  async createCollection<T extends DatabaseItem>(
    collectionName: string,
    schema: RxJsonSchema<T>,
    options?: Partial<RxCollectionCreator>,
  ): Promise<RxCollection> {
    return await this.eventsApi.invoke(this.events.IN.CREATE_COLLECTION, collectionName, schema, options);
  }

  /**
   * @inheritDoc
   */
  async create<T extends DatabaseItem>(collectionName: string, item: T): Promise<T> {
    return await this.eventsApi.invoke(this.events.IN.CREATE_ITEM, collectionName, item);
  }

  /**
   * @inheritDoc
   */
  async read<T extends DatabaseItem>(collectionName: string, id: string): Promise<T> {
    return await this.eventsApi.invoke(this.events.IN.READ_ITEM, collectionName, id);
  }

  /**
   * @inheritDoc
   */
  async update<T extends DatabaseItem>(collectionName: string, id: string, updates: any): Promise<T> {
    return await this.eventsApi.invoke(this.events.IN.UPDATE_ITEM, collectionName, id, updates);
  }

  /**
   * @inheritDoc
   */
  async delete<T extends DatabaseItem>(collectionName: string, id: string): Promise<T> {
    return await this.eventsApi.invoke(this.events.IN.DELETE_ITEM, collectionName, id);
  }

  /**
   * @inheritDoc
   */
  async list<T extends DatabaseItem>(collectionName: string): Promise<T[]> {
    return await this.eventsApi.invoke(this.events.IN.LIST_ITEMS, collectionName);
  }
}
