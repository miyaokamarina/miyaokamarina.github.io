import { curry } from 'prelude/curry';

// TODO: Define for plain objects and other structures.
// TODO: Define for functions.

export const concat = curry((x, ...xs) => xs.reduce((a, b) => a.concat(b), x));
