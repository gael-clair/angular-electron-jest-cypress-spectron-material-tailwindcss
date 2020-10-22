import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { createDatabaseConnection } from './database';
import { LoggerFactory } from './logger';

function createWindow(): BrowserWindow {
  const log = LoggerFactory.getLogger('#createWindow');

  // creates window.
  const size = screen.getPrimaryDisplay().workAreaSize;
  const windowOptions = {
    center: true,
    width: size.width / 2,
    height: size.height / 2,
    webPreferences: {
      nodeIntegration: false,
      allowRunningInsecureContent: true,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.resolve(__dirname, 'preload.js'),
    },
  };
  log.debug('Opening windows with parameters:', windowOptions);
  let win = new BrowserWindow(windowOptions);

  // serves index.
  const serve = process.argv.slice(1).some((val) => val === '--serve');
  let index;
  if (serve) {
    log.debug('Serve option used => serving from external localhost server');
    win.webContents.openDevTools();
    require('electron-reload')(path.join(__dirname), {
      electron: path.join(__dirname, '../../node_modules/.bin/electron'),
      argv: ['--serve'],
    });
    index = 'http://localhost:4200';
  } else {
    log.debug(`No serve option used => serving '${index}' from filesystem`);
    index = url.format({
      pathname: path.join(__dirname, '../../src/dist/index.html'),
      protocol: 'file:',
      slashes: true,
    });
  }
  win.loadURL(index);

  // event handler on close window.
  win.on('closed', () => {
    log.debug(`Received 'closed' event => dereferencing window...`);
    win = null;
  });

  return win;
}

function main(): void {
  let win;
  const log = LoggerFactory.getLogger('#main');

  try {
    LoggerFactory.registerMainLogger();

    app.on('ready', () => {
      log.info(`Received 'ready' event => initializing application...`);

      // waits for all inits to be finished.
      Promise.all([createDatabaseConnection()])
        .then(() => {
          log.info('Application initialized, opening window...');
          setTimeout(() => {
            win = createWindow();
          }, 400);
        })
        .catch((err) => {
          log.error('Error during initialization, exiting application...', err);
          app.exit(2);
        });
    });

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        log.info(`Received 'window-all-closed' event => no more windows, exiting application...`);
        app.quit();
      } else {
        log.info(`Received 'window-all-closed' event => no more windows, but on OS X, app could stay active.`);
      }
    });

    app.on('activate', () => {
      if (win === null) {
        log.info(`Received 'activate' event => no windows, but on OS X, opening new window...`);
        createWindow();
      }
    });
  } catch (err) {
    log.error('Error during application start, exiting application...', err);
    app.exit(2);
  }
}

main();
