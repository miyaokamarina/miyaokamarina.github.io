import { curry } from 'prelude/curry';

export const isSafeInteger = curry(x => Number.isSafeInteger(x));
