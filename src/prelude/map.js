import { curry } from 'prelude/curry';

import { isArray } from 'prelude/pred/isArray';
import { isFunctor } from 'prelude/pred/isFunctor';
import { isString } from 'prelude/pred/isString';

import { match } from 'prelude/types/Match';

// TODO: Define for functions.

export const map = curry((f, xs) => match(xs).of(
  [isArray, () => xs.map(x => f(x))],
  [isFunctor, () => xs.map(f)],
  [isString, () => [...xs].map(x => f(x)).join('')],
).else(xs));
