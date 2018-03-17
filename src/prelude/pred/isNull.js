import { curry } from 'prelude/curry';

export const isNull = curry(x => x === null);
