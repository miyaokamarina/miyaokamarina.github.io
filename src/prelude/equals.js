import { always } from 'prelude/always';
import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isSetoid } from 'prelude/pred/isSetoid';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

// TODO: Define for arrays, plain objects and other structures.

export const equals = curry((x, ...xs) => maybe(false, id, Match(
  [isSetoid, () => xs.reduce(({ r, a }, b) => r && a.equals(b), { r: true, a: x }).r],
  [always(true), () => xs.reduce(({ r, a }, b) => r && a === b, { r: true, a: x }).r],
).run(x, ...xs)));
