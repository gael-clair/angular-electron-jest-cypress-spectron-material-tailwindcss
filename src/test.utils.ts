import Mock = jest.Mock;
import { Observable, of } from 'rxjs';

/**
 * Mocks getter or private property of given object.
 * @param obj object whose getter to be mocked
 * @param getterOrPropertyName getter or property name
 * @param returnValue value returned by the mock
 * @returns mock function of getter
 */
const mockGetterOrPrivateProperty = (obj: object, getterOrPropertyName: string, returnValue?: any): Mock => {
  const mockFcn = returnValue ? jest.fn(() => returnValue) : jest.fn();
  Object.defineProperty(obj, getterOrPropertyName, {
    get: mockFcn,
  });
  return mockFcn;
};

/**
 * Mocks getter of given object.
 * @param obj object whose getter to be mocked
 * @param getterName getter name
 * @returns mock function of getter
 */
export const mockGetter = mockGetterOrPrivateProperty;

/**
 * Mocks getter of given object.
 * @param obj object whose getter to be mocked
 * @param getterName getter name
 * @returns mock function of getter
 */
export const mockPrivateProperty = mockGetterOrPrivateProperty;

/**
 * Mocks an observable
 * @param obj object whose observable to be mocked
 * @param observableName observable name
 * @param value observable or value to be emitted by mock observable
 */
export function mockObservable(obj: object, observableName: string, value: any): Mock {
  const mockFcn = jest.fn();
  Object.defineProperty(obj, observableName, {
    value: value instanceof Observable ? value : of(value),
  });
  return mockFcn;
}
