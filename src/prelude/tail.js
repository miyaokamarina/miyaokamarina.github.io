import { always } from 'prelude/always';
import { curry } from 'prelude/curry';
import { id } from 'prelude/id';

import { isArray } from 'prelude/pred/isArray';
import { isString } from 'prelude/pred/isString';

import { Match } from 'prelude/types/Match';
import { maybe } from 'prelude/types/Maybe';

/**
 * Get all elements of an array except first
 *
 * TODO: Other indexed structures.
 *
 * @param {*} x target array
 * @returns {*}
 */
export const tail = curry(x => maybe(x, id, Match(
  [isArray, always(x.slice(1))],
  [isString, always(x.slice(1))],
).run(x)));
