import { curry } from 'prelude/curry';

export const isNan = curry(x => typeof x === 'number' && Number.isNaN(x));
