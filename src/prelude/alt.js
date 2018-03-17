import { always } from 'prelude/always';
import { curry } from 'prelude/curry';

import { isAlt } from 'prelude/pred/isAlt';

import { match } from 'prelude/types/Match';

// TODO: Define for arrays, plain objects and other structures.
// TODO: Alt for functions?
// TODO: Checks if Alts are same. Also checks for classes equality in other functions.

export const alt = curry((x, ...xs) => match(x, ...xs).of(
  [isAlt, () => xs.reduce((a, b) => a.alt(b), x)],
  [always(true), xs.reduce((a, b) => a || b, x)], // TODO: Use `or` function.
).else(x));
