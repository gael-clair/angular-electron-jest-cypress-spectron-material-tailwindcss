import { DatabaseItem } from '@app/core/models';
import { DatabaseService } from '@app/core/services';
import { nanoid } from 'nanoid';
import { RxCollection, RxJsonSchema } from 'rxdb';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Service to handle a data collection.
 */
export class DataService<T extends DatabaseItem> {
  /**
   * Data collection.
   * @protected
   */
  protected collection: RxCollection;

  /**
   * Collection items.
   * @protected
   */
  protected items = new BehaviorSubject<T[]>([]);

  /**
   * Observable on collection items.
   */
  get items$(): Observable<T[]> {
    return this.items.asObservable();
  }

  constructor(
    private readonly databaseService: DatabaseService,
    private readonly collectionName: string,
    private readonly schema: RxJsonSchema<T>,
    private readonly collectionOptions?: any,
  ) {}

  /**
   * Creates data collection and inits array of items.
   * @returns resolved when collection created
   */
  async createCollection(): Promise<void> {
    this.collection = await this.databaseService.createCollection<T>(
      this.collectionName,
      this.schema,
      this.collectionOptions,
    );
    this.collection.preInsert((item) => {
      if (!item.id) {
        item.id = nanoid();
      }
    }, false);
    this.items.next(await this.list());
  }

  /**
   * Creates an item in collection.
   * @param item item to create
   * @returns resolved with created item
   */
  create(item: T): Promise<T> {
    return this.databaseService.create<T>(this.collectionName, item).then((created: T) => {
      this.items.next([...this.items.getValue(), created]);
      return created;
    });
  }

  /**
   * Reads an item in collection.
   * @param id id of the item to read
   * @returns resolved with read item
   */
  read(id: string): Promise<T> {
    return this.databaseService.read<T>(this.collectionName, id);
  }

  /**
   * Updates item with given id.
   * @param id id of item to update
   * @param updates changes to make
   * @returns resolved with updated item
   */
  update(id: string, updates: any): Promise<T> {
    return this.databaseService.update<T>(this.collectionName, id, updates).then((updated: T) => {
      this.items.next([...this.items.getValue().filter((item: T) => item.id !== updated.id), updated]);
      return updated;
    });
  }

  /**
   * Deletes item with given id.
   * @param id id of item to delete
   * @returns resolved with deleted item
   */
  delete(id: string): Promise<T> {
    return this.databaseService.delete<T>(this.collectionName, id).then((deleted: T) => {
      this.items.next(this.items.getValue().filter((item) => deleted.id !== deleted.id));
      return deleted;
    });
  }

  /**
   * List items in collection.
   * @returns resolved with items of collection
   */
  list(): Promise<T[]> {
    return this.databaseService.list<T>(this.collectionName).then((items: T[]) => {
      this.items.next(items);
      return items;
    });
  }
}
