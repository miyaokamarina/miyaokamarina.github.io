import { curry } from 'prelude/curry';

export const chain = curry((f, fa) => fa.chain(f));
