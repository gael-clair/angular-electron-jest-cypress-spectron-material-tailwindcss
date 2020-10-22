import { contextBridge, ipcRenderer } from 'electron';
import Mock = jest.Mock;

const EVENTS_MOCK = {
  EVENTS: {
    TEST: {
      IN: {
        TEST_IN: 'test-in',
      },
      OUT: {
        TEST_OUT: 'test-out',
      },
    },
  },
};
jest.mock('./events', () => EVENTS_MOCK);

describe('+preload', () => {
  beforeAll(() => {
    require('./preload');
  });

  it('should expose eventsApi', () => {
    expect(contextBridge.exposeInMainWorld).toHaveBeenCalledWith('eventsApi', expect.anything());
  });

  it('should expose send function in eventsApi', () => {
    expect((contextBridge.exposeInMainWorld as Mock).mock.calls[0][1].send).toBeInstanceOf(Function);
  });

  it('should expose receive function in eventsApi', () => {
    expect((contextBridge.exposeInMainWorld as Mock).mock.calls[0][1].receive).toBeInstanceOf(Function);
  });

  it('should expose invoke function in eventsApi', () => {
    expect((contextBridge.exposeInMainWorld as Mock).mock.calls[0][1].invoke).toBeInstanceOf(Function);
  });

  it('should expose EVENTS in eventsApi', () => {
    expect((contextBridge.exposeInMainWorld as Mock).mock.calls[0][1].EVENTS).toBe(EVENTS_MOCK.EVENTS);
  });

  describe('#send()', () => {
    afterEach(() => {
      (ipcRenderer.send as Mock).mockClear();
    });

    it('should call send on IpcRenderer if events is valid', () => {
      (contextBridge.exposeInMainWorld as Mock).mock.calls[0][1].send('test-in', {});
      expect(ipcRenderer.send).toHaveBeenCalledWith('test-in', {});
    });

    it('should not call send on IpcRenderer if events is not valid', () => {
      (contextBridge.exposeInMainWorld as Mock).mock.calls[0][1].send('not-valid', {});
      expect(ipcRenderer.send).not.toHaveBeenCalled();
    });
  });

  describe('#invoke()', () => {
    afterEach(() => {
      (ipcRenderer.invoke as Mock).mockClear();
    });

    it('should call invoke on IpcRenderer if events is valid', () => {
      (contextBridge.exposeInMainWorld as Mock).mock.calls[0][1].invoke('test-in', {});
      expect(ipcRenderer.invoke).toHaveBeenCalledWith('test-in', {});
    });

    it('should not call invoke on IpcRenderer if events is not valid', () => {
      (contextBridge.exposeInMainWorld as Mock).mock.calls[0][1].invoke('not-valid', {});
      expect(ipcRenderer.invoke).not.toHaveBeenCalled();
    });
  });

  describe('#receive()', () => {
    afterEach(() => {
      (ipcRenderer.on as Mock).mockClear();
    });

    it('should call on on IpcRenderer if events is valid', () => {
      (contextBridge.exposeInMainWorld as Mock).mock.calls[0][1].receive('test-out', {});
      expect(ipcRenderer.on).toHaveBeenCalledWith('test-out', expect.anything());
    });

    it('should not call on on IpcRenderer if events is not valid', () => {
      (contextBridge.exposeInMainWorld as Mock).mock.calls[0][1].receive('not-valid', {});
      expect(ipcRenderer.on).not.toHaveBeenCalled();
    });
  });
});
