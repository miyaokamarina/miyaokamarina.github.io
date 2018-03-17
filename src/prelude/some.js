import { curry } from 'prelude/curry';

import { isArray } from 'prelude/pred/isArray';
import { isString } from 'prelude/pred/isString';

import { match } from 'prelude/types/Match';

export const some = curry((f, xs) => match(xs).of(
  [isArray, () => xs.some(f)],
  [isString, () => [...xs].some(f)],
).else(false));
