import { curry } from 'prelude/curry';

export const isArray = curry(x => x instanceof Array && x.length > 0);
