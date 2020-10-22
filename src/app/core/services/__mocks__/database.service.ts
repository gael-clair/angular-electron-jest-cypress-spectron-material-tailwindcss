export class DatabaseService {
  createCollection = jest.fn().mockResolvedValue(undefined);
  create = jest.fn().mockResolvedValue({});
  list = jest.fn().mockResolvedValue([]);
  delete = jest.fn().mockResolvedValue({});
  read = jest.fn().mockResolvedValue({});
  update = jest.fn().mockResolvedValue({});
}
