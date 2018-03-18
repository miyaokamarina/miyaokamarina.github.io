import { curry } from 'prelude/curry';

export const copromap = curry((f, g, f$, g$, fa) => fa.copromap(f, g, f$, g$));
