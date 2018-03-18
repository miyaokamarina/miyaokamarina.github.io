import { curry } from 'prelude/curry';

export const comap = curry((f, g, fa) => fa.comap(f, g));
