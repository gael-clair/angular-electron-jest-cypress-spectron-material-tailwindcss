import { RxCollection, RxCollectionCreator, RxJsonSchema } from 'rxdb';
import { DatabaseItem } from '../models';

/**
 * Base database service.
 * Abstract class is used instead of an interface so it can be used as by a provider.
 */
export abstract class DatabaseService {
  /**
   * Promise resolved when database connection is established.
   */
  abstract get isLoaded$(): Promise<boolean>;

  /**
   * Creates a new collection in database.
   * @param collectionName collection name
   * @param schema collection schema
   * @param options collection creation options
   */
  abstract async createCollection<T extends DatabaseItem>(
    collectionName: string,
    schema: RxJsonSchema<T>,
    options?: Partial<RxCollectionCreator>,
  ): Promise<RxCollection>;

  /**
   * Creates a new item in given collection.
   * @param collectionName collection name
   * @param item item to create
   * @returns created item
   */
  abstract async create<T extends DatabaseItem>(collectionName: string, item: T): Promise<T>;

  /**
   * Creates a new item in given collection.
   * @param collectionName collection name
   * @param item item to create
   * @returns created item
   */

  /**
   * Reads an item in given collection by its id.
   * @param collectionName collection name
   * @param id item id to read
   * @returns read item
   */
  abstract async read<T extends DatabaseItem>(collectionName: string, id: string): Promise<T>;

  /**
   * Updates an item in given collection.
   * @param collectionName collection name
   * @param id item id to update
   * @param updates updates to apply to item
   * @returns updated item
   */
  abstract async update<T extends DatabaseItem>(collectionName: string, id: string, updates: any): Promise<T>;

  /**
   * Deletes an item in given collection by its id.
   * @param collectionName collection name
   * @param id item id to delete
   * @returns deleted item
   */
  abstract async delete<T extends DatabaseItem>(collectionName: string, id: string): Promise<T>;

  /**
   * List all items in given collection.
   * @param collectionName collection name
   * @returns array of read items
   */
  abstract async list<T extends DatabaseItem>(collectionName: string): Promise<T[]>;
}
