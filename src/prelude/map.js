import { curry } from 'prelude/curry';

import { isArray } from 'prelude/pred/isArray';
import { isFunctor } from 'prelude/pred/isFunctor';
import { isString } from 'prelude/pred/isString';

import { match } from 'prelude/types/Match';

// TODO: Define for functions.

export const map = curry((f, fa) => match(fa).of(
  [isArray, () => fa.map(x => f(x))],
  [isFunctor, () => fa.map(f)],
  [isString, () => [...fa].map(x => f(x)).join('')],
).else(fa));
