/**
 * Base database service.
 * Abstract class is used instead of an interface so it can be used as by a provider.
 */
export abstract class DatabaseService {
  /**
   * Creates a new collection in database.
   * @param collectionName collection name
   * @param schema collection schema
   * @param options creation options
   */
  abstract async createCollection(collectionName: string, schema: any, options?: any): Promise<void>;

  /**
   * Creates a new item in given collection.
   * @param collectionName collection name
   * @param item item to create
   * @returns created item
   */
  abstract async create(collectionName: string, item: any): Promise<any>;

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
  abstract async read(collectionName: string, id: any): Promise<any>;

  /**
   * Updates an item in given collection.
   * @param collectionName collection name
   * @param id item id to update
   * @param updates updates to apply to item
   * @returns updated item
   */
  abstract async update(collectionName: string, id: any, updates: any): Promise<any>;

  /**
   * Deletes an item in given collection by its id.
   * @param collectionName collection name
   * @param id item id to delete
   * @returns deleted item
   */
  abstract async delete(collectionName: string, id: any): Promise<any>;

  /**
   * List all items in given collection.
   * @param collectionName collection name
   * @returns array of read items
   */
  abstract async list(collectionName: string): Promise<any[]>;
}
