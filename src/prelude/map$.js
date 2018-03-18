import { curry } from 'prelude/curry';

export const map$ = curry((f, g, fa) => fa.map$(f, g));
