import { curry } from 'prelude/curry';

export const promap$ = curry((f, g, f$, g$, fa) => fa.promap$(f, g, f$, g$));
