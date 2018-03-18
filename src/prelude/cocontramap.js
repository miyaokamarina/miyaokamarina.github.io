import { curry } from 'prelude/curry';

export const cocontramap = curry((f, g, fa) => fa.cocontramap(f, g));
