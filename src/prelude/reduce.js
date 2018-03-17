import { curry } from 'prelude/curry';

import { isArray } from 'prelude/pred/isArray';
import { isFunctor } from 'prelude/pred/isFunctor';
import { isString } from 'prelude/pred/isString';

import { match } from 'prelude/types/Match';

// TODO: Transduce, reduce right, reduce while, reduce right while, reduced.

export const reduce = curry((f, r, xs) => match(xs).of(
  [isArray, () => xs.reduce((r$, a) => f(r$, a), r)],
  [isFunctor, () => xs.reduce(f, r)],
  [isString, () => [...xs].reduce((r$, a) => f(r$, a), r)],
).else(false));
