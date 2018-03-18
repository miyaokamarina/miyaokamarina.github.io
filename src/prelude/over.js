import { curry } from 'prelude/curry';
import { get } from 'prelude/get';
import { map } from 'prelude/map';
import { set } from 'prelude/set';

export const over = curry((lens, f, target) => set(lens, map(f, get(lens, target)), target));
