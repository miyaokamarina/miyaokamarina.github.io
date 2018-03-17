import { always } from 'prelude/always';
import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isArray } from 'prelude/pred/isArray';
import { isString } from 'prelude/pred/isString';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

// TODO: Drop, drop last, drop while, drop last while, take, take last, take while, take last while, slice, append, prepend.

/**
 * Get first element of an array.
 *
 * TODO: Other indexed structures.
 *
 * NB:
 *     Any value treated as 1-array. Even empty array treated as 1-array with
 *     0-array as single value. So getting head of empty array returns this
 *     array itself.
 *
 * @param {*} x target array
 * @returns {*}
 */
export const head = curry(x => maybe(x, id, Match(
  [isArray, always(x[0])],
  [isString, always(x[0])],
).run(x)));
