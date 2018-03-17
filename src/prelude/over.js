import { curry } from 'prelude/curry';
import { get } from 'prelude/get';
import { set } from 'prelude/set';

export const over = curry((l, f, x) => set(l, f(get(l, x)), x));
