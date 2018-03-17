import { curry } from 'prelude/curry';

export const bimap = curry((f, g, fab) => fab.bimap(f, g));
