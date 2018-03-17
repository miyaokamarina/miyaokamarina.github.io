import { always } from 'prelude/always';
import { curry } from 'prelude/curry';

import { isArray } from 'prelude/pred/isArray';
import { isString } from 'prelude/pred/isString';

import { match } from 'prelude/types/Match';

/**
 * Get last element of an array.
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
export const last = curry(x => match(x).of(
  [isArray, always(x[x.length - 1])],
  [isString, always(x[x.length - 1])],
).else(x));
