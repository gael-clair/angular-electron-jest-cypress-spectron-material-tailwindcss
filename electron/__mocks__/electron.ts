export const ipcMain = {
  on: jest.fn(),
  handle: jest.fn(),
  eventNames: jest.fn(),
};

export const ipcRenderer = {
  on: jest.fn(),
  invoke: jest.fn(),
  send: jest.fn(),
};

export const app = {
  getPath: jest.fn(),
};
export const contextBridge = {
  exposeInMainWorld: jest.fn(),
};
