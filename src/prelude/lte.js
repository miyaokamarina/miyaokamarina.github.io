import { always } from 'prelude/always';
import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isOrd } from 'prelude/pred/isOrd';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

// TODO: Define for arrays, plain objects and other structures.

export const lte = curry((x, ...xs) => maybe(false, id, Match(
  [isOrd, () => xs.reduce(({ r, a }, b) => r && a.lte(b), { r: true, a: x }).r],
  [always(true), () => xs.reduce(({ r, a }, b) => r && a <= b, { r: true, a: x }).r],
).run(x, ...xs)));
