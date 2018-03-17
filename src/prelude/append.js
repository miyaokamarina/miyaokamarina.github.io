import { curry } from 'prelude/curry';

export const append = curry((x, xs) => [...xs, x]);
