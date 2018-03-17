import { curry } from 'prelude/curry';

export const isNumber = curry(x => typeof x === 'number' && !Number.isNaN(x));
