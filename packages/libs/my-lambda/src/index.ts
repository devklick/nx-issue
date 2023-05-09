import { someFunc } from '@myorg/my-lib';

export * from './lib/my-lambda';

export function handler() {
  return someFunc();
}
