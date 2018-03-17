import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isApply } from 'prelude/pred/isApply';
import { isArray } from 'prelude/pred/isArray';
import { isString } from 'prelude/pred/isString';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

// TODO: Ap for functions?

/**
 * @sig ap :: Apply f => f (a -> b) -> f a -> f b
 * @sig ap :: [a -> b] -> [a] -> [b]
 * @sig ap :: [string -> string] -> string -> string
 */
export const ap = curry((fab, fa) => maybe(fa, id, Match(
  [isApply, () => fa.ap(fab)],
  [isArray, () => fab.reduce((r, ab) => [...r, ...fa.map(a => ab(a))], [])],
  [() => isArray(fab) && isString(fa), () => fab.reduce((r, ab) => [...r, ...[...fa].map(a => ab(a))], []).join('')],
).run(fab, fa)));
