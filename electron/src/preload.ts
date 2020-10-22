import { contextBridge, ipcRenderer } from 'electron';
import { EVENTS } from './events';

const IN_EVENTS = [];
const OUT_EVENTS = [];

Object.values(EVENTS).forEach((e) => {
  if (e['IN']) {
    IN_EVENTS.push(...Object.values(e['IN']));
  }
  if (e['OUT']) {
    OUT_EVENTS.push(...Object.values(e['OUT']));
  }
});

contextBridge.exposeInMainWorld('eventsApi', {
  send: (channel, ...data): void => {
    if (IN_EVENTS.includes(channel)) {
      ipcRenderer.send(channel, ...data);
    }
  },
  receive: (channel, cb): void => {
    if (OUT_EVENTS.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => cb(...args));
    }
  },
  invoke: async (channel, ...data): Promise<any> => {
    if (IN_EVENTS.includes(channel)) {
      return await ipcRenderer.invoke(channel, ...data);
    }
  },
  EVENTS,
});
