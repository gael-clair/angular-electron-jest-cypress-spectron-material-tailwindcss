import { TechnicalError } from '@app/types';

/**
 * Checks if module has already been loaded once, if so, throws an error.
 * @param parentModule parent module
 * @param moduleName module name
 * @throws TechnicalError when module has been already loaded
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string): void {
  if (parentModule) {
    throw new TechnicalError(
      `${moduleName} has already been loaded. Import ${moduleName} module in the AppModule only.`,
    );
  }
}
