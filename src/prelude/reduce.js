import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isArray } from 'prelude/pred/isArray';
import { isFunctor } from 'prelude/pred/isFunctor';
import { isString } from 'prelude/pred/isString';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

// TODO: Transduce, reduce right, reduce while, reduce right while, reduced.

export const reduce = curry((f, r, xs) => maybe(false, id, Match(
  [isArray, () => xs.reduce((r$, a) => f(r$, a), r)],
  [isFunctor, () => xs.reduce(f, r)],
  [isString, () => [...xs].reduce((r$, a) => f(r$, a), r)],
).run(xs)));
