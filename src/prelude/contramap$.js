import { curry } from 'prelude/curry';

export const contramap$ = curry((f, g, fa) => fa.contramap$(f, g));
