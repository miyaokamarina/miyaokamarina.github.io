import { curry } from 'prelude/curry';

export const isUndefined = curry(x => typeof x === 'undefined');
