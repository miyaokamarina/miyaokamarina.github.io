import { curry } from 'prelude/curry';

export const isInfinity = curry(x => x === Infinity || x === -Infinity);
