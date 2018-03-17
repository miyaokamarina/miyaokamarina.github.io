import { curry } from 'prelude/curry';

/**
 * Like Haskell's `const` function
 *
 * @param {*} x target value
 * @returns {() => *}
 */
export const always = curry(x => () => x);
