import { curry } from 'prelude/curry';

export const isString = curry(x => typeof x === 'string' && x.length > 0);
