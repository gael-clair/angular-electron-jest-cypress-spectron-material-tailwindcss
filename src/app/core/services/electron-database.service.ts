import { Injectable } from '@angular/core';
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
  async createCollection(collectionName: string, schema: any, options?: any): Promise<void> {
    return await this.eventsApi.invoke(this.events.IN.CREATE_COLLECTION, collectionName, schema, options);
  }

  /**
   * @inheritDoc
   */
  async create(collectionName: string, item: any): Promise<any> {
    return await this.eventsApi.invoke(this.events.IN.CREATE_ITEM, collectionName, item);
  }

  /**
   * @inheritDoc
   */
  async read(collectionName: string, id: any): Promise<any> {
    return await this.eventsApi.invoke(this.events.IN.READ_ITEM, collectionName, id);
  }

  /**
   * @inheritDoc
   */
  async update(collectionName: string, id: any, updates: any): Promise<any> {
    return await this.eventsApi.invoke(this.events.IN.UPDATE_ITEM, collectionName, id, updates);
  }

  /**
   * @inheritDoc
   */
  async delete(collectionName: string, id: any): Promise<any> {
    return await this.eventsApi.invoke(this.events.IN.DELETE_ITEM, collectionName, id);
  }

  /**
   * @inheritDoc
   */
  async list(collectionName: string): Promise<any[]> {
    return await this.eventsApi.invoke(this.events.IN.LIST_ITEMS, collectionName);
  }
}
