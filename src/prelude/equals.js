import { always } from 'prelude/always';
import { curry } from 'prelude/curry';

import { isSetoid } from 'prelude/pred/isSetoid';

import { match } from 'prelude/types/Match';

// TODO: Define for arrays, plain objects and other structures.

export const equals = curry((x, ...xs) => match(x, ...xs).of(
  [isSetoid, () => xs.reduce(({ r, a }, b) => r && a.equals(b), { r: true, a: x }).r],
  [always(true), () => xs.reduce(({ r, a }, b) => r && a === b, { r: true, a: x }).r],
).else(false));
