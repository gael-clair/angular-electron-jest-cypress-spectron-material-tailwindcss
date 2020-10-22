import { throwIfAlreadyLoaded } from './module-import.guard';

describe('throwIfAlreadyLoaded()', () => {
  it('should throw error if parent module is defined', () => {
    expect(() => throwIfAlreadyLoaded('parentModule', 'm')).toThrow(
      `m has already been loaded. Import m module in the AppModule only.`,
    );
  });

  it('should not throw error if parent module is undefined', () => {
    throwIfAlreadyLoaded(undefined, 'm');
  });
});
