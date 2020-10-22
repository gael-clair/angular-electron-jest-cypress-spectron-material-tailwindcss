export const EVENTS: Events = {
  DATABASE: {
    OUT: {
      CONNECTION_OK: 'database-creation-ok',
      CONNECTION_ERROR: 'database-creation-error',
    },
    IN: {
      CREATE_ITEM: 'database-create-item',
      READ_ITEM: 'database-read-item',
      UPDATE_ITEM: 'database-update-item',
      DELETE_ITEM: 'database-delete-item',
      LIST_ITEMS: 'database-list-items',
      CREATE_COLLECTION: 'database-create-collection',
    },
  },
  LOGGER: {
    IN: {
      LOG_MESSAGE: 'log-message',
    },
  },
};
