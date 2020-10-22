export class LoggerService {
  error = jest.fn();
  warn = jest.fn();
  info = jest.fn();
  debug = jest.fn();
  verbose = jest.fn();
  silly = jest.fn();
}
