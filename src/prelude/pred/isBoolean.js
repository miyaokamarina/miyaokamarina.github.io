import { curry } from 'prelude/curry';

export const isBoolean = curry(x => typeof x === 'boolean');
