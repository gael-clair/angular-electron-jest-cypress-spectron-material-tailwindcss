import { join } from 'path';
import { Application } from 'spectron';

jest.setTimeout(50000);

describe('Home', () => {
  let app: Application;

  beforeAll(() => {
    app = new Application({
      path: require('electron'),
      args: [join(__dirname, '../../electron/dist/main.js')],
      startTimeout: 10000,
      waitTimeout: 10000,
    });
    return app.start();
  });

  afterAll(() => {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  it('should open window', async () => {
    const count = await app.client.getWindowCount();
    expect(count).toEqual(1);
  });
});
