import { curry } from 'prelude/curry';
import { type } from 'prelude/type';

/**
 * Create union
 *
 * @param {...Function[]} union$ union members.
 * @returns {Function => Function}
 */
export const union = curry((...union$) => type({ union: union$ }));
