import { curry } from 'prelude/curry';

export const define = curry((key, value, target) => {
  Reflect.defineProperty(target, key, {
    value,
    enumerable: false,
    configurable: false,
    writable: false,
  });
});
