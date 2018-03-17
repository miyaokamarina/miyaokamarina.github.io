import { curry } from 'prelude/curry';

import { isSetter } from 'prelude/pred/isSetter';

import { match } from 'prelude/types/Match';

export const set = curry((l, v, x) => match(l).of([isSetter, () => l.set(v, x)]).else(x));
