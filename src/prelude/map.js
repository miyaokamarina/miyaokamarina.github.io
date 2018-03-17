import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isArray } from 'prelude/pred/isArray';
import { isFunctor } from 'prelude/pred/isFunctor';
import { isString } from 'prelude/pred/isString';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

// TODO: Define for functions.

export const map = curry((f, xs) => maybe(false, id, Match(
  [isArray, () => xs.map(x => f(x))],
  [isFunctor, () => xs.map(f)],
  [isString, () => [...xs].map(x => f(x)).join('')],
).run(xs)));
