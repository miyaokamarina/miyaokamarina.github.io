import { arity } from 'prelude/arity';
import { curry } from 'prelude/curry';

export const flip = curry(f => curry(arity(f.length, function flipped(b, a, ...rest) {
  return f.call(this, a, b, ...rest); // eslint-disable-line
})));
