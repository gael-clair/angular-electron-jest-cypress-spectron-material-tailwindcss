export default {
  catchErrors: jest.fn(),
  transports: {
    console: {
      format: '',
    },
    file: {
      format: '',
    },
  },
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
  verbose: jest.fn(),
};
