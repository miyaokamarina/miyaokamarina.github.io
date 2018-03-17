import { curry } from 'prelude/curry';

import { isArray } from 'prelude/pred/isArray';
import { isString } from 'prelude/pred/isString';

import { match } from 'prelude/types/Match';

export const every = curry((f, xs) => match(xs).of(
  [isArray, () => xs.every(f)],
  [isString, () => [...xs].every(f)],
).else(false));
