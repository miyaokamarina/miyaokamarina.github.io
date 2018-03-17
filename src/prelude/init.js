import { always } from 'prelude/always';
import { curry } from 'prelude/curry';

import { isArray } from 'prelude/pred/isArray';
import { isString } from 'prelude/pred/isString';

import { match } from 'prelude/types/Match';

/**
 * Get all elements of an array except last
 *
 * TODO: Other indexed structures.
 *
 * @param {*} x target array
 * @returns {*}
 */
export const init = curry(x => match(x).of(
  [isArray, always(x.slice(0, -1))],
  [isString, always(x.slice(0, -1))],
).else(x));
