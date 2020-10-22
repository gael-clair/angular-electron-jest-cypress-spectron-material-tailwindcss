/**
 * Checks if application is executed in Electron.
 * @returns true if executed in Electron.
 */
export function isElectron(): boolean {
  return !!(window && window.process && window.process.type);
}
