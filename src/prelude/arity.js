import { curry } from 'prelude/curry';

export const arity = curry((n, f) => {
  Reflect.defineProperty(f, 'length', { value: n });

  return f;
});
