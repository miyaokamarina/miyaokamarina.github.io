import { always } from 'prelude/always';
import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isAlt } from 'prelude/pred/isAlt';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

// TODO: Define for arrays, plain objects and other structures.
// TODO: Alt for functions?
// TODO: Checks if Alts are same. Also checks for classes equality in other functions.

export const alt = curry((x, ...xs) => maybe(x, id, Match(
  [isAlt, () => xs.reduce((a, b) => a.alt(b), x)],
  [always(true), xs.reduce((a, b) => a || b, x)],
).run(x, ...xs)));
