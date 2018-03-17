import { curry } from 'prelude/curry';

export const isRegexp = curry(x => x instanceof RegExp);
