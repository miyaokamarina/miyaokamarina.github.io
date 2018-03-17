import { always } from 'prelude/always';
import { curry } from 'prelude/curry';

import { isOrd } from 'prelude/pred/isOrd';

import { match } from 'prelude/types/Match';

// TODO: Define for arrays, plain objects and other structures.

export const lte = curry((x, ...xs) => match(x, ...xs).of(
  [isOrd, () => xs.reduce(({ r, a }, b) => r && a.lte(b), { r: true, a: x }).r],
  [always(true), () => xs.reduce(({ r, a }, b) => r && a <= b, { r: true, a: x }).r],
).else(false));
