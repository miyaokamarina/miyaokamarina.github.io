import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isArray } from 'prelude/pred/isArray';
import { isString } from 'prelude/pred/isString';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

export const some = curry((f, xs) => maybe(false, id, Match(
  [isArray, () => xs.some(f)],
  [isString, () => [...xs].some(f)],
).run(xs)));
