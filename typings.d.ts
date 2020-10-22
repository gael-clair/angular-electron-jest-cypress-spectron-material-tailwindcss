interface InOutEvents {
  IN?: {
    [key: string]: string;
  };
  OUT?: {
    [key: string]: string;
  };
}

interface EventsApi {
  send: (channel, ...data) => void;
  receive: (channel, cb) => void;
  invoke: (channel, ...data) => Promise<any>;
  EVENTS: Events;
}

interface Window {
  process: any;
  eventsApi: EventsApi;
}

interface Events {
  [key: string]: InOutEvents;
}

type LogLevel = 'debug' | 'info' | 'silly' | 'verbose' | 'warn' | 'error';
